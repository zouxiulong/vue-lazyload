<template>
    <div id="app">
        <lazyImg></lazyImg>
    </div>
</template>

<script>
import lazyImg from './views/lazyImg'

export default {
    name: 'vue-lazyload',
    components:{
        lazyImg,
    },
    data() {
        return {
            msg: 'this is vue-lazyload',
        }
    },
    created() {
    },

    methods: {
    }
}
</script>

<style lang="less">
* {
    margin: 0;
}
html,
body,
#app {
    height: 100%;
    width: 100%;

}
#app {
    span {
        color: yellow;
    }
}
p:nth-child(2n) {
    color: lime;
}

</style>