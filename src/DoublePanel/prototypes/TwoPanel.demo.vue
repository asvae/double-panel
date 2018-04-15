<template>
    <div class="two-panel">
        <div class="row">
            <div class="item">
                <span @click="addRight()">+</span>
                <p>Base</p>
            </div>
            <div class="item right">
                <span @click="addLeft()">+</span>
                <p>Base</p>
            </div>
        </div>
        <div class="row" v-for="item in items">
            <div class="item" v-if="item.left">
                <span @click="addRight(item)">+</span>
                <span @click="remove(item)">X</span>
                <p>{{item.id}}</p>
            </div>
            <div class="item right" v-else>
                <span @click="addLeft(item)">+</span>
                <span @click="remove(item)">X</span>
                <p>{{item.id}}</p>
            </div>
        </div>
    </div>
</template>

<script>
  export default {
    data () {
      return {
        count: 0,
        items: [],
      }
    },
    methods: {
      remove (item) {
        const index = this.items.indexOf(item)
        this.items.splice(index)
      },
      removeChildren (item) {
        const index = this.items.indexOf(item)
        this.items.splice(index + 1)
      },
      addLeft (item) {
        if (item) {
          this.removeChildren(item)
        } else {
          this.items = []
        }
        this.items.push({ left: true, id: this.count++ })
      },
      addRight (item) {
        if (item) {
          this.removeChildren(item)
        } else {
          this.items = []
        }
        this.items.push({ left: false, id: this.count++ })
      },
    },
  }
</script>

<style lang="scss" scoped>
    .two-panel {
        .row {
            display: flex;
            width: 140px;
            height: 70px;
        }
        .item {
            background-color: #99d8e2;
            width: 70px;
            height: 70px;
            border: solid 1px #e2e2e2;
        }
        .right {
            margin-left: auto;
        }
    }
</style>