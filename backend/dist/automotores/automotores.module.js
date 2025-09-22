"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AutomotoresModule = void 0;
const common_1 = require("@nestjs/common");
const automotores_controller_1 = require("./automotores.controller");
const automotores_service_1 = require("./automotores.service");
const typeorm_1 = require("@nestjs/typeorm");
const automotor_entity_1 = require("./domain/automotor.entity");
const sujeto_entity_1 = require("../sujetos/domain/sujeto.entity");
const objeto_de_valor_entity_1 = require("../objeto-de-valor/domain/objeto-de-valor.entity");
const vinculo_sujeto_objeto_entity_1 = require("../vinculo-sujeto-objeto/domain/vinculo-sujeto-objeto.entity");
let AutomotoresModule = class AutomotoresModule {
};
exports.AutomotoresModule = AutomotoresModule;
exports.AutomotoresModule = AutomotoresModule = __decorate([
    (0, common_1.Module)({ imports: [typeorm_1.TypeOrmModule.forFeature([automotor_entity_1.Automotor, sujeto_entity_1.Sujeto, objeto_de_valor_entity_1.ObjetoDeValor, vinculo_sujeto_objeto_entity_1.VinculoSujetoObjeto])],
        controllers: [automotores_controller_1.AutomotoresController],
        providers: [automotores_service_1.AutomotoresService]
    })
], AutomotoresModule);
//# sourceMappingURL=automotores.module.js.map