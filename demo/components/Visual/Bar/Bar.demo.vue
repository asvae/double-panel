<template>
    <div class="demo-container">
        <div class="demo-container__item" style="width: 400px">

            <vm-bar>Some Content</vm-bar>
        </div>
        <div class="demo-container__item" style="width: 400px">
            <div class="demo-container__header">Force</div>
            <vm-bar class="bar--force">Some Content</vm-bar>
        </div>
        <div class="demo-container__item" style="width: 400px">
            <div class="demo-container__header">Active</div>
            <vm-bar isActive>Some Content</vm-bar>
        </div>
        <div class="demo-container__item" style="width: 400px">
            <div class="demo-container__header">Dashed</div>
            <vm-bar class="bar--button">Some Content</vm-bar>
        </div>
    </div>
</template>

<script>
  import VmBar from './Bar.vue'

  export default {
    $componentTree: {
      status: 'stable',
      component: VmBar,
      description: `TODO Move with another template components.`
    },
    components: { VmBar },
  }
</script>
