export default class DoublePanelEvent {
  key: string | Symbol
  payload: any

  constructor (data: Partial<DoublePanelEvent>) {
    Object.assign(this, data)
  }
}
