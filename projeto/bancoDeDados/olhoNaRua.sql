CREATE DATABASE IF NOT EXISTS OlhoNaRua;
-- Usar banco de dados
USE OlhoNaRua;
 
-- Tabela Usuarios
CREATE TABLE IF NOT EXISTS Usuarios(
	Id INT PRIMARY KEY AUTO_INCREMENT,
    Nome VARCHAR(255) NOT NULL,
    Email VARCHAR(255) NOT NULL,
    Telefone VARCHAR(15) NOT NULL,
    Senha VARCHAR(150) NOT NULL,
    Cargo VARCHAR(100) NOT NULL
);
 
-- Inserir dados na tabela Usuarios
INSERT INTO Usuarios (Nome, Email, Telefone, Senha, Cargo) VALUES
		("Arthur", 'arthur.benedetti@gmail.com', '11 987654328', '$2a$12$2bUGLYcqrs38QZBPPAMZWeDvLw5Ua4nHt541Zx.plM48K5QS7wctS', 'Admin'),
		("Lucas", 'lucas.loureiro@gmail.com', '14 912345678', '$2a$12$zc6CvaRunYGtkWrE8eWdjuAvTsslPSiAhXMpRRE132XNq6lil0JsG', 'Usuario'),
        ("Mario Garcia Alvez de Sezamo", 'marioGarcia@gmail.com', '14 912876637', '$2a$12$Ry2n/Veq8hDY5vgfycfuw.8jLDwBLqetw8W3bM2rDt3jE6gYjU1JO', 'Usuario'),
		("Eduarda", 'duda.pinho@gmail.com', '22 913579246', '$2a$12$dqLnXomIU.FlWH7X082zY.Aw9T4mq7fUGU35gLYxmNKmJilgdFQ0O', 'Usuario');
 
-- Tabela Denuncias
CREATE TABLE IF NOT EXISTS Denuncias (
    id INT PRIMARY KEY AUTO_INCREMENT,
    Cep VARCHAR(255) NOT NULL,
    Bairro VARCHAR(255) NOT NULL,
    Rua VARCHAR(255) NOT NULL,
    Ponto_de_referencia VARCHAR(400) NOT NULL,
    Data_da_denuncia DATE NOT NULL,
    Relato VARCHAR(400) NOT NULL,
    Email VARCHAR(255) NOT NULL,
    id_Usuario INT,
    Estado ENUM('Para analise', 'Em andamento', 'Concluida') NOT NULL,
    Foto VARCHAR(255),
    FOREIGN KEY (id_Usuario) REFERENCES Usuarios(Id)
);
-- Inserir dados na tabela Denuncias
INSERT INTO Denuncias ( Cep, Bairro, Rua, Ponto_de_referencia, Data_da_denuncia, Relato, Email, id_usuario, Estado, Foto) VALUES
		('03208-020', 'vila lobo', 'Rua Alameda Costa', 'Palmeira alta', '2025/05/30', 'Acumulo de lixo barrando a passagem do trafego', 'lucas.loureiro@gmail.com', '2', 'Para analise','Arvore.jpg'),
        ('03208-020', 'vila lobo', 'Rua Alameda Costa', 'carro quebrado', '2025/05/30', 'Acumulo de lixo barrando a passagem do trafego', 'marioGarcia@gmail.com','3', 'Para analise',''),
		('03208-020', 'vila lobo', 'Rua Alameda Costa', 'Palmeira alta', '2025/05/30', 'Acumulo de lixo barrando a passagem do trafego', 'duda.pinho@gmail.com','4', 'Para analise','')