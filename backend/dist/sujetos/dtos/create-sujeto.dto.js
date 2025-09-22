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
exports.CreateSujetoDto = void 0;
const class_validator_1 = require("class-validator");
const sujeto_validator_1 = require("../validators/sujeto.validator");
const swagger_1 = require("@nestjs/swagger");
class CreateSujetoDto {
    spo_cuit;
    spo_denominacion;
}
exports.CreateSujetoDto = CreateSujetoDto;
__decorate([
    (0, swagger_1.ApiProperty)({ example: '12345678901', description: 'CUIT del sujeto' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(11, 11, { message: 'El CUIT debe tener exactamente 11 dígitos' }),
    (0, class_validator_1.Matches)(/^\d{11}$/, { message: 'El CUIT debe contener solo números' }),
    (0, sujeto_validator_1.CuitIsValid)(),
    __metadata("design:type", String)
], CreateSujetoDto.prototype, "spo_cuit", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Una denominacion de ejemplo', description: 'Denominacion del sujeto' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)({ message: 'La denominación es obligatoria' }),
    (0, class_validator_1.Length)(1, 160, { message: 'La denominación debe tener entre 1 y 160 caracteres' }),
    __metadata("design:type", String)
], CreateSujetoDto.prototype, "spo_denominacion", void 0);
//# sourceMappingURL=create-sujeto.dto.js.map