import PanelCreateOptions from './PanelCreateOptions'
import PanelCloseOptions from './PanelCloseOptions'
import PanelLayer from '../classes/PanelLayer'

export type PanelPosition = 'left' | 'right'

export default class PanelProxy {
  protected readonly onClose!: (panelCloseOptions: PanelCloseOptions) => void
  protected readonly onCreate!: (panelCreateOptions: PanelCreateOptions) => void
  public readonly isClosable: boolean = false

  public panelLayer: PanelLayer | null = null
  public isFullWidth: boolean = false
  public position: PanelPosition = 'left'

  constructor (data: {
    onClose: (panelCloseOptions: PanelCloseOptions) => void,
    onCreate: (panelCreateOptions: PanelCreateOptions) => void,
    panelLayer?: PanelLayer
    isClosable?: boolean,
    isFullWidth?: boolean,
    position?: PanelPosition,
  }) {
    Object.assign(this, data)
  }

  create (component: any, payload?: any, optionsRaw?: Partial<PanelCreateOptions>) {
    const panelCreateOptions = new PanelCreateOptions({
      component,
      payload,
      ...optionsRaw,
    })
    this.onCreate(panelCreateOptions)
  }

  public close (): void {
    this.onClose(new PanelCloseOptions())
  }

  public closeChild (): void {
    this.onClose(new PanelCloseOptions({ childOnly: true }))
  }

  public toggleFullWidth (): void {
    this.isFullWidth = !this.isFullWidth
  }

  public switchPosition (): void {
    this.position = this.getInvertedPosition()
  }

  public getInvertedPosition (): PanelPosition {
    return this.position === 'left' ? 'right' : 'left'
  }
}