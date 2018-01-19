<template>
  <div>
    <input type="text">
    <input type="password">
    <button>Login</button>
  </div>
</template>

<style>
    * {
    box-sizing: border-box;
  }

  body {
    margin: 0;
  }

  input, button {
    border: 3px solid black;
    background: white;
    border-radius: 5px;
    padding: 5px;
  }

  button {
    transition: all 0.2s ease-in-out;
  }

  button:hover {
    color: white;
    background: black;
  }
</style>

<style scoped>
  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
  }

  input, button {
    font-size: 40px;
    width: 50%;
    margin: 5px;
  }
</style>
