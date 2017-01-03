DROP DATABASE `cret`;
CREATE DATABASE `cret`;
USE `cret`;


CREATE TABLE IF NOT EXISTS `cret`.`Users` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(50) NOT NULL,
  `username` VARCHAR(45) NOT NULL,
  `email` VARCHAR(45) NOT NULL,
  `password` VARCHAR(45) NOT NULL,
  `isAdmin` TINYINT(1) NOT NULL DEFAULT 0,
  `state` TINYINT(1) NOT NULL DEFAULT 0,
  `dateCreate` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `dateUpdate` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `username_UNIQUE` (`username` ASC),
  UNIQUE INDEX `email_UNIQUE` (`email` ASC))
ENGINE = InnoDB;


CREATE TABLE IF NOT EXISTS `cret`.`Workspaces` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL DEFAULT 'Workspace',
  `dateCreate` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `fechaModificacion` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `idUser` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_WORKSPACES_USUARIOS_idx` (`idUser` ASC),
  CONSTRAINT `fk_WORKSPACES_USUARIOS`
    FOREIGN KEY (`idUser`)
    REFERENCES `cret`.`Users` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


CREATE TABLE IF NOT EXISTS `cret`.`TypeRTU` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


CREATE TABLE IF NOT EXISTS `cret`.`RTU` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  `dateCreate` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `dateUpdate` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `idWorkspace` INT NOT NULL,
  `idTypeRTU` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_RTU_WORKSPACES1_idx` (`idWorkspace` ASC),
  INDEX `fk_RTU_TYPERTU1_idx` (`idTypeRTU` ASC),
  CONSTRAINT `fk_RTU_WORKSPACES1`
    FOREIGN KEY (`idWorkspace`)
    REFERENCES `cret`.`Workspaces` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_RTU_TYPERTU1`
    FOREIGN KEY (`idTypeRTU`)
    REFERENCES `cret`.`TypeRTU` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


CREATE TABLE IF NOT EXISTS `cret`.`typeXML` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


CREATE TABLE IF NOT EXISTS `cret`.`XML` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `content` TEXT NOT NULL,
  `dateCreate` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `dateUpdate` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


CREATE TABLE IF NOT EXISTS `cret`.`RelationXMLtoRTU` (
  `idTypeRTU` INT NOT NULL,
  `idTypeXML` INT NOT NULL,
  `idXML` INT NOT NULL,
  PRIMARY KEY (`idTypeRTU`, `idTypeXML`, `idXML`),
  INDEX `fk_TYPERTU_has_TYPEXML_TYPEXML1_idx` (`idTypeXML` ASC),
  INDEX `fk_TYPERTU_has_TYPEXML_TYPERTU1_idx` (`idTypeRTU` ASC),
  INDEX `fk_TYPERTU_has_TYPEXML_XML1_idx` (`idXML` ASC),
  CONSTRAINT `fk_TYPERTU_has_TYPEXML_TYPERTU1`
    FOREIGN KEY (`idTypeRTU`)
    REFERENCES `cret`.`TypeRTU` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_TYPERTU_has_TYPEXML_TYPEXML1`
    FOREIGN KEY (`idTypeXML`)
    REFERENCES `cret`.`typeXML` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_TYPERTU_has_TYPEXML_XML1`
    FOREIGN KEY (`idXML`)
    REFERENCES `cret`.`XML` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


CREATE TABLE IF NOT EXISTS `cret`.`XMLfromRTU` (
  `idRTU` INT NOT NULL,
  `idXML` INT NOT NULL,
  PRIMARY KEY (`idRTU`, `idXML`),
  INDEX `fk_RTU_XML_XML1_idx` (`idXML` ASC),
  CONSTRAINT `fk_RTU_XML_RTU1`
    FOREIGN KEY (`idRTU`)
    REFERENCES `cret`.`RTU` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_RTU_XML_XML1`
    FOREIGN KEY (`idXML`)
    REFERENCES `cret`.`XML` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


insert into `cret`.`Users`(name, username, email, password, isAdmin, state) values ('admin', 'admin', 'admin@gmail.com', 'admin', 1, 0);
insert into `cret`.`Users`(name, username, email, password, isAdmin, state) values ('jesus', 'jesus', 'jesus@gmail.com', 'jesus', 0, 1);
insert into `cret`.`Users`(name, username, email, password, isAdmin, state) values ('manolo', 'manolo', 'manolo@gmail.com', 'manolo', 0, 1);
insert into `cret`.`Users`(name, username, email, password, isAdmin, state) values ('miguel', 'miguel', 'miguel@gmail.com', 'miguel', 0, 1);
insert into `cret`.`Users`(name, username, email, password, isAdmin, state) values ('juan', 'juan', 'juan@gmail.com', 'juan', 0, 2);
insert into `cret`.`Users`(name, username, email, password, isAdmin, state) values ('paco', 'paco', 'paco@gmail.com', 'paco', 0, 2);

insert into `cret`.`Workspaces`(name, idUser) values('Workspace1', 2);
insert into `cret`.`Workspaces`(name, idUser) values('Workspace2', 2);
insert into `cret`.`Workspaces`(name, idUser) values('Workspace3', 2);
insert into `cret`.`Workspaces`(name, idUser) values('Workspace1', 3);
insert into `cret`.`Workspaces`(name, idUser) values('Workspace1', 4);
insert into `cret`.`Workspaces`(name, idUser) values('Workspace2', 4);
insert into `cret`.`Workspaces`(name, idUser) values('Workspace1', 5);
insert into `cret`.`Workspaces`(name, idUser) values('Workspace2', 5);
insert into `cret`.`Workspaces`(name, idUser) values('Workspace3', 5);
insert into `cret`.`Workspaces`(name, idUser) values('Workspace1', 6);

insert into `cret`.`TypeRTU`(name) values('T300');

insert into `cret`.`RTU`(name, idWorkspace, idTypeRTU) values('RTU1', 1, 1);
insert into `cret`.`RTU`(name, idWorkspace, idTypeRTU) values('RTU2', 1, 1);
insert into `cret`.`RTU`(name, idWorkspace, idTypeRTU) values('RTU1', 2, 1);
insert into `cret`.`RTU`(name, idWorkspace, idTypeRTU) values('RTU1', 3, 1);
insert into `cret`.`RTU`(name, idWorkspace, idTypeRTU) values('RTU2', 3, 1);
insert into `cret`.`RTU`(name, idWorkspace, idTypeRTU) values('RTU3', 3, 1);
insert into `cret`.`RTU`(name, idWorkspace, idTypeRTU) values('RTU1', 4, 1);
insert into `cret`.`RTU`(name, idWorkspace, idTypeRTU) values('RTU1', 5, 1);
insert into `cret`.`RTU`(name, idWorkspace, idTypeRTU) values('RTU1', 6, 1);
insert into `cret`.`RTU`(name, idWorkspace, idTypeRTU) values('RTU2', 3, 1);