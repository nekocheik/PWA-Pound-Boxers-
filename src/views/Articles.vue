<template>
  <div class="article" :class="{ night : night}">
    <div>
      <h1 class="article_subtitle">
        Discover our articles on the world of boxing and on the greatest
        athletes of this sport
      </h1>
    </div>
    <div class="container_input">
      <input v-model="autocompletion" class="article_input" placeholder="Recherche ton boxeur :" />
    </div>
    <h2 class="list_title">Listes des boxeur :</h2>

    <div >
      <transition-group class="cards" name="fade">
         <Card v-for="(boxer, index) in boxerList" :key="index" :night="night" :cardTitle="boxer.name" :number="boxer.number" :record="boxer.records" :years="boxer.YearsActive"  :championships="boxer.championships"/>
      </transition-group>
    </div>

  </div>
</template>

<script>

import Card from '@/components/card'

export default {
  name: 'articles',
  data () {
    return {
      articles: [],
      autocompletion: ''
    }
  },
  components: {
    Card
  },
  props: {
    night: Boolean
  },
  mounted () {
    fetch('https://my-json-server.typicode.com/nekocheik/PWA-Pound-Boxers-/articles')
      .then(response => response.json())
      .then((data) => {
        this.articles = data
      })
  },
  computed: {
    boxerList () {
      return this.articles.filter((e) => e.name.toLowerCase().includes(this.autocompletion.toLowerCase()))
    }
  }
}

</script>

<style lang="scss" scoped>

.fade-enter-active, .fade-leave-active {
  transition: opacity 1s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

.cards {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
}

.article_subtitle {
  text-align: center;
  margin-bottom: 2rem;
}

.article {
  transition-duration: 0.5s ;
    .article_input {
    border: 3px solid #c1292e;
    padding: 10px 40px;
    border-radius: 29px;
    width: 70%;
    max-width: 300px;
    color: #c1292e;
    font-size: 16px;
    &::placeholder {
      color: #c1292e;
      font-family: Avenir;
      font-style: normal;
      font-weight: normal;
      font-size: 16px;
      line-height: 22px;
    }
  }
  &.night {
    .article_input {
      background: #1C1C1C;
    }
  }
}

.container_input {
  display: flex;
  justify-content: center;
  margin-bottom: 2rem;
}

.list_title {
  color: #c1292e;
  font-weight: 900;
  font-size: 22px;
  line-height: 30px;
  margin-left: 1rem;
  margin-bottom: 1rem;
  @media screen and (min-width: 900px) {
    margin: 20px 10%;
    text-transform: uppercase;
    font-size: 32px;
  }
}
</style>
