<template>
  <div class="container bg-white">
    <h2 class="mb-4 text-dark" v-if="showInfo">User age: {{ userAge }}</h2>
    <h2 class="mb-4 text-dark" v-if="showInfo">User List</h2>
    <div class="table-responsive" v-if="showInfo">
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
    <button class="btn btn-light border" @click="showData()">Show data</button>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'

const userAge = ref(null);
const showInfo = ref(false);

const users = reactive([]);
//

const showData = () => {
  userAge.value = 25
  const res = [
    { id: 1, name: 'John Doe', email: 'john.doe@example.com', phone: '(123) 456-7890' },
    { id: 2, name: 'Jane Smith', email: 'jane.smith@example.com', phone: '(234) 567-8901' },
    { id: 3, name: 'Robert Johnson', email: 'robert.j@example.com', phone: '(345) 678-9012' },
    { id: 4, name: 'Emily Wilson', email: 'emily.w@example.com', phone: '(456) 789-0123' },
    { id: 5, name: 'Michael Brown', email: 'michael.b@example.com', phone: '(567) 890-1234' },
  ];

  users.push(...res);
  showInfo.value = true;
}
</script>

<style scoped>
.container {
  padding: 20px;
  background-color: #ffffff;
  color: #212529;
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
