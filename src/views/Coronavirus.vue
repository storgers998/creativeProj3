<template>
<div>
  <JokeList :jokes="jokes" />
</div>
</template>

<script>
import JokeList from "../components/JokeList.vue"
export default {
  name: 'Coronavirus',
  components: {
    JokeList
  },
  data() {
    return {
    }
  },
  computed: {
    jokes() {
      return this.$root.$data.coronavirus;
    }
  },
  methods: {
  }
}
</script>
