<script setup>
  import Content from './components/Content.vue'
  import Nav from './components/Nav.vue'
</script>

<template>
  <main class="main">
    <div class="heading">
      <h1>MyApp</h1>
      <span>username</span>
    </div>
    <div class="container">
      <Nav />
      <Content />
    </div>
  </main>
</template>

<style scoped>
  .main{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100vw;
    padding: 0 50px;
    box-sizing: border-box;
  }
  .heading{
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    margin-bottom: 35px;
  }
  .heading>span{
    color: black;
    font-size: 16px;
  }
  .container{
    box-shadow: 0px 0px 10px 0px #0000001A;
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 70vh;
    border-radius: 10px;
  }
  @media screen and (max-width: 850px){
    .container{
      flex-wrap: wrap;
      height: 100%;
    }
    .main{
      width: 100%;
    }
  }
  @media screen and (max-width: 625px){
    .main{
      padding: 20px;
    }
  }
</style>
