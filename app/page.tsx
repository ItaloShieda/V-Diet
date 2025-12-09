import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header / Navegação */}
      <header className="fixed w-full top-0 z-50 border-b border-black/5 bg-white/80 backdrop-blur-md dark:border-white/10 dark:bg-black/80">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2 font-bold text-xl tracking-tight">
            <span className="text-emerald-500">Voce</span>&Dieta
          </div>
          <nav className="hidden md:flex gap-6 text-sm font-medium text-zinc-600 dark:text-zinc-400">
            <Link href="#funcionalidades" className="hover:text-black dark:hover:text-white transition">Funcionalidades</Link>
            <Link href="#depoimentos" className="hover:text-black dark:hover:text-white transition">Depoimentos</Link>
          </nav>
          <div className="flex gap-4">
            <Link 
              href="/login" 
              className="text-sm font-medium px-4 py-2 rounded-full hover:bg-zinc-100 dark:hover:bg-zinc-800 transition"
            >
              Entrar
            </Link>
            <Link 
              href="/cadastro" 
              className="text-sm font-medium px-4 py-2 rounded-full bg-black text-white hover:bg-zinc-800 dark:bg-white dark:text-black dark:hover:bg-zinc-200 transition"
            >
              Começar agora
            </Link>
          </div>
        </div>
      </header>

      <main className="flex-1 flex flex-col pt-24">
        {/* Hero Section */}
        <section className="relative px-6 py-20 md:py-32 flex flex-col items-center text-center overflow-hidden">
          {/* Background Gradient Effect */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-emerald-500/20 rounded-[100%] blur-3xl -z-10 opacity-30 dark:opacity-20" />

          <div className="max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-600 text-xs font-semibold uppercase tracking-wide dark:text-emerald-400 border border-emerald-500/20">
              🚀 Nova Versão 2.0 Disponível
            </div>
            
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-balance">
              Sua dieta não precisa ser <span className="text-emerald-500">complicada</span>.
            </h1>
            
            <p className="text-lg md:text-xl text-zinc-600 dark:text-zinc-400 text-balance max-w-2xl mx-auto">
              Gerencie calorias, macros e receitas em um único lugar. A tecnologia a favor da sua saúde e bem-estar.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <button className="h-12 px-8 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-semibold transition-transform active:scale-95 shadow-lg shadow-emerald-500/25">
                Criar conta grátis
              </button>
              <button className="h-12 px-8 rounded-full border border-zinc-200 dark:border-zinc-800 hover:bg-zinc-50 dark:hover:bg-zinc-900 font-medium transition-colors">
                Saiba como funciona
              </button>
            </div>
          </div>

          {/* Placeholder da Interface (Dashboard) */}
          <div className="mt-16 w-full max-w-5xl p-2 rounded-2xl bg-gradient-to-b from-zinc-200 to-zinc-50 dark:from-zinc-800 dark:to-zinc-950">
            <div className="aspect-[16/9] w-full bg-white dark:bg-zinc-900 rounded-xl shadow-2xl border border-zinc-200 dark:border-zinc-800 overflow-hidden relative group">
               {/* Simulação de Interface */}
               <div className="absolute inset-0 flex items-center justify-center text-zinc-300 dark:text-zinc-700 font-mono text-sm">
                  [Imagem do Dashboard do App: Gráfico de Calorias + Lista de Refeições]
               </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="funcionalidades" className="py-24 bg-zinc-50 dark:bg-zinc-900/50">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-16">Tudo o que você precisa</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { title: "Controle de Macros", desc: "Monitore proteínas, carboidratos e gorduras automaticamente." },
                { title: "Receitas IA", desc: "Sugestões de receitas baseadas no que você tem na geladeira." },
                { title: "Acompanhamento", desc: "Gráficos de evolução de peso e medidas corporais." }
              ].map((feature, i) => (
                <div key={i} className="p-6 rounded-2xl bg-white dark:bg-black border border-zinc-100 dark:border-zinc-800 shadow-sm hover:shadow-md transition">
                  <div className="w-12 h-12 bg-emerald-100 dark:bg-emerald-900/30 rounded-lg mb-4 flex items-center justify-center text-emerald-600 dark:text-emerald-400">
                    ✦
                  </div>
                  <h3 className="font-semibold text-xl mb-2">{feature.title}</h3>
                  <p className="text-zinc-600 dark:text-zinc-400">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="py-8 border-t border-zinc-200 dark:border-zinc-800 text-center text-zinc-500 text-sm">
        <p>&copy; 2025 Você e Dieta. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}
