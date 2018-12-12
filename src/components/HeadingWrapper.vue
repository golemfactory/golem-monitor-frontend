<template>
    <div class="heading-wrapper">
        <h3>{{heading}}</h3>
        <div class="heading-wrapper__details">
            <div class="heading-wrapper__number">{{number}}</div>
            <div class="heading-wrapper__details-text">{{text}}</div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'HeadingWrapper',
    props: {
        heading: String,
        number: String,
        text: String
    }
}
</script>

<style lang="scss">
    .heading-wrapper {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        margin-bottom: 50px;
        
        @media screen and (max-width: 1180px) {
            flex-wrap: wrap;
            flex-direction: column-reverse;
        }
        
        @media screen and (max-width: 767px) {
            margin-bottom: 20px;
        }
        
        &__details {
            display: flex;
            align-items: center;
            text-transform: uppercase;
            letter-spacing: 0.2em;
            font-family: $font-secondary;
            
            @media screen and (max-width: 1180px) {
                width: 100%;
                justify-content: flex-end;
                margin-bottom: 20px;
            }
            
            @media screen and (max-width: 767px) {
                display: none;
            }
        }
        
        &__number {
            display: flex;
            align-items: center;
            
            &:after {
                content: '';
                width: 152px;
                height: 1px;
                background-color: $color-main;
                display: inline-block;
                margin-left: 15px;
                margin-top: -4px;
            }
        }
        
        &__details-text {
            margin-left: 20px;
            text-transform: uppercase;
        }
    }
</style>