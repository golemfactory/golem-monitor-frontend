<template>
    <div>
        <div class="container">
            <div class="top">
                <img class="top__logo" src="../assets/img/golem-logo.png" alt="logo">
                <h1 class="top__heading">Simple<br/>golem.network<br />statistics page</h1>
            </div>
            <div class="form">
                <div class="form__search">
                    <input type="text" placeholder="FIND YOUR NODE" v-model="search" v-on:keyup="onSearchType">
                </div>
                <div class="form__btns">
                    <div class="form__btn" v-on:click="onRefresh"><img class="form__refresh-img" src="../assets/img/Refresh.svg" alt="" /> force refresh</div>
                    <a class="form__btn" href="/golem.network.statistics.csv"><img class="form__export-img" src="../assets/img/Export.svg" alt="" /> csv export</a>
                </div>
            </div>
            <HeadingWrapper v-show="!inSearchMode" heading="Global network data" number="01" text="total current golem.network data" />
            <div v-show="!inSearchMode" class="details">
                <div class="details__item">
                    <span>Nodes: <b>{{dataValues.nodes}}</b></span>
                </div>
                <div class="details__item">
                    <span>Cores: <b>{{dataValues.cores}}</b></span>
                </div>
                <div class="details__item">
                    <span>Ram (Gb): <b>{{dataValues.ram}}</b></span>
                </div>
                <div class="details__item">
                    <span>GPU Cores: <b>{{dataValues.gpu_cores}}</b></span>
                </div>
                <div class="details__item">
                    <span>Disk (Gb): <b>{{dataValues.hdd}}</b></span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import HeadingWrapper from '@/components/HeadingWrapper.vue';
    export default {
        name: 'Top',
        props: ["dataValues"],
        components: {
            HeadingWrapper
        },
        data() {
            return {
                search: "",
                inSearchMode: false,
            }
        },
        methods: {
            onRefresh: function() {
                 this.$root.$emit('updateData');
            },
            onSearchType: function() {
                this.$root.$emit('searchPhraseUpdate', this.search);
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
    .top {
        padding: 60px 0;
        display: flex;
        justify-content: space-between;
        align-items: flex-start;

        &__logo {
            width: 169px;

            @media screen and (max-width: 767px) {
                width: 110px;
            }
        }
        &__heading {
            width:  calc(100% - 180px);
            text-align: right;
            font-weight: 800;

            @media screen and (max-width: 767px) {
                width: 100%;
            }
        }

        @media screen and (max-width: 767px) {
            flex-wrap: wrap;
            padding: 20px 0;
        }
    }

    .form {
        padding: 20px 0;
        margin-bottom: 75px;
        display: flex;
        justify-content: space-between;
        align-items: center;

        @media screen and (max-width: 1180px) {
            flex-wrap: wrap;
            justify-content: flex-end;
        }

        @media screen and (max-width: 767px) {
            margin-bottom: 30px;
        }

        &__search {
            width: calc(50% - 30px);
            position: relative;

            @media screen and (max-width: 1300px) {
                width: 40%;
            }

            @media screen and (max-width: 1180px) {
                width: 100%;
                margin-bottom: 40px;
            }

            input {
                font-family: $font-secondary;
                text-transform: uppercase;
                letter-spacing: 0.2em;
                color: $color-main;
            }

            &:after {
                content: "";
                background: url('../assets/img/Search.svg') no-repeat;
                background-size: contain;
                width: 25px;
                height: 26px;
                position: absolute;
                top: 50%;
                right: 30px;
                transform: translateY(-50%);
                z-index: -1;
            }
        }

        &__btns {
            display: flex;
            justify-content: space-between;
            text-transform: uppercase;
            font-family: $font-secondary;
            letter-spacing: 0.2em;

            @media screen and (max-width: 767px) {
                width: 100%;
                justify-content: space-between;
            }
        }

        &__btn {
            display: flex;
            align-items: center;
            text-transform: uppercase;
            margin-right: 100px;
            cursor: pointer;

            @media screen and (max-width: 1400px) {
                margin-right: 60px;
            }

            @media screen and (max-width: 767px) {
                margin-right: 0;
                width: 50%;
            }

            &:last-child {
                margin-right: 0;
            }

            img {
                margin-right: 20px;
                margin-top: -6px;
            }
        }

        &__refresh-img {
            width: 43px;
            height: 34px;
        }

        &__export-img {
            width: 36px;
            height: 34px;
        }
    }

    .details {
        padding: 20px 0;
        margin-bottom: 30px;
        display: flex;
        font-size: 15px;

        @media screen and (max-width: 1180px) {
            font-size: 15px;
            flex-wrap: wrap;
        }

        @media screen and (max-width: 767px) {
            padding: 0;
        }

        &__item {
            width: $col-2;

            @media screen and (max-width: 1180px) {
                width: 25%;
                margin-bottom: 30px;
            }

            @media screen and (max-width: 767px) {
                width: 50%;
                margin-bottom: 15px;
            }
        }
    }
</style>
