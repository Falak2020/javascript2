<template>
  <form action="" class="container mt-3 bg-light"  @submit.prevent="createProduct" ref="form">
        <input type="text" id="name" class="mt-3 form-control" placeholder="Enter products name" ref="name">
        <input type="text" id="short" class="mt-3 form-control" placeholder="Enter short description about product" ref="short">
        <input type="text" id="desc" class="mt-3 form-control" placeholder="Enter your description about product" ref="desc">

        <input type="text" id="price" class="mt-3 form-control" placeholder="Enter the price of product" ref="price">
        <input type="text" id="img" class="mt-3 form-control" placeholder="Enter the link of the image" ref="image">
        <button type="submit" class="btn btn-info form-control mt-5 text-white text-uppercase" id="btn-send" >send</button>
        <div ref="result" class=" mt-5 text-success"></div>
  </form>
    
</template>

<script>

export default {
  props:['token'],
 data() {
    return {
      name: '',
      short:'',
      desc:'',
      price:'',
      image:'',
      result:'',
      toke:this.token
    }
  },
  methods:{

    createProduct(){
     let newproduct={
       name:this.$refs.name.value,
       short:this.$refs.short.value,
       desc:this.$refs.desc.value,
       price:this.$refs.price.value,
       image:this.$refs.image.value
     }
     console.log(newproduct)
    fetch('http://localhost:9999/api/products/new', {
        method: 'POST',
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
             'Authorization': `Bearer ${this.token}`  
        },
        body: JSON.stringify(newproduct)
    })
    .then(res=>res.json())
    .then(()=>{
      this.$refs.name.value='',
      this.$refs.short.value='',
      this.$refs.desc.value='',
      this.$refs.price.value='',
      this.$refs.image.value='',
      this.$refs.result.innerText='The product has been added successfully'
    })
}

  }
}
</script>

<style>

</style>