# Asva double panel

Double panel layout for vue.js. [Demo](http://double-panel.asva.by/#/demo/DoublePanel/DoublePanel.demo.vue)

## The gist

Imagine modal. Then modal inside of modal. This library does the same, just with two panels. Parent on the left - child on the right. Child on the left - parent on the right. Makes no sense? Check [demo](http://double-panel.asva.by/#/demo/DoublePanel/DoublePanel.demo.vue).

## Usage examples

* [Trizeri example](trizeri-double-panel-example.gif)

## Sponsors

[![Trizeri](https://trizeri.com/images/logo-and-text.png)](https://trizeri.com)

## Install

* **npm**: `npm install -D asva-double-panel` 
* **yarn**: `yarn add -D asva-double-panel`

## Commands

* **yarn dev** - run dev server (then go to `/#/demo`)
* **yarn dist** - bundle distribution package for npm
* **yarn demo** - bundle demo

## How to use

First - create a double panel wrapper component.

In example **ListPanelExample** and **CloudPanelExample** are root panels (displayed by default).

```html
<template>
    <DoublePanel :left="leftPanel" :right="rightPanel"/>
</template>

<script>
  import { DoublePanel } from 'asva-double-panel'

  import PanelComponent from './PanelComponent.vue'

  export default {
    components: {
      DoublePanel,
      ListPanelExample,
      CloudPanelExample,
    },
    computed: {
      leftPanel: () => PanelComponent,
      rightPanel: () => PanelComponent,
    },
  }
</script>
```

Let's dive into panel component structure. 2 things to notice here:

* Register **panelMixin** in your component to make it a panel component.
* Add **value** prop to receive payload (toss data from one panel to another).

```html
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

<script>
  import { panelMixin } from 'asva-double-panel'

  export default {
    name: 'panel-component',
    mixins: [panelMixin],
    props: ['value'],
  }
</script>
```

#### Styles

You have to import styles for double panel to function properly.

* **css** - `~asva-double-panel/dist/css/main.css`

### Api

* `$panel.close()` - close current panel and its descendants.
* `$panel.closeChild()` - close only panel descendants.
* `$panel.switchPosition()` - move panel from left to right and vice-versa.
* `$panel.toggleFullWidth()` - widen the panel to occupy full space (useful for prints and tables).

#### Create new panel

`this.$panel.create(component, [payload, [options]])`, where

* **component** - component object (the thing you get via `import Component from 'Component.vue'`). If you want to create same component recursively - use `this.constructor`.
* **payload** - any data you want to provide into newly created component.
* **options** - additional options, if you don't provide any - defaults will be used.

Options:

* `replaceSelf` - Don't create new panel on top, instead replace current one.
* `fullWidth` [Boolean, default: false] - Create panel in fullWidth mode.
* `reuse` [Boolean, default: false] - If true, and panel with current component already exists on top of current one - we'll just refresh payload (useful for iframe reuse).
* `position` ['same' | 'opposite', default 'opposite'] - Defines whether new panel should be created directly on top of current one in opposite side.

## Features
* Two panel layout. 
* Nested panels.
* Internal panel component.

## Feedback

If you feel something is not right - please leave feedback. I might even tweak library a bit for you needs if you case is common. : 3

## Licence

MIT
