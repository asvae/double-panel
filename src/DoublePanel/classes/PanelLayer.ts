export default class PanelLayer {

  /**
   * Unique key to keep vue happy
   */
  public readonly key: number

  /**
   * Whether layer is root, aka bottom down.
   */
  public readonly isRoot: boolean = false


  public readonly component!: any

  public position: 'left' | 'right' = 'left'
  public data: any = null
  public isFullWidth: boolean = false

  constructor (data: Partial<PanelLayer>) {
    Object.assign(this, data)

    this.key = Math.floor(Math.random() * 1e10)
  }

  getComponent () {
    return this.component
  }
}
