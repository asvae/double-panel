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
   * `null` allows parent to decide.
   */
  public position: 'left' | 'right' | null = null

  constructor (data?: Partial<PanelCreateOptions>) {
    Object.assign(this, data)
  }
}