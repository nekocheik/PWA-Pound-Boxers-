<template>
  <div class="article">
    <div>
      <h1 class="article_subtitle">
        Discover our articles on the world of boxing and on the greatest
        athletes of this sport
      </h1>
    </div>
    <div class="container_input">
      <input class="article_input" placeholder="Recherche ton boxeur :" />
    </div>
    <h2 class="list_title">Listes des boxeur :</h2>
    <div class="cards">
      <Card v-for="(item, index) in array" :key="index" :cardTitle="'Salvador Sanchez'" :record="'Record: 44-1-1, 32 KO'" :years="'Years Active: 1975-1982'"  :tournament="'tournament'"/>
    </div>
  </div>
</template>

<script>

import Card from '@/components/card'

export default {
  name: 'articles',
  components: {
    Card
  },
  computed: {
    array: function () {
      const l = []
      for (let i = 0; i < 100; i++) {
        l.push(9)
      }
      return l
    }
  }
}

const boxers = [

]
document.querySelectorAll('.organism.contentStream.slide').forEach((e, i) => {
  if (i === 0) {
    return
  }
  const boxer = {
    title: e.querySelector('h1').innerHTML || '',
    text: e.querySelector('ol').innerHTML
  }

  boxers.push(boxer)
})

</script>

<style lang="scss" scoped>

.cards {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
}

.article_subtitle {
  text-align: center;
  margin-bottom: 2rem;
}
.article_input {
  border: 3px solid #c1292e;
  padding: 10px 40px;
  border-radius: 29px;
  width: 70%;
  max-width: 300px;
  color: #c1292e;
  font-size: 16px;
}

.article_input::placeholder {
  color: #c1292e;
  font-family: Avenir;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 22px;
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
    margin-left: 3rem;
    margin-bottom: 3rem;
  }
}
</style>
