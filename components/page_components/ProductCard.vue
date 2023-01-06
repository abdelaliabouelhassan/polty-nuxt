<template>
  <div class="wrapper">
    <div v-if="_header" class="product_card_header">
      <div class="title-header">
        <span>Name</span>
      </div>
      <div class="title-header" @mouseover="showSurface = true" @mouseleave="showSurface = false">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 31.98 35.667"
        >
          <g
            id="Group_2843"
            data-name="Group 2843"
            transform="translate(-2046.804 -1563.992)"
            opacity="0.796"
          >
            <path
              id="Path_4902"
              data-name="Path 4902"
              d="M2075.494,1570.21l-9.506-5.381a6.518,6.518,0,0,0-6.389,0l-9.506,5.381a6.494,6.494,0,0,0-3.29,5.643v12.172a6.478,6.478,0,0,0,3.4,5.7l9.506,5.147a6.462,6.462,0,0,0,6.175,0l9.506-5.147a6.478,6.478,0,0,0,3.4-5.7v-12.172A6.493,6.493,0,0,0,2075.494,1570.21Zm1.005,17.815a4.2,4.2,0,0,1-2.2,3.693l-9.506,5.147a4.185,4.185,0,0,1-4,0l-9.506-5.147a4.2,4.2,0,0,1-2.2-3.693v-12.172a4.207,4.207,0,0,1,2.131-3.655l9.506-5.381a4.221,4.221,0,0,1,4.137,0l9.506,5.381a4.207,4.207,0,0,1,2.131,3.655Z"
              transform="translate(0 0)"
              fill="#02303b"
            />
            <path
              id="Path_4903"
              data-name="Path 4903"
              d="M2083.616,1598.6l-9.149,4.753a2.212,2.212,0,0,1-2.037,0l-9.15-4.753a1.071,1.071,0,0,0-1.5.576,1.1,1.1,0,0,0,.55,1.346l8.983,4.666a1.968,1.968,0,0,1,1.061,1.747v12.487a1.1,1.1,0,0,0,1.038,1.115,1.071,1.071,0,0,0,1.1-1.07v-12.532a1.969,1.969,0,0,1,1.061-1.747l8.982-4.666a1.1,1.1,0,0,0,.55-1.346A1.071,1.071,0,0,0,2083.616,1598.6Z"
              transform="translate(-10.655 -24.64)"
              fill="#02303b"
            />
          </g>
        </svg>
        <span style="padding-left: 10px">Oberflächenkomplexität</span>
        <div style="padding-left:10px; padding-top:5px;">
          <div style="cursor:pointer;position: relative;">
           <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 38 38">
              <g id="Group_2822" data-name="Group 2822" transform="translate(-1408 -2520)" opacity="0.496">
                <path id="Path_4880" data-name="Path 4880" d="M8803.627,699.219v9.966a2.2,2.2,0,0,0,4.4,0v-9.966a2.2,2.2,0,0,0-4.4,0Zm2.2-4.189a2.141,2.141,0,1,1,2.141-2.141A2.141,2.141,0,0,1,8805.829,695.031Z" transform="translate(-7378.627 1838.251)" fill="#02303b"/>
                <g id="Ellipse_305" data-name="Ellipse 305" transform="translate(1408 2520)" fill="none" stroke="#02303b" stroke-width="3">
                  <circle cx="19" cy="19" r="19" stroke="none"/>
                  <circle cx="19" cy="19" r="17.5" fill="none"/>
                </g>
              </g>
            </svg>
             <div v-if="showSurface" style="clip-path: polygon(50% 0%, 0% 100%, 100% 100%);position: absolute; height: 0.5rem; width: 0.75rem;background-color:#e3d8d8;left:2px;top:14px;"></div>
          </div>
        </div>
        <div style="position: absolute;z-index:5;width:100%; height:100%;left: 0px;top: 38px;" v-if="showSurface">
            <Tooltips title="Surface Complexity examples" />
        </div>
      </div>
      <div class="title-header" @mouseover="showProduct = true" @mouseleave="showProduct = false">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 33.874 35.666"
        >
          <path
            id="Path_4881"
            data-name="Path 4881"
            d="M981.608,4898.717H999.5a7.99,7.99,0,1,0,0-15.981H981.608a7.99,7.99,0,1,0,0,15.981Zm0-13.594a5.6,5.6,0,1,1-5.6,5.6A5.6,5.6,0,0,1,981.608,4885.123Zm17.892,17.3H981.608a7.991,7.991,0,1,0,0,15.982H999.5a7.991,7.991,0,1,0,0-15.982Zm0,13.594a5.6,5.6,0,1,1,5.6-5.6A5.6,5.6,0,0,1,999.5,4916.014Z"
            transform="translate(-973.617 -4882.736)"
            fill="#02303b"
            opacity="0.796"
          />
        </svg>
        <span style="padding-left: 10px">Produktvariationen</span>
         <div style="padding-left:10px; padding-top:5px;">
          <div  style="cursor:pointer;position: relative;">
           <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 38 38">
              <g id="Group_2822" data-name="Group 2822" transform="translate(-1408 -2520)" opacity="0.496">
                <path id="Path_4880" data-name="Path 4880" d="M8803.627,699.219v9.966a2.2,2.2,0,0,0,4.4,0v-9.966a2.2,2.2,0,0,0-4.4,0Zm2.2-4.189a2.141,2.141,0,1,1,2.141-2.141A2.141,2.141,0,0,1,8805.829,695.031Z" transform="translate(-7378.627 1838.251)" fill="#02303b"/>
                <g id="Ellipse_305" data-name="Ellipse 305" transform="translate(1408 2520)" fill="none" stroke="#02303b" stroke-width="3">
                  <circle cx="19" cy="19" r="19" stroke="none"/>
                  <circle cx="19" cy="19" r="17.5" fill="none"/>
                </g>
              </g>
            </svg>
            <div v-if="showProduct" style="clip-path: polygon(50% 0%, 0% 100%, 100% 100%);position: absolute; height: 0.5rem; width: 0.75rem;background-color:#e3d8d8;left:2px;top:14px;"></div>
          </div>
          <div style="position: absolute;z-index:5;width:100%; height:100%;left: 0px;top: 38px;"  v-if="showProduct">
            <Tooltips title="Product variations" />
          </div>
         
        </div>
      </div>
    </div>
    <div class="product_card">
      <div class="right_band" :style="BrandColor"></div>
      <div class="card_content">
        <div class="content">
          <div class="content_division">
            <input type="text" class="product_name" v-model="_product.name" />
            <div v-if="!_product.showDescription" @click="AddDescription" style="cursor:pointer;padding-bottom:10px;">
              <span>Add description</span>
            </div>
             <div v-else @click="AddDescription" style="cursor:pointer;padding-bottom:10px;">
              <span style="color:red;">remove description</span>
            </div>
            <textarea v-model="_product.description" v-if="_product.showDescription" name="" id="" cols="30" rows="5" placeholder="Add description" style="padding:15px;height:auto;font-size:16px;" class="product_name"></textarea>
          </div>
          <div class="content_division complexity">
            <div>
              <DifficultySelector v-model="_product.difficulty" />
            </div>
            <div>
              <span>
                <span style="font-weight: bold">{{ _product.difficulty }} </span
                >: {{ difficultyTexts[_product.difficulty] }}
              </span>
            </div>
          </div>

          <div class="content_division product_variation">
            <div style="width: 100%">
              <Counter v-model="_product.qty" />
              <span
                style="margin-left: 8px; font-weight: 500; font-size: 0.9rem"
                >Produktvarianten</span
              >
            </div>
            <div>
              <span>
                Ihr Produkt gibt es in mehreren Ausprägungen wie Farben, größen
                oder verschiedene Geometrien.
              </span>
            </div>
          </div>
        </div>

        <div class="footer">
          <BaseRoundWrapper
            @click.native="DeleteProduct"
            rounded="8px"
            border_c="var(--secondary-color)"
            style="
              border-width: 2px;
              width: 60px;
              padding-top: 10px;
              padding-bottom: 10px;
              cursor: pointer;
            "
          >
            <svg
              class="margin:auto;"
              xmlns="http://www.w3.org/2000/svg"
              width="23.502"
              height="28.012"
              viewBox="0 0 23.502 28.012"
            >
              <path
                id="Path_4853"
                data-name="Path 4853"
                d="M7318.034,2174.832l.638-7.423a1.387,1.387,0,1,1,2.765.237l-.637,7.423a1.388,1.388,0,0,1-1.381,1.269c-.04,0-.08,0-.12-.005A1.388,1.388,0,0,1,7318.034,2174.832Zm-3.485,1.507c.04,0,.08,0,.121-.005a1.388,1.388,0,0,0,1.264-1.5l-.638-7.423a1.387,1.387,0,1,0-2.765.237l.637,7.423A1.389,1.389,0,0,0,7314.549,2176.339Zm12.421-12.855-1.124,14.027a4.284,4.284,0,0,1-4.248,3.921h-9.23a4.285,4.285,0,0,1-4.249-3.921L7307,2163.484a3.3,3.3,0,0,1,1.542-6.228h1.578l.6-1.568a3.439,3.439,0,0,1,3.193-2.268h6.137a3.441,3.441,0,0,1,3.194,2.268l.6,1.568h1.579a3.3,3.3,0,0,1,1.542,6.228Zm-13.878-6.228h7.784l-.22-.57a.691.691,0,0,0-.6-.491h-6.137a.692.692,0,0,0-.6.491Zm-5.083,3.306a.531.531,0,0,0,.531.531h16.89a.531.531,0,1,0,0-1.061h-16.89A.531.531,0,0,0,7308.008,2160.562Zm16.147,3.306h-14.344l1.076,13.421a1.493,1.493,0,0,0,1.481,1.367h9.23a1.494,1.494,0,0,0,1.481-1.367Z"
                transform="translate(-7305.233 -2153.42)"
                fill="#02303b"
                opacity="0.501"
              />
            </svg>
          </BaseRoundWrapper>
          <div style="color: var(--light-font-color)">
            Einzelpreis:
            <span style="font-weight: bold">{{ this._product.total }} €</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import DifficultySelector from "./DifficultySelector.vue";
