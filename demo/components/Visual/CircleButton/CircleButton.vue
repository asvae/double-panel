<template>
    <button type="button" class="button button--icon">
        <div class="button__icon">
            <slot/>
        </div>
    </button>
</template>

<script>
  export default {
    name: 'vm-circle-button',
  }
</script>

<style lang="scss">
    .button {
        @include flexCenter();
        height: 30px;
        min-width: 60px;
        padding: 0 $gutter-medium;
        border-radius: 15px;
        border: 1px solid $active-color;
        color: $active-color;
        user-select: none;
        cursor: pointer;

        &--active, &:hover {
            color: $brand-white;
            background: $active-color;
        }
        & #{&}--icon {
            height: 30px;
            min-width: 30px;
            padding: 0;
            color: $inactive-color;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            &:hover {
                background-color: $inactive-border--lighten;
            }
            &:active {
                background-color: $inactive-border;
            }
        }

        color: $text-color;
        transition: .3s all;
        cursor: pointer;
        & > i {
            opacity: 0.5;
        }
        &__icon {
            opacity: 1 !important;
        }
        &:hover {
            border-color: $active-color;
            color: $active-color;
            & > i {
                opacity: 1;
            }
        }
    }
</style>
