# MemoTag - AI-Powered Dementia Care Platform

A modern, responsive website for MemoTag, an AI-powered platform that helps caregivers monitor and support individuals with dementia through advanced tracking and assistance.

## Features

- 🎨 Modern, responsive design with dark mode support
- ⚡ Built with Next.js and Tailwind CSS
- 🎭 Smooth animations using Framer Motion
- 📱 Mobile-first approach
- 🌙 Dark mode toggle with system preference detection
- 📝 Contact form (Supabase integration ready)

## Tech Stack

- **Frontend:**

  - Next.js 14
  - TypeScript
  - Tailwind CSS
  - Framer Motion
  - React Icons

- **Backend (Optional):**
  - Supabase
  - PostgreSQL

## Getting Started

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/memotag.git
   cd memotag
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Create a `.env.local` file in the root directory and add your Supabase credentials (if using):

   ```
   NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
   ```

4. Run the development server:

   ```bash
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
memotag/
├── src/
│   ├── app/
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   └── globals.css
│   └── components/
│       ├── Hero.tsx
│       ├── Problem.tsx
│       ├── Solution.tsx
│       ├── Traction.tsx
│       ├── Contact.tsx
│       └── ThemeToggle.tsx
├── public/
├── package.json
└── README.md
```

## Deployment

The site can be easily deployed to Vercel:

1. Push your code to GitHub
2. Import your repository to Vercel
3. Configure your environment variables
4. Deploy!

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Design inspiration from [OnePageLove](https://onepagelove.com/)
- Icons from [Heroicons](https://heroicons.com/)
- Font from [Google Fonts](https://fonts.google.com/)
