export default class PanelItem {
  key: string | Symbol
  component: any

  constructor (data: Partial<PanelItem>) {
    Object.assign(this, data)
  }
}
