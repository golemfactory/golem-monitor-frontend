<template>
    <div v-show="!inSearchMode" class="aggregate">
        <div class="container">
            <HeadingWrapper heading="Aggregate" number="02" text="general golem.network statistics" />
            <div class="aggregate__top">
                <div class="aggregate__column">
                    <div class="aggregate__item">
                        <div class="aggregate__column-inner">CPU tasks requested:</div>
                        <div class="aggregate__column-inner"><b>{{dataValues.cpu_task_requested}}</b></div>
                    </div>
                    <div class="aggregate__item">
                        <div class="aggregate__column-inner">CPU tasks successes:</div>
                        <div class="aggregate__column-inner"><b>{{dataValues.cpu_task_successes}}</b></div>
                    </div>
                    <div class="aggregate__item">
                        <div class="aggregate__column-inner">CPU tasks failures:</div>
                        <div class="aggregate__column-inner"><b>{{dataValues.cpu_task_failures}}</b></div>
                    </div>
                </div>
                <div class="aggregate__column">
                    <div class="aggregate__item">
                        <div class="aggregate__column-inner">GPU tasks requested:</div>
                        <div class="aggregate__column-inner"><b>{{dataValues.gpu_task_requested}}</b></div>
                    </div>
                    <div class="aggregate__item">
                        <div class="aggregate__column-inner">GPU tasks successes:</div>
                        <div class="aggregate__column-inner"><b>{{dataValues.gpu_task_successes}}</b></div>
                    </div>
                    <div class="aggregate__item">
                        <div class="aggregate__column-inner">GPU tasks failures:</div>
                        <div class="aggregate__column-inner"><b>{{dataValues.gpu_task_failures}}</b></div>
                    </div>
                </div>
            </div>
            <div class="aggregate__bottom" v-if="btnOpened">
                <div class="aggregate__column">
                    <div class="aggregate__item">
                        <div class="aggregate__column-inner">computation_time_failure</div>
                        <div class="aggregate__column-inner"><b>{{dataValues.computation_time_failure}}</b></div>
                    </div>
                    <div class="aggregate__item">
                        <div class="aggregate__column-inner">computation_time_failure_avg</div>
                        <div class="aggregate__column-inner"><b>{{dataValues.computation_time_failure_avg}}</b></div>
                    </div>
                    <div class="aggregate__item">
                        <div class="aggregate__column-inner">computation_time_success</div>
                        <div class="aggregate__column-inner"><b>{{dataValues.computation_time_success}}</b></div>
                    </div>
                    <div class="aggregate__item">
                        <div class="aggregate__column-inner">computation_time_success_avg</div>
                        <div class="aggregate__column-inner"><b>{{dataValues.computation_time_success_avg}}</b></div>
                    </div>
                    <div class="aggregate__item">
                        <div class="aggregate__column-inner">metric_all_fails</div>
                        <div class="aggregate__column-inner"><b>{{dataValues.metric_all_fails}}</b></div>
                    </div>
                    <div class="aggregate__item">
                        <div class="aggregate__column-inner">metric_error</div>
                        <div class="aggregate__column-inner"><b>{{dataValues.metric_error}}</b></div>
                    </div>
                    <div class="aggregate__item">
                        <div class="aggregate__column-inner">metric_success</div>
                        <div class="aggregate__column-inner"><b>{{dataValues.metric_success}}</b></div>
                    </div>
                    <div class="aggregate__item">
                        <div class="aggregate__column-inner">metric_timeout</div>
                        <div class="aggregate__column-inner"><b>{{dataValues.metric_timeout}}</b></div>
                    </div>
                    <div class="aggregate__item">
                        <div class="aggregate__column-inner">rs_collected_results_cnt</div>
                        <div class="aggregate__column-inner"><b>{{dataValues.rs_collected_results_cnt}}</b></div>
                    </div>
                    <div class="aggregate__item">
                        <div class="aggregate__column-inner">rs_requested_subtasks_cnt</div>
                        <div class="aggregate__column-inner"><b>{{dataValues.rs_requested_subtasks_cnt}}</b></div>
                    </div>
                    <div class="aggregate__item">
                        <div class="aggregate__column-inner">rs_tasks_cnt</div>
                        <div class="aggregate__column-inner"><b>{{dataValues.rs_tasks_cnt}}</b></div>
                    </div>
                    <div class="aggregate__item">
                        <div class="aggregate__column-inner">rs_timed_out_subtasks_cnt</div>
                        <div class="aggregate__column-inner"><b>{{dataValues.rs_timed_out_subtasks_cnt}}</b></div>
                    </div>
                    <div class="aggregate__item">
                        <div class="aggregate__column-inner">rs_verified_results_cnt</div>
                        <div class="aggregate__column-inner"><b>{{dataValues.rs_verified_results_cnt}}</b></div>
                    </div>
                    <div class="aggregate__item">
                        <div class="aggregate__column-inner">rs_work_offers_cnt</div>
                        <div class="aggregate__column-inner"><b>{{dataValues.rs_work_offers_cnt}}</b></div>
                    </div>
                </div>
                <div class="aggregate__column">
                    <div class="aggregate__item">
                        <div class="aggregate__column-inner">rs_failed_cnt</div>
                        <div class="aggregate__column-inner"><b>{{dataValues.rs_failed_cnt}}</b></div>
                    </div>
                    <div class="aggregate__item">
                        <div class="aggregate__column-inner">rs_failed_subtasks_cnt</div>
                        <div class="aggregate__column-inner"><b>{{dataValues.rs_failed_subtasks_cnt}}</b></div>
                    </div>
                    <div class="aggregate__item">
                        <div class="aggregate__column-inner">rs_failed_total_time</div>
                        <div class="aggregate__column-inner"><b>{{dataValues.rs_failed_total_time}}</b></div>
                    </div>
                    <div class="aggregate__item">
                        <div class="aggregate__column-inner">rs_finished_ok_cnt</div>
                        <div class="aggregate__column-inner"><b>{{dataValues.rs_finished_ok_cnt}}</b></div>
                    </div>
                    <div class="aggregate__item">
                        <div class="aggregate__column-inner">rs_finished_ok_total_time</div>
                        <div class="aggregate__column-inner"><b>{{dataValues.rs_finished_ok_total_time}}</b></div>
                    </div>
                    <div class="aggregate__item">
                        <div class="aggregate__column-inner">rs_finished_task_cnt</div>
                        <div class="aggregate__column-inner"><b>{{dataValues.rs_finished_task_cnt}}</b></div>
                    </div>
                    <div class="aggregate__item">
                        <div class="aggregate__column-inner">rs_finished_with_failures_cnt</div>
                        <div class="aggregate__column-inner"><b>{{dataValues.rs_finished_with_failures_cnt}}</b></div>
                    </div>
                    <div class="aggregate__item">
                        <div class="aggregate__column-inner">rs_finished_with_failures_total_time</div>
                        <div class="aggregate__column-inner"><b>{{dataValues.rs_finished_with_failures_total_time}}</b></div>
                    </div>
                    <div class="aggregate__item">
                        <div class="aggregate__column-inner">rs_not_downloadable_subtasks_cnt</div>
                        <div class="aggregate__column-inner"><b>{{dataValues.rs_not_downloadable_subtasks_cnt}}</b></div>
                    </div>
                    <div class="aggregate__item">
                        <div class="aggregate__column-inner">subtasks_cnt</div>
                        <div class="aggregate__column-inner"><b>{{dataValues.subtasks_cnt}}</b></div>
                    </div>
                    <div class="aggregate__item">
                        <div class="aggregate__column-inner">tasks_error</div>
                        <div class="aggregate__column-inner"><b>{{dataValues.tasks_error}}</b></div>
                    </div>
                    <div class="aggregate__item">
                        <div class="aggregate__column-inner">tasks_requested</div>
                        <div class="aggregate__column-inner"><b>{{dataValues.tasks_requested}}</b></div>
                    </div>
                    <div class="aggregate__item">
                        <div class="aggregate__column-inner">tasks_timeout</div>
                        <div class="aggregate__column-inner"><b>{{dataValues.tasks_timeout}}</b></div>
                    </div>
                </div>
            </div>
            <div class="aggregate__btn" v-bind:class="{ opened: btnOpened }" v-on:click="btnOpened = !btnOpened"><span v-if="btnOpened">show less</span><span v-else>show more</span><img src="../assets/img/caret.png" alt="" /></div>
        </div>
    </div>
