<template>
    <div class="difficulty_wrapper">
        <div ref="easy" @mouseenter="toggleEasy" @mouseleave="toggleEasy" :class="{selected:difficulty=='easy'}" @click="setDifficulty('easy')" >Easy </div>
        <div class="divider" :class="{hide:!dividerOne}"></div>
        <div ref="meduim" @mouseenter="toggleMedium" @mouseleave="toggleMedium" @click="setDifficulty('medium')" :class="{selected:difficulty=='medium'}">Meduim</div>
        <div class="divider" :class="{hide:!dividerTwo}"></div>
        <div ref="hard" @mouseenter="toggleHard" @mouseleave="toggleHard" @click="setDifficulty('hard')" :class="{selected:difficulty =='hard'}">Hard</div>
    </div>
</template>
<script>
export default {
    props:['_difficulty'],
    data() {
        return {
            difficulty:'easy',
            allowDividerOne:false,
            dividerOne:false,
            allowDividerTwo:true,
            dividerTwo:true
        }
    },
    methods:{
        setDifficulty(d){
            this.difficulty=d
            this.$emit('input', this.difficulty)
            if(this.difficulty === 'medium' ){
                this.dividerOne=false
                this.dividerTwo=false
                this.allowDividerOne=false
                this.allowDividerTwo=false
            }
            else if(this.difficulty === 'hard'){
                this.dividerOne=true
                this.dividerTwo=false
                this.allowDividerTwo=false
                this.allowDividerOne=true
            }
            else if(this.difficulty === 'easy'){
                this.dividerOne=false
                this.dividerTwo=true
                this.allowDividerOne=false
                this.allowDividerTwo=true
            }
        },
        toggleEasy(){
            if(this.allowDividerOne){
                this.dividerOne = !this.dividerOne
            }    
        },
        toggleMedium(){
            if(this.difficulty === 'easy' && this.allowDividerTwo) {this.dividerTwo = !this.dividerTwo}
            if(this.difficulty === 'hard' && this.allowDividerOne) {this.dividerOne = !this.dividerOne}
        },
        toggleHard(){
            if(this.allowDividerTwo){
                this.dividerTwo = !this.dividerTwo
            }    
        },
    },
    watch:{
        _difficulty(newValue){
            this.difficulty = newValue
        }
    },
    mounted() {
        this.$emit('input', this.difficulty)    
    },
}
</script>
<style scoped>
.difficulty_wrapper{
    background: var(--primary-color);
    padding: 4px;
    border-radius: 8px;
    overflow: hidden;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: fit-content;
    height: 25px;
}

.difficulty_wrapper>div{
    color:white;
    padding: 5px 10px;
    font-size: 0.9rem;
    cursor: pointer;
}



.difficulty_wrapper>div:hover{
    background:white;
    color: var(--primary-color);
    border-radius: 5px; 
    transition-property: background-color;
    transition-duration: 0.2s ;
    transition-timing-function: ease-in-out;
}


.difficulty_wrapper>div.selected{
    background:white;
    color: var(--primary-color);
    border-radius: 5px;
}

.difficulty_wrapper>div.divider{
    height: 80%;
    width: 2px;
    padding: 0;
    background: rgba(255, 255, 255, 0.334);
}

.difficulty_wrapper>div.hide{
    background-color: transparent;
    transition-property:background-color;
    transition-duration: 0.2s ;
    transition-timing-function: ease-in-out;
}


@media (min-width: 25rem) {/*sm*/
  .difficulty_wrapper>div{
    padding: 5px 25px;
  }
}
  

@media (min-width: 48rem) {/*md*/
  
}

</style>

