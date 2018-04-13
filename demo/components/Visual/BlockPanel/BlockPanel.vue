<template>
    <div class="block-panel">
        <vm-panel-menu>
            <template slot="title">
                <slot name="header"/>
            </template>
            <template slot="title">
                <slot name="title"/>
            </template>
            <slot name="navigation"/>
            <div/>
            <vm-circle-button
                    v-if="$panel.isClosable"
                    @click.native="$panel.close()"
            >
                X
            </vm-circle-button>
        </vm-panel-menu>
        <slot name="blank"/>
        <div class="block-panel__scroll"
             v-if="!$slots.blank"
        >
            <vm-bar v-if="$slots.default">
                <template>
                    <slot/>
                </template>
            </vm-bar>
            <vm-bar v-if="$slots.force">
                <template slot="force">
                    <slot name="force"/>
                </template>
            </vm-bar>
            <slot name="no-wrap"/>
        </div>
    </div>
</template>

<script>
  import VmPanelMenu from '../PanelMenu/PanelMenu'
  import VmCircleButton from '../CircleButton/CircleButton'
  import VmBar from '../Bar/Bar'
  import panelMixin from '../../../../src/DoublePanel/emitter/panelMixin'

  export default {
    name: 'VmBlockPanel',
    mixins: [panelMixin],
    components: {
      VmBar,
      VmCircleButton,
      VmPanelMenu,
    },
  }
</script>

<style lang="scss">
    .block-panel {
        display: flex;
        flex-direction: column;
        box-sizing: border-box;
        width: 100%;
        height: 100%;

        &__loader {
            text-align: center;
            font-size: 50px;
            color: $active-color;
            margin-top: 50px;
        }

        &__item {
            & + & {
                margin-top: 5px;
            }
        }

        &__label-group {
            margin-bottom: 10px;
        }

        &__menu {
            position: relative;
            display: flex;
            justify-content: center;
        }

        &__logo {
            height: 40px;
            width: 40px;
        }

        &__scroll {
            max-height: calc(100% - 70px);
        }
    }
</style>
