<template>
  <div>
    <h1>Oops!</h1>
    <h4>
      There was a Network Error, please click the back button and try again!
    </h4>
    <router-link :to="{ name: 'event-list' }"
      >Or go back to the home page</router-link
    >
  </div>
</template>

<script>
export default {}
</script>

<style></style>
