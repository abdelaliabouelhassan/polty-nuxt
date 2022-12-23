<template>
  <div class="counter_wrapper">
    <button @click="decrease">-</button>
    <div class="counter_number">{{ count }}</div>
    <button @click="increase">+</button>
  </div>
</template>
<script>
export default {
  props: ["value"],
  data() {
    return {
      count: this.value,
    };
  },

  methods: {
    increase() {
      this.count++;
      this.$emit("input", this.count);
    },
    decrease() {
      if (this.count <= 0) return;
      this.count--;
      this.$emit("input", this.count);
    },
  },
};
</script>

<style scoped>
.counter_wrapper {
  background: var(--primary-color);
  padding: 5px;
  border-radius: 7px;
  overflow: hidden;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: fit-content;
  height: 25px;
  color: white;
  flex-shrink: 0;
}
.counter_wrapper > div {
  padding: 4px 6px;
}
.counter_number {
  background: white;
  color: var(--primary-color);
  border-radius: 5px;
  min-width: 20px;
  text-align: center;
}

.counter_wrapper > button {
  background: transparent;
  border: none;
  cursor: pointer;
  font-size: 1.2rem;
  font-weight: 500;
  padding: 0 5px;
  color: white;
  width: 20px;
  text-align: center;
}

.counter_wrapper > button:hover {
  scale: 1.3;
}
</style>
