<template>
    <div style="width: 1000px; height: 800px">
        <DoublePanel
                :left="leftPanel"
                :right="rightPanel"
        />
    </div>
</template>


<script lang="ts">
  import DoublePanel from './DoublePanel.vue'

  import ListPanelExample from '../demo/components/ListPanelExample.vue'
  import CloudPanelExample from '../demo/components/CloudPanelExample.vue'

  export default {
    components: {
      DoublePanel,
      ListPanelExample,
      CloudPanelExample,
    },
    computed: {
      leftPanel: () => ListPanelExample,
      rightPanel: () => CloudPanelExample,
    },
  }
</script>

