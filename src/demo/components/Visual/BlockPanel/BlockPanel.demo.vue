<template>
    <div style="width: 400px; height: 100%">
        <vm-block-panel>
            <template slot="header">Some Form</template>
            <div v-for="i in 50">Form Inputs</div>
        </vm-block-panel>
    </div>
</template>

<script>
  import VmBlockPanel from './BlockPanel.vue'
  import panelProvideMixin from '../../../../DoublePanel/emitter/panelProxyProvideMixin'

  export default {
    $componentTree: {
      status: 'wip',
      component: VmBlockPanel,
      description: `Use insides directly. No need for wrapper.`,
    },
    mixins: [panelProvideMixin],
    components: { VmBlockPanel },
  }
</script>
