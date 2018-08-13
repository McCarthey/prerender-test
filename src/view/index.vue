<template>
    <div class="fb-ad-page">
        <swiper></swiper>
    </div>
</template>

<script>
    import swiper from '../components/swiper/swiper'

    export default {
        name: 'fb_ad1',
        components: {
            swiper,
        }
    }
</script>

<style lang="scss" rel="stylesheet/scss">
    $primaryColor: #d1ae82;
    .fb-ad-page {
        height: 100vh;
        background: url(../assets/imgs/bg.png) no-repeat 100% / cover;
        color: $primaryColor;
    }
</style>
