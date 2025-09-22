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
exports.AutomotoresService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
const automotor_entity_1 = require("./domain/automotor.entity");
const objeto_de_valor_entity_1 = require("../objeto-de-valor/domain/objeto-de-valor.entity");
const vinculo_sujeto_objeto_entity_1 = require("../vinculo-sujeto-objeto/domain/vinculo-sujeto-objeto.entity");
const sujeto_entity_1 = require("../sujetos/domain/sujeto.entity");
const typeorm_2 = require("@nestjs/typeorm");
let AutomotoresService = class AutomotoresService {
    automotorRepo;
    objetoRepo;
    vinculoRepo;
    sujetoRepo;
    constructor(automotorRepo, objetoRepo, vinculoRepo, sujetoRepo) {
        this.automotorRepo = automotorRepo;
        this.objetoRepo = objetoRepo;
        this.vinculoRepo = vinculoRepo;
        this.sujetoRepo = sujetoRepo;
    }
    async createAutomotor(dto) {
        await this.validateDominio(dto.dominio);
        const sujeto = await this.sujetoRepo.findOneBy({ cuit: dto.cuitDuenio });
        if (!sujeto)
            throw new common_1.UnprocessableEntityException('No existe sujeto con ese CUIT');
        this.validateFechaFabricacion(dto.fechaFabricacion);
        let objeto = await this.objetoRepo.findOne({ where: { tipo: 'AUTOMOTOR', codigo: dto.dominio } });
        if (!objeto) {
            objeto = this.objetoRepo.create({ tipo: 'AUTOMOTOR', codigo: dto.dominio, descripcion: `Automotor ${dto.dominio}` });
            objeto = await this.objetoRepo.save(objeto);
        }
        await this.createAutomotorEntity(dto, objeto);
        await this.setNewOwnerToObjetoDeValor(objeto, sujeto);
    }
    async updateAutomotor(dominio, dto) {
        let automotor = await this.automotorRepo.findOne({ where: { dominio: dominio }, relations: ['objetoValor'] });
        if (!automotor)
            throw new common_1.NotFoundException(`Automotor con dominio ${dominio} no encontrado`);
        const sujeto = await this.sujetoRepo.findOneBy({ cuit: dto.cuitDuenio });
        if (!sujeto)
            throw new common_1.UnprocessableEntityException('No existe sujeto con ese CUIT');
        let objeto = await this.objetoRepo.findOne({
            where: { tipo: 'AUTOMOTOR', codigo: dominio },
            relations: ['vinculos', 'vinculos.sujeto']
        });
        if (!objeto)
            throw new common_1.UnprocessableEntityException('No existe objeto de valor asociado al automotor');
        await this.updateAutomotorEntity(dto, automotor);
        const activeVinculo = objeto.vinculos.find((v) => v.fechaFin === null || v.fechaFin === undefined);
        if (activeVinculo) {
            if (activeVinculo.sujeto.cuit !== dto.cuitDuenio) {
                await this.setNewOwnerToObjetoDeValor(objeto, sujeto);
            }
        }
    }
    async deleteAutomotor(dominio) {
        const objeto = await this.objetoRepo.findOne({
            where: { tipo: 'AUTOMOTOR', codigo: dominio },
            relations: ['automotor', 'vinculos'],
        });
        if (!objeto)
            throw new common_1.UnprocessableEntityException('No existe objeto de valor asociado al automotor');
        if (objeto.vinculos?.length) {
            await this.vinculoRepo.remove(objeto.vinculos);
        }
        if (objeto.automotor) {
            await this.automotorRepo.remove(objeto.automotor);
        }
        await this.objetoRepo.remove(objeto);
    }
    async getAllAutomotores() {
        const automotores = await this.automotorRepo.find({
            relations: ['objetoValor', 'objetoValor.vinculos', 'objetoValor.vinculos.sujeto'],
        });
        const automotoresDto = automotores.map((a) => {
            const activeVinculo = a.objetoValor.vinculos.find((v) => v.responsable === 'S' && !v.fechaFin);
            return this.getAutomotorDto(a, activeVinculo);
        });
        return automotoresDto;
    }
    async getAutomotorByDominio(dominio) {
        const automotor = await this.automotorRepo.findOne({
            where: { dominio },
            relations: ['objetoValor', 'objetoValor.vinculos', 'objetoValor.vinculos.sujeto'],
        });
        if (!automotor)
            throw new common_1.NotFoundException('Automotor no encontrado');
        const activeVinculo = automotor.objetoValor.vinculos.find((v) => v.responsable === 'S' && !v.fechaFin);
        return this.getAutomotorDto(automotor, activeVinculo);
    }
    getAutomotorDto(automotorEntity, activeVinculo) {
        return {
            id: automotorEntity.id,
            dominio: automotorEntity.dominio,
            numeroChasis: automotorEntity.numeroChasis,
            numeroMotor: automotorEntity.numeroMotor,
            color: automotorEntity.color,
            fechaFabricacion: automotorEntity.fechaFabricacion,
            fechaAltoRegistro: automotorEntity.fechaAltaRegistro,
            objetoDeValor: {
                id: automotorEntity.objetoValor.id,
                tipo: automotorEntity.objetoValor.tipo,
                codigo: automotorEntity.objetoValor.codigo,
                descripcion: automotorEntity.objetoValor.descripcion
            },
            sujeto: activeVinculo
                ? {
                    id: activeVinculo.sujeto.id,
                    cuit: activeVinculo.sujeto.cuit,
                    denominacion: activeVinculo.sujeto.denominacion,
                }
                : null,
            vinculos: automotorEntity.objetoValor.vinculos.map((v) => ({
                tipoVinculo: v.tipoVinculo,
                porcentaje: v.porcentaje,
                responsable: v.responsable,
                fechaInicio: v.fechaInicio,
                fechaFin: v.fechaFin
            }))
        };
    }
    async setNewOwnerToObjetoDeValor(objeto, sujeto) {
        await this.closePreviousVinculo(objeto);
        await this.createNewVinculo(objeto, sujeto);
    }
    validateFechaFabricacion(fechaFabricacion) {
        const anio = Number(fechaFabricacion.slice(0, 4));
        const mes = Number(fechaFabricacion.slice(4, 6));
        const hoy = new Date();
        if (mes < 1 || mes > 12 || anio > hoy.getFullYear() || (anio === hoy.getFullYear() && mes > hoy.getMonth() + 1)) {
            throw new common_1.UnprocessableEntityException('Fecha de fabricación inválida');
        }
    }
    async createAutomotorEntity(dto, objeto) {
        let automotor = this.automotorRepo.create({
            dominio: dto.dominio,
            numeroChasis: dto.numeroChasis,
            numeroMotor: dto.numeroMotor,
            color: dto.color,
            fechaFabricacion: Number(dto.fechaFabricacion),
            objetoValor: objeto,
        });
        automotor = await this.automotorRepo.save(automotor);
    }
    async updateAutomotorEntity(dto, oldAutomotor) {
        if (dto.numeroChasis)
            oldAutomotor.numeroChasis = dto.numeroChasis;
        if (dto.numeroMotor)
            oldAutomotor.numeroMotor = dto.numeroMotor;
        if (dto.color)
            oldAutomotor.color = dto.color;
        if (dto.fechaFabricacion) {
            this.validateFechaFabricacion(dto.fechaFabricacion);
            oldAutomotor.fechaFabricacion = Number(dto.fechaFabricacion);
        }
        return await this.automotorRepo.save(oldAutomotor);
    }
    async closePreviousVinculo(objeto) {
        await this.vinculoRepo
            .createQueryBuilder()
            .update(vinculo_sujeto_objeto_entity_1.VinculoSujetoObjeto)
            .set({ fechaFin: new Date() })
            .where('vso_ovp_id = :ovpId AND vso_responsable = :resp AND vso_fecha_fin IS NULL', { ovpId: objeto.id, resp: 'S' })
            .execute();
    }
    async createNewVinculo(objeto, sujeto) {
        const vinculo = this.vinculoRepo.create({
            ovpId: objeto.id,
            spoId: sujeto.id,
            tipoVinculo: 'DUENO',
            porcentaje: 100,
            responsable: 'S',
            fechaInicio: new Date(),
        });
        await this.vinculoRepo.save(vinculo);
    }
    async validateDominio(dominio) {
        const automotor = await this.automotorRepo.findOne({ where: { dominio: dominio } });
        if (automotor)
            throw new common_1.UnprocessableEntityException(`Ya existe un automotor con el dominio ${dominio}`);
    }
};
exports.AutomotoresService = AutomotoresService;
exports.AutomotoresService = AutomotoresService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_2.InjectRepository)(automotor_entity_1.Automotor)),
    __param(1, (0, typeorm_2.InjectRepository)(objeto_de_valor_entity_1.ObjetoDeValor)),
    __param(2, (0, typeorm_2.InjectRepository)(vinculo_sujeto_objeto_entity_1.VinculoSujetoObjeto)),
    __param(3, (0, typeorm_2.InjectRepository)(sujeto_entity_1.Sujeto)),
    __metadata("design:paramtypes", [typeorm_1.Repository,
        typeorm_1.Repository,
        typeorm_1.Repository,
        typeorm_1.Repository])
], AutomotoresService);
//# sourceMappingURL=automotores.service.js.map