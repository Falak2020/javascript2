<template>
<div>
    <form class="container mt-3 bg-light" id="form" @submit.prevent="basiclogin" >
        <input type="text" ref="email" class="mt-3 form-control" placeholder="Enter your email">
        <input type="password" ref="password" class="mt-3 form-control" placeholder="Enter your password">
        <button  type="submit" class="btn btn-info form-control mt-5 text-white text-uppercase" id="btn-send">send</button>
        <div v-if="token" class="mt-3">
            <router-link :to="{name:'addnewproduct', params:{token:token}}" class="text-success mt-3 text-decoration-none">
                Click here to continue
            </router-link> 
        </div>
        <div v-else class="text-danger m-3">New user
            <router-link :to="{name:'register'}" class="text-success mt-3 text-decoration-none">
            Click here to register
            </router-link> 
        </div> 
    </form>
    
</div>
  
</template>

<script>
export default {
data(){
    return{
        email:'',
        password:'',
        token:''
    }
},
methods:{
     basiclogin () {
     fetch('http://localhost:9999/api/users/login', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json; charset=UTF-8'
            },
            body:JSON.stringify( { 
            email:this.$refs.email.value,
            password:this.$refs.password.value})
        })
          .then(res=>res.json())
          .then(token=> {
              this.token=token.token
              console.log(this.token)
              })
           
          this.$refs.email.value=''
          this.$refs.password.value=''
      
    //    console.log(token.token)
    //    window.location = `index.html?token=${token.token}`
}
}
}
</script>

<style>

</style>