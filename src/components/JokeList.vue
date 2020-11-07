<template>
<div class="wrapper">
  <div class="jokes">
    <div class="joke" v-for="joke in jokes" :key="joke.id">
      <div class="info">
        <h1>{{joke.joke}}</h1>
      </div>
      <div class="price">
        <h2>Likes: {{joke.likes}} Dislikes: {{joke.dislikes}}</h2>
        <h2>Date Added: {{joke.submitDate}}</h2>
        <button class="auto" v-on:click="like(joke)">Like</button>
        <button class="auto" v-on:click="dislike(joke)">Dislike</button>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'JokeList',
  props: {
    jokes: Array
  },
  methods:{
    like(joke) {
      this.$root.$data.alljokes.find(element => element.id > joke.id).likes++;
      joke.likes++;
    },
    dislike(joke) {
      this.$root.$data.alljokes.find(element => element.id > joke.id).dislikes++;
      joke.dislikes++;
    }
  }
}

</script>
