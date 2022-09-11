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
  without computed= author.books.length > 0 ? "YES": "NO" :

  <div>Has Published Books: {{author.books.length > 0 ? "YES": "NO"}}</div>
  <hr>
  with computed= isBookPublish :
  <div>Has Published Books: {{isBookPublish}}</div>
  <hr>
  <h2>Computed Caching vs Methods</h2>
  with method invocation= isBookPublishMethod() :
  <div>Has Published Books: {{ isBookPublishMethod() }}</div><hr>
  <div>Instead of a computed property, we can define the same function as a method. For the end result, the two approaches are indeed exactly the same. However, the difference is that computed properties are cached based on their reactive dependencies. A computed property will only re-evaluate when some of its reactive dependencies have changed. This means as long as author.books has not changed, multiple access to publishedBooksMessage will immediately return the previously computed result without having to run the getter function again.</div>
  <hr>
  <button @click="updateDateNow">Update state (timePropert) </button>
  <div>Date.now() = {{now}}</div>
  <hr>
  <div>In comparison, a method invocation will always run the function whenever a re-render happens.
    <br>
    Why do we need caching? Imagine we have an expensive computed property list, which requires looping through a huge array and doing a lot of computations. Then we may have other computed properties that in turn depend on list. Without caching, we would be executing list’s getter many more times than necessary! In cases where you do not want caching, use a method call instead.
  </div>
  <br><hr>
  <h2>Writable Computed</h2>
  <div>
    Computed properties are by default getter-only. If you attempt to assign a new value to a computed property, you will receive a runtime warning. In the rare cases where you need a "writable" computed property, you can create one by providing both a getter and a setter:
    when you run this.fullName = 'John Doe', the setter will be invoked and this.firstName and this.lastName will be updated accordingly.
  </div>
  <hr>
  <div>Fullname: {{fullName}}</div>
  <input placeholder="set new full name" v-model="fnameLname" type="text"><button @click="setFullName">OK</button>
  <br><hr>
  <h3>Best Practices</h3>
  <h4>Getters should be side-effect free</h4>
  <div>
    It is important to remember that computed getter functions should only perform pure computation and be free of side effects. For example, don't make async requests or mutate the DOM inside a computed getter! Think of a computed property as declaratively describing how to derive a value based on other values - its only responsibility should be computing and returning that value. Later in the guide we will discuss how we can perform side effects in reaction to state changes with watchers.
  </div><hr>
  <h4>Avoid mutating computed value</h4>
  <div>The returned value from a computed property is derived state. Think of it as a temporary snapshot - every time the source state changes, a new snapshot is created. It does not make sense to mutate a snapshot, so a computed return value should be treated as read-only and never be mutated - instead, update the source state it depends on to trigger new computations.</div>

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
      timeProperty:Date.now(),
      person:{
        fname:"John",
        lname:"Doe"
      },
      fnameLname:"",
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
    },
    isBookPublishMethod(){
      return this.author.books.length > 0 ? 'yes' : 'no';
    },
    updateDateNow(){
      this.timeProperty = Date.now();
    },
    setFullName(){
      //set full name over computed property setter
      this.fullName = this.fnameLname;
    }
  },
  computed:{
    isBookPublish(){
      return this.author.books.length > 0 ? "YES": "NO";
    },
    //The following computed property will never update, because Date.now() is not a reactive dependency:
    now(){
      return this.timeProperty;
    },
    fullName:{
      //getter
      get(){
        return this.person.fname + " " + this.person.lname;
      },
      //setter
      set(newValue){
        [this.person.fname, this.person.lname] = newValue.split(" ");// destructin assignment
      }
    }
  }
}

</script>


<style>
.divColor{
  color:red
}

</style>