<template>
    <vm-block-panel>
        <span slot="title">Cloud panel</span>
        <vm-circle-button
                slot="navigation"
                @click.native="displayItem()"
        >
            +
        </vm-circle-button>
        <template slot="blank">
            <div style="overflow: auto">
                <vm-bar class="block-panel__item">
                    <p>
                        If we try to close panel - the result would be an error
                        because root panels are not closable.
                    </p>
                    <vm-circle-button @click.native="$panel.close()">
                        Close
                    </vm-circle-button>
                </vm-bar>
                <vm-bar
                        v-for="key in 20"
                        :key="key"
                        class="block-panel__item"
                        @click.native="displayItem()"
                >
                    Cloud product
                </vm-bar>
            </div>
        </template>
    </vm-block-panel>
</template>

<script lang="ts">
  import { displayExampleItem } from './ExamplePanelSymbols'
  import panelMixin from '../../DoublePanel/emitter/panelMixin'
  import VmCircleButton from './Visual/CircleButton/CircleButton.vue'
  import VmBar from './Visual/Bar/Bar.vue'
  import VmBlockPanel from './Visual/BlockPanel/BlockPanel.vue'

  export default {
    name: 'VmCloudPanelExample',
    components: {
      VmBlockPanel,
      VmBar,
      VmCircleButton,
    },
    mixins: [panelMixin],
    methods: {
      displayItem () {
        const payload = { id: 4, name: 'Item from Cloud' }
        this.$panel.emit(displayExampleItem, payload)
      },
    },
  }
</script>

