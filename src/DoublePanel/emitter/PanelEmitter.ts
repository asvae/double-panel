import Emitter from 'DoublePanelEmitter'
import {
  closeSinglePanel, closeSinglePanelChildren,
  toggleFullSizeForPanel,
} from '../doublePanelPanelKeys'
import DoublePanelEvent from '../classes/DoublePanelEvent'

export default class PanelEmitter {
  emitter: Emitter
  isClosable: boolean = false

  constructor (data: Object) {
    Object.assign(this, data)
  }

  emit (key, payload) {
    this.emitter.emit(new DoublePanelEvent({ key, payload }))
  }

  close () {
    if (! this.isClosable) {
      throw new Error(`This panel is not closable`)
    }
    this.emitter.emit(new DoublePanelEvent({ key: closeSinglePanel }))
  }

  closeChildren () {
    this.emitter.emit(new DoublePanelEvent({ key: closeSinglePanelChildren }))
  }

  toggleFullSize () {
    this.emitter.emit(new DoublePanelEvent({ key: toggleFullSizeForPanel }))
  }
}