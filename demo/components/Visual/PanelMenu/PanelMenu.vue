<template>
    <div class="panel-menu">
        <div class="panel-menu__title">
            <slot name="title"></slot>
        </div>
        <div class="panel-menu__actions">
            <slot/>
        </div>
    </div>
</template>

<script>
  export default {
    name: 'vm-panel-menu',
  }
</script>

<style lang="scss">
    .panel-menu {
        height: 50px;
        min-height: 50px;
        display: flex;
        align-items: center;
        position: relative;
        padding-right: 5px;

        &__title {
            line-height: 40px;
            display: inline-block;
            color: $inactive-color;
            margin: 0;
        }

        &__actions {
            margin-left: auto;
            display: flex;
        }
    }
</style>
