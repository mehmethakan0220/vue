<template>
  <button @click="inc">Click to increment</button>
  <button @click="dec">Click to decrement</button>
  <button @click="reset">Click To Set Zero(0)</button>
  <div>result: {{count}}</div>

  <hr>
  <div>It is possible to add a new property directly to this without including it in data. However, properties added this way will not be able to trigger reactive updates.
    <hr>
    Vue uses a $ prefix when exposing its own built-in APIs via the component instance. It also reserves the prefix _ for internal properties. You should avoid using names for top-level data properties that start with either of these characters.
  </div>
  <hr>
  <div>
    Vue automatically binds the this value for methods so that it always refers to the component instance. This ensures that a method retains the correct this value if it's used as an event listener or callback. You should avoid using arrow functions when defining methods, as that prevents Vue from binding the appropriate this value
  </div>

  <div @click="setDivColor" :class="divColor">
    Just like all other properties of the component instance, the methods are accessible from within the component's template. Inside a template they are most commonly used as event listeners: (Click this line)
  </div>
  <hr>
  <h2>Computed Property</h2>
  <br>
  without computed( author.books.length > 0 ? "YES": "NO" ):

  <div>Has Published Books: {{author.books.length > 0 ? "YES": "NO"}}</div>
  <hr>
  with computed( isBookPublish ):
  <div>Has Published Books: {{isBookPublish}}</div>
</template>


<script>
export default{
  data(){
    return{
      count:null,
      divColor:'',
      author: {
        name: 'John Doe',
        books: [
          'Vue 2 - Advanced Guide',
          'Vue 3 - Basic Guide',
          'Vue 4 - The Mystery'
        ]
      },
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
    },
    reset:()=>{
      //arrow function cant use this
      this.count  = 0;
    },
    setDivColor(){
      this.divColor = 'divColor';
    }
  },
  computed:{
    isBookPublish(){
      return this.author.books.length > 0 ? "YES": "NO";
    }
  }
}

</script>


<style>
.divColor{
  color:red
}

</style>