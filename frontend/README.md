# 📝 Guestbook Application

A full-stack guestbook app built with:

- ⚛️ React + TypeScript + Vite (frontend)
- 🔧 Node.js + Express + Sequelize + TypeScript (backend)
- 🛢️ MySQL (database)

Visitors can view the latest messages and post their own via a simple interface.  
This app is designed to be **easy to maintain even by 50+ developers**.

---

## ⚙️ Prerequisites

Before starting, make sure you have installed:

- Node.js >= 18
- npm >= 9
- MySQL Server

---

## 🗄️ MySQL Setup

1. Pokreni sledeći SQL kod u MySQL konzoli iz ovog fajla: C:\Users\djole\Desktop\guestbook\backend\database\schema.sql

2. Pokreni sledeći SQL kod u MySQL konzoli iz ovog fajla(opciono Testpodaci): C:\Users\djole\Desktop\guestbook\backend\database\populateShema.sql


🚀 Backend Setup
Uđi u backend folder:

bash
Copy
Edit
cd backend
Instaliraj zavisnosti:

bash
Copy
Edit
npm install
Kreiraj .env fajl:

env
Copy
Edit
DB_HOST=localhost
DB_USER=guestbook_user
DB_PASSWORD=securepassword123
DB_NAME=guestbook
PORT=3001
NODE_ENV=development


Pokreni server: npm run dev


📦 Backend Dependencies
Glavne:

express

sequelize

sequelize-typescript

mysql2

dotenv

cors

body-parser

reflect-metadata

Dev:

typescript

ts-node

ts-node-dev

@types/express

@types/node

@types/cors

@types/body-parser


🌐 API Endpoints
Method	Endpoint	Description
GET	/api/messages	Vrati poslednjih 10 poruka
POST	/api/messages	Kreiraj novu poruku
GET	/api/health	Provera dostupnosti servera


💻 Frontend Setup
Uđi u frontend folder:

bash
Copy
Edit
cd ../frontend
Instaliraj zavisnosti:

bash
Copy
Edit
npm install
Pokreni frontend:

bash
Copy
Edit
npm run dev
Frontend će raditi na: http://localhost:5173



📦 Frontend Dependencies
Glavne:

react

react-dom

react-router-dom

axios

Dev:

vite

typescript

@vitejs/plugin-react

@types/react

@types/react-dom

@types/node

🧾 Funkcionalnosti
🏠 Home Page (/)
Prikazuje naslov “Guestbook”

Tekst: “See what people wrote about us and feel free to leave a message.”

Prikazuje poslednjih 10 poruka

Dugme “Leave a message” vodi na Message Page

✉️ Message Page (/message)
Forma sa poljima:

Message

Name

Dugme “Post”

On submit:

Disablovanje dugmeta

Prikaz statusa (“Sending”, “Success”, “Failed”)

Validacija unosa

Obrada mrežnih grešaka

✅ Validacija
Na backendu:

name i message su obavezni

name max 100 karaktera

Sequelize validacije + Express middleware

Na frontendu:

Polja ne mogu biti prazna

Onemogućeno više slanja dok traje zahtev