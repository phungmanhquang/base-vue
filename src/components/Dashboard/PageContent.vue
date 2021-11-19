<template>
  <div class="mt-2">
    <b-card>
      <b-row>
        <b-col v-for="i in 4" :key="i" cols="12" sm="4" md="3">
          <b-form-group
            id="input-group-1"
            label="One of cols"
            label-for="input-1"
          >
            <b-form-input />
          </b-form-group>
        </b-col>
      </b-row>
    </b-card>
  </div>
</template>

<script>
export default {
  name: "PageContent"
};
</script>

<style scoped>

</style>
