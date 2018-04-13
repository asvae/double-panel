<template>
    <div class="demo-container">
        <div class="demo-container__item">
            <vm-circle-button>
                X
            </vm-circle-button>
        </div>
    </div>
</template>

<script lang="ts">
  import VmCircleButton from './CircleButton.vue'

  export default {
    $componentTree: {
      component: VmCircleButton,
    },
    components: {
      VmCircleButton,
    },
  }
</script>