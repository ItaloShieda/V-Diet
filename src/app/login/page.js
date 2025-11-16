import Image from 'next/image';
import Link from "next/link";
export const metadata = {
  title: 'vDiet',
};

export default function Home() {
  return (
            <main>
              <div id='caixalogin'>
                <Link href='/'>
                  <h2>&lt;</h2>
                </Link>         
                <h1>LOGIN</h1>
                <p>Nome de usuário, e-mail ou telefone:</p>
                <input type='text' id='usuarioInput'></input>
                <p>Senha:</p>
                <input type='password' id='senhaInput'></input>
                <div id='loginGoogle'>
                  <Image src='/google.png' alt='Google Logo' id='google' width={30} height={30}/>
                  <p>Entrar com o Google</p>
                  <button id='entrar'>Entrar</button>
                </div>
              </div>
            </main>
  );
}
