import { reactive, ref } from 'vue'
import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', () => {
  const userList = reactive([ { id: 1, name: 'John Doe', email: 'john.doe@example.com', phone: '(123) 456-7890' },
    { id: 2, name: 'Jane Smith', email: 'jane.smith@example.com', phone: '(234) 567-8901' },
    { id: 3, name: 'Robert Johnson', email: 'robert.j@example.com', phone: '(345) 678-9012' },
    { id: 4, name: 'Emily Wilson', email: 'emily.w@example.com', phone: '(456) 789-0123' },
    { id: 5, name: 'Michael Brown', email: 'michael.b@example.com', phone: '(567) 890-1234' },]);
  const userName = ref(null);
  const userEmail = ref(null);
  const userToken = ref(null);
  const hasNewUser = ref(false);
  const userNew = reactive({
    name: null,
    email: null,
    phone: null,
  });

  return { userList, userName, userEmail, userToken, userNew, hasNewUser };
});
