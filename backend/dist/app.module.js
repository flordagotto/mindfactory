"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const automotores_module_1 = require("./automotores/automotores.module");
const sujetos_module_1 = require("./sujetos/sujetos.module");
const objeto_de_valor_module_1 = require("./objeto-de-valor/objeto-de-valor.module");
const vinculo_sujeto_objeto_module_1 = require("./vinculo-sujeto-objeto/vinculo-sujeto-objeto.module");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forRoot({
                type: 'postgres',
                host: 'localhost',
                port: 5432,
                username: 'postgres',
                password: 'postgres',
                database: 'mindfactory',
                autoLoadEntities: true,
                synchronize: true,
            }),
            automotores_module_1.AutomotoresModule,
            sujetos_module_1.SujetosModule,
            objeto_de_valor_module_1.ObjetoDeValorModule,
            vinculo_sujeto_objeto_module_1.VinculoSujetoObjetoModule
        ]
    })
], AppModule);
//# sourceMappingURL=app.module.js.map