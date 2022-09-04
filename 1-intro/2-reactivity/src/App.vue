<template>
  <button @click="inc">Click to increment</button>
  <button @click="dec">Click to decrement</button>
  <div>result: {{count}}</div>
</template>


<script>
export default{
  data(){
    return{
      count:0,
    }
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