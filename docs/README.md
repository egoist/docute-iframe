# docute

I just want to demonstrate its usage.

````html
<div id="example">
  The time is: <br>
  <time style="color: red; font-size: 3rem">???</time>
</div>

<script>
  setInterval(() => {
    document.querySelector('time').textContent = new Date()
  }, 1000)
</script>
````
