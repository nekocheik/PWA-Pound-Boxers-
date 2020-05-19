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
    <div class="card">
      <div class="title_rank">
        <p class="card_title">Salvador Sanchez</p>
        <div class="rank">
          <p>10</p>
        </div>
      </div>

      <div class="container_text">
        <p class="card_text">Record: 44-1-1, 32 KO</p>
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
  </div>
</template>

<style lang="scss" scoped>
.article_subtitle {
  text-align: center;
  margin-bottom: 2rem;
}
.article_input {
  border: 2px solid #c1292e;
  padding: 10px 40px;
  border-radius: 29px;
}
.article_input::placeholder {
  color: #c1292e;
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
}
.card {
  background: #ffffff;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
  border-radius: 18px;
  padding: 1rem 1.5rem;
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
