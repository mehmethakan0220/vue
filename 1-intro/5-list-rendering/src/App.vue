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
  <hr>
  <br>
  <h2>v-for with v-if</h2>
  <br>
  <div>
    <mark>Note</mark><br>
    It's not recommended to use v-if and v-for on the same element due to implicit precedence. Refer to style guide for details.
  </div>
  <div>
    When they exist on the same node, v-if has a higher priority than v-for. That means the v-if condition will not have access to variables from the scope of the v-for:
  </div>
  <pre>
    <!--
    This will throw an error because property "todo"
    is not defined on instance.
    -->
    &ltli v-for="item in items" v-if="item.id %2 == 0"&gt
      { item.title }
    &lt/li&gt
  </pre>
  <code>
    <pre>
      App.vue:199 Uncaught TypeError: Cannot read properties of undefined (reading 'id')
    at Proxy._sfc_render (App.vue:199:42)
    at renderComponentRoot (runtime-core.esm-bundler.js:890:44)
    at ReactiveEffect.componentUpdateFn [as fn] (runtime-core.esm-bundler.js:5602:57)
    at ReactiveEffect.run (reactivity.esm-bundler.js:185:25)
    at instance.update (runtime-core.esm-bundler.js:5716:56)
    at setupRenderEffect (runtime-core.esm-bundler.js:5730:9)
    at mountComponent (runtime-core.esm-bundler.js:5512:9)
    at processComponent (runtime-core.esm-bundler.js:5470:17)
    at patch (runtime-core.esm-bundler.js:5060:21)
    at render2 (runtime-core.esm-bundler.js:6231:13)
    </pre>
  </code>
  <hr>
  <div>
    This can be fixed by moving v-for to a wrapping &lttemplate&gt tag (which is also more explicit):
  </div>
  <pre>
    &ltul&gt
      &lttemplate v-for="item in items" :key="item.id"&gt
        &ltli v-if="item.id %2 != 0"&gt{item.id}) {item.title} &lt/li&gt
      &lt/template&gt
    &lt/ul&gt
  </pre>
  <ul>
    <template v-for="item in items" :key="item.id">
      <li v-if="item.id %2 != 0">{{item.id}}){{item.title}}</li>
    </template>
  </ul>
  <hr>
  <br>
  <h2>Maintaining State with key</h2>
  <br>
  <div>When Vue is updating a list of elements rendered with v-for, by default it uses an "in-place patch" strategy. If the order of the data items has changed, instead of moving the DOM elements to match the order of the items, Vue will patch each element in-place and make sure it reflects what should be rendered at that particular index.

  This default mode is efficient, but only suitable when your list render output does not rely on child component state or temporary DOM state (e.g. form input values).

  To give Vue a hint so that it can track each node's identity, and thus reuse and reorder existing elements, you need to provide a unique key attribute for each item:
  </div>
  <pre>
    &ltdiv v-for="item in items" :key="item.id"&gt
      &lt!-- content --&gt
    &lt/div&gt
  </pre>
  <hr>
  <div>
    When using &lttemplate v-for&gt, the key should be placed on the &lttemplate&gt container:
  </div>
  <pre>
    &lttemplate v-for="todo in todos" :key="todo.name"&gt
      &ltli&gt{ todo.name }&lt/li&gt
    &lt/template&gt
  </pre>

  <div>
    <mark>Note</mark> <br>
    key here is a special attribute being bound with v-bind. It should not be confused with the property key variable when using v-for with an object.
  </div>
  <br>
  <div>
    It is recommended to provide a key attribute with v-for whenever possible, unless the iterated DOM content is simple (i.e. contains no components or stateful DOM elements), or you are intentionally relying on the default behavior for performance gains.

    The key binding expects primitive values(strings, numbers and symbols). Do not use objects as v-for keys.
  </div>





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