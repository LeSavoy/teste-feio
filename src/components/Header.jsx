import logo from '../../src/assets/castle-logo.png'

export default function Header () {
  return (
    <div className="flex justify-around gap-60 items-center h-24 text-base font-poppins text-white bg-gradient-to-r from-indigo-700 to-indigo-950">
      <div>
        <a href="#"><img className="w-16" src={logo} alt=""/></a>
      </div>

      <div className="">
        <ol className="flex flex-row gap-8 cursor-pointer">
          <li>Magias</li>
          <li>Varinhas</li>
          <li>Feitiços</li>
          <li>Poções</li>
        </ol>       
      </div>

      <div className="flex ">
          <button className="border-2 bg-white text-black text-base border-white p-1.5 rounded-xl">Avada Kedavra</button>
        </div>
    </div>
  )
}