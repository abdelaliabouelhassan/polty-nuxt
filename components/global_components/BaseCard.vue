<template>
  <div
    class="base_card_container"
    ref="base_card"
    :class="{ outlined: outline }"
    :style="{ borderColor: outline_c }"
  >
    <BaseRoundWrapper
      margin="1.5px"
      padding="0"
      rounded="22px"
      border="1.5px"
      border_c="var(--primary-lite-color)"
      back_c="var(--secondary-lite-color)"
      :style="{ maxWidth: max_width }"
    >
      <div
        class="base_card"
        :style="{ width: _width, minWidth: min_width, maxWidth: max_width }"
      >
        <div class="base_card_content">
          <slot name="content"></slot>
        </div>
        <div class="base_card_footer">
          <slot name="footer"></slot>
          {{ highlight }}
        </div>
      </div>
    </BaseRoundWrapper>
  </div>
</template>
<script>
import BaseRoundWrapper from "./BaseRoundWrapper.vue";
export default {
  props: {
    _width: String,
    min_width: String,
    max_width: String,
    outline: Boolean,
    outline_c: String,
    highlighted_c: String,
    highlight: false,
  },
  methods: {
    activateHighlight() {
      if (this.highlighted_c) {
        this.$refs.base_card.style.borderColor = this.highlighted_c;
      }
    },
    deactivateHighlight() {
      if (this.highlighted_c) {
        this.$refs.base_card.style.borderColor = this.outline_c;
      }
    },
  },
  components: {
    BaseRoundWrapper,
  },
  watch: {
    highlight() {
      if (this.highlight) {
        this.activateHighlight();
      } else {
        this.deactivateHighlight();
      }
    },
  },
};
</script>
<style scoped>
.base_card_container {
  border-radius: 29px;
  overflow: hidden;
  /* width: fit-content; */
}

.base_card_content {
  padding: 30px 20px;
  background: white;
}
.base_card_footer {
  padding: 20px 20px;

  background: var(--main-background-color);
}
.outlined {
  border-width: 6px;
  border-style: solid;
  /* border-color: var(--purple-color); */
}
.highlighted {
  border-color: var(--purple-color);
}
</style>
