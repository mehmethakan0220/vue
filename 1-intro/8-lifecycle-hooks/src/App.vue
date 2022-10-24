<template>
  <h1>Lifecycle Hooks</h1>
  <br>
  <div>
    Each Vue component instance goes through a series of initialization steps when it's created - for example, it needs to set up data observation, compile the template, mount the instance to the DOM, and update the DOM when data changes. Along the way, it also runs functions called lifecycle hooks, giving users the opportunity to add their own code at specific stages.
  </div>
  <h2>Registering Lifecycle Hooks</h2>
  <div>
    For example, the mounted hook can be used to run code after the component has finished the initial rendering and created the DOM nodes:
  </div>
  <br>
  <pre>
    export default {
      mounted() {
        console.log(`the component is now mounted.`)
      }
    }
  </pre>
  <div>
    There are also other hooks which will be called at different stages of the instance's lifecycle, with the most commonly used being mounted, updated, and unmounted.

    All lifecycle hooks are called with their this context pointing to the current active instance invoking it. Note this means you should avoid using arrow functions when declaring lifecycle hooks, as you won't be able to access the component instance via this if you do so.
  </div>

  <br>
  <hr>
  <br>
  <h2>Lifecycle Diagram</h2>
  <div>
    Below is a diagram for the instance lifecycle. You don't need to fully understand everything going on right now, but as you learn and build more, it will be a useful reference.
  </div>
  <img src="/lifecycle.png" width="1200" height="1400" alt="lifecycle.png">
</template>

<script>
export default {

}
</script>

<style>

</style>