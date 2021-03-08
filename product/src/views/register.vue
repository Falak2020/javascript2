<template>
  <div>
    <form class="container mt-3 bg-light"  @submit.prevent="registerUser" >
         <input type="text" ref="firstname" class="mt-3 form-control" placeholder="Enter your firstname">
          <input type="text" ref="lastname" class="mt-3 form-control" placeholder="Enter your lastname">
        <input type="text" ref="email" class="mt-3 form-control" placeholder="Enter your email">
        <input type="password" ref="password" class="mt-3 form-control" placeholder="Enter your password">
         <button  type="submit" class="btn btn-info form-control mt-5 text-white text-uppercase">register</button>

    </form>

    <div v-if="ok" class="mt-3 text-success">User created successfully 
        <router-link :to="{name:'login'}" class="text-decoration-none">
            Log in
        </router-link>
    </div>
  </div>
</template>

<script>
export default {
data(){
    return{
     firstName:'',
     lastName:'',
      email:'',
      passwordHash:'',
      ok:false
    }
},
methods:{
    registerUser(){
        fetch('http://localhost:9999/api/users/register', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json; charset=UTF-8'
            },
            body:JSON.stringify( { 
            firstName:this.$refs.firstname.value,
            lastName:this.$refs.lastname.value,
            email:this.$refs.email.value,
            password:this.$refs.password.value})
        })
          .then(res=>res.json())
          .then(data=>{
              this.ok=data.status
              console.log(this.ok)
              this.$emit('userOk')
          })
    }
}
}
</script>

<style>

</style>