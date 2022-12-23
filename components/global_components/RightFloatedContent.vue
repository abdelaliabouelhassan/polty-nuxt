<template>
  <div class="right_floated_content" :class="{ padding: padding }">
    <div :class="{ content: rowend }">
      <slot></slot>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    padding: String,
    rowend: {
      type: Boolean,
      default: false,
    },
  },
};
</script>
<style scoped>
.right_floated_content {
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  box-sizing: border-box;
  font-weight: bold;
  color: var(--light-font-color);
}
.content {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-end;
}
</style>
