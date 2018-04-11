export default class DoublePanelEvent {
  public readonly key: string | symbol
  public readonly payload: any

  constructor (data: { key: string | symbol, payload?: any }) {
    this.key = data.key
    this.payload = data.payload
  }
}
