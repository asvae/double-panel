<template>
    <div>
        <component
                v-on="$listeners"
                :is="content"
                :value="value"
        />
    </div>
</template>

<script>
  import { panelEmitter } from '../emitter/panelSymbols'
  import Emitter from '../../../../classes/Utility/Emitter'
  import DoublePanelEvent from '../../../../classes/Utility/DoublePanelEvent'
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
      const emitter = new Emitter((event: Event1) => this.onEvent(event))

      return {
        [panelEmitter]: new PanelEmitter({
          emitter,
          isClosable: this.canClose,
        }),
      }
    },
    methods: {
      onEvent (event: Event1) {
        this.$emit('eventTriggered', event)
      },
    },
  }
</script>

