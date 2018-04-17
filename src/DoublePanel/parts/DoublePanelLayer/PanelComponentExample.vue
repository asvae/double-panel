<template>
    <div class="panel-component-example">
        <p>
            Test value from prop: {{ value.test }}
        </p>
        <p>
            <button @click="$panel.close()">Close</button>
            <button @click="$panel.closeChild()">Close child</button>
        </p>
        <p>
            <button @click="$panel.create()">Create</button>
        </p>
        <p>
            <button @click="$panel.switchPosition()">Switch position</button>
            Position: {{$panel.position}}
        </p>
        <p>
            <button @click="$panel.toggleFullWidth()">Toggle full-width</button>
            Full width: {{$panel.isFullWidth}}
        </p>
    </div>
</template>

<script lang="ts">
  import panelMixin from '../../emitter/panelMixin'

  export default {
    name: 'panel-component-example',
    mixins: [panelMixin],
    props: {
      value: {},
    },
  }
</script>

<style lang="scss">
    .panel-component-example {

    }
</style>
