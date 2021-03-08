<template>
  <div>
    
     <div class='my-2 ' :id="product._id" >
        <div class="card text-dark bg-light my-3">
            <h1 class="card-header ">{{product.name}}</h1>
            
             <div class="text-primary">The price is ({{product.price}}) kr</div>
             <div class="card-body">
                <p class="card-title border-bottom">{{product.short}}</p>    
             </div>
            <div>
                 <img :src="product.image"  style="width:50%">
            </div>
              
       </div>  
    </div>
    <div class="mb-4">last update:<mark> {{product.modified}}</mark></div>
     <router-link  :to="{name:'postdetail', params:{id:product._id,product:product}}">
              <button class="btn btn-info text-white rounded-pill">More Details</button> 
      </router-link>     
 </div>

</template>

<script>
export default {
 props:['product'],
 
}
</script>

<style>

</style>