<template>
    <div class="bill_card">
        <BaseCard min_width="20rem" max_width="40rem">
            <template #content>
                <div class="bill_content">
                    <div class="content_service">
                        <div>Content Service</div>
                        <div>10.846,00 €</div>
                    </div>
                    <div class="products">
                        <div class="product">
                            <div class="product_name">1. product name</div>
                            <div>- Easy </div>
                            <div>- 6 Varianten</div>
                        </div>
                        <div class="">545,00 €</div>
                    </div>
                    <div class="products">
                        <div class="product">
                            <div class="product_name">1. product name</div>
                            <div>- Easy </div>
                            <div>- 6 Varianten</div>
                        </div>
                        <div class="">545,00 €</div>
                    </div>
                    <div class="bill_plan">
                        <div class="plan_title">
                            <PlanLogo business_pro width="25" height="25"/>
                            <span>Polyte Business Subscription</span>
                        </div>
                        <div class="">5.508,00 € / Jahr</div>
                    </div>
                </div>



            </template>
        <template #footer>
            <div class="bill_footer">
                <div>Total</div>
                <div>545,00 €</div>
            </div>
        </template>

        </BaseCard>

    </div>
</template>

<script>
import BaseCard from "@/components/global_components/BaseCard.vue";
import PlanLogo from "./PlanLogo.vue"

export default {
    components: {
        BaseCard,
        PlanLogo
    },
    
}
</script>

<style scoped>

.sub_card_head_logo{
    width: 20px;
    height: 20px;
    border-radius: 35%;
    outline-width: 3px;
    outline-style: solid;
}
.bill_card{
    font-size: 1.2rem;
    font-weight: 500;
}
.bill_content,.bill_footer{
    padding: 0 20px;
}
.bill_content>div, .bill_footer{
    display: flex;
    justify-content: space-between;
}

.bill_footer {
    color: #02303B;
    font-family: Inter;
    font-weight: 700;
}

.bill_content>div>div:first-child{
    margin-right: 20px;
    text-align: start;
}
.bill_content>div>div:nth-child(2){
    flex-shrink: 1/3;
    text-align: end;

}
.content_service{
    margin-bottom: 15px;
}
.products{
    margin-bottom: 25px;
    font-size: 0.9rem;
    font-weight: 400;
    color: var(--light-font-color);
    opacity: 0.5;
}
.product{
    text-align: start;

}
.product>div:not(.product_name){
    padding-left: 10px;

}

.bill_plan{
    border-top: 3px solid var(--primary-lite-color);
    padding-top: 20px;

}
.plan_title{
    display: flex;
    align-items: center;
    font-weight: 500;
    color:#02303B;
}
.plan_title span{
    margin-left: 10px;
}

</style>