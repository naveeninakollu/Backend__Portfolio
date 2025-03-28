# 🌐 Personal Portfolio Website

### 👤 Solo Project by **Naveen Sai Teja Inakollu**

A full-stack personal portfolio website built to showcase my work, skills, and personality using modern web development technologies.

---

## 🔧 Tech Stack

### 🖥️ Frontend
- **React.js**
- **JSX**
- **Functional Components**
- **Custom Props**

### 🧠 Backend
- **Java Spring Boot**
- **Spring Web**
- **Spring Data MongoDB**

### 💾 Database
- **MongoDB** (NoSQL, JSON-like documents)

---

## 📖 Project Overview

This project is a dynamic, responsive, and interactive **personal portfolio website** built with a modern component-based architecture using **React.js** on the frontend.

The **backend** is powered by **Java Spring Boot**, handling server-side logic and API routes. A **MongoDB database** is used for persistent storage and easy retrieval of data.

Communication between the frontend and backend is achieved through the native `fetch` API, but the architecture is flexible enough to support libraries like **Axios** for future scaling.

---

## 🗂️ Backend Design: Current State & Scalability

⚠️ **Note:**  
To save time during the initial build, only **basic personal details** (e.g., *About Me*, *Contact Info*) are currently stored in MongoDB and retrieved via backend APIs.

✅ **Scalable Design**:  
The backend is modular and can easily be extended to support additional dynamic data such as:

- 💼 Work Experience  
- 🎓 Education  
- 📜 Certifications  
- 🧪 Projects  
- 📬 Contact Submissions  

This structure ensures the portfolio grows with my career while maintaining clean code separation.

---

## 🚀 Project Steps & Implementation

### ✅ Step 1: Build the Frontend
- Designed UI with a clean layout using **React.js**.
- Followed a **component-based approach** for reusability.
- Handled dynamic data rendering using **custom props** and **state hooks**.
- Planned and identified necessary **API calls** for integration.

---

### ✅ Step 2: Set Up the Backend
- Initialized a **Spring Boot** project.
- Included required dependencies:
  - `spring-boot-starter-web`
  - `spring-boot-starter-data-mongodb`
- Built **RESTful API endpoints** to handle CRUD operations.

---

### ✅ Step 3: Integrate MongoDB
- Created collections in **MongoDB Atlas**.
- Configured MongoDB URI in `application.properties`:
spring.data.mongodb.uri=mongodb+srv://<username>:<password>@<cluster>.mongodb.net/<dbname>

yaml
Copy
Edit
- Tested backend endpoints using **Postman** and browser.

---

### ✅ Step 4: Connect Frontend to Backend
- Used the **native `fetch` API** in React to call backend endpoints.
- Dynamically rendered fetched data into UI (e.g., About section).
- Fully supports swapping in **Axios** if needed.

---

### ✅ Step 5 (Optional): Testing (For Future Enhancement)
- **Backend**: Setup for unit/integration testing using **JUnit** and **Mockito**.
- **Frontend**: Compatible with testing tools like **Cypress** and **React Testing Library**.

---

### ✅ Step 6: Deployment
- **Frontend**: Can be deployed on:
- Vercel
- Netlify
- GitHub Pages

- **Backend**: Can be deployed using:
- Render
- Heroku
- AWS EC2 instance

- Managed sensitive data via **environment variables**.

---

## 👋 About Me

Here’s a little bit about my work style and mindset:

- 🌱 **Continuous Learner**  
I enjoy learning by doing, exploring new tools, and growing with each challenge.

- 🙋‍♂️ **Takes Initiative**  
I don’t wait around — I step up, take ownership, and deliver.

- 🛠️ **Progress Over Perfection**  
I believe in iterative development and learning from feedback.

- 💬 **Clear Communicator**  
I prioritize clarity, collaboration, and transparency.

- 📚 **Detail-Oriented**  
From code to documentation — I care about both how and what I build.

- 🤝 **Team-Focused**  
I build trust by being reliable, proactive, and mission-driven.

---

## 🙏 Final Note

Thank you for reviewing my portfolio project!  
Looking forward to feedback, contributions, and growing this further! 🚀

---
