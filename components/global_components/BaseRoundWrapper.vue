<template>
  <div
    class="wrapper"
    :class="{ border: border_c, outline: outline_c }"
    :style="{
      borderColor: border_c,
      background: back_c,
      outlineColor: outline_c,
      borderWidth: border,
      outlineWidth: outline,
      borderRadius: rounded,
      padding: padding,
      margin: margin,
    }"
  >
    <slot></slot>
  </div>
</template>
<script>
export default {
  props: {
    border_c: String,
    back_c: String,
    outline_c: String,
    fit: Boolean,
    rounded: String,
    border: String,
    outline: String,
    padding: String,
    margin: String,
  },
};
</script>

<style scoped>
.wrapper {
  border-radius: 12px;
  overflow: hidden;
  padding: 5px;
  display: flex;

  /* width: fit-content; */
}
.wrapper:hover {
  opacity: 0.8;
}
.border {
  border-width: 3px;
  border-style: solid;
}
.outline {
  outline-width: 6px;
  outline-style: solid;
}
</style>
