<template>
  <h1>Conditional Rendering</h1>
  <hr>
  <h2>v-if</h2>
  <div>The directive v-if is used to conditionally render a block. The block will only be rendered if the directive's expression returns a truthy value.</div>
  <div>
    You can use the v-else directive to indicate an "else block" for v-if.
    A v-else element must immediately follow a v-if or a v-else-if element - otherwise it will not be recognized.
  </div>
  <pre>
    &lth1 v-if="awesome"&gtVue is awesome!&lt/h1&gt
  <hr>
  &ltbutton v-on:click="condition = !condition"&gtClick it&lt/button&gt
  &ltdiv v-if="condition"&gtVue is Awesome&lt/div&gt
  &ltdiv v-else&gtOhh NNoo&lt/div&gt
  </pre>
  <button v-on:click="condition = !condition">Click it</button>
  <div v-if="condition">Vue is Awesome</div>
  <div v-else>Ohh NNoo</div>
  <hr>


</template>
<script>
export default{
  data(){
    return{
      condition:true,
    }
  }
}
</script>
<style>

</style>
