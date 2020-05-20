<template>
  <div class="article">
    <div class="article_background">
      <img class="boxeur" :src="imageBoxer" />
    </div>
    <div class="container__article-text">
      <h1 class="title_boxeur">{{article.name}}</h1>
      <h2 class="subtitle_carrer">HIS CARRER</h2>
      <div class="margin_bottom">
        <p class="margin_bottomtwo"><strong>Record :</strong> {{article.records}}</p>
        <p><strong>Years Active:</strong>{{article.YearsActive}}</p>
      </div>
      <p><strong>Championships : </strong>{{article.championships}}</p>
        <p class="text__desrciption" v-for="(description, index) in article.description" :key="index" >
          {{description}}
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
  },
  mounted () {
    fetch('https://my-json-server.typicode.com/nekocheik/PWA-Pound-Boxers-/articles')
      .then(response => response.json())
      .then((articles) => {
        console.log(articles)
        this.article = articles.find((article) => article.number === this.$route.params.id)
      })
  },
  computed: {
    imageBoxer () {
      if (this.article.name) {
        return require(`../assets/${this.article.name.split(' ').join('-').replace('.', '')}.png`)
      } else {
        return ''
      }
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

.text__desrciption {
  padding: 10px 0px;
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
