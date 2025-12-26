import React, { useState, useEffect } from 'react';
import { 
  Plus, Shield, EyeOff, ArrowUpRight, ArrowDownLeft, Settings, 
  Bell, Heart, Zap, Lock, History, X, ChevronRight, Check,
  Share2, CheckCircle, Home, User, MessageSquareHeart, ArrowRight,
  Coffee, Utensils, Trash2, Map, Sparkles, Beer, Users, Globe, PlusCircle, MinusCircle
} from 'lucide-react';

/** * GLOBAL CONFIG: Personas & Catalogs 
 */
const PERSONAS = [
  { 
      id: 'couple', 
      title: 'Young Couple', 
      icon: <Heart className="text-red-500" size={32} />, 
      motto: 'Balance the Invisible Effort',
      desc: 'Most relationships fail over chores and forgotten favors. 555 quantifies the emotional labor of love to stop silent resentment.',
      catalogs: ['30-min Massage', 'Date Night Dictator', 'Silent Apology', 'Wild Card Reward']
  },
  { 
      id: 'roommate', 
      title: 'Roommates', 
      icon: <Home className="text-blue-500" size={32} />, 
      motto: 'Zero Passive-Aggression',
      desc: 'Stop the awkward group chat texts. Manage bills and chore bypasses with cold, hard social capital and documented honor.',
      catalogs: ['Dish Duty Bypass', 'Grocery Run Hero', 'Laundry Rescue', 'Trash Duty Credit']
  },
  { 
      id: 'buddies', 
      title: 'The Real Ones', 
      icon: <Beer className="text-amber-500" size={32} />, 
      motto: 'Bonded by Honor',
      desc: 'For the wingmen, the designated drivers, and the crew. A ledger built for the loyalty that money can’t buy.',
      catalogs: ['Phone Guard', 'Wingman Assist', 'Safe Driver Hero', 'Last Round Credit']
  },
];

