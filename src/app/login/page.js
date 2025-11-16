import Image from 'next/image';
import "./globals.css";
export const metadata = {
  title: 'vDiet',
};

export default function Home() {
  return (
            <main>
              <div id='anuncio1'>
                <p id='setas'>&lt;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&gt;</p>
                <Image src='/salada.png' alt="Salada" id='salada' width={200} height={200}/>
              <div className="textoBox">
                <span>Refeições na medida</span>
                <span>para sua dieta!</span>
              </div>
              </div>
              <div id='titulo1'>Tudo para facilitar sua dieta</div>
              <div id='subtitulo1'>Veja as comedorias mais próximas de você.</div>
              <Image src='/pin.png' alt='Pin' id='pin' className='pesquisa' width={26.723} height={40}/>
              <input type='text' id='pesquisa1' className='pesquisa' placeholder='Diga seu endereço'></input>
  
            </main>
  );
}
