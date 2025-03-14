# Portfolify - Client (Frontend)  
🚀 A dynamic portfolio builder for professionals & creatives.  

🔗 Live Demo: [Portfolify](https://portfolify-project.netlify.app/) 

🔗 Back End Repo: [Repo](https://github.com/Project-Portfolify/portfolify-server)  


## 📌 Project Overview  
Portfolify is a dynamic portfolio management application that enables users to create, customize, and publish their personal portfolios with various templates. Built with **React (Vite)** and styled with **Tailwind CSS**, this front end interacts with the backend via REST API and integrates Cloudinary for media uploads.


## 🔧 Features
- **User authentication** (Login, Register, JWT-based Auth)  
- **Create & manage portfolios** (CRUD operations)  
- **Multiple portfolio templates** 🎨  
- **Image & PDF uploads via Cloudinary** 📁  
- **Fully responsive design** 📱
- **Slug Generation:** Portfolify automatically generates a unique URL (slug) for each portfolio, making sharing their portfolio with potential employers or clients easier.


## 📦 Tech Stack  
- **React (Vite)** – Fast & optimized frontend framework  
- **Tailwind CSS** – Modern styling  
- **Axios** – API requests  
- **Cloudinary** – Image & PDF storage  
- **Authentication Context** – Manages user authentication  
- **Netlify** – Deployment  


## 🚀 Getting Started

### 1️⃣ Clone the Repository
```sh
git clone https://github.com/your-username/portfolify-client.git
cd portfolify-client
```

### 2️⃣ Install Dependencies
```sh
npm install
```

### 3️⃣ Run the Project Locally
```sh
npm run dev
```


### 4️⃣ Set Up Environment Variables
Create a `.env` file in the root directory and add the following:

```env
VITE_API_URL=http://localhost:5000
VITE_CLOUDINARY_URL=your_cloudinary_upload_url
VITE_CLOUDINARY_PRESET=your_upload_preset
VITE_OPENAI_API_KEY=your_openai_api_key
```

### 5️⃣ Build for Production
```sh
npm run build
```

### 5️⃣ Deploy to Netlify

You can manually upload the \`/dist\` folder to **Netlify** or connect your GitHub repository for automatic deployment.


## 🤝 Credits
All credits and rights for the resources, tutorials, and external materials used in this project belong to their respective creators and sources.

---

## 📜 License
This project is built and maintained by Portfolify contributors. All rights belong to the individuals who contributed to its development.