import BaseRoundWrapper from "@/components/global_components/BaseRoundWrapper.vue";
import Tooltips from "@/components/global_components/Tooltips.vue";
import Counter from "./Counter.vue";
export default {
  components: {
    DifficultySelector,
    Counter,
    BaseRoundWrapper,
    Tooltips,
  },
  props: {
    _header: Boolean,
    _product: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      prices: {
        easy: 100,
        medium: 200,
        hard: 300,
      },
      difficultyTexts: {
        easy: " Ihr Produkt ist in seine hat eine geringe Komplexität. z.B. Vase, Tasse,",
        medium:
          " Ihr Produkt ist in seine hat eine mittlere Komplexität wie z.B. Fahrrad oder Schuh.",
        hard: " /* to be provided */",
      },
      Produktvariationen:{
        easy:12,
        medium:13,
        hard:14,
      },
      showSurface:false,
      showProduct:false,
    };
  },
  watch: {
    _product: {
      handler: function () {
        let Produktvariationen = this._product.qty * this.Produktvariationen[this._product.difficulty]
        this._product.total = this.prices[this._product.difficulty] + Produktvariationen;
      },
      deep: true,
    },
  },
  computed: {
    BrandColor() {
      if (this._product.difficulty == "easy") {
        return "background: #5394FC;";
      } else if (this._product.difficulty == "medium") {
        return "background: #3645F0;";
      } else if (this._product.difficulty == "hard") {
        return "background: #1A0DB9;";
      }
    },
  },
  methods: {
    DeleteProduct() {
      this.$emit("deleteProduct");
    },
    AddDescription(){
      this._product.showDescription = !this._product.showDescription
      if(this._product.showDescription){
        this._product.description = ''
    }
    },
  },
};
</script>
<style scoped>
.wrapper {
  width: 100%;
  padding: 0 20px;
  box-sizing: border-box;
}

