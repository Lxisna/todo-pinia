<script setup>
import ItemEdit from '../components/ItemEdit.vue'
</script>

<template>
  <!-- 父组件 传递id值 给子组件 ItemEdit  -->
  <ItemEdit :id="$route.params.id" />
</template>
