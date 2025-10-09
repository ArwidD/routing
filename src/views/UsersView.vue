<script setup>
document.title = 'Users'
import { ref } from 'vue'
//import kjell from '@/assets/images/kjell.png'
//import UserCard from '@/components/UserCard.vue'
import userData from '@/assets/data/users.json'
import UsersList from '@/components/UsersList.vue'
const users = ref(userData)
</script>
<template>
  <div>
    <h1>Användarsida</h1>
  </div>
  <UsersList :userList="users" />
</template>
<style scoped></style>
