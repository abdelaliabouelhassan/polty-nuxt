<template>
  <div class="modal">
    <div class="modal-bg"></div>
    <div class="modal">
      <div class="modal-container">
        <div class="thank_you_card">
          <BaseCard
            style="margin: auto"
            max_width="35rem"
            outline
            outline_c="var(--primary-lite-color)"
          >
            <template #content>
              <div class="thank_you_card_body">
                <div class="thank_you_card_body_title">
                  Danke für ihre Anfrage
                </div>
                <div class="thank_you_card_body_subtitle">
                  Wir melden uns bei ihnen unter der angegebenen Email Adresse
                </div>
              </div>
            </template>
            <template #footer>
              <div class="thank_you_card_footer">
                <div @click="CloseModal">Schließen</div>
              </div>
            </template>
          </BaseCard>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BaseCard from "../global_components/BaseCard2.vue";

export default {
  components: {
    BaseCard,
  },
  methods: {
    CloseModal() {
      this.$root.$emit("closeModal");
    },
  },
};
</script>

<style scoped>
.thank_you_card_body {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 15px;
}
.thank_you_card_body_title {
  font-size: 1.5rem;
  font-weight: bold;
  margin: 1rem 0;
}
.thank_you_card_body_subtitle {
  font-size: 0.85rem;
  color: var(--lite-font-color);
}

.thank_you_card_footer {
  display: flex;
  justify-content: center;
  padding: 20px 0;
}
.thank_you_card_footer > div {
  padding: 3px 5px;
  font-size: 0.9rem;
  background: var(--primary-lite-color);
  cursor: pointer;
}

.thank_you_card_footer > div:hover {
  opacity: 0.6;
}

.modal {
  position: fixed;
  top: 0px;
  right: 0px;
  bottom: 0px;
  left: 0px;
  z-index: 10;
}

.modal-bg {
  position: fixed;
  top: 0px;
  right: 0px;
  bottom: 0px;
  left: 0px;
  background: rgba(126, 123, 123, 0.463);
  transition-property: opacity;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}

.modal-container {
  min-height: 100%;
  height: 100%;
  width: 100%;
  align-items: center;
  justify-content: center;
  padding-top: 2rem;
  text-align: center;
}

@media (min-width: 29rem) {
  /*sm*/
  .user_info_card_body {
    padding: 30px;
  }
}
</style>
