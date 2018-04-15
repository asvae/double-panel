<template>
    <div class="demo-container">
        <div class="demo-container__item">
            <vm-cloud-panel-example>

            </vm-cloud-panel-example>
        </div>
    </div>
</template>

<script lang="ts">
  import CloudPanelExample from './CloudPanelExample.vue'

  export default {
    $componentTree: {
      component: CloudPanelExample,
    },
    components: {
      CloudPanelExample,
    },
  }
</script>