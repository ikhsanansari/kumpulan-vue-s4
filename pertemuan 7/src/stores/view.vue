<template>
    <h1>BELAJAR PINIA</h1>
    <p>Akseses count: {{ countStore.count }}</p>
    <p>Akses doubelcount : {{ countStore.doubleCount }}</p>
    <button @click="countStore.increment">+</button> <br>
  </template>
  
  
  <script >
  import { useCountStore } from './countStores'
  
  export default {
    setup() {
      const countStore = useCountStore()
      return {
        countStore
      }
    }}
  </script>