import { Jost } from 'next/font/google';
import "./globals.css";
import ChildCom from "./ChildCom";


const jost = Jost({
  subsets: ['latin'],
  weight: ['400', '700'],
});


export const metadata = {
  title: "Food Web",
  description: "Healthy food organisations",
  icons: {
    icon: '/logo-food.avif'
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={jost.className}
      >
        <ChildCom children={children}/>
      </body>
    </html>
  );
}
