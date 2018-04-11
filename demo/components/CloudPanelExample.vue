<template>
    <div>
        <div class="work-panel__header">
            <div class="work-panel__title">Cloud panel</div>
            <div class="work-panel__actions">
                <vm-circle-button
                      @click.native="displayItem()"
                >
                    +
                </vm-circle-button>
            </div>
        </div>
        <div @click="displayItem()">
            Cloud item
        </div>

        This should throw an error because root panels are not closable.
        <vm-circle-button  @click.native="$panel.close()">
            X
        </vm-circle-button>
    </div>
</template>

<script lang="ts">
  import { displayExampleItem } from './ExamplePanelSymbols'
  import panelMixin from '../../src/DoublePanel/emitter/panelMixin'
  import VmCircleButton from './Visual/CircleButton/CircleButton.vue'

  export default {
    components: { VmCircleButton },
    name: 'VmCloudPanelExample',
    mixins: [panelMixin],
    methods: {
      displayItem () {
        const payload = { id: 4, name: 'Item from Cloud' }
        this.$panel.emit(displayExampleItem, payload)
      },
    },
  }
</script>

