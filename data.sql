USE horizonx_db;

INSERT INTO roles (name) VALUES
('cliente'),
('administrador');

INSERT INTO `colors` (`name`, `cod_hex`) VALUES
  ('Negro', '#000000'),
  ('Blanco', '#FFFFFF'),
  ('Rojo', '#FF0000'),
  ('Verde', '#00FF00'),
  ('Azul', '#0000FF'),
  ('Amarillo', '#FFFF00');

INSERT INTO categories (name) VALUES
('Celular'),
('Accesorio')

INSERT INTO brands (name) VALUES
('Samsung'),
('Motorola'),
('Apple'),
('Xiaomi'),
('Huawei');