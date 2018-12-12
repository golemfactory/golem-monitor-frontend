<template>
    <footer class="footer">
        <div class="container">
            <div class="footer__wrapper">
                <div class="footer__copyright">Copyright © 2018 Golem Factory GmbH</div>
                <div class="footer__right">
                    <a class="footer__btn" href="https://golem.network">golem.network</a>
                    <a class="footer__btn" href="http://chat.golem.network/">CHAT.golem.network</a>
                </div>
            </div>
        </div>
    </footer>
</template>

<script>
    export default {
        name: 'FooterComponent'
    }
</script>

<style lang="scss">
    .footer {
        background-color: $color-main;
        color: $color-white;
        padding: 50px 0;
        font-family: $font-secondary;

        &__wrapper {
            display: flex;
            justify-content: space-between;

            @media screen and (max-width: 1180px) {
                flex-direction: column-reverse;
            }
        }

        &__right {
            display: flex;

            @media screen and (max-width: 1180px) {
                flex-wrap: wrap;
                margin-bottom: 30px;
            }
        }

        &__btn {
            text-transform: uppercase;
            margin-right: 125px;
            color: $color-white;
            display: flex;
            align-items: baseline;

            &:last-child {
                margin-right: 0;
            }

            &:after {
                content: "";
                display: inline-block;
                width: 31px;
                height: 11px;
                margin-left: 20px;
                background: url('../assets/img/arrow.png') no-repeat;
                background-size: contain;
                position: relative;
                top: -1px;

                @media screen and (max-width: 1180px) {
                    margin-top: 1px;
                }
            }

            @media screen and (max-width: 1180px) {
                width: 100%;
                margin-bottom: 30px;
            }
        }

        &__copyright {
            @media screen and (max-width: 1180px) {
                font-size: 14px;
            }
        }
    }
</style>
