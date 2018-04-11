<template>
    <div>
        <template>Display panel</template>
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
    </div>
</template>

<script lang="ts">
  import panelMixin from '../../src/DoublePanel/emitter/panelMixin'
  import { displayExampleItem } from './ExamplePanelSymbols'

  export default {
    name: 'VmDisplayPanelExample',
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

