<template>
  <b-container fluid>
    <b-row no-gutters>
      <b-col md="1" class="bg-dark" style="min-height: 100vh">
        <sidebar />
      </b-col>
      <b-col md="11">
        <app-header />
        <page-content />
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import Sidebar from "@/components/Dashboard/Sidebar.vue";
import AppHeader from "@/components/Dashboard/Header.vue";
import PageContent from "@/components/Dashboard/PageContent.vue";

export default {
  name: "Dashboard",
  components: { PageContent, AppHeader, Sidebar }
};
</script>

<style scoped>

</style>
