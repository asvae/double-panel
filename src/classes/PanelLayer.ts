import PanelItem from './PanelItem'

export default class PanelLayer {
  panelItem: PanelItem
  direction: 'left' | 'right'
  data: any
  isFullSize: boolean = false

  constructor (data) {
    Object.assign(this, data)
  }

  getLeftItem () {
    return this.direction === 'left' ? this.panelItem : null
  }

  getRightItem () {
    return this.direction === 'right' ? this.panelItem : null
  }

  get isRight (): Boolean {
    return this.direction === 'right'
  }

  getComponent () {
    return this.panelItem.component
  }
}
