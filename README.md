# portfolio

a modern, interactive, and responsive personal portfolio website built to showcase projects, skills, and experience.

## Live Demo

Check out the live website here: **[https://vsallzportfolio.my.id](https://vsallzportfolio.my.id)**

## Features

- **modern UI/UX**: sleek design with premium aesthetics, carefully curated typography, and smooth micro-interactions.
- **interactive animations**: powered by Framer Motion for scroll reveals, hover effects, and fluid modal transitions.
- **project showcase**: detailed project cards with technology stack tags, features lists, and links to source code / live demos. (Includes support for private repositories).
- **responsive design**: Fully optimized for mobile, tablet, and desktop viewing (includes a responsive infinite-scroll slider for mobile).

## Tech Stack

- **framework**: [Next.js](https://nextjs.org/) (App Router)
- **language**: [TypeScript](https://www.typescriptlang.org/)
- **styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)

## 💻 Getting Started

First, clone the repository and install the dependencies:

```bash
# Clone the repository
git clone https://github.com/vsalcoder/portofoliov2.git

# Navigate to the project directory
cd portofoliov2

# Install dependencies
npm install
# or yarn install / pnpm install
```

Then, run the development server:

```bash
npm run dev
# or yarn dev / pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 📁 Project Structure

- `app/`: Next.js App Router pages and layouts.
- `components/`: Reusable React components (animations, UI elements, etc.).
- `public/`: Static assets such as images and icons.

## Sal AI / Groq setup

The portfolio includes a streaming **Sal AI Assistant**. The browser calls `/api/chat`, while the Groq API key stays on the server. Groq's OpenAI-compatible API uses `https://api.groq.com/openai/v1`.

Create a local `.env.local` file (do not commit it):

```env
GROQ_API_KEY=your_groq_api_key_here
GROQ_MODEL=openai/gpt-oss-20b
```

For Vercel, add `GROQ_API_KEY` in **Project Settings → Environment Variables**, then redeploy. Do **not** prefix it with `NEXT_PUBLIC_`, because the key must remain server-side.

The default model is `openai/gpt-oss-20b`; it can be changed with `GROQ_MODEL`.

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).
