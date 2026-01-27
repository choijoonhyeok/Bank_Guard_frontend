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
              <button @click="goDetail(customer.id)">조회</button>
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
.main {
  min-height: 100vh;
  padding: 40px;
}

.header {
  text-align: center;
  margin-bottom: 30px;
}

.customer-list {
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
}

table {
  width: 100%;
  border-collapse: collapse;
}

th,
td {
  border: 1px solid #ddd;
  padding: 12px;
  text-align: center;
}

th {
  background-color: #f4f6f8;
}

button {
  padding: 6px 12px;
  cursor: pointer;
}
</style>
