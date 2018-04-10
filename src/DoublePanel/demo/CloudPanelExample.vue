<template>
    <div>
        <div class="work-panel__header">
            <div class="work-panel__title">Cloud panel</div>
            <div class="work-panel__actions">
                <button type="button"
                        class="btn-icon"
                        @click="$emit('create')"
                >
                    <vm-icon type="add"/>
                </button>
            </div>
        </div>
        <div @click="displayItem()">
            Cloud item
        </div>

        This should throw an error because root panels are not closable.
        <button class="button" @click="$panel.close()">
            Close
        </button>
    </div>
</template>

<script lang="ts">
  import { displayExampleItem } from './ExamplePanelSymbols'
  import panelMixin from '../DoublePanel/emitter/panelMixin'

  export default {
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

