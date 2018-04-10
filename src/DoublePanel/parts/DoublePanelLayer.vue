<template>
    <div class="double-panel"
         :class="{'double-panel--right': panelLayer.isRight, 'double-panel--left': !panelLayer.isRight }"
    >
        <vm-double-panel-single-panel
                class="double-panel__single-panel"
                :class="{
                    'double-panel__single-panel--full': panelLayer.isFullSize,
                    'double-panel__single-panel--half': !panelLayer.isFullSize,
                    'double-panel__single-panel--right': !panelLayer.isFullSize && panelLayer.isRight,
                    'double-panel__single-panel--left': !panelLayer.isFullSize &&  !panelLayer.isRight,
                }"
                v-on="$listeners"
                :content="panelLayer.getComponent()"
                :value="panelLayer.data"
                canClose
        />
    </div>
</template>

<script lang="ts">
  import VmDoublePanelSinglePanel from './DoublePanelSinglePanel.vue'
  import PanelLayer from '../classes/PanelLayer'

  export default {
    name: 'VmDoublePanelLayer',
    components: {
      VmDoublePanelSinglePanel,
    },
    props: {
      panelLayer: {
        type: PanelLayer,
      },
    },
  }
</script>

