namespace VendingMachineDemo {
    export class Logger {

        private readonly methodsToOverride = ['log', 'dir', 'error', 'warn', 'info', 'clear'];
        private readonly originalMethods: { [name: string]: Function } = {};

        constructor(private outputElement: HTMLElement) {

            this.methodsToOverride.forEach(methodName => {
                this.originalMethods[methodName] = console[methodName].bind(console);

                console[methodName] = (message: any) => {
                    this.updateScreen(methodName, message);
                };
            });
        }

        private updateScreen(methodName: string, message: string): void {
            if (methodName === 'clear') {
                this.clear();
                return;
            }

            this.print(methodName, message)
        }

        private print(methodName: string, message: any) {
            let outputText: string;
            if (typeof message === 'object') {
                outputText = JSON.stringify(message);
            } else {
                outputText = message;
            }

            this.outputElement.innerHTML += `<br /><span class="${methodName}">${outputText}</span>`;
        }

        private clear(): void {
            this.outputElement.innerHTML = '';
        }
    }
}