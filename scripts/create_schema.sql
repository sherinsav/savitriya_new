CREATE DATABASE savitriya;

CREATE TABLE shop (
  shop_id INT NOT NULL AUTO_INCREMENT,
  shop_name VARCHAR(45) NOT NULL,
  shop_phone1 VARCHAR(45) NULL,
  shop_phone2 VARCHAR(45) NULL,
  shop_email VARCHAR(45) NULL,
  shop_website VARCHAR(45) NULL,
  shop_time VARCHAR(45) NULL,
  shop_address VARCHAR(100) NULL,
  PRIMARY KEY (shop_id));

