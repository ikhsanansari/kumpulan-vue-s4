import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useCountStore = defineStore('count', () => {
    const count = ref(5)

    const doubleCount = computed(() => count.value * 2)
    function increment() {
        count.value++
    }

    return {count, name, doubleCount,increment}
})