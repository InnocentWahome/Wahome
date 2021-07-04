<template>
 <div class="container">
    <div class="row">
        <div class="col-sm-3">
             <Sidenav />
        </div>
        <div class="col-sm-9">
             <h1>This is the Documentation page</h1>
             <br><br><br><br><br>
             <h2>The full documentation is on: <a href="https://docs.google.com/document/d/1YkP4Vs9Ld7qB2hGtIfi6TbYlVWzAm9owns2j37aYqUY/edit">Timetracker documentation</a></h2>
        </div>
    </div>
 </div>
</template>

<script>
import Sidenav from './Sidenav.vue'

export default {
    name: "Documentation",
    components: {
        Sidenav,
    }
}
</script>

<style>

</style>