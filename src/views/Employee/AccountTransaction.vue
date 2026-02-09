<template>
  <div class="main">
    <header class="header">
      <h1>계좌 / 거래 업무</h1>
      <p>계좌 조회 및 거래 관련 업무를 처리할 수 있습니다.</p>
    </header>

    <section class="card-container">
      <div class="card" @click="goAccountSearch">
        <h2>계좌 조회</h2>
        <p>고객 계좌 정보 및 잔액 조회</p>
      </div>

      <div class="card" @click="goTransaction">
        <h2>거래 내역</h2>
        <p>입출금 및 거래 내역 확인</p>
      </div>

      <div class="card" @click="goTransfer">
        <h2>이체 처리</h2>
        <p>계좌 간 이체 및 송금 업무</p>
      </div>
    </section>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();

const goAccountSearch = () => {
  router.push('/accounts');
};

const goTransaction = () => {
  router.push('/transactions');
};

const goTransfer = () => {
  router.push('/transfer');
};
</script>

<style scoped>
.main {
  height: 100vh;
  background-color: #f4f6f8;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.header {
  text-align: center;
  margin: 60px 0 40px;
}

.header h1 {
  font-size: 28px;
  font-weight: bold;
  margin-bottom: 10px;
}

.header p {
  color: #666;
}

.card-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
}

.card {
  width: 240px;
  height: 160px;
  background: #fff;
  border-radius: 12px;
  padding: 24px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  cursor: pointer;
  transition: all 0.2s ease;
}

.card:hover {
  transform: translateY(-6px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.12);
}

.card h2 {
  font-size: 20px;
  margin-bottom: 10px;
}

.card p {
  font-size: 14px;
  color: #555;
}
</style>
