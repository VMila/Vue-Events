<template>
  <div>
    <h1>Oops!</h1>
    <h4>The {{ resource }} you are looking for is not here!</h4>
    <router-link :to="{ name: 'event-list' }"
      >Go back to the event list</router-link
    >
  </div>
</template>

<script>
export default {
  props: {
    resource: {
      type: String,
      required: true,
    },
  },
}
</script>

<style></style>
