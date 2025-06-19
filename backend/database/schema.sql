-- database/schema.sql
-- Brisanje baze ako već postoji (samo za development)
DROP DATABASE IF EXISTS guestbook;

-- Kreiranje baze
CREATE DATABASE guestbook CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- Kreiranje korisnika (samo ako ne postoji)
CREATE USER IF NOT EXISTS 'guestbook_user'@'localhost' IDENTIFIED BY 'securepassword123';

-- Dodela privilegija
GRANT ALL PRIVILEGES ON guestbook.* TO 'guestbook_user'@'localhost';
GRANT PROCESS ON *.* TO 'guestbook_user'@'localhost';
FLUSH PRIVILEGES;

-- Korišćenje baze
USE guestbook;

-- Kreiranje tabele messages sa boljim praktikama
CREATE TABLE IF NOT EXISTS messages (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  message TEXT NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  
  -- Dodatni indeksi za bolju performansu
  INDEX idx_created_at (created_at),
  INDEX idx_name (name(10)) -- Prefix index za name
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Dodatna provera
SHOW TABLES;
SELECT USER(), CURRENT_USER();