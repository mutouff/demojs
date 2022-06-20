<template>
  <div class="about">
    <avue-ueditor v-model="form.TEXTAREA " :options="option"></avue-ueditor>
  </div>
</template>

<script>
  export default {
    data(){
      return {
        form: {
          TEXTAREA: ""
        },
        option:{
          customConfig: {}
        }
      }
    }
  }
</script>

<style lang="scss" scoped></style>
