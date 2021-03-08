<template>
  <div id="app" >
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
       <div class="container-fluid ">
        <a class="navbar-brand" href="#">Navbar</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
           <span class="navbar-toggler-icon"></span>
        </button>
         <div class="collapse navbar-collapse" id="navbarNav">
         <ul class="navbar-nav ms-auto d-flex justify-content-between  " id="nav">
          <li class="nav-item" >
            <router-link :to="{name:'Home'}" class="text-decoration-none">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link :to="{name:'login'}" class="text-decoration-none">Add new product</router-link> 
      
          </li>
      
      </ul>
    </div>
  </div>
</nav>
</div>
<router-view/>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
 
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}
ul{
  width:20%;
  
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
