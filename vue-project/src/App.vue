<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <!--<router-link to="/about">About</router-link>-->
    <!--
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
    <router-link to="/databindingClassView2">Data Binding</router-link>
    <router-link to="/databindingStyle">Data Binding</router-link>
    <router-link to="/databindingList">Data Binding</router-link>
    <router-link to="/renderingVif">Data Binding</router-link>
    <router-link to="/eventClick">Data Binding</router-link>
    <router-link to="/eventChange">Data Binding</router-link>
    <router-link to="/computedView">Data Binding</router-link>
    <router-link to="/watchView">Data Binding</router-link>
    <router-link to="/nestedComponent">Data Binding</router-link>
    <router-link to="/parentComponent">Data Binding</router-link>
    <router-link to="/parentComponent2">Data Binding</router-link>
    <router-link to="/parentComponent3">Data Binding</router-link>
    <router-link to="/parentComponent4">Data Binding</router-link>
    <router-link to="/parentComponent5">Data Binding</router-link>
    -->
    <router-link to="/providelnjectView">providelnjectView</router-link>
    <router-link to="/compositionAPI2">compositionAPI2</router-link>
    <router-link to="/compositionAPI3">compositionAPI3</router-link>
    
    <router-link to="/CompositionAPIProvide">compositionAPI3</router-link>
    <router-link to="/mixinsView">mixinsView</router-link>
    <router-link to="/Component">Component</router-link>
    <router-link to="/pluginsView">pluginsView</router-link>
    <router-link to="/storeAccess">StoreAccess</router-link>

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
