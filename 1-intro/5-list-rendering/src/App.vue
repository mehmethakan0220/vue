<template>
<div>
  <h1>List Rendering</h1>
  <hr><br>
  <h2>v-for</h2>
  <br>
  <div>
    We can use the v-for directive to render a list of items based on an array. The v-for directive requires a special syntax in the form of item in items, where items is the source data array and item is an alias for the array element being iterated on:
  </div><br>
   <pre>
    data(){
      return{
        items:[
          {id:1, title:"Tomato"},
          {id:2, title:"Pepper"},
          {id:3, title:"Eggplant"}
        ]
      }
    }
    <hr>
    &ltli v-for="item in items" :key="item.id" &gt {item.title} &lt/li&gt
   </pre>
  <ul>
    <li v-for="item in items" :key="item.id" > {{item.title}} </li>
  </ul>
  <hr>
  <div>
    Inside the v-for scope, template expressions have access to all parent scope properties. In addition, v-for also supports an optional second alias for the index of the current item:
  </div>
  <pre>
    data(){
      return{
        parentMessage:"I am Parent",
        items:[
          {id:1, title:"Tomato"},
          {id:2, title:"Pepper"},
          {id:3, title:"Eggplant"}
        ]
      }
    }
    <hr>
    &ltli v-for="(item, index) in items"&gt
      { parentMessage } - { index } - { item.message }
    &lt/li&gt
  </pre>
   <ul>
    <li v-for="(item, index) in items">{{parentMessage}} - {{index}} - {{item.title}}</li>
   </ul>
  <hr>
  <div>
    Notice how the v-for value matches the function signature of the forEach callback. In fact, you can use destructuring on the v-for item alias similar to destructuring function arguments:
  </div>
  <pre>
    &ltli v-for="{ message } in items"&gt
      { message }
    &lt/li&gt

  <!-- with index alias -->
    &ltli v-for="({ message }, index) in items"&gt
      { message } { index }
    &lt/li&gt
  </pre>
  <hr>
  <div>
    For nested v-for, scoping also works similar to nested functions. Each v-for scope has access to parent scopes:
  </div>
  <pre>
    &ltli v-for="item in items"&gt
      &ltspan v-for="childItem in item.children"&gt
        { item.message } { childItem }
      &lt/span&gt
    &lt/li&gt
  </pre>
  <hr>
  <div>
    You can also use of as the delimiter instead of in, so that it is closer to JavaScript's syntax for iterators:
  </div>
  <pre>
    &ltdiv v-for="item of items"&gt {item} &lt/div&gt
  </pre>
  <ul>
    <li v-for="item of items">{{item}}</li>
  </ul>
  <hr>
  <h2>v-for with an object</h2>
  <br>
  <div>
    You can also use v-for to iterate through the properties of an object. The iteration order will be based on the result of calling Object.keys() on the object:
  </div>
  <pre>
    data(){
      return{
        parentMessage:"I am Parent",
        items:[
          {id:1, title:"Tomato"},
          {id:2, title:"Pepper"},
          {id:3, title:"Eggplant"}
        ],
        myObject: {
          title: 'How to do lists in Vue',
          author: 'Jane Doe',
          publishedAt: '2016-04-10'
      }
      }
    }
    <hr>
    &ltul&gt
      &ltli v-for="value in myObject"&gt
        { value }
      &lt/li&gt
    &lt/ul&gt
  </pre>
  <ul>
    <li v-for="value in myObject">{{value}}</li>
  </ul>
  <hr>
  <br>
  <div>
    You can also provide a second alias for the property's name (a.k.a. key):
  </div>
  <pre>
    &ltli v-for="(value, key) in myObject"&gt
      { key }: { value }
    &lt/li&gt
  </pre>
  <ul>
    <li v-for="(value, key) in myObject">
      {{ key }}: {{ value }}
    </li>
  </ul>
  <hr>
  <br>
  <div>
    And another for the index:
  </div>
  <pre>
    &ltli v-for="(value, key, index) in myObject"&gt
      { index }. { key }: { value }
    &lt/li&gt
  </pre>
  <ul>
    <li v-for="(value, key, index) in myObject">
      {{ index }}. {{ key }}: {{ value }}
    </li>
  </ul>
  <hr>
  <br>
  <h2>v-for with a Range</h2>
  <br>
  <div>
    v-for can also take an integer. In this case it will repeat the template that many times, based on a range of 1...n.
    Note here n starts with an initial value of 1 instead of 0.
  </div>
  <pre>
    &ltspan v-for="n in 10"&gt{ n }&lt/span>
  </pre>
  <hr>
  <br>
  <h2>v-for on &lttemplate&gt</h2>
  <br>
  <div>
    Similar to template v-if, you can also use a &lttemplate&gt tag with v-for to render a block of multiple elements. For example:
  </div>
  <pre>
    &ltul&gt
      &lttemplate v-for="item in items"&gt
        &ltli&gt{ item.msg }&lt/li&gt
        &ltli class="divider" role="presentation"&gt&lt/li&gt
      &lt/template&gt
    &lt/ul&gt
  </pre>
  <ul>
    <template v-for="item in items">
      <li >{{item.title}}</li>
      <li :style="{listStyle:'none'}">------------------------------------</li>
    </template>
  </ul>





</div>
</template>
<script>
export default{
  data(){
    return{
      parentMessage:"I am Parent",
      items:[
        {id:1, title:"Tomato"},
        {id:2, title:"Pepper"},
        {id:3, title:"Eggplant"}
      ],
      myObject: {
        title: 'How to do lists in Vue',
        author: 'Jane Doe',
        publishedAt: '2016-04-10'
    }
    }
  }
}

</script>
<style>

</style>