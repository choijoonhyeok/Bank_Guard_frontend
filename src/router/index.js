import { createRouter, createWebHistory } from 'vue-router';
import Main from '../views/Main.vue';
import EmployeeMain from '../views/Employee/EmployeeMain.vue';
import CustomerSearch from '../views/Employee/CustomerSearch.vue';
import AccountTransaction from '../views/Employee/AccountTransaction.vue';
import RequestList from '../views/Employee/RequestList.vue';
import MyActivityLog from '../views/Employee/MyActivityLog.vue';
import Notice from '../views/Employee/Notice.vue';
import DefaultLayout from '../layouts/DefaultLayout.vue';

const routes = [
  { path: '/', component: Main },
  {
    path: '/employee',
    component: DefaultLayout,
    children: [
      { path: '', component: EmployeeMain }, // /employee
      { path: 'customerSearch', component: CustomerSearch },
      { path: 'accountTransaction', component: AccountTransaction },
      { path: 'requestList', component: RequestList },
      { path: 'myActivityLog', component: MyActivityLog },
      { path: 'notice', component: Notice },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
