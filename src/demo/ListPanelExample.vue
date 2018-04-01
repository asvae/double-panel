<template>
    <div>
        <div class="work-panel__header">
            <div class="work-panel__title">List panel</div>
            <div class="work-panel__actions">
                <button type="button"
                        class="btn-icon"
                        @click="$emit('create')"
                >
                    <vm-icon type="add"/>
                </button>
            </div>
        </div>
        <vm-list-bar @click.native="displayItem()">
            <template slot="logo">
                <vm-icon type="staff"/>
            </template>
            List item
        </vm-list-bar>
    </div>
</template>

<script>
  import { displayExampleItem } from './ExamplePanelSymbols'
  import VmListBar from '../../ListBar.vue'
  import VmIcon from '../../../Icon/components/Icon.vue'
  import panelMixin from '../emitter/panelMixin'

  export default {
    name: 'VmListPanelExample',
    components: {
      VmIcon,
      VmListBar
    },
    mixins: [panelMixin],
    methods: {
      displayItem () {
        const payload = { id: 6, name: 'Item from List' }
        this.$panel.emit(displayExampleItem, payload)
      },
    },
  }
</script>

