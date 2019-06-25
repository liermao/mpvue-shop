<template>
        <div class="search" @click="searchFun">
          <span class="iconfont icon-search"></span>
          <input type="text" placeholder="搜索更多家居好物">
      </div>
</template>
<script>
    export default {
        name: "search",
        data() {
            return {}
        },
        methods: {
          searchFun() {
            this.$emit('searchFun');
          },
        },
        props: {},
        components: {}
    }
</script>

<style scoped>

</style>
