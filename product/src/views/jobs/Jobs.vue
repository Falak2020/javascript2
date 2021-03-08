<template>
<div>
    <h1>my jobs</h1>
     <div v-for="job in jobs" :key="job.id">
       <router-link :to="{name:'Detail', params:{id:job.id}}">
        <h2>{{job.title}}</h2>
    </router-link>
   </div>
</div>
  

</template>

<script>
export default {
data(){
    return{
        jobs:[
            {id:1,title:'job1'},
            {id:2,title:'job2'},
            {id:3,title:'job3'},
        ]
    }
}
}
</script>

<style>

</style>