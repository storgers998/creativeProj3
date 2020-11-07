<template>
<div>
  <div class="page_wrapper">
    <textarea id="jokeText"></textarea>
    <br/>
    <button class="auto" v-on:click="addJoke()">Submit Joke</button>

    <h2> Also, here is a funny video of a cat smelling broccoli</h2>
    <iframe width="1200" height="700"  src="https://www.youtube.com/embed/purJ2hIXv0c" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
  </div>
</div>
</template>
<script>
export default {
  name: 'Submit',
  components: {
  },
  data() {
    return {
    }
  },
  computed: {
  },
  methods: {
    addJoke() {
    var jokestring = document.getElementById("jokeText").value;
    if(jokestring != ''){
      var jokesubmition = {
          id: this.$root.$data.currId++,
          joke: jokestring,
          likes: 0,
          dislikes: 0,
          submitDate: "Nov 7, 2020"
        }
        this.$root.$data.otherjokes.push(jokesubmition);
        alert("joke was submitted");
      } else{
        alert("please write a joke first");
      }
    },
  },
}
</script>
