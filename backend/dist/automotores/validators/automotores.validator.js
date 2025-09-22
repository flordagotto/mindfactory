"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VehicleDomainIsValid = VehicleDomainIsValid;
const class_validator_1 = require("class-validator");
function VehicleDomainIsValid(validationOptions) {
    return function (object, propertyName) {
        (0, class_validator_1.registerDecorator)({
            name: 'domainIsValid',
            target: object.constructor,
            propertyName: propertyName,
            options: validationOptions,
            validator: {
                validate(value, args) {
                    return /^([A-Z]{3}\d{3}|[A-Z]{2}\d{3}[A-Z]{2})$/.test(value);
                },
                defaultMessage(args) {
                    return 'Dominio inválido. Debe ser AAA999 o AA999AA';
                },
            },
        });
    };
}
//# sourceMappingURL=automotores.validator.js.map