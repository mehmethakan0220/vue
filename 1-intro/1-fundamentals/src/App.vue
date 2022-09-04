<template>

  <h1>{{msg}}</h1>
  <h2>{{rawHtml}}</h2>
  <h2><span v-html="rawHtml"></span></h2>

  <div v-bind:id="dynamicId"> If the bound value is null or undefined, 
    then the attribute will be removed from the rendered element. try as both null and undefined</div>

    <button :disabled="disabledButton">button1</button>
    <button :disabled="enabledButton">button2</button>
    <button :disabled="defaultDisabled">button3</button>
    <hr>
    <div>{{message.split(' ').reverse().join(',')}}</div>
    <div>{{isOk ? 'I am okey': 'I am ill'}}</div>
    <div :id="`list-${listOrder}`">Red is Red!</div>
    <hr>
    <div v-if="seen">v-if='seen', if seen is truthy div can be seem otherwise(falsty) cant be seem</div>
    <a v-bind:href="dynamicUrl"> v-bind:href='dynamicUrl'</a>
    <a :href="dynamicUrl">Same as above but with shorthand syntax (:href='dynamicUrl') </a>
    <hr>
    <h2>dom events</h2>
    <button v-on:click="count++"> v-on:click='count' = {{count}}</button>
    <button @click="count--">shorthand syntax (@click='count--') {{count}}</button>
    <hr>
    <h2>modifiers</h2>
    <form v-on:submit.prevent="onSubmit">
    <input type="text" v-model="userName"><br>
    <input type="password" v-model="userPass" ><br>
    <input type="submit">
      <img src="./assets/directives.png" alt="directives">
    </form>

</template>

<script>

export default  {
  data(){
    return{
      msg:'hello vue',
      rawHtml:'<div>this is raw html</div>',
      dynamicId:112,/*
      The v-bind directive instructs Vue to keep the element's id attribute in sync with the component's dynamicId property. If the bound value is null or undefined, then the attribute will be removed from the rendered element.
      */
      disabledButton: true,
      enabledButton:  false,
      defaultDisabled: '', //in html disabled attribute without value equals disable the button
      message: 'I am Vue Developer!',
      isOk: true,
      listOrder:34,
      seen:true,
      dynamicUrl:'#',
      count:0,
      userName:"",
      userPass:"",
    }
  }
};


</script>






<style>
#list-34{
  color: red;
}


</style>