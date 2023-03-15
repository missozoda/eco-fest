<template>
    <q-page padding class="row jpageustify-center bg-img">
    <div bordered class="fit full-height">
      <menu-card></menu-card>
    </div>
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
