<template>
  <div class="main">
    <header class="header">
      <h1>고객 조회 페이지</h1>
    </header>

    <!-- 고객 리스트 -->
    <section class="customer-list">
      <table>
        <thead>
          <tr>
            <th>고객번호</th>
            <th>이름</th>
            <th>전화번호</th>
            <th>등급</th>
            <th>상세</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="customer in customers" :key="customer.id">
            <td>{{ customer.id }}</td>
            <td>{{ customer.name }}</td>
            <td>{{ customer.phone }}</td>
            <td>{{ customer.grade }}</td>
            <td>
              <button @click="goDetail(customer.id)">조회하기</button>
              <button @click="goDetail(customer.id)">확인하기</button>
            </td>
          </tr>
        </tbody>
      </table>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

/* 더미 고객 데이터 */
const customers = ref([
  { id: 1001, name: '김철수', phone: '010-1234-5678', grade: 'VIP' },
  { id: 1002, name: '이영희', phone: '010-2222-3333', grade: '일반' },
  { id: 1003, name: '박민수', phone: '010-9876-5432', grade: '우수' },
]);

/* 고객 상세 페이지 이동 */
const goDetail = (id) => {
  router.push(`/customer/${id}`);
};
</script>

<style scoped>
/* 전체 배경 */
.main {
  min-height: 100vh;
  padding: 60px 40px;
  background-color: #f5f7fa;
}

/* 헤더 */
.header {
  text-align: center;
  margin-bottom: 40px;
}

.header h1 {
  font-size: 26px;
  font-weight: 700;
  color: #2c3e50;
}

/* 리스트 카드 */
.customer-list {
  width: 100%;
  max-width: 900px;
  margin: 0 auto;
  background: #ffffff;
  border-radius: 12px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.06);
  overflow: hidden;
}

/* 테이블 */
table {
  width: 100%;
  border-collapse: collapse;
}

thead {
  background-color: #f0f4f8;
}

th {
  padding: 14px;
  font-size: 14px;
  font-weight: 600;
  color: #34495e;
}

td {
  padding: 14px;
  font-size: 14px;
  color: #2c3e50;
}

/* 행 hover 효과 */
tbody tr {
  transition: background-color 0.2s ease;
}

tbody tr:hover {
  background-color: #f9fbfd;
}

/* 테두리 정리 */
th,
td {
  border-bottom: 1px solid #eaecef;
  text-align: center;
}

/* 버튼 */
button {
  padding: 6px 14px;
  border-radius: 6px;
  border: none;
  font-size: 13px;
  font-weight: 600;
  color: #ffffff;
  background-color: #2d6cdf;
  cursor: pointer;
  transition: background-color 0.2s ease;
}

button:hover {
  background-color: #1f55b5;
}
</style>
