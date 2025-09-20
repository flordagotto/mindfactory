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

export function DateIsValid(validationOptions?: ValidationOptions) {
  return function (object: Object, propertyName: string) {
    registerDecorator({
      name: 'dateIsValid',
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      validator: {
        validate(value: any) {
          if (typeof value !== 'number') return false;
          const str = value.toString();
          if (!/^\d{6}$/.test(str)) return false;

          const year = parseInt(str.slice(0, 4), 10);
          const month = parseInt(str.slice(4, 6), 10);
          if (month < 1 || month > 12) return false;

          const now = new Date();
          const inputDate = new Date(year, month - 1);
          return inputDate <= now; 
        },
        defaultMessage(args: ValidationArguments) {
          return 'Fecha de fabricación inválida. Debe ser YYYYMM y no futura';
        },
      },
    });
  };
}