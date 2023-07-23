<template>
  <span>
    <div class="loader">
      <div class="box box-1">
        <div class="side-left"></div>
        <div class="side-right"></div>
        <div class="side-top"></div>
      </div>
      <div class="box box-2">
        <div class="side-left"></div>
        <div class="side-right"></div>
        <div class="side-top"></div>
      </div>
      <div class="box box-3">
        <div class="side-left"></div>
        <div class="side-right"></div>
        <div class="side-top"></div>
      </div>
      <div class="box box-4">
        <div class="side-left"></div>
        <div class="side-right"></div>
        <div class="side-top"></div>
      </div>
    </div>
  </span>
</template>

<style scoped>
  span {
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    margin-right: auto;
    margin-left: auto;
  }

  .loader {
    scale: 3;
    height: 50px;
    width: 40px;
  }

  .box {
    position: relative;
    opacity: 0;
    left: 10px;
  }

  .side-left {
    position: absolute;
    background-color: #53b570; /* Modified color */
    width: 19px;
    height: 5px;
    transform: skew(0deg, -25deg);
    top: 14px;
    left: 10px;
  }

  .side-right {
    position: absolute;
    background-color: #318149; /* Modified color */
    width: 19px;
    height: 5px;
    transform: skew(0deg, 25deg);
    top: 14px;
    left: -9px;
  }

  .side-top {
    position: absolute;
    background-color: #66aa7b; /* Modified color */
    width: 20px;
    height: 20px;
    rotate: 45deg;
    transform: skew(-20deg, -20deg);
  }

  .box-1 {
    animation: from-left 2s infinite; /* Adjusted animation duration to 2s */
  }

  .box-2 {
    animation: from-right 2s infinite; /* Adjusted animation duration to 2s */
    animation-delay: 0.5s; /* Adjusted animation delay */
  }

  .box-3 {
    animation: from-left 2s infinite; /* Adjusted animation duration to 2s */
    animation-delay: 1s; /* Adjusted animation delay */
  }

  .box-4 {
    animation: from-right 2s infinite; /* Adjusted animation duration to 2s */
    animation-delay: 1.5s; /* Adjusted animation delay */
  }

  @keyframes from-left {
    0% {
      z-index: 20;
      opacity: 0;
      transform: translate(-20px, -6px);
    }

    20% {
      z-index: 10;
      opacity: 1;
      transform: translate(0, 0);
    }

    40% {
      z-index: 9;
      transform: translate(0, 4px);
    }

    60% {
      z-index: 8;
      transform: translate(0, 8px);
    }

    80% {
      z-index: 7;
      opacity: 1;
      transform: translate(0, 12px);
    }

    100% {
      z-index: 5;
      transform: translate(0, 30px);
      opacity: 0;
    }
  }

  @keyframes from-right {
    0% {
      z-index: 20;
      opacity: 0;
      transform: translate(20px, -6px);
    }

    20% {
      z-index: 10;
      opacity: 1;
      transform: translate(0, 0);
    }

    40% {
      z-index: 9;
      transform: translate(0, 4px);
    }

    60% {
      z-index: 8;
      transform: translate(0, 8px);
    }

    80% {
      z-index: 7;
      opacity: 1;
      transform: translate(0, 12px);
    }

    100% {
      z-index: 5;
      transform: translate(0, 30px);
      opacity: 0;
    }
  }
</style>
