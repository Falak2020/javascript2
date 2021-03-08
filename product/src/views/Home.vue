<template>
  <div class="card text-center m-3"   >
     <div v-for="product in products" :key="product._id" >
       <viewpost :product="product"/>
    </div>
  </div>
</template>

<script>
import viewpost from './viewpost.vue'

export default {
  components: { viewpost },
  
   
 data(){
   return {
    products:[],
    product:null,
    
 }
 },
created()
 {
   this.fetchData()
   },
 methods:{
    fetchData(){ 
        fetch('http://localhost:9999/api/products')
        .then(res=>res.json())
        .then(data=>this.products=data)
        
},

}
}


</script>

<style>

</style>