/** * 1. LANDING PAGE COMPONENT 
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

  const showView = (v) => { setCurrentView(v); window.scrollTo(0, 0); };

  return (
    <div className="min-h-screen bg-[#fdfbd4] text-[#1a1a1a] font-sans selection:bg-red-200">
      {/* Nav */}
      <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-200 px-4 py-3">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => showView('home')}>
            <div className="bg-red-600 text-white font-black text-2xl px-2 py-0.5 rounded shadow-sm transform -rotate-2 uppercase tracking-tighter">555</div>
            <span className="font-bold text-lg text-blue-900 uppercase tracking-tighter">Book</span>
          </div>
          <div className="hidden md:flex gap-8 font-bold text-gray-400 text-[10px] uppercase tracking-[0.2em]">
            <button onClick={() => showView('home')} className="hover:text-blue-900">The Ledger</button>
            <button onClick={() => showView('investor')} className="hover:text-blue-900">Investor Center</button>
            <button onClick={() => setShowStory(true)} className="text-red-500 hover:text-red-600 font-black">Roti Man Story</button>
          </div>
          <button onClick={onStart} className="bg-blue-900 text-white px-6 py-2 rounded-full font-bold text-xs uppercase tracking-tighter hover:scale-105 transition shadow-lg shadow-blue-900/20">Claim Your Book</button>
        </div>
      </nav>

      {currentView === 'home' && (
        <>
          {/* High-Fidelity Hero */}
          <header className="max-w-6xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8 animate-in slide-in-from-left duration-700">
              <div className="inline-flex items-center gap-2 bg-red-100 text-red-700 font-bold px-4 py-1 rounded-full text-[10px] uppercase tracking-widest border border-red-200 shadow-sm">
                <Shield size={12}/> Relationship Insurance Policy
              </div>
              <h1 className="text-6xl md:text-7xl font-black text-blue-900 leading-[1] tracking-tighter">
                Track the <br /><span className="text-red-600 italic">Invisible Effort</span> <br />of Love.
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed max-w-md font-medium">
                Most relationships fail due to unspoken resentment. 555 is a social ledger that tracks money and favors, ensuring **Relationship Equilibrium** through transparency and gratitude.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <button onClick={onStart} className="bg-blue-900 text-white px-10 py-5 rounded-3xl text-xl font-black shadow-2xl hover:-translate-y-1 transition active:scale-95">Open Your Book</button>
                <button onClick={() => showView('manual')} className="bg-white border-2 border-blue-900 text-blue-900 px-10 py-5 rounded-3xl text-xl font-bold hover:bg-blue-50 transition shadow-lg">How it Works</button>
              </div>
            </div>

            {/* Interactive Notebook Demo */}
            <div className="relative bg-white shadow-2xl rounded-[3rem] p-10 border-l-[15px] border-red-600 border border-gray-100 min-h-[450px] transform hover:rotate-1 transition-transform" style={{ backgroundImage: 'linear-gradient(#a5d8ff 1px, transparent 1px)', backgroundSize: '100% 2.5rem' }}>
                <div className="flex justify-between items-center mb-10 border-b-2 border-blue-900 pb-2 uppercase font-black text-blue-900 tracking-tighter">
                    <span>Active Ledger</span>
                    <span className="text-red-400 font-mono text-xs tracking-widest">Page 042</span>
                </div>
                <div className="space-y-8 font-mono text-xl text-blue-900">
                    <div className="flex justify-between items-center">
                        <span>📢 Picked up Groceries</span>
                        <span className="text-green-600 font-bold">+1 Fav</span>
                    </div>
                    <div className="flex justify-between bg-blue-50 p-4 rounded-xl border border-blue-100 shadow-sm">
                        <span className="flex items-center gap-3 font-bold"><Lock size={20} className="text-blue-400"/> Saved Face (Dinner)</span>
                        <span className="text-red-600 font-black">-5 Face</span>
                    </div>
                    <div className="h-16"></div>
                    <p className="text-base italic text-gray-400 border-t border-blue-100 pt-6">
                        "Thanks for covering for me in front of the crew. I owe you big time."
                    </p>
                </div>
            </div>
          </header>

          {/* How It Works Section */}
          <section className="py-24 bg-white border-y border-gray-100">
              <div className="max-w-6xl mx-auto px-6 text-center">
                  <h2 className="text-5xl font-black text-blue-900 mb-16 uppercase tracking-tighter">The 555 Protocol</h2>
                  <div className="grid md:grid-cols-3 gap-16">
                      <div className="space-y-6">
                          <div className="w-16 h-16 bg-blue-900 text-white rounded-[1.5rem] flex items-center justify-center font-black text-2xl shadow-xl mx-auto">1</div>
                          <h4 className="text-2xl font-black text-blue-900 uppercase tracking-tight">The Sync</h4>
                          <p className="text-gray-500 leading-relaxed text-sm font-medium">Link with a partner via WhatsApp to sync your shared ledger. Encryption keys are exchanged during this "Secret Handshake."</p>
                      </div>
                      <div className="space-y-6">
                          <div className="w-16 h-16 bg-red-600 text-white rounded-[1.5rem] flex items-center justify-center font-black text-2xl shadow-xl mx-auto">2</div>
                          <h4 className="text-2xl font-black text-blue-900 uppercase tracking-tight">Dual-Track</h4>
                          <p className="text-gray-500 leading-relaxed text-sm font-medium">Log money (Hard Debt) and favors (Soft Debt). Our weighted algorithm calculates a single Equilibrium score to visualize relationship health.</p>
                      </div>
                      <div className="space-y-6">
                          <div className="w-16 h-16 bg-green-600 text-white rounded-[1.5rem] flex items-center justify-center font-black text-2xl shadow-xl mx-auto">3</div>
                          <h4 className="text-2xl font-black text-blue-900 uppercase tracking-tight">Reciprocity</h4>
                          <p className="text-gray-500 leading-relaxed text-sm font-medium">Settle debts using your Persona-specific catalog. A foot massage or dish duty can clear a grocery bill. Gratitude becomes currency.</p>
                      </div>
                  </div>
              </div>
          </section>

          {/* Saving Face Section (Restored) */}
          <section id="vault" className="py-24 bg-gradient-to-br from-blue-900 via-blue-950 to-black text-white overflow-hidden relative">
            <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
            <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center relative z-10">
              <div className="order-2 lg:order-1 relative">
                <div className="bg-white/10 p-12 rounded-[3.5rem] border border-white/20 backdrop-blur-xl relative overflow-hidden shadow-2xl group transition-all hover:scale-[1.02]">
                  <div className="absolute top-6 right-8 text-[10px] text-blue-400 font-mono tracking-widest uppercase font-black">E2E Secure Vault</div>
                  <div className="space-y-8">
                    <div className="flex items-center gap-6 border-b border-white/10 pb-6">
                      <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center font-black text-xl shadow-lg">555</div>
                      <div className="flex-1">
                        <div className="h-2 w-32 bg-white/20 rounded-full"></div>
                        <div className="h-4 w-48 bg-white/40 rounded-full mt-3"></div>
                      </div>
                      <div className="text-red-400 p-2 bg-red-400/10 rounded-xl"><Lock size={24} /></div>
                    </div>
                    <p className="p-5 bg-white/5 rounded-2xl border border-white/10 italic text-blue-100 leading-relaxed">
                      "Silent entries" are only visible to you and your partner. Use them for intimate rewards or saving face when public credit would hurt pride.
                    </p>
                  </div>
                </div>
                <div className="absolute -top-10 -left-10 w-24 h-24 bg-red-600 rounded-[2rem] -rotate-12 flex items-center justify-center text-4xl shadow-2xl animate-bounce">🤫</div>
                <div className="absolute -bottom-6 -right-6 w-20 h-20 bg-blue-500 rounded-full flex items-center justify-center text-3xl shadow-2xl">🤐</div>
              </div>
              <div className="order-1 lg:order-2 space-y-10">
                <div className="space-y-4">
                    <span className="text-red-500 font-black text-xs uppercase tracking-[0.4em]">Privacy as a Feature</span>
                    <h2 className="text-5xl md:text-6xl font-black leading-tight uppercase tracking-tighter">Saving Face: <br /><span className="text-red-500">The Private Vault</span></h2>
                </div>
                <p className="text-xl text-blue-100 font-light leading-relaxed">
                    Not every act of kindness needs a public shout-out. Some of the most important favors happen behind closed doors. The Vault keeps your intimacy and your pride protected with AES-256 client-side encryption.
                </p>
                <div className="grid sm:grid-cols-2 gap-6">
                    <div className="bg-white/5 p-6 rounded-[2rem] border border-white/10 hover:bg-white/10 transition-colors">
                        <h4 className="font-black text-red-400 mb-2 uppercase tracking-widest text-sm">Silent Credits</h4>
                        <p className="text-xs text-blue-200 font-medium">Log help given to save their pride. No public records, just shared honor.</p>
                    </div>
                    <div className="bg-white/5 p-6 rounded-[2rem] border border-white/10 hover:bg-white/10 transition-colors">
                        <h4 className="font-black text-blue-400 mb-2 uppercase tracking-widest text-sm">Spicy Rewards</h4>
                        <p className="text-xs text-blue-200 font-medium">Restricted private catalogs for couples. Log what matters, in secret.</p>
                    </div>
                </div>
              </div>
            </div>
          </section>

          {/* Persona Lenses (Restored) */}
          <section className="py-24">
            <div className="max-w-6xl mx-auto px-6">
                <div className="text-center mb-16 space-y-4">
                    <h2 className="text-5xl font-black text-blue-900 uppercase tracking-tighter">Persona Lenses</h2>
                    <p className="text-gray-400 font-bold text-sm uppercase tracking-[0.5em]">Digitizing Regional Heritage</p>
                </div>
                <div className="grid md:grid-cols-3 gap-10">
                    {PERSONAS.map((p) => (
                        <div key={p.id} className="group p-10 rounded-[3.5rem] border-2 border-gray-100 hover:border-blue-900 hover:bg-blue-50/50 transition-all cursor-pointer shadow-sm hover:shadow-2xl">
                            <div className="bg-white w-20 h-20 rounded-[2rem] flex items-center justify-center shadow-lg mb-8 group-hover:scale-110 transition-transform">{p.icon}</div>
                            <h3 className="text-3xl font-black text-blue-900 mb-4 uppercase tracking-tighter">{p.title}</h3>
                            <p className="text-sm text-gray-500 leading-relaxed mb-8 font-medium">{p.desc}</p>
                            <div className="space-y-3">
                                {p.catalogs.map(f => (
                                    <div key={f} className="flex items-center gap-3 text-[10px] font-black text-blue-500 uppercase tracking-widest bg-white p-3 rounded-2xl border border-blue-50 shadow-sm">• {f}</div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
          </section>
        </>
      )}

      {currentView === 'investor' && (
        <div className="max-w-6xl mx-auto px-6 py-20 animate-in fade-in duration-500">
            <button onClick={() => showView('home')} className="text-blue-900 font-bold mb-12 flex items-center gap-2 group underline">← Back to Main</button>
            <div className="grid md:grid-cols-3 gap-12">
                <div className="md:col-span-1 space-y-8">
                    <div className="bg-blue-900 text-white p-10 rounded-[3rem] shadow-2xl relative overflow-hidden">
                        <p className="text-[10px] font-bold text-blue-300 uppercase tracking-[0.3em] mb-6 text-center border-b border-white/10 pb-4">Seed Pitch</p>
                        <h2 className="text-3xl font-black leading-tight uppercase mb-8 tracking-tighter">Capturing the "Trust Graph"</h2>
                        <div className="space-y-6">
                            <div className="p-4 bg-white/5 rounded-2xl">
                                <p className="text-[10px] text-blue-400 font-bold uppercase tracking-widest mb-1">Target Market</p>
                                <p className="font-semibold text-sm">250M+ Shared-Finance Pairs</p>
                            </div>
                            <div className="p-4 bg-white/5 rounded-2xl">
                                <p className="text-[10px] text-blue-400 font-bold uppercase tracking-widest mb-1">Monetization</p>
                                <p className="font-semibold text-sm">5% Commission on Thank-Yous</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="md:col-span-2 bg-white rounded-[4rem] shadow-2xl p-16 border-l-[15px] border-red-600 border border-gray-100" style={{ backgroundImage: 'linear-gradient(#a5d8ff 1px, transparent 1px)', backgroundSize: '100% 2.5rem' }}>
                    <h1 className="text-6xl font-black text-blue-900 mb-12 uppercase border-b-4 border-red-500 pb-8 tracking-tighter">The Vision</h1>
                    <div className="space-y-16 font-mono text-blue-900 text-xl leading-relaxed">
                        <section><h2 className="font-black uppercase mb-4 text-3xl">01. Relationship Asymmetry</h2><p className="text-gray-600 font-medium text-lg italic">"Most fights start over what isn't tracked."</p><p className="mt-4 text-gray-500 text-base">We provide the HUD for human relationships, quantifying invisible support.</p></section>
                        <section><h2 className="font-black uppercase mb-4 text-3xl">02. The Data Moat</h2><p className="text-gray-500 text-base">While banks track transactions, 555 tracks **reliability**. This Trust Graph is a foundational layer for future community lending and social credit systems.</p></section>
                    </div>
                </div>
            </div>
        </div>
      )}

      {currentView === 'manual' && (
        <div className="max-w-4xl mx-auto px-6 py-20 animate-in fade-in duration-500">
          <button onClick={() => showView('home')} className="text-blue-900 font-bold mb-10 flex items-center gap-2 group underline">← Back Home</button>
          <div className="bg-white rounded-[4rem] shadow-2xl p-16 border-l-[15px] border-red-600 border border-gray-100" style={{ backgroundImage: 'linear-gradient(#a5d8ff 1px, transparent 1px)', backgroundSize: '100% 2.5rem' }}>
            <h1 className="text-6xl font-black text-blue-900 mb-16 uppercase border-b-4 border-red-500 pb-8 tracking-tighter">The Handbook</h1>
            <div className="space-y-16 font-mono text-blue-900 text-xl leading-relaxed">
                <section><h2 className="text-3xl font-black mb-6 uppercase bg-blue-900 text-white inline-block px-5 py-1 transform -rotate-1">1. Linking</h2><p>Share a Handshake link via WhatsApp. Both parties must acknowledge to link. This creates a secure, shared vault.</p></section>
                <section className="bg-blue-50 p-10 rounded-[3rem] border-2 border-blue-200"><h2 className="text-3xl font-black mb-6 uppercase italic text-blue-900">2. Tracking Effort</h2><p>Log debts and favors. Use "Saving Face" for sensitive credits. The HUD slider will move based on the net value of your shared history.</p></section>
                <section><h2 className="text-3xl font-black mb-6 uppercase underline">3. Repayment</h2><p>When you owe, click "Settle Up." You can offer a "Thank You Favor" from your catalog to clear the debt without spending a cent.</p></section>
            </div>
          </div>
        </div>
      )}

      {/* Roti Man Story Modal */}
      {showStory && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-blue-900/95 backdrop-blur-2xl animate-in fade-in" onClick={() => setShowStory(false)}>
          <div className="bg-white max-w-2xl w-full rounded-[3.5rem] shadow-2xl p-12 border-l-[15px] border-red-600 relative overflow-hidden" onClick={e => e.stopPropagation()} style={{ backgroundImage: 'linear-gradient(#a5d8ff 1px, transparent 1px)', backgroundSize: '100% 2.5rem' }}>
            <button onClick={() => setShowStory(false)} className="absolute top-8 right-8 text-gray-300 hover:text-red-600 text-3xl font-bold transition-all">✕</button>
            <div className="bg-red-600 text-white font-black text-2xl px-3 py-1 rounded shadow-sm inline-block transform -rotate-2 mb-10 uppercase tracking-widest">The Original Ledger</div>
            <div className="w-full mb-10 overflow-hidden rounded-[2.5rem] border-8 border-blue-900 shadow-2xl aspect-video bg-gray-50 flex items-center justify-center">
                <img src="/images/rotiman.png" alt="Roti Man" className="w-full h-full object-cover" onError={(e) => { e.target.style.display='none'; e.target.parentElement.innerHTML = '<span class="text-blue-900 font-black italic text-3xl tracking-tighter uppercase">Legend of the Roti Man</span>'; }} />
            </div>
            <div className="font-mono text-blue-900 space-y-8 text-xl leading-relaxed">
                <p>The **Roti Man** was the anchor of the neighborhood. He carried bread and treats on his motorcycle. Payment was built on a simple premise: **Trust.**</p>
                <p>He jotted IOUs in his yellow **555 notebook**, and families settled at the end of the month. 555 digitizes this heritage of **honor over transactions.**</p>
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
      <div className="w-full max-w-md bg-white rounded-[3.5rem] shadow-2xl p-10 border-l-[15px] border-red-600 relative overflow-hidden">
        <div className="flex gap-2 mb-12">
          {[1,2,3,4].map(s => <div key={s} className={`h-2 flex-1 rounded-full transition-all duration-700 ${s <= step ? 'bg-red-600 shadow-[0_0_15px_rgba(220,38,38,0.4)]' : 'bg-gray-100'}`} />)}
        </div>

        {step === 1 && (
          <div className="text-center space-y-10 animate-in slide-in-from-bottom duration-500">
            <div className="bg-red-600 text-white font-black text-7xl px-5 py-2 rounded-[1.25rem] shadow-2xl transform -rotate-3 mb-6 inline-block">555</div>
            <div className="space-y-4">
                <h2 className="text-4xl font-black text-blue-900 uppercase tracking-tighter leading-tight">The Handshake</h2>
                <p className="text-gray-500 text-lg leading-relaxed font-medium">Join the digital network of trust. Digitizing neighborhood honor since 1980.</p>
            </div>
            <button onClick={() => setStep(2)} className="w-full bg-blue-900 text-white py-6 rounded-[2rem] font-black text-2xl shadow-2xl flex items-center justify-center gap-3 uppercase tracking-tighter hover:scale-[1.02] active:scale-95 transition-all">Start Ledger <ArrowRight size={28}/></button>
          </div>
        )}

        {step === 2 && (
          <div className="space-y-10 animate-in slide-in-from-right duration-500">
            <h2 className="text-3xl font-black text-blue-900 text-center uppercase tracking-tighter">Pick Your Lense</h2>
            <div className="space-y-4">
              {PERSONAS.map((p) => (
                <button key={p.id} onClick={() => { setPersona(p); setStep(3); }} className="w-full flex items-center gap-6 p-7 rounded-[2.5rem] border-2 border-gray-100 hover:border-blue-900 bg-white text-left transition-all group shadow-sm hover:shadow-xl">
                  <div className="bg-blue-50 p-4 rounded-2xl group-hover:scale-110 transition-transform">{p.icon}</div>
                  <div className="flex-1">
                    <h4 className="font-black text-blue-900 uppercase text-xl tracking-tighter">{p.title}</h4>
                    <p className="text-[10px] text-gray-400 font-black uppercase tracking-[0.2em] mt-1">{p.motto}</p>
                  </div>
                </button>
              ))}
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="space-y-10 text-center animate-in slide-in-from-right duration-500">
            <div className="w-28 h-28 bg-blue-50 rounded-[2.5rem] mx-auto flex items-center justify-center text-blue-600 shadow-inner"><Share2 size={50} /></div>
            <div className="space-y-4 px-2">
              <h2 className="text-3xl font-black text-blue-900 uppercase tracking-tighter leading-tight">Sync Ledgers</h2>
              <p className="text-gray-500 font-medium">Link with your {persona?.title}. Encryption keys are generated during this handshake.</p>
            </div>
            <div className="bg-gray-100 p-6 rounded-3xl border-2 border-dashed border-gray-300 font-mono text-[10px] text-blue-800 break-all select-all shadow-inner">
                555app.com/v1/join/{persona?.id}?token=sh_88x2k_vault...
            </div>
            <button onClick={() => setStep(4)} className="w-full bg-[#25D366] text-white py-6 rounded-[2rem] font-black text-2xl shadow-xl flex items-center justify-center gap-4 active:scale-95 transition-transform uppercase tracking-tighter">
                WhatsApp Link
            </button>
          </div>
        )}

        {step === 4 && (
          <div className="text-center space-y-10 animate-in zoom-in duration-500">
            <div className="w-36 h-36 bg-green-100 rounded-full mx-auto flex items-center justify-center text-green-500 shadow-2xl shadow-green-200"><CheckCircle size={80} /></div>
            <h2 className="text-4xl font-black text-blue-900 uppercase tracking-tighter">Handshake Sync!</h2>
            <button onClick={onComplete} className="w-full bg-blue-900 text-white py-6 rounded-[2rem] font-black text-2xl shadow-xl uppercase tracking-tighter hover:scale-[1.02] transition">Open Your Book</button>
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
  
  // INFINITE SPLITTER STATE
  const [showSplitter, setShowSplitter] = useState(false);
  const [participants, setParticipants] = useState(['You', 'Sarah']);
  const [totalAmount, setTotalAmount] = useState('');

  const partner = { name: "Juliet", status: "Active Pair" };
  const equilibriumScore = +35;

  const EntryCard = ({ entry, isVault }) => (
    <div className={`p-6 mb-5 rounded-[2.5rem] border-2 transition-all ${isVault ? 'bg-gray-900 border-gray-800 text-white shadow-2xl' : 'bg-white border-gray-100 shadow-sm hover:shadow-xl transform hover:-translate-y-1'}`}>
      <div className="flex justify-between items-start mb-5">
        <div className="flex items-center gap-5">
          <div className={`p-4 rounded-[1.5rem] ${isVault ? 'bg-red-900/40 text-red-400 border border-red-500/20' : 'bg-blue-50 text-blue-500 border border-blue-100'}`}>
            {entry.type === 'hard' ? <ArrowDownLeft size={24} /> : entry.type === 'soft' ? <Zap size={24} /> : <EyeOff size={24} />}
          </div>
          <div>
            <h4 className={`font-black uppercase tracking-tighter text-lg ${isVault ? 'text-white' : 'text-blue-900'}`}>{entry.title}</h4>
            <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">{entry.date}</p>
          </div>
        </div>
        <div className="text-right">
            <span className={`text-2xl font-black ${entry.amount > 0 ? 'text-green-500' : 'text-red-500'}`}>{entry.amount > 0 ? `+${entry.amount}` : entry.amount}</span>
            <p className="text-[8px] font-black uppercase tracking-[0.3em] opacity-40 mt-1">{entry.status}</p>
        </div>
      </div>
      {entry.amount < 0 && (
        <button onClick={() => { setSettleItem(entry); setSettleStep(1); }} className={`w-full py-5 rounded-[1.5rem] font-black text-xs uppercase tracking-[0.4em] flex items-center justify-center gap-2 active:scale-95 transition-all shadow-lg ${isVault ? 'bg-white text-black' : 'bg-blue-900 text-white shadow-blue-900/30'}`}>
          Settle Up <ChevronRight size={16} />
        </button>
      )}
    </div>
  );

  return (
    <div className="min-h-screen bg-[#fdfbd4] pb-32 relative overflow-x-hidden font-sans">
      
      {/* FLEXIBLE INFINITE SPLITTER */}
      {showSplitter && (
        <div className="fixed inset-0 z-[100] bg-[#fdfbd4] p-8 animate-in slide-in-from-bottom duration-300">
            <div className="max-w-md mx-auto h-full flex flex-col">
                <div className="flex justify-between items-center mb-12">
                    <button onClick={() => setShowSplitter(false)} className="p-4 bg-white rounded-3xl shadow-sm hover:bg-red-50 hover:text-red-500 transition-all"><X/></button>
                    <h2 className="text-3xl font-black text-blue-900 uppercase tracking-tighter">Smart Split</h2>
                    <div className="w-12 h-12 bg-blue-100 rounded-2xl flex items-center justify-center text-blue-600 shadow-inner"><Users size={24}/></div>
                </div>
                
                <div className="bg-white p-10 rounded-[3.5rem] shadow-2xl border border-gray-100 mb-8 space-y-8">
                    <div>
                        <p className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-400 mb-3">Total Group Bill ($)</p>
                        <input type="number" placeholder="0.00" className="w-full text-6xl font-black text-blue-900 outline-none placeholder:opacity-10" value={totalAmount} onChange={(e) => setTotalAmount(e.target.value)}/>
                    </div>
                    <div className="border-t border-gray-100 pt-8">
                        <p className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-400 mb-5">Handshake List</p>
                        <div className="space-y-4 max-h-[30vh] overflow-y-auto pr-2 custom-scrollbar">
                            {participants.map((p, idx) => (
                                <div key={idx} className="flex items-center gap-4 p-4 bg-gray-50 rounded-2xl border border-gray-100 animate-in slide-in-from-right transition-all">
                                    <User size={18} className="text-blue-900 opacity-20"/>
                                    <input className="flex-1 bg-transparent font-black text-blue-900 uppercase text-sm outline-none" value={p} onChange={(e) => { const newP = [...participants]; newP[idx] = e.target.value; setParticipants(newP); }}/>
                                    {participants.length > 2 && (
                                        <button onClick={() => setParticipants(participants.filter((_, i) => i !== idx))} className="text-red-400 hover:scale-110 transition-transform"><MinusCircle size={22}/></button>
                                    )}
                                </div>
                            ))}
                            <button onClick={() => setParticipants([...participants, `Friend ${participants.length + 1}`])} className="w-full p-5 border-2 border-dashed border-blue-200 rounded-3xl flex items-center justify-center gap-3 text-blue-500 font-black uppercase text-xs hover:bg-blue-50 transition-all">
                                <PlusCircle size={20}/> Add Person
                            </button>
                        </div>
                    </div>
                </div>

                {totalAmount > 0 && (
                    <div className="mt-auto animate-in slide-in-from-bottom">
                        <div className="bg-blue-900 p-10 rounded-[3.5rem] text-white flex justify-between items-center mb-8 shadow-[0_20px_50px_rgba(30,58,138,0.4)]">
                            <div><p className="text-[10px] font-black uppercase tracking-widest opacity-60">Each Share</p><h3 className="text-4xl font-black tracking-tighter">${(totalAmount / participants.length).toFixed(2)}</h3></div>
                            <div className="text-right bg-white/10 p-4 rounded-2xl border border-white/10"><h3 className="text-2xl font-black">{participants.length}</h3><p className="text-[8px] font-black uppercase">Users</p></div>
                        </div>
                        <button className="w-full py-7 bg-red-600 text-white rounded-[2rem] font-black uppercase text-xl shadow-xl shadow-red-600/30 active:scale-95 transition-all">Send Group Invites</button>
                    </div>
                )}
            </div>
        </div>
      )}

      {/* Settle Up Flow Restoration */}
      {settleItem && (
        <div className="fixed inset-0 z-[60] flex items-end justify-center bg-black/70 backdrop-blur-sm px-4">
          <div className="w-full max-w-md bg-white rounded-t-[4rem] p-12 animate-in slide-in-from-bottom duration-300 shadow-2xl">
            <div className="flex justify-between items-center mb-10">
              <h3 className="text-3xl font-black text-blue-900 uppercase tracking-tighter">Resolution</h3>
              <button onClick={() => setSettleItem(null)} className="p-3 bg-gray-100 rounded-full hover:bg-red-50 hover:text-red-600 transition-all shadow-sm"><X size={24}/></button>
            </div>

            {settleStep === 1 && (
              <div className="space-y-5">
                <button onClick={() => setSettleStep(2)} className="w-full p-8 bg-blue-50 border-2 border-blue-200 rounded-[2.5rem] flex items-center gap-8 text-left hover:border-blue-500 transition-all shadow-sm group">
                    <div className="bg-white p-5 rounded-3xl text-blue-500 shadow-lg group-hover:scale-110 transition-transform"><Sparkles size={36}/></div>
                    <div className="flex-1"><h4 className="font-black text-blue-900 uppercase text-2xl tracking-tighter leading-none">Offer a Favor</h4><p className="text-xs text-blue-400 font-bold uppercase tracking-widest mt-2">Use your Persona catalog</p></div>
                </button>
                <button className="w-full p-8 bg-gray-50 border-2 border-gray-100 rounded-[2.5rem] flex items-center gap-8 text-left opacity-60">
                    <div className="bg-white p-5 rounded-3xl shadow-lg"><ArrowUpRight size={36}/></div>
                    <div className="flex-1"><h4 className="font-black text-gray-500 uppercase text-2xl tracking-tighter leading-none">Mark Cash Paid</h4><p className="text-xs text-gray-400 font-bold uppercase tracking-widest mt-2">External transfer settled</p></div>
                </button>
              </div>
            )}

            {settleStep === 2 && (
              <div className="space-y-4 max-h-[60vh] overflow-y-auto pr-2 custom-scrollbar">
                <p className="text-[10px] font-black uppercase tracking-[0.4em] text-gray-400 mb-5">Choose Repayment Favor</p>
                {PERSONAS[0].catalogs.map(favor => (
                    <button key={favor} onClick={() => setSettleStep(3)} className="w-full p-7 bg-white border-2 border-gray-100 rounded-[2rem] flex items-center gap-6 text-left font-black text-blue-900 uppercase tracking-tighter hover:border-blue-900 transition-all shadow-sm group">
                        <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-500 group-hover:scale-125 transition-transform"><Coffee size={28}/></div>
                        <span className="text-xl">{favor}</span>
                    </button>
                ))}
              </div>
            )}

            {settleStep === 3 && (
              <div className="text-center space-y-12 py-10 animate-in zoom-in">
                <div className="w-32 h-32 bg-green-100 rounded-full flex items-center justify-center mx-auto text-green-500 shadow-[0_20px_50px_rgba(34,197,94,0.2)]"><Check size={64} /></div>
                <div className="space-y-4 px-6">
                    <h4 className="text-4xl font-black text-blue-900 uppercase tracking-tighter leading-none">Proposal Dispatched!</h4>
                    <p className="text-gray-500 font-medium">The debt will be archived once Juliet acknowledges the favor on her end.</p>
                </div>
                <button onClick={() => setSettleItem(null)} className="w-full bg-blue-900 text-white py-6 rounded-3xl font-black text-2xl shadow-2xl uppercase tracking-tighter active:scale-95 transition-all">Back to Ledger</button>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Main UI Structure */}
      <header className="bg-white px-6 pt-16 pb-12 border-b border-gray-100 rounded-b-[4.5rem] shadow-2xl shadow-blue-900/5 text-center relative z-10">
        <div className="flex justify-between items-center mb-16">
            <div className="bg-red-600 text-white font-black text-3xl px-4 py-1.5 rounded shadow-xl transform -rotate-3 uppercase tracking-tighter">555</div>
            <div className="flex gap-5">
                <button onClick={() => setShowSplitter(true)} className="p-5 bg-blue-50 rounded-3xl text-blue-600 hover:bg-blue-100 transition-all shadow-sm active:scale-95"><Users size={28} /></button>
                <button onClick={onLogout} className="p-5 bg-gray-50 rounded-3xl text-gray-400 hover:text-red-600 transition-all shadow-sm active:scale-95"><Settings size={28} /></button>
            </div>
        </div>
        
        <div className="bg-blue-900 rounded-[3.5rem] p-12 text-white relative overflow-hidden shadow-[0_30px_100px_rgba(30,58,138,0.4)] group">
          <div className="relative z-10">
            <div className="flex justify-between items-end mb-10 text-left">
                <div><p className="text-[10px] font-black text-blue-300 uppercase tracking-[0.5em] mb-3">Relationship HUD</p><h2 className="text-6xl font-black tracking-tighter">+{equilibriumScore}</h2></div>
                <div className="bg-green-500/20 text-green-400 text-[10px] font-black px-6 py-2.5 rounded-full uppercase border border-green-500/30 tracking-[0.3em] shadow-lg">CREDITOR HERO 🏆</div>
            </div>
            <div className="relative h-4 bg-white/10 rounded-full mb-8 border border-white/5 overflow-hidden">
              <div className="absolute h-full w-full bg-gradient-to-r from-transparent via-white/5 to-transparent shimmer"></div>
              <div className="absolute h-full w-10 bg-white shadow-[0_0_30px_#fff] rounded-full top-0 -translate-x-1/2 transition-all duration-1000 ease-out" style={{ left: '68%' }} />
            </div>
            <div className="flex justify-between text-[10px] font-black text-blue-400 uppercase tracking-[0.4em]"><span>Taker</span><span>Perfect Sync</span><span>Giver</span></div>
          </div>
          <div className="absolute -top-16 -right-16 opacity-5 group-hover:rotate-12 transition-transform duration-1000"><Sparkles size={300}/></div>
        </div>
      </header>

      <div className="flex p-7 gap-6">
        <button onClick={() => setActiveTab('wall')} className={`flex-1 py-7 rounded-[2.5rem] font-black text-sm uppercase tracking-[0.3em] flex items-center justify-center gap-4 transition-all ${activeTab === 'wall' ? 'bg-blue-900 text-white shadow-[0_15px_40px_rgba(30,58,138,0.3)]' : 'bg-white text-gray-400 border border-gray-100 shadow-sm'}`}><Zap size={22} /> The Wall</button>
        <button onClick={() => setActiveTab('vault')} className={`flex-1 py-7 rounded-[2.5rem] font-black text-sm uppercase tracking-[0.3em] flex items-center justify-center gap-4 transition-all ${activeTab === 'vault' ? 'bg-gray-900 text-white shadow-[0_15px_40px_rgba(0,0,0,0.2)]' : 'bg-white text-gray-400 border border-gray-100 shadow-sm'}`}><Lock size={22} /> The Vault</button>
      </div>

      <main className="px-8">
        <div className="mb-10 px-2 flex justify-between items-center border-b border-gray-200/50 pb-4"><h3 className="font-black text-blue-900 uppercase tracking-[0.4em] text-[10px] opacity-40 italic">Ledger Activity</h3><button className="text-[10px] font-black text-blue-500 uppercase tracking-widest hover:underline transition-all">View All History</button></div>
        
        {activeTab === 'wall' ? (
          <div className="space-y-6 animate-in fade-in duration-500">
            <EntryCard entry={{ id: 1, type: 'hard', title: 'Dim Sum Sunday', amount: -28.50, date: '4h ago', status: 'ACTIVE' }} isVault={false} />
            <EntryCard entry={{ id: 2, type: 'soft', title: 'Library Seat Rescue', amount: +10, date: 'Yesterday', status: 'VERIFIED' }} isVault={false} />
          </div>
        ) : (
          <div className="animate-in fade-in duration-500">
            <div className="bg-red-950/60 border border-red-500/30 p-8 rounded-[3rem] mb-10 flex items-center gap-8 text-red-200 backdrop-blur-3xl shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 p-4 opacity-10 rotate-12"><Shield size={80}/></div>
                <Shield size={40} className="shrink-0 text-red-500" />
                <p className="text-xs font-black uppercase tracking-widest leading-relaxed">E2E Encryption Active. Private Ledger only visible to this Handshake Pair.</p>
            </div>
            <EntryCard entry={{ id: 3, type: 'face', title: 'Quiet Kitchen Clean', amount: +15, date: '3h ago', status: 'ENCRYPTED' }} isVault={true} />
          </div>
        )}
      </main>

      {/* ACTION FAB */}
      <div className="fixed bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center z-50">
        {showAddMenu && (
          <div className="bg-white/95 backdrop-blur-3xl p-5 rounded-[3.5rem] shadow-[0_50px_100px_rgba(0,0,0,0.3)] mb-10 border border-gray-100 animate-in slide-in-from-bottom-8 flex gap-5 border-b-[8px] border-gray-100">
            {[
                { icon: <ArrowUpRight size={40}/>, label: 'I Owe', bg: 'bg-blue-50 text-blue-900 border-blue-100' },
                { icon: <ArrowDownLeft size={40}/>, label: 'They Owe', bg: 'bg-red-50 text-red-600 border-red-100' },
                { icon: <EyeOff size={40}/>, label: 'Face-Save', bg: 'bg-gray-900 text-white border-black' }
            ].map((act) => (
                <button key={act.label} className={`flex flex-col items-center gap-4 p-8 rounded-[2.5rem] border-2 transition-all hover:-translate-y-4 hover:shadow-2xl active:scale-90 ${act.bg}`}>
                    {act.icon}
                    <span className="text-[10px] font-black uppercase tracking-[0.2em]">{act.label}</span>
                </button>
            ))}
          </div>
        )}
        <button 
          onClick={() => setShowAddMenu(!showAddMenu)} 
          className={`w-28 h-28 rounded-full flex items-center justify-center text-white shadow-[0_30px_80px_rgba(30,58,138,0.4)] transition-all active:scale-90 transform hover:scale-105 ${showAddMenu ? 'bg-red-600 rotate-45 shadow-red-600/40' : 'bg-blue-900'}`}
        >
          <Plus size={56} />
        </button>
      </div>

      <div className="fixed top-0 left-0 w-2 h-full bg-red-600/10 pointer-events-none shadow-inner"></div>
    </div>
  );
};

/** * MAIN APP HUB 
 */
export default function App() {
  const [currentView, setCurrentView] = useState('landing');
  
  const startJoinFlow = () => setCurrentView('onboarding');
  const completeOnboarding = () => setCurrentView('dashboard');
  const resetToHome = () => setCurrentView('landing');

  return (
    <div className="min-h-screen">
      {currentView === 'landing' && <LandingPage onStart={startJoinFlow} />}
      {currentView === 'onboarding' && <OnboardingFlow onComplete={completeOnboarding} />}
      {currentView === 'dashboard' && <DashboardApp onLogout={resetToHome} />}
    </div>
  );
}

