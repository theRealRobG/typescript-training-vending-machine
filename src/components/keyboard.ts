namespace VendingMachineDemo {
    export const regularKeyValuesArray = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];
    export const specialButtonValues = ['Enter', 'Cancel'];

    export class Keyboard extends Component {
        private buttons: Array<Button> = [];

        constructor(private display: Display) {
            super();
            this.createRegularButtons();
            this.createSpecialButtons();
            this.addChildComponents(...this.buttons);
            this.registerButtonListeners();
        }

        private createRegularButtons(): void {
            regularKeyValuesArray.forEach(value => this.buttons.push(new Button(value)));
        }

        private createSpecialButtons(): void {
            specialButtonValues.forEach(value => this.buttons.push(new Button(value)));
        }

        private registerButtonListeners(): void {
            this.buttons.forEach((button) => {
                button.registerListener('button-clicked', (eventDetails: ButtonPressEventDetails) => {
                    this.onButtonPress(eventDetails.buttonValue);
                })
            });
        }

        private onButtonPress(buttonValue: string): void {
            if (specialButtonValues.indexOf(buttonValue) > -1) {
                this.onSpecialButtonPress(buttonValue);
                return;
            }

            this.display.addToDisplayText(buttonValue);
        }

        private onSpecialButtonPress(buttonValue: string) {
            switch (buttonValue) {
                case 'Cancel':
                    this.handleCancelButtonPress();
                    break;
                case 'Enter':
                    this.handleEnterButtonPress();
                    break;
            }
        }

        private handleCancelButtonPress(): void {
            this.display.clearDisplayText();
        }

        private handleEnterButtonPress(): void {
            //todo
        }

        protected renderSelf(element: Element): Element {
            let newElement = document.createElement('div');
            newElement.id = 'keyboard';
            element.appendChild(newElement);
            return newElement;
        }
    }
}