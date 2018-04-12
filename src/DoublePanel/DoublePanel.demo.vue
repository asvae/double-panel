<template>
    <div style="width: 1000px; height: 100%">
        <vm-double-panel
                @someEvent="someEvent"
                :doublePanelItems="doublePanelItems"
        />
    </div>
</template>

<script lang="ts">
  import VmDoublePanel from './DoublePanel.vue'
  import DoublePanelItemsFactory from '../../demo/components/DoublePanelItemsFactory'

  export default {
    data () {
      return {
        doublePanelItems: DoublePanelItemsFactory.getFull(),
      }
    },
    components: {
      VmDoublePanel,
    },
    methods: {
      someEvent () {
        console.log('some-event')
      }
    },
  }
</script>

