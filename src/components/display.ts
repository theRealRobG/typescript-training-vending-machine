namespace VendingMachineDemo {
    export class Display extends Component{
        private displayText = '';
        private displayElement: Element;

        constructor(welcomeMessage?: string) {
            super();
            if (welcomeMessage) {
                this.displayText = welcomeMessage;
            }
        }

        public addToDisplayText(text: string): void {
            this.displayText+= text;
            this.displayElement.textContent = this.displayText;
        }

        public clearDisplayText(): void {
            this.displayText = '';
            this.displayElement.textContent = '';
        }

        public setDisplayMessage(text: string) {
            this.displayText = text;
            this.displayElement.textContent = text;
        }

        protected renderSelf(element: Element): Element {
            let newElement = document.createElement('div');
            newElement.id = 'display';
            newElement.textContent = this.displayText;
            element.appendChild(newElement);
            this.displayElement = newElement;
            return newElement;
        }
    }
}