<script></script>

<template>
  <div class="box">
    <h1>TO-DO List</h1>
    <main>
      <router-view></router-view>
    </main>
  </div>
</template>

<style>
#app {
  font-family: Comic Sans MS (cursive);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #060861;
}
.box {
  width: 440px;
  height: 500px;
  padding: 2rem;
  margin: 2rem auto 0;
  border-radius: 10px;
  background-image: linear-gradient(
    to top,
    #65bd60 0%,
    #5ac1a8 25%,
    #3ec6ed 50%,
    #b7ddb7 75%,
    #fef381 100%
  );
}

h1 {
  text-align: center;
}
</style>
