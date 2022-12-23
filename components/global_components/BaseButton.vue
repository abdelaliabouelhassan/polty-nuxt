<template>
  <div
    class="baseButton"
    :class="{ fit: fit }"
    :style="{ background: backColor }"
  >
    <slot></slot>
  </div>
</template>
<style scoped>
.baseButton {
  border-radius: 50px;
  padding: 0.5rem;
  display: flex;
  align-items: center;
  width: 100%;
  cursor: pointer;
}
.baseButton:hover {
  opacity: 0.8;
}

.fit {
  width: max-content;
}
</style>
<script>
export default {
  props: {
    fit: Boolean,
    backColor: String,
  },
};
</script>
