import PanelProxy from './PanelProxy'

export default {
  inject: ['panelProxy'],
  computed: {
    $panel (): PanelProxy {
      return this.panelProxy
    },
  },
}