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
