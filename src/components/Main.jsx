import dragon from '../../src/assets/dragon.png'
import hipogrifo from '../../src/assets/hipogrifo.png'
import houses from '../../src/assets/houses.png'

export default function Main () {
  return (
    <main className="flex justify-between bg-slate-800">
      <section className="w-1/4 h-screen flex items-center">
        <img className="h-96" src={dragon} alt=""/>
      </section>

      <section className="w-1/4 h-screen flex items-center">
        <img className="h-80" src={houses} alt=""/>
      </section>

      <section className="w-1/4 h-screen flex items-center">
        <img className="h-96 flex justify-center" src={hipogrifo} alt=""/>
      </section>
    </main>
  )
}