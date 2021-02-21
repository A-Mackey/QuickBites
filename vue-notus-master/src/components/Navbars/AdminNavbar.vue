<template>
  <!-- Navbar -->
  <nav
    class="absolute top-0 left-0 w-full z-10 bg-transparent md:flex-row md:flex-no-wrap md:justify-start flex items-center p-4"
  >
    <div
      class="w-full mx-autp items-center flex justify-between md:flex-no-wrap flex-wrap md:px-4 px-4"
    >
      <div class="py-2 px-4 mx-4 ml-auto">
        <router-link
          to="/admin/cart"
          style="background-color: #667eea"
          class="uppercase text-white font-bold hover:shadow-md shadow text-xs px-4 py-2 rounded outline-none focus:outline-none sm:mr-2 mb-1 ease-linear transition-all duration-150"
          type="button">
          <i class="fas fa-shopping-cart"></i>
          Cart
        </router-link>
      </div>
    </div>
  </nav>
  <!-- End Navbar -->
</template>
