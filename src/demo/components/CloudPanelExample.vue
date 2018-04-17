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
                <bar class="block-panel__item">
                    <p>
                        If we try to close panel - the result would be an error
                        because root panels are not closable.
                    </p>
                    <vm-circle-button @click.native="$panel.close()">
                        Close
                    </vm-circle-button>
                </bar>
                <bar
                        v-for="key in 20"
                        :key="key"
                        class="block-panel__item"
                        @click.native="displayItem(key)"
                >
                    Cloud product
                </bar>
            </div>
        </template>
    </vm-block-panel>
</template>

<script lang="ts">
  import panelMixin from '../../DoublePanel/emitter/panelMixin'
  import VmCircleButton from './Visual/CircleButton/CircleButton.vue'
  import VmBlockPanel from './Visual/BlockPanel/BlockPanel.vue'
  import DisplayPanelExample from './DisplayPanelExample.vue'
  import Bar from './Visual/Bar/Bar.vue'

  export default {
    name: 'VmCloudPanelExample',
    components: {
      VmBlockPanel,
      VmCircleButton,
      Bar,
    },
    mixins: [panelMixin],
    methods: {
      getComponent: () => this,
      displayItem (id) {
        const payload = { id, name: 'Cloud Product' }

        this.$panel.create(DisplayPanelExample, payload)
      },
    },
  }
</script>

