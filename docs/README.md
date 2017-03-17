# docute

I just want to demonstrate its usage.

````html
<div id="example">
  {{ count }} 
  <button @click="inc">inc</button>
  <button @click="dec">dec</button>
</div>

<script src="https://unpkg.com/vue/dist/vue.min.js"></script>

<script>
  const vm = new Vue({
    el: '#example',
    data: { count: 0 },
    methods: {
      inc() {
        this.count++
      },
      dec() {
        this.count--
      }
    }
  })
</script>
````
