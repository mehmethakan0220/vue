<template>
    <h2>Form Input Bindings</h2>
    <br>
    <div>
        When dealing with forms on the frontend, we often need to sync the state of form input elements with
        corresponding state in JavaScript. It can be cumbersome to manually wire up value bindings and change event
        listeners:
    </div>
    <pre>
    &lt;input
      :value="text"
      @input="event => text = event.target.value"&gt;
  </pre>
    <div>The v-model directive helps us simplify the above to:</div>
    <pre>
    &lt;input v-model="text"&gt;
  </pre>
    <div>
        In addition, v-model can be used on inputs of different types, &lt;textarea&gt;, and &lt;select&gt; elements. It
        automatically expands to different DOM property and event pairs based on the element it is used on:
    </div>
    <br>
    <div>
        &lt;input&gt; with text types and &lt;textarea&gt; elements use value property and input event;
        &lt;input type="checkbox"&gt; and &lt;input type="radio"&gt; use checked property and change event;
        &lt;select&gt; use value as a prop and change as an event.
    </div>
    <br>
    <div>
        Note

        v-model will ignore the initial value, checked or selected attributes found on any form elements. It will always
        treat the current bound JavaScript state as the source of truth. You should declare the initial value on the
        JavaScript side, using the data option.
    </div>

    <h2>Basic Usages</h2>

    <h3>Text</h3>

    <pre>
        &lt;p&gt;Message is: { message }&lt;/p&gt;
        &lt;input v-model="message" placeholder="edit me" /&gt;
    </pre>

    <p>Our message: {{ message }}</p>
    <input type="text" name="textButton" v-model="message" placeholder="Type here!">

    <div>
        Note

        For languages that require an IME (Chinese, Japanese, Korean etc.), you'll notice that v-model doesn't get
        updated during IME composition. If you want to respond to these updates as well, use your own input event
        listener and value binding instead of using v-model.
    </div>
    <hr>

    <h3>Multiline text: Textarea</h3>

    <span>Multiline message is:</span>
    <p style="white-space: pre-line;">{{ long_message }}</p>

    <textarea v-model="long_message" cols="30" rows="5" placeholder="text area multi row"></textarea>
    <br>
    <br>

    <div>
        Note that interpolation inside &lt;textarea&gt; won't work. Use v-model instead.
    </div>
    <pre>
         bad 
        &lt;textarea&gt;{ text }&lt;/textarea&gt;

         good
        &lt;textarea v-model="text"&gt;&lt;/textarea&gt;
    </pre>
    <hr>
    <br>

    <h3>
        Checkbox
    </h3>
    <div>
        Single checkbox, boolean value:
    </div>
    <pre>
        &lt;input type="checkbox" id="checkbox" v-model="checked" /&gt;
        &lt;label for="checkbox"&gt;{ checked }&lt;/label&gt;

        <hr>
        data(){
            return{
                message: {{ message }},
                long_message: {{ long_message }},
                check: {{ check }}
            }
        }
    </pre>
    <span>Checkbox only for only boolean values: </span>
    <input type="checkbox" v-model="check" id="checkbox">
    <label for="checkbox">{{ check }}</label>
    <br>
    <div>
        We can also bind multiple checkboxes to the same array or Set value:
    </div>

    <pre>
        &lt;div&gt;Checked names: { checkedNames }&lt;/div&gt;

        &lt;input type="checkbox" id="jack" value="Jack" v-model="checkedNames"&gt;
        &lt;label for="jack"&gt;Jack&lt;/label&gt;

        &lt;input type="checkbox" id="john" value="John" v-model="checkedNames"&gt;
        &lt;label for="john"&gt;John&lt;/label&gt;

        &lt;input type="checkbox" id="mike" value="Mike" v-model="checkedNames"&gt;
        &lt;label for="mike"&gt;Mike&lt;/label&gt;
        <hr>
        export default {
        data() {
            return {
            checkedNames: {{ checkedNames }}
            }
        }
        }
    </pre>
    <br>
    <div>Checked names: {{ checkedNames }}</div>

    <input type="checkbox" id="jack" value="Jackie" v-model="checkedNames" />
    <label for="jack">Jack</label>

    <input type="checkbox" id="john" value="John wick" v-model="checkedNames" />
    <label for="john">John</label>

    <input type="checkbox" id="mike" value="Mike tyson" v-model="checkedNames" />
    <label for="mike">Mike</label>
    <br>
    <div>
        In this situation, checkboxes save their value attributes the checkedNames array.
    </div>
    <hr>
    <br>

    <h3>Radio</h3>

    <pre>
    &lt;div&gt;Picked: {{ picked }}&lt;/div&gt;

    &lt;input type="radio" id="one" value="One" v-model="picked" /&gt;
    &lt;label for="one"&gt;One&lt;/label&gt;

    &lt;input type="radio" id="two" value="Two" v-model="picked" /&gt;
    &lt;label for="two"&gt;Two&lt;/label&gt;
    <hr>
    export default {
        data(){
            return{
                gender: {{ gender }}
            }
        }
    }
    </pre>
    <br>
    <div>Picked: {{ gender }}</div>
    <label for="man">Man</label>
    <input type="radio" name="gender" id="man" value="Man" v-model="gender">
    <br>
    <label for="woman">Woman</label>
    <input type="radio" name="gender" id="woman" value="Woman" v-model="gender">


    <hr>
    <br>
    <h3>Select</h3>
    <h4>Single select</h4>

    <pre>
        export default {
            data() {
                return {
                    singleSelected:{{ singleSelected }},
                }
            }
        }
    </pre>
    <br>
    <div>Your country is {{ singleSelected }}</div>
    <br>
    <select name="country" id="country" v-model="singleSelected">
        <option disabled value="" selected>Chose your Country</option>
        <option value="Turkey">Turkey</option>
        <option value="Usa">United States</option>
        <option value="Poland">Poland</option>
        <option value="Germany">Germany</option>
        <option value="Italy">Italy</option>
    </select>
    <br><br><br>
    <span>Note</span>
    <div>
        If the initial value of your v-model expression does not match any of the options, the &lt;select&gt; element
        will render in an "unselected" state. On iOS this will cause the user not being able to select the first item
        because iOS does not fire a change event in this case. It is therefore recommended to provide a disabled option
        with an empty value, as demonstrated in the example above.
    </div>
    <hr>
    <br>
    <h4>Multiple select</h4>
    <br>
    <pre>
        export default {
            data() {
                return {
                    games: {{ games }},
                }
            }
        }
    </pre>
    <br>
    <div>Games you play {{ games }}</div>
    <br>
    <select name="games" id="games" v-model="games" multiple>
        <option value="" disabled>Select games that you play</option>
        <option value="aion">Aion</option>
        <option value="mlbb">Mobile Legend</option>
        <option value="prime-world">Prime World</option>
        <option value="lol">Leauge of Legends</option>
        <option value="csgo">Counter Strike:Global Offensive</option>
    </select>
    <hr>
    <br>
    <h2>Value Bindings</h2>

    <div>
        For radio, checkbox and select options, the v-model binding values are usually static strings (or booleans for
        checkbox):
    </div>

    <br>

    <pre>
        &lt;!-- `picked` is a string "a" when checked --&gt;
        &lt; input type="radio" v-model="picked" value="a" / &gt;

        &lt;!-- `toggle` is either true or false --&gt;
        &lt; input type="checkbox" v-model="toggle" / &gt;

        &lt;!-- `selected` is a string "abc" when the first option is selected --&gt;
        &lt; select v-model="selected" &gt;
        &lt; option value="abc" &gt;ABC&lt; /option &gt;
        &lt; /select &gt;

        export default {
            data() {
                return {
                    picked: {{ picked }},
                    toggle: {{ toggle }},
                    selected: {{ selected }},
                }
            }
        }
    </pre>
    <br>
    <!-- `picked` is a string "a" when checked -->
    <input type="radio" v-model="picked" value="a" /> <br>

    <!-- `toggle` is either true or false -->
    <input type="checkbox" v-model="toggle" /> <br>

    <!-- `selected` is a string "abc" when the first option is selected -->
    <select v-model="selected">
        <option value="abc">ABC</option>
    </select><br>
    <br>
    <hr>
    <div>
        But sometimes we may want to bind the value to a dynamic property on the current active instance. We can use
        v-bind to achieve that. In addition, using v-bind allows us to bind the input value to non-string values
    </div>
    <br>
    <h3>Checkbox</h3>

    <pre>
        &lt; input
            type="checkbox"
            v-model="toggle"
            true-value="yes"
            false-value="no" /&gt;

            export default {
                data() {
                    return {
                        checkboxToggle: {{ checkboxToggle }},
                    }
                }
            }
    </pre>

    <input type="checkbox" v-model="checkboxToggle" true-value="yes" false-value="no" />

    <br>
    <div>
        true-value and false-value are Vue-specific attributes that only work with v-model. Here the toggle property's
        value will be set to 'yes' when the box is checked, and set to 'no' when unchecked. You can also bind them to
        dynamic values using v-bind:
    </div>

    <pre>
        &lt;input
            type="checkbox"
            v-model="toggle"
            :true-value="dynamicTrueValue"
            :false-value="dynamicFalseValue" /&gt;


            export default {
                data() {
                    return {
                        toggle: {{ toggle }}
                        dynamicTrueValue: {{ dynamicTrueValue }},
                        dynamicFalseValue: {{ dynamicFalseValue }},
                    }
                }
            }
    </pre>
    <br>
    <input type="checkbox" v-model="toggle" :true-value="dynamicTrueValue" :false-value="dynamicFalseValue" />
    <br>
    <button @click="reSet">Click to affect state</button>

    <div>
        Tip:
        The true-value and false-value attributes don't affect the input's value attribute, because browsers don't
        include unchecked boxes in form submissions. To guarantee that one of two values is submitted in a form (e.g.
        "yes" or "no"), use radio inputs instead.
    </div>
    <hr>
    <br>
    <h3>Radio</h3>
    <br>
    <pre>
        &lt;input type="radio" v-model="pick" :value="first" /&gt;
        &lt;input type="radio" v-model="pick" :value="second" /&gt;


        export default {
            data() {
                return {
                    pick: {{ pick }},
                }
            }
        }
    </pre>
    <br>
    <input type="radio" v-model="pick" :value="first" />
    <input type="radio" v-model="pick" :value="second" />
    <br>
    <div>
        pick will be set to the value of first when the first radio input is checked, and set to the value of second
        when the second one is checked.
    </div>

    <hr>
    <br>
    <h3>Select Options</h3>
    <pre>
        &lt;select v-model="selected"&gt;
        &lt;!-- inline object literal --&gt;
        &lt;option :value="{ number: 123 }"&gt;123&lt;/option&gt;
        &lt;/select&gt;

        data() {
        return {
            selected: {{ selected }},
        }
    },
    </pre>
    <br>
    <select v-model="selected" multiple>
        <!-- inline object literal -->
        <option value="" disabled>Select one or more</option>
        <option :value="{ number: 123 }">123</option>
        <option :value="{ name: 'mehmet' }">mehmet</option>
    </select>
    <br>
    <div>
        v-model supports value bindings of non-string values as well! In the above example, when the option is selected,
        selected will be set to the object literal value of { number: 123 }.
    </div>

    <hr>
    <br>
    <h2>Modifiers</h2>

    <h3>.lazy</h3>
    <div>
        By default, v-model syncs the input with the data after each input event (with the exception of IME composition
        as stated above). You can add the lazy modifier to instead sync after change events:
    </div>

    <pre>
        &lt;!-- synced after "change" instead of "input" --&gt;
        &lt;input v-model.lazy="msg" /&gt;

        data() {
            return {
                msg: {{ msg }},
            }
        }
    </pre>
    <br>
    <!-- synced after "change" instead of "input" -->
    <input v-model.lazy="msg" />
    <br>
    <br>
    <div>Works like @change event. Update state when focus change or click enter</div>
    <hr>
    <br>
    <h3>.number</h3>
    <div>
        If you want user input to be automatically typecast as a number, you can add the number modifier to your v-model
        managed inputs:
    </div>

    <pre>
        &lt;input v-model="age1" /&gt;
        &lt;input v-model.number="age2" type="number" /&gt;

        data() {
            return {
                age1: {{ age1 }} --------------> typeof : {{ typeof age1 }},
                age2: {{ age2 }} --------------> typeof : {{ typeof age2 }},
            }
        }
    </pre>
    <br>
    <input v-model.number="age1" /> <br>
    <input v-model.number="age2" type="number" /> <br>
    <br>
    <div>
        If the value cannot be parsed with parseFloat(), then the original value is used instead.
        The number modifier is applied automatically if the input has type="number".
    </div>

    <h3>.trim</h3>
    <div>
        If you want whitespace from user input to be trimmed automatically, you can add the trim modifier to your
        v-model-managed inputs:
    </div>

    <pre>
        &lt;input v-model.trim="msg" /&gt;
    </pre>

    <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
</template>
<script>
export default {
    data() {
        return {
            message: null,
            long_message: null,
            check: false,
            checkedNames: [],
            gender: null,
            singleSelected: null,
            games: [],
            picked: null,
            toggle: null,
            selected: null,
            checkboxToggle: null,
            dynamicTrueValue: true,
            dynamicFalseValue: false,
            first: "Mehmet",
            second: "Hakan",
            pick: null,
            msg: null,
            age1: null,
            age2: null,
        }
    },
    methods: {
        reSet() {
            this.dynamicFalseValue = !this.dynamicFalseValue;
            this.dynamicTrueValue = !this.dynamicTrueValue;
        }
    }
}
</script>

<style>

</style>