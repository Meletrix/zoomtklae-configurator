<template>
  <div>
    <h1 class="CONFIGURATOR" style="text-align: center">CONFIGURATOR</h1>
  </div>
  <div>
    <el-row :gutter="20">
      <el-col :span="3"></el-col>
      <el-col class="select-el-col" :span="18"
        ><div id="image">
          <img id="img" :src="Img.url" style="width: 100%; height: 100%" />
        </div>
      </el-col>
      <el-col :span="3"></el-col>
    </el-row>
  </div>
  <div v-if="flag">
    <el-row :gutter="20" class="row-bg" justify="center">
      <el-col class="select-el-col" :span="5">
        <div class="div_center">
          <h4 class="select-tilte" style="text-align: center">Case Color</h4>
          <el-select
            v-model="case_color"
            class="m-2 el-select-css"
            placeholder="Select"
            size="large"
            @change="update"
          >
            <el-option
              v-for="item in case_color_options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            />
          </el-select></div
      ></el-col>
      <el-col class="select-el-col" :span="5">
        <div class="div_center">
          <h4 class="select-tilte" style="text-align: center">
            Back Plate Material
          </h4>
          <el-select
            v-model="weight_material"
            class="m-2 el-select-css"
            placeholder="Select"
            size="large"
            @change="update"
          >
            <el-option
              v-for="item in weight_material_options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            />
          </el-select></div
      ></el-col>
      <el-col :span="5" class="select-el-col"
        ><div class="div_center">
          <h4 class="select-tilte" style="text-align: center">
            Back Plate Color
          </h4>
          <div id="div_cf">
            <el-select
              v-model="weight_color"
              class="m-2"
              placeholder="Select"
              size="large"
              @change="update_url"
            >
              <el-option
                v-for="item in cf_weight_color_options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              />
            </el-select>
          </div>
          <div id="div_pvd" style="display: none">
            <el-select
              v-model="weight_color"
              class="m-2 el-select-css"
              placeholder="Select"
              size="large"
              @change="update_url"
            >
              <el-option
                v-for="item in pvd_weight_color_options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              />
            </el-select>
          </div>
          <div id="div_glass" style="display: none">
            <el-select
              v-model="weight_color"
              class="m-2 el-select-css"
              placeholder="Select"
              size="large"
              @change="update_url"
            >
              <el-option
                v-for="item in glass_weight_color_options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              />
            </el-select>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
  <div v-else>
    <div class="select-el-col">
      <div class="div_center">
        <h4 class="select-tilte" style="text-align: center">Case Color</h4>
        <el-select
          v-model="case_color"
          class="m-2 el-select-css"
          placeholder="Select"
          size="large"
          @change="update"
        >
          <el-option
            v-for="item in case_color_options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          />
        </el-select>
      </div>
    </div>
    <div class="select-el-col">
      <div class="div_center">
        <h4 class="select-tilte" style="text-align: center">
          Back Plate Material
        </h4>
        <el-select
          v-model="weight_material"
          class="m-2 el-select-css"
          placeholder="Select"
          size="large"
          @change="update"
        >
          <el-option
            v-for="item in weight_material_options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          />
        </el-select>
      </div>
    </div>
    <div class="select-el-col">
      <div class="div_center">
        <h4 class="select-tilte" style="text-align: center">
          Back Plate Color
        </h4>
        <div id="div_cf">
          <el-select
            v-model="weight_color"
            class="m-2"
            placeholder="Select"
            size="large"
            @change="update_url"
          >
            <el-option
              v-for="item in cf_weight_color_options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            />
          </el-select>
        </div>
        <div id="div_pvd" style="display: none">
          <el-select
            v-model="weight_color"
            class="m-2 el-select-css"
            placeholder="Select"
            size="large"
            @change="update_url"
          >
            <el-option
              v-for="item in pvd_weight_color_options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            />
          </el-select>
        </div>
        <div id="div_glass" style="display: none">
          <el-select
            v-model="weight_color"
            class="m-2 el-select-css"
            placeholder="Select"
            size="large"
            @change="update_url"
          >
            <el-option
              v-for="item in glass_weight_color_options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            />
          </el-select>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useImgStore } from "@/stores/img";
