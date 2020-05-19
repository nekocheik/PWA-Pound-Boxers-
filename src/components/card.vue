<template>
   <div class="card">
      <div class="title_rank">
        <p class="card_title">{{cardRitle}}</p>
        <div class="rank">
          <p>10</p>
        </div>
      </div>
      <div class="container_text">
        <p class="card_text">{{record}}</p>
        <p class="card_text">Years Active: 1975-1982</p>
      </div>
      <div class="container_text">
        <p class="card_text">Championships:</p>
        <p class="card_text">WBC Featherweight</p>
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
  display: none;
  padding: 1rem 1.5rem;
  @media screen and (min-width: 900px) {
    max-width: 300px;
    margin-left: 3rem;
  }
}
</style>
