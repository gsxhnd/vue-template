<template>
  <div class="layout-header">
    <Button icon="pi pi-arrow-right" @click="visible = true" label="Submit" />
  </div>
  <div class="layout-container">
    <div class="layout-sidebar">
      <Sidebar v-model:visible="visible">
        <h2>Sidebar</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
      </Sidebar>
    </div>
    <div class="layout-header"></div>
  </div>
</template>

<script setup lang="ts">
import { h, defineComponent, ref, Component } from "vue";
import Button from "primevue/button";
import Sidebar from "primevue/sidebar";

const visible = ref(false);
</script>