const Img = useImgStore();
const path = "./AssembledEdition";
const flag = ref(window.screen.width < 1100 ? false : true);
const case_color = ref("Black");
const weight_material = ref("CF");
var weight_color = ref("Black");
Img.url =
  path +
  "/" +
  case_color.value +
  "/ZoomTKL_" +
  case_color.value +
  "_" +
  weight_material.value +
  (weight_color.value === "Black" ? "" : "_" + weight_color.value) +
  ".jpg";

const update = () => {
  switch (weight_material.value) {
    case "CF":
      document.getElementById("div_cf")!.style.display = "";
      document.getElementById("div_pvd")!.style.display = "none";
      document.getElementById("div_glass")!.style.display = "none";
      weight_color.value = "Black";
      break;
    case "Glass":
      document.getElementById("div_glass")!.style.display = "";
      document.getElementById("div_pvd")!.style.display = "none";
      document.getElementById("div_cf")!.style.display = "none";
      weight_color.value = "BlushPink";
      break;
    case "SS":
      document.getElementById("div_pvd")!.style.display = "";
      document.getElementById("div_glass")!.style.display = "none";
      document.getElementById("div_cf")!.style.display = "none";
      weight_color.value = "PVDBlack";
      break;
  }
  update_url();
};

const update_url = () => {
  Img.url =
    path +
    "/" +
    case_color.value +
    "/ZoomTKL_" +
    case_color.value +
    "_" +
    weight_material.value +
    (weight_color.value === "Black" ? "" : "_" + weight_color.value) +
    ".jpg";
  (document.getElementById("img") as HTMLImageElement).src = Img.url;
};

const case_color_options = [
  {
    value: "Black",
    label: "Black",
  },
  {
    value: "Lilac",
    label: "Lilac",
  },
  {
    value: "SkyBlue",
    label: "Sky Blue",
  },
  {
    value: "White",
    label: "White",
  },
  {
    value: "WildGreen",
    label: "Wild Green",
  },
  {
    value: "FaintBlurple",
    label: "Faint Blurple",
  },
];

const weight_material_options = [
  {
    value: "CF",
    label: "Carbon Fiber",
  },
  {
    value: "Glass",
    label: "Glass",
  },
  {
    value: "SS",
    label: "SS PVD Mirror",
  },
];

const cf_weight_color_options = [
  {
    value: "Black",
    label: "Black",
  },
];

const pvd_weight_color_options = [
  {
    value: "PVDBlack",
    label: "PVD Black",
  },
  {
    value: "PVDSilver",
    label: "PVD Silver",
  },
  {
    value: "PVDGold",
    label: "PVD Gold",
  },
];
const glass_weight_color_options = [
  {
    value: "BlushPink",
    label: "Blush Pink",
  },
  {
    value: "CoolGrey",
    label: "Cool Grey",
  },
  {
    value: "FaintBlurple",
    label: "Faint Blurple",
  },
  {
    value: "Lilac",
    label: "Lilac",
  },
  {
    value: "Navy",
    label: "Navy",
  },
  {
    value: "ScarletRed",
    label: "Scarlet Red",
  },
  {
    value: "SkyBlue",
    label: "Sky Blue",
  },
  {
    value: "WildGreen",
    label: "Wild Green",
  },
];
</script>

<style scoped>
.select-el-col {
  display: flex;
}
.div_center {
  margin: 0 auto;
}

.CONFIGURATOR {
  font-size: 20px;
  line-height: 20px;
  letter-spacing: 2px;
  color: #6e6d6d;
  padding-bottom: 15px;
}

.select-tilte {
  color: #797676;
  padding-top: 10px;
  padding-bottom: 10px;
}

#image {
  margin: 0 auto;
  width: 94%;
  height: 94%;
}
</style>
