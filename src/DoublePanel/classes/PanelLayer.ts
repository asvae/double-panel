import PanelItem from './PanelItem'

export default class PanelLayer {
  /**
   * @deprecated
   */
  panelItem!: PanelItem

  component!: any

  direction: 'left' | 'right' = 'left'
  data: any = null
  isFullSize: boolean = false

  constructor (data: Partial<PanelLayer>) {
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
    return this.component
  }
}
