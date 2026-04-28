```md
# Form Builder App

A full-stack web application that allows users to create, manage, and fill dynamic forms without writing code.

---

## 🚀 Features

- Create custom forms with different field types
- Dynamic form rendering based on saved schema
- Submit and store user responses
- View all created forms
- View submitted responses

---

## 🧱 Tech Stack

### Frontend
- React
- CSS

### Backend
- Node.js
- Express

### Database
- MongoDB

---

## 📌 How It Works

1. Admin creates a form with custom fields
2. Form is saved in MongoDB
3. Forms are fetched and displayed on dashboard
4. User fills the form
5. Responses are stored in database
6. Admin can view responses

---

## 📂 Project Structure

```

form-builder-app/
│
├── client/       # React frontend
├── server/       # Node + Express backend

```

---

## ⚙️ Setup Instructions

### 1. Clone the repository

```

git clone [https://github.com/Ruchika-6004/Form-Builder-App.git](https://github.com/Ruchika-6004/Form-Builder-App.git)

```

### 2. Install dependencies

#### Frontend
```

cd client
npm install
npm run dev

```

#### Backend
```

cd server
npm install
node index.js

```

---

## 🌐 API Endpoints

- POST /api/forms → Create form  
- GET /api/forms → Get all forms  
- GET /api/forms/:id → Get single form  
- POST /api/responses → Save response  
- GET /api/responses/:formId → Get responses  

---

## 💡 Future Improvements

- Add authentication
- Add form validation
- Add edit/update form feature
- Improve UI/UX

---

## 📎 Author

Ruchika Sharma
```
