
# 🕊️ Free PS BD

**Free PS BD** is a modern, responsive web application built with **Next.js 15**, providing real-time news, updates, and resources in solidarity with Palestine. Featuring seamless authentication, role-based access control, and a moderated article publishing system, it empowers communities with reliable information.

🌐 **Live Preview**: [Visit the Site »](https://free-ps-bd-next.vercel.app)

---

## 📚 Table of Contents

- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Installation](#-installation)
- [Environment Variables](#-environment-variables)
- [Development](#-development)
- [Deployment](#-deployment)
- [Contributors](#-contributors)
- [License](#-license)

---

## 🚀 Features

- 🎨 **Modern UI** – Styled with Tailwind CSS 4 + Framer Motion
- 📰 **Dynamic News Cards** – With image modals and tagging
- 🔐 **Social Login** – Google, GitHub, and Facebook via `next-auth`
- 👥 **Role-Based Access** – Admin and User dashboards
- ✍️ **Content Workflow** – Submit, approve, and publish articles
- 🌙 **Dark Mode** – Integrated with `next-themes`
- 📬 **Email Notifications** – Powered by Nodemailer

---

## 🛠️ Tech Stack

| Technology       | Description                            |
|------------------|----------------------------------------|
| **Next.js 15**   | Full-stack React framework             |
| **Tailwind CSS** | Utility-first styling framework        |
| **Framer Motion**| Modern animation library               |
| **next-auth**    | Authentication with OAuth support      |
| **Keen Slider**  | Lightweight slider component           |
| **Lucide Icons** | Elegant and scalable SVG icons         |

---

## 📦 Installation

```bash
# 1. Clone the repository
git clone https://github.com/kamrul2006/free-ps-bd-clint.git

# 2. Navigate into the project directory
cd free-ps-bd-clint

# 3. Install dependencies
npm install
````

---

## 🔑 Environment Variables

Create a `.env.local` file in the root directory with the following keys:

```env
# --- NextAuth ---
NEXTAUTH_SECRET=your-secret
NEXTAUTH_URL=https://free-ps-bd-next.vercel.app

# --- OAuth Providers ---
GITHUB_ID=your-github-client-id
GITHUB_SECRET=your-github-client-secret

GOOGLE_CLIENT_ID=your-google-client-id
GOOGLE_CLIENT_SECRET=your-google-client-secret

FACEBOOK_CLIENT_ID=your-facebook-client-id
FACEBOOK_CLIENT_SECRET=your-facebook-client-secret

# --- SMTP for Emails ---
EMAIL_SERVER_USER=you@example.com
EMAIL_SERVER_PASSWORD=your-password
EMAIL_SERVER_HOST=smtp.example.com
EMAIL_SERVER_PORT=465
EMAIL_FROM=no-reply@example.com
```

---

## 🧪 Development

To run the development server:

```bash
npm run dev
```

Then visit: [http://localhost:3000](http://localhost:3000)

---

## 📤 Deployment

**Deployed via Vercel**

Make sure the following are configured in your [Vercel dashboard](https://vercel.com):

* ✅ All required **environment variables**
* ✅ Connected **GitHub repository** for auto-deploy
* ✅ Custom **domain or Vercel subdomain**

---

## 👥 Contributors

**Kamrul Islam Apurba**
📧 [kamrulislamapurba@gmail.com](mailto:kamrulislamapurba@gmail.com)

Feel free to fork, submit issues, or contribute to the project 🙌

---

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).

---

> 🕊️ *In solidarity with Palestine – Free PS BD stands for justice and truth.*

```

---

