<template>
  <div class="modal">
    <div class="modal-bg"></div>
    <div class="modal">
      <div class="modal-container">
        <div class="user_info_card">
          <BaseCard
            style="margin: auto"
            max_width="40rem"
            outline
            outline_c="var(--primary-lite-color)"
          >
            <template #content>
              <div class="user_info_card_body">
                <div class="user_info_title">Unverbindliche Anfrage</div>
                <div class="user_info_subtitle">
                  Bitte geben Sie ihre Daten ein und klicken sie auf Senden
                </div>

                <form class="user_info_form">
                  <ul>
                    <li v-for="error in errors" :key="error" style="color: red">
                      {{ error }}
                    </li>
                  </ul>

                  <div>
                    <label>Vorname</label>
                    <input
                      v-model="form.firstname"
                      type="text"
                      placeholder="Vorname eingeben"
                    />
                  </div>
                  <div>
                    <label>Nachname</label>
                    <input
                      v-model="form.lastname"
                      type="text"
                      placeholder="Nachname eingeben"
                    />
                  </div>
                  <div>
                    <label>Email</label>
                    <input
                      v-model="form.email"
                      type="email"
                      placeholder="Email eingeben"
                    />
                  </div>
                </form>
                <div class="user_info_badge" @click="CloseModal">Abbrechen</div>
              </div>
            </template>
            <template #footer>
              <div class="user_info_footer">
                <SendButton @click.native="Send" />
              </div>
            </template>
          </BaseCard>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import SendButton from "../page_components/SendButton.vue";
import BaseCard from "../global_components/BaseCard2.vue";
// import axios from "axios";

export default {
  components: {
    SendButton,
    BaseCard,
  },
  props: {
    products: {
      type: Array,
      default: () => [],
    },
    selected_plan: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {
      form: {
        firstname: "",
        lastname: "",
        email: "",
      },
      errors: [],
      loading: false,
    };
  },
  methods: {
    CloseModal() {
      this.$root.$emit("closeModal");
    },
    Send() {
      if (!this.validate()) {
        return;
      }
      if (this.loading) {
        return;
      }
      this.loading = true;
      axios
        .post("/api/send", {
          form: this.form,
          products: this.products,
          selected_plan: this.selected_plan,
        })
        .then((res) => {
          console.log(res);
          if (res.data.code == 200) {
            this.$root.$emit("emailSent");
          }

          this.loading = false;
        })
        .catch((err) => {
          console.log(err);
          this.loading = false;
        });
    },
    validate() {
      this.errors = [];
      if (this.form.firstname.length < 3) {
        this.errors.push("Vorname muss mindestens 3 Zeichen lang sein");
      }
      if (this.form.lastname.length < 3) {
        this.errors.push("Nachname muss mindestens 3 Zeichen lang sein");
      }
      if (this.form.email.length < 3) {
        this.errors.push("Email muss mindestens 3 Zeichen lang sein");
      }
      //validate email
      let exp = /\S+@\S+\.\S+/;
      if (!exp.test(this.form.email)) {
        this.errors.push("Email ist nicht gültig");
      }

      if (this.errors.length > 0) {
        return false;
      }
      return true;
    },
  },
};
</script>
<style scoped>
ul {
  padding: 0;
  margin: 0;
  text-align: start;
}

li {
  margin: 0;
  padding: 0;
  text-align: start;
}

.user_info_card_body {
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  padding: 15px;
}
.user_info_title {
  font-size: 1.5rem;
  font-weight: bold;
  margin: 1rem 0;
}
.user_info_subtitle {
  font-size: 0.85rem;
  color: var(--lite-font-color);
}
.user_info_form {
  padding: 50px 0px 0px 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  text-align: start;

  /* align-items: center; */
}
.user_info_form > div {
  padding: 10px 0;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  width: 100%;
  max-width: 20rem;
  align-items: flex-start;
}
.user_info_form > div > label {
  font-weight: bold;
}
.user_info_form > div > input {
  border: 1px solid var(--secondary-color);
  margin-top: 5px;
  padding: 5px 10px;
  font-size: 0.9rem;
  border-radius: 5px;
  outline-color: var(--purple-color);
  width: 100%;
}

.user_info_badge {
  position: absolute;
  padding: 3px 5px;
  top: 0;
  left: 0;
  font-size: 0.9rem;
  background: var(--primary-lite-color);
  cursor: pointer;
}
.user_info_badge:hover {
  opacity: 0.5;
}
.user_info_footer {
  display: flex;
  justify-content: center;
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
