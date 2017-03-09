# docute

I just want to demonstrate its usage.

````html
<div id="example">
  <button @click="inc">Click me: {{ count }}</button>
</div>

<script src="https://unpkg.com/vue@2.2.2/dist/vue.min.js"></script>
<script>
  new Vue({
    el: '#example',
    data: { count: 0 },
    methods: {
      inc() {
        this.count++
      }
    }
  })
</script>
````
