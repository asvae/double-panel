import PanelProxy from './PanelProxy'
import PanelCreateOptions from './PanelCreateOptions'
import PanelCloseOptions from './PanelCloseOptions'

export default {
  provide () {
    const panelProxy = new PanelProxy({
      onClose: (panelCloseOptions: PanelCloseOptions) => {
        console.log(`onClose`, { panelCloseOptions })
      },
      onCreate: (panelCreateOptions: PanelCreateOptions) => {
        console.log(`onCreate`, { panelCreateOptions })
      },
    })

    return {
      panelProxy,
    }
  },
}