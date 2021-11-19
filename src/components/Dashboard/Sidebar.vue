<template>
  <div>
    <b-navbar-nav>
      <template v-for="(item, i) in menuData">
        <div :key="i">
          <b-nav-item href="#" v-b-toggle="`collapse-${i}`" >{{ item.name }}</b-nav-item>
          <b-collapse v-if="item.child && item.child.length > 0" visible :id="`collapse-${i}`">
            <b-nav-item v-for="(element, index) in item.child" :key="index" href="#" v-b-toggle.collapse-3>
              {{ element.name }}
            </b-nav-item>
          </b-collapse>
        </div>
      </template>
    </b-navbar-nav>
  </div>
</template>

<script>
export default {
  name: "Sidebar",
  data () {
    return {
      menuData: [
        {
          name: "Dashboard",
          path: "/dashboard",
          child: [
            {
              name: "Dashboard 1",
              path: "/dashboard"
            },
            {
              name: "Dashboard 2",
              path: "/dashboard"
            }
          ]
        },
        {
          name: "Form",
          path: "/dashboard",
          child: [
            {
              name: "Dashboard 1",
              path: "/dashboard"
            },
            {
              name: "Dashboard 2",
              path: "/dashboard"
            }
          ]
        }
      ]
    };
  }
};
</script>

<style scoped>

</style>
