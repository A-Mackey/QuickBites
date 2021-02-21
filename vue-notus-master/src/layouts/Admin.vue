<template>
  <div>
    <sidebar />
    <div class="relative md:ml-64 mt-auto bg-gray-200">
      <admin-navbar />
      <!-- <header-stats /> -->
      <div class="mt-auto">
    </div>
    </div>
    <div class="md:ml-64 bg-gray-200">
      <div class="">
        <router-view />
        <footer-admin />
      </div>
    </div>
  </div>
</template>
<script>
import AdminNavbar from "@/components/Navbars/AdminNavbar.vue";
import Sidebar from "@/components/Sidebar/Sidebar.vue";
// import HeaderStats from "@/components/Headers/HeaderStats.vue";
import FooterAdmin from "@/components/Footers/FooterAdmin.vue";
export default {
  name: "admin-layout",
  components: {
    AdminNavbar,
    Sidebar,
    // HeaderStats,
    FooterAdmin,
  },
};
</script>
