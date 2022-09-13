<template>
<h1>
  Class and Style Bindings
</h1><hr>
<div>
  A common need for data binding is manipulating an element's class list and inline styles. Since class and style are both attributes, we can use v-bind to assign them a string value dynamically, much like with other attributes. However, trying to generate those values using string concatenation can be annoying and error-prone. For this reason, Vue provides special enhancements when v-bind is used with class and style. In addition to strings, the expressions can also evaluate to objects or arrays.
</div>
<hr>
<h2>Binding Html Classes</h2>
<div>We can pass an object to :class (short for v-bind:class) to dynamically toggle classes:
  <div :class="{active: isActive}">Hello world div <button @click="isActive = !isActive">change activity status</button><br></div>
  <div>
    The above syntax means the presence of the active class will be determined by the truthiness of the data property isActive.
    <br>
    You can have multiple classes toggled by having more fields in the object. In addition, the :class directive can also co-exist with the plain class attribute. So given the following state:
  </div>
  <div :class="{active: isActive, 'text-danger':hasError}" class="static">Hello world div <button @click="isActive = !isActive; hasError=!hasError">change activity status</button><br></div>
  <hr>
  <code>
  <br>
  <hr>
    &ltdiv
  class="static"
  :class="{ active: isActive, 'text-danger': hasError }"
&gt&lt/div&gt
  </code>
  <br>
  <hr>
  It will render:
  <code>
    &ltdiv class="static active"&gt &lt/div&gt
  </code>
  <hr>
  <div>
    When isActive or hasError changes, the class list will be updated accordingly. For example, if hasError becomes true, the class list will become "static active text-danger".
  </div>
  <hr>
  <div>
    The bound object doesn't have to be inline:
    <pre>
      data() {
        return {
          classObject: {
            active: true,
            'text-danger': false
          }
        }
      }
    </pre>
    <hr>
    <pre>&ltdiv :class="classObject"&gt&lt/div&gt</pre>
    <div :class="classObject" class="static">Hello world div 
      <button @click="classObject['active'] = !classObject['active']; classObject['text-danger']=!classObject['text-danger']">change activity status</button><br></div>
    <hr>

    <hr>
    We can also bind to a computed property that returns an object. This is a common and powerful pattern:
    <div :class="computedClass" class="static">Hello world div <button @click="isActive = !isActive; hasError=!hasError">change activity status</button><br></div>
    <hr>
    <h3>Binding to arrays</h3>
    <br>
    <div :class="[arrayStyle.activeClass, arrayStyle.errorClass]">We can bind :class to an array to apply a list of classes: class="[arrayStyle.activeClass, arrayStyle.errorClass]"</div>
    <div>Which will render:  &ltdiv class="active text-danger"&gt&lt/div&gt</div><br>
    
    <hr>
    <h2>Binding Inline Styles</h2>
    <h3>Binding to Objects</h3>
    <br>
    <div>
      :style supports binding to JavaScript object values - it corresponds to an HTML element's style property:
      Although camelCase keys are recommended, :style also supports kebab-cased CSS property keys (corresponds to how they are used in actual CSS) - for example:
    </div>
    <hr>
    <pre>
      data() {
        return {
          activeColor: 'red',
          fontSize: 30
      }
    }
    </pre>
    <div :style="{color:styles.color, fontSize:styles.fontSize}" >&ltdiv :style="{ color: activeColor, fontSize: fontSize + 'px' }"&gt&lt/div&gt</div>

    <hr>
    <div>It is often a good idea to bind to a style object directly so that the template is cleaner:</div>
    <pre>
      data() {
        return {
          styleObject: {
            color: 'red',
            fontSize: '13px'
          }
        }
      }

      &ltdiv :style="styleObject"&gt&lt/div>
    </pre>
    <div :style="styles" >&ltdiv :style="styles" &gt&lt/div&gt</div>
    <div>Again, object style binding is often used in conjunction with computed properties that return objects.</div>

    <hr>

    <h3>Binding Style Objects to Array(Merging Style Objects)</h3>

    <div>We can bind :style to an array of multiple style objects. These objects will be merged and applied to the same element:</div>
    <br>
    <div :style="[styles, otherStyle]" > &ltdiv :style="[styles, otherStyle]" &gt&lt/div&gt </div>
    <br>


  </div>
</div>





</template>
<script>

export default{
  data(){
    return{
      isActive: true,
      hasError: false,
      classObject:{
        'active':true,
        'text-danger':true,
      },
      arrayStyle:{
        activeClass:'active',
        errorClass:'text-danger'
      },
      styles:{
        color:"magenta",
        fontSize: '30px'
      },
      otherStyle:{
        textDecoration:'underline',
        lineHeight:'20px'
      }
    }
  },
  computed:{
    computedClass(){
      return{
        'active': this.isActive && !this.hasError,
        'text-danger': this.hasError && !this.isActive,
      }
    }
  }
}




</script>
<style>
.active{
  color: green;
  font-size: large;
}

.static{
  color: gray;
  letter-spacing: 10px;
}
.text-danger{
  color: red;
  border: 1px solid black;
}








</style>