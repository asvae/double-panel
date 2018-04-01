export default class DoublePanelEvent {
  key: String | Symbol
  payload: Object

  constructor (data: Partial<DoublePanelEvent>) {
    Object.assign(this, data)
  }
}
