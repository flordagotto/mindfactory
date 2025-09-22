"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateAutomotorDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const sujeto_validator_1 = require("../../sujetos/validators/sujeto.validator");
class UpdateAutomotorDto {
    numeroChasis;
    numeroMotor;
    color;
    fechaFabricacion;
    cuitDuenio;
}
exports.UpdateAutomotorDto = UpdateAutomotorDto;
__decorate([
    (0, swagger_1.ApiProperty)({ example: '8ABCD123456789XYZ', description: 'Número de chasis' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MaxLength)(25),
    __metadata("design:type", String)
], UpdateAutomotorDto.prototype, "numeroChasis", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'MTR987654321', description: 'Número de motor' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MaxLength)(25),
    __metadata("design:type", String)
], UpdateAutomotorDto.prototype, "numeroMotor", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Rojo', description: 'Color del automotor' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MaxLength)(40),
    __metadata("design:type", String)
], UpdateAutomotorDto.prototype, "color", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '202509', description: 'Fecha de fabricación en formato YYYYMM' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(6, 6, { message: 'La fecha de fabricación debe tener exactamente 6 caracteres (YYYYMM)' }),
    (0, class_validator_1.Matches)(/^(19|20)\d{2}(0[1-9]|1[0-2])$/, { message: 'La fecha de fabricación debe estar en formato YYYYMM válido' }),
    __metadata("design:type", String)
], UpdateAutomotorDto.prototype, "fechaFabricacion", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '20304050607', description: 'CUIT del dueño del automotor' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.Length)(11, 11, { message: 'El CUIT debe tener exactamente 11 dígitos' }),
    (0, class_validator_1.Matches)(/^\d{11}$/, { message: 'El CUIT debe contener solo números' }),
    (0, sujeto_validator_1.CuitIsValid)(),
    __metadata("design:type", String)
], UpdateAutomotorDto.prototype, "cuitDuenio", void 0);
//# sourceMappingURL=update-automotor.dto.js.map