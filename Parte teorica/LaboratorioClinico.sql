CREATE USER 'LaboratorioPatito'@'%' IDENTIFIED BY 'LabPatito123.';

CREATE DATABASE LaboratorioPatito;
USE LaboratorioPatito;

CREATE TABLE usuario(
	nombre_usuario VARCHAR(25) NOT NULL,
	No_Colegiado VARCHAR(20),
	contraseña VARCHAR(20) NOT NULL,
	tipo INT NOT NULL,
	estado BOOLEAN NOT NULL,
	correo VARCHAR(20) NOT NULL,
	nombre VARCHAR(45) NOT NULL,
	CONSTRAINT PK_USUARIO PRIMARY KEY(nombre_usuario)
);

CREATE TABLE cliente(
	afiliacion VARCHAR(20) NOT NULL,
	sexo CHAR(10) NOT NULL,
	edad INT NOT NULL,
	nombre VARCHAR(45) NOT NULL,
	direccion VARCHAR(45),
	fecha_nacimiento DATE NOT NULL,
	telefono INT NOT NULL,
	correo VARCHAR(20),
	CONSTRAINT PK_CLIENTE PRIMARY KEY(afiliacion)
);

CREATE TABLE medico(
	no_colegiado VARCHAR(20) NOT NULL,
	nombre VARCHAR(45) NOT NULL,
	porcentaje DECIMAL(7,2) NOT NULL,
	CONSTRAINT PK_MEDICO PRIMARY KEY(no_colegiado)
);

CREATE TABLE examen(
	tipo VARCHAR(45) NOT NULL,
	nombre_usuario VARCHAR(25) NOT NULL,
	costo DECIMAL(7,2) NOT NULL,
	fecha_hora DATETIME NOT NULL,
	CONSTRAINT PK_EXAMEN PRIMARY KEY(tipo),
	CONSTRAINT FK_TO_USUARIO FOREIGN KEY(nombre_usuario) REFERENCES usuario(nombre_usuario) ON DELETE CASCADE ON UPDATE CASCADE
);

CREATE TABLE orden(
	afiliacion VARCHAR(20) NOT NULL,
	tipo VARCHAR(45) NOT NULL,
	CONSTRAINT PK_ORDEN PRIMARY KEY(afiliacion,tipo),
	CONSTRAINT FK_TO_EXAMEN FOREIGN KEY(tipo) REFERENCES examen(tipo) ON DELETE CASCADE ON UPDATE CASCADE,
	CONSTRAINT FK_TO_CLIENTE FOREIGN KEY(afiliacion) REFERENCES cliente(afiliacion) ON DELETE CASCADE ON UPDATE CASCADE
);

CREATE TABLE cambio(
	nombre_usuario VARCHAR(25) NOT NULL,
	fecha_hora DATETIME NOT NULL,
	descripcion VARCHAR(300) NOT NULL,
	CONSTRAINT PK_CAMBIO PRIMARY KEY(nombre_usuario,fecha_hora),
	CONSTRAINT FK_TO_USUARIO_CAMBIO FOREIGN KEY(nombre_usuario) REFERENCES usuario(nombre_usuario) ON DELETE CASCADE ON UPDATE CASCADE
);


CREATE TABLE prueba(
	tipo VARCHAR(45) NOT NULL,
	nombre_prueba VARCHAR(45) NOT NULL,
	resultado VARCHAR(100) NOT NULL,
	unidades INT,
	rango_inferior DECIMAL(7,2),
	rango_superior DECIMAL(7,2),
	clinicamente_significativo CHAR(2),
	comentarios VARCHAR(300),
	CONSTRAINT PK_PRUEBA PRIMARY KEY(tipo,nombre_prueba),
	CONSTRAINT FK_TO_EXAMEN_PRUEBA FOREIGN KEY(tipo) REFERENCES examen(tipo) ON DELETE CASCADE ON UPDATE CASCADE
);

GRANT ALL PRIVILEGES  ON LaboratorioPatito.* TO 'LaboratorioPatito'@'%';
ALTER USER 'LaboratorioPatito'@'%' IDENTIFIED WITH mysql_native_password BY 'LabPatito123.';
FLUSH PRIVILEGES;

/*Tipo usuarios:  1: Administracion 2: Laboratorio 3: Secretaria*/
INSERT INTO usuario(nombre_usuario,contraseña,tipo,estado,correo,nombre) VALUES('Yefri1000','2021yefri','1','1','yefrig00@gmail.com','Yefri González');

INSERT INTO usuario(nombre_usuario,No_Colegiado,contraseña,tipo,estado,correo,nombre) VALUES('Annelis','3245','2021Annelis','2','1','Annelis@gmail.com','Annelis Sacalxot');

INSERT INTO usuario(nombre_usuario,contraseña,tipo,estado,correo,nombre) VALUES('MelanniTzul','2021Mel','3','1','melannni@gmail.com','Melanni Tzul');
