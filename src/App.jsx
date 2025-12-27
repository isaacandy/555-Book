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
 * A comprehensive front door with the Roti Man legacy, Investor Center, and Official Manual.
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
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
        <div className="max-w-6xl mx-auto p-4 flex justify-between items-center">
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => showInternalView('home')}>
            <img src="/images/logo555.png" alt="555 Logo" className="h-10 w-auto rounded shadow-sm transform -rotate-2" onError={(e) => e.target.src = "https://placehold.co/100x100?text=555&bg=ff0000&clr=ffffff"} />
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
          {/* Hero Section */}
          <header className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <span className="bg-red-100 text-red-600 font-bold px-3 py-1 rounded-full text-xs uppercase tracking-widest tracking-widest">A Relationship Saver</span>
              <h1 className="text-6xl font-black text-blue-900 leading-tight tracking-tighter">
                Track the invisible <br />effort of <span className="text-red-600 italic">love.</span>
              </h1>
              <p className="text-xl text-gray-700 leading-relaxed max-w-lg">
                Inspired by the legendary yellow 555 notebooks, we've digitized the "Roti Man" trust system to help you balance both money and favors.
              </p>
              <div className="pt-4 flex flex-col sm:flex-row gap-4">
                <button onClick={onStart} className="bg-blue-900 text-white px-10 py-4 rounded-2xl text-lg font-black shadow-xl hover:-translate-y-1 transition active:scale-95">Claim Your Book</button>
                <button onClick={() => showInternalView('manual')} className="bg-white border-2 border-blue-900 text-blue-900 px-10 py-4 rounded-2xl text-lg font-bold hover:bg-blue-50 transition">Read the Manual</button>
              </div>
            </div>

            {/* Notebook Interactive Demo */}
            <div className="bg-white shadow-2xl rounded-3xl p-8 border-l-[2px] border-[#ff8787] border border-gray-100 relative overflow-hidden" style={{ backgroundImage: 'linear-gradient(#a5d8ff 1px, transparent 1px)', backgroundSize: '100% 2.5rem' }}>
              <div className="flex justify-between items-center mb-6 border-b-2 border-blue-900 pb-2">
                <h3 className="text-2xl font-bold text-blue-900 uppercase tracking-tighter">Live Ledger</h3>
                <span className="text-sm font-bold text-red-400 font-mono">Page 42</span>
              </div>
              <div className="space-y-6 font-mono text-lg text-blue-900">
                <div className="flex justify-between items-center">
                  <span>📢 Picked up Groceries</span>
                  <span className="text-green-600 font-bold">+1 Fav</span>
                </div>
                <div className="flex justify-between items-center bg-blue-50/50 p-2 rounded-lg border border-blue-100">
                  <span className="flex items-center gap-2"><Lock size={16}/> Saved Face (Late to Dinner)</span>
                  <span className="text-red-600 font-bold">-5 Face</span>
                </div>
                <div className="h-12"></div>
                <div className="bg-yellow-50 p-4 rounded-xl border border-yellow-200 text-sm italic text-yellow-800 leading-tight">
                  "Thanks for not mentioning I forgot the keys again in front of the landlord. I owe you one."
                </div>
              </div>
            </div>
          </header>

          {/* Equilibrium Algorithm Section */}
          <section id="equilibrium" className="bg-blue-900 text-white py-24 overflow-hidden relative">
            <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
              <h2 className="text-4xl md:text-5xl font-black mb-6 uppercase tracking-tighter">The Balance Scale</h2>
              <p className="text-blue-200 mb-12 text-lg">Money is simple. Trust is complex. Our algorithm treats them as one unified currency.</p>
              <div className="bg-white/5 p-8 md:p-16 rounded-[3rem] border border-white/10 backdrop-blur-xl shadow-2xl">
                <div className="flex justify-between mb-6 font-black text-[10px] uppercase tracking-[0.2em] text-blue-300">
                  <span>Giver Mode</span>
                  <span>Relationship Sync</span>
                  <span>Debtor Mode</span>
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

          {/* Vault & Privacy Section */}
          <section id="vault" className="py-24 bg-gradient-to-br from-blue-900 to-black text-white overflow-hidden">
            <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
              <div className="order-2 md:order-1 relative">
                <div className="bg-white/10 p-10 rounded-3xl border border-white/20 backdrop-blur-md relative overflow-hidden group">
                  <div className="absolute inset-0 shimmer opacity-10"></div>
                  <div className="absolute top-4 right-4 text-xs text-blue-300 font-mono tracking-widest uppercase">E2E Encrypted</div>
                  <div className="space-y-6">
                    <div className="flex items-center gap-4 border-b border-white/10 pb-4">
                      <div className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center font-bold uppercase tracking-tighter">555</div>
                      <div className="flex-1">
                        <div className="h-2 w-24 bg-white/20 rounded"></div>
                        <div className="h-4 w-40 bg-white/40 rounded mt-2"></div>
                      </div>
                      <div className="text-red-400"><ShieldCheck size={24} /></div>
                    </div>
                    <p className="p-4 bg-white/5 rounded-xl border border-white/10 italic text-sm text-blue-100 leading-relaxed">
                      "Silent entries" are only visible to you and your partner. Encrypted on your device, decrypted on theirs. No servers can see your intimacy.
                    </p>
                  </div>
                </div>
                <div className="absolute -top-6 -left-6 w-20 h-20 bg-red-600 rounded-2xl -rotate-12 flex items-center justify-center text-3xl shadow-2xl animate-pulse">🤫</div>
                <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center text-2xl shadow-xl">🤐</div>
              </div>
              <div className="order-1 md:order-2 space-y-8">
                <h2 className="text-5xl font-black leading-tight uppercase tracking-tighter">Saving Face: <br /><span className="text-red-500 underline decoration-white decoration-4 underline-offset-8">The Private Vault</span></h2>
                <p className="text-xl text-blue-100 font-light leading-relaxed">Not every act of kindness needs a public shout-out. Some of the most important favors happen behind closed doors. The Vault keeps your intimacy and your pride protected with client-side encryption.</p>
                <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white/5 p-4 rounded-2xl border border-white/10">
                        <h4 className="font-bold text-red-400 mb-1">Spicy Rewards</h4>
                        <p className="text-xs text-blue-200 italic">Intimate catalogs for partners.</p>
                    </div>
                    <div className="bg-white/5 p-4 rounded-2xl border border-white/10">
                        <h4 className="font-bold text-blue-400 mb-1">Silent Credits</h4>
                        <p className="text-xs text-blue-200 italic">Quantify unspoken support.</p>
                    </div>
                </div>
              </div>
            </div>
          </section>

          {/* Personas Selection Grid */}
          <section className="py-24 bg-white">
            <div className="max-w-6xl mx-auto px-6 text-center mb-16 uppercase">
              <h2 className="text-4xl font-black text-blue-900 mb-4 tracking-tight">The 555 Personas</h2>
              <p className="text-gray-600 text-xs font-bold tracking-widest">Specialized favor catalogs for every type of social bond.</p>
            </div>
            <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-8 text-center">
              {[
                { name: 'The Roommate', icon: '🎓', favor: 'Dishes Exorcism', reward: 'Laundry Rescue' },
                { name: 'Young Couple', icon: '🌶️', favor: 'Silent Apology', reward: 'Massage Protocol' },
                { name: 'The Real Ones', icon: '🍻', favor: 'Phone Guard', reward: 'Designated Hero' }
              ].map((p, i) => (
                <div key={i} className={`group p-8 rounded-3xl border-2 transition-all cursor-pointer ${i === 1 ? 'border-blue-900 bg-blue-50 shadow-xl scale-105' : 'border-gray-100 hover:border-blue-900'}`}>
                  <div className="text-5xl mb-6">{p.icon}</div>
                  <h3 className="text-2xl font-bold text-blue-900 mb-4 uppercase tracking-tighter">{p.name}</h3>
                  <ul className="text-left space-y-3 text-gray-500 text-sm font-mono">
                    <li>• {p.favor}</li>
                    <li>• {p.reward}</li>
                  </ul>
                  {i === 1 && <div className="mt-6 text-[10px] font-black text-blue-900 uppercase flex items-center justify-center gap-1 opacity-60"><Lock size={10}/> Vault Active</div>}
                </div>
              ))}
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
            <div className="border-b-4 border-red-500 pb-4 mb-12 flex flex-col md:flex-row justify-between items-start md:items-end">
                <h1 className="text-4xl md:text-5xl font-black text-blue-900 uppercase tracking-tighter leading-none">Official User Manual</h1>
                <span className="font-mono text-xs text-gray-400 mt-2 md:mt-0">REF: 555-UM-PRO-01</span>
            </div>

            <div className="grid lg:grid-cols-3 gap-12">
                {/* Visual Glossary Sidebar */}
                <div className="lg:col-span-1 space-y-8">
                    <div className="bg-blue-50 p-8 rounded-[2.5rem] border border-blue-100">
                        <h3 className="font-black text-blue-900 uppercase text-xs tracking-[0.2em] mb-6 border-b border-blue-200 pb-2">Visual Glossary</h3>
                        <div className="space-y-6 font-mono text-sm text-blue-900">
                            <div className="flex items-center gap-4"><div className="w-10 h-10 rounded-xl bg-blue-900 text-white flex items-center justify-center shadow-md"><Zap size={16}/></div> <div><strong>Favor Entry:</strong><br/><span className="text-[10px] text-gray-500">Soft capital tracking.</span></div></div>
                            <div className="flex items-center gap-4"><div className="w-10 h-10 rounded-xl bg-red-600 text-white flex items-center justify-center shadow-md"><ArrowDownLeft size={16}/></div> <div><strong>Cash Debt:</strong><br/><span className="text-[10px] text-gray-500">Hard currency tracking.</span></div></div>
                            <div className="flex items-center gap-4"><div className="w-10 h-10 rounded-xl bg-black text-white flex items-center justify-center shadow-md"><EyeOff size={16}/></div> <div><strong>Face-Save:</strong><br/><span className="text-[10px] text-gray-500">Private Vault credit.</span></div></div>
                            <div className="flex items-center gap-4"><div className="w-10 h-10 rounded-xl bg-green-500 text-white flex items-center justify-center shadow-md"><Check size={16}/></div> <div><strong>Verified:</strong><br/><span className="text-[10px] text-gray-500">Acknowledged entry.</span></div></div>
                        </div>
                    </div>
                    <div className="p-8 border-2 border-dashed border-gray-200 rounded-[2.5rem] space-y-3">
                        <h4 className="font-black text-gray-400 uppercase text-[10px] tracking-[0.3em]">Code of Conduct</h4>
                        <p className="text-xs text-gray-500 leading-relaxed italic">"Trust is the currency. Any debt must be acknowledged by the debtor before the equilibrium scales adjust. No forced entries allowed."</p>
                    </div>
                </div>

                {/* Main Instruction Body */}
                <div className="lg:col-span-2 space-y-16 font-mono text-blue-900 text-lg leading-relaxed">
                    <section>
                        <h2 className="text-2xl font-black mb-6 flex items-center gap-4 underline decoration-red-500 underline-offset-8 decoration-4">01. THE HANDSHAKE</h2>
                        <p className="text-base text-gray-700">Before tracking anything, you must link your book. Tap **Join Beta** and select your Persona. Share the generated link via WhatsApp from <strong className="text-blue-900">555.socialz.life</strong>. Once your partner clicks "Accept," your ledgers are synced and E2E keys are exchanged for the Vault.</p>
                    </section>
                    
                    <section>
                        <h2 className="text-2xl font-black mb-6 flex items-center gap-4 underline decoration-red-500 underline-offset-8 decoration-4">02. LOGGING ENTRIES</h2>
                        <p className="text-base text-gray-700">Use the floating <strong>(+) button</strong> in the dashboard. <br/> • <strong>I Owe:</strong> Logs a debt you have taken on. <br/> • <strong>They Owe:</strong> Logs a favor or payment you provided. <br/> • <strong>Face-Save:</strong> Strictly private entries for "invisible effort." Entries stay pending until the other party acknowledges them.</p>
                    </section>

                    <section className="bg-gray-900 text-white p-10 rounded-[2.5rem] shadow-2xl relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-4 opacity-10"><Shield size={120}/></div>
                        <h2 className="text-2xl font-black mb-6 uppercase tracking-tighter text-red-500">03. THE PRIVATE VAULT</h2>
                        <p className="text-sm text-blue-100 mb-6 leading-relaxed">The Vault is for your most personal credits. When you quietly fix a partner's mistake or perform a task they'd find embarrassing to acknowledge publicly, use Face-Saving mode. These entries use client-side AES encryption. They do not appear on public walls or shared summary reports.</p>
                        <div className="flex items-center gap-3 text-[10px] font-black tracking-[0.2em] uppercase text-blue-400">
                            <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></div>
                            Secure Session | E2EE Active
                        </div>
                    </section>

                    <section>
                        <h2 className="text-2xl font-black mb-6 flex items-center gap-4 underline decoration-red-500 underline-offset-8 decoration-4">04. THE MARKETPLACE</h2>
                        <p className="text-base text-gray-700">If you cannot fulfill a favor, you can substitute it with a **Marketplace Gift Card**. This allows you to settle a "Soft Debt" with a "Hard Asset" (like a Coffee or Spa voucher) from our partner network. 555 takes a small commission on these transactions.</p>
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
            {/* Thesis Sidebar / Market Metrics */}
            <div className="md:col-span-1 space-y-6">
                <div className="bg-blue-900 text-white p-8 rounded-[3rem] shadow-2xl relative overflow-hidden group">
                    <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:scale-110 transition-transform"><Target size={160} /></div>
                    <h2 className="text-sm font-bold uppercase tracking-widest text-blue-300 mb-6">Investment Thesis</h2>
                    <p className="text-2xl font-black leading-tight mb-8 uppercase tracking-tighter">Digitizing the World's First "Trust Graph"</p>
                    <div className="space-y-6">
                        <div className="border-t border-white/10 pt-4">
                            <p className="text-xs text-blue-400 uppercase font-bold mb-2 tracking-widest">Competitive Moat</p>
                            <p className="font-semibold text-sm">Cultural Nostalgia + Localized "Thank You" Economics.</p>
                        </div>
                        <div className="border-t border-white/10 pt-4">
                            <p className="text-xs text-blue-400 uppercase font-bold mb-2 tracking-widest">Revenue Roadmap</p>
                            <p className="font-semibold text-sm">5% Settlement Comm. + Premium Vault Subscriptions.</p>
                        </div>
                    </div>
                </div>
                
                <div className="bg-white p-8 rounded-[3rem] border border-gray-100 shadow-sm space-y-8">
                    <div>
                        <h3 className="text-xs font-black text-gray-400 uppercase tracking-widest mb-6 flex items-center gap-2"><BarChart3 size={14}/> Key Market Metrics</h3>
                        <div className="space-y-8">
                            <div className="flex items-center gap-4">
                                <div className="bg-red-50 p-4 rounded-2xl"><Users2 className="text-red-500" size={24}/></div>
                                <div><p className="text-2xl font-black text-blue-900 leading-none">150M+</p><p className="text-[10px] text-gray-500 uppercase font-bold mt-1">Target Pairs (SEA/ASIA)</p></div>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="bg-blue-50 p-4 rounded-2xl"><Coins className="text-blue-500" size={24}/></div>
                                <div><p className="text-2xl font-black text-blue-900 leading-none">$12.4B</p><p className="text-[10px] text-gray-500 uppercase font-bold mt-1">Untracked Social Capital</p></div>
                            </div>
                        </div>
                    </div>
                    <div className="pt-6 border-t border-gray-100 text-center">
                        <p className="text-[10px] font-bold text-blue-900 uppercase tracking-[0.2em] mb-1">Funding Phase</p>
                        <p className="text-2xl font-black text-blue-900 uppercase tracking-tighter italic">Phase: Pre-Seed</p>
                    </div>
                </div>
            </div>

            {/* Comprehensive Pitch Deck Content */}
            <div className="md:col-span-2 bg-white rounded-[3rem] shadow-xl p-10 md:p-14 border-l-[2px] border-[#ff8787] border border-gray-100" style={{ backgroundImage: 'linear-gradient(#a5d8ff 1px, transparent 1px)', backgroundSize: '100% 2.5rem' }}>
              <div className="flex justify-between items-start mb-12 border-b-4 border-red-500 pb-4">
                <h1 className="text-4xl md:text-5xl font-black text-blue-900 uppercase tracking-tighter leading-none">Corporate Pitch</h1>
                <div className="hidden md:block text-right">
                    <p className="text-[10px] font-black text-red-500 uppercase tracking-[0.3em] mb-1">Confidential</p>
                    <p className="text-[8px] font-bold text-gray-400 font-mono">CODE: ALPHA_RE_2025</p>
                </div>
              </div>
              
              <div className="space-y-16 font-mono text-blue-900 text-lg leading-relaxed">
                <section>
                    <h2 className="text-2xl font-black mb-6 uppercase flex items-center gap-4 underline decoration-red-500 decoration-4">01. THE PROBLEM</h2>
                    <p className="text-gray-700 text-base leading-relaxed">Relationships decay not because of single events, but because of the **Invisible Effort Gap.** Banks track hard assets, but 70% of human value exchange is social capital. 555 bridges this gap by creating the first quantifiable "Relationship HUD" for couples, roommates, and small communities.</p>
                </section>

                <section>
                    <h2 className="text-2xl font-black mb-6 uppercase flex items-center gap-4 underline decoration-red-500 decoration-4">02. PROPRIETARY ALGORITHM</h2>
                    <p className="text-gray-700 text-base mb-6">Our Relationship Equilibrium (RE) engine assigns dynamic value to "Soft Capital." We don't just log tasks; we quantify effort. A ride to the airport has a higher weight than picking up coffee, adjusted by the user's Persona Lense.</p>
                    <div className="bg-blue-50 p-8 rounded-[2rem] border border-blue-100 text-sm font-bold text-blue-800 flex flex-col md:flex-row justify-between items-center gap-4">
                        <span className="bg-white px-4 py-2 rounded-xl shadow-sm italic">Value = (Cash × 1.0) + (Favor × W) + (Face_Save × 1.5)</span>
                        <div className="flex items-center gap-2 text-[10px] uppercase opacity-60"><Shield size={12}/> Secure HUD</div>
                    </div>
                </section>

                <section className="bg-blue-900 text-white p-10 rounded-[2.5rem] shadow-2xl relative overflow-hidden group">
                    <div className="absolute top-0 left-0 p-4 opacity-5 rotate-12 group-hover:rotate-0 transition-transform"><Globe size={200}/></div>
                    <h2 className="text-2xl font-black mb-4 uppercase flex items-center gap-4"><Globe size={24}/> 03. GLOBAL SCALING</h2>
                    <p className="text-blue-100 text-base leading-relaxed mb-8">SEA/Singapore is our beachhead. We tap into existing "555" cultural memory—a brand that already signals "trust" across generations. Our model is built for the "High Trust / Low Friction" community economies of the global south.</p>
                    <div className="grid grid-cols-2 gap-4 relative z-10">
                        <div className="bg-white/10 p-5 rounded-2xl border border-white/10 text-center"><p className="text-2xl font-black mb-1">2025</p><p className="text-[10px] uppercase font-black tracking-widest text-blue-300">MVP Alpha Launch</p></div>
                        <div className="bg-white/10 p-5 rounded-2xl border border-white/10 text-center"><p className="text-2xl font-black mb-1">2026</p><p className="text-[10px] uppercase font-black tracking-widest text-blue-300">Reward Marketplace</p></div>
                    </div>
                </section>

                <section>
                    <h2 className="text-2xl font-black mb-6 uppercase flex items-center gap-4 underline decoration-red-500 decoration-4">04. THE DATA MOAT</h2>
                    <p className="text-gray-700 text-base leading-relaxed">We are mapping **The Trust Graph.** By tracking reciprocal altruism, we build a data layer that reveals high-reliability nodes within social networks. This has massive implications for future community lending and decentralized identity scores.</p>
                </section>

                <section className="pt-10 border-t-2 border-dashed border-gray-200">
                    <h2 className="text-3xl font-black text-red-600 mb-4 uppercase tracking-tighter">Series Seed Ask</h2>
                    <p className="text-gray-500 text-sm leading-relaxed max-w-lg mb-8">We are seeking $1.5M in Seed funding to hire core engineering leads and secure partnerships with regional e-wallets for our favor-substitution marketplace. Join us in digitizing gratitude.</p>
                    <div className="flex gap-4">
                        <button className="bg-blue-900 text-white px-6 py-2 rounded-full text-xs font-black uppercase">Request Full Deck</button>
                        <button className="bg-gray-100 text-gray-500 px-6 py-2 rounded-full text-xs font-black uppercase">Financial Projections</button>
                    </div>
                </section>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Landing Footer */}
      <footer className="bg-white py-24 border-t border-gray-100">
        <div className="max-w-6xl mx-auto px-6 flex flex-col items-center text-center">
          <img src="/images/logo555.png" alt="555 Logo" className="h-16 w-auto mb-6 transform -rotate-3" onError={(e) => e.target.style.display='none'} />
          <div className="bg-red-600 text-white font-black text-3xl px-3 py-1 rounded shadow-lg transform -rotate-3 mb-6 uppercase tracking-tighter">555</div>
          <p className="text-[10px] font-black text-gray-400 mb-10 uppercase tracking-[0.5em] font-mono">where respect meets the ledger.</p>
          <div className="flex flex-wrap justify-center gap-10 text-xs font-bold text-blue-900 uppercase tracking-widest">
            <button onClick={() => setShowStory(true)} className="hover:text-red-600 transition-colors">The Narrative</button>
            <button onClick={() => showInternalView('manual')} className="hover:text-red-600 transition-colors">User Manual</button>
            <button onClick={() => showInternalView('investor')} className="hover:text-red-600 transition-colors">Investor Center</button>
          </div>
          <div className="mt-16 text-[10px] text-gray-300 font-mono flex items-center gap-2 uppercase tracking-widest">
            <Globe size={10}/> LIVE ON HTTPS://555.SOCIALZ.LIFE/
          </div>
        </div>
      </footer>

      {/* Narrative Legend Modal */}
      {showStory && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-blue-900/90 backdrop-blur-md animate-in fade-in duration-300" onClick={() => setShowStory(false)}>
          <div className="bg-white max-w-2xl w-full rounded-[2.5rem] shadow-2xl p-10 border-l-[2px] border-[#ff8787] relative overflow-hidden" onClick={e => e.stopPropagation()} style={{ backgroundImage: 'linear-gradient(#a5d8ff 1px, transparent 1px)', backgroundSize: '100% 2.5rem' }}>
            <button onClick={() => setShowStory(false)} className="absolute top-6 right-6 text-gray-400 hover:text-red-600 text-2xl font-bold transition-transform active:scale-90">✕</button>
            <div className="bg-red-600 text-white font-black text-xl px-2 py-0.5 rounded shadow-sm inline-block transform -rotate-2 mb-8 uppercase tracking-tighter">The Legend of 555</div>
            <div className="w-full mb-8 overflow-hidden rounded-2xl border-4 border-blue-900 shadow-xl bg-gray-50 aspect-video flex items-center justify-center">
                <img src="/images/rotiman.png" alt="Roti Man riding a motorcycle with bread racks" className="w-full h-full object-cover" onError={(e) => e.target.style.display='none'} />
                {!document.querySelector('img[src="/images/rotiman.png"]') && <span className="text-gray-400 font-mono text-sm italic">Legacy Image Placeholder</span>}
            </div>
            <div className="font-mono text-blue-900 space-y-6 text-lg leading-relaxed">
                <p>Before apps and instant transfers, community trust lived in a small yellow <strong>555 notebook</strong> carried by the Roti Man.</p>
                <p>He was a neighborhood staple on a motorcycle, his racks overflowing with snacks. He jotted debts with a pencil, and families honored those IOUs because the relationship was the collateral. No receipts, just unshakeable honor.</p>
                <p>555 digitizes this heritage—bringing back the era where a bond of respect mattered more than a credit score.</p>
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
    { id: 'buddies', title: 'The Real Ones', icon: <BeerIcon className="text-amber-500" size={24} />, desc: 'Wingman points and face-saving credits.' },
  ];

  return (
    <div className="min-h-screen bg-[#fdfbd4] flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-white rounded-[3rem] shadow-2xl p-10 border-l-[12px] border-red-600 relative overflow-hidden">
        <div className="flex gap-2 mb-10">
          {[1,2,3,4].map(s => <div key={s} className={`h-1.5 flex-1 rounded-full transition-all duration-500 ${s <= step ? 'bg-red-600' : 'bg-gray-100'}`} />)}
        </div>
        
        {step === 1 && (
          <div className="text-center space-y-6 animate-in fade-in slide-in-from-bottom duration-500">
            <div className="bg-red-600 text-white font-black text-6xl px-4 py-2 rounded shadow-xl transform -rotate-3 mb-6 inline-block uppercase">555</div>
            <h2 className="text-3xl font-black text-blue-900 uppercase tracking-tighter leading-none">The Handshake</h2>
            <p className="text-gray-500 font-mono text-sm leading-relaxed px-4 italic">"Establishing a shared ledger of trust between you and your partner."</p>
            <button onClick={() => setStep(2)} className="w-full bg-blue-900 text-white py-4 rounded-2xl font-black text-xl shadow-lg flex items-center justify-center gap-2 uppercase tracking-tighter active:scale-95 transition-transform">Choose Persona <ArrowRight size={20} /></button>
          </div>
        )}

        {step === 2 && (
          <div className="space-y-6 animate-in fade-in duration-500">
            <h2 className="text-2xl font-black text-blue-900 text-center uppercase tracking-tighter">Who are you linking?</h2>
            <div className="grid gap-4">
              {personas.map((p) => (
                <button key={p.id} onClick={() => { setPersona(p.title); setStep(3); }} className="flex items-start gap-4 p-5 rounded-3xl border-2 border-gray-100 hover:border-blue-900 bg-white text-left transition-all active:scale-95 group">
                  <div className="p-3 bg-gray-50 rounded-2xl group-hover:scale-110 transition-transform">{p.icon}</div>
                  <div className="flex-1">
                    <p className="font-bold text-blue-900 uppercase tracking-tight leading-none mb-1">{p.title}</p>
                    <p className="text-[10px] text-gray-400 font-mono">{p.desc}</p>
                  </div>
                </button>
              ))}
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="space-y-8 text-center animate-in fade-in duration-500">
            <div className="w-24 h-24 bg-blue-100 rounded-full mx-auto flex items-center justify-center shadow-inner"><Share2 className="w-10 h-10 text-blue-600" /></div>
            <div className="space-y-4">
                <h2 className="text-2xl font-black text-blue-900 uppercase tracking-tighter">Invite Partner</h2>
                <div className="bg-gray-50 p-4 rounded-2xl border border-dashed border-gray-300 font-mono text-[10px] text-blue-800 break-all leading-tight italic">
                    https://555.socialz.life/join?id=auth_{Math.random().toString(36).substr(2, 9)}
                </div>
                <p className="text-xs text-gray-500 font-mono leading-relaxed">Your partner must tap this link to sync your yellow notebooks securely.</p>
            </div>
            <button onClick={() => setStep(4)} className="w-full bg-[#25D366] text-white py-4 rounded-2xl font-black text-xl shadow-lg uppercase tracking-tighter active:scale-95 transition-transform">Invite via WhatsApp</button>
          </div>
        )}

        {step === 4 && (
          <div className="text-center space-y-8 animate-in zoom-in duration-700">
            <div className="w-32 h-32 bg-green-100 rounded-full mx-auto flex items-center justify-center shadow-lg"><CheckCircle className="w-16 h-16 text-green-500" /></div>
            <div className="space-y-2">
                <h2 className="text-3xl font-black text-blue-900 uppercase tracking-tighter leading-none">Synced!</h2>
                <p className="text-gray-500 font-mono text-sm px-8">Encryption keys exchanged. Your shared 555 book is now active.</p>
            </div>
            <button onClick={onComplete} className="w-full bg-blue-900 text-white py-4 rounded-2xl font-black text-xl shadow-lg uppercase tracking-tighter active:scale-95 transition-transform">Enter Dashboard</button>
          </div>
        )}
      </div>
    </div>
  );
};

