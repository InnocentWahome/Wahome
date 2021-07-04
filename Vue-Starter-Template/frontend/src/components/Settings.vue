<template>
 <div class="container">
    <div class="row">
        <div class="col-sm-3">
             <Sidenav />
        </div>
        <div class="col-sm-9">
             CHANGE EMAIL:
             CHANGE PASSWORD: 
        </div>
    </div>
 </div>
</template>

<script>
import Sidenav from './Sidenav.vue'

export default {
    name: "Settings",
    components: {
        Sidenav,
    }
}
</script>

<style>

</style>