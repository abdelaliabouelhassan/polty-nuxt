<template>
<div class="base_card_container" ref="base_card"  :class="{outlined:outline}" :style="{borderColor:outlineColor,maxWidth:max_width}"
    >
    <div class=""  :class="{base_card_inner_wrapper:inner_border}"
    :style="{maxWidth:max_width}">
        <div class="base_card" :style="{width:_width,minWidth:min_width, maxWidth:max_width}">
            <div class="base_card_content">
                <slot name="content"></slot>
            </div>
            <div class="base_card_footer">
                <slot name="footer"></slot>
            </div>
        </div>
    </div >
</div>
</template>
<script>
export default {
    props:{
        _width:String,
        min_width:String,
        max_width:String,
        outline:Boolean,
        outline_c:String,
        highlighted_c:String,
        selected:Boolean,

        inner_border:Boolean
    },
    data() {
        return {
            mouseIn:false,
        }
    },
    computed:{
        innerBorder_c()
        {
            
        },

        outlineColor(){
            if(this.selected){
                return this.highlighted_c
            }else{
                return this.outline_c
            }
        },

        
    },
    mounted(){
    
    }
}
</script>
<style scoped>
.base_card_container{
    border-radius: 29px;
    overflow: hidden;
    /* width: fit-content; */
}
.base_card_inner_wrapper{
    margin: 1.5px;
    border-radius: 22px;
    border: 2px solid var(--primary-lite-color);
    /* background:  var(--secondary-lite-color); */
}


.base_card_content{
    padding:30px 20px;
    background: white;
}
.base_card_footer{
    padding:20px 20px;

    background: var(--main-background-color);
}
.outlined{
    border-width: 6px ;
    border-style: solid;
    /* border-color: var(--purple-color); */
}
.highlighted{
    border-color: var(--purple-color);
}
</style>