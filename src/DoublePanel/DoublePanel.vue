<template>
    <div class="double-panel">
        <vm-double-panel-root
                :leftPanelItem="doublePanelItems.left"
                :rightPanelItem="doublePanelItems.right"
                v-on="$listeners"
                @leftTriggered="processEvent($event, 'left')"
                @rightTriggered="processEvent($event, 'right')"
        />
        <template v-for="childLayer in childLayers">
            <vm-double-panel-layer
                    :panelLayer="childLayer"
                    v-on="$listeners"
                    @eventTriggered="processLayerEvent(childLayer, $event)"
                    @close="onClose(childLayer)"
            />
        </template>
    </div>
</template>

<script lang="ts">
  import VmDoublePanelRoot from './parts/DoublePanelRoot.vue'
  import VmDoublePanelLayer from './parts/DoublePanelLayer/DoublePanelLayer.vue'

  import DoublePanelItems from './classes/DoublePanelItems'
  import DoublePanelEvent from './classes/DoublePanelEvent'
  import PanelLayer from './classes/PanelLayer'
  import {
    closeSinglePanel, closeSinglePanelChildren,
    toggleFullSizeForPanel,
  } from './doublePanelPanelKeys'

  export default {
    name: 'VmDoublePanel',
    components: {
      VmDoublePanelLayer,
      VmDoublePanelRoot,
    },
    data () {
      return {
        childLayers: [],
      }
    },
    props: {
      doublePanelItems: {
        type: DoublePanelItems,
        required: true,
      },
    },
    methods: {
      getPanelLayer (event: DoublePanelEvent, from: 'left' | 'right'): PanelLayer {
        const panelItem = this.doublePanelItems.findChildByKey(event.key)
        if (!panelItem) {
          throw new Error(`PanelItem for "${event.key.toString()}" event not registered`)
        }
        return new PanelLayer({
          panelItem,
          direction: from === 'left' ? 'right' : 'left',
          data: event.payload,
        })
      },
      processEvent (event: DoublePanelEvent, from: 'left' | 'right') {
        // Clear upper layers
        this.childLayers = []
        const panelLayer = this.getPanelLayer(event, from)
        this.childLayers.push(panelLayer)
      },
      processLayerEvent (childLayer: PanelLayer, event: DoublePanelEvent) {
        // Remove upper layers
        this.childLayers = this.childLayers.slice(0, this.childLayers.indexOf(childLayer) + 1)
        if (event.key === closeSinglePanelChildren) {
          return
        }
        if (event.key === closeSinglePanel) {
          this.childLayers = this.childLayers.slice(0, this.childLayers.length - 1)
          return
        }
        if (event.key === toggleFullSizeForPanel) {
          childLayer.isFullSize = !childLayer.isFullSize
          return
        }
        const panelLayer = this.getPanelLayer(event, childLayer.direction)
        this.childLayers.push(panelLayer)
      },
      onClose (panelLayer ?: PanelLayer) {
        this.childLayers = this.childLayers.slice(0, this.childLayers.indexOf(panelLayer))
      },
    },
  }
</script>

<style lang="scss">
   .double-panel {
        position: relative;
        height: 100%;
        width: 100%;
        margin: 0 auto;
    }
</style>

