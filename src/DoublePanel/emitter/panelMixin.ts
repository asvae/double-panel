import { panelEmitter } from './panelSymbols'
import PanelEmitter from './PanelEmitter'
import { ComponentOptions } from 'typedoc/dist/lib/utils/component'

export default <ComponentOptions>{
  inject: { panelEmitter },
  computed: {
    $panel (): PanelEmitter {
      return this.panelEmitter
    },
  },
}