import React, { useState, useEffect } from 'react';
import { 
  Plus, Shield, EyeOff, ArrowUpRight, ArrowDownLeft, Settings, 
  Bell, Heart, Zap, Lock, History, X, ChevronRight, Check,
  Share2, CheckCircle, Home, User, MessageSquareHeart, ArrowRight
} from 'lucide-react';

/** * 1. LANDING PAGE COMPONENT 
 * Featured: Roti Man Story, Equilibrium Demo, Personas, and Investor Center.
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
    <div className="min-h-screen bg-[#fdfbd4] text-[#1a1a1a]">
      {/* Nav */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
        <div className="max-w-6xl mx-auto p-4 flex justify-between items-center">
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => showInternalView('home')}>
            <div className="bg-red-600 text-white font-black text-2xl px-2 py-0.5 rounded shadow-sm transform -rotate-2">555</div>
            <span className="font-bold text-lg text-blue-900 uppercase">Book</span>
          </div>
          <div className="hidden md:flex gap-8 font-semibold text-gray-600 text-sm">
            <a href="#equilibrium" className="hover:text-blue-900">The Balance</a>
            <a href="#vault" className="hover:text-blue-900">The Vault</a>
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
              <span className="bg-red-100 text-red-600 font-bold px-3 py-1 rounded-full text-xs uppercase tracking-widest">A Relationship Saver</span>
              <h1 className="text-6xl font-black text-blue-900 leading-tight">
                Track the invisible <br />effort of <span className="text-red-600 italic">love.</span>
              </h1>
              <p className="text-xl text-gray-700 leading-relaxed">
                The digital 555 book for the things money can't buy. From dinner bills to "saving face," keep your relationships balanced.
              </p>
              <div className="pt-4 flex flex-col sm:flex-row gap-4">
                <button onClick={onStart} className="bg-blue-900 text-white px-10 py-4 rounded-2xl text-lg font-black shadow-xl hover:-translate-y-1 transition active:scale-95">Claim Your Book</button>
                <button onClick={() => showInternalView('manual')} className="bg-white border-2 border-blue-900 text-blue-900 px-10 py-4 rounded-2xl text-lg font-bold hover:bg-blue-50 transition">Read the Manual</button>
              </div>
            </div>

            {/* Notebook Demo */}
            <div className="bg-white shadow-2xl rounded-3xl p-8 border-l-[2px] border-[#ff8787] border border-gray-100" style={{ backgroundImage: 'linear-gradient(#a5d8ff 1px, transparent 1px)', backgroundSize: '100% 2.5rem' }}>
              <div className="flex justify-between items-center mb-6 border-b-2 border-blue-900 pb-2">
                <h3 className="text-2xl font-bold text-blue-900 uppercase tracking-tighter">My Ledger</h3>
                <span className="text-sm font-bold text-red-400 font-mono">Page 42</span>
              </div>
              <div className="space-y-6 font-mono text-lg">
                <div className="flex justify-between items-center">
                  <span>📢 Picked up Groceries</span>
                  <span className="text-green-600 font-bold">+1 Fav</span>
                </div>
                <div className="flex justify-between items-center text-blue-900 bg-blue-50/50 p-2 rounded-lg border border-blue-100">
                  <span>🔒 Saved Face (Late to Dinner)</span>
                  <span className="text-red-600 font-bold">-5 Face</span>
                </div>
                <div className="h-16"></div>
                <div className="bg-yellow-50 p-4 rounded-xl border border-yellow-200 text-sm italic text-yellow-800">
                  "Thanks for not mentioning I forgot the keys again in front of the landlord. I owe you one."
                </div>
              </div>
            </div>
          </header>

          {/* Equilibrium Demo */}
          <section id="equilibrium" className="bg-blue-900 text-white py-24 overflow-hidden relative">
            <div className="max-w-4xl mx-auto px-6 text-center">
              <h2 className="text-4xl md:text-5xl font-black mb-6 uppercase">The Balance Scale</h2>
              <div className="bg-white/5 p-8 md:p-16 rounded-[3rem] border border-white/10 backdrop-blur-xl">
                <div className="flex justify-between mb-6 font-black text-xs uppercase tracking-widest text-blue-300">
                  <span>Giving Much</span>
                  <span>Perfect Sync</span>
                  <span>Taking Much</span>
                </div>
                <div className="relative h-6 bg-white/10 rounded-full mb-10 border border-white/10">
                  <div className="absolute h-full w-4 bg-white shadow-[0_0_30px_#fff] rounded-full -translate-x-1/2 transition-all duration-500" style={{ left: `${balance}%` }}></div>
                </div>
                <h3 className="text-3xl font-bold mb-10 font-mono uppercase" style={{ color: status.color }}>{status.text}</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  <button onClick={() => updateBalance(-15)} className="bg-white/10 hover:bg-white/20 py-4 rounded-2xl font-bold transition">I did a Favor</button>
                  <button onClick={() => updateBalance(-30)} className="bg-green-500/20 hover:bg-green-500/40 py-4 rounded-2xl font-bold transition">I saved face</button>
                  <button onClick={() => updateBalance(20)} className="bg-red-500/20 hover:bg-red-500/40 py-4 rounded-2xl font-bold transition">They paid</button>
                </div>
              </div>
            </div>
          </section>

          {/* Private Vault Info */}
          <section id="vault" className="py-24 bg-gradient-to-br from-blue-900 to-black text-white overflow-hidden">
            <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
              <div className="order-2 md:order-1 relative">
                <div className="bg-white/10 p-10 rounded-3xl border border-white/20 backdrop-blur-md relative overflow-hidden group">
                  <div className="absolute top-4 right-4 text-xs text-blue-300 font-mono tracking-widest uppercase">E2E Encrypted</div>
                  <div className="space-y-6">
                    <div className="flex items-center gap-4 border-b border-white/10 pb-4">
                      <div className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center font-bold">555</div>
                      <div className="flex-1">
                        <div className="h-2 w-24 bg-white/20 rounded"></div>
                        <div className="h-4 w-40 bg-white/40 rounded mt-2"></div>
                      </div>
                      <div className="text-red-400"><Lock size={18} /></div>
                    </div>
                    <p className="p-4 bg-white/5 rounded-xl border border-white/10 italic text-sm">
                      "Silent entries" are only visible to you and your partner. Encrypted end-to-end for privacy.
                    </p>
                  </div>
                </div>
                <div className="absolute -top-6 -left-6 w-20 h-20 bg-red-600 rounded-2xl -rotate-12 flex items-center justify-center text-3xl shadow-2xl animate-pulse">🤫</div>
              </div>
              <div className="order-1 md:order-2 space-y-8">
                <h2 className="text-5xl font-black leading-tight uppercase tracking-tighter">Saving Face: <br /><span className="text-red-500">The Private Vault</span></h2>
                <p className="text-xl text-blue-100 font-light leading-relaxed">Protected intimacy through client-side encryption. Log the help that matters without broadcast.</p>
              </div>
            </div>
          </section>

          {/* Personas Section */}
          <section className="py-24 bg-white">
            <div className="max-w-6xl mx-auto px-6 text-center mb-16 uppercase">
              <h2 className="text-4xl font-black text-blue-900 mb-4 tracking-tight">The 555 Personas</h2>
              <p className="text-gray-600 text-xs font-bold tracking-widest">Tailored catalogs for every bond.</p>
            </div>
            <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-8 text-center">
              {['Roommate', 'Young Couple', 'The Real Ones'].map((persona, i) => (
                <div key={i} className={`group p-8 rounded-3xl border-2 transition-all cursor-pointer ${i === 1 ? 'border-blue-900 bg-blue-50 shadow-xl' : 'border-gray-100 hover:border-blue-900'}`}>
                  <div className="text-5xl mb-6">{i === 0 ? '🎓' : i === 1 ? '🌶️' : '🍻'}</div>
                  <h3 className="text-2xl font-bold text-blue-900 mb-4 uppercase tracking-tighter">{persona}</h3>
                  <ul className="text-left space-y-3 text-gray-500 text-sm font-mono">
                    <li>• {i === 0 ? 'Dishes Exorcism' : i === 1 ? 'Wild Card Reward' : 'Wingman points'}</li>
                    <li>• {i === 0 ? 'Laundry Rescue' : i === 1 ? 'Date Night Dictator' : 'Safe Drive Home'}</li>
                  </ul>
                </div>
              ))}
            </div>
          </section>
        </>
      )}

      {currentView === 'manual' && (
        <div className="max-w-4xl mx-auto px-6 py-16 animate-in fade-in duration-500">
          <button onClick={() => showInternalView('home')} className="text-blue-900 font-bold mb-8 flex items-center gap-2">← Back</button>
          <div className="bg-white rounded-[3rem] shadow-xl p-12 border-l-[2px] border-[#ff8787] border border-gray-100" style={{ backgroundImage: 'linear-gradient(#a5d8ff 1px, transparent 1px)', backgroundSize: '100% 2.5rem' }}>
            <h1 className="text-5xl font-black text-blue-900 mb-12 uppercase border-b-4 border-red-500 pb-4">User Manual</h1>
            <div className="space-y-12 font-mono text-blue-900 text-lg">
                <section><h2 className="text-2xl font-black mb-4">1. Handshake</h2><p>Link via WhatsApp. Mutual approval required for all entries.</p></section>
                <section className="bg-blue-50 p-8 rounded-3xl border-2 border-blue-100"><h2 className="text-2xl font-black mb-4 uppercase">2. Face-Saving</h2><p>Log private credits in the Vault. Strictly E2EE.</p></section>
                <section><h2 className="text-2xl font-black mb-4">3. Settle</h2><p>Offer favors or mark as paid to rebalance.</p></section>
            </div>
          </div>
        </div>
      )}

      {currentView === 'investor' && (
        <div className="max-w-6xl mx-auto px-6 py-16 animate-in fade-in duration-500">
          <button onClick={() => showInternalView('home')} className="text-blue-900 font-bold mb-8 flex items-center gap-2">← Back to Home</button>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Sidebar / Stats */}
            <div className="md:col-span-1 space-y-6">
                <div className="bg-blue-900 text-white p-8 rounded-[2rem] shadow-xl">
                    <h2 className="text-sm font-bold uppercase tracking-widest text-blue-300 mb-6">Investment Hook</h2>
                    <p className="text-2xl font-black leading-tight mb-6 uppercase">Digitizing the World's First "Trust Graph"</p>
                    <div className="space-y-4">
                        <div className="border-t border-white/10 pt-4">
                            <p className="text-xs text-blue-400 uppercase font-bold">Market Problem</p>
                            <p className="font-semibold text-sm">Invisible Effort & Social Friction</p>
                        </div>
                        <div className="border-t border-white/10 pt-4">
                            <p className="text-xs text-blue-400 uppercase font-bold">Proprietary Moat</p>
                            <p className="font-semibold text-sm">Nostalgic Brand + E2EE Vault</p>
                        </div>
                    </div>
                </div>
                
                <div className="bg-white p-8 rounded-[2rem] border border-gray-100 shadow-sm">
                    <p className="text-xs text-gray-400 uppercase font-bold mb-4">Revenue Model</p>
                    <ul className="space-y-3 font-bold text-blue-900 text-sm">
                        <li>• 5% Marketplace Commission</li>
                        <li>• Premium "Vault" Subscriptions</li>
                        <li>• B2B Community Portals</li>
                    </ul>
                </div>
            </div>

            {/* Detailed Content */}
            <div className="md:col-span-2 bg-white rounded-[3rem] shadow-xl p-10 md:p-14 border-l-[2px] border-[#ff8787] border border-gray-100" style={{ backgroundImage: 'linear-gradient(#a5d8ff 1px, transparent 1px)', backgroundSize: '100% 2.5rem' }}>
              <h1 className="text-4xl md:text-5xl font-black text-blue-900 mb-8 uppercase border-b-4 border-red-500 pb-4 tracking-tighter">Investor Deck</h1>
              
              <div className="space-y-12 font-mono text-blue-900 text-lg leading-relaxed">
                <section>
                    <h2 className="text-2xl font-black mb-4 uppercase">01. The Problem</h2>
                    <p>Modern relationships fail because of an imbalance of effort. Banks track money, but nobody tracks the **"Social Capital"**—the favors, support, and face-saving moments that keep people together.</p>
                </section>

                <section>
                    <h2 className="text-2xl font-black mb-4 uppercase">02. The Solution</h2>
                    <p>555 creates a visible "Equilibrium" between parties. By quantifying both Hard Debt (Money) and Soft Debt (Favors), we prevent the silent resentment that leads to relationship decay.</p>
                </section>

                <section className="bg-blue-50/50 p-6 rounded-2xl border-2 border-blue-100">
                    <h2 className="text-2xl font-black mb-4 uppercase">03. The Moat</h2>
                    <p>Our brand leverages the deep nostalgia of the 555 notebook and the "Roti Man" trust system. This drives organic virality and creates an immediate bond of trust with our target demographic.</p>
                </section>

                <section>
                    <h2 className="text-2xl font-black mb-4 uppercase">04. The Data Play</h2>
                    <p>We are building the world's first **"Trust Graph."** This is a unique dataset of social reliability and reciprocal altruism, creating a new layer for community-based fintech and credit-scoring alternatives.</p>
                </section>

                <section>
                    <h2 className="text-2xl font-black mb-4 uppercase">05. The Ask</h2>
                    <p>We are seeking seed funding to scale our MVP to the first 500,000 active pairs and integrate deep marketplace hooks for favor-to-reward fulfillment.</p>
                </section>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="bg-white py-20 border-t border-gray-100">
        <div className="max-w-6xl mx-auto px-6 flex flex-col items-center text-center">
          <div className="bg-red-600 text-white font-black text-3xl px-3 py-1 rounded shadow-lg transform -rotate-3 mb-6 uppercase">555</div>
          <div className="flex flex-wrap justify-center gap-8 text-sm font-bold text-blue-900 uppercase tracking-widest">
            <button onClick={() => setShowStory(true)} className="hover:text-red-600 transition">The Roti Man Story</button>
            <button onClick={() => showInternalView('manual')} className="hover:text-red-600 transition">User Manual</button>
            <button onClick={() => showInternalView('investor')} className="hover:text-red-600 transition uppercase tracking-tighter">Investor Center</button>
          </div>
        </div>
      </footer>

      {/* Roti Man Story Modal */}
      {showStory && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-blue-900/85 backdrop-blur-md" onClick={() => setShowStory(false)}>
          <div className="bg-white max-w-2xl w-full rounded-[2.5rem] shadow-2xl p-10 border-l-[2px] border-[#ff8787] relative overflow-hidden" onClick={e => e.stopPropagation()} style={{ backgroundImage: 'linear-gradient(#a5d8ff 1px, transparent 1px)', backgroundSize: '100% 2.5rem' }}>
            <button onClick={() => setShowStory(false)} className="absolute top-6 right-6 text-gray-400 hover:text-red-600 text-2xl font-bold">✕</button>
            <div className="bg-red-600 text-white font-black text-xl px-2 py-0.5 rounded shadow-sm inline-block transform -rotate-2 mb-6 uppercase">The Legend of 555</div>
            <div className="w-full mb-8 overflow-hidden rounded-2xl border-4 border-blue-900 shadow-lg bg-gray-100">
                <img src="/images/rotiman.png" alt="Roti Man" className="w-full h-auto object-cover" onError={(e) => e.target.style.display='none'} />
            </div>
            <div className="font-mono text-blue-900 space-y-6 text-lg leading-relaxed">
                <p>Before apps, the <strong>Roti Man</strong> on his motorcycle jotted IOUs in a small yellow <strong>555 notebook</strong>. It was a community system built on <strong>unspoken trust.</strong></p>
                <p>555 digitizes this heritage for the modern era.</p>
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
            <button onClick={() => setStep(2)} className="w-full bg-blue-900 text-white py-4 rounded-2xl font-bold text-xl shadow-lg flex items-center justify-center gap-2 uppercase tracking-tighter">Choose Persona <ArrowRight size={20} /></button>
          </div>
        )}
        {step === 2 && (
          <div className="space-y-6">
            <h2 className="text-2xl font-black text-blue-900 text-center uppercase tracking-tighter">Select Role</h2>
            <div className="grid gap-4">
              {['Couple', 'Roommate', 'The Real Ones'].map((p, i) => (
                <button key={p} onClick={() => { setPersona(p); setStep(3); }} className="flex items-start gap-4 p-5 rounded-3xl border-2 border-gray-100 hover:border-blue-900 bg-white text-left transition-all">
                  <div className="text-2xl">{i === 0 ? '🌶️' : i === 1 ? '🎓' : '🍻'}</div>
                  <div className="flex-1 font-bold text-blue-900 uppercase">{p}</div>
                </button>
              ))}
            </div>
          </div>
        )}
        {step === 3 && (
          <div className="space-y-8 text-center">
            <div className="w-24 h-24 bg-blue-100 rounded-full mx-auto flex items-center justify-center"><Share2 className="w-10 h-10 text-blue-600" /></div>
            <h2 className="text-2xl font-black text-blue-900 uppercase tracking-tighter">Invite Partner</h2>
            <button onClick={() => setStep(4)} className="w-full bg-[#25D366] text-white py-4 rounded-2xl font-bold text-xl shadow-lg uppercase tracking-tighter">Sync via WhatsApp</button>
          </div>
        )}
        {step === 4 && (
          <div className="text-center space-y-8">
            <div className="w-32 h-32 bg-green-100 rounded-full mx-auto flex items-center justify-center"><CheckCircle className="w-16 h-16 text-green-500" /></div>
            <h2 className="text-3xl font-black text-blue-900 uppercase tracking-tighter">Verified!</h2>
            <button onClick={onComplete} className="w-full bg-blue-900 text-white py-4 rounded-2xl font-bold text-xl shadow-lg uppercase tracking-tighter">Open Your Book</button>
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

  const EntryCard = ({ entry, isVault }) => (
    <div className={`p-5 mb-4 rounded-3xl border-2 transition-all ${isVault ? 'bg-gray-900 border-gray-800 text-white' : 'bg-white border-gray-100 shadow-sm'}`}>
      <div className="flex justify-between items-start mb-4">
        <div className="flex items-center gap-3">
          <div className={`p-2 rounded-xl ${isVault ? 'bg-red-900/30' : 'bg-blue-50'}`}>
            {entry.type === 'hard' ? <ArrowDownLeft className="text-red-500" size={20} /> : <Zap className="text-blue-500" size={20} />}
          </div>
          <div><h4 className="font-bold">{entry.title}</h4><p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">{entry.date}</p></div>
        </div>
        <div className="text-right"><span className={`text-lg font-black ${entry.amount > 0 ? 'text-green-500' : 'text-red-500'}`}>{entry.amount > 0 ? `+${entry.amount}` : entry.amount}</span></div>
      </div>
      {entry.amount < 0 && (
        <button onClick={() => setSettleItem(entry)} className={`w-full py-3 rounded-2xl font-bold text-xs uppercase tracking-widest flex items-center justify-center gap-2 ${isVault ? 'bg-white text-black' : 'bg-blue-900 text-white'}`}>Settle Up <ChevronRight size={14} /></button>
      )}
    </div>
  );

  return (
    <div className="min-h-screen bg-[#fdfbd4] pb-24 relative overflow-x-hidden">
      {settleItem && (
        <div className="fixed inset-0 z-[60] flex items-end justify-center bg-black/60 backdrop-blur-sm px-4">
          <div className="w-full max-w-md bg-white rounded-t-[3rem] p-8 animate-in slide-in-from-bottom duration-300">
            <h3 className="text-2xl font-black text-blue-900 uppercase tracking-tighter mb-8">Settle Item</h3>
            <button onClick={() => setSettleItem(null)} className="w-full bg-blue-900 text-white py-4 rounded-2xl font-bold text-lg uppercase tracking-tighter">Propose Favor</button>
          </div>
        </div>
      )}
      <header className="bg-white px-6 pt-8 pb-6 border-b border-gray-100 rounded-b-[3rem] shadow-sm text-center">
        <div className="flex justify-between items-center mb-8">
            <div className="bg-red-600 text-white font-black text-xl px-2 py-0.5 rounded shadow-sm transform -rotate-3 uppercase">555</div>
            <div className="flex gap-3"><button className="p-2 bg-gray-50 rounded-full text-gray-400"><Bell size={20} /></button><button onClick={onLogout} className="p-2 bg-gray-50 rounded-full text-gray-400"><Settings size={20} /></button></div>
        </div>
        <div className="bg-blue-900 rounded-[2.5rem] p-6 text-white relative overflow-hidden">
          <div className="relative z-10"><h2 className="text-3xl font-black">+35</h2><p className="text-[10px] font-bold uppercase tracking-widest text-blue-300">Relationship HUD</p></div>
        </div>
      </header>
      <div className="flex p-4 gap-4">
        <button onClick={() => setActiveTab('wall')} className={`flex-1 py-4 rounded-2xl font-black text-xs uppercase transition-all ${activeTab === 'wall' ? 'bg-blue-900 text-white' : 'bg-white text-gray-400'}`}>Public Wall</button>
        <button onClick={() => setActiveTab('vault')} className={`flex-1 py-4 rounded-2xl font-black text-xs uppercase transition-all ${activeTab === 'vault' ? 'bg-gray-900 text-white' : 'bg-white text-gray-400'}`}>The Vault</button>
      </div>
      <main className="px-4">
        {activeTab === 'wall' ? <EntryCard entry={{ id: 1, type: 'hard', title: 'Lunch', amount: -15.00, date: '2h ago' }} isVault={false} /> : <EntryCard entry={{ id: 2, type: 'soft', title: 'Private Favor', amount: 5, date: '3h ago' }} isVault={true} />}
      </main>
      
      {/* Floating Action Menu */}
      <div className="fixed bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center z-50">
        {showAddMenu && (
          <div className="bg-white p-2 rounded-3xl shadow-2xl mb-4 border-2 border-gray-100 animate-in slide-in-from-bottom-4 flex gap-2">
            <button className="p-4 bg-blue-50 rounded-2xl text-blue-900 hover:bg-blue-100 transition-colors">
                <ArrowUpRight size={24} />
                <span className="block text-[8px] font-black mt-1 uppercase">I Owe</span>
            </button>
            <button className="p-4 bg-red-50 rounded-2xl text-red-600 hover:bg-red-100 transition-colors">
                <ArrowDownLeft size={24} />
                <span className="block text-[8px] font-black mt-1 uppercase">They Owe</span>
            </button>
            <button className="p-4 bg-gray-900 rounded-2xl text-white hover:bg-black transition-colors">
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

/** * MAIN APP CONTAINER 
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