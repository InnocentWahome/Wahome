<template>
 <div class="container">
    <div class="row">
        <div class="col-sm-3">
             <Sidenav />
        </div>
        <div class="col-sm-9">
             <h1>This is the Notifications page</h1>
        </div>
    </div>
 </div>
</template>

<script>
import Sidenav from './Sidenav.vue'

export default {
    name: "Notification",
    components: {
        Sidenav,
    }
}
</script>

<style>

</style>