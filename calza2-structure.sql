CREATE DATABASE calza2;
  
CREATE TABLE `calza2`.`brands` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`));
  
CREATE TABLE `calza2`.`colors` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`));
  
CREATE TABLE `calza2`.`categories` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`));
  
CREATE TABLE `calza2`.`users` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `user` VARCHAR(45) NOT NULL,
  `password` VARCHAR(90) NOT NULL,
  `email` VARCHAR(45) NOT NULL,
  `img` VARCHAR(60) NULL,
  PRIMARY KEY (`id`));
  
  CREATE TABLE `calza2`.`products` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `model` VARCHAR(45) NOT NULL,
  `price` INT NOT NULL,
  `description` TEXT NULL DEFAULT 'El producto no tiene una descripcion todavia.',
  `img` VARCHAR(45) NULL,
  `category` INT NOT NULL,
  `color` INT NOT NULL,
  `destacada` TINYINT NULL DEFAULT 0,
  `brand` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `id_category_idx` (`category` ASC) ,
  INDEX `id_color_idx` (`color` ASC) ,
  INDEX `id_brand_idx` (`brand` ASC) ,
  CONSTRAINT `id_brand`
    FOREIGN KEY (`brand`)
    REFERENCES `calza2`.`brands` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `id_color`
    FOREIGN KEY (`color`)
    REFERENCES `calza2`.`colors` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `id_category`
    FOREIGN KEY (`category`)
    REFERENCES `calza2`.`categories` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);
