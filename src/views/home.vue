<template>
  <div class="hcGradient">
    <p class="homeText">Code your own adventure</p>
    <img style="width:90%;" src="../assets/whiteHCLetters.svg">
  </div>
</template>
<script>
</script>
<style>
  .hcGradient {
    width: 100%;
    height: 100%;
    margin: 0px;
    background-image: linear-gradient(-45deg, #FF1EA2, #FF5004);
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
  }
  .homeText {
    font-weight: bold;
    font-size: 8vw;
    padding-bottom: 100px;
    font-weight: bold;
  }
  @media only screen and (max-width: 700px){
    .hcGradient {
      padding-bottom: 40% !important;
    }
  }
</style>
