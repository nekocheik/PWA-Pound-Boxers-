<template>
  <div class="article">
    <div class="article_background">
      <img class="boxeur" src="../assets/mike_tyson.png" />
    </div>
    <div class="container__article-text">
      <h1 class="title_boxeur">Mike Tyson</h1>
      <h2 class="subtitle_carrer">HIS CARRER</h2>
      <div class="margin_bottom">
        <p class="margin_bottomtwo"><strong>Record :</strong> 44-1-1, 32 KO</p>
        <p><strong>Years Active:</strong> 1975-1982</p>
      </div>
      <p><strong>Championships :</strong> WBC Featherweight</p>
      <p class="margin_bottom">
        If not for his tragic death in an automobile accident in 1982, many
        boxing observers feel that Salvador Sanchez may well have become the
        greatest featherweight fighter of all time.
      </p>
      <p class="margin_bottom">
        In his short but impressive career, Sanchez compiled wins over
        high-level opposition, including Danny "Little Red" Lopez twice, Ruben
        Castillo, Juan Laporte, Wilfredo Gomez and Azumah Nelson.
      </p>
      <p class="margin_bottom">
        It's unfortunate that we never got a chance to see how great he could
        have truly been.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      article: {}
    }
  }

}
</script>

<style lang="scss" scoped>
.article_background {
  background: url("../assets/article_img.jpg");
  background-repeat: no-repeat;
  background-position: bottom;
  background-size: 100% auto;
  width: 100%;
  height: 30vh;
  position: relative;
}
strong {
  font-weight: 900;
}
.boxeur {
  position: absolute;
  bottom: 0;
  height: 110%;
  left: 10%;
}
.title_boxeur {
  font-family: Avenir;
  font-style: normal;
  font-weight: 800;
  font-size: 24px;
  line-height: 33px;
}
.subtitle_carrer {
  font-family: Avenir;
  font-style: normal;
  font-weight: 900;
  font-size: 36px;
  line-height: 49px;

  margin-bottom: 1rem;
}
.container__article-text {
  margin-left: 1rem;
  padding-bottom: 5rem;
  @media screen and (min-width: 900px) {
    margin-top: 2rem;
    margin-left: 5rem;
    width: 65vw;
  }
}
.margin_bottom {
  padding-bottom: 1rem;
}
.margin_bottomtwo {
  padding-bottom: 0.5rem;
}
</style>
