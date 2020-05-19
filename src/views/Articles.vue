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
    <Card :cardTitle="'Salvador Sanchez'" :record="'Record: 44-1-1, 32 KO'" :years="'Years Active: 1975-1982'"  :tournament="'tournament'"/>
  </div>
</template>

<script>

import Card from '@/components/card'

export default {
  name: 'articles',
  components: {
    Card
  }
}

</script>

<style lang="scss" scoped>
.article_subtitle {
  text-align: center;
  margin-bottom: 2rem;
}
.article_input {
  border: 3px solid #c1292e;
  padding: 10px 40px;
  border-radius: 29px;
  @media screen and (min-width: 900px) {
    width: 30vh;
  }
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
.title_rank {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 0.8rem;
}
.rank {
  background: #235789;
  padding: 10px;
  border-radius: 50%;
  color: white;
}
.card_title {
  font-weight: 900;
  font-size: 22px;
  line-height: 30px;
  color: #000000;
}
.card_text {
  font-family: Avenir;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 25px;
  color: #000000;
}
.container_text {
  margin-bottom: 0.8rem;
}
.card_button {
  background: #235789;
  border-radius: 10px;
  color: white;
  padding: 10px 20px;
}
.container_button {
  display: flex;
  justify-content: center;
}
</style>
