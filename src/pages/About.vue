<template>
  <div class="text-center p-0 m-0 container-fluid">
    <Navbar />
    <div class="jumbotron m-0 jumbotron-fluid">
      <div class="container">
        <HomeComponentB />
        <HomeComponentA />
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import HomeComponentA from "@/components/Home/HomeComponentA.vue";
import HomeComponentB from "@/components/Home/HomeComponentB.vue";

export default {
  name: "About",
  components: {
    HomeComponentB,
    HomeComponentA,
    Navbar,
  },
};
</script>
