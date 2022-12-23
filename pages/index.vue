<template>
  <div id="checkout_page">
    <section id="hero" class="container" style="padding-bottom: 7rem">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="107.383"
        height="115.426"
        viewBox="0 0 107.383 115.426"
      >
        <path
          id="Path_4913"
          data-name="Path 4913"
          d="M506.652,1156.63l-21.694,45.045a3.266,3.266,0,0,0,1.176,4.166h0a28.018,28.018,0,0,1,12.8,18.13.577.577,0,0,1-.557.7H496.6a1.083,1.083,0,0,0-1.085,1.082v4.563H493.8a1.085,1.085,0,0,0-1.085,1.084v14.933a1.083,1.083,0,0,0,1.085,1.085h35.741a1.083,1.083,0,0,0,1.085-1.085V1231.4a1.085,1.085,0,0,0-1.085-1.084h-1.714v-4.563a1.081,1.081,0,0,0-1.082-1.082H524.96a.575.575,0,0,1-.557-.7,28.024,28.024,0,0,1,12.8-18.13h0a3.264,3.264,0,0,0,1.179-4.166l-21.7-45.045a2.228,2.228,0,0,0-2.01-1.265h-6.011A2.235,2.235,0,0,0,506.652,1156.63Zm5.018,35.94a3.317,3.317,0,1,1-3.317,3.317A3.32,3.32,0,0,1,511.67,1192.57Zm14.52,50.931H497.15a.514.514,0,0,1-.515-.512v-8.235a.514.514,0,0,1,.515-.515h29.041a.516.516,0,0,1,.515.515v8.235A.515.515,0,0,1,526.191,1243.5Zm-26.759-13.182v-1.725h24.475v1.725Zm16.512-5.645H507.4a2.058,2.058,0,0,1-2-1.638A34.47,34.47,0,0,0,492.054,1202l16.177-33.588a.95.95,0,0,1,1.806.413v18.809a2.82,2.82,0,0,1-1.484,2.483,6.584,6.584,0,1,0,6.165-.037,2.745,2.745,0,0,1-1.414-2.449v-18.806a.949.949,0,0,1,1.8-.413L531.284,1202a34.468,34.468,0,0,0-13.342,21.039A2.062,2.062,0,0,1,515.943,1224.674Zm43.169-77.512a6.248,6.248,0,1,0-6-7.882H520.587V1135.4a3.409,3.409,0,0,0-3.408-3.408H506.161a3.409,3.409,0,0,0-3.408,3.408v3.875H470.231a6.249,6.249,0,1,0,0,3.267h24.31a46.366,46.366,0,0,0-28.837,37.059h-4.8v12.069h12.071v-12.069H469a43.078,43.078,0,0,1,33.758-36.134v2.951a3.409,3.409,0,0,0,3.408,3.408h11.018a3.409,3.409,0,0,0,3.408-3.408v-2.951a43.107,43.107,0,0,1,33.753,36.134h-3.978v12.069h12.069v-12.069h-4.8a46.4,46.4,0,0,0-28.845-37.059h24.321A6.241,6.241,0,0,0,559.112,1147.162Zm0-9.231a2.982,2.982,0,1,1-2.979,2.982A2.986,2.986,0,0,1,559.112,1137.931Zm-94.886,5.964a2.982,2.982,0,1,1,2.982-2.982A2.986,2.986,0,0,1,464.226,1143.895Zm5.486,44.513h-5.538v-5.535h5.538Zm89.453,0h-5.535v-5.535h5.535Zm-41.844-41.844h-11.3v-11.3h11.3Z"
          transform="translate(-457.979 -1131.996)"
          fill="#5361fc"
        />
      </svg>
      <h1>Content Service</h1>
      <h2 style="font-weight: 300">
        Flexibler Kostenrechner für transparente kostenabschätzungen
      </h2>
      <BaseButton fit backColor="var(--primary-color)" style="margin-top: 1rem">
        <div
          style="
            width: 25px;
            height: 25px;
            border-radius: 100%;
            background: white;
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 0.9rem;
            font-weight: 500;
          "
        >
          €
        </div>
        <span style="margin: 0 8px; color: white">Zum Rechner</span>
      </BaseButton>
    </section>

    <section id="product_section">
      <div class="container">
        <BaseRoundWrapper
          back_c="var(--secondary-lite-color)"
          border_c="var(--secondary-color)"
        >
          <div class="step_number">1</div>
        </BaseRoundWrapper>
        <h2>Welche Produkte wollen sie digitalisieren?</h2>
        <span style="color:red;" v-if="errorsProduct">Please Fill in all information the quantity can't be 0 or the name empty</span>
        <div style="width: 100%; padding-top: 88px">
          <ProductCard @deleteProduct="deleteProduct(index)" :_product="product" :_header="index == 0" style="margin-top: 10px"  v-for="(product,index,key) in products" :key="key"/>
         
        </div>
        <BaseRoundWrapper
          style="
            border-width: 1px;
            width: 80%;
            max-width: 300px;
            padding: 20px 0;
            color: var(--primary-color);
            margin-top: 10px;
            cursor:pointer;
          "
          @click.native="AddProduct"
          rounded="8px"
          back_c="var(--secondary-lite-color)"
          border_c="var(--secondary-color)"
        >
          <div style="font-weight: 500; margin: auto;">
            <span style="font-weight: bold; font-size: 1.4rem">+</span> Neue
            Zeile hinzufügen
          </div>
        </BaseRoundWrapper>
        <RightFloatedContent class="section_footer">
          Content Service: <span>{{totalProductPrice}}€</span>
        </RightFloatedContent>
      </div>
    </section>

    <section id="subscription_section">
      <div class="container">
        <BaseRoundWrapper
          back_c="var(--secondary-lite-color)"
          border_c="var(--secondary-color)"
        >
          <div class="step_number">2</div>
        </BaseRoundWrapper>
        <h2>Wählen sie einen Polyte Subscription Plan</h2>
         <span style="color:red;" v-if="errorsPlan">Please select your plan</span>
        <div class="subscription_plans">
          <SubscriptionPlan
            @click.native="SelectPlan('business')"
            business
            outline_c="transparent"
            highlighted_c="var(--purple-color)"
            color="transparent linear-gradient(253deg, #CB19AC 0%, #981186 100%)"
            :highlight="selectedplan == 'business'"
          >
            <template #title>Polyte Business</template>
            <template #sub_title>Ideal for small business</template>
            <template #impressions>20.000 / Monat</template>
            <template #could_storage>80 GB</template>
            <template #support_level>E-MAIL</template>
            <template #monthly_price>{{plands.business.monthly}}€ / Month</template>
            <template #annual_price>{{plands.business.yearly}}€ billed annually</template>
          </SubscriptionPlan>

          <SubscriptionPlan
            @click.native="SelectPlan('business_pro')"
            business_pro
            outline_c="transparent"
            highlighted_c="var(--purple-color)"
            color="transparent linear-gradient(253deg, #00B3D3 0%, #005C8D 100%)"
            :highlight="selectedplan == 'business_pro'"
          >
            <template #title>Polyte Business Pro</template>
            <template #sub_title>Ideal for large business</template>
            <template #impressions>40.000 / Monat</template>
            <template #could_storage>1,5 TB</template>
            <template #support_level>Account Manager</template>
            <template #monthly_price>{{plands.business_pro.monthly}}€ / Month</template>
            <template #annual_price>{{plands.business_pro.monthly}}€ billed annually</template>
          </SubscriptionPlan>
          <SubscriptionPlan
           custom
            outline_c="transparent"
            highlighted_c="var(--purple-color)"
            @click.native="SelectPlan('custom')"
            :highlight="selectedplan == 'custom'"
          >
            <template #title>Polyte Custom</template>
            <template #sub_title>Need to scale with Polyte?</template>
            <template #impressions>costum</template>
            <template #could_storage>costum</template>
            <template #support_level>Account Manager</template>
            <template #monthly_price>
              <span style="color: var(--secondary-color); font-size: 1.2rem"
                >custom pricing</span
              >
            </template>
            <template #annual_price> </template>
          </SubscriptionPlan>
        </div>

        <RightFloatedContent class="section_footer">
          Subscription Plan: <span>{{selectedplan ? plands[selectedplan].monthly :  0}} € / Jahr</span>
        </RightFloatedContent>
      </div>
    </section>

    <section id="bill_section">
      <div class="container">
        <BaseRoundWrapper
          back_c="var(--secondary-lite-color)"
          border_c="var(--secondary-color)"
        >
          <div class="step_number">3</div>
        </BaseRoundWrapper>
        <h2>Unverbindlich Anfragen</h2>
        <BillCard style="margin-top: 50px" :products="products" :selected_plan="selectedplan ? plands[selectedplan] :  {}" />
        <div @click="openModal">
          <SendButton style="margin-top: 50px"  />
        </div>
      </div>
    </section>

    <UserInfoModal v-if="openUserInfoModal" />
    <ThankYouModal v-if="openThankYouModal" />
  </div>
