import Image from 'next/image';
import Link from "next/link";
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
              <div id='maisPedidos'>
                <p>Mais Pedidos</p>
                <div id='caixaDoPoke' className='container'>
                  <Image src='/poke.jpg' alt='Poke' id='poke' width={280} height={180}></Image>
                </div>
                <div id='caixaSalada' className='container'>
                  <Image src='/saladaCaesar.jpg' alt='Caesar' id='caesar' width={265} height={191}></Image>
                </div>
                <div id='caixaCarne' className='container'>
                  <Image src='/carneComLegumes.jpg' alt='Carne' id='carne' width={324} height={156}></Image>
                </div>
              </div>
              <span id='pokeTexto' className='nomeComida'>Poke de Salmão</span>
              <span id='saladaTexto' className='nomeComida'>Salada Caesar</span>
              <span id='carneTexto' className='nomeComida'>Carne com Legumes</span><br></br>
              <span id='pokePreco'className='precoComida'>R$ 25,90</span>
              <span id='saladaPreco' className='precoComida'>R$ 19,90</span>
              <span id='carnePreco' className='precoComida'>R$ 32,90</span>
            </main>
  );
}
