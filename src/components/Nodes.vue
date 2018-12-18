<template>
    <div class="nodes" v-bind:class="{ nopadding: inSearchMode }">
        <div class="container" v-show="!inSearchMode">
            <HeadingWrapper heading="Nodes in the network" number="02" text="node list" />
        </div>
        <div class="nodes__wrapper">

            <div class="nodes__item">
                <div class="nodes__row nodes__row--first">
                    <div class="nodes__container">
                        <div class="nodes__part">Node name</div>
                        <div class="nodes__part">Node ID</div>
                        <div class="nodes__part">Network</div>
                        <div class="nodes__part">Version</div>
                        <div class="nodes__part">IP</div>
                        <div class="nodes__part">Computed tasks</div>
                        <div class="nodes__part">Requested task</div>
                        <div class="nodes__part">Last seen</div>
                    </div>
                </div>
            </div>



            <div v-for="node in filteredList" :key="node.id" class="nodes__item" v-on:click="openMore">
                <div class="nodes__row">
                    <div class="nodes__container">
                        <div class="nodes__part">
                            <span class="nodes__name-mobile">Node name</span>
                            <span class="nodes__part-text">{{node.node_name}}</span>
                        </div>
                        <div class="nodes__part">
                            <span class="nodes__name-mobile">Node ID</span>
                            <span class="nodes__part-text">{{node.cliid}}</span>
                        </div>
                        <div class="nodes__part">
                            <span class="nodes__name-mobile">Network</span>
                            <span class="nodes__part-text">{{node.net}}</span>
                        </div>
                        <div class="nodes__part">
                            <span class="nodes__name-mobile">Version</span>
                            <span class="nodes__part-text">{{node.version}}</span>
                        </div>
                        <div class="nodes__part">
                            <span class="nodes__name-mobile">IP</span>
                            <span class="nodes__part-text">{{node.ip}}</span>
                        </div>
                        <div class="nodes__part">
                            <span class="nodes__name-mobile">Computed tasks</span>
                            <span class="nodes__part-text">{{node.completed}}</span>
                        </div>
                        <div class="nodes__part">
                            <span class="nodes__name-mobile">Requested tasks</span>
                            <span class="nodes__part-text">{{node.tasks_requested}}</span>
                        </div>
                        <div class="nodes__part">
                            <span class="nodes__name-mobile">Last seen</span>
                            <span class="nodes__part-text">{{node.timestamp}}</span>
                        </div>
                    </div>
                </div>
                <div class="nodes-more">
                    <div class="container">
                        <div class="nodes-more__top">
                            <div class="nodes-more__heading">Nodes</div>
                            <div class="nodes-more__close" v-on:click="closeMore"><img src="../assets/img/Close.svg" alt="" /></div>
                        </div>
                        <div class="nodes-more__bottom">
                            <div class="nodes-more__column">
                            <div class="nodes-more__item">
                                <div class="nodes-more__column-inner"><b>Node name</b></div>
                                <div class="nodes-more__column-inner">{{node.node_name}}</div>
                            </div>
                            <div class="nodes-more__item">
                                <div class="nodes-more__column-inner"><b>Operating system</b></div>
                                <div class="nodes-more__column-inner">{{node.system}}</div>
                            </div>
                            <div class="nodes-more__item">
                                <div class="nodes-more__column-inner"><b>CPU cores</b></div>
                                <div class="nodes-more__column-inner">{{node.cpu_cores}}</div>
                            </div>
                            <div class="nodes-more__item">
                                <div class="nodes-more__column-inner"><b>RAM</b></div>
                                <div class="nodes-more__column-inner">{{node.ram}}</div>
                            </div>
                            <div class="nodes-more__item">
                                <div class="nodes-more__column-inner"><b>Disk</b></div>
                                <div class="nodes-more__column-inner">{{node.hdd}}</div>
                            </div>
                        </div>
                        <div class="nodes-more__column">
                            <div class="nodes-more__item">
                                <div class="nodes-more__column-inner"><b>Requested tasks</b></div>
                                <div class="nodes-more__column-inner">{{node.requested_tasks}}</div>
                            </div>
                            <div class="nodes-more__item">
                                <div class="nodes-more__column-inner"><b>Finished tasks</b></div>
                                <div class="nodes-more__column-inner">{{node.rs_finished_task_cnt}}</div>
                            </div>
                            <div class="nodes-more__item">
                                <div class="nodes-more__column-inner"><b>Requested subtasks</b></div>
                                <div class="nodes-more__column-inner">{{node.rs_requested_subtasks_cnt}}</div>
                            </div>
                            <div class="nodes-more__item">
                                <div class="nodes-more__column-inner"><b>Collected results</b></div>
                                <div class="nodes-more__column-inner">{{node.rs_collected_results_cnt}}</div>
                            </div>
                            <div class="nodes-more__item">
                                <div class="nodes-more__column-inner"><b>Verified results</b></div>
                                <div class="nodes-more__column-inner">{{node.rs_verified_results_cnt}}</div>
                            </div>
                        </div>
                        <div class="nodes-more__column">
                            <div class="nodes-more__item">
                                <div class="nodes-more__column-inner"><b>Timed out subtasks</b></div>
                                <div class="nodes-more__column-inner">{{node.rs_timed_out_subtasks_cnt}}</div>
                            </div>
                            <div class="nodes-more__item">
                                <div class="nodes-more__column-inner"><b>Not downloadable subtasks</b></div>
                                <div class="nodes-more__column-inner">{{node.rs_not_downloadable_subtasks_cnt}}</div>
                            </div>
                            <div class="nodes-more__item">
                                <div class="nodes-more__column-inner"><b>Failed subtasks</b></div>
                                <div class="nodes-more__column-inner">{{node.rs_failed_subtasks_cnt}}</div>
                            </div>
                            <div class="nodes-more__item">
                                <div class="nodes-more__column-inner"><b>Work offers</b></div>
                                <div class="nodes-more__column-inner">{{node.rs_work_offers_cnt}}</div>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>

            <div class="nodes-empty-msg nodes__container" v-show="filteredList.length==0">Empty nodes list</div>

        </div>
    </div>
