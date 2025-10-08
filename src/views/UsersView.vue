<script setup>
document.title = 'Users'
import { ref } from 'vue'
import arwid from '@/assets/images/arwid.jfif'
import UserCard from '@/components/UserCard.vue'
import userData from '@/assets/data/users.json'
import UsersList from '@/components/UsersList.vue'
const users = ref(userData)
</script>
<template>
  <div>
    <h1>Användarsida</h1>
  </div>
  <UserCard :user="{ id: 1, namn: 'Arwid', image: arwid }" />
  <UsersList :userList="users" />
</template>
<style scoped></style>
