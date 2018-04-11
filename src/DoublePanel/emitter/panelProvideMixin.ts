import { panelEmitter } from './panelSymbols'
import DoublePanelEmitter from '../classes/DoublePanelEmitter'
import PanelEmitter from './PanelEmitter'
import DoublePanelEvent from '../classes/DoublePanelEvent'

export default {
  provide () {
    const emitter = new DoublePanelEmitter((event: DoublePanelEvent) => {
      console.log(event)
    })
    return {
      [panelEmitter]: new PanelEmitter({
        emitter,
        isClosable: false,
      }),
    }
  },
}