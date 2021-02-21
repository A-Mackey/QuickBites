<template>
  <nav
    class="top-0 fixed z-50 w-full flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg bg-white shadow"
  >
    <div
      class="container pl-4 ml-auto mr-4 flex flex-wrap items-center justify-between"
    >
      <div
        class="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start"
      >
        <router-link to="/">
          <a
            class="text-gray-800 text-md font-bold leading-relaxed inline-block mr-4 pr-4 py-2 whitespace-no-wrap uppercase"
            href="#pablo"
          >
            Quick Bites
          </a>
        </router-link>
        <button
          class="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
          type="button"
          v-on:click="setNavbarOpen"
        >
          <i class="fas fa-bars"></i>
        </button>
      </div>
      <div
        class="lg:flex flex-grow items-center"
        :class="[navbarOpen ? 'block' : 'hidden']"
        id="example-navbar-warning"
      >
        <ul class="flex flex-col lg:flex-row list-none mr-auto">
          <li class="flex items-center">
            <div class="mx-4" style="border-left:1px solid #000;height:40px"></div>
          </li>
            <router-link to="/aboutus">
              <a
                class="text-gray-800 text-sm font-bold leading-relaxed inline-block mr-4 ml-6 px-6 py-2 whitespace-no-wrap uppercase"
                href="#pablo"
              >
                About Us
              </a>
            </router-link>
        </ul>
        <ul class="flex flex-col lg:flex-row list-none lg:ml-auto">

          <li class="flex items-center">
            <router-link
              to="/auth/login"
              class="bg-white-100 text-indigo active:bg-white-200 text-xs font-bold uppercase px-4 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3 ease-linear transition-all duration-150"
              style="color:#667eea"
            >
              <i class=""></i> Log In
            </router-link>
          </li>

          <li class="flex items-center">
            <router-link
              to="/auth/register"
              class="bg-indigo-500 text-white active:bg-indigo-600 text-xs font-bold uppercase px-4 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3 ease-linear transition-all duration-150"
            >
              <i class=""></i> Register
            </router-link>
          </li>
          <li class="flex items-center">
            <div class="mx-4">
              <index-dropdown />
            </div>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import IndexDropdown from "@/components/Dropdowns/IndexDropdown.vue";

export default {
  data() {
    return {
      navbarOpen: false,
    };
  },
  methods: {
    setNavbarOpen: function () {
      this.navbarOpen = !this.navbarOpen;
    },
  },
  components: {
    IndexDropdown,
  },
};
</script>
