CREATE DATABASE horizonx_db;

USE horizonx_db;

CREATE TABLE `users` (
   `id` INT AUTO_INCREMENT,
   `first_name` VARCHAR(50) NOT NULL,
   `last_name` VARCHAR(50) NOT NULL,
   `email` VARCHAR(100) NOT NULL,
   `avatar` VARCHAR(100) NOT NULL,
   `password` VARCHAR(100) NOT NULL,
   `role_id` INT NOT NULL,
   PRIMARY KEY (`id`)
);

CREATE TABLE `roles` (
   `id` INT AUTO_INCREMENT,
   `name` VARCHAR(20) NOT NULL,
   PRIMARY KEY (`id`)
);

CREATE TABLE `products` (
   `id` INT AUTO_INCREMENT,
   `name` VARCHAR(255) NOT NULL,
   `description` TEXT NOT NULL,
   `price` DECIMAL(10,2) NOT NULL,
   `stock_quantity` INT NOT NULL,
   `brand_id` INT NOT NULL,
   `category_id` INT NOT NULL,
   `color_id` INT NOT NULL,
   PRIMARY KEY (`id`)
);

CREATE TABLE `colors` (
   `id` INT AUTO_INCREMENT,
   `name` VARCHAR(50) NOT NULL,
   `cod_hex` VARCHAR(10) NOT NULL,
   PRIMARY KEY (`id`)
);

CREATE TABLE `categories` (
   `id` INT AUTO_INCREMENT,
   `name` VARCHAR(50) NOT NULL,
   PRIMARY KEY (`id`)
);

CREATE TABLE `brands` (
   `id` INT AUTO_INCREMENT,
   `name` VARCHAR(50) NOT NULL,
   PRIMARY KEY (`id`)
);

CREATE TABLE `product_images` (
   `id` INT AUTO_INCREMENT,
   `product_id` INT NOT NULL,
   `image_filename` VARCHAR(255) NOT NULL,
   PRIMARY KEY (`id`)
);

CREATE TABLE `shopping_carts` (
   `id` INT AUTO_INCREMENT,
   `user_id` INT NOT NULL,
   `total_price` DECIMAL(10,2) NOT NULL,
   PRIMARY KEY (`id`)
);

CREATE TABLE `cart_items` (
   `id` INT AUTO_INCREMENT,
   `cart_id` INT NOT NULL,
   `product_id` INT NOT NULL,
   `quantity` INT NOT NULL,
   PRIMARY KEY (`id`)
);


ALTER TABLE `users` ADD CONSTRAINT `FK_4ad457e8-6f61-4cd4-879d-b2a76adef2be` FOREIGN KEY (`role_id`) REFERENCES `roles`(`id`)  ;

ALTER TABLE `products` ADD CONSTRAINT `FK_f33df3fe-0cf5-4474-b2ef-b519eb05f280` FOREIGN KEY (`brand_id`) REFERENCES `brands`(`id`)  ;

ALTER TABLE `products` ADD CONSTRAINT `FK_3bf28220-d8a4-4a16-9ae0-0eacb40cdd8f` FOREIGN KEY (`category_id`) REFERENCES `categories`(`id`)  ;

ALTER TABLE `products` ADD CONSTRAINT `FK_b4b33f45-55b8-4528-a1e8-032fb929680a` FOREIGN KEY (`color_id`) REFERENCES `colors`(`id`)  ;

ALTER TABLE `product_images` ADD CONSTRAINT `FK_9ad62408-0289-4a50-a806-e8469c9cfdea` FOREIGN KEY (`product_id`) REFERENCES `products`(`id`)  ;

ALTER TABLE `shopping_carts` ADD CONSTRAINT `FK_a0796881-0c13-4e7a-895f-241c3dbdd507` FOREIGN KEY (`user_id`) REFERENCES `users`(`id`)  ;

ALTER TABLE `cart_items` ADD CONSTRAINT `FK_a80c3104-f2de-46ac-9913-18eec14ad0a8` FOREIGN KEY (`cart_id`) REFERENCES `shopping_carts`(`id`)  ;

ALTER TABLE `cart_items` ADD CONSTRAINT `FK_575ebe94-7b8f-4bfa-899a-d37ad19bd4c2` FOREIGN KEY (`product_id`) REFERENCES `products`(`id`) ON DELETE CASCADE ;
