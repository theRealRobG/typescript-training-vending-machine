$(() => {

    const rootElement = document.getElementById('vending-machine-container');
    const logOutputElement = document.getElementById('log-output');
    const app = new VendingMachineDemo.App(rootElement, logOutputElement);
    app.boot();

});
