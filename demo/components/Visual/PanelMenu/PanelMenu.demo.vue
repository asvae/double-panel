<template>
    <div class="demo-container">
        <div class="demo-container__item" style="width: 500px;">
            <div class="block-panel"
                 style=" background-color: rgba(94,111,125,0.14)"
            >
                <vm-panel-menu class="block-panel__menu">
                   Header
                    <template slot="title">Some Title</template>
                </vm-panel-menu>
            </div>
        </div>
    </div>
</template>

<script>
  import VmPanelMenu from './PanelMenu.vue'

  export default {
    components: {
      VmPanelMenu,
    },
  }
</script>
