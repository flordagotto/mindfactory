import { registerDecorator, ValidationOptions, ValidationArguments } from 'class-validator';

export function NumberIsIntegerPositive(validationOptions?: ValidationOptions) {
  return function (object: Object, propertyName: string) {
    registerDecorator({
      name: 'numberIsIntegerPositive',
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      validator: {
        validate(value: any, args: ValidationArguments) {
          return typeof value === 'number' && Number.isInteger(value) && value > 0;
        },
        defaultMessage(args: ValidationArguments) {
          return `${propertyName} debe ser un número entero positivo`;
        },
      },
    });
  }
}
