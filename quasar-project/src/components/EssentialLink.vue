<template>
  <router-link :to="link" class="link text-weight-bold">
  <q-item
    clickable
    style="border-bottom: 1px solid #eee"
    class="q-mx-md rounded-lg"
    :class="{ 'active_class': link ===this.$router.currentRoute.value.path }"
  >
      <q-item-section avatar class="q-pa-none" style="min-width: 32px;" >
        <q-icon :name="icon" size="1.5em"/>
      </q-item-section>
      <q-item-section>
        {{ title }}
      </q-item-section>
  </q-item>
</router-link>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'EssentialLink',
  props: {
    title: {
      type: String,
      required: true
    },

    link: {
      type: String,
      default: '#'
    },

    icon: {
      type: String,
      default: ''
    }
  }
})
</script>

<style scoped>
.link {
  text-decoration: none;
  color: black;
}

.active_class {
    color: #ffffff !important;
    background: #21ba45;
  }
</style>
