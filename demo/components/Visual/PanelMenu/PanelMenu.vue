<template>
    <div class="work-panel__header">
        <slot name="panel-header">
            <div class="work-panel__title">
                <slot name="title"></slot>
            </div>
            <div class="work-panel__actions">
                <slot></slot>
            </div>
        </slot>
    </div>
</template>

<script>
  export default {
    name: 'vm-panel-menu'
  }
</script>

<style lang="scss">
    .work-panel__header {
        height: 50px;
        min-height: 50px;
        display: flex;
        align-items: center;
        position: relative;
        padding-right: 5px;
        .work-panel__title {
            line-height: 40px;
            display: inline-block;
            color: $inactive-color;
            margin: 0;
        }
    }

    .work-panel__actions {
        margin-left: auto;
        display: flex;
        .button--icon {
            margin-left: 0;
            &:hover {
                background-color: #fff;
            }
        }
    }
</style>
