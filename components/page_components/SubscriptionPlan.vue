<template>
  <div
    class="subscription_plan"
  >
    <BaseCard
      _width="20rem"
      outline
      :outline_c="outline_c"
      :highlighted_c="highlighted_c"
      :highlight="highlight"
    >
      <template #content>
        <div class="sub_card_body">
          <div class="sub_card_head">
            <div class="sub_card_head_logo">
              <PlanLogo
                width="40" height="40"
                :business="business"
                :business_pro="business_pro"
                :custom="custom"
              />
            </div>
            <div class="sub_card_head_titles">
              <h1 class="sub_card_head_title">
                <slot name="title">Polyte Business</slot>
              </h1>
              <div class="sub_card_head_subtitle">
                <slot name="sub_title">Ideal für Scale-Ups</slot>
              </div>
            </div>
          </div>

          <div class="sub_card_content">
            <div class="sub_card_content_line">
              <div class="sub_card_content_line_left">Impressions:</div>
              <div class="sub_card_content_line_right">
                <slot name="impressions"> 20.000 / Monat</slot>
              </div>
            </div>
            <div class="sub_card_content_line">
              <div class="sub_card_content_line_left">Cloud Storage:</div>
              <div class="sub_card_content_line_right">
                <slot name="cloud_storage">800 GB</slot>
              </div>
            </div>
            <div class="sub_card_content_line">
              <div class="sub_card_content_line_left">Support Level:</div>
              <div class="sub_card_content_line_right">
                <slot name="support_level">E-MAIL</slot>
              </div>
            </div>
          </div>
          <div class="sub_card_more_link">
            <BaseButton fit :backColor="color">
              <span style="padding: 0 10px; color: white; font-size: 0.8rem"
                >Learn more</span
              >
            </BaseButton>
          </div>
        </div>
      </template>

      <template #footer>
        <div class="sub_card_footer">
          <RightFloatedContent :rowend="true">
            <div class="monthly_price" :class="{ highlighted: highlight }">
              <slot name="monthly_price"></slot>
            </div>
            <div class="annual_price">
              <slot name="annual_price"></slot>
            </div>
          </RightFloatedContent>
        </div>
      </template>
    </BaseCard>
  </div>
</template>
<script>
import RightFloatedContent from "@/components/global_components/RightFloatedContent.vue";
import BaseCard from "@/components/global_components/BaseCard.vue";
import BaseButton from "@/components/global_components/BaseButton.vue";
import PlanLogo from "./PlanLogo.vue"
export default {
  props: {
    outline_c: String,
    highlighted_c: String,
    color: String,
    business: Boolean,
    business_pro: Boolean,
    custom: Boolean,
    highlight: Boolean,
  },
 
  components: {
    RightFloatedContent,
    BaseCard,
    BaseButton,
    PlanLogo
  },
};
</script>

<style scoped>
.subscription_plan {
  width: fit-content;
   cursor: pointer;
}

.sub_card_body {
  display: flex;
  flex-direction: column;
}

.sub_card_head {
  display: flex;
  align-items: center;
}

.sub_card_head_title,
.sub_card_head_subtitle {
  margin: 5px 15px;
  text-align: start;
}
.sub_card_head_subtitle {
    opacity: 0.5;
}
.sub_card_head_title {
  font-size: 1.2rem;
}
.sub_card_head_subtitle {
  font-size: 0.9rem;
  color: var(--light-font-color);
}

.sub_card_content {
  margin: 20px 0;
  color: var(--light-font-color);
  font-weight: 500;
  opacity: 0.5;
}
.sub_card_content_line {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  text-align: start;
  margin: 10px 0;
}

.sub_card_content_line_left {
  width: 45%;
}
.sub_card_content_line_right {
  width: 50%;
}

.sub_card_more_link {
  align-self: center;
  height: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.sub_card_footer {
  text-align: end;
}
.monthly_price {
  font-weight: bold;
  color: var(--primary-color);
  height: 1.2rem;
}
.annual_price {
  font-size: 0.85rem;
  font-weight: 400;
  margin-top: 5px;
  height: 1rem;
  opacity: 0.5;
}

.highlighted {
  color: var(--purple-color);
}
</style>
