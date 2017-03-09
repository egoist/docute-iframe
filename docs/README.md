# docute

I just want to demonstrate its usage.

````html
<div id="example">
  The time is: <time style="color: red">???</time>
</div>

<script>
  setInterval(() => {
    document.querySelector('time').textContent = new Date()
  }, 1000)
</script>
````
