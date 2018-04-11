import { panelEmitter } from './panelSymbols'
import PanelEmitter from './PanelEmitter'

export default {
  inject: { panelEmitter },
  computed: {
    $panel (): PanelEmitter {
      const component: any = this
      return component.panelEmitter
    },
  },
}