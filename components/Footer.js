export default function Footer(){
  return (
    <footer className="mt-10 border-t border-slate-200 bg-white/60">
      <div className="container py-6 grid md:grid-cols-3 gap-6">
        <div>
          <div className="text-lg font-bold">IslandWave</div>
          <div className="text-slate-600">Canada-wide service • Vancouver Island roots</div>
        </div>
        <div>
          <div className="font-semibold mb-1">Legal</div>
          <div className="text-slate-700 space-y-1">
            <div><a href="/legal#terms">Terms</a></div>
            <div><a href="/legal#privacy">Privacy</a></div>
            <div><a href="/legal#aup">Acceptable Use</a></div>
          </div>
        </div>
        <div>
          <div className="font-semibold mb-1">Explore</div>
          <div className="text-slate-700 space-y-1">
            <div><a href="/plans">Plans</a></div>
            <div><a href="/marketplace">Marketplace</a></div>
            <div><a href="/community">Community</a></div>
          </div>
        </div>
      </div>
      <div className="container pb-6 text-slate-600">© 2025 IslandWave</div>
    </footer>
  )
}
