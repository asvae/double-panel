import PanelCreateOptions from './PanelCreateOptions'
import PanelCloseOptions from './PanelCloseOptions'

export default class PanelProxy {
  protected readonly onClose!: (panelCloseOptions: PanelCloseOptions) => void
  protected readonly onCreate!: (panelCreateOptions: PanelCreateOptions) => void

  public readonly isClosable: boolean = false
  public isFullWidth: boolean = false
  public position: 'left' | 'right' = 'left'

  constructor (data: {
    onClose: (panelCloseOptions: PanelCloseOptions) => void,
    onCreate: (panelCreateOptions: PanelCreateOptions) => void,
    isClosable?: boolean,
    isFullWidth?: boolean,
    position?: 'left' | 'right',
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
    this.position = this.position === 'left' ? 'right' : 'left'
  }
}