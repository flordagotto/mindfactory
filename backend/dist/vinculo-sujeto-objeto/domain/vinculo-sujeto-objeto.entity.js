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
exports.VinculoSujetoObjeto = void 0;
const objeto_de_valor_entity_1 = require("../../objeto-de-valor/domain/objeto-de-valor.entity");
const sujeto_entity_1 = require("../../sujetos/domain/sujeto.entity");
const typeorm_1 = require("typeorm");
let VinculoSujetoObjeto = class VinculoSujetoObjeto {
    id;
    ovpId;
    spoId;
    tipoVinculo;
    porcentaje;
    responsable;
    fechaInicio;
    fechaFin;
    createdAt;
    objetoValor;
    sujeto;
};
exports.VinculoSujetoObjeto = VinculoSujetoObjeto;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ name: 'vso_id', type: 'bigint' }),
    __metadata("design:type", Number)
], VinculoSujetoObjeto.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'vso_ovp_id', type: 'int' }),
    __metadata("design:type", Number)
], VinculoSujetoObjeto.prototype, "ovpId", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'vso_spo_id', type: 'int' }),
    __metadata("design:type", Number)
], VinculoSujetoObjeto.prototype, "spoId", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'vso_tipo_vinculo', type: 'varchar', length: 30 }),
    __metadata("design:type", String)
], VinculoSujetoObjeto.prototype, "tipoVinculo", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'vso_porcentaje', type: 'numeric', precision: 5, scale: 2 }),
    __metadata("design:type", Number)
], VinculoSujetoObjeto.prototype, "porcentaje", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'vso_responsable', type: 'char', length: 1, default: '0' }),
    __metadata("design:type", String)
], VinculoSujetoObjeto.prototype, "responsable", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'vso_fecha_inicio', type: 'date', nullable: true }),
    __metadata("design:type", Date)
], VinculoSujetoObjeto.prototype, "fechaInicio", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'vso_fecha_fin', type: 'date', nullable: true }),
    __metadata("design:type", Date)
], VinculoSujetoObjeto.prototype, "fechaFin", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ name: 'created_at', type: 'timestamp' }),
    __metadata("design:type", Date)
], VinculoSujetoObjeto.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => objeto_de_valor_entity_1.ObjetoDeValor, (ovp) => ovp.vinculos),
    (0, typeorm_1.JoinColumn)({ name: 'vso_ovp_id' }),
    __metadata("design:type", objeto_de_valor_entity_1.ObjetoDeValor)
], VinculoSujetoObjeto.prototype, "objetoValor", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => sujeto_entity_1.Sujeto, (sujeto) => sujeto.vinculos),
    (0, typeorm_1.JoinColumn)({ name: 'vso_spo_id' }),
    __metadata("design:type", sujeto_entity_1.Sujeto)
], VinculoSujetoObjeto.prototype, "sujeto", void 0);
exports.VinculoSujetoObjeto = VinculoSujetoObjeto = __decorate([
    (0, typeorm_1.Entity)('Vinculo_Sujeto_Objeto')
], VinculoSujetoObjeto);
//# sourceMappingURL=vinculo-sujeto-objeto.entity.js.map