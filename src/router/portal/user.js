const UserList = () => import('@/views/portal/user/List.vue')

const UserRouter = [
  {
    path: '/portal/userList',
    name: 'UserList',
    component: UserList,
  }
];

export default UserRouter;
