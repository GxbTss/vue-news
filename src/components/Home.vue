<template>
    <div class="content">
        <Slider></Slider>
        <div class="newsList">
            <ul>
                <li v-for="(val,key) in arrList">
                    <router-link :to="'/article/'+val.id">
                        <h2>{{key+1}}.{{val.title}}</h2>
                        <p>{{val.detail}}</p>
                    </router-link>
                </li>
            </ul>
        </div>
        <router-view></router-view>
    </div>
</template>
<script>
import Slider from './Slider.vue'
export default{
    components:{
        Slider
    },
    data(){
        return {
            arrList:[]
        }
    },
    mounted(){
        this.fetch();
    },
    methods:{
        fetch(){
            var _this=this;
            this.$http.get('http://localhost:8080/src/data/index.data').then(function(msg){
                _this.arrList=msg.data;
            }).catch(function(err){
                console.log(err);
            })
        }
    }
}
</script>
<style  scoped>
    @import '../assets/css/index.css'
</style>