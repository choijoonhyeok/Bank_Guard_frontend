<template>
  <div class="main">
    <header class="header">
      <h1>계좌/거래 업무</h1>
    </header>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();
</script>

<style scoped>
.main {
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.header {
  text-align: center;
  margin-bottom: 40px;
}
</style>
