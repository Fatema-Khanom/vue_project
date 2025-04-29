<template>
  <div class="create-user">
    <h1>Create New User</h1>
    <form @submit.prevent="handleSubmit">
      <div class="form-group">
        <label for="name">Name</label>
        <input
          type="text"
          id="name"
          v-model="user.name"
          class="form-control"
          required
          placeholder="Enter full name"
        />
      </div>

      <div class="form-group">
        <label for="email">Email</label>
        <input
          type="email"
          id="email"
          v-model="user.email"
          class="form-control"
          required
          placeholder="Enter email address"
        />
      </div>

      <div class="form-group">
        <label for="phone">Phone</label>
        <input
          type="tel"
          id="phone"
          v-model="user.phone"
          class="form-control"
          placeholder="Enter phone number"
        />
      </div>

      <button type="submit" class="btn btn-primary">Create User</button>
      <button class="btn btn-secondary" @click="listUser">User List</button>
    </form>
  </div>
</template>

<script setup>
import { reactive } from 'vue';
import { useUserStore } from '@/stores/user'
import { useRouter } from 'vue-router'

//Store
const userStore = useUserStore()
const router = useRouter()

// User data
const user = reactive({
  name: '',
  email: '',
  phone: ''
});

// Form submission handler
function handleSubmit() {
  console.log('Submitting user data:', user);
  userStore.userNew.name = user.name;
  userStore.userNew.email = user.email;
  userStore.userNew.phone = user.phone;
  userStore.hasNewUser = true; // Add flag to indicate new user data is available
  listUser();
}

const listUser = () => {
  router.push({ name: 'UserList' })
  console.log('Create User button clicked')
}
</script>

<style scoped>
.create-user {
  max-width: 500px;
  margin: 0 auto;
  padding: 20px;
}

.form-group {
  margin-bottom: 20px;
}

.form-group label {
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
}

.form-control {
  width: 100%;
  padding: 8px;
  border: 1px solid #ddd;
  border-radius: 4px;
}

.btn {
  padding: 10px 15px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.btn-primary {
  background-color: #4CAF50;
  color: white;
}
</style>
