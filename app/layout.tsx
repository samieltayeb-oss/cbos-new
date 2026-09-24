import type { Metadata } from 'next';
import './globals.css';
import { LanguageProvider } from '@/lib/languageContext';
import ShellWrapper from '@/components/layout/ShellWrapper';

export const metadata: Metadata = {
  title: 'بنك السودان المركزي — البوابة الرقمية الرسمية | Central Bank of Sudan',
  description: 'الموقع الرقمي الرسمي الموحد لبنك السودان المركزي: الاستقرار النقدي، الرقابة المصرفية، أسعار الصرف، والمقسم القومي للمدفوعات الفورية (NIPS).',
  keywords: ['بنك السودان المركزي', 'CBOS', 'Central Bank of Sudan', 'أسعار الصرف', 'السياسة النقدية', 'NIPS', 'الجنيه السوداني'],
  authors: [{ name: 'Central Bank of Sudan' }],
  icons: {
    icon: '/favicon.ico',
    apple: '/images/cbos/official/cbos-logo-white.png',
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
    <html lang="ar" dir="rtl" className="scroll-smooth">
      <body className="bg-cbos-ivory text-cbos-ink antialiased selection:bg-cbos-gold selection:text-cbos-ink">
        <LanguageProvider>
          <ShellWrapper>{children}</ShellWrapper>
        </LanguageProvider>
      </body>
    </html>
  );
}
