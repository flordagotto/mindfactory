**Stack Tecnológico**

Backend: Node 20 + NestJS

ORM: TypeORM

Base de datos: PostgreSQL 17.6

Contenedores: Docker + docker-compose

Frontend: Angular (puerto 4200)

Backend: NestJS (puerto 3000)

**Arquitectura y Entidades**
Entidades principales

Automotor: Objeto de valor que puede tener o no un dueño.

*Atributos relevantes: dominio, número de chasis, número de motor, color, fecha de fabricación, fecha de alta registro.*

Relación opcional con Sujeto mediante Vinculo_Sujeto_Objeto.

Sujeto: Persona o empresa que puede ser dueño de uno o varios automotores.

*Atributos: CUIT (único), denominación.*

Relaciones:
Automotor ↔ Sujeto: 0..1 dueño por automotor.
Automotor ↔ Objeto_De_Valor: 1..1.
Vinculo_Sujeto_Objeto: tabla intermedia para registrar la relación entre automotor y sujeto (propietario actual).

**Endpoints principales (/api)**
Automotores
GET	/automotores	Lista todos los automotores junto con su dueño actual.
GET	/automotores/:dominio	Obtiene el detalle de un automotor específico + dueño actual.
POST	/automotores	Crea un nuevo automotor y asigna dueño por CUIT. Valida todos los campos.
PUT	/automotores/:dominio	Actualiza datos de un automotor y/o cambia su dueño.
DELETE	/automotores/:dominio	Elimina un automotor y su objeto asociado (cascade).

Sujetos
Método	Ruta	Descripción
GET	/sujetos/by-cuit?cuit=	Obtiene un sujeto por CUIT.
POST	/sujetos	Crea un sujeto con CUIT válido y denominación.

Para levantar todo con docker, usar el comando
docker-compose up --build
parados en /mindfactory
