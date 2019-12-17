<template>
  <div>
     <router-view></router-view>
     <FooterGuide v-show="$route.meta.isShowFooter"></FooterGuide>
  </div>
</template>

<script type="text/ecmascript-6">
   import FooterGuide from '@/components/FooterGuide/FooterGuide.vue'
  //  import {reqAddress} from '@/api'
   export default {

     async mounted(){
       //通知action异步获取adress并保存到stare
      this.$store.dispatch('getAddress')
      this.$store.dispatch('autoLogin')
     },
     components:{
       FooterGuide
     }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">

 
</style>

