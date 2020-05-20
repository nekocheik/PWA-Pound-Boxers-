<template>
  <div id="app"  :class="{ night : night  }">
    <div class="nav__top" >
      <p>{{currentUrlName}}</p>
      <span class="back"> <router-link :to="{ name : lastPage }">back</router-link></span>
      <div class="desktop_nav">
        <router-link to="/articles" class="new__picto">NEWS</router-link>
        <router-link to="/"><img src="@/assets/pictos/home.svg"/></router-link>
        <img class="night__picto" @click="night = !night" src="@/assets/pictos/night_picto.svg"/>
      </div>
    </div>
    <div class="container">
      <router-view :night="night" />
    </div>
    <div class="nav__bottom">
      <router-link to="/articles" class="new__picto">NEWS</router-link>
      <router-link to="/"><img src="@/assets/pictos/home.svg"/></router-link>
      <img class="night__picto" @click="night = !night" src="@/assets/pictos/night_picto.svg"/>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Main',
  data () {
    return {
      lastPage: 'home',
      night: false
    }
  },
  computed: {
    currentUrlPath () {
      return this.$route.path
    },
    currentUrlName () {
      return this.$route.name
    }
  },
  watch: {
    currentUrlName (newPage, oldPage) {
      this.lastPage = oldPage
    }
  },
  mounted () {
    console.log()
  }
}

</script>

<style lang="scss">
@import "./main.scss";

#app {
  min-height: 100vh;
  transition-duration: 0.5s ;
  &.night {
    background: $secondary-night;
    color: white ;
  }
}
.nav__top {
  position: fixed;
  top: 0px;
  width: 100%;
  padding: 20px 0px;
  color: white;
  z-index: 100;
  a {
    color: white;
  }
  background-color: $primary-color;
}

  .desktop_nav {
    display: none;
    @media screen and (min-width: 900px) {
      display: flex;
      width: 300px;
      position: absolute;
      right: 0px;
      top: 0px;
      bottom: 0px;
      justify-content: space-around;
      align-items: center;
      img, a {
        text-decoration: none;
        font-weight: 900;
        display: table;
      }
    }
  }

.nav__bottom {
  position: fixed;
  bottom: 0px;
  width: 100%;
  padding: 20px 0px;
  color: white;
  display: flex;
  justify-content: space-around;
  .new__picto {
    display: table;
    margin: auto 0px;
    text-decoration: none;
  }
  a {
    color: white;
  }
  background-color: $secondary-color;
  @media screen and (min-width: 900px) {
    display: none;
  }
}
.night__picto {
  cursor: pointer;
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
  padding-bottom: 100px;
  margin: 0 20px;
}

h2 {
  font-size: 18px;
  font-weight: 700;
}
</style>
