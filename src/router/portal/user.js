const UserList = () => import('@/views/portal/user/List.vue');
const UserCreate = () => import('@/views/portal/user/Create.vue');

const UserRouter = [
  {
    path: '/portal/userList',
    name: 'UserList',
    component: UserList,
  },
  {
    path: '/portal/userCreate',
    name: 'UserCreate',
    component: UserCreate,
  }
];

export default UserRouter;
