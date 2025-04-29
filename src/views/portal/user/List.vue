<template>
  <div class="container bg-white">
    <div class="header-row">
      <h2 class="mb-4 mb-md-0 text-dark">User List</h2>
      <button class="btn btn-primary" @click="createUser()">Create User</button>
    </div>
    <div class="table-responsive">
      <table class="table table-striped table-bordered table-hover">
        <thead class="table-light">
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(user, index) in users" :key="user.id">
            <td>{{ user.id }}</td>
            <td>{{ user.name }}</td>
            <td>{{ user.email }}</td>
            <td>{{ user.phone }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, onMounted } from 'vue'
import { useUserStore } from '@/stores/user'
import { useRouter } from 'vue-router'

//Store
const userStore = useUserStore()
const router = useRouter()

//Reactive variables
const userAge = ref(25)
const showInfo = ref(false)

const users = userStore.userList
//

const createUser = () => {
  router.push({ name: 'UserCreate' })
  console.log('Create User button clicked')
}

const addNewUserData = () => {
  const newUserObj = {
    id: users.length + 1,
    name: userStore.userNew.name,
    email: userStore.userNew.email,
    phone: userStore.userNew.phone
  }
  users.push(newUserObj); // Fixed: removed spread operator
  console.log('New user added:', newUserObj);
}

onMounted(() => {
  console.log('User List component mounted')
  // Check if there is new user data to add
  if (userStore.hasNewUser) {
    addNewUserData()
    userStore.hasNewUser = false // Reset the flag
  }
})
</script>

<style scoped>
.container {
  padding: 20px;
  background-color: #ffffff;
  color: #212529;
}

.header-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
}

/* Light theme styles */
table {
  background-color: #fff;
  color: #333;
}

button {
  background-color: #f8f9fa;
  color: #212529;
}
</style>
