<template>
  <v-container class="full-size">
    <v-row id="row-secondary" style="background-color: greenyellow" no-gutters>
      <p>Title</p>
    </v-row>
    <v-row id="row-main" no-gutters>
      <button
        id="btn-punch"
        :style="gradient"
        :disabled="Object.values(gradient).some((style) => !style)"
      >
        Toggle
      </button>
    </v-row>
    <v-row id="row-secondary" style="background-color: orange" no-gutters>
      <section>extra info</section>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "HomePage",
  data() {
    return {
      lastAction: undefined,
      currentAction: "out",
      totalHours: -1,
      preferences: {},
      gradient: this.getGradient(),
    };
  },
  methods: {
    getGradient: function () {
      if (!this.currentAction) return {};

      if (this.currentAction === "in") {
        return {
          "--left-grad": "#0fd850",
          "--right-grad": "#f9f047",
          "--h-animation": "linear",
        };
      }

      if (this.currentAction === "out") {
        return {
          "--left-grad": "#fc502d",
          "--right-grad": "#ff7919",
          "--h-animation": "linear",
        };
      }
    },
  },
  // beforeRouteEnter() {
  //   console.log("before");
  // },
};
</script>

<style scoped>
:root {
  --h-animation: none;
}

.full-size {
  height: 100%;
  width: 100vw;
  display: flex;
  flex-direction: column;
  column-gap: 30px;
}

.row {
  justify-content: center;
  align-items: center;
}

#row-main {
  flex: 1.5;
}

#row-secondary {
  flex: 0.5;
}

#btn-punch {
  width: 25em;
  height: 25em;
  border-radius: 5em;
  border: none;
  position: relative;
  overflow: hidden;
  z-index: 1;
  box-shadow: 20px 20px 60px #bcbcbc, -20px -20px 60px #fefefe;
}

#btn-punch:hover {
  animation: color-change 0.5s var(--h-animation);
  animation-fill-mode: forwards;
}

@keyframes color-change {
  0% {
    color: #bcbcbc;
  }
  50% {
    color: #fefefe;
  }
  100% {
    color: white;
  }
}

#btn-punch::before {
  content: "";
  width: 0;
  height: 25em;
  border-radius: 5em;
  position: absolute;
  top: 0;
  left: 0;
  /* background-image: linear-gradient(
    125deg,
    var(--left-grad) 0%,
    var(--right-grad) 100%
  ); */
  background-image: linear-gradient(125deg, #0fd850 0%, #f9f047 100%);
  /* background-image: linear-gradient(125deg, rgb(250, 48, 48) 0%, #ffc508 100%); */
  transition: 0.5s ease;
  display: block;
  z-index: -1;
}

#btn-punch:hover::before {
  width: 25em;
}
</style>