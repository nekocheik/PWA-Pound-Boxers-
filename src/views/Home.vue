<template>
  <div class="home">
    <h1>Discover the greatest boxing athletes through our blog</h1>
    <h2>Le monde de la boxe</h2>
    <p class="block__text">
      Any ranking of the best fighters in boxing history is subjective. It is prone to overrating, underrating and disagreements of all sorts.
    </p>
    <p class="block__text">
      This will be no different.
    </p>
    <div class="container__image"><img class="main__image" src="../assets/adonis-creed-creed-II.jpg" alt=""></div>
     <p class="block__text">
      Picking the best athletes in any sport is a daunting task. It's even more so in an individual sport like boxing ...
    </p>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home',
  components: {
  }
}
</script>

<style lang="scss">

.main__image {
  width: 100%;
  min-width: 100vw;
}
.container__image {
  max-height: 60vh;
  overflow: hidden;
}

h1 {
  text-align: center;
}

h2 {
  font-size: 18px;
  font-weight: 900;
  padding-top: 40px;
}

.block__text {
  padding: 20px 0px;
}
</style>
