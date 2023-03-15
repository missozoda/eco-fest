<template>
  <q-page class="flex flex-center bg-img">
    <menu-card></menu-card>
  </q-page>
</template>

<script>
import { defineComponent } from "vue";
import MenuCard from "src/components/MenuCard.vue";

export default defineComponent({
  name: "IndexPage",
  components: [MenuCard],
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
