<template>
  <nav class="shadow-md px-6 py-2 md:px-14 xl:px-36">
    <div class="flex items-center justify-between">
      <div class="w-7">
        <img :src="logo" alt="Logo Web" />
      </div>

      <!-- menu mobile -->
      <div class="text-xl text-sky-700 md:hidden" @click="toggleMenu">
        <i class="fa-solid fa-bars"></i>
      </div>
      <!-- menu mobile -->

      <!-- menu website -->
      <div class="text-sky-700 hidden md:block">
        <ul class="py-4 space-x-8 flex flex-row">
          <li v-for="link in links" :key="link.route" class="">
            <router-link :to="link.route" v-slot="{ href, navigate }">
              <a :href="href" @click="navigate">{{ link.text }}</a>
            </router-link>
          </li>
        </ul>
      </div>
      <!-- menu website -->
    </div>

    <!-- Mobile menu items -->
    <div v-if="isMenuOpen" class="text-sky-700">
      <ul class="space-y-2 py-4">
        <li v-for="link in links" :key="link.route">
          <router-link :to="link.route" v-slot="{ href, navigate }">
            <a :href="href" @click="navigate">{{ link.text }}</a>
          </router-link>
        </li>
      </ul>
    </div>
    <!-- Mobile menu items -->
  </nav>
</template>

<script>
import logo from "@/assets/img/Logo.png";
export default {
  name: "navigation-bar",
  data() {
    return {
      logo,
      isMenuOpen: false,
      links: [
        {
          text: "Home",
          route: "/",
        },
        {
          text: "Profile",
          route: "/profile",
        },
        {
          text: "Contact",
          route: "/contact",
        },
      ],
    };
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    },
  },
};
</script>

<style lang="scss" scoped></style>
