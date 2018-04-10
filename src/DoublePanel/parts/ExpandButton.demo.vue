<template>
    <div class="demo-container">
        <div class="demo-container__item">
            <vm-expand-button v-model="value"/>
        </div>
    </div>
</template>

<script lang="ts">
  import VmExpandButton from './ExpandButton.vue'

  export default {
    $componentTree: {
      status: 'stable',
      component: VmExpandButton,
      description: ``,
    },
    components: { VmExpandButton },
    data () {
      return {
        value: false,
      }
    },
  }
</script>

