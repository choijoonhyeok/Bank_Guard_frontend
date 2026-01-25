<template>
  <div class="layout">
    <TopBar />

    <main class="content">
      <router-view />
    </main>
  </div>
</template>

<script setup>
import TopBar from '@/components/TopBar.vue';
</script>

<style scoped>
.layout {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.content {
  flex: 1;
  padding: 24px;
  background-color: #f3f4f6;
}
</style>
