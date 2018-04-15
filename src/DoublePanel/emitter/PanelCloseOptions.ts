export default class PanelCloseOptions {
  /**
   * If true, will close only child panel, not the emitting panel itself.
   */
  childOnly: boolean = false

  constructor (data?: Partial<PanelCloseOptions>) {
    Object.assign(this, data)
  }
}