<template>
    <div id="app"> 
    <loading v-show="loading"></loading>
    <HeaderView v-show="header"></HeaderView>
    <router-view></router-view>
    <FooterView v-show="footer"></FooterView>
    </div>
</template>
<script>
import HeaderView from './components/Header.vue'
import FooterView from './components/Footer.vue'
import {mapGetters} from 'vuex'

    export default{
        computed:mapGetters([
            'loading',
            'header',
            'footer'
        ]),
        components:{
            HeaderView,
            FooterView
        },
        mounted(){
            let path = this.$route.path.substring(1);
            console.log(path);
            this.headerChange(path);
            this.footerChange(path);
        },
        watch:{
            $route(to,from){
            let path=to.path.substring(1);
            console.log(path);
            this.headerChange(path);
            this.footerChange(path);
            }
        },
        methods:{
            headerChange(path){
                if(path=='user-info'||path=='user-login'||path=='user-reg'||path.indexOf('article')!=-1){
                    this.$store.dispatch('hideHeader');
                }else{
                    this.$store.dispatch('showHeader');
                }
            },
            footerChange(path){
                if(path.indexOf('article')!=-1){
                    this.$store.dispatch('hideFooter');
                }else{
                    this.$store.dispatch('showFooter');
                }
            }
        }
    }
</script>
<style lang="">
    
</style>