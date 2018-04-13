<template>
    <vm-block-panel>
        <span slot="title">Display panel</span>
        <template>
            I am list item {{value.id}} with name "{{value.name}}"
            <br>
            <button class="button" @click="oneMorePanel()">
                New panel
            </button>
            <button class="button" @click="$panel.closeChildren()">
                Close children
            </button>
            <button class="button"
                    v-if="$panel.isClosable"
                    @click="$panel.close()"
            >
                Close
            </button>
            <button class="button"
                    v-if="$panel.isClosable"
                    @click="$panel.toggleFullSize()"
            >
                Full size
            </button>
        </template>
    </vm-block-panel>
</template>

<script lang="ts">
  import panelMixin from '../../DoublePanel/emitter/panelMixin'
  import { displayExampleItem } from './ExamplePanelSymbols'
  import VmBlockPanel from './Visual/BlockPanel/BlockPanel.vue'

  export default {
    name: 'vm-display-panel-example',
    components: { VmBlockPanel },
    mixins: [panelMixin],
    props: {
      value: {
        validator (value) {
          return value.id && value.name
        },
        required: true,
      },
    },
    methods: {
      oneMorePanel () {
        const payload = { id: this.value.id, name: this.value.name + ' clone' }
        this.$panel.emit(displayExampleItem, payload)
      },
    },
  }
</script>

