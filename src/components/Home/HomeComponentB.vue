<template>
  <div>
    <input type="text" id="inputText" v-model="value">
    <p>{{ value }}</p>
    <p v-text="value" />
    <h1> {{ valueCustom }} </h1>
  </div>
</template>

<script>
export default {
  name: "HomeComponentB",
  data () {
    return {
      value: ''
    }
  },
  computed: {
    valueCustom () {
      return this.value + 'da xu ly'
    }
  },
  beforeCreate () {
    console.log('beforeCreate');
  },
  created () {
    const input = document.getElementById('inputText')

    console.log('created input ', input);
  },
  beforeMount () {
    const input = document.getElementById('inputText')
    console.log('beforeMount ', input);
  },
  mounted () {
    const input = document.getElementById('inputText')
    console.log('mounted input', input);
  },
  beforeUpdate () {
    console.log('beforeUpdate');
  },
  updated () {
    console.log('update');
  },
  beforeDestroy () {
    console.log('beforeDestroy');
  },
  destroyed () {
    console.log('destroyed');
  }
};
</script>

<style scoped>

</style>
