import type { Metadata } from "next";
import "./globals.css";

const title = "Dankook University | Global Molecular and Cellular Biology Mentorship";
const description = "A Dankook University mentorship program connecting global scholars with emerging researchers in molecular and cellular biology.";

export const metadata: Metadata = {
  title,
  description,
  keywords: ["Dankook University", "Dankook Institute of Aging", "molecular biology", "cell biology", "biohealth", "global mentorship", "research training"],
  openGraph: { title, description, type: "website", locale: "ko_KR" },
  twitter: { card: "summary", title, description },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
