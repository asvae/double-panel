<template>
    <component
            :is="content"
            :value="value"

    />
</template>

<script lang="ts">
  import { panelEmitter } from '../emitter/panelSymbols'
  import DoublePanelEmitter from '../classes/DoublePanelEmitter'
  import DoublePanelEvent from '../classes/DoublePanelEvent'
  import PanelProxy from '../emitter/PanelProxy'

  export default {
    name: 'VmDoublePanelSinglePanel',
    data () {
      return {}
    },
    props: {
      content: {
        type: Object,
      },
      canClose: {
        type: Boolean,
        default: false,
      },
      value: {},
    },

    methods: {
      onEvent (event: DoublePanelEvent) {
        this.$emit('eventTriggered', event)
      },
    },
  }
</script>

