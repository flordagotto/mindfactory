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
exports.Sujeto = void 0;
const vinculo_sujeto_objeto_entity_1 = require("../../vinculo-sujeto-objeto/domain/vinculo-sujeto-objeto.entity");
const typeorm_1 = require("typeorm");
let Sujeto = class Sujeto {
    id;
    cuit;
    denominacion;
    createdAt;
    updatedAt;
    vinculos;
};
exports.Sujeto = Sujeto;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ name: 'spo_id', type: 'bigint' }),
    __metadata("design:type", Number)
], Sujeto.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'spo_cuit', type: 'varchar', length: 11, unique: true }),
    __metadata("design:type", String)
], Sujeto.prototype, "cuit", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'spo_denominacion', type: 'varchar', length: 160 }),
    __metadata("design:type", String)
], Sujeto.prototype, "denominacion", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ name: 'created_at', type: 'timestamptz' }),
    __metadata("design:type", Date)
], Sujeto.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({ name: 'updated_at', type: 'timestamptz' }),
    __metadata("design:type", Date)
], Sujeto.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => vinculo_sujeto_objeto_entity_1.VinculoSujetoObjeto, (vinculo) => vinculo.objetoValor),
    __metadata("design:type", Object)
], Sujeto.prototype, "vinculos", void 0);
exports.Sujeto = Sujeto = __decorate([
    (0, typeorm_1.Entity)('Sujeto')
], Sujeto);
//# sourceMappingURL=sujeto.entity.js.map