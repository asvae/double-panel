import DoublePanelEvent from './DoublePanelEvent'

export type EmitterCallback = (event: DoublePanelEvent) => {}

export default class DoublePanelEmitter {
  protected onEmitKey: EmitterCallback

  constructor (onEmit: EmitterCallback) {
    this.onEmitKey = onEmit
  }

  emit (event: DoublePanelEvent): void {
    this.onEmitKey(event)
  }
}
