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
        <vm-list-bar @click.native="displayItem()">
            <template slot="logo">
                <vm-icon type="staff"/>
            </template>
            Cloud item
        </vm-list-bar>

        This should throw an error because root panels are not closable.
        <button class="button" @click="$panel.close()">
            Close
        </button>
    </div>
</template>

<script>
  import { displayExampleItem } from './ExamplePanelSymbols'
  import VmListBar from '../../ListBar.vue'
  import VmIcon from '../../../Icon/components/Icon.vue'
  import panelMixin from '../emitter/panelMixin'

  export default {
    name: 'VmCloudPanelExample',
    components: {
      VmIcon,
      VmListBar,
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

