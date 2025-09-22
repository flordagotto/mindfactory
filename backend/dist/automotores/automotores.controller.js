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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AutomotoresController = void 0;
const common_1 = require("@nestjs/common");
const create_automotor_dto_1 = require("./dtos/create-automotor.dto");
const update_automotor_dto_1 = require("./dtos/update-automotor.dto");
const automotores_service_1 = require("./automotores.service");
let AutomotoresController = class AutomotoresController {
    automotoresService;
    constructor(automotoresService) {
        this.automotoresService = automotoresService;
    }
    create(dto) {
        return this.automotoresService.createAutomotor(dto);
    }
    update(dominio, dto) {
        return this.automotoresService.updateAutomotor(dominio, dto);
    }
    delete(dominio) {
        return this.automotoresService.deleteAutomotor(dominio);
    }
    get() {
        return this.automotoresService.getAllAutomotores();
    }
    getByDominio(dominio) {
        return this.automotoresService.getAutomotorByDominio(dominio);
    }
};
exports.AutomotoresController = AutomotoresController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_automotor_dto_1.CreateAutomotorDto]),
    __metadata("design:returntype", void 0)
], AutomotoresController.prototype, "create", null);
__decorate([
    (0, common_1.Put)(':dominio'),
    __param(0, (0, common_1.Param)('dominio')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_automotor_dto_1.UpdateAutomotorDto]),
    __metadata("design:returntype", void 0)
], AutomotoresController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':dominio'),
    __param(0, (0, common_1.Param)('dominio')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], AutomotoresController.prototype, "delete", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], AutomotoresController.prototype, "get", null);
__decorate([
    (0, common_1.Get)(':dominio'),
    __param(0, (0, common_1.Param)('dominio')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], AutomotoresController.prototype, "getByDominio", null);
exports.AutomotoresController = AutomotoresController = __decorate([
    (0, common_1.Controller)('automotores'),
    __metadata("design:paramtypes", [automotores_service_1.AutomotoresService])
], AutomotoresController);
//# sourceMappingURL=automotores.controller.js.map