import type { Metadata } from "next";
import { headers } from "next/headers";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export async function generateMetadata(): Promise<Metadata> {
  const requestHeaders = await headers();
  const host = requestHeaders.get("x-forwarded-host") ?? requestHeaders.get("host") ?? "localhost:3000";
  const protocol = requestHeaders.get("x-forwarded-proto") ?? (host.startsWith("localhost") ? "http" : "https");
  const base = new URL(`${protocol}://${host}`);
  const title = "단국 바이오 아틀라스 | 글로벌 분자·세포생물학 멘토십";
  const description = "세계적 석학과 젊은 연구자를 연결하는 단국대학교 글로벌 분자·세포생물학 미래인재 양성 멘토십 프로그램";
  const image = new URL("/og.png", base);
  return {
    metadataBase: base,
    title,
    description,
    keywords: ["단국대학교", "분자세포생물학", "바이오헬스", "글로벌 멘토십", "연구자 양성"],
    openGraph: { title, description, type: "website", locale: "ko_KR", images: [{ url: image, width: 1792, height: 917, alt: "단국 바이오 아틀라스" }] },
    twitter: { card: "summary_large_image", title, description, images: [image] },
  };
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="ko"><body className={`${geistSans.variable} ${geistMono.variable}`}>{children}</body></html>;
}
