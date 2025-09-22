"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NumberIsIntegerPositive = NumberIsIntegerPositive;
const class_validator_1 = require("class-validator");
function NumberIsIntegerPositive(validationOptions) {
    return function (object, propertyName) {
        (0, class_validator_1.registerDecorator)({
            name: 'numberIsIntegerPositive',
            target: object.constructor,
            propertyName: propertyName,
            options: validationOptions,
            validator: {
                validate(value, args) {
                    return typeof value === 'number' && Number.isInteger(value) && value > 0;
                },
                defaultMessage(args) {
                    return `${propertyName} debe ser un número entero positivo`;
                },
            },
        });
    };
}
//# sourceMappingURL=validator.js.map