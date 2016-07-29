namespace VendingMachineDemo.Helpers {
    export class SlotCodeGenerator {
        public static generate(index: number): string {
            let code = '';
            let indexArray = index.toString().split('');
            indexArray.forEach(unit => code += regularKeyValuesArray[parseInt(unit)]);
            return code;
        }
    }
}