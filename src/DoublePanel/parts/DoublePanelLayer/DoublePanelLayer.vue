<template>
    <div class="double-panel-layer"
         :class="doublePanelLayerClasses"
    >
        <div class="double-panel-layer__single-panel"
             :class="singlePanelClasses"
        >
            <component
                    :is="panelLayer.component"
                    :value="panelLayer.data"
            />
        </div>
    </div>
</template>

<script lang="ts">
  import PanelLayer from '../../classes/PanelLayer'
  import PanelProxy from '../../emitter/PanelProxy'
  import PanelCreateOptions from '../../emitter/PanelCreateOptions'
  import PanelCloseOptions from '../../emitter/PanelCloseOptions'

  export default {
    name: 'double-panel-layer',
    data () {
      const panelProxy = new PanelProxy({
        panelLayer: this.panelLayer,
        position: this.panelLayer.position,
        isClosable: !this.panelLayer.isRoot,
        onCreate: (panelCreateOptions: PanelCreateOptions) => {
          panelCreateOptions.panelProxy = this.panelProxy
          this.$emit('create', panelCreateOptions)
        },
        onClose: (panelCloseOptions: PanelCloseOptions) => {
          panelCloseOptions.panelProxy = this.panelProxy
          this.$emit('close', panelCloseOptions)
        },
      })

      return {
        panelProxy,
      }
    },
    provide () {
      return {
        panelProxy: this.panelProxy,
      }
    },
    props: {
      panelLayer: {
        type: PanelLayer,
        required: true,
      },
    },
    computed: {
      component () {
        return this.panelLayer.getComponent()
      },
      doublePanelLayerClasses () {
        return {
          'double-panel-layer--right': this.panelProxy.position === 'right',
          'double-panel-layer--left': this.panelProxy.position === 'left',
        }
      },
      singlePanelClasses () {
        return {
          'double-panel-layer__single-panel--full': this.panelProxy.isFullWidth,
          'double-panel-layer__single-panel--half': !this.panelProxy.isFullWidth,
          'double-panel-layer__single-panel--right': !this.panelProxy.isFullWidth && this.position === 'right',
          'double-panel-layer__single-panel--left': !this.panelProxy.isFullWidth && this.position === 'left',
        }
      },
    },
  }
</script>

<style lang="scss">
    .double-panel-layer {
        height: 100%;
        width: 100%;
        position: absolute;
        box-sizing: border-box;
        top: 0;
        left: 0;
        display: flex;
        pointer-events: none;
        z-index: 1;

        &#{&}--right {
            flex-direction: row-reverse;
            z-index: 1;
        }

        &__single-panel {
            box-sizing: border-box;
            background-color: $active-background;
            border-left: solid 0.5px rgb(230, 235, 238);
            border-right: solid 0.5px rgb(230, 235, 238);
            pointer-events: auto;
            padding: 0 20px;
            z-index: 30;
            height: 100%;

            &--half {
                flex-basis: 50%;
                width: 50%;
            }

            &--right {
                box-shadow: (-5px) 2px 50px 0 rgba(88, 126, 139, 0.3);
            }

            &--left {
                box-shadow: 5px 2px 50px 0 rgba(88, 126, 139, 0.3);
            }

            &--full {
                flex-basis: 100%;
                width: 100%;
            }
        }
    }
</style>