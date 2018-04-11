<template>
    <div>
        <component
                v-on="$listeners"
                :is="content"
                :value="value"
        />
    </div>
</template>

<script lang="ts">
  import { panelEmitter } from '../emitter/panelSymbols'
  import DoublePanelEmitter from '../classes/DoublePanelEmitter'
  import DoublePanelEvent from '../classes/DoublePanelEvent'
  import VmCompanyListPanel from '../demo/ListPanelExample.vue'
  import PanelEmitter from '../emitter/PanelEmitter'

  export default {
    name: 'VmDoublePanelSinglePanel',
    components: { VmCompanyListPanel },
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
    provide () {
      const emitter = new DoublePanelEmitter((event: DoublePanelEvent) => this.onEvent(event))

      return {
        [panelEmitter]: new PanelEmitter({
          emitter,
          isClosable: this.canClose,
        }),
      }
    },
    methods: {
      onEvent (event: DoublePanelEvent) {
        this.$emit('eventTriggered', event)
      },
    },
  }
</script>

