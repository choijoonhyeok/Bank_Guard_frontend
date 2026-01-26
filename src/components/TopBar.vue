<template>
  <header class="topbar">
    <div class="left">
      <span class="title">🏦 Bank Guard 내부 시스템</span>
      <span class="mode">사원 모드</span>
    </div>

    <div class="right">
      <span class="status normal">● 정상</span>

      <span class="user"> 10231 | 김사원 (창구) </span>

      <button class="logout">로그아웃</button>
    </div>
  </header>
</template>

<script setup></script>

<style scoped>
.topbar {
  height: 60px;
  background-color: #ffffff;
  border-bottom: 1px solid #e5e7eb;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
}

.left {
  display: flex;
  align-items: center;
  gap: 12px;
}

.title {
  font-weight: bold;
  font-size: 16px;
}

.mode {
  background-color: #e0f2fe;
  color: #0369a1;
  padding: 4px 8px;
  border-radius: 6px;
  font-size: 12px;
}

.right {
  display: flex;
  align-items: center;
  gap: 16px;
}

.status {
  font-size: 12px;
}

.status.normal {
  color: #16a34a;
}

.user {
  font-size: 14px;
  color: #374151;
}

.logout {
  border: none;
  background-color: #ef4444;
  color: white;
  padding: 6px 12px;
  border-radius: 4px;
  cursor: pointer;
}

.logout:hover {
  background-color: #dc2626;
}
</style>
