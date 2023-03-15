<template>
  <q-layout view="lHh Lpr lFf">
    <q-header class="bg-white q-py-md"
      style="height: 4.5rem; border-bottom: 1px solid #eee">
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          color="positive"
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title class="text-positive font-bold text-xl">
          <!-- <router-link :to="/">  -->

            Eco portal
        </q-toolbar-title>

      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
    >
      <q-list>

        <q-item class="text-positive text-xl font-bold text-center">
          ECO PORTAL
        </q-item>

        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from 'vue'
import EssentialLink from 'components/EssentialLink.vue'

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
  name: 'MainLayout',

  components: {
    EssentialLink
  },

  setup () {
    const leftDrawerOpen = ref(false)

    return {
      essentialLinks: linksList,
      leftDrawerOpen,
      toggleLeftDrawer () {
        leftDrawerOpen.value = !leftDrawerOpen.value
      }
    }
  },
  mounted(){
    this.$router.push({path:'/home'})
  }

})
</script>
