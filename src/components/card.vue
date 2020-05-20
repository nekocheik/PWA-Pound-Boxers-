<template>
   <div class="card" :class="{night : night}">
      <div class="title_rank">
        <p class="card_title">{{cardTitle}}</p>
        <div class="rank">
          <p>{{number}}</p>
        </div>
      </div>
      <div class="container_text">
        <p class="card_text">{{record}}</p>
        <p class="card_text">Years Active: {{years}}</p>
      </div>
      <div class="container_text">
        <p class="card_text">Championships:</p>
        <p class="card_text">{{championships}}</p>
      </div>
      <div class="container_button">
        <button @click="goToArticle(articleNumber)" class="card_button">Lire la fiche</button>
      </div>
    </div>

</template>

<script>

export default {
  data: function () {
    return {

    }
  },
  methods: {
    goToArticle (articleNumber) {
      this.$router.push({ name: 'article', params: { id: articleNumber } })
    }
  },
  name: 'card',
  props: {
    cardTitle: String,
    record: String,
    years: String,
    championships: String,
    number: String,
    night: Boolean
  },
  components: {

  }
}

</script>

<style lang="scss" scoped>

.card {
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
  border-radius: 18px;
  padding: 1rem 1.5rem;
  margin: 20px 0;
  @media screen and (min-width: 900px) {
    max-width: 300px;
    margin-left: 3rem;
  }
}

.card_button {
  background: #235789;
  border-radius: 14px;
  border: none;
  color: white;
  font-size: 16px;
  padding: 10px 20px;
  cursor: pointer;
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
}
.card_text {
  font-family: Avenir;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 25px;
}
.container_text {
  margin-bottom: 0.8rem;
}
.container_button {
  display: flex;
  justify-content: center;
}
</style>
