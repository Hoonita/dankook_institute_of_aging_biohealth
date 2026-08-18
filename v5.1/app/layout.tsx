import type { Metadata } from "next";
import "./globals.css";

const title = "단국대학교 | 글로벌 분자·세포생물학 멘토십";
const description = "단국노화연구소가 주관하고 세계적 석학과 젊은 연구자를 연결하는 단국대학교 글로벌 분자·세포생물학 미래인재 양성 멘토십 프로그램";

export const metadata: Metadata = {
  title,
  description,
  keywords: ["단국대학교", "단국노화연구소", "Dankook Institute of Aging", "분자세포생물학", "바이오헬스", "글로벌 멘토십", "연구자 양성"],
  openGraph: { title, description, type: "website", locale: "ko_KR" },
  twitter: { card: "summary", title, description },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="ko"><body>{children}</body></html>;
}
