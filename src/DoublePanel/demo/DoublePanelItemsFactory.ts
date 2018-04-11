import DoublePanelItems from '../classes/DoublePanelItems'
import PanelItem from '../classes/PanelItem'

import VmListPanelExample from './ListPanelExample.vue'
import VmCloudPanelExample from './CloudPanelExample.vue'
import VmDisplayPanelExample from './DisplayPanelExample.vue'
import { displayExampleItem } from './ExamplePanelSymbols'

export default class DoublePanelItemsFactory {
  static getFull () {
    return new DoublePanelItems({
      left: new PanelItem({ component: VmListPanelExample }),
      right: new PanelItem({ component: VmCloudPanelExample }),
      children: [
        new PanelItem({
          key: displayExampleItem,
          component: VmDisplayPanelExample,
        }),
      ],
    })
  }
}