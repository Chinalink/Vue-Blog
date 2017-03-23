<template>
  <div class="content-box">
    <h2>title</h2>
    <slot>
      no-data
    </slot>
  </div>
</template>

<style>
.content-box{
  padding: 20px;
}
</style>

<script>
  export default {
    data () {
      return {

      }
    }
  }
</script>