</template>

<script>
import "../static/styles/general.css";
import "../static/styles/hero.css";
import "../static/styles/product_section.css";
import "../static/styles/subscription_section.css";
import "../static/styles/bill_section.css";

import ProductCard from "@/components/page_components/ProductCard.vue";
import RightFloatedContent from "@/components/global_components/RightFloatedContent.vue";
import SubscriptionPlan from "@/components/page_components/SubscriptionPlan.vue";
import BillCard from "@/components/page_components/BillCard.vue";
import BaseButton from "@/components/global_components/BaseButton.vue";
import BaseRoundWrapper from "@/components/global_components/BaseRoundWrapper.vue";
import SendButton from "@/components/page_components/SendButton.vue";
import UserInfoModal from "@/components/modals/UserInfoModal.vue";
import ThankYouModal from "@/components/modals/ThankYouModal.vue";
export default {
  name: "App",
  components: {
    ProductCard,
    RightFloatedContent,
    SubscriptionPlan,
    BillCard,
    BaseButton,
    BaseRoundWrapper,
    SubscriptionPlan,
    SendButton,
    UserInfoModal,
    ThankYouModal
  },
  data(){
    return {
      openUserInfoModal:false,
      openThankYouModal:false,
      selectedplan:'',
      products:[],
      errorsProduct:false,
      errorsPlan:false,
      plands:{
        business:{
          id:"business",
          name:"Polyte Business",
          monthly:'459',
          yearly:'5.508',
        },
        business_pro:{
          id:"business_pro",
          name:"Polyte Business Pro",
          monthly:'539',
          yearly:'6.468',
        },
        custom:{
          id:"custom",
          name:"Polyte Custom",
          monthly:'0',
          yearly:'0',
        }
      },
    }
  },
  computed:{
    totalProductPrice(){
      return this.products.reduce((acc,product) => {
        return acc + product.total
      },0)
    }
  },
  methods:{
    SelectPlan(type){
      this.selectedplan = type
      localStorage.setItem('selectedplan',JSON.stringify(this.plands[type]))

    },
    deleteProduct(index){
      this.products.splice(index,1)
    },
    AddProduct(){
     this.products.push({
       name:'',
       difficulty:'easy',
       qty:0,
       total:0
     })
    },
    validate(){
      let valid = true
      if(this.products.length == 0){
       valid = false
       this.AddProduct()
      }

      this.products.forEach((product,index) => {
        if(product.name == '' || product.qty == 0){
          valid = false;
        }
      })

      if(!valid){
        this.errorsProduct = true
        window.scrollTo({
          top: document.getElementById('product_section').offsetTop,
          behavior: 'smooth'
        });
      }else {
        this.errorsPlan = true
        if(this.selectedplan == ''){
          window.scrollTo({
            top: document.getElementById('subscription_section').offsetTop,
            behavior: 'smooth'
          });
          valid = false;
        }
      }
      return valid
    },
    openModal(){
      this.errorsPlan = false
      this.errorsProduct = false
      if(this.validate()){
        this.openUserInfoModal = true
      }
    },
    closeModal(){
     this.openUserInfoModal = false
     this.openThankYouModal = false
    }
  },
  watch:{
    products:{
      handler(){
        if(this.products.length > 0){
          localStorage.setItem('products',JSON.stringify(this.products))
        }else{
          localStorage.removeItem('products')
        }
      },
      deep:true
    }
  },
  mounted(){
    this.$root.$on('closeModal',() =>{
      this.closeModal();
    })
    if(localStorage.getItem('products')){
      this.products = JSON.parse(localStorage.getItem('products'))
      console.log(this.products)
    }else{
      this.AddProduct();
    }

    if(localStorage.getItem('selectedplan')){
      this.selectedplan = JSON.parse(localStorage.getItem('selectedplan')).id
    }
  }
};
</script>

<style>
body {
  margin: 0;
}

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#checkout_page {
  background-color: var(--main-background-color);
  font-family: var(--main-font);
}
.container {
  box-sizing: content-box;
  padding: 0 10px;
}

@media (min-width: 29.7rem) {
  /*xs:475px*/
}

@media (min-width: 36rem) {
  /*sm*/
  .container {
    max-width: 36rem;
    margin: 0 auto;
  }
}
@media (min-width: 48rem) {
  /*md*/
  .container {
    max-width: 48rem;
    margin: 0 auto;
  }
}
@media (min-width: 62rem) {
  /*lg*/
  .container {
    max-width: 62rem;
    margin: 0 auto;
  }
}
@media (min-width: 75rem) {
  /*xl*/
  .container {
    max-width: 75rem;
    margin: 0 auto;
  }
}
@media (min-width: 87.5rem) {
  /*xxl*/
  .container {
    max-width: 87.5rem;
    margin: 0 auto;
  }
}
</style>
