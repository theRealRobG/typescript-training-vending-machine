// the vending machine itself
// knows about its Slots, Buttons and Display, handles the high level logic
namespace VendingMachineDemo {
    export class VendingMachine extends Component {
        private keyboard: Keyboard;
        private display: Display;
        private slots: Array<Slot> = [];

        constructor(config: API.Config) {
            super();
            this.buildComponents(config);
        }

        private buildComponents(config: API.Config): void {
            this.display = new Display();
            this.keyboard = new Keyboard(this.display);
            this.buildSlotsComponents(config);

            this.addChildComponents(this.keyboard, this.display, ...this.slots);
        }

        private buildSlotsComponents(config: API.Config): void {
            for (let i = 0; i < config.slotsCount; i++) {
                let slotContent = this.getContentForSlot(i, config);
                this.slots.push(new Slot(slotContent.items, slotContent.price, Helpers.SlotCodeGenerator.generate(i)));
            }
        }

        private getContentForSlot(slotIndex: number, config: API.Config): { items: Array<Item>, price: number } {
            if (!config.items[slotIndex]) {
                return null;
            }

            let itemInfo = config.items[slotIndex];
            let itemCount = itemInfo.count;
            let itemArray: Array<Item> = [];
            while (itemCount-- > 0) {
                itemArray.push(new Item(itemInfo));
            }

            return {
                items: itemArray,
                price: itemInfo.price
            };
        }

        protected renderSelf(element: HTMLElement): Element {
            let newElement = document.createElement('div');
            newElement.id = 'vending-machine';
            element.appendChild(newElement);
            return newElement;
        }
    }
}