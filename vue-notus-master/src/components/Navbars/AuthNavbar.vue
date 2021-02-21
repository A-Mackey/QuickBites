<template>
  <nav
    class="top-0 absolute z-50 w-full flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg"
  >
    <div
      class="container px-4 mx-auto flex flex-wrap items-center justify-between"
    >
      <div
        class="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start"
      >
        <router-link
          class="text-white text-md font-bold leading-relaxed inline-block mr-4 pr-4 py-2 whitespace-no-wrap uppercase"
          to="/"
        >
          Quick Bites
        </router-link>
        <button
          class="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
          type="button"
          v-on:click="setNavbarOpen"
        >
          <i class="text-white fas fa-bars"></i>
        </button>
      </div>
      <div
        class="lg:flex flex-grow items-center bg-white lg:bg-transparent lg:shadow-none"
        :class="[navbarOpen ? 'block rounded shadow-lg' : 'hidden']"
        id="example-navbar-warning"
      >
        <ul class="flex flex-col lg:flex-row list-none mr-auto">
          <li class="flex items-center">
            <div class="mx-4" style="border-left:1px solid #FFFF;height:40px"></div>
          </li>
          <router-link to="/admin/search">
              <a
                class="text-white text-sm font-bold leading-relaxed inline-block mr-6 ml-6 px-6 py-2 whitespace-no-wrap uppercase"
                href="#pablo"
              >
                Search
              </a>
            </router-link>
            <router-link to="/admin/donate">
              <a
                class="text-white text-sm font-bold leading-relaxed inline-block mr-6 ml-6 px-6 py-2 whitespace-no-wrap uppercase"
                href="#pablo"
              >
                Donate
              </a>
            </router-link>
            <router-link to="/aboutus">
              <a
                class="text-white text-sm font-bold leading-relaxed inline-block mr-6 ml-6 px-6 py-2 whitespace-no-wrap uppercase"
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
              class=" bg-white text-white text-xs font-bold uppercase px-4 py-2 rounded outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3 ease-linear transition-all duration-150"
              style="color: #667eea"
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
              <pages-dropdown />
            </div>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
<script>
import PagesDropdown from "@/components/Dropdowns/PagesDropdown.vue";
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
    PagesDropdown,
  },
};
</script>
