1. Node y Nest no son mis tecnologías más fuertes, por lo que tuve que consultar a ChatGPT algunas cosas como convenciones y formatos generales para codear con este framework. Lo primero que consulté es la estructura de carpetas adecuada para una API. Su respuesta fue que me conviene estructurarla de la siguiente manera:
/src
    /entidad
        /entidad.controller.ts
        /entidad.service.ts
        /entidad.module.ts
        /entities/entidad.entity.ts
        /dtos
            /create-entidad-dto.ts
            /update-entidad-dto.ts
            ...
        /validators
            /domain-validator.ts
            /specifics-validators.ts
            ...

También aproveché para consultar sobre librerías que me faciliten el trabajo de validación. En .NET uso FluentValidations que es muy útil para las validaciones a nivel de datos (lo que pude implementar con class-validator), y luego en los servicios implemento validaciones a nivel de negocio.