<script lang="ts">
  let count = 0;

  function handleClick() {
    count += 1;
  }
</script>

<button on:click={handleClick}>
  clicks: {count}
</button>

<style>
  button {
    background-color: yellow;
    border: 1px solid #ccc;
    border-radius: 4px;
    color: #333;
    cursor: pointer;
    font-size: 16px;
    padding: 5px 10px;
  }
</style>
