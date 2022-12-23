<template>
  <div
    class="plan_logo"
    :style="{
      background: '',
      outlineColor: outlineColor,
      outlineWidth: outline,
    }"
  >
    <svg
      id="Group_62"
      data-name="Group 62"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      :width="width"
      :height="height"
      viewBox="0 0 88.7 88.7"
    >
      <defs>
        <linearGradient
          :id="'linear-gradient-'+ index"
          x1="1.007"
          y1="-0.048"
          x2="-0.012"
          y2="1.028"
          gradientUnits="objectBoundingBox"
        >
            <stop v-if="business" offset="0" stop-color="#D900B8" />
            <stop  v-if="business"  offset="1" stop-color="#950084" />

            <stop  v-if="business_pro"  offset="0" stop-color="#00d8ff"/>
            <stop   v-if="business_pro" offset="1" stop-color="#005c8d"/>

            <stop   v-if="custom" offset="0" stop-color="#155188"/>
            <stop  v-if="custom"  offset="1" stop-color="#001324"/>
        </linearGradient>
      </defs>
      <path
        id="Path_28"
        data-name="Path 28"
        d="M52.777,0H35.925C7.931,0,0,7.927,0,35.925V52.778C0,80.771,7.931,88.7,35.925,88.7H52.777C80.77,88.7,88.7,80.771,88.7,52.778V35.925C88.7,7.932,80.77,0,52.777,0m6.866,27.814H57.9v35.84a3.756,3.756,0,0,1-3.424,3.818,3.618,3.618,0,0,1-3.813-3.612V27.814H45.007a3.5,3.5,0,0,0-3.495,3.495v9a3.556,3.556,0,0,0,2.016,3.159A7.743,7.743,0,0,1,47.8,50.39V63.654a3.757,3.757,0,0,1-3.424,3.818,3.618,3.618,0,0,1-3.813-3.612V52.168a3.472,3.472,0,0,0-2.789-3.415C30.865,47.4,25.763,42.772,25.763,35.11v-.118c0-8.3,6-13.767,15.65-13.767H59.457a3.419,3.419,0,0,1,3.476,3.117,3.294,3.294,0,0,1-3.289,3.472"
        transform="translate(0 0)"
        :fill="`url(#linear-gradient-${index})`"
      />
    </svg>

    

  </div>
</template>
<script>
export default {
  props: {
    business: Boolean,
    business_pro: Boolean,
    custom: Boolean,
    outline: String,
    width: String,
    height: String,
  },
  data(){
    return {
        index:0,
    }
  },
  computed: {
    backgroundColor() {
      if (this.business) {
        return "var(--pink-gradient)";
      }
      if (this.business_pro) {
        return "var(--skyBlue-gradient)";
      }
      if (this.custom) {
        return "var(--primary-gradient)";
      }
    },
    outlineColor() {
      if (this.business) {
        return "var(--pink-lite-color)";
      }
      if (this.business_pro) {
        return "var(--skyBlue-lite-color)";
      }
      if (this.custom) {
        return "var(--primary-lite-color)";
      }
    },
  },
  created(){
    this.index = Math.floor(Math.random() * 1000) + Math.floor(Math.random() * 1000);
  }
};
</script>
<style scoped>
.plan_logo {
  border-radius: 35%;

  outline-width: 6px;
  outline-style: solid;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
