"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CuitIsValid = CuitIsValid;
const class_validator_1 = require("class-validator");
function CuitIsValid(validationOptions) {
    return function (object, propertyName) {
        (0, class_validator_1.registerDecorator)({
            name: 'cuitIsValid',
            target: object.constructor,
            propertyName: propertyName,
            options: validationOptions,
            validator: {
                validate(value) {
                    if (!/^\d{11}$/.test(value))
                        return false;
                    const coef = [5, 4, 3, 2, 7, 6, 5, 4, 3, 2];
                    let sum = 0;
                    for (let i = 0; i < 10; i++) {
                        sum += parseInt(value[i], 10) * coef[i];
                    }
                    let dv = 11 - (sum % 11);
                    if (dv === 11)
                        dv = 0;
                    if (dv === 10)
                        dv = 9;
                    return dv === parseInt(value[10], 10);
                },
                defaultMessage(args) {
                    return 'CUIT inválido';
                },
            },
        });
    };
}
//# sourceMappingURL=sujeto.validator.js.map