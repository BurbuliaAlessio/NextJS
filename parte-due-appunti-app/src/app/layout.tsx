import type { Metadata } from "next"; // Importa il tipo Metadata per definire i metadati della pagina
import { Geist, Geist_Mono } from "next/font/google"; // Importa i font da Google Fonts con next/font
import "./globals.css"; // Importa il file CSS globale

// Configura il font Geist Sans con una variabile CSS personalizzata
const geistSans = Geist({
  variable: "--font-geist-sans", // Crea una variabile CSS per l'uso nel progetto
  subsets: ["latin"], // Carica solo il subset latino per ridurre il peso del font
});

// Configura il font Geist Mono con una variabile CSS personalizzata
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Definisce i metadati della pagina, che verranno usati automaticamente da Next.js
export const metadata: Metadata = {
  title: "Create Next App", // Titolo della pagina
  description: "Generated by create next app", // Descrizione per SEO e condivisione
};

// Definisce il layout principale dell'applicazione
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en"> {/* Specifica la lingua della pagina */}
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`} // Applica i font e migliora la resa del testo
      >
        <main className="container mx-auto px-12"> {/* Wrapper per il contenuto con padding e margini */}
          {children} {/* Renderizza i componenti figli */}
        </main>
      </body>
    </html>
  );
}