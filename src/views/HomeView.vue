<script setup>
import { inject, onMounted, ref } from 'vue'

const views = inject('HomeViews')
onMounted(() => {
  views.value++
})

const tid = ref(new Date().toLocaleString())
</script>

<template>
  <main>
    <p>
      när sidan laddades var klockan...<br />
      {{ tid }}
    </p>
    <p>
      denna sidan har visats: <b>{{ views }}</b> gånger
    </p>
    <ul>
      två till synes länkar som fugerar på olika sätt:
      <li>
        <a href="/my">My View</a>
      </li>
      <li>
        <RouterLink to="/my">My View</RouterLink>
      </li>
    </ul>
  </main>
</template>
