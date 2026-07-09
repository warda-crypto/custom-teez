import { MapPin, Clock, Sparkles, Shirt, Star, CreditCard, Languages } from 'lucide-react'

const designs = [
  {name:'Nipsey Hussle', cat:'Music / Rappers', product:'Hoodie Full Front'},
  {name:'NBA YoungBoy', cat:'Music / Rappers', product:'T-Shirt / Hoodie'},
  {name:'Backwoods Cartoon', cat:'Cartoon', product:'T-Shirt Front'},
  {name:'One Piece Luffy', cat:'Anime', product:'T-Shirt Front'},
  {name:'Jesus My Lifeguard', cat:'Religious', product:'Hoodie Full Hoodie'},
  {name:'Dragon Ball Z', cat:'Anime', product:'T-Shirt Front'}
]

export default function Home(){
  return <main>
    <div className="bg-black border-b border-white/10 text-sm px-6 py-2 flex flex-wrap justify-between gap-3">
      <span className="flex items-center gap-2"><MapPin size={16} className="text-gold"/>Galleria Mall Kiosk - Food Court, Warner Robins, GA</span>
      <span className="flex items-center gap-2"><Clock size={16} className="text-gold"/>Mon-Sat 10AM-8PM • Sun 12PM-6PM</span>
      <span className="flex items-center gap-2"><Languages size={16} className="text-gold"/>EN / ES / AR</span>
    </div>
    <nav className="px-6 py-5 flex items-center justify-between border-b border-white/10 bg-[#0b0b0b] sticky top-0 z-20">
      <div className="text-3xl font-black tracking-tight">CUSTOM <span className="text-gold italic">teez</span></div>
      <div className="hidden md:flex gap-8 text-sm font-semibold"><a>Design Studio</a><a>Premade Designs</a><a>Products</a><a>Track Order</a><a>Rewards</a></div>
      <button className="bg-gold text-black px-5 py-3 rounded-full font-bold">Start Order</button>
    </nav>
    <section className="px-6 py-20 grid lg:grid-cols-2 gap-10 items-center bg-[radial-gradient(circle_at_80%_20%,rgba(255,212,0,.22),transparent_35%),#080808]">
      <div>
        <div className="inline-flex items-center gap-2 bg-gold/10 text-gold px-4 py-2 rounded-full mb-6"><Sparkles size={18}/>Same-day custom printing</div>
        <h1 className="text-6xl md:text-8xl font-black leading-none">YOUR DESIGN.<br/><span className="text-gold">YOUR STYLE.</span></h1>
        <p className="text-xl text-white/70 mt-6 max-w-xl">Design online, pay with Cash App or Zelle, and pick up today from your selected branch.</p>
        <div className="flex flex-wrap gap-4 mt-8"><button className="bg-gold text-black px-7 py-4 rounded-xl font-black">Start Designing</button><button className="border border-white/20 px-7 py-4 rounded-xl font-bold">Browse Premade Designs</button></div>
      </div>
      <div className="glass rounded-[2rem] p-8 min-h-[420px] flex items-center justify-center">
        <div className="text-center"><Shirt size={160} className="mx-auto text-gold"/><p className="text-2xl font-black mt-4">Premium Apparel Preview</p><p className="text-white/60">T-Shirts • Hoodies • Bring Your Own</p></div>
      </div>
    </section>
    <section className="px-6 py-14 grid md:grid-cols-4 gap-4 border-y border-white/10 bg-[#0b0b0b]">
      {[['500+','Premade Designs'],['Same Day','Pickup Today'],['WYSIWYP','What You See Is What You Print'],['Rewards','Earn points every order']].map(([a,b])=><div className="glass rounded-2xl p-6" key={a}><div className="text-3xl font-black text-gold">{a}</div><div className="text-white/70 mt-1">{b}</div></div>)}
    </section>
    <section className="px-6 py-16">
      <div className="flex justify-between items-end mb-8"><div><h2 className="text-4xl font-black">Premade Designs</h2><p className="text-white/60">Search, filter, and customize designs.</p></div><button className="text-gold font-bold">View all →</button></div>
      <div className="flex flex-wrap gap-3 mb-8">{['All','Anime','Music','Cartoon','Religious','Streetwear','Hoodies','T-Shirts'].map(x=><button className="px-5 py-3 rounded-full bg-white/8 border border-white/10" key={x}>{x}</button>)}</div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">{designs.map((d,i)=><div className="glass rounded-3xl overflow-hidden" key={d.name}><div className="h-56 bg-gradient-to-br from-zinc-900 to-zinc-700 flex items-center justify-center"><Star className="text-gold" size={80}/></div><div className="p-5"><div className="text-xs text-gold font-bold">{d.cat}</div><h3 className="text-xl font-black mt-1">{d.name}</h3><p className="text-white/60 text-sm">{d.product}</p></div></div>)}</div>
    </section>
    <section className="px-6 py-16 bg-[#0b0b0b] grid md:grid-cols-3 gap-5">
      <div className="glass rounded-3xl p-7"><CreditCard className="text-gold"/><h3 className="text-2xl font-black mt-4">Payment Protection</h3><p className="text-white/60 mt-2">Orders enter production only after Cash App/Zelle proof is verified.</p></div>
      <div className="glass rounded-3xl p-7"><Sparkles className="text-gold"/><h3 className="text-2xl font-black mt-4">Final Approval</h3><p className="text-white/60 mt-2">No refunds. Customer confirms exact placement before payment.</p></div>
      <div className="glass rounded-3xl p-7"><MapPin className="text-gold"/><h3 className="text-2xl font-black mt-4">NFC Ready</h3><p className="text-white/60 mt-2">Tap to design, order, track, and collect rewards.</p></div>
    </section>
  </main>
}