// Custom Icon Logic
const BeerIcon = ({ size, className }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M17 11h1a3 3 0 0 1 0 6h-1" /><path d="M7 21h10" /><path d="M7 3h10" /><path d="M12 3v18" /><path d="M7 11h10" /><path d="M7 16h10" />
  </svg>
);

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
    { id: 'c3', title: '30-min Foot Massage', icon: '🦶', weight: 4 },
    { id: 'c4', title: 'Safe Drive Home', icon: '🚗', weight: 2 },
    { id: 'c5', title: 'Spontaneous Date Night', icon: '🎬', weight: 6 },
    { id: 'c6', title: 'Grocery Run Solo', icon: '🛒', weight: 2 },
  ];

  const EntryCard = ({ entry, isVault }) => (
    <div className={`p-5 mb-4 rounded-3xl border-2 transition-all shadow-sm ${isVault ? 'bg-gray-900 border-gray-800 text-white' : 'bg-white border-gray-100'}`}>
      <div className="flex justify-between items-start mb-4">
        <div className="flex items-center gap-3">
          <div className={`p-2 rounded-xl shadow-sm ${isVault ? 'bg-red-900/30' : 'bg-blue-50'}`}>
            {entry.type === 'hard' ? <ArrowDownLeft className="text-red-500" size={20} /> : 
             entry.type === 'soft' ? <Zap className="text-blue-500" size={20} /> : <EyeOff className="text-red-400" size={20} />}
          </div>
          <div>
            <h4 className="font-bold text-sm md:text-base tracking-tight leading-tight">{entry.title}</h4>
            <p className="text-[10px] text-gray-400 font-bold uppercase tracking-[0.1em] mt-1">{entry.date}</p>
          </div>
        </div>
        <div className="text-right">
          <span className={`text-lg font-black tracking-tighter ${entry.amount > 0 ? 'text-green-500' : 'text-red-500'}`}>
            {entry.amount > 0 ? `+${entry.amount}` : entry.amount}.00
          </span>
        </div>
      </div>
      {entry.amount < 0 && (
        <button 
          onClick={() => { setSettleItem(entry); setSettleStep(1); }} 
          className={`w-full py-3 rounded-2xl font-black text-[10px] uppercase tracking-[0.2em] flex items-center justify-center gap-2 transition-all active:scale-[0.98] ${isVault ? 'bg-white text-black' : 'bg-blue-900 text-white'}`}
        >
          Settle Up <ChevronRight size={12} />
        </button>
      )}
    </div>
  );

  return (
    <div className="min-h-screen bg-[#fdfbd4] pb-24 relative overflow-x-hidden">
      {/* FULL SCREEN SCROLLABLE SETTLE MODAL */}
      {settleItem && (
        <div className="fixed inset-0 z-[100] flex items-end justify-center bg-black/80 backdrop-blur-md px-4 overflow-hidden">
          <div className="w-full max-w-md bg-white rounded-t-[3rem] animate-in slide-in-from-bottom duration-300 max-h-[94vh] flex flex-col shadow-2xl relative">
            {/* Modal Header (Fixed) */}
            <div className="p-8 border-b border-gray-100 flex justify-between items-center bg-white rounded-t-[3rem] z-20">
              <h3 className="text-2xl font-black text-blue-900 uppercase tracking-tighter">Balance Item</h3>
              <button onClick={() => setSettleItem(null)} className="p-2 bg-gray-100 rounded-full hover:bg-red-50 transition-colors"><X size={20}/></button>
            </div>
            
            {/* Modal Content Area (Scrollable) */}
            <div className="p-8 overflow-y-auto flex-1 space-y-6 pb-24">
              {settleStep === 1 ? (
                <>
                  <div className="bg-blue-50 p-6 rounded-[2rem] border-2 border-blue-100 relative overflow-hidden shadow-inner">
                    <div className="absolute top-0 right-0 p-4 opacity-5"><Scale size={100}/></div>
                    <p className="text-[10px] uppercase font-black text-blue-400 mb-2 tracking-widest">Active Debt</p>
                    <p className="text-xl font-black text-blue-900 leading-tight">"{settleItem.title}"</p>
                    <p className="text-red-500 font-bold font-mono mt-2">{settleItem.amount}.00 Credits</p>
                  </div>
                  <p className="text-gray-500 font-mono text-sm italic leading-relaxed">"How do you wish to acknowledge this debt in the 555 book?"</p>
                  <div className="grid gap-4">
                    <button onClick={() => setSettleStep(2)} className="w-full bg-blue-900 text-white py-5 rounded-[1.5rem] font-black text-lg uppercase tracking-tighter flex justify-between px-8 items-center shadow-lg group active:scale-95 transition-transform">
                      Offer a Favor <ChevronRight className="group-hover:translate-x-1 transition-transform" />
                    </button>
                    <button onClick={() => setSettleItem(null)} className="w-full bg-white border-2 border-gray-100 text-gray-400 py-4 rounded-[1.5rem] font-black text-xs uppercase tracking-widest active:scale-95">Mark as Cash Paid</button>
                  </div>
                </>
              ) : settleStep === 2 ? (
                <>
                  <button onClick={() => setSettleStep(1)} className="text-xs font-bold text-blue-500 flex items-center gap-1 mb-4 uppercase tracking-[0.2em] font-black">← Back to Options</button>
                  <div className="space-y-4">
                    <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Select from Your Catalog</p>
                    <div className="grid gap-4">
                      {myCatalog.map(f => (
                        <button 
                          key={f.id} 
                          onClick={() => setSettleStep(3)}
                          className="w-full p-6 bg-white border-2 border-gray-100 rounded-2xl flex items-center gap-5 text-left hover:border-blue-900 hover:shadow-md transition-all active:scale-[0.98] group"
                        >
                          <span className="text-3xl group-hover:scale-110 transition-transform">{f.icon}</span>
                          <div className="flex-1">
                            <p className="font-black text-blue-900 uppercase tracking-tight text-sm">{f.title}</p>
                            <p className="text-[10px] text-gray-400 font-mono tracking-widest mt-1">Weighted: {f.weight} Face Credits</p>
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>
                </>
              ) : (
                <div className="text-center py-10 space-y-8">
                  <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto shadow-sm"><Check className="text-green-600" size={48} /></div>
                  <div>
                    <h4 className="text-3xl font-black text-blue-900 uppercase tracking-tighter mb-2 leading-none">Proposal Sent!</h4>
                    <p className="text-gray-500 text-sm leading-relaxed px-6 italic font-mono">Juliet has been notified. Once she acknowledges the favor, the equilibrium HUD will rebalance.</p>
                  </div>
                  <button onClick={() => setSettleItem(null)} className="w-full bg-blue-900 text-white py-5 rounded-[1.5rem] font-black text-lg uppercase tracking-tighter shadow-xl active:scale-95 transition-transform">Return to Book</button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* DASHBOARD HEADER */}
      <header className="bg-white px-6 pt-10 pb-6 border-b border-gray-100 rounded-b-[3rem] shadow-sm">
        <div className="flex justify-between items-center mb-10">
            <div className="flex items-center gap-3">
              <img src="/images/logo555.png" alt="555 Logo" className="h-8 w-auto rounded shadow-sm transform -rotate-2" onError={(e) => e.target.style.display='none'} />
              <div className="bg-red-600 text-white font-black text-xl px-2 py-0.5 rounded shadow-sm transform -rotate-3 uppercase tracking-tighter">555</div>
            </div>
            <div className="flex gap-4">
                <button className="p-2 bg-gray-50 rounded-full text-gray-400 relative">
                    <Bell size={20} />
                    <div className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></div>
                </button>
                <button onClick={onLogout} className="p-2 bg-gray-50 rounded-full text-gray-400 hover:text-red-500 transition-colors"><Settings size={20} /></button>
            </div>
        </div>
        
        {/* RELATIONSHIP HUD */}
        <div className="bg-blue-900 rounded-[2.5rem] p-8 text-white relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 p-4 opacity-5"><Scale size={120}/></div>
          <div className="relative z-10 flex justify-between items-end">
            <div>
                <p className="text-[10px] font-black uppercase tracking-[0.3em] text-blue-300 mb-2">Relationship Equilibrium</p>
                <h2 className="text-5xl font-black tracking-tighter">+35.00</h2>
            </div>
            <div className="text-right">
                <span className="bg-green-500 text-white text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-widest shadow-lg">Hero Zone</span>
            </div>
          </div>
        </div>
      </header>

      {/* WALL/VAULT SWITCHER */}
      <div className="flex p-4 gap-4">
        <button onClick={() => setActiveTab('wall')} className={`flex-1 py-4 rounded-2xl font-black text-[10px] uppercase tracking-[0.2em] transition-all ${activeTab === 'wall' ? 'bg-blue-900 text-white shadow-xl translate-y-[-2px]' : 'bg-white text-gray-400 border border-gray-100 hover:bg-gray-50'}`}>Public Wall</button>
        <button onClick={() => setActiveTab('vault')} className={`flex-1 py-4 rounded-2xl font-black text-[10px] uppercase tracking-[0.2em] transition-all ${activeTab === 'vault' ? 'bg-gray-900 text-white shadow-xl translate-y-[-2px]' : 'bg-white text-gray-400 border border-gray-100 hover:bg-gray-50'}`}>The Vault</button>
      </div>

      {/* FEED CONTENT */}
      <main className="px-4 pb-20">
        <div className="mb-4 px-2 flex justify-between items-center"><h3 className="font-black text-blue-900 uppercase tracking-[0.3em] text-[10px] opacity-40">Recent Activity</h3></div>
        <div className="space-y-4">
            {activeTab === 'wall' ? (
                <>
                    <EntryCard entry={{ id: 1, type: 'hard', title: 'Lunch @ Hawker Center', amount: -15.00, date: '2h ago' }} isVault={false} />
                    <EntryCard entry={{ id: 3, type: 'soft', title: 'PPT Assistance', amount: 12, date: 'Yesterday' }} isVault={false} />
                </>
            ) : (
                <EntryCard entry={{ id: 2, type: 'face', title: 'Silent Laundry Rescue', amount: 8, date: '3h ago' }} isVault={true} />
            )}
        </div>
      </main>

      {/* FIXED FAB MENU FIX */}
      <div className="fixed bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center z-[110]">
        {showAddMenu && (
          <div className="bg-white p-3 rounded-3xl shadow-2xl mb-6 border-2 border-gray-100 animate-in slide-in-from-bottom-4 flex gap-4 backdrop-blur-md bg-white/95">
            <button className="p-5 bg-blue-50 rounded-2xl text-blue-900 hover:bg-blue-100 transition-all active:scale-90 flex flex-col items-center gap-1 border border-blue-100">
                <ArrowUpRight size={28} />
                <span className="text-[10px] font-black uppercase tracking-widest">I Owe</span>
            </button>
            <button className="p-5 bg-red-50 rounded-2xl text-red-600 hover:bg-red-100 transition-all active:scale-90 flex flex-col items-center gap-1 border border-red-100">
                <ArrowDownLeft size={28} />
                <span className="text-[10px] font-black uppercase tracking-tighter">They Owe</span>
            </button>
            <button className="p-5 bg-gray-900 rounded-2xl text-white hover:bg-black transition-all active:scale-90 flex flex-col items-center gap-1 shadow-lg">
                <EyeOff size={28} />
                <span className="text-[10px] font-black uppercase">Vault</span>
            </button>
          </div>
        )}
        <button 
          onClick={() => setShowAddMenu(!showAddMenu)} 
          className={`w-20 h-20 rounded-full flex items-center justify-center text-white shadow-2xl transition-all active:scale-90 z-[120] ${showAddMenu ? 'bg-red-600 rotate-45 scale-110 shadow-red-500/40' : 'bg-blue-900 shadow-blue-900/30'}`}
        >
          <Plus size={36} strokeWidth={3} />
        </button>
        {showAddMenu && <div className="fixed inset-0 bg-blue-900/20 backdrop-blur-[2px] -z-10" onClick={() => setShowAddMenu(false)}></div>}
      </div>
    </div>
  );
};

/** * MAIN HUB */
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
