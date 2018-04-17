<template>
    <div class="double-panel">
        <!-- Root layers -->
        <DoublePanelLayer
                v-if="panelLayerLeft"
                :key="panelLayerLeft.key"
                :panelLayer="panelLayerLeft"
                @create="create"
                @close="close"
        />
        <DoublePanelLayer
                v-if="panelLayerRight"
                :key="panelLayerRight.key"
                :panelLayer="panelLayerRight"
                @create="create"
                @close="close"
        />

        <!-- Non root layers -->
        <DoublePanelLayer
                v-for="panelLayer in nonRootLayers"
                :key="panelLayer.key"
                :panelLayer="panelLayer"
                @create="create"
                @close="close"
        />
    </div>
</template>

<script lang="ts">
  import DoublePanelLayer from './parts/DoublePanelLayer/DoublePanelLayer.vue'
  import PanelLayer from './classes/PanelLayer'
  import PanelCreateOptions from './emitter/PanelCreateOptions'
  import PanelCloseOptions from './emitter/PanelCloseOptions'

  export default {
    name: 'double-panel',
    components: {
      DoublePanelLayer,
    },
    created () {
      this.addRootLayers()
    },
    data () {
      return {
        /**
         * @var PanelLayer[]
         */
        childLayers: [],
      }
    },
    props: {
      left: {
        required: false,
      }, // left panel component
      right: {
        required: false,
      },  // left panel component
    },
    methods: {
      addRootLayers (): void {
        if (this.left) {
          this.childLayers.push(
            new PanelLayer({
              component: this.left,
              position: 'left',
              isRoot: true,
            }),
          )
        }
        if (this.right) {
          this.childLayers.push(
            new PanelLayer({
              component: this.right,
              position: 'right',
              isRoot: true,
            }),
          )
        }
      },
      create (panelCreateOptions: PanelCreateOptions) {
        console.log('panelCreateOptions.getAbsolutePosition()', panelCreateOptions.getAbsolutePosition())
        this.childLayers.push(
          new PanelLayer({
            data: panelCreateOptions.payload,
            component: panelCreateOptions.component,
            position: panelCreateOptions.getAbsolutePosition(),
            isFullWidth: panelCreateOptions.fullWidth,
          }),
        )
      },
      close (panelCloseOptions: PanelCloseOptions) {
        const panelLayer = panelCloseOptions.getPanelLayer()
        const layerIndex = this.childLayers.indexOf(panelLayer)
        const spliceIndex = panelCloseOptions.childOnly ? layerIndex + 1 : layerIndex
        this.childLayers.splice(spliceIndex)
      },
    },
    computed: {
      panelLayerLeft (): PanelLayer | undefined {
        console.log('panelLayerLeft', this.childLayers)
        return this.childLayers.find(panelLayer => panelLayer.position === 'left' && panelLayer.isRoot)
      },
      panelLayerRight (): PanelLayer | undefined {
        return this.childLayers.find(panelLayer => panelLayer.position === 'right' && panelLayer.isRoot)
      },
      nonRootLayers (): PanelLayer[] {
        return this.childLayers.filter(panelLayer => !panelLayer.isRoot)
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