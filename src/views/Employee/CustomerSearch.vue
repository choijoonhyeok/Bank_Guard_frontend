<template>
  <div>
    <h2>사원 조회</h2>

    <div v-if="loading">불러오는 중...</div>

    <table v-else>
      <thead>
        <tr>
          <th>ID</th>
          <th>사번</th>
          <th>이름</th>
          <th>부서</th>
          <th>직급</th>
          <th>상태</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="emp in employees" :key="emp.employeeId">
          <td>{{ emp.employeeId }}</td>
          <td>{{ emp.empNo }}</td>
          <td>{{ emp.name }}</td>
          <td>{{ emp.department }}</td>
          <td>{{ emp.position }}</td>
          <td>{{ emp.status }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import { useRouter } from 'vue-router';
import { getEmployees } from '@/api/employee';

const router = useRouter();

/* 더미 고객 데이터 */
const employees = ref([]);
const loading = ref(true);
/* 고객 상세 페이지 이동 */
const goDetail = (id) => {
  router.push(`/customer/${id}`);
};

onMounted(async () => {
  try {
    const res = await getEmployees();
    customers.value = res.data;
    console.log('고객 리스트:', res.data);
  } catch (error) {
    console.error('고객 조회 실패', error);
  }
});
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