.title-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
  position: relative;
}

.title-header > span {
  color: #02303b;
  font-size: 1.2rem;
  font-family: Inter;
  font-weight: 500;
  opacity: 0.8;
}

.product_card {
  display: flex;
  border-radius: 12px;
  overflow: hidden;
  background: var(--secondary-lite-color);
  border: 1px solid var(--secondary-color);
  border-left: none;
  width: 100%;
}
.right_band {
  width: 13px;
  /* height: 100%; */
  margin: 0;
  flex-shrink: 0;
}
.card_content {
  margin: 0 15px;
  flex-grow: 1;
}
.content {
  width: 100%;
  display: flex;
  flex-direction: column;
}

.content_division {
  padding: 10px;
  padding-left: 0px;
  min-width: 12rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.product_card_header {
  display: none;
}

.content_division > div:first-child {
  height: 2.5rem;
  display: flex;
  align-items: center;
}
.content_division > div:nth-child(2) {
  margin-top: 10px;
  display: flex;
  align-items: flex-start;
  text-align: flex-start;
}
.content_division > div:nth-child(2) > span {
  font-size: 0.85rem;
  color: var(--light-font-color);
  max-width: 20rem;
}
.product_name {
  width: 80%;
  max-width: 16rem;
  height: 40px;
  font-size: 1.2rem;
  border: 1px solid var(--secondary-color);
  border-radius: 8px;
  padding: 0 10px;
  outline: none;
}

.footer {
  border-top: 1px solid var(--secondary-color);
  padding: 10px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
@media (min-width: 36rem) {
  .card_content {
    margin: 0 15px;
  }
}

@media (min-width: 48rem) {
  /*md*/
  .content {
    flex-direction: row;
    flex-wrap: wrap;
  }
  .content_division {
    flex-grow: 1;
    min-width: 18rem;
    max-width: 50%;
  }
}

@media (min-width: 62rem) {
  /*lg*/
  .content {
    flex-wrap: nowrap;
  }
  .content_division {
    width: calc((100% - 30px) * 0.3333);
  }

  .product_card_header {
    width: 100%;
    display: flex;
    padding: 0 20px 0 30px;
    box-sizing: border-box;
  }

  .product_card_header > div {
    min-width: 15rem;
    padding: 10px;
    padding-left: 0px;
    /* background: green; */
    display: flex;
    justify-content: flex-start;
    width: 33.33%;
  }
}
@media (min-width: 75rem) {
  /*xl*/
}
@media (min-width: 87.5rem) {
  /*xxl*/
}
</style>
