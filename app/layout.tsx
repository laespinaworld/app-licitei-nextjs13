import "../styles/globals.css";


export default function RootLayout({ children }: {
  children: React.ReactNode;
}) {

    
  return (
    <html lang="pt_BR">
        
      <body>
      
        {children}
        </body>
    </html>
  );
}