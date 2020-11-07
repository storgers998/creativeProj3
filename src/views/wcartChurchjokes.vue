<template>
<div>
  <JokeList :jokes="jokes" />
  <ProductList :products="products"/>
</div>
</template>

<script>
import JokeList from "../components/JokeList.vue"
import ProductList from "../components/ProductList.vue"
export default {
  name: 'Churchjokes',
  components: {
    ProductList,
    JokeList
  },
  data() {
    return {
    }
  },
  computed: {
    jokes() {
      return this.$root.$data.churchjokes;
    },
    products() {
      return this.$root.$data.products;
    }
  },
  methods: {
  }
}
</script>
