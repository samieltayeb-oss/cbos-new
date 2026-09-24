import type { Metadata } from 'next';
import { Tajawal, Cairo, Inter, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import { LanguageProvider } from '@/lib/languageContext';
import ShellWrapper from '@/components/layout/ShellWrapper';

// NIPS 8080 Dashboard Sans Arabic Font - Tajawal (Weights: 400, 500, 700, 800)
const tajawal = Tajawal({
  subsets: ['arabic', 'latin'],
  weight: ['400', '500', '700', '800'],
  variable: '--font-tajawal',
  display: 'swap',
});

// NIPS 8080 Dashboard Display Arabic Font - Cairo (Weights: 400, 600, 700, 800, 900)
const cairo = Cairo({
  subsets: ['arabic', 'latin'],
  weight: ['400', '600', '700', '800', '900'],
  variable: '--font-cairo',
  display: 'swap',
});

// Canonical Latin UI Font - Inter (Weights: 400, 500, 600, 700, 800)
const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-inter',
  display: 'swap',
});

// Financial Tabular Figures Font - JetBrains Mono (Weights: 400, 600, 700)
const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--font-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'بنك السودان المركزي — البوابة الرقمية الرسمية | Central Bank of Sudan',
  description: 'الموقع الرقمي الرسمي الموحد لبنك السودان المركزي: الاستقرار النقدي، الرقابة المصرفية، أسعار الصرف، والمقسم القومي للمدفوعات الفورية (NIPS).',
  keywords: ['بنك السودان المركزي', 'CBOS', 'Central Bank of Sudan', 'أسعار الصرف', 'السياسة النقدية', 'NIPS', 'الجنيه السوداني'],
  authors: [{ name: 'Central Bank of Sudan' }],
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/icon.png', type: 'image/png', sizes: '512x512' },
    ],
    apple: '/apple-touch-icon.png',
    shortcut: '/favicon.ico',
  },
  openGraph: {
    title: 'Central Bank of Sudan — Official Sovereign Platform',
    description: 'Monetary stability, financial sector supervision, official exchange rates, and national payment systems.',
    url: 'https://cbos-new.vercel.app',
    siteName: 'Central Bank of Sudan',
    locale: 'ar_SD',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html 
      lang="ar" 
      dir="rtl" 
      className={`scroll-smooth ${tajawal.variable} ${cairo.variable} ${inter.variable} ${jetbrainsMono.variable}`}
    >
      <body className="bg-cbos-ivory text-cbos-ink antialiased selection:bg-cbos-gold selection:text-cbos-ink min-h-screen">
        <LanguageProvider>
          <ShellWrapper>{children}</ShellWrapper>
        </LanguageProvider>
      </body>
    </html>
  );
}
