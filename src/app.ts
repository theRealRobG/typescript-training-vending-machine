namespace VendingMachineDemo {

    export class App {

        private logger: Logger;

        constructor(private appRootElement: HTMLElement, logOutputElement: HTMLElement) {
            this.logger = new Logger(logOutputElement);
        }

        public boot(): void {

            let promise = Http.get('/data/config.json') as Promise<API.Config>; 

            promise.then((config) => {
                console.log(config);

                let vendingMachine = new VendingMachine(config);
                vendingMachine.render(this.appRootElement);
            });
        }
    }
}