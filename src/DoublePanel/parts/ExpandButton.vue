<template>
    <div @click="$emit('input', !value)">
        {{ value ? 'reduce' : 'expand' }}
    </div>

    <!--<vm-circle-button-->
            <!--:iconType="value ? 'reduce' : 'expand'"-->
            <!--@click.native="$emit('input', !value)"-->
    <!--/>-->
</template>

<script lang="ts">
  import VmCircleButton from '../../Buttons/CircleButton.vue'

  export default {
    name: 'VmExpandButton',
    components: {
      VmCircleButton,
    },
    props: {
      value: {
        type: Boolean,
        default: false,
      },
    },
  }
</script>