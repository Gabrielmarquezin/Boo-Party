import { Footer } from './components/rodape/footer'
import { Contatos } from './pages/contatos'
import { Home } from './pages/home'
import { Pagamento } from './pages/pagamento'
import { Regras } from './pages/regras'


function App() {

  return (
    <>
    <Home />
    <main className="relative flex flex-col gap-[150px] pl-[50px] pr-[50px] tablet:pl-[20px] tablet:pr-[20px] bg-black z-[3] pb-[200px]">
      <Regras />
      <Contatos />
      <Pagamento />
    </main>
    <Footer />  
    </>
  )
}

export default App
