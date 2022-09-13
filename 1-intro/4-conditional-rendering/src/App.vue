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
  <h2>v-if on Template</h2>
  <br>
  <div>
    Because v-if is a directive, it has to be attached to a single element. But what if we want to toggle more than one element? In this case we can use v-if on a "template" element, which serves as an <mark>invisible</mark> wrapper. The final rendered result will not include the "template" element.
  </div>
  <button @click="isOk = !isOk">click to hide all</button>
  <template v-if="isOk">
    <div>template for v-if depends on isOk's truthy values</div>
  </template>
  <template v-else>
    <div>template for v-else depends on isOk's falsy values</div>
  </template>

  <hr>
  <h2>v-show</h2>
  <br>
  <div>Another option for conditionally displaying an element is the v-show directive. The usage is largely the same:</div>
  <pre>
    &lth1 v-show="ok"&gtHello!&lt/h1&gt
  </pre>
  <hr>
  <div>The difference is that an element with v-show will always be rendered and remain in the DOM; v-show only toggles the display CSS property of the element. v-show doesn't support the &lttemplate&gt element, nor does it work with v-else.</div>
  <hr>
  <button @click="disp = !disp">click to hide below div</button><br>
  <div v-show="disp">When clicking button this this will hide, with display:none </div>
  <br>
  <br>

</template>
<script>
export default{
  data(){
    return{
      condition:true,
      isOk:false,
      disp:true,
    }
  }
}
</script>
<style>

</style>