</template>

<script>
    import HeadingWrapper from '@/components/HeadingWrapper.vue'

    export default {
        name: 'NodesTable',
        components: {
            HeadingWrapper
        },
        props: ["nodes"],
        data: function () {
            return {
                btnOpened: false,
                inSearchMode: false,
                search: ""
            }
        },
        methods: {
            openMore: function (e) {
                var elem = e.target;
                var item = elem.closest('.nodes__item');
                var nodes = document.querySelectorAll('.nodes__item');

                nodes.forEach(node => {
                    node.classList.remove('opened');
                })

                if (!item.classList.contains('opened')) {
                    item.classList.add('opened');
                }
            },
            closeMore: function (e) {
                e.stopPropagation();
                var nodes = document.querySelectorAll('.nodes__item');

                nodes.forEach(node => {
                    node.classList.remove('opened');
                })
            }
        },
        computed: {
            filteredList() {
                return this.nodes.filter(node => {
                  return node.node_name.toLowerCase().includes(this.search.toLowerCase())
                })
            }
        },
        mounted() {
            var that = this;
            this.$root.$on('searchPhraseUpdate', function(search) {
                that.search = search;
            });
            this.$root.$on('searchPhraseUpdate', function(search) {
                that.inSearchMode = Boolean(search);
            });
        }
    }
</script>

<style lang="scss">
    .nodes {
        background-color: $color-main-light;
        padding: 60px 0;
        &.nopadding {
            padding-top: 0;
        }
        &-empty-msg {
            font-size: 18px;
        }
        @media screen and (max-width: 1180px) {
            font-size: 15px;
        }

        @media screen and (max-width: 767px) {
            font-size: 14px;
            padding: 40px 0;
        }

        &__row:not(.nodes__row--first) {
            margin-top: -1px;
            cursor: pointer;
            transition: all .3s ease;
            &:hover {
                background-color: $color-main;
                color: $color-white;
            }
        }

        &__row--first {
            font-weight: bold;
            cursor: auto;

            @media screen and (max-width: 1180px) {
                display: none;
            }
        }

        &__container {
            @extend .container;
            display: flex;
            padding: 30px 0;
            border-bottom: solid 1px $color-main;

            @media screen and (max-width: 1180px) {
                flex-wrap: wrap;
            }

            @media screen and (max-width: 767px) {
                padding: 20px 0;
            }
        }

        &__part {
            width: 12.5%;
            overflow: auto;
            margin-right: 2vw;
            display: flex;

            @media screen and (max-width: 1180px) {
                width: 50%;
                margin-right: 0;
                padding-right: 2vw;
                justify-content: space-between;
            }

            @media screen and (max-width: 767px) {
                width: 100%;
            }
        }

        &__name-mobile {
            width: 50%;
            padding-right: 2vw;
            font-weight: bold;
            display: none;

            @media screen and (max-width: 1180px) {
                display: block;
            }
        }

        &__part-text {
            @media screen and (max-width: 1180px) {
                width: 50%;
            }
            text-overflow: ellipsis;
            overflow: hidden;
        }

        &__item {
            &.opened {
                .nodes-more {
                    display: block;
                }
            }
        }
    }

    .nodes-more {
        padding: 60px 0;
        background-color: $color-main;
        color: $color-white;
        display: none;
        margin-top: -1px;

        &__top {
            display: flex;
            justify-content: space-between;
            margin-bottom: 50px;
        }

        &__close {
            cursor: pointer;
            width: 29px;
            height: 28px;
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
            width: $col-4;
            font-size: 16px;

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

        ::-webkit-scrollbar-track {
            background-color: $color-black;
        }

        ::-webkit-scrollbar-thumb {
          background-color: $color-main-light;
        }
    }
</style>
