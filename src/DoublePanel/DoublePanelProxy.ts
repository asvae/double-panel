import PanelLayer from './classes/PanelLayer'
import PanelCreateOptions from './emitter/PanelCreateOptions'
import PanelCloseOptions from './emitter/PanelCloseOptions'

export default class DoublePanelProxy {
  childLayers: PanelLayer[] = []

  addRootLayers (left?: any, right?: any) {
    if (left) {
      this.childLayers.push(
        new PanelLayer({
          component: left,
          position: 'left',
          isRoot: true,
        }),
      )
    }
    if (right) {
      this.childLayers.push(
        new PanelLayer({
          component: right,
          position: 'right',
          isRoot: true,
        }),
      )
    }
  }

  create (panelCreateOptions: PanelCreateOptions): void {
    const targetLayer = this.findTargetLayer(panelCreateOptions)
    if (!targetLayer) {
      this.createNewLayer(panelCreateOptions)
      return
    }

    const shouldReuse = panelCreateOptions.reuse
      && panelCreateOptions.component === targetLayer.component

    if (shouldReuse) {
      this.mergeOptions(targetLayer, panelCreateOptions)
      return
    }

    this.childLayers.splice(this.childLayers.indexOf(targetLayer))
    this.createNewLayer(panelCreateOptions)
  }

  findTargetLayer (panelCreateOptions: PanelCreateOptions): PanelLayer | null {
    const panelLayer = panelCreateOptions.getPanelLayer()

    if (panelCreateOptions.replaceSelf) {
      return panelLayer
    }

    const panelIndex = this.childLayers.indexOf(panelLayer)

    let childIndex = panelIndex + 1
    if (!this.childLayers[childIndex]) {
      return null
    }
    if (this.childLayers[childIndex].isRoot) {
      childIndex++
    }
    if (!this.childLayers[childIndex]) {
      return null
    }
    return this.childLayers[childIndex]
  }

  createNewLayer (panelCreateOptions: PanelCreateOptions) {
    this.childLayers.push(
      new PanelLayer({
        data: panelCreateOptions.payload,
        component: panelCreateOptions.component,
        position: panelCreateOptions.getAbsolutePosition(),
        isFullWidth: panelCreateOptions.fullWidth,
      }),
    )
  }

  mergeOptions (panelLayer: PanelLayer, panelCreateOptions: PanelCreateOptions) {
    panelLayer.data = panelCreateOptions.payload
  }

  close (panelCloseOptions: PanelCloseOptions) {
    const panelLayer = panelCloseOptions.getPanelLayer()
    if (panelLayer.isRoot) {
      throw new Error('You can\'t close root panel')
    }
    const layerIndex = this.childLayers.indexOf(panelLayer)
    const spliceIndex = panelCloseOptions.childOnly ? layerIndex + 1 : layerIndex
    this.childLayers.splice(spliceIndex)
  }

  getLeftRootPanel (): PanelLayer | undefined {
    return this.childLayers.find(panelLayer => panelLayer.position === 'left' && panelLayer.isRoot)
  }

  getRightRootPanel (): PanelLayer | undefined {
    return this.childLayers.find(panelLayer => panelLayer.position === 'right' && panelLayer.isRoot)
  }

  getNonRootPanels (): PanelLayer[] {
    return this.childLayers.filter(panelLayer => !panelLayer.isRoot)
  }
}