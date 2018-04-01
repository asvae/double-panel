import Emitter from '../../../../classes/Utility/Emitter'
import {
  closeSinglePanel, closeSinglePanelChildren,
  toggleFullSizeForPanel,
} from '../doublePanelPanelKeys'
import Event1 from '../../../../classes/Utility/DoublePanelEvent'

export default class PanelEmitter {
  emitter: Emitter
  isClosable: Boolean = false

  constructor (data: Object) {
    Object.assign(this, data)
  }

  emit (key, payload) {
    this.emitter.emit(new Event1({ key, payload }))
  }

  close () {
    if (! this.isClosable) {
      throw new Error(`This panel is not closable`)
    }
    this.emitter.emit(new Event1({ key: closeSinglePanel }))
  }

  closeChildren () {
    this.emitter.emit(new Event1({ key: closeSinglePanelChildren }))
  }

  toggleFullSize () {
    this.emitter.emit(new Event1({ key: toggleFullSizeForPanel }))
  }
}