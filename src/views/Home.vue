<template>
  <div class="page_wrapper">
    <div class="masonry">
      <router-link to="/puns">
        <div class="item" style="border-color: #13070C;">
          Puns
        </div>
      </router-link>
      <router-link to="/coronavirus">
        <div class="item" style="border-color: #EDF060;">
          Corona Virus
        </div>
      </router-link>
      <router-link to="/churchjokes">
        <div class="item" style="border-color: #225560;">
          Church Jokes
        </div>
      </router-link>
      <router-link to="/other">
        <div class="item" style="border-color: #FF8C42;">
          Other
        </div>
      </router-link>
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'Home',
  components: {
  },
  data() {
    return {
      searchText: '',
    }
  },
  computed: {
  },
}
</script>

<style scoped>
.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
}

.search {
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 50%;
}

form {
  display: table;
  width: 100%;
}

i {
  display: table-cell;
  padding-left: 10px;
  width: 1px;
}

input {
  display: table-cell;
  font-size: 20px;
  border: none !important;
  box-shadow: none !important;
  width: 100%;
  height: 40px;
}
</style>
