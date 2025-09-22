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
exports.Automotor = void 0;
const objeto_de_valor_entity_1 = require("../../objeto-de-valor/domain/objeto-de-valor.entity");
const typeorm_1 = require("typeorm");
let Automotor = class Automotor {
    id;
    atr_ovp_id;
    dominio;
    numeroChasis;
    numeroMotor;
    color;
    fechaFabricacion;
    fechaAltaRegistro;
    objetoValor;
};
exports.Automotor = Automotor;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ name: 'atr_id', type: 'bigint' }),
    __metadata("design:type", Number)
], Automotor.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'atr_ovp_id', type: 'int' }),
    __metadata("design:type", Number)
], Automotor.prototype, "atr_ovp_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'atr_dominio', type: 'varchar', length: 8 }),
    __metadata("design:type", String)
], Automotor.prototype, "dominio", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'atr_numero_chasis', type: 'varchar', length: 25, nullable: true }),
    __metadata("design:type", Object)
], Automotor.prototype, "numeroChasis", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'atr_numero_motor', type: 'varchar', length: 25, nullable: true }),
    __metadata("design:type", Object)
], Automotor.prototype, "numeroMotor", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'atr_color', type: 'varchar', length: 40, nullable: true }),
    __metadata("design:type", Object)
], Automotor.prototype, "color", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'atr_fecha_fabricacion', type: 'int' }),
    __metadata("design:type", Number)
], Automotor.prototype, "fechaFabricacion", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'atr_fecha_alta_registro', type: 'timestamptz' }),
    __metadata("design:type", Date)
], Automotor.prototype, "fechaAltaRegistro", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => objeto_de_valor_entity_1.ObjetoDeValor, (ovp) => ovp.automotor, { cascade: true }),
    (0, typeorm_1.JoinColumn)({ name: 'atr_ovp_id' }),
    __metadata("design:type", objeto_de_valor_entity_1.ObjetoDeValor)
], Automotor.prototype, "objetoValor", void 0);
exports.Automotor = Automotor = __decorate([
    (0, typeorm_1.Entity)('Automotores')
], Automotor);
//# sourceMappingURL=automotor.entity.js.map