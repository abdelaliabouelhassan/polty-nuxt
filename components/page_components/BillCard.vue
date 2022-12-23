<template>
  <div class="bill_card">
    <BaseCard min_width="20rem" max_width="40rem">
      <template #content>
        <div class="bill_content bill_content_w">
          <div class="content_service">
            <div>Content Service</div>
            <div>{{ total }} €</div>
          </div>
          <div
            class="products"
            v-for="(product, index, key) in products"
            :key="key"
          >
            <div class="product">
              <div class="product_name">
                {{ index + 1 }}. {{ product.name }}
              </div>
              <div>- {{ product.difficulty }}</div>
              <div>- {{ product.qty }} Varianten</div>
            </div>
            <div class="">{{ product.total }} €</div>
          </div>
          <div class="bill_plan" v-if="selected_plan.id">
            <div class="plan_title">
              <PlanLogo
                business_pro
                width="25"
                height="25"
                :business="selected_plan.id == 'business'"
                :business_pro="selected_plan.id == 'business_pro'"
                :custom="selected_plan.id == 'custom'"
              />
              <span>{{ selected_plan.name }}</span>
            </div>
            <div class="">{{ selected_plan.yearly }} € / Jahr</div>
          </div>
        </div>
      </template>
      <template #footer>
        <div class="bill_footer">
          <div>Total</div>
          <div>{{ FinalPrice }} €</div>
        </div>
      </template>
    </BaseCard>
  </div>
</template>

<script>
import BaseCard from "@/components/global_components/BaseCard.vue";
import PlanLogo from "./PlanLogo.vue";

export default {
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
  components: {
    BaseCard,
    PlanLogo,
  },
  computed: {
    total() {
      return this.products.reduce((acc, product) => acc + product.total, 0);
    },
    FinalPrice() {
      return Number(this.total) + Number(this.selected_plan.yearly);
    },
  },
};
</script>

<style scoped>
.sub_card_head_logo {
  width: 20px;
  height: 20px;
  border-radius: 35%;
  outline-width: 3px;
  outline-style: solid;
}
.bill_card {
  font-size: 1.2rem;
  font-weight: 500;
}
.bill_content,
.bill_footer {
  padding: 0 20px;
}
.bill_content > div,
.bill_footer {
  display: flex;
  justify-content: space-between;
}

.bill_footer {
  color: #02303b;
  font-family: Inter;
  font-weight: 700;
}

.bill_content > div > div:first-child {
  margin-right: 20px;
  text-align: start;
}
.bill_content > div > div:nth-child(2) {
  flex-shrink: 1/3;
  text-align: end;
}
.content_service {
  margin-bottom: 15px;
}
.products {
  margin-bottom: 25px;
  font-size: 0.9rem;
  font-weight: 400;
  color: var(--light-font-color);
  opacity: 0.5;
}
.product {
  text-align: start;
}
.product > div:not(.product_name) {
  padding-left: 10px;
}

.bill_plan {
  border-top: 3px solid var(--primary-lite-color);
  padding-top: 20px;
}
.plan_title {
  display: flex;
  align-items: center;
  font-weight: 500;
  color: #02303b;
}
.plan_title span {
  margin-left: 10px;
}
</style>
