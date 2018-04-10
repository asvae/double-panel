import PanelItem from './PanelItem'

export default class DoublePanelItems {
  left: PanelItem | null = null
  right: PanelItem | null = null
  children: PanelItem[] = []

  constructor (data: Partial<DoublePanelItems>) {
    Object.assign(this, data)
  }

  findChildByKey (key: string | Symbol): PanelItem | null {
    return this.children.find(panelItem => panelItem.key === key) || null
  }
}
