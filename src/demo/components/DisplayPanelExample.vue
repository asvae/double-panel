<template>
    <vm-block-panel>
        <span slot="title">Display panel</span>
        <template>
            <p>This content is composed from parent data: "I am list item {{value.id}} with name "{{value.name}}""</p>
            <p>
                You can close panel itself or its child.
            </p>
            <div style="display: flex">
                <button class="button"
                        @click="$panel.close()"
                >
                    Close
                </button>
                &nbsp;
                <button class="button" @click="$panel.closeChild()">
                    Close children
                </button>
            </div>
            <p>
                Create new panel
            </p>
            <button class="button" @click="oneMorePanel()">
                New panel
            </button>

            <p>
                Toggle full size mode.
            </p>

            <button class="button"
                    v-if="$panel.isClosable"
                    @click="$panel.toggleFullWidth()"
            >
                Toggle full size
            </button>
        </template>
    </vm-block-panel>
</template>

<script lang="ts">
  import panelMixin from '../../DoublePanel/emitter/panelMixin'
  import VmBlockPanel from './Visual/BlockPanel/BlockPanel.vue'
  import VmBar from './Visual/Bar/Bar.vue'

  export default {
    name: 'display-panel-example',
    components: {
      VmBar,
      VmBlockPanel,
    },
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
        const payload = { id: this.value.id, name: this.value.name + ' child' }

        this.$panel.create(this.constructor, payload)
      },
    },
  }
</script>

