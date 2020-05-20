<template>
  <div
    data-aos="fade-left"
    data-aos-easing="ease-in-back"
    data-aos-offset="0"
    class="card"
    :class="{ night: night }"
  >
    <div class="container_one">
      <div class="title_rank">
        <p class="card_title">{{ cardTitle }}</p>
        <div class="rank">
          <p>{{ number }}</p>
        </div>
      </div>
      <div class="container_text">
        <p class="card_text">
          <strong>Record :</strong>
          {{ record }}
        </p>
        <p class="card_text">
          <strong>Years Active</strong>
          : {{ years }}
        </p>
      </div>
      <div class="container_text">
        <p class="card_text">
          <strong>Championships :</strong>
          {{ championships }}
        </p>
      </div>
    </div>
    <div class="container_button">
      <button @click="goToArticle(number)" class="card_button">Lire la fiche</button>
    </div>
  </div>
</template>

<script>
export default {
  data: function () {
    return {}
  },
  methods: {
    goToArticle (articleNumber) {
      console.log(articleNumber)
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
  components: {}
}
</script>

<style lang="scss" scoped>
.card {
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
  border-radius: 18px;
  padding: 1rem 1.5rem;
  margin: 20px 0;
  width: 100%;
  position: relative;
  padding-bottom: 50px;
  @media screen and (min-width: 900px) {
    max-width: 300px;
    margin-left: 3rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
}

.card_button {
  background: #235789;
  border-radius: 33px;
  border: none;
  color: white;
  font-size: 16px;
  padding: 10px 20px;
  cursor: pointer;
  position: absolute;
  bottom: 10px;
}

.title_rank {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 0.8rem;
}
.rank {
  background: #235789;
  padding: 12px 14px;
  border-radius: 100%;
  color: white;
  width: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
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
