<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>


<script>
<<<<<<< HEAD
export default {
    name: 'App',
 }
=======

    export default {
    name: 'App'
    }
>>>>>>> bf3f97b89c88f6b7df06e0804f604980785c8d04
</script>


<style>
* {
    font-family: 'Roboto Slab', serif;
    outline: none;
}

html, body {
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
}

body {
    background-color: #0277bd;
    color: #263238;
}

a {
    color: #40c4ff;
}
.main-container {
    width: 50%;
    min-height: 100%;
    margin: auto auto;
    padding: 90px 15px 15px 15px;
    background-color: #ffffff;
}

button {
    padding: 8px 16px;
    margin: 4px 0;
    color: #ffffff;
    background-color: #01579b;
    border: none;
    border-radius: 4px;
}

button:hover {
    box-shadow: 0 0 5px rgba(38, 50, 56, 0.7);
    cursor: pointer;
}

</style>
