<template>
    <div>
        <div class="work-panel__header">
            <div class="work-panel__title">List panel</div>
            <div class="work-panel__actions">
                <button type="button"
                        class="btn-icon"
                        @click="$emit('create')"
                >
                    add
                </button>
            </div>
        </div>
        <div @click="displayItem()">
            List item
        </div>
    </div>
</template>

<script lang="ts">
  import { displayExampleItem } from './ExamplePanelSymbols'
  import panelMixin from '../emitter/panelMixin'
  import PanelEmitter from '../emitter/PanelEmitter'

  export default {
    name: 'VmListPanelExample',
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

