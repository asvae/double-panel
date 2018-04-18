<template>
    <div class="double-panel">
        <!-- Root layers -->
        <DoublePanelLayer
                v-if="leftRootPanel"
                :key="leftRootPanel.key"
                :panelLayer="leftRootPanel"
                @create="create"
                @close="close"
        />
        <DoublePanelLayer
                v-if="rightRootPanel"
                :key="rightRootPanel.key"
                :panelLayer="rightRootPanel"
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
  import DoublePanelProxy from './DoublePanelProxy'

  export default {
    name: 'double-panel',
    components: {
      DoublePanelLayer,
    },
    created () {
      this.doublePanelProxy.addRootLayers(this.left, this.right)
    },
    data () {
      return {
        doublePanelProxy: new DoublePanelProxy(),
      }
    },
    props: {
      left: {}, // left panel component
      right: {},  // left panel component
    },
    methods: {
      create (panelCreateOptions: PanelCreateOptions) {
        this.doublePanelProxy.create(panelCreateOptions)
      },
      close (panelCloseOptions: PanelCloseOptions) {
        this.doublePanelProxy.close(panelCloseOptions)
      },
    },
    computed: {
      leftRootPanel (): PanelLayer | undefined {
        return this.doublePanelProxy.getLeftRootPanel()
      },
      rightRootPanel (): PanelLayer | undefined {
        return this.doublePanelProxy.getRightRootPanel()
      },
      nonRootLayers (): PanelLayer[] {
        return this.doublePanelProxy.getNonRootPanels()
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