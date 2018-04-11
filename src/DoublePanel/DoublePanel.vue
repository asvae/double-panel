<template>
    <div class="double-panel-container">
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
  import VmDoublePanelLayer from './parts/DoublePanelLayer.vue'

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
    $active-background: #f5f8f9;
    $inactive-border: #e0e6ea;

    .double-panel-container {
        position: relative;
        height: 100%;
        width: 100%;
        margin: 0 auto;
    }

    .double-panel {
        height: 100%;
        width: 100%;
        position: absolute;
        top: 0;
        left: 0;
        display: flex;
        pointer-events: none;
        z-index: 1;

        &.double-panel--right {
            flex-direction: row-reverse;
            z-index: 1;
        }

        #{&}__single-panel {
            background-color: $active-background;
            border-left: solid 0.5px rgb(230, 235, 238);
            border-right: solid 0.5px rgb(230, 235, 238);
            pointer-events: auto;
            padding: 0 20px;
            z-index: 30;
            height: 100%;

            &--half {
                flex-basis: 50%;
                width: 50%;
            }

            &--right {
                box-shadow: (-5px) 2px 50px 0 rgba(88, 126, 139, 0.3);
            }

            &--left {
                box-shadow: 5px 2px 50px 0 rgba(88, 126, 139, 0.3);
            }

            &--full {
                flex-basis: 100%;
                width: 100%;
            }
        }

        &.double-panel--split #{&}__single-panel:first-child {
            border-right: 1px solid $inactive-border;
        }
    }
</style>

