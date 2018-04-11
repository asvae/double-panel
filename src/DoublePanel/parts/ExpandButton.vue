<template>
    <div @click="$emit('input', !value)">
        {{ value ? 'reduce' : 'expand' }}
    </div>
</template>

<script lang="ts">

  export default {
    name: 'VmExpandButton',
    components: {
    },
    props: {
      value: {
        type: Boolean,
        default: false,
      },
    },
  }
</script>