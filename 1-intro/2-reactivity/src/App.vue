<template>
  <button @click="inc">Click to increment</button>
  <button @click="dec">Click to decrement</button>
  <div>result: {{count}}</div>

  <hr>
  <div>It is possible to add a new property directly to this without including it in data. However, properties added this way will not be able to trigger reactive updates.
    <hr>
    Vue uses a $ prefix when exposing its own built-in APIs via the component instance. It also reserves the prefix _ for internal properties. You should avoid using names for top-level data properties that start with either of these characters.
  </div>
</template>


<script>
export default{
  data(){
    return{
      count:null,
    }
  },
  mounted(){
    this.count = 100;
  },
  methods:{
    inc(){
      this.count ++;
    },
    dec(){
      this.count--;
    }
  }
}

</script>


<style>


</style>