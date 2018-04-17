<template>
    <div class="demo-container">
        <div class="demo-container__item"
             style="position: relative; height: 800px; width: 800px">
            <double-panel-layer
                    :panelLayer="panelLayer"
                    @create="create"
                    @close="close"
            />
        </div>
    </div>
</template>

<script lang="ts">
  import DoublePanelLayer from './DoublePanelLayer.vue'
  import PanelLayer from '../../classes/PanelLayer'
  import PanelComponentExample
    from './PanelComponentExample.vue'
  import PanelCreateOptions from '../../emitter/PanelCreateOptions'
  import PanelCloseOptions from '../../emitter/PanelCloseOptions'

  export default {
    $componentTree: {
      component: DoublePanelLayer,
    },
    components: {
      DoublePanelLayer,
    },
    data () {
      return {
        panelLayer: new PanelLayer({
          component: PanelComponentExample,
          data: { test: 'External text' },
        }),
      }
    },
    methods: {
      create (panelCreateOptions: PanelCreateOptions) {
        console.log('create', { panelCreateOptions })
      },
      close (panelCloseOptions: PanelCloseOptions) {
        console.log('close', { panelCloseOptions })
      },
    },
  }
</script>