</template>

<script>
    import HeadingWrapper from '@/components/HeadingWrapper.vue'

    export default {
        name: 'Aggregate',
        components: {
            HeadingWrapper
        },
        props: ["dataValues"],
        data: function () {
            return {
                inSearchMode: false,
                btnOpened: false
            }
        },
        mounted() {
            var that = this;
            this.$root.$on('searchPhraseUpdate', function(search) {
                that.inSearchMode = Boolean(search);
            });
        }
    }
</script>

<style lang="scss">
    .aggregate {
        background-color: $color-main-light;
        padding: 60px 0;

        @media screen and (max-width: 767px) {
            padding: 40px 0;
        }

        &__top {
            display: flex;
            margin-bottom: 60px;

            @media screen and (max-width: 1180px) {
                flex-wrap: wrap;
            }

            @media screen and (max-width: 767px) {
                margin-bottom: 30px;
            }
        }

        &__bottom {
            display: flex;
            margin-bottom: 60px;

            @media screen and (max-width: 1180px) {
                flex-wrap: wrap;
            }

            @media screen and (max-width: 767px) {
                margin-bottom: 30px;
            }
        }

        &__column {
            width: $col-6 ;
            font-size: 15px;

            @media screen and (max-width: 1180px) {
                width: 100%;
                font-size: 15px;
            }

            @media screen and (max-width: 767px) {
                font-size: 14px;
            }
        }

        &__item {
            display: flex;
            margin-bottom: 20px;

            @media screen and (max-width: 1180px) {
                width: 100%;
            }

            @media screen and (max-width: 767px) {
                justify-content: space-between;
            }
        }

        &__column-inner {
            width: $col-6;
            overflow: auto;
            margin-right: 2vh;
            scrollbar-width: thin;

            @media screen and (max-width: 767px) {
                width: auto;
            }

            &:nth-child(2) {
                @media screen and (max-width: 767px) {
                    text-align: right;
                }
            }
        }

        &__btn {
            display: flex;
            align-items: center;
            cursor: pointer;
            text-transform: uppercase;
            letter-spacing: 0.2em;
            font-family: $font-secondary;
            span, img {
                transition: all .3s ease;
            }
            &:hover {
                span {
                    transform: translateY(-5px);
                }
                img {
                    transform: translateY(5px);
                }
            }
            &.opened {
                img {
                    transform: rotate(180deg);
                }
            }

            img {
                display: inline-block;
                margin-left: 15px;
                margin-top: -8px;
            }
        }

        ::-webkit-scrollbar-track {
            background-color: $color-white;
        }
    }
</style>
