<template>
  <div class="home">
    <h1>Discover the greatest boxing athletes through our blog</h1>
    <h2 class="sub-text">Le monde de la boxe</h2>
    <p class="block__text">
      Any ranking of the best fighters in boxing history is subjective. It is prone to overrating, underrating and disagreements of all sorts.
    </p>
    <div class="container__image"><img class="main__image" src="../assets/adonis-creed-creed-II.jpg" alt=""></div>
    <p class="block__text">
      This will be no different.
    </p>
     <p class="block__text">
      Picking the best athletes in any sport is a daunting task. It's even more so in an individual sport like boxing ...
    </p>
  </div>
</template>

<script>
export default {
  name: 'Home',
  components: {
  }
}
</script>

<style lang="scss" scoped>

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
  margin: auto;
  display: block;
}

@media screen and (min-width: 900px) {
  .block__text, .sub-text, h1  {
    text-align: center;
    max-width: 533px;
    margin: auto;
  }
}

.sub-text {
  font-size: 18px;
  font-weight: 900;
  padding-top: 40px;;
}

.block__text {
  padding: 20px 0px;
}
</style>
