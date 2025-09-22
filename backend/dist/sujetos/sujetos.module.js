"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SujetosModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const sujetos_service_1 = require("./sujetos.service");
const sujetos_controller_1 = require("./sujetos.controller");
const sujeto_entity_1 = require("./domain/sujeto.entity");
let SujetosModule = class SujetosModule {
};
exports.SujetosModule = SujetosModule;
exports.SujetosModule = SujetosModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([sujeto_entity_1.Sujeto])],
        controllers: [sujetos_controller_1.SujetosController],
        providers: [sujetos_service_1.SujetosService],
    })
], SujetosModule);
//# sourceMappingURL=sujetos.module.js.map