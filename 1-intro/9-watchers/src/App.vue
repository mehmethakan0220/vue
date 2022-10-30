<template>
  <h1>Watchers</h1>
  <h2>Basic Example</h2>
  <div>
    Computed properties allow us to declaratively compute derived values.
    However, there are cases where we need to perform "side effects" in reaction
    to state changes - for example, mutating the DOM, or changing another piece
    of state based on the result of an async operation. With the Options API, we
    can use the watch option to trigger a function whenever a reactive property
    changes:
  </div>
  <p>
    Ask a yes/no question:
    <input v-model="question" />
  </p>
  <p>{{ answer }}</p>
  <hr />
  <br />
  <div>
    The watch option also supports a dot-delimited path as the key:
    <pre>
    export default {
      watch: {
        // Note: only simple paths. Expressions are not supported.
        'some.nested.key'(newValue) {
          // ...
        }
      }
    }
  </pre
    >
    <div>
      <span>Trigger the nested watcher</span>
      <button @click="nested.watchers.supported = !nested.watchers.supported">
        Click
      </button>
    </div>
  </div>
  <hr />
  <h2>Deep Watchers</h2>
  <div>
    watch is shallow by default: the callback will only trigger when the watched
    property has been assigned a new value - it won't trigger on nested property
    changes. If you want the callback to fire on all nested mutations, you need
    to use a deep watcher:
  </div>
  <pre>
  export default {
    watch: {
      someObject: {
        handler(newValue, oldValue) {
          // Note: `newValue` will be equal to `oldValue` here
          // on nested mutations as long as the object itself
          // hasn't been replaced.
        },
        deep: true
      }
    }
  }
</pre
  >

  <hr />
  <br />
  <pre>
  export default {
    data(){
      return{
        person:{{ person }}
      }
    }
  }
</pre
  >
  <div>
    <span>Person Name</span><input type="text" v-model="person.name" /><br />
    <span>Person Age</span><input type="text" v-model="person.age" /><br />
    <span>Person Country</span
    ><input type="text" v-model="person.address.country" /><br />
    <span>Person State</span
    ><input type="text" v-model="person.address.state" /><br />
    <span>Person District</span
    ><input type="text" v-model="person.address.district" />
    <hr />

    <div>
      Use with Caution Deep watch requires traversing all nested properties in
      the watched object, and can be expensive when used on large data
      structures. Use it only when necessary and beware of the performance
      implications.
    </div>

    <hr />
    <br />
    <h2>Eager Watchers</h2>
    <br />
    <div>
      watch is lazy by default: the callback won't be called until the watched
      source has changed. But in some cases we may want the same callback logic
      to be run eagerly - for example, we may want to fetch some initial data,
      and then re-fetch the data whenever relevant state changes. We can force a
      watcher's callback to be executed immediately by declaring it using an
      object with a handler function and the immediate: true option:
    </div>
    <pre>
  export default {
    // ...
    watch: {
      question: {
        handler(newQuestion) {
          // this will be run immediately on component creation.
        },
        // force eager callback execution
        immediate: true
      }
    }
    // ...
  }
</pre
    >
    <hr />
    <pre>
  export default {
      data(){
        return{
          query_string:{{ query_string }}
        }
      }
}
</pre
    >
    <br />
    <input type="text" v-model="query_string" />

    <hr />
    <br />
    <h2>Callback Flush Timing</h2>
    <br />
    <div>
      When you mutate reactive state, it may trigger both Vue component updates
      and watcher callbacks created by you. By default, user-created watcher
      callbacks are called before Vue component updates. This means if you
      attempt to access the DOM inside a watcher callback, the DOM will be in
      the state before Vue has applied any updates. If you want to access the
      DOM in a watcher callback after Vue has updated it, you need to specify
      the flush: 'post' option:
    </div>

    <pre>
  export default {
    // ...
    watch: {
      key: {
        handler() {},
        flush: 'post'
      }
    }
  }
</pre
    >

    <hr />

    <h2>this.$watch()</h2>
    <div>
      It's also possible to imperatively create watchers using the $watch()
      instance method:
    </div>
    <pre>
  export default {
    created() {
      this.$watch('question', (newQuestion) => {
        // ...
      })
    }
  }
</pre
    >
    <div>
      This is useful when you need to conditionally set up a watcher, or only
      watch something in response to user interaction. It also allows you to
      stop the watcher early.
    </div>

    <hr />

    <h2>Stopping a Watcher</h2>
    <div>
      Watchers declared using the watch option or the $watch() instance method
      are automatically stopped when the owner component is unmounted, so in
      most cases you don't need to worry about stopping the watcher yourself. In
      the rare case where you need to stop a watcher before the owner component
      unmounts, the $watch() API returns a function for that:
    </div>
    <pre>
  const unwatch = this.$watch('foo', callback)

  // ...when the watcher is no longer needed:
  unwatch()
</pre
    >

    <br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
  </div>
</template>

<script>
export default {
  data() {
    return {
      question: "",
      answer: "Questions usually contain a question mark. ;-)",
      nested: {
        watchers: {
          status: true,
        },
      },
      person: {
        name: "",
        age: null,
        address: {
          country: "",
          state: "",
          district: "",
        },
      },
      query_string: "local",
    };
  },
  watch: {
    question(newQuestion, oldQuestion) {
      if (newQuestion.includes("?")) {
        this.getAnswer();
      }
    },
    "nested.watchers.supported"(newValue, oldValue) {
      console.log("oldValue :>> ", oldValue);
      console.log("newValue :>> ", newValue);
    },
    person: {
      handler(nval, oval) {
        console.log("oval :>> ", oval);
        console.log("nval :>> ", nval);
      },
      deep: true,
    },
    query_string: {
      handler(nval, oval) {
        console.log(`https://localhost:9999?q=${nval}`);
      },
      immediate: true,
    },
  },
  methods: {
    async getAnswer() {
      this.answer = "Thinking...";
      try {
        const res = await fetch("https://yesno.wtf/api");
        this.answer = (await res.json()).answer;
        console.log("res :>> ", this.answer);
      } catch (error) {
        console.log("error :>> ", error);
      }
    },
  },
};
</script>

<style>
</style>