namespace VendingMachineDemo {
    export class Item extends Component{
        public name: string;
        private imageUrl: string;

        constructor(itemInfo: API.Item) {
            super();
            this.name = itemInfo.itemName;
            this.imageUrl = itemInfo.imageUrl;
        }

        protected renderSelf(element: Element): Element {
            let newElement = document.createElement('div');
            newElement.classList.add('item');
            newElement.classList.add(this.name);
            newElement.style.backgroundImage = `url(${this.imageUrl})`;
            element.appendChild(newElement);
            return newElement;
        }
    }
}