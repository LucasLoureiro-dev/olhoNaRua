CREATE DATABASE IF NOT EXISTS OlhoNaRua;
-- Usar banco de dados
USE OlhoNaRua;
 
-- Tabela Usuarios
CREATE TABLE IF NOT EXISTS Usuarios(
	Id INT PRIMARY KEY AUTO_INCREMENT,
    Nome VARCHAR(255) NOT NULL,
    Email VARCHAR(255) NOT NULL,
    Senha VARCHAR(150) NOT NULL,
    Cargo VARCHAR(100) NOT NULL
);
 
-- Inserir dados na tabela Usuarios
INSERT INTO Usuarios (Nome, Email, Senha, Cargo) VALUES
		("Arthur", 'arthur.benedetti@gmail.com', 'arthurB123', 'Admin'),
		("Lucas", 'lucas.loureiro@gmail.com', 'lucasL123', 'Usuario'),
		("Eduarda", 'duda.pinho@gmail.com', 'eduardaP123', 'Usuario');
 
-- Tabela Denuncias
CREATE TABLE IF NOT EXISTS Denuncias (
    id INT PRIMARY KEY AUTO_INCREMENT,
    Motivo VARCHAR(255) NOT NULL,
    Descricao VARCHAR(255) NOT NULL,
    Localizacao VARCHAR(255) NOT NULL,
    id_Usuario INT,
    Estado ENUM('Para analise', 'Em andamento', 'Concluida') NOT NULL,
    Foto VARCHAR(255) NOT NULL,
    FOREIGN KEY (id_Usuario) REFERENCES Usuarios(Id)
);
-- Inserir dados na tabela Denuncias
INSERT INTO Denuncias (Motivo, Descricao, Localizacao,  id_usuario, Estado, Foto) VALUES
		('Arvore Caida', 'Arvore caida na praça Verde', 'Rua Benedetido Gonsalves', '2', 'Em andamento','Arvore.jpg'),
		('Alagamento', 'Alagamento gerado pela chuva de ontem', 'Rua Alvarez da silva', '1', 'Concluida','Alagamento.jpg'),
        ('Entulho', 'Entulho no acostamento da Avenida sul', 'Avenida sul', '3', 'Para analise',''),
		('Saneamento', 'Falta de saneamento da rua das flores', 'Rua das Flores 650', '3', 'Para analise','')
        