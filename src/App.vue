<template>
<div id="app">
  <header>
    <div class=" header_wrapper">
    <h1 class="page_title">Jokes for Days</h1>
    </div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="navbar-nav">
        <router-link to="/">
          <div class="Home">
            <p>Home</p>
          </div>
        </router-link>
        <router-link to="/submit">
          <div class="Submit">
            <p>Submit</p>
          </div>
        </router-link>
      </div>
  </nav>
  </header>
  <body>
    <router-view/>
  </body>
  <footer class="site_footer">
    <div class="footer_wrapper">
      Github Repository <a style="color: #225560;" target="_blank" href="https://github.com/storgers998/creativeProj3.git"> storgers998 </a>
    </div>
  </footer>
</div>
</template>


<style>
.header_wrapper {
        box-sizing: border-box;
        background-color: #FF8C42;
        height: 150px;
        padding-top: 50px;
      }
      .page_title {
        text-align: center;
        color: #13070C;
        font-family: Impact, fantasy;
      }
      body{
        background-color: #DBCBD8;
      }
      .page_wrapper{
        padding: 50px 50px 50px 50px;
      }
      .bg-light, .navbar * {
        background-color: #225560!important;
        color: #EDF060!important;
      }

      @media only screen and (min-width: 1px) {
        .masonry {
          column-count: 4;
        }
      }
      /* Masonry on medium-sized screens */
      @media only screen and (max-width: px) and (min-width: 701px) {
        .masonry {
          column-count: 2;
        }
      }
      /* Masonry on small screens */
      @media only screen and (max-width: 700px){
        .masonry {
          column-count: 1;
        }
      }
      .item {
        background-color: #FFFFFF;
        border: 20px;
        border-style: solid;
        width: 300px;
        height: 300px;
        text-align: center;
        color: #13070C;
        font-family: Impact, fantasy;
        vertical-align: middle;
        padding-top: 120px;
      }
</style>
