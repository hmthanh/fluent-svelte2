<script lang="ts">
  let count = 0;

  function handleClick() {
    count += 1;
  }
</script>

<button on:click={handleClick}>222
  click2222: {count}222
</button>

<style >
  button {
    background-color: red;
    border: 1px solid #ccc;
    border-radius: 4px;
    color: #333;
    cursor: pointer;
    font-size: 16px;
    padding: 5px 10px;
  }
</style>