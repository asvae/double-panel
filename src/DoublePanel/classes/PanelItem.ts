export default class PanelItem {
  key: string | symbol = ''
  component: any

  constructor (data: {key?: string | symbol, component: any}) {
    this.key = data.key || ''
    this.component = data.component
  }
}
