import PanelProxy, { PanelPosition } from './PanelProxy'
import PanelLayer from '../classes/PanelLayer'

export default class PanelCreateOptions {
  /**
   * Vue component to display inside of new panel
   */
  component: any

  /**
   * Data to pass into panel props.
   */
  payload: any = null

  /**
   * If true, child panel would be created in same layer
   */
  public samePanel: boolean = false

  /**
   * If true, child panel would be created in full width mode.
   */
  public fullWidth: boolean = false

  /**
   * Determines on which side the panel will be spawned.
   */
  public position: 'same' | 'opposite' = 'opposite'

  public parentLayer: PanelProxy | null = null

  constructor (data?: Partial<PanelCreateOptions>) {
    Object.assign(this, data)
  }

  getAbsolutePosition (): PanelPosition {
    if (!this.parentLayer) {
      throw new Error('Can\'t figure absolute position when parent panel is undeclared')
    }

    if (this.position === 'same') {
      return this.parentLayer.position
    }
    return this.parentLayer.getInvertedPosition()
  }
}