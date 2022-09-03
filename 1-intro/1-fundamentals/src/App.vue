<template>

  <h1>{{msg}}</h1>
  <h2>{{rawHtml}}</h2>
  <h2><span v-html="rawHtml"></span></h2>

</template>





<script>

export default  {
  data(){
    return{
      msg:'hello vue',
      rawHtml:'<div>this is raw html</div>'
    }
  }
};


</script>






<style>



</style>