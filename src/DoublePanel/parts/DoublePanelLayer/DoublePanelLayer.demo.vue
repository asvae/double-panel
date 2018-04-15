<template>
    <div class="demo-container">
        <div class="demo-container__item" style="position: relative; height: 800px; width: 800px">
            <double-panel-layer
                    :panelLayer="panelLayer"
            />
        </div>
    </div>
</template>

<script lang="ts">
  import DoublePanelLayer from './DoublePanelLayer.vue'
  import PanelLayer from '../../classes/PanelLayer'
  import PanelComponentExample
    from './PanelComponentExample.vue'

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
          data: {test: 'test'}
        }),
      }
    },
  }
</script>