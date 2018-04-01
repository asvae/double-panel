<template>
    <div style="width: 800px; height: 100%">
        <vm-double-panel
                @someEvent="someEvent"
                :doublePanelItems="doublePanelItems"
        />
    </div>
</template>

<script>
  import VmDoublePanel from './DoublePanel.vue'
  import DoublePanelItemsFactory from '../../../domain-modules/Factory/DoublePanelItemsFactory'

  export default {
    $componentTree: {
      status: 'stable',
      component: VmDoublePanel,
      description: `Warning! Complex logic. Melts brainz.`
    },
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

