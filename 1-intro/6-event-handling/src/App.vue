<template>
  <h1>Listening to Events</h1>
  <div>
      We can use the v-on directive, which we typically shorten to the @ symbol, to listen to DOM events and run some JavaScript when they're triggered. The usage would be v-on:click="handler" or with the shortcut, @click="handler".
    </div>
    <ul>The handler value can be one of the following:
        <li>
            <mark>Inline handlers:</mark> Inline JavaScript to be executed when the event is triggered (similar to the native onclick attribute).
        </li>
        <li>
            <mark>Method handlers:</mark> A property name or path that points to a method defined on the component.
        </li>
    </ul>

    <h2>Inline Handlers</h2>
    <div>
        Inline handlers are typically used in simple cases, for example:
    </div>
    <pre>
        data() {
            return {
                count: 0
            }
        }
    </pre>
    <br>
    <code>
        &lt;button @click="count++"&gt;Add 1&lt;/button&gt;
        <br>
        &lt;p&gt;Count is: {{ count }}&lt;/p&gt;
    </code>
    <hr>

    <h2>Method Handlers</h2>
    <div>
        The logic for many event handlers will be more complex though, and likely isn't feasible with inline handlers. That's why v-on can also accept the name or path of a component method you'd like to call.

        For example:
    </div>
    <pre>
        data() {
            return {
                name: 'Vue.js'
            }
            },
            methods: {
            greet(event) {
                // `this` inside methods points to the current active instance
                alert(`Hello ${this.name}!`)
                // `event` is the native DOM event
                if (event) {
                alert(event.target.tagName)
                }
            }
        }
    </pre>
    <br>
    <code>
        <!-- `greet` is the name of the method defined above -->
        &lt;button @click="greet"&gt;Greet&lt;/button&gt;
    </code>
    <hr>

    <h2>Method vs Inline Handlers</h2>
    <div>
        The template compiler detects method handlers by checking whether the v-on value string is a valid JavaScript identifier or property access path. For example, <b>foo</b>, <b>foo.bar</b> and <b>foo['bar']</b> are treated as <mark>method handlers</mark>, while <b>foo()</b> and <b>count++</b> are treated as <mark>inline handlers</mark>.
    </div>
    <br>
    <hr>
    <br>
    <h3>examples</h3>
    <label for="btn1">Inline handler</label>
    <button id="btn1" @click="count++">Click to increate {{count}}</button>
    <h4>Button details</h4>
    <pre>
        &lt;button id="btn1" @click="count++"&gt;Click to increate {{count}}&lt;/button&gt;
    </pre>
    <hr>
    <label for="btn2">Method handler</label>
    <button id="btn2" @click="dec">Click to decrease {{count}}</button>
    <h4>Button details</h4>
    <pre>
        &lt;button id="btn2" @click="dec"&gt;Click to decrease {{count}}&lt;/button&gt;
    </pre>
    <hr>
    <h4>Script Details</h4>
    <pre>
        export default {
            data(){
                return{
                    count:{{count}},

                }
            },
            methods:{
                dec(){
                    this.count --;
                }
            }
        }
    </pre>
    <br>
    <hr>
    <br>
    <h2>Calling Methods in Inline Handlers</h2>
    <div>
        Instead of binding directly to a method name, we can also call methods in an inline handler. This allows us to pass the method custom arguments instead of the native event:
    </div>
    <pre>
        methods: {
            say(message) {
                alert(message)
            }
        }
    </pre>\
    <br>
    <code>
        &lt;button @click="say('hello')"&gt;Say hello&lt;/button&gt;
        &lt;button @click="say('bye')"&gt;Say bye&lt;/button&gt;
    </code>
    <hr>
    <br>
    <button @click="say('hello')">Say hello</button>
    <button @click="say('bye')">Say bye</button>

    <br>
    <hr>
    <br>

    <h2>Accessing Event Argument in Inline Handlers</h2>
    <div>
        Sometimes we also need to access the original DOM event in an inline handler. You can pass it into a method using the special $event variable, or use an inline arrow function:
    </div>

    <pre>
        methods: {
            warn(message, event) {
                // now we have access to the native event
                if (event) {
                event.preventDefault()
                }
                alert(message)
            }
        }
    </pre>
    <code>
        <!-- using $event special variable -->
        &lt;button @click="warn('Form cannot be submitted yet.', $event)"&gt;
        Submit
        &lt;/button&gt;
        <br>
        <!-- using inline arrow function -->
        &lt;button @click="(event) => warn('Form cannot be submitted yet.', event)"&gt;
        Submit
        &lt;/button&gt;
    </code>
    <br>
    <hr>
    <!-- using $event special variable -->
    <button @click="warn('Form cannot be submitted yet. :) $event', $event)">
    Submit($event)
    </button>

    <!-- using inline arrow function -->
    <button @click="(event) => warn('Form cannot be submitted yet. :) event', event)">
    Submit(arrow function)
    </button>

    <br>
    <hr>
    <br>

    <h2>Event Modifiers</h2>
    <div>
        It is a very common need to call event.preventDefault() or event.stopPropagation() inside event handlers. Although we can do this easily inside methods, it would be better if the methods can be purely about data logic rather than having to deal with DOM event details.

        To address this problem, Vue provides <b>event modifiers</b> for v-on. Recall that modifiers are directive postfixes denoted by a dot.
    </div>
    <ul>Event modifiers
        <li>.stop</li>
        <li>.prevent</li>
        <li>.self</li>
        <li>.capture</li>
        <li>.once</li>
        <li>.passive</li>
    </ul>
    <hr>
    <pre>
        <!-- the click event's propagation will be stopped -->
        &lt;a @click.stop="doThis"&gt;&lt;/a&gt;

        <!-- the submit event will no longer reload the page -->
        &lt;form @submit.prevent="onSubmit"&gt;&lt;/form&gt;

        <!-- modifiers can be chained -->
        &lt;a @click.stop.prevent="doThat"&gt;&lt;/a&gt;

        <!-- just the modifier -->
        &lt;form @submit.prevent&gt;&lt;/form&gt;

        <!-- only trigger handler if event.target is the element itself -->
        <!-- i.e. not from a child element -->
        &lt;div @click.self="doThat"&gt;...&lt;/div&gt;
    </pre>
    <hr>
    <h4>Examples</h4>
    <br>
    <!-- the click event's propagation will be stopped -->
    <a @click.stop="stopModifier" href="#">Google</a>
    <br>
    <hr>
    <br>
    <!-- the submit event will no longer reload the page -->    
    <form @submit.prevent="preventModifier">
        <input v-model="count" type="text">
        <button type="submit">Send</button>
    </form>
    <br>
    <hr>
    <br>
    <!-- modifiers can be chained -->
    <a @click.stop.prevent="modifierChaning" href="#"> modified chaining @click.stop.prevent</a>
    <br>
    <hr>
    <br>
    <!-- just the modifier -->
    <form @submit.prevent>
        <input v-model="count" type="text">
        <button type="submit">Send</button>
    </form>
    <br>
    <hr>
    <br>
    <!-- only trigger handler if event.target is the element itself -->
    <!-- i.e. not from a child element -->
    <div id="self" @click.self="selfModifier">
        <button>button 1</button>
        <button>button 2</button>
        <button>button 3</button>
        <span> that buttons dont trigger the parent element because parent element have @click.self modifier. Click the blueviolet borders</span>
    </div>
    <br>
    <hr>
    <br>
    <span>TIP</span>
    <div>
        Order matters when using modifiers because the relevant code is generated in the same order. Therefore using @click.prevent.self will prevent click's default action on the element itself and its children, while @click.self.prevent will only prevent click's default action on the element itself.
    </div>
    <br>
    <hr>
    <br>
    <h2>Key Modifiers</h2>
    <br>
    <div>
        When listening for keyboard events, we often need to check for specific keys. Vue allows adding key modifiers for v-on or @ when listening for key events:
    </div>
    <pre>
        only call `submit` when the `key` is `Enter` 
        &lt;input @keyup.enter="submit" /&gt;
    </pre>
    <br>
    <div>
        You can directly use any valid key names exposed via KeyboardEvent.key as modifiers by converting them to kebab-case.
    </div>
    <pre>
        &lt;input @keyup.page-down="onPageDown" /&gt;
    </pre>
    <div>
        In the above example, the handler will only be called if $event.key is equal to 'PageDown'.
    </div>

    <br>
    <h3>
        Key Aliases
    </h3>

    <ul>
        Vue provides aliases for the most commonly used keys:
        <li>.enter</li>
        <li>.tab</li>
        <li>.delete(captures both "Delete" and "Backspace" keys)</li>
        <li>.esc</li>
        <li>.space</li>
        <li>.up</li>
        <li>.down</li>
        <li>.left</li>
        <li>.right</li>
    </ul>
    <br>
    <h3>
        System Modifier Keys
    </h3>
    <ul>
        You can use the following modifiers to trigger mouse or keyboard event listeners only when the corresponding modifier key is pressed:
        <li>.ctrl</li>
        <li>.alt</li>
        <li>.shift</li>
        <li>.meta</li>
    </ul>
    <span>Examples</span>
    <pre>
        Alt + Enter
        &lt;input @keyup.alt.enter="clear" /&gt;

        Ctrl + Click
        &lt;div @click.ctrl="doSomething"&gt;Do something&lt;/div&gt;
    </pre>

    <span>Tip</span>
    <div>
        Note that modifier keys are different from regular keys and when used with keyup events, they have to be pressed when the event is emitted. In other words, keyup.ctrl will only trigger if you release a key while holding down ctrl. It won't trigger if you release the ctrl key alone.
    </div>

    <h4>.exact Modifier</h4>
    <br>
    <div>
        The .exact modifier allows control of the exact combination of system modifiers needed to trigger an event.
    </div>
    <pre>
         this will fire even if Alt or Shift is also pressed 
        &lt;button @click.ctrl="onClick"&gt;A&lt;/button&gt;

         this will only fire when Ctrl and no other keys are pressed 
        &lt;button @click.ctrl.exact="onCtrlClick"&gt;A&lt;/button&gt;

         this will only fire when no system modifiers are pressed 
        &lt;button @click.exact="onClick"&gt;A&lt;/button&gt;
    </pre>

    <hr>
    <br>
    <br>
    <h2>
        Mouse Button Modifiers
    </h2>
    <ul>
        <li>.left</li>
        <li>.right</li>
        <li>.middle</li>
    </ul>
    <div>
        These modifiers restrict the handler to events triggered by a specific mouse button.
    </div>









































<br><br><br><br><br><br><br><br><br><br>
<br><br><br><br><br><br><br><br><br><br>
</template>

<script>
export default {
    data(){
        return{
            count:0,
        }
    },
    methods:{
        dec(){
            this.count --;
        },
        say(msg){
            alert(msg);
        },
        warn(msg, event){
            if(event){
                event.preventDefault();
            }
            alert(msg);
        },
        stopModifier(){
            console.log('stop modifier worked :>> ');
        },
        preventModifier(){
            console.log('prevent modifier worked :>> ');
        },
        modifierChaning(){
            console.log('modifier chaning worked :>> ');
        },
        selfModifier(){
            console.log('self modifier worked :>> ');
        }
    }
}
</script>

<style>
#self{
    border: 20px solid blueviolet;
}
</style>