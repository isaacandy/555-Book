import React, { useState, useEffect } from 'react';
import { 
  Plus, 
  Shield, 
  EyeOff, 
  ArrowUpRight, 
  ArrowDownLeft, 
  Settings, 
  Bell, 
  Heart, 
  Zap, 
  Lock, 
  History, 
  X, 
  ChevronRight, 
  Check,
  Share2, 
  CheckCircle, 
  Home, 
  User, 
  MessageSquareHeart, 
  ArrowRight,
  ArrowLeft,
  BookOpen, 
  Target, 
  BarChart3, 
  Users2, 
  ShieldCheck, 
  Coins,
  Beer,
  HelpCircle,
  TrendingUp,
  Globe,
  Wallet,
  Scale
} from 'lucide-react';

/** * 1. LANDING PAGE COMPONENT 
 * A high-conversion entry point featuring the "Roti Man" legacy and the 555 methodology.
 */
const LandingPage = ({ onStart }) => {
  const [balance, setBalance] = useState(50);
  const [showStory, setShowStory] = useState(false);
  const [currentView, setCurrentView] = useState('home');

  const updateBalance = (val) => {
    let newBalance = balance + val;
    if (newBalance > 95) newBalance = 95;
    if (newBalance < 5) newBalance = 5;
    setBalance(newBalance);
  };

  const getStatusText = () => {
    if (balance < 40) return { text: '"You\'re a Hero! They owe you."', color: '#059669' };
    if (balance > 60) return { text: '"Time to pay it back!"', color: '#dc2626' };
    return { text: '"Perfectly Balanced."', color: '#3b82f6' };
  };

  const status = getStatusText();

  const showInternalView = (view) => {
    setCurrentView(view);
    window.scrollTo(0, 0);
  };

  return (
    <div className="min-h-screen bg-[#fdfbd4] text-[#1a1a1a] selection:bg-red-200">
      {/* Nav */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
        <div className="max-w-6xl mx-auto p-4 flex justify-between items-center">
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => showInternalView('home')}>
            <div className="bg-red-600 text-white font-black text-2xl px-2 py-0.5 rounded shadow-sm transform -rotate-2">555</div>
            <span className="font-bold text-lg text-blue-900 uppercase tracking-tighter">Book</span>
          </div>
          <div className="hidden md:flex gap-8 font-semibold text-gray-600 text-sm">
            <a href="#equilibrium" className="hover:text-blue-900 transition-colors">The Balance</a>
            <a href="#vault" className="hover:text-blue-900 transition-colors">The Vault</a>
            <button onClick={() => setShowStory(true)} className="hover:text-red-600 text-red-500 transition font-bold uppercase tracking-widest">The Roti Man Story</button>
          </div>
          <button onClick={onStart} className="bg-blue-900 text-white px-5 py-2 rounded-full font-bold text-sm shadow-lg hover:scale-105 transition uppercase tracking-tighter">Join Beta</button>
        </div>
      </nav>

      {currentView === 'home' && (
        <>
          {/* Hero */}
          <header className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <span className="bg-red-100 text-red-600 font-bold px-3 py-1 rounded-full text-xs uppercase tracking-widest">Digitizing Social Capital</span>
              <h1 className="text-6xl font-black text-blue-900 leading-tight tracking-tighter">
                Track the invisible <br />effort of <span className="text-red-600 italic">love.</span>
              </h1>
              <p className="text-xl text-gray-700 leading-relaxed max-w-lg">
                Inspired by the legendary yellow 555 notebooks, we help you quantify both money and favors to maintain relationship harmony.
              </p>
              <div className="pt-4 flex flex-col sm:flex-row gap-4">
                <button onClick={onStart} className="bg-blue-900 text-white px-10 py-4 rounded-2xl text-lg font-black shadow-xl hover:-translate-y-1 transition active:scale-95">Claim Your Book</button>
                <button onClick={() => showInternalView('manual')} className="bg-white border-2 border-blue-900 text-blue-900 px-10 py-4 rounded-2xl text-lg font-bold hover:bg-blue-50 transition">Read the Manual</button>
              </div>
            </div>

            {/* Notebook Component */}
            <div className="bg-white shadow-2xl rounded-3xl p-8 border-l-[2px] border-[#ff8787] border border-gray-100 relative overflow-hidden" style={{ backgroundImage: 'linear-gradient(#a5d8ff 1px, transparent 1px)', backgroundSize: '100% 2.5rem' }}>
              <div className="flex justify-between items-center mb-6 border-b-2 border-blue-900 pb-2">
                <h3 className="text-2xl font-bold text-blue-900 uppercase tracking-tighter">Live Ledger</h3>
                <span className="text-sm font-bold text-red-400 font-mono">Page 42</span>
              </div>
              <div className="space-y-6 font-mono text-lg text-blue-900">
                <div className="flex justify-between items-center animate-pulse">
                  <span>📢 Grocery Run (Week 4)</span>
                  <span className="text-green-600 font-bold">+1 Fav</span>
                </div>
                <div className="flex justify-between items-center bg-blue-50/50 p-2 rounded-lg border border-blue-100">
                  <span className="flex items-center gap-2"><Lock size={16}/> Saved Face (Work PPT)</span>
                  <span className="text-red-600 font-bold">-5 Face</span>
                </div>
                <div className="h-12"></div>
                <div className="bg-yellow-50 p-4 rounded-xl border border-yellow-200 text-sm italic text-yellow-800">
                  "Thanks for covering for me during the meeting when I forgot my notes. I owe you one big time."
                </div>
              </div>
            </div>
          </header>

          {/* Equilibrium Section */}
          <section id="equilibrium" className="bg-blue-900 text-white py-24 overflow-hidden relative">
            <div className="max-w-4xl mx-auto px-6 text-center">
              <h2 className="text-4xl md:text-5xl font-black mb-6 uppercase tracking-tighter">The Balance HUD</h2>
              <p className="text-blue-200 mb-12 text-lg">Money is simple. Favors are complex. Our algorithm treats them as one unified currency.</p>
              <div className="bg-white/5 p-8 md:p-16 rounded-[3rem] border border-white/10 backdrop-blur-xl">
                <div className="flex justify-between mb-6 font-black text-[10px] uppercase tracking-[0.2em] text-blue-300">
                  <span>Net Giver</span>
                  <span>Perfect Sync</span>
                  <span>Net Taker</span>
                </div>
                <div className="relative h-6 bg-white/10 rounded-full mb-10 border border-white/10">
                  <div className="absolute h-full w-4 bg-white shadow-[0_0_30px_#fff] rounded-full -translate-x-1/2 transition-all duration-500" style={{ left: `${balance}%` }}></div>
                </div>
                <h3 className="text-3xl font-bold mb-10 font-mono uppercase tracking-tight" style={{ color: status.color }}>{status.text}</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  <button onClick={() => updateBalance(-15)} className="bg-white/10 hover:bg-white/20 py-4 rounded-2xl font-bold transition active:scale-95">I did a Favor</button>
                  <button onClick={() => updateBalance(-30)} className="bg-green-500/20 hover:bg-green-500/40 py-4 rounded-2xl font-bold transition active:scale-95">I saved face</button>
                  <button onClick={() => updateBalance(20)} className="bg-red-500/20 hover:bg-red-500/40 py-4 rounded-2xl font-bold transition active:scale-95">They paid</button>
                </div>
              </div>
            </div>
          </section>

          {/* Vault Section */}
          <section id="vault" className="py-24 bg-gradient-to-br from-blue-900 to-black text-white overflow-hidden">
            <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
              <div className="order-2 md:order-1 relative">
                <div className="bg-white/10 p-10 rounded-3xl border border-white/20 backdrop-blur-md relative overflow-hidden group">
                  <div className="absolute top-4 right-4 text-xs text-blue-300 font-mono tracking-widest uppercase">AES-256 Protocol</div>
                  <div className="space-y-6">
                    <div className="flex items-center gap-4 border-b border-white/10 pb-4">
                      <div className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center font-bold">555</div>
                      <div className="flex-1">
                        <div className="h-2 w-24 bg-white/20 rounded"></div>
                        <div className="h-4 w-40 bg-white/40 rounded mt-2"></div>
                      </div>
                      <div className="text-red-400"><ShieldCheck size={24} /></div>
                    </div>
                    <p className="p-4 bg-white/5 rounded-xl border border-white/10 italic text-sm text-blue-100">
                      Private ledgers are never stored in plain text. Your shared secret is generated on-device during the initial handshake.
                    </p>
                  </div>
                </div>
                <div className="absolute -top-6 -left-6 w-20 h-20 bg-red-600 rounded-2xl -rotate-12 flex items-center justify-center text-3xl shadow-2xl animate-bounce">🔒</div>
              </div>
              <div className="order-1 md:order-2 space-y-8">
                <h2 className="text-5xl font-black leading-tight uppercase tracking-tighter">The Vault: <br /><span className="text-red-500 italic text-4xl leading-none font-medium lowercase font-handwriting">saving face privately.</span></h2>
                <p className="text-xl text-blue-100 font-light leading-relaxed">Some favors are too personal for a public wall. The Vault keeps your intimacy protected. Log the quiet help that matters most without any social friction.</p>
                <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white/5 p-4 rounded-2xl border border-white/10">
                        <h4 className="font-bold text-red-400 mb-1">Spicy Rewards</h4>
                        <p className="text-xs text-blue-200">Playful catalogs for partners.</p>
                    </div>
                    <div className="bg-white/5 p-4 rounded-2xl border border-white/10">
                        <h4 className="font-bold text-blue-400 mb-1">Face-Saving</h4>
                        <p className="text-xs text-blue-200">Quantify unspoken support.</p>
                    </div>
                </div>
              </div>
            </div>
          </section>
        </>
      )}

      {currentView === 'manual' && (
        <div className="max-w-6xl mx-auto px-6 py-16 animate-in fade-in duration-500">
          <button onClick={() => showInternalView('home')} className="text-blue-900 font-bold mb-8 flex items-center gap-2 hover:-translate-x-1 transition-transform group">
            <ArrowLeft className="group-hover:text-red-500" /> Back to Home
          </button>
          
          <div className="bg-white rounded-[3rem] shadow-xl p-10 md:p-16 border-l-[2px] border-[#ff8787] border border-gray-100" style={{ backgroundImage: 'linear-gradient(#a5d8ff 1px, transparent 1px)', backgroundSize: '100% 2.5rem' }}>
            <div className="border-b-4 border-red-500 pb-4 mb-12 flex justify-between items-end">
                <h1 className="text-4xl md:text-5xl font-black text-blue-900 uppercase tracking-tighter">555 User Manual</h1>
                <span className="font-mono text-xs text-gray-400 mb-2">REF: UM-2025-X</span>
            </div>

            <div className="grid lg:grid-cols-3 gap-12">
                {/* Visual Key Sidebar */}
                <div className="lg:col-span-1 space-y-8">
                    <div className="bg-blue-50 p-6 rounded-3xl border border-blue-100">
                        <h3 className="font-black text-blue-900 uppercase text-xs tracking-widest mb-6 border-b border-blue-200 pb-2">Visual Glossary</h3>
                        <div className="space-y-4 font-mono text-sm">
                            <div className="flex items-center gap-3"><div className="w-8 h-8 rounded-lg bg-blue-900 text-white flex items-center justify-center"><Zap size={14}/></div> <span>Favor Entry</span></div>
                            <div className="flex items-center gap-3"><div className="w-8 h-8 rounded-lg bg-red-600 text-white flex items-center justify-center"><ArrowDownLeft size={14}/></div> <span>Cash Debt</span></div>
                            <div className="flex items-center gap-3"><div className="w-8 h-8 rounded-lg bg-black text-white flex items-center justify-center"><EyeOff size={14}/></div> <span>Face-Save</span></div>
                        </div>
                    </div>
                    <div className="p-6 border-2 border-dashed border-gray-200 rounded-3xl">
                        <h4 className="font-bold text-gray-400 uppercase text-[10px] mb-2 tracking-[0.2em]">Safety Protocol</h4>
                        <p className="text-xs text-gray-500 leading-relaxed italic">"A debt is only valid if both parties acknowledge the handshake. No forced entries allowed."</p>
                    </div>
                </div>

                {/* Main Instruction Area */}
                <div className="lg:col-span-2 space-y-16 font-mono text-blue-900 text-lg leading-relaxed">
                    <section>
                        <h2 className="text-2xl font-black mb-4 flex items-center gap-3 underline decoration-red-500 underline-offset-4">01. The Handshake</h2>
                        <p>Link with a partner via WhatsApp using your unique domain link from <strong>555.socialz.life</strong>. Once they join, your books are synced and E2E encryption is established for your Vault.</p>
                    </section>
                    
                    <section>
                        <h2 className="text-2xl font-black mb-4 flex items-center gap-3 underline decoration-red-500 underline-offset-4">02. Balancing the Scale</h2>
                        <p>The **Relationship HUD** at the top shows your current balance. <br/> • <strong>Positive Score:</strong> You've done more favors/paid more. <br/> • <strong>Negative Score:</strong> You're currently the debtor. Use the **Settle Up** flow to offer a catalog item.</p>
                    </section>

                    <section className="bg-gray-50 p-8 rounded-3xl border border-gray-200">
                        <h2 className="text-2xl font-black mb-4 text-blue-900 uppercase">03. Private Face-Saving</h2>
                        <p className="text-sm text-gray-600 mb-4">Entries marked as "Face-Saving" go directly into The Vault. They do not appear in weekly summaries or public walls. Use these to log moments where you quietly protected your partner's pride or did something personal they wouldn't want announced.</p>
                        <div className="flex items-center gap-2 text-xs font-black text-red-600 tracking-widest"><Lock size={12}/> ENCRYPTED AT REST</div>
                    </section>

                    <section>
                        <h2 className="text-2xl font-black mb-4 flex items-center gap-3 underline decoration-red-500 underline-offset-4">04. The Marketplace</h2>
                        <p>If you cannot fulfill a favor, you can substitute it with a **Marketplace Gift Card**. This allows you to settle a "Soft Debt" with a "Hard Asset" (like a Coffee or Spa voucher) from our partner network.</p>
                    </section>
                </div>
            </div>
          </div>
        </div>
      )}

      {currentView === 'investor' && (
        <div className="max-w-6xl mx-auto px-6 py-16 animate-in fade-in duration-500">
          <button onClick={() => showInternalView('home')} className="text-blue-900 font-bold mb-8 flex items-center gap-2 hover:text-red-500 transition-colors group">
            <ArrowLeft className="group-hover:-translate-x-1 transition-transform" /> Back to Project Home
          </button>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Thesis Sidebar */}
            <div className="md:col-span-1 space-y-6">
                <div className="bg-blue-900 text-white p-8 rounded-[3rem] shadow-xl relative overflow-hidden group">
                    <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:scale-110 transition-transform"><Target size={160} /></div>
                    <h2 className="text-sm font-bold uppercase tracking-widest text-blue-300 mb-6">Investment Thesis</h2>
                    <p className="text-2xl font-black leading-tight mb-8 uppercase tracking-tighter">Digitizing the World's First "Trust Graph"</p>
                    <div className="space-y-6">
                        <div className="border-t border-white/10 pt-4">
                            <p className="text-xs text-blue-400 uppercase font-bold mb-2 tracking-widest">Moat</p>
                            <p className="font-semibold text-sm">Cultural Nostalgia + Localized "Thank You" Economics.</p>
                        </div>
                        <div className="border-t border-white/10 pt-4">
                            <p className="text-xs text-blue-400 uppercase font-bold mb-2 tracking-widest">Monetization</p>
                            <p className="font-semibold text-sm">5% Comm. + Premium Vault + B2B API Access.</p>
                        </div>
                    </div>
                </div>
                
                <div className="bg-white p-8 rounded-[3rem] border border-gray-100 shadow-sm">
                    <h3 className="text-xs font-black text-gray-400 uppercase tracking-widest mb-6">Market Dynamics</h3>
                    <div className="space-y-6">
                        <div className="flex items-center gap-4">
                            <div className="bg-red-50 p-3 rounded-2xl"><Users2 className="text-red-500" size={20}/></div>
                            <div><p className="font-black text-blue-900">150M+</p><p className="text-[10px] text-gray-500 uppercase tracking-tighter">Target Pairs (Asia/SEA)</p></div>
                        </div>
                        <div className="flex items-center gap-4">
                            <div className="bg-blue-50 p-3 rounded-2xl"><TrendingUp className="text-blue-500" size={20}/></div>
                            <div><p className="font-black text-blue-900">$12B</p><p className="text-[10px] text-gray-500 uppercase tracking-tighter">Untracked Social Capital</p></div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Deck Content */}
            <div className="md:col-span-2 bg-white rounded-[3rem] shadow-xl p-10 md:p-14 border-l-[2px] border-[#ff8787] border border-gray-100" style={{ backgroundImage: 'linear-gradient(#a5d8ff 1px, transparent 1px)', backgroundSize: '100% 2.5rem' }}>
              <div className="flex justify-between items-start mb-12 border-b-4 border-red-500 pb-4">
                <h1 className="text-4xl md:text-5xl font-black text-blue-900 uppercase tracking-tighter">Corporate Deck</h1>
                <div className="hidden md:block text-right">
                    <p className="text-[10px] font-black text-red-600 uppercase tracking-widest">Confidential / Series Seed</p>
                </div>
              </div>
              
              <div className="space-y-16 font-mono text-blue-900 text-lg leading-relaxed">
                <section>
                    <h2 className="text-2xl font-black mb-6 uppercase flex items-center gap-3 underline decoration-red-500 decoration-4">01. Market Inefficiency</h2>
                    <p className="text-gray-700 text-base">Relationships decay not because of big fights, but because of the **Invisible Effort Gap.** Banks track hard assets, but 70% of human value exchange is social. 555 bridges this gap by creating the first quantifiable "Relationship HUD."</p>
                </section>

                <section>
                    <h2 className="text-2xl font-black mb-6 uppercase flex items-center gap-3 underline decoration-red-500 decoration-4">02. The RE_Algorithm</h2>
                    <p className="text-gray-700 text-base mb-6">Our proprietary weighting engine calculates Relationship Equilibrium (RE). We don't just add numbers; we assign value to "Soft Capital" based on context (e.g., a ride to the airport vs. paying for lunch).</p>
                    <div className="bg-blue-50 p-6 rounded-2xl border border-blue-100 text-sm font-bold text-blue-800">
                        VALUE = (CASH × 1.0) + (FAVOR × WEIGHT) + (SILENT_CREDIT × 1.5)
                    </div>
                </section>

                <section className="bg-blue-900 text-white p-8 rounded-[2rem] shadow-xl">
                    <h2 className="text-2xl font-black mb-4 uppercase flex items-center gap-3"><Globe size={24}/> 03. Global Scaling</h2>
                    <p className="text-blue-100 text-base leading-relaxed mb-6">We are launching in SEA/Singapore as our beachhead, tapping into existing 555 nostalgia. Our model is built for the **"High Trust / Low Friction"** community economies of the Global South.</p>
                    <div className="grid grid-cols-2 gap-4">
                        <div className="bg-white/10 p-4 rounded-xl text-center"><p className="text-2xl font-black">2025</p><p className="text-[10px] uppercase">MVP Alpha</p></div>
                        <div className="bg-white/10 p-4 rounded-xl text-center"><p className="text-2xl font-black">2026</p><p className="text-[10px] uppercase">Social API</p></div>
                    </div>
                </section>

                <section>
                    <h2 className="text-2xl font-black mb-6 uppercase underline decoration-red-500 decoration-4">04. The Data Moat</h2>
                    <p className="text-gray-700 text-base">By tracking who trusts whom, we are mapping the world's most valuable dataset: **Reciprocal Altruism.** This "Trust Graph" is the future of alternative credit scoring and community lending platforms.</p>
                </section>

                <section className="pt-8 border-t-2 border-dashed border-gray-200">
                    <h2 className="text-3xl font-black text-red-600 mb-4 uppercase tracking-tighter">Join the Movement</h2>
                    <p className="text-gray-500 text-sm">We are raising $1.5M to scale our engineering team and secure partnerships with regional e-commerce providers for our settlement marketplace.</p>
                </section>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="bg-white py-20 border-t border-gray-100">
        <div className="max-w-6xl mx-auto px-6 flex flex-col items-center text-center">
          <div className="bg-red-600 text-white font-black text-3xl px-3 py-1 rounded shadow-lg transform -rotate-3 mb-6 uppercase tracking-tighter">555</div>
          <p className="text-[10px] font-black text-gray-400 mb-10 uppercase tracking-[0.4em] font-mono italic">"where respect meets the ledger."</p>
          <div className="flex flex-wrap justify-center gap-8 text-sm font-bold text-blue-900 uppercase tracking-widest">
            <button onClick={() => setShowStory(true)} className="hover:text-red-600 transition-colors">The Story</button>
            <button onClick={() => showInternalView('manual')} className="hover:text-red-600 transition-colors">Manual</button>
            <button onClick={() => showInternalView('investor')} className="hover:text-red-600 transition-colors">Investor Center</button>
          </div>
          <p className="mt-12 text-[10px] text-gray-300 font-mono">LIVE ON https://555.socialz.life/</p>
        </div>
      </footer>

      {/* Roti Man Story Modal */}
      {showStory && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-blue-900/85 backdrop-blur-md" onClick={() => setShowStory(false)}>
          <div className="bg-white max-w-2xl w-full rounded-[2.5rem] shadow-2xl p-10 border-l-[2px] border-[#ff8787] relative overflow-hidden" onClick={e => e.stopPropagation()} style={{ backgroundImage: 'linear-gradient(#a5d8ff 1px, transparent 1px)', backgroundSize: '100% 2.5rem' }}>
            <button onClick={() => setShowStory(false)} className="absolute top-6 right-6 text-gray-400 hover:text-red-600 text-2xl font-bold transition-colors">✕</button>
            <div className="bg-red-600 text-white font-black text-xl px-2 py-0.5 rounded shadow-sm inline-block transform -rotate-2 mb-6 uppercase tracking-tighter">The Legend of 555</div>
            <div className="w-full mb-8 overflow-hidden rounded-2xl border-4 border-blue-900 shadow-lg bg-gray-100">
                <img src="/images/rotiman.png" alt="Roti Man" className="w-full h-auto object-cover" onError={(e) => e.target.style.display='none'} />
            </div>
            <div className="font-mono text-blue-900 space-y-6 text-lg leading-relaxed">
                <p>Before apps and instant transfers, community trust lived in a small yellow <strong>555 notebook</strong>.</p>
                <p>The <strong>Roti Man</strong> would arrive on his motorcycle, stopping at every corner. Families took what they needed, and he simply jotted the debt in his pocket ledger. No receipts, no credit scores—just unshakeable honor.</p>
                <p>555 digitizes this heritage—bringing back the era where a bond of respect was the only collateral needed.</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

/** * 2. ONBOARDING COMPONENT 
 */
const OnboardingFlow = ({ onComplete }) => {
  const [step, setStep] = useState(1);
  const [persona, setPersona] = useState(null);

  const personas = [
    { id: 'couple', title: 'Young Couple', icon: <Heart className="text-red-500" size={24} />, desc: 'Intimate favors and the Private Vault.', spicy: true },
    { id: 'roommate', title: 'Roommates', icon: <Home className="text-blue-500" size={24} />, desc: 'Shared bills, chores, and quiet hours.' },
    { id: 'buddies', title: 'The Real Ones', icon: <Beer className="text-amber-500" size={24} />, desc: 'Wingman points and face-saving credits.' },
  ];

  return (
    <div className="min-h-screen bg-[#fdfbd4] flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-white rounded-[3rem] shadow-2xl p-8 border-l-[12px] border-red-600 relative overflow-hidden">
        <div className="flex gap-2 mb-10">
          {[1,2,3,4].map(s => <div key={s} className={`h-1.5 flex-1 rounded-full transition-all duration-500 ${s <= step ? 'bg-red-600' : 'bg-gray-100'}`} />)}
        </div>
        {step === 1 && (
          <div className="text-center space-y-6">
            <div className="bg-red-600 text-white font-black text-6xl px-4 py-2 rounded shadow-xl transform -rotate-3 mb-4 inline-block">555</div>
            <h2 className="text-3xl font-black text-blue-900 uppercase tracking-tighter leading-none">The Handshake</h2>
            <p className="text-gray-500 font-mono text-sm">Every great relationship starts with mutual trust and a yellow notebook.</p>
            <button onClick={() => setStep(2)} className="w-full bg-blue-900 text-white py-4 rounded-2xl font-bold text-xl shadow-lg flex items-center justify-center gap-2 uppercase tracking-tighter">Choose Persona <ArrowRight size={20} /></button>
          </div>
        )}
        {step === 2 && (
          <div className="space-y-6">
            <h2 className="text-2xl font-black text-blue-900 text-center uppercase tracking-tighter">Select Role</h2>
            <div className="grid gap-4">
              {personas.map((p, i) => (
                <button key={p.id} onClick={() => { setPersona(p.title); setStep(3); }} className="flex items-start gap-4 p-5 rounded-3xl border-2 border-gray-100 hover:border-blue-900 bg-white text-left transition-all active:scale-95 group">
                  <div className="p-2 bg-gray-50 rounded-xl group-hover:scale-110 transition-transform">{p.icon}</div>
                  <div className="flex-1 font-bold text-blue-900 uppercase tracking-tight">{p.title}</div>
                </button>
              ))}
            </div>
          </div>
        )}
        {step === 3 && (
          <div className="space-y-8 text-center">
            <div className="w-24 h-24 bg-blue-100 rounded-full mx-auto flex items-center justify-center"><Share2 className="w-10 h-10 text-blue-600" /></div>
            <div className="space-y-4">
                <h2 className="text-2xl font-black text-blue-900 uppercase tracking-tighter">Invite Partner</h2>
                <div className="bg-gray-50 p-3 rounded-xl border border-dashed border-gray-300 font-mono text-[10px] text-blue-800 break-all leading-tight">
                    https://555.socialz.life/join?id=auth_88x2k...
                </div>
                <p className="text-xs text-gray-500 font-mono italic">"A shared ledger requires shared trust."</p>
            </div>
            <button onClick={() => setStep(4)} className="w-full bg-[#25D366] text-white py-4 rounded-2xl font-bold text-xl shadow-lg uppercase tracking-tighter active:scale-95 transition-transform">Sync via WhatsApp</button>
          </div>
        )}
        {step === 4 && (
          <div className="text-center space-y-8 animate-in zoom-in duration-500">
            <div className="w-32 h-32 bg-green-100 rounded-full mx-auto flex items-center justify-center"><CheckCircle className="w-16 h-16 text-green-500" /></div>
            <h2 className="text-3xl font-black text-blue-900 uppercase tracking-tighter leading-none">Verified!</h2>
            <p className="text-gray-500 font-mono text-sm px-8">Your shared book is now active. All entries require mutual approval.</p>
            <button onClick={onComplete} className="w-full bg-blue-900 text-white py-4 rounded-2xl font-bold text-xl shadow-lg uppercase tracking-tighter active:scale-95 transition-transform">Open Your Book</button>
          </div>
        )}
      </div>
    </div>
  );
};

/** * 3. DASHBOARD COMPONENT 
 */
const DashboardApp = ({ onLogout }) => {
  const [activeTab, setActiveTab] = useState('wall');
  const [showAddMenu, setShowAddMenu] = useState(false);
  const [settleItem, setSettleItem] = useState(null);
  const [settleStep, setSettleStep] = useState(1);

  const myCatalog = [
    { id: 'c1', title: 'Cook a Fancy Dinner', icon: '🍳', weight: 5 },
    { id: 'c2', title: 'Laundry Rescue Mission', icon: '👕', weight: 3 },
    { id: 'c3', title: '30-min Head Massage', icon: '💆', weight: 4 },
    { id: 'c4', title: 'Safe Drive Home', icon: '🚗', weight: 2 },
  ];

  const EntryCard = ({ entry, isVault }) => (
    <div className={`p-5 mb-4 rounded-3xl border-2 transition-all ${isVault ? 'bg-gray-900 border-gray-800 text-white' : 'bg-white border-gray-100 shadow-sm'}`}>
      <div className="flex justify-between items-start mb-4">
        <div className="flex items-center gap-3">
          <div className={`p-2 rounded-xl ${isVault ? 'bg-red-900/30' : 'bg-blue-50'}`}>
            {entry.type === 'hard' ? <ArrowDownLeft className="text-red-500" size={20} /> : 
             entry.type === 'soft' ? <Zap className="text-blue-500" size={20} /> : <EyeOff className="text-red-400" size={20} />}
          </div>
          <div>
            <h4 className="font-bold text-sm md:text-base">{entry.title}</h4>
            <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">{entry.date}</p>
          </div>
        </div>
        <div className="text-right">
          <span className={`text-lg font-black ${entry.amount > 0 ? 'text-green-500' : 'text-red-500'}`}>
            {entry.amount > 0 ? `+${entry.amount}` : entry.amount}
          </span>
        </div>
      </div>
      {entry.amount < 0 && (
        <button 
          onClick={() => { setSettleItem(entry); setSettleStep(1); }} 
          className={`w-full py-3 rounded-2xl font-bold text-xs uppercase tracking-widest flex items-center justify-center gap-2 transition-all active:scale-[0.98] ${isVault ? 'bg-white text-black' : 'bg-blue-900 text-white'}`}
        >
          Settle Up <ChevronRight size={14} />
        </button>
      )}
    </div>
  );

  return (
    <div className="min-h-screen bg-[#fdfbd4] pb-24 relative overflow-x-hidden">
      {/* Scrollable Settle Modal */}
      {settleItem && (
        <div className="fixed inset-0 z-[100] flex items-end justify-center bg-black/70 backdrop-blur-sm px-4 overflow-hidden">
          <div className="w-full max-w-md bg-white rounded-t-[3rem] animate-in slide-in-from-bottom duration-300 max-h-[90vh] flex flex-col">
            {/* Modal Header (Fixed) */}
            <div className="p-8 border-b border-gray-100 flex justify-between items-center bg-white rounded-t-[3rem]">
              <h3 className="text-2xl font-black text-blue-900 uppercase tracking-tighter">Settle Up</h3>
              <button onClick={() => setSettleItem(null)} className="p-2 bg-gray-100 rounded-full hover:bg-red-50 transition-colors"><X size={20}/></button>
            </div>
            
            {/* Modal Content (Scrollable) */}
            <div className="p-8 overflow-y-auto flex-1 space-y-6 pb-12">
              {settleStep === 1 ? (
                <>
                  <div className="bg-blue-50 p-6 rounded-2xl border-2 border-blue-100 mb-6">
                    <p className="text-[10px] uppercase font-black text-blue-400 mb-2 tracking-widest">Active Debt</p>
                    <p className="text-xl font-black text-blue-900">"{settleItem.title}"</p>
                    <p className="text-red-500 font-bold font-mono mt-1">{settleItem.amount}.00 Credits</p>
                  </div>
                  <p className="text-gray-500 font-mono text-sm leading-relaxed">Choose how you want to balance this ledger entry with your partner.</p>
                  <div className="grid gap-4">
                    <button onClick={() => setSettleStep(2)} className="w-full bg-blue-900 text-white py-5 rounded-2xl font-black text-lg uppercase tracking-tighter flex justify-between px-6 items-center group">
                      Offer a Favor <ChevronRight className="group-hover:translate-x-1 transition-transform" />
                    </button>
                    <button onClick={() => setSettleItem(null)} className="w-full bg-white border-2 border-gray-100 text-gray-400 py-4 rounded-2xl font-black text-sm uppercase tracking-widest active:scale-95">Mark as Cash Paid</button>
                  </div>
                </>
              ) : settleStep === 2 ? (
                <>
                  <button onClick={() => setStep(1)} className="text-xs font-bold text-blue-500 flex items-center gap-1 mb-4 uppercase tracking-widest">← Back to Options</button>
                  <p className="text-xs font-black text-gray-400 uppercase tracking-widest mb-4">Your Favor Catalog</p>
                  <div className="grid gap-3">
                    {myCatalog.map(f => (
                      <button 
                        key={f.id} 
                        onClick={() => setSettleStep(3)}
                        className="w-full p-4 bg-white border-2 border-gray-100 rounded-2xl flex items-center gap-4 text-left hover:border-blue-900 transition-all active:scale-95 group"
                      >
                        <span className="text-2xl group-hover:scale-110 transition-transform">{f.icon}</span>
                        <div className="flex-1">
                          <p className="font-bold text-blue-900 uppercase tracking-tight text-sm">{f.title}</p>
                          <p className="text-[10px] text-gray-400 font-mono tracking-widest">Value: {f.weight} Credits</p>
                        </div>
                      </button>
                    ))}
                  </div>
                </>
              ) : (
                <div className="text-center py-10">
                  <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6"><Check className="text-green-600" size={48} /></div>
                  <h4 className="text-3xl font-black text-blue-900 uppercase tracking-tighter mb-2">Proposal Sent!</h4>
                  <p className="text-gray-500 text-sm leading-relaxed px-6 mb-10">Your partner has been notified of your offer. Once they acknowledge it, your scale will rebalance automatically.</p>
                  <button onClick={() => setSettleItem(null)} className="w-full bg-blue-900 text-white py-4 rounded-2xl font-black text-lg uppercase tracking-tighter shadow-xl">Back to Ledger</button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Main UI */}
      <header className="bg-white px-6 pt-8 pb-6 border-b border-gray-100 rounded-b-[3rem] shadow-sm">
        <div className="flex justify-between items-center mb-8">
            <div className="bg-red-600 text-white font-black text-xl px-2 py-0.5 rounded shadow-sm transform -rotate-3 uppercase tracking-tighter">555</div>
            <div className="flex gap-3"><button className="p-2 bg-gray-50 rounded-full text-gray-400"><Bell size={20} /></button><button onClick={onLogout} className="p-2 bg-gray-50 rounded-full text-gray-400 hover:text-red-500 transition-colors"><Settings size={20} /></button></div>
        </div>
        <div className="bg-blue-900 rounded-[2.5rem] p-6 text-white relative overflow-hidden">
          <div className="relative z-10 flex justify-between items-end">
            <div>
                <h2 className="text-3xl font-black tracking-tighter">+35</h2>
                <p className="text-[10px] font-black uppercase tracking-[0.2em] text-blue-300">Relationship HUD</p>
            </div>
            <span className="bg-green-500 text-white text-[10px] font-black px-2 py-0.5 rounded uppercase tracking-tighter">Hero Status</span>
          </div>
        </div>
      </header>

      <div className="flex p-4 gap-4">
        <button onClick={() => setActiveTab('wall')} className={`flex-1 py-4 rounded-2xl font-black text-xs uppercase transition-all ${activeTab === 'wall' ? 'bg-blue-900 text-white shadow-lg' : 'bg-white text-gray-400 border border-gray-100'}`}>Public Wall</button>
        <button onClick={() => setActiveTab('vault')} className={`flex-1 py-4 rounded-2xl font-black text-xs uppercase transition-all ${activeTab === 'vault' ? 'bg-gray-900 text-white shadow-lg' : 'bg-white text-gray-400 border border-gray-100'}`}>The Vault</button>
      </div>

      <main className="px-4 pb-12">
        <div className="mb-4 px-2 flex justify-between items-center"><h3 className="font-black text-blue-900 uppercase tracking-widest text-[10px] opacity-40">Recent Activity</h3></div>
        <div className="space-y-4">
            {activeTab === 'wall' ? (
                <>
                    <EntryCard entry={{ id: 1, type: 'hard', title: 'Lunch @ Hawker Center', amount: -15.00, date: '2h ago' }} isVault={false} />
                    <EntryCard entry={{ id: 3, type: 'soft', title: 'PPT Assistance', amount: 10, date: 'Yesterday' }} isVault={false} />
                </>
            ) : (
                <EntryCard entry={{ id: 2, type: 'face', title: 'Silent Laundry Rescue', amount: 10, date: '3h ago' }} isVault={true} />
            )}
        </div>
      </main>

      {/* Floating Action Menu */}
      <div className="fixed bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center z-50">
        {showAddMenu && (
          <div className="bg-white p-2 rounded-3xl shadow-2xl mb-4 border-2 border-gray-100 animate-in slide-in-from-bottom-4 flex gap-2">
            <button className="p-4 bg-blue-50 rounded-2xl text-blue-900 hover:bg-blue-100 transition-colors active:scale-90 flex flex-col items-center">
                <ArrowUpRight size={24} />
                <span className="block text-[8px] font-black mt-1 uppercase">I Owe</span>
            </button>
            <button className="p-4 bg-red-50 rounded-2xl text-red-600 hover:bg-red-100 transition-colors active:scale-90 flex flex-col items-center">
                <ArrowDownLeft size={24} />
                <span className="block text-[8px] font-black mt-1 uppercase">They Owe</span>
            </button>
            <button className="p-4 bg-gray-900 rounded-2xl text-white hover:bg-black transition-colors active:scale-90 flex flex-col items-center">
                <EyeOff size={24} />
                <span className="block text-[8px] font-black mt-1 uppercase">Face-Save</span>
            </button>
          </div>
        )}
        <button 
          onClick={() => setShowAddMenu(!showAddMenu)} 
          className={`w-16 h-16 rounded-full flex items-center justify-center text-white shadow-2xl transition-all active:scale-90 ${showAddMenu ? 'bg-red-500 rotate-45' : 'bg-blue-900'}`}
        >
          <Plus size={32} />
        </button>
      </div>
    </div>
  );
};

/** * MAIN APP HUB 
 */
export default function App() {
  const [currentView, setCurrentView] = useState('landing');
  return (
    <div className="min-h-screen">
      {currentView === 'landing' && <LandingPage onStart={() => setCurrentView('onboarding')} />}
      {currentView === 'onboarding' && <OnboardingFlow onComplete={() => setCurrentView('dashboard')} />}
      {currentView === 'dashboard' && <DashboardApp onLogout={() => setCurrentView('landing')} />}
    </div>
  );
}
