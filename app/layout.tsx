import type { Metadata, Viewport } from "next";
import "./globals.css";
import { I18nProvider } from "@/lib/i18n";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#7000ff",
};

export const metadata: Metadata = {
  title: "FrameCut Studio | Professional Video Editing",
  description:
    "Premium video editing studio for creators, brands, and agencies. Fast turnaround, cinematic quality, motion graphics, captions, and social media cuts. 48h delivery.",
  keywords: [
    "video editing",
    "edição de vídeo",
    "motion graphics",
    "social media editing",
    "video studio",
    "content creation",
    "YouTube editing",
    "Reels editing",
    "TikTok editing",
  ],
  authors: [{ name: "FrameCut Studio" }],
  openGraph: {
    title: "FrameCut Studio | Professional Video Editing",
    description:
      "Transform your raw footage into premium content. Fast, professional, and beautiful video editing for creators and brands.",
    type: "website",
    locale: "pt_BR",
    siteName: "FrameCut Studio",
  },
  twitter: {
    card: "summary_large_image",
    title: "FrameCut Studio | Professional Video Editing",
    description:
      "Transform your raw footage into premium content. 48h delivery, cinematic quality.",
  },
  icons: {
    icon: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>▶</text></svg>",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body>
        <I18nProvider>{children}</I18nProvider>
      </body>
    </html>
  );
}
