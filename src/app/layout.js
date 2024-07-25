import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
  title: 'Next.js',
  description: 'The React Framework for the Web',
  openGraph: {
    title: 'Next.js',
    description: 'The React Framework for the Web',
    url: 'https://nextjs.org',

   
    locale: 'en_US',
    type: 'website',
  },
  
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
      <meta property="og:image" content="https://ogcdn.net/c078a98b-9a33-4eaf-a5cf-e5ebf3ea450c/v1/app.netlify.com/Netlify%20App/Start%20building%20the%20best%20web%20experiences%20in%20record%20time/https%3A%2F%2Fcdn.theopengraph.com%2Fproduction%2Fdocuments%2Fd564a463-1c51-4259-991d-0d17bf3e0391.jpg%3Ftoken%3D-hKrjcO4EFDmPh0lgxSanJdH2MZ9gYnfw4V87WUckbA%26height%3D800%26width%3D1200%26expires%3D33239188519/og.png"/>
      <meta property="og:image:width" content="1200"/>
      <meta property="og:image:height" content="630"/>
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
