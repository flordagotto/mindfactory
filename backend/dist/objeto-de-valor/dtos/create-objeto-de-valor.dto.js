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
exports.CreateObjetoDeValorDto = void 0;
const class_validator_1 = require("class-validator");
class CreateObjetoDeValorDto {
    ovp_tipo;
    ovp_codigo;
    ovp_descripcion;
}
exports.CreateObjetoDeValorDto = CreateObjetoDeValorDto;
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)({ message: 'El tipo es obligatorio' }),
    (0, class_validator_1.Length)(1, 30, { message: 'El tipo no puede superar los 30 caracteres' }),
    __metadata("design:type", String)
], CreateObjetoDeValorDto.prototype, "ovp_tipo", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)({ message: 'El código es obligatorio' }),
    (0, class_validator_1.Length)(1, 64, { message: 'El código no puede superar los 64 caracteres' }),
    __metadata("design:type", String)
], CreateObjetoDeValorDto.prototype, "ovp_codigo", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)({ message: 'La descripción es obligatoria' }),
    (0, class_validator_1.Length)(1, 240, { message: 'La descripción no puede superar los 240 caracteres' }),
    __metadata("design:type", String)
], CreateObjetoDeValorDto.prototype, "ovp_descripcion", void 0);
//# sourceMappingURL=create-objeto-de-valor.dto.js.map