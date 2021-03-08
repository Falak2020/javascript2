<template>
  <div>
      <div class='my-2'  >
        <div class="card text-dark bg-light my-3" style="max-width: rem;">
         <div v-if="!editing" @dblclick="editfunction">
          
             <div class="card-header">{{product.name}}</div>
          
             <div>{{product.price}} kr</div>
             <div class="card-body">
                <p class="card-title border-bottom">{{product.short}}</p>
                <p class="card-text">{{product.desc}}</p>
             </div>
            <img :src="product.image" style="width:20rem">
         </div>
          
          <div v-else class="p-5 ">
              <input  class="p-3 " v-model="product.name" ><br>
              <input  class="p-3" v-model="product.price" ><br>
              <input  class="p-3" v-model="product.short" ><br>
              <input  class="p-3" v-model="product.desc" ><br>
              <button class="btn btn-success mt-3"  @click="updateProduct">update</button>
          </div>  
        </div>
       <div>last update:<mark> {{product.modified}}</mark></div>
    </div>
    <div class="d-flex justify-content-around mt-5">
       <button class="btn btn-danger "  @click="deleteProduct">Delete</button>
       <!-- <button class="btn btn-info text-white"  @click="editProduct">Edit</button> -->
    </div>
    <div ref="result" class=" mt-5 text-danger"></div>
 </div>
     

</template>

<script>
export default {
    props:['id','product'],
// data(){
//     return{
//         id:this.$route.params.id
//     }
// }
data(){
 return{
      myid:this.id,
      editing:false,
    
 }
 },
 
methods:{

deleteProduct () {
  
  
    fetch(`http://localhost:9999/api/products/${this.myid}`, {
        method: 'DELETE'

    })
    
    .then(()=>{
         this.$refs.result.innerText='The product has been deleted successfully'
        
    })
   
   },


editfunction(){
   this.editing = true
},


doneEdit(){
    this.editing = false
},
updateProduct(){
    let updateProduct = {
        name: this.product.name,
        short: this.product.short,
        desc: this.product.desc,
        price: this.product.price,
        img: this.product.img,
       
    }
     this.editing = false
      console.log(updateProduct)
    fetch(`http://localhost:9999/api/products/${this.myid}`, {
        method: 'PATCH',
        headers: {
            'Content-type': 'application/json; charset=UTF-8'
        },

        body: JSON.stringify(updateProduct)
    })
        .then(res => res.json())
        .then(() =>console.log('updated'))

}
}

}
</script>

<style>

</style>