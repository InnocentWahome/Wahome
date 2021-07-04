<template>
  <div class="about">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="/">PrimeDevs</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <!-- <a class="nav-link active" aria-current="page" href="#">Home</a> -->
          <router-link class="nav-link " to="/">Home</router-link>
        </li>
        <li class="nav-item">
          <!-- <a class="nav-link" href="#">About</a> -->
          <router-link class="nav-link active" to="/about">About</router-link>
        </li>
      </ul>
      <form class="d-flex">
        <!-- Login Button -->
        <a class="nav-link" href="/signin">Login</a>
        <!-- Register Button -->
        <a class="btn btn-outline-primary my-2 my-sm-0" type="submit" href="/register" >Register</a>
      </form>
    </div>
  </div>
</nav>
  </div>
</template>
