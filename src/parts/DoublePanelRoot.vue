<template>
    <div class="double-panel">
        <vm-double-panel-single-panel
                class="double-panel__single-panel double-panel__single-panel--half"
                v-if="leftPanelItem"
                v-on="$listeners"
                @eventTriggered="gotFromLeft"
                :content="leftPanelItem.component"
        />
        <vm-double-panel-single-panel
                class="double-panel__single-panel double-panel__single-panel--half"
                v-if="rightPanelItem"
                v-on="$listeners"
                @eventTriggered="gotFromRight"
                :content="rightPanelItem.component"
        />
    </div>
</template>

<script>
  import VmDoublePanelSinglePanel from './DoublePanelSinglePanel.vue'
  import DoublePanelEvent from '../../../../classes/Utility/DoublePanelEvent'
  import PanelItem from '../classes/PanelItem'

  export default {
    name: 'VmDoublePanelRoot',
    components: {
      VmDoublePanelSinglePanel,
    },
    props: {
      leftPanelItem: {
        type: PanelItem,
      },
      rightPanelItem: {
        type: PanelItem,
      },
    },
    methods: {
      gotFromLeft (event: Event1) {
        this.$emit('leftTriggered', event)
      },
      gotFromRight (event: Event1) {
        this.$emit('rightTriggered', event)
      },
    }
  }
</script>

