import { registerDecorator, ValidationOptions, ValidationArguments } from 'class-validator';

export function VehicleDomainIsValid(validationOptions?: ValidationOptions) {
  return function (object: Object, propertyName: string) {
    registerDecorator({
      name: 'domainIsValid',
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      validator: {
        validate(value: any, args: ValidationArguments) {
          return /^([A-Z]{3}\d{3}|[A-Z]{2}\d{3}[A-Z]{2})$/.test(value);
        },
        defaultMessage(args: ValidationArguments) {
          return 'Dominio inválido. Debe ser AAA999 o AA999AA';
        },
      },
    });
  };
}