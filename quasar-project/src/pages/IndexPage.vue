<template>
  <q-page padding class="row jpageustify-center bg-img">
    <div bordered class="fit full-height">
      <MenuCard v-for="link in linksList" :key="link.title" v-bind="link"/>
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from "vue";
import MenuCard from "src/components/MenuCard.vue";

const linksList = [
{
    title: "Energiya va atrof-muhit",
    icon: "code",
    link: "energy",
  },
  {
    title: "Iqlim va ob-havo",
    icon: "code",
    link: "climate",
  },
  {
    title: "Qishloq va oʻrmon xoʻjaligi",
    icon: "code",
    link: "forestry",
  },
  {
    title: "Iqtisodiyot va moliya",
    icon: "code",
    link: "economy",
  },
]

export default defineComponent({
  name: "IndexPage",
  components: [MenuCard],
  data(){
    return{
      linksList:linksList
    }
  }
});
</script>
<style scoped>
.bg-img {
  width: 100%;
  height: 80vh;
  background-image: url(".././assets/login_bg.svg");
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
}
</style>
