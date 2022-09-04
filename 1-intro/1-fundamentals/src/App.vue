<template>

  <h1>{{msg}}</h1>
  <h2>{{rawHtml}}</h2>
  <h2><span v-html="rawHtml"></span></h2>

  <div v-bind:id="dynamicId"> If the bound value is null or undefined, 
    then the attribute will be removed from the rendered element. try as both null and undefined</div>

    <button :disabled="disabledButton">button1</button>
    <button :disabled="enabledButton">button2</button>
    <button :disabled="defaultDisabled">button3</button>

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
    }
  }
};


</script>






<style>



</style>