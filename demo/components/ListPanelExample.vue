<template>
    <div>
        <div class="work-panel__header">
            <div class="work-panel__title">Products</div>
            <div class="work-panel__actions">
                <vm-circle-button
                        @click.native="displayItem()"
                >
                    +
                </vm-circle-button>
            </div>
        </div>

        <div>
            <vm-bar @click.native="displayItem()">Product</vm-bar>
            <vm-bar @click.native="displayItem()">Product</vm-bar>
            <vm-bar @click.native="displayItem()">Product</vm-bar>
            <vm-bar @click.native="displayItem()">Product</vm-bar>
            <vm-bar @click.native="displayItem()">Product</vm-bar>
        </div>
    </div>
</template>

<script lang="ts">
  import { displayExampleItem } from './ExamplePanelSymbols'
  import panelMixin from '../../src/DoublePanel/emitter/panelMixin'
  import PanelEmitter from '../../src/DoublePanel/emitter/PanelEmitter'
  import VmBar from './Visual/Bar/Bar.vue'
  import VmCircleButton from './Visual/CircleButton/CircleButton.vue'

  export default {
    name: 'VmListPanelExample',
    components: {
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

