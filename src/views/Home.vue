<template>
    <div class="home">
        <Top :dataValues="data_global"/>
        <!--Aggregate :dataValues="data_aggregate"/-->
        <Nodes :nodes="data_nodes"/>
        <FooterComponent />
    </div>
</template>

<script>
    import Top from '@/components/Top.vue';
    //import Aggregate from '@/components/Aggregate.vue';
    import Nodes from '@/components/Nodes.vue';
    import FooterComponent from '@/components/FooterComponent';
    import axios from 'axios'
    import _ from 'underscore'

    var data_global = {
        nodes: "",
        cores: "",
        ram: "",
        gpu_cores: "",
        hdd: ""
    };

    var data_aggregate = {
        "cpu_task_requested": "",
        "cpu_task_successes": "",
        "cpu_task_failures": "",
        "gpu_task_requested": "",
        "gpu_task_successes": "",
        "gpu_task_failures": "",
        "computation_time_failure": "",
        "computation_time_failure_avg": "",
        "computation_time_success": "",
        "computation_time_success_avg": "",
        "metric_all_fails": "",
        "metric_error": "",
        "metric_success": "",
        "metric_timeout": "",
        "rs_collected_results_cnt": "",
        "rs_failed_cnt": "",
        "rs_failed_subtasks_cnt": "",
        "rs_failed_total_time": "",
        "rs_finished_ok_cnt": "",
        "rs_finished_ok_total_time": "",
        "rs_finished_task_cnt": "",
        "rs_finished_with_failures_cnt": "",
        "rs_finished_with_failures_total_time": "",
        "rs_not_downloadable_subtasks_cnt": "",
        "rs_requested_subtasks_cnt": "",
        "rs_tasks_cnt": "",
        "rs_timed_out_subtasks_cnt": "",
        "rs_verified_results_cnt": "",
        "rs_work_offers_cnt": "",
        "subtasks_cnt": "",
        "tasks_error": "",
        "tasks_requested": "",
        "tasks_timeout": ""
    };

    var data_nodes = [];

    export default {
        name: 'Home',
        components: {
            Top,
            //Aggregate,
            Nodes,
            FooterComponent
        },
        data() {
            return {
                data_global: data_global,
                data_aggregate: data_aggregate,
                data_nodes: data_nodes
            }
        },
        mounted() {
            this.updateData();
            var that = this;
            setInterval(function() {
                that.updateData();
            }, 15000)

            this.$root.$on('updateData', function() {
                that.updateData();
            });
        },

        methods: {
            updateData: function() {
                axios
                .get('/v1/nodes')
                .then((response) => {
                    data_nodes.length = 0;
                    let date_now = new Date().getTime();
                    _.each(response.data, function(node) {
                        let time_diff = (date_now - parseInt(node.timestamp)) / 1000;
                        node.last_seen = '' + time_diff.toFixed(0) + ' s';
                        if (!node.node_name) node.node_name = "(Anonymous)";
                        data_nodes.push(node);
                    });
                    data_global.nodes = data_nodes.length;
                    data_global.cores = _.reduce(data_nodes, function(memo, val) {
                        return memo + (!val.num_cores ? 0 : parseInt(val.num_cores));
                    }, 0);
                    data_global.ram = (_.reduce(data_nodes, function(memo, val) {
                        return memo + (!val.max_memory_size ? 0 : parseInt(val.max_memory_size));
                    }, 0) / 1024 / 1024 / 1024).toFixed(2);
                    data_global.hdd = (_.reduce(data_nodes, function(memo, val) {
                        return memo + (!val.max_resource_size ? 0 : parseInt(val.max_resource_size));
                    }, 0) / 1024 / 1024 / 1024).toFixed(2);
                })
            }
        },
    }
</script>
