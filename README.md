
# 🕊️ Free PS BD

**Free PS BD** is a modern, responsive web application built with **Next.js 15**, providing news, updates, and resources in solidarity with Palestine. The project includes social login (Google, GitHub, Facebook), role-based access, protected routes, and article approval workflows.

## 🌐 Live Site

👉 [Visit Now](https://free-ps-bd-next.vercel.app)

---

## 🚀 Features

- ✅ Modern UI with TailwindCSS & Framer Motion
- 📰 Dynamic news cards with image modals
- 🔒 Auth with `next-auth` (Google, GitHub, Facebook)
- 👤 Role-based routing (user/admin)
- 🗃️ Article submission, approval, and tagging system
- 🌓 Dark theme support with `next-themes`
- 📩 Email support via Nodemailer

---

## 🛠️ Tech Stack

| Tech           | Description                                  |
|----------------|----------------------------------------------|
| Next.js 15     | React framework for SSR/SSG/RSC              |
| Tailwind CSS 4 | Utility-first CSS framework                  |
| next-auth      | Authentication with OAuth providers          |
| Framer Motion  | Smooth animations                            |
| Lucide Icons   | Clean and scalable SVG icons                 |
| Keen Slider    | Lightweight touch slider library             |

---

## 📦 Installation

```bash
# Clone the repo
git clone https://github.com/YOUR_USERNAME/free-ps-bd-clint.git

# Navigate to project folder
cd free-ps-bd-clint

# Install dependencies
npm install
````

---

## 🔑 Environment Variables

Create a `.env.local` file with the following keys:

```env
# NextAuth
NEXTAUTH_SECRET=your-secret
NEXTAUTH_URL=https://free-ps-bd-next.vercel.app

# OAuth Providers
GITHUB_ID=your-github-client-id
GITHUB_SECRET=your-github-client-secret

GOOGLE_CLIENT_ID=your-google-client-id
GOOGLE_CLIENT_SECRET=your-google-client-secret

FACEBOOK_CLIENT_ID=your-facebook-client-id
FACEBOOK_CLIENT_SECRET=your-facebook-client-secret

# SMTP for email (optional)
EMAIL_SERVER_USER=you@example.com
EMAIL_SERVER_PASSWORD=your-password
EMAIL_SERVER_HOST=smtp.example.com
EMAIL_SERVER_PORT=465
EMAIL_FROM=no-reply@example.com
```

---

## 🧪 Development

```bash
# Run local dev server
npm run dev
```

App will be running on: [http://localhost:3000](http://localhost:3000)

---

## 📤 Deployment

Deployed via **Vercel**
✅ Ensure the following in Vercel dashboard:

* Environment variables added
* GitHub connected for auto-deploy
* Domain configured (e.g. `free-ps-bd-next.vercel.app`)

---

## ⚠️ Facebook OAuth Fix

If you're using Facebook Login and see:

> "Can't Load URL: Domain not allowed..."

🔧 Go to [Facebook Developer Console](https://developers.facebook.com/):

* Navigate to: `Settings > Basic`
* Set **App Domains** to:

  ```
  free-ps-bd-next.vercel.app
  ```
* Then go to: `Facebook Login > Settings`

  * Set **Valid OAuth Redirect URIs**:

  ```
  https://free-ps-bd-next.vercel.app/api/auth/callback/facebook
  ```

Save everything and it should work ✅

---

## 📄 License

MIT License © \[Your Name]

```

---

Would you like the README to include screenshots or badges (build status, Vercel deploy, etc.) too?
```
