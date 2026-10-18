# Portfolio Website

A modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS. Showcase your projects, skills, and experience with a beautiful and professional design.

## 🌐 Live Demo

This project is deployed on Vercel. Visit the live site: [View Live](https://your-portfolio.vercel.app)

> **Note**: Replace `your-portfolio.vercel.app` with your actual Vercel deployment URL.

## 🚀 Features

- **Responsive Design**: Fully responsive layout that works on all devices
- **Modern UI**: Built with shadcn-ui components and Tailwind CSS
- **TypeScript**: Type-safe code for better development experience
- **Fast Performance**: Optimized with Vite for lightning-fast builds
- **Sections**: Hero, About, Skills, Projects, Services, Blog, and Contact sections

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v20 or higher) - [Download Node.js](https://nodejs.org/)
- **npm** (comes with Node.js) or **bun** (optional)

If you need to manage multiple Node.js versions, consider using [nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

## 🛠️ Installation

Follow these steps to set up the project locally:

```sh
# Step 1: Clone the repository
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory
cd Portfolio-main

# Step 3: Install the necessary dependencies
npm install
# or if you're using bun
bun install

# Step 4: Configure the contact-form email server
cp .env.example .env

# Step 5: Start the React app and email server
npm run dev
# or with bun
bun run dev
```

The React app will start at `http://localhost:3000` and the email API at
`http://localhost:3001`.

## Contact Form Email Setup

The browser sends contact-form submissions to `/api/send-email`. Nodemailer
sends the message from the server, so the Gmail credentials are never included
in the React bundle.

1. Enable two-step verification on the Google account used to send email.
2. Create a Google App Password for Mail.
3. Copy `.env.example` to `.env` and set:

```env
EMAIL_USER=your-gmail-address@gmail.com
EMAIL_APP_PASSWORD=your-16-character-google-app-password
EMAIL_TO=where-you-want-to-receive-messages@gmail.com
CLIENT_ORIGIN=http://localhost:3000
PORT=3001
```

Use the generated App Password, not your normal Gmail password. Do not commit
the `.env` file.

For Vercel, add `EMAIL_USER`, `EMAIL_APP_PASSWORD`, and `EMAIL_TO` under
Project Settings → Environment Variables. The `api/send-email.ts` serverless
function handles the production request.

## 📜 Available Scripts

- `npm run dev` - Start the React app and local email server
- `npm run dev:client` - Start only the React app
- `npm run dev:server` - Start only the local email server
- `npm run build` - Build for production
- `npm run build:dev` - Build in development mode
- `npm run typecheck` - Check the frontend and server TypeScript
- `npm run preview` - Preview the production build locally
- `npm run lint` - Run ESLint to check for code issues

## 🛠️ Technologies Used

This project is built with:

- **Vite** - Next-generation frontend tooling
- **React** - UI library
- **TypeScript** - Type-safe JavaScript
- **shadcn-ui** - High-quality React components
- **Tailwind CSS** - Utility-first CSS framework
- **React Router** - Client-side routing
- **Lucide React** - Beautiful icon library

## 📁 Project Structure

```
Portfolio-main/
├── public/          # Static assets
├── src/
│   ├── assets/      # Images and other assets
│   ├── components/  # React components
│   │   ├── portfolio/  # Portfolio-specific components
│   │   └── ui/         # shadcn-ui components
│   ├── hooks/       # Custom React hooks
│   ├── lib/         # Utility functions
│   ├── pages/       # Page components
│   ├── App.tsx      # Main App component
│   └── main.tsx     # Entry point
├── package.json
└── README.md
```

## 🚀 Deployment

This project is currently deployed on **Vercel**. Vercel provides automatic deployments, preview deployments for pull requests, and excellent performance optimization.

### Deploy to Vercel (Current)

1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com)
3. Vercel will automatically detect Vite and configure the build settings:
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
   - **Install Command**: `npm install`
4. Click Deploy

Vercel will automatically deploy your site and provide you with a URL. Every push to your main branch will trigger a new deployment.

### Alternative Deployment Options

#### Deploy to Netlify

1. Push your code to GitHub
2. Import your repository on [Netlify](https://netlify.com)
3. Set build command: `npm run build`
4. Set publish directory: `dist`
5. Click Deploy

### Deploy to GitHub Pages

1. Install `gh-pages`: `npm install --save-dev gh-pages`
2. Add to `package.json` scripts:
   ```json
   "predeploy": "npm run build",
   "deploy": "gh-pages -d dist"
   ```
3. Run `npm run deploy`

### Custom Domain

After deploying, you can connect a custom domain:

- **Vercel** (Current): Go to Project Settings > Domains and add your custom domain. Vercel will provide DNS configuration instructions.
- **Netlify**: Go to Site Settings > Domain Management
- **GitHub Pages**: Go to Repository Settings > Pages

## 📝 Customization

1. **Update Personal Information**: Edit the components in `src/components/portfolio/`
2. **Add Projects**: Modify the projects array in `src/components/portfolio/projects-section.tsx`
3. **Change Colors**: Update the theme in `tailwind.config.ts`
4. **Modify Content**: Edit the respective section components

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 Author

Your Name - [Your GitHub](https://github.com/yourusername)

---

Made with ❤️ using React, TypeScript, and Tailwind CSS
