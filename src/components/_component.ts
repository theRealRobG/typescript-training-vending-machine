namespace VendingMachineDemo {
    export abstract class Component {

        private childComponents: Array<Component> = [];
        private listeners: { [eventName: string]: Array<Function> } = {};

        public render(parentElement: Element): void {
            let childrenContainer = this.renderSelf(parentElement);
            this.renderChildren(childrenContainer);
        }

        public registerListener(eventName: string, callback: Function): void {
            if (!this.listeners[eventName]) {
                this.listeners[eventName] = [];
            }
            this.listeners[eventName].push(callback);
        }

        protected raiseEvent(eventName: string, eventArgs: any): void {
            let callbacks = this.listeners[eventName];
            if (!callbacks) {
                return;
            }

            callbacks.forEach(callback => {
                callback(eventArgs);
            });
        }

        protected addChildComponents(...components: Array<Component>): void {
            components.forEach(component => this.childComponents.push(component));
        }

        protected abstract renderSelf(parentElement: Element): Element;

        private renderChildren(parentElement: Element): void {
            this.childComponents.forEach(renderable => {
                renderable.render(parentElement);
            });
        }
    }
}