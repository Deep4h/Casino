<script setup>
    import { ref } from 'vue'
    const text = ref(0)
</script>
<template>
    <button @click="openPopup">{{text}}</button>
    <div class="popup">
    </div>
</template>