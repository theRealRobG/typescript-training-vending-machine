namespace VendingMachineDemo {
    export const buttonPressEventName = 'button-clicked';
    export interface ButtonPressEventDetails {
        buttonValue: string;
    }

    export class Button extends Component {
        private buttonElement: Element;

        constructor(private label: string) {
            super();
        }

        protected renderSelf(element: Element): Element {
            let newElement = document.createElement('button');
            newElement.classList.add('button');
            newElement.classList.add(`button-${this.label.toLowerCase()}`);
            newElement.textContent = this.label;
            element.appendChild(newElement);
            this.buttonElement = newElement;
            newElement.addEventListener('click', () => {
                this.raiseEvent(buttonPressEventName, {
                    buttonValue: this.label
                });
            });
            return newElement;
        }
    }
}