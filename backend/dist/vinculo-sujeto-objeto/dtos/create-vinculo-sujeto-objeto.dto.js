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
exports.CreateVinculoSujetoObjetoDto = void 0;
const class_validator_1 = require("class-validator");
class CreateVinculoSujetoObjetoDto {
    vso_ovp_id;
    vso_spo_id;
    vso_tipo_vinculo;
    vso_porcentaje;
    vso_responsable;
    vso_fecha_inicio;
    vso_fecha_fin;
}
exports.CreateVinculoSujetoObjetoDto = CreateVinculoSujetoObjetoDto;
__decorate([
    (0, class_validator_1.IsInt)(),
    (0, class_validator_1.IsPositive)(),
    __metadata("design:type", Number)
], CreateVinculoSujetoObjetoDto.prototype, "vso_ovp_id", void 0);
__decorate([
    (0, class_validator_1.IsInt)(),
    (0, class_validator_1.IsPositive)(),
    __metadata("design:type", Number)
], CreateVinculoSujetoObjetoDto.prototype, "vso_spo_id", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MaxLength)(30),
    __metadata("design:type", String)
], CreateVinculoSujetoObjetoDto.prototype, "vso_tipo_vinculo", void 0);
__decorate([
    (0, class_validator_1.IsNumber)({ maxDecimalPlaces: 2 }),
    (0, class_validator_1.Min)(0),
    (0, class_validator_1.Max)(100),
    __metadata("design:type", Number)
], CreateVinculoSujetoObjetoDto.prototype, "vso_porcentaje", void 0);
__decorate([
    (0, class_validator_1.IsIn)(['S', 'N']),
    __metadata("design:type", String)
], CreateVinculoSujetoObjetoDto.prototype, "vso_responsable", void 0);
__decorate([
    (0, class_validator_1.IsDateString)(),
    __metadata("design:type", Date)
], CreateVinculoSujetoObjetoDto.prototype, "vso_fecha_inicio", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsDateString)(),
    __metadata("design:type", Date)
], CreateVinculoSujetoObjetoDto.prototype, "vso_fecha_fin", void 0);
//# sourceMappingURL=create-vinculo-sujeto-objeto.dto.js.map