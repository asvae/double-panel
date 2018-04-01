import { panelEmitter } from './panelSymbols'
import PanelEmitter from './PanelEmitter'

export default {
  inject: { panelEmitter },
  computed: {
    $panel (): PanelEmitter {
      return this.panelEmitter
    },
  },
}