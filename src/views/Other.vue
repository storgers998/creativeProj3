<template>
<div>
  <div class="page_wrapper">
      <h2>If you have any jokes that you would like to submit, click the submission button below, to send us an email!</h2>
      <router-link to="/submit">
        <div class="daily_button">
              Share your Jokes
        </div>
      </router-link>
  </div>
  <JokeList :jokes="otherjokes" />
</div>
</template>

<script>
import JokeList from "../components/JokeList.vue"
export default {
  name: 'Browse',
  components: {
    JokeList
  },
  data() {
    return {
    }
  },
  computed: {
    otherjokes() {
      return this.$root.$data.otherjokes;
    }
  },
  methods: {
  }
}
</script>
