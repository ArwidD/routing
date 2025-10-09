<script setup>
import { ref, watchEffect } from 'vue'
import UserCard from '@/components/UserCard.vue'
import JohnDoe from '@/assets/images/johnDoe.png'
import userData from '@/assets/data/users.json'

const props = defineProps(['id'])
const user = ref({ id: props.id, namn: 'John Doe', image: JohnDoe })
const userList = ref(userData)
watchEffect(() => {
  user.value =
    userList.value.users.find((itm) => {
      if (itm.id == props.id) {
        itm.image = new URL(`../assets/images/${itm.bild}`, import.meta.url).href
        if (itm.image.endsWith('undefined')) {
          itm.image = JohnDoe
        }
        return true
      }
    }) ?? user.value
})
</script>
<template>
  <h1>
    {{ user.namn }}
  </h1>
  <UserCard :user="user" />
  <RouterLink to="/users">tillbaka till användarlistan</RouterLink>
</template>
