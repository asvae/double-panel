import DoublePanelItems from '../../non-domain-modules/Universal/DoublePanel/classes/DoublePanelItems.js'
import PanelItem from '../../non-domain-modules/Universal/DoublePanel/classes/PanelItem.js'

import vmListPanelExample from '../../non-domain-modules/Universal/DoublePanel/DoublePanel.demo/ListPanelExample.vue'
import vmCloudPanelExample from '../../non-domain-modules/Universal/DoublePanel/DoublePanel.demo/CloudPanelExample.vue'
import vmDisplayPanelExample from '../../non-domain-modules/Universal/DoublePanel/DoublePanel.demo/DisplayPanelExample.vue'
import { displayExampleItem } from '../../non-domain-modules/Universal/DoublePanel/DoublePanel.demo/ExamplePanelSymbols'

export default class DoublePanelItemsFactory {
  static getFull () {
    return new DoublePanelItems({
      left: new PanelItem({ component: vmListPanelExample }),
      right: new PanelItem({ component: vmCloudPanelExample }),
      children: [
        new PanelItem({
          key: displayExampleItem,
          component: vmDisplayPanelExample
        })
      ]
    })
  }
}