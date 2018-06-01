<template>
  
</template>

<script>
const User = {
  template: `
    <div class="user">
      <h2>User {{ $route.params.id }}</h2>
      <router-view></router-view>
    </div>
  `
}
export default {

}
</script>

<style>

</style>
