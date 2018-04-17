export default class DoublePanelItems {
  left: any = null
  right: any = null
  children: any[] = []

  constructor (data: Partial<DoublePanelItems>) {
    Object.assign(this, data)
  }
}
