import Link from 'next/link'
export default function Navbar(){
  return (
    <nav className="sticky top-0 z-40 bg-white/80 backdrop-blur border-b border-slate-200">
      <div className="container flex items-center gap-4 py-3">
        <Link href="/" className="flex items-center gap-2 font-extrabold text-lg">
          <img src="/logo.png" alt="IslandWave" className="h-9 w-9"/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-500">IslandWave</span>
        </Link>
        <div className="ml-auto flex gap-1">
          <Link className="navlink" href="/live">Live</Link>
          <Link className="navlink" href="/plans">Plans</Link>
          <Link className="navlink" href="/beat-your-bill">Beat Your Bill</Link>
          <Link className="navlink" href="/community">Community</Link>
          <Link className="navlink" href="/marketplace">Marketplace</Link>
          <Link className="navlink" href="/legal">Legal</Link>
        </div>
      </div>
    </nav>
  )
}
