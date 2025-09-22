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
exports.ObjetoDeValor = void 0;
const automotor_entity_1 = require("../../automotores/domain/automotor.entity");
const vinculo_sujeto_objeto_entity_1 = require("../../vinculo-sujeto-objeto/domain/vinculo-sujeto-objeto.entity");
const typeorm_1 = require("typeorm");
let ObjetoDeValor = class ObjetoDeValor {
    id;
    tipo;
    codigo;
    descripcion;
    createdAt;
    updatedAt;
    automotor;
    vinculos;
};
exports.ObjetoDeValor = ObjetoDeValor;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ name: 'ovp_id', type: 'bigint' }),
    __metadata("design:type", Number)
], ObjetoDeValor.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'ovp_tipo', type: 'varchar', length: 30 }),
    __metadata("design:type", String)
], ObjetoDeValor.prototype, "tipo", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'ovp_codigo', type: 'varchar', length: 64 }),
    __metadata("design:type", String)
], ObjetoDeValor.prototype, "codigo", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'ovp_descripcion', type: 'varchar', length: 240 }),
    __metadata("design:type", String)
], ObjetoDeValor.prototype, "descripcion", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ name: 'created_at', type: 'timestamptz' }),
    __metadata("design:type", Date)
], ObjetoDeValor.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({ name: 'updated_at', type: 'timestamptz' }),
    __metadata("design:type", Date)
], ObjetoDeValor.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => automotor_entity_1.Automotor, (automotor) => automotor.objetoValor),
    __metadata("design:type", automotor_entity_1.Automotor)
], ObjetoDeValor.prototype, "automotor", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => vinculo_sujeto_objeto_entity_1.VinculoSujetoObjeto, (vinculo) => vinculo.objetoValor),
    __metadata("design:type", Array)
], ObjetoDeValor.prototype, "vinculos", void 0);
exports.ObjetoDeValor = ObjetoDeValor = __decorate([
    (0, typeorm_1.Entity)('Objeto_De_Valor')
], ObjetoDeValor);
//# sourceMappingURL=objeto-de-valor.entity.js.map