<template>
  <aside class="sidebar">
    <h2 class="logo">BANK GUARD</h2>

    <nav>
      <router-link to="/employee" class="menu">대시보드</router-link>
      <router-link to="/employee/customer-search" class="menu"
        >고객 조회</router-link
      >
      <router-link to="/employee/account-transaction" class="menu"
        >거래 내역</router-link
      >
      <router-link to="/employee/request-list" class="menu"
        >요청 목록</router-link
      >
      <router-link to="/employee/activity-log" class="menu"
        >내 활동 로그</router-link
      >
      <router-link to="/employee/notice" class="menu">공지사항</router-link>
    </nav>
  </aside>
</template>

<script>
export default {
  name: 'Sidebar',
};
</script>

<style scoped>
.sidebar {
  width: 220px;
  height: 100vh;
  background: #1f2937;
  color: white;
  padding: 20px;
}

.logo {
  margin-bottom: 30px;
  font-size: 20px;
  font-weight: bold;
}

.menu {
  display: block;
  margin-bottom: 15px;
  color: #d1d5db;
  text-decoration: none;
}

.menu.router-link-active {
  color: white;
  font-weight: bold;
}
</style>
