<template>
   <div class="card">
      <div class="title_rank">
        <p class="card_title">{{cardTitle}}</p>
        <div class="rank">
          <p>10</p>
        </div>
      </div>
      <div class="container_text">
        <p class="card_text">{{record}}</p>
        <p class="card_text">Years Active: {{years}}</p>
      </div>
      <div class="container_text">
        <p class="card_text">Championships:</p>
        <p class="card_text">{{tournament}}</p>
      </div>
      <div class="container_button">
        <button class="card_button">Lire la fiche</button>
      </div>
    </div>

</template>

<script>

export default {
  data: function () {
    return {

    }
  },
  name: 'card',
  props: {
    cardTitle: String,
    record: String,
    years: String,
    tournament: String
  },
  components: {

  }
}

</script>

<style lang="scss" scoped>

.card {
  background: #ffffff;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
  border-radius: 18px;
  padding: 1rem 1.5rem;
  @media screen and (min-width: 900px) {
    max-width: 300px;
    margin-left: 3rem;
  }
}

.card_button {
  background: #235789;
  border-radius: 10px;
  color: white;
  padding: 10px 20px;
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
.container_button {
  display: flex;
  justify-content: center;
}
</style>
