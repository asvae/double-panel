import PanelProxy from './PanelProxy'
import PanelLayer from '../classes/PanelLayer'

export default class PanelCloseOptions {
  /**
   * If true, will close only child panel, not the emitting panel itself.
   */
  childOnly: boolean = false

  public panelProxy: PanelProxy | null = null

  constructor (data?: Partial<PanelCloseOptions>) {
    Object.assign(this, data)
  }

  getPanelLayer (): PanelLayer {
    if (!this.panelProxy) {
      throw new Error('Panel proxy is not declared')
    }
    if (!this.panelProxy.panelLayer) {
      throw new Error('Panel layer is not declared')
    }
    return this.panelProxy.panelLayer
  }
}