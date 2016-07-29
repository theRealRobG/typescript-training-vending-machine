namespace VendingMachineDemo {
    export class Slot extends Component{
        constructor(private items: Array<Item>, public itemPrice: number, public slotCode: string) {
            super();
            this.addChildComponents(...items);
        }

        protected renderSelf(element: Element): Element {
            let newElement = document.createElement('div');
            newElement.classList.add('slot');
            let slotLabelElement = document.createElement('div');
            slotLabelElement.textContent = this.slotCode;
            slotLabelElement.classList.add('slot-label');
            newElement.appendChild(slotLabelElement);
            element.appendChild(newElement);
            return newElement;
        }
    }
}