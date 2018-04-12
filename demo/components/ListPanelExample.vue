<template>
    <vm-block-panel>
        <span slot="title">Products</span>
        <vm-circle-button
                slot="navigation"
                @click.native="displayItem()"
        >
            +
        </vm-circle-button>
        <vm-bar @click.native="displayItem()">Product</vm-bar>
        <vm-bar @click.native="displayItem()">Product</vm-bar>
        <vm-bar @click.native="displayItem()">Product</vm-bar>
        <vm-bar @click.native="displayItem()">Product</vm-bar>
        <vm-bar @click.native="displayItem()">Product</vm-bar>
    </vm-block-panel>
</template>

<script lang="ts">
  import { displayExampleItem } from './ExamplePanelSymbols'
  import panelMixin from '../../src/DoublePanel/emitter/panelMixin'
  import PanelEmitter from '../../src/DoublePanel/emitter/PanelEmitter'
  import VmBar from './Visual/Bar/Bar.vue'
  import VmCircleButton from './Visual/CircleButton/CircleButton.vue'
  import VmBlockPanel from './Visual/BlockPanel/BlockPanel.vue'

  export default {
    name: 'VmListPanelExample',
    components: {
      VmBlockPanel,
      VmCircleButton,
      VmBar,
    },
    mixins: [panelMixin],
    methods: {
      displayItem () {
        const payload = { id: 6, name: 'Item from List' }
        const panel: PanelEmitter = this.$panel
        panel.emit(displayExampleItem, payload)
      },
    },
  }
</script>

