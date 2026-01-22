<template>
  <div class="main">
    <header class="header">
      <h1>사원 메인 페이지</h1>
    </header>

    <section class="menu">
      <button @click="goCustomerSearch">고객 조회</button>
      <button @click="goAccountTransaction">계좌/거래 업무</button>
      <button @click="goRequestList">승인/처리 업무</button>
      <button @click="goMyActivityLog">내부 보고/이력 조회</button>
      <button @click="goNotice">이상 행위 감시 대상</button>
    </section>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();

const goCustomerSearch = () => {
  router.push('/employee/customerSearch');
};
const goAccountTransaction = () => {
  router.push('/employee/accountTransaction');
};
const goRequestList = () => {
  router.push('/employee/requestList');
};
const goMyActivityLog = () => {
  router.push('/employee/myActivityLog');
};
const goNotice = () => {
  router.push('/employee/notice');
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
