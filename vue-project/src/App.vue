<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <!--<router-link to="/about">About</router-link>-->
    <router-link to="/databindingHtmlView">Data Binding</router-link>
    <router-link to="/databindingInputText">Data Binding</router-link>
    <router-link to="/databindingInputNumber">Data Binding</router-link>
    <router-link to="/databindingTextarea">Data Binding</router-link>
    <router-link to="/databindingSelect">Data Binding</router-link>
    <router-link to="/databindingCheckbox">Data Binding</router-link>
    <router-link to="/databindingRadio">Data Binding</router-link>
    <router-link to="/databindingAttribute">Data Binding</router-link>
    <router-link to="/databindingButton">Data Binding</router-link>
    <router-link to="/databindingClassView">Data Binding</router-link>

  </nav>
  <router-view/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
