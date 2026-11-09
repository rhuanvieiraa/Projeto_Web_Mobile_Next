/*
Rhuan Vieira de Souza - RA: 10755828
Caio Borges Morato - RA: 10437025
Felipe Del Giudice Menezes - RA: 10726771
*/

import "./globals.css";

export const metadata = {
    title: "Conecta Cidade",
    description: "Plataforma para registro e acompanhamento de problemas urbanos",
};

export default function RootLayout({ children }) {
    return (
        <html lang="pt-BR">
            <body>{children}</body>
        </html>
    );
}