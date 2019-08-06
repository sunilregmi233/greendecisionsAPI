<template>
  <button :class="btype" v-bind="$attrs" v-on="$listeners"><slot /></button>
</template>

<script>
const VALID_TYPES = ['primary', 'submit', 'error']

export default {
  props: {
    btype: {
      type: String,
      required: true,
      default: () =>  VALID_TYPES[0],
      validator: () => VALID_TYPES
    }
  }
}
</script>

<style>
.primary {
  background: rgb(185, 236, 185);
  color: black
}
.submit {
  background: blue;
  color: white;
}
</style>
