import DoublePanelEmitter from '../classes/DoublePanelEmitter'
import {
  closeSinglePanel,
  closeSinglePanelChildren,
  toggleFullSizeForPanel,
} from '../doublePanelPanelKeys'
import DoublePanelEvent from '../classes/DoublePanelEvent'

export default class PanelEmitter {
  emitter: DoublePanelEmitter
  isClosable: boolean = false

  constructor (data: { emitter: DoublePanelEmitter, isClosable?: boolean }) {
    this.emitter = data.emitter
    this.isClosable = data.isClosable || false
  }

  emit (key: string | symbol, payload: any) {
    this.emitter.emit(new DoublePanelEvent({ key, payload }))
  }

  close () {
    if (!this.isClosable) {
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