<template>
  <div id="app">
    <div class="nav__top">
      <p>home</p>
      <span class="back"> <router-link to="/">back</router-link></span>
    </div>
    <div class="container">
      <router-view />
    </div>
    <div class="nav__bottom">
      <router-link to="/"><img src="@/assets/pictos/home.svg"/></router-link>
      <span class="back">
        <router-link to="/articles">NEWS</router-link>
        <router-link to="/article/1">article</router-link>
      </span>
    </div>
  </div>
</template>

<script></script>

<style lang="scss">
@import "./main.scss";
.nav__top {
  position: fixed;
  top: 0px;
  width: 100%;
  padding: 20px 0px;
  color: white;
  a {
    color: white;
  }
  background-color: $primary-color;
}
.nav__bottom {
  position: fixed;
  bottom: 0px;
  width: 100%;
  padding: 20px 0px;
  color: white;
  a {
    color: white;
  }
  background-color: $secondary-color;
  @media screen and (min-width: 900px) {
    display: none;
  }
}

.back {
  position: absolute;
  left: 12px;
  top: 0px;
  bottom: 0px;
  display: flex;
  margin: auto;
  a {
    display: block;
    margin: auto;
  }
}

.container {
  text-align: left;
  padding-top: 100px;
}

h2 {
  font-size: 18px;
  font-weight: 700;
}
</style>
