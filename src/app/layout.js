import Link from "next/link";
import "./globals.css";
import Image from 'next/image';

export default function RootLayout({ children }) {
  return (
          <html lang="pt-br">
            <body>
              <header id='header1'>
                <Image src="/LOGO.png" alt="Logo" id='logo'width={163.25} height={32.75}/>
                  <div className='cabecalho'>Entregador</div>
                  <div className='cabecalho'>Restaurantes e Vendedores</div>
                  <div className='cabecalho'>Para Empresas</div>
                  <div className='cabecalho' id='criarConta'>Criar Conta</div>
                  <Link href='/login'>
                    <button className='cabecalho' id='entrar'>Entrar</button>
                  </Link>
              </header>
            {children}
              <footer>
                <div id='rodape'>© 2025 - UNINASSAU - feito por João Gabriel, José Ítalo e Letícia Viviane.</div>
              </footer>  
            </body>
          </html>
  );
}
