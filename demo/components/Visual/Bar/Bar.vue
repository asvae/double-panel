<template>
    <div class="bar" :class="{'bar--active': isActive}">
        <div v-if="$slots.default" class="bar__content">
            <slot/>
        </div>
        <slot name="force"/>
    </div>
</template>

<script>
  export default {
    name: 'vm-bar',
    props: {
      isActive: {
        type: Boolean,
        default: false
      }
    }
  }
</script>

<style lang="scss">
       .bar {
        $main: &;

        width: 100%;
        border: 1px solid $inactive-border;
        border-radius: 3px;
        background-color: $brand-white;
        overflow: hidden;

        @include transition(border, box-shadow);

        &__content {
            margin: $gutter;
        }

        &__icon {}

        //for type hint

        &:hover {
            border-color: $inactive-color--darken;
            box-shadow: 0 0 2px rgba(182, 182, 182, 0.45);
        }

        &--open, &--active {
            border: 1px solid $active-color;

            &:hover {
                border: 1px solid $active-color;
            }
        }

        &--active &, &--open & {
            &__header {
                &::after {
                    background-color: $active-color--lighten;
                }
            }
        }

        &--button {
            width: 100%;
            min-height: 0;
            height: 50px;
            position: relative;
            border-style: dashed;
            color: $inactive-color;

            //text-transform: capitalize
            cursor: pointer;

            .bar__content {
                margin: 15px 20px;
            }
        }

        &--force {
            & > #{$main}__content {
                margin: 0;
            }
        }
    }
</style>
