<template>
  <div class="main">
    <header class="header">
      <h1>Bank Guard System</h1>
      <p>내부 이상 행위 탐지 및 통제 시스템</p>
    </header>

    <section class="menu">
      <button @click="goEmployeeMainPage">사원 모드</button>
      <button @click="goAdmin">관리자 모드</button>
      <button @click="goCustomer">고객 모드</button>
    </section>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();

const goEmployeeMainPage = () => {
  router.push('/employee');
};

const goAdmin = () => {
  router.push('/admin');
};

const goCustomer = () => {
  router.push('/customer');
};
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

.menu button {
  margin: 10px;
  padding: 15px 30px;
  font-size: 16px;
  cursor: pointer;
}
</style>
