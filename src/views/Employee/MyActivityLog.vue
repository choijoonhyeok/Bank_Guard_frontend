<template>
  <div class="main">
    <header class="header">
      <h1>내부 보고 / 이력 조회</h1>
      <p>사원 업무 이력 및 내부 보고 내역을 관리합니다.</p>
    </header>

    <section class="card-container">
      <div class="card" @click="goActionLog">
        <h2>사원 행위 로그</h2>
        <p>계좌 조회·수정·이체 등 주요 행위 이력 조회</p>
      </div>

      <div class="card" @click="goReportList">
        <h2>이상 행위 보고</h2>
        <p>시스템 자동 탐지 및 수동 신고 내역 확인</p>
      </div>

      <div class="card" @click="goAudit">
        <h2>감사 이력</h2>
        <p>내부 감사 및 점검 결과 조회</p>
      </div>
    </section>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();

const goActionLog = () => {
  router.push('/logs');
};

const goReportList = () => {
  router.push('/reports');
};

const goAudit = () => {
  router.push('/audits');
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
  width: 260px;
  height: 170px;
  background: #ffffff;
  border-radius: 12px;
  padding: 24px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  cursor: pointer;
  transition: all 0.2s ease;
  border-top: 6px solid #2f6fff; /* 감사/관리 느낌 */
}

.card:hover {
  transform: translateY(-6px);
  box-shadow: 0 10px 22px rgba(0, 0, 0, 0.14);
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
