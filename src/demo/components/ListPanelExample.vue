<template>
    <vm-block-panel>
        <span slot="title">Products</span>
        <vm-circle-button
                slot="navigation"
                @click.native="displayItem()"
        >
            +
        </vm-circle-button>
        <template slot="blank">
            <div style="overflow: auto">
                <vm-bar
                        class="block-panel__item"
                        v-for="key in 20"
                        :key="key"
                        @click.native="displayItem(key)"
                >
                    Product {{key}}
                </vm-bar>
            </div>
        </template>
    </vm-block-panel>
</template>

<script lang="ts">
  import panelMixin from '../../DoublePanel/emitter/panelMixin'
  import VmBar from './Visual/Bar/Bar.vue'
  import VmCircleButton from './Visual/CircleButton/CircleButton.vue'
  import VmBlockPanel from './Visual/BlockPanel/BlockPanel.vue'
  import DisplayPanelExample from './DisplayPanelExample.vue'

  export default {
    name: 'VmListPanelExample',
    components: {
      VmBlockPanel,
      VmCircleButton,
      VmBar,
    },
    mixins: [panelMixin],
    methods: {
      displayItem (id) {
        const payload = { id, name: `Product ${id}` }

        this.$panel.create(DisplayPanelExample, payload)
      },
    },
  }
</script>

