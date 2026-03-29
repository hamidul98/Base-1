import { 
  Rocket, 
  PlayCircle, 
  CheckCircle2, 
  ArrowRight, 
  Link as LinkIcon, 
  BarChart3, 
  Zap, 
  TrendingUp, 
  ShieldCheck, 
  Users2, 
  History, 
  Code2, 
  Languages, 
  Headphones,
  Cloud,
  Database,
  Mail,
  CreditCard,
  MessageSquare,
  ChevronDown,
  Github,
  Twitter,
  Linkedin,
  Globe,
  Terminal
} from 'lucide-react';
import { motion } from 'motion/react';
import { useState } from 'react';

const Navbar = () => (
  <header className="sticky top-0 w-full z-50 bg-white/70 backdrop-blur-xl border-b border-surface-container-low">
    <nav className="flex justify-between items-center px-6 py-4 max-w-7xl mx-auto">
      <div className="flex items-center gap-10">
        <span className="text-2xl font-bold tracking-tight text-on-surface font-headline">Base</span>
        <div className="hidden md:flex items-center gap-8">
          <a href="#" className="text-primary font-semibold hover:text-primary/80 transition-colors">Product</a>
          <a href="#" className="text-on-surface-variant font-medium hover:text-primary transition-colors">Features</a>
          <a href="#" className="text-on-surface-variant font-medium hover:text-primary transition-colors">Pricing</a>
          <a href="#" className="text-on-surface-variant font-medium hover:text-primary transition-colors">Resources</a>
        </div>
      </div>
      <div className="flex items-center gap-6">
        <button className="hidden md:block text-on-surface-variant font-semibold hover:text-primary transition-colors">Sign In</button>
        <button className="btn-gradient text-white px-6 py-2.5 rounded-full font-bold shadow-lg shadow-primary/20 active:scale-95 transition-transform">
          Get Started
        </button>
      </div>
    </nav>
  </header>
);

const Hero = () => (
  <section className="max-w-7xl mx-auto px-6 py-20 lg:py-32 grid lg:grid-cols-2 gap-16 items-center">
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="space-y-8"
    >
      <div className="inline-flex items-center gap-2 bg-primary-fixed px-4 py-1.5 rounded-full">
        <span className="text-[10px] font-bold tracking-wider uppercase text-on-primary-fixed bg-white px-2 py-0.5 rounded-full">New</span>
        <span className="text-sm font-medium text-on-primary-fixed">Watch AI Demo</span>
        <PlayCircle className="w-4 h-4 text-on-primary-fixed" />
      </div>
      <h1 className="text-5xl lg:text-7xl leading-[1.1] font-bold font-headline text-on-surface tracking-tight">
        Scale your digital<br />presence with<br />
        <span className="gradient-text">intelligent insights.</span>
      </h1>
      <p className="text-lg text-on-surface-variant leading-relaxed max-w-lg">
        The modern operating system for high-growth teams. Automate your workflows, analyze deep metrics, and scale without friction.
      </p>
      <div className="flex flex-wrap gap-4">
        <button className="btn-gradient text-white px-8 py-4 rounded-full font-bold shadow-xl shadow-primary/20 hover:scale-105 transition-transform">
          Start Free Trial
        </button>
        <button className="border border-outline-variant px-8 py-4 rounded-full font-bold hover:bg-surface-container-low transition-colors">
          Book a Demo
        </button>
      </div>
    </motion.div>

    <div className="relative min-h-[500px] flex items-center justify-center">
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="relative z-10 glass p-4 rounded-2xl custom-shadow w-full max-w-md border border-white/50"
      >
        <img 
          src="https://picsum.photos/seed/dashboard/800/600" 
          alt="Dashboard UI" 
          className="rounded-xl shadow-sm"
          referrerPolicy="no-referrer"
        />
      </motion.div>
      
      {/* Floating Elements */}
      <motion.div 
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.6 }}
        className="absolute z-20 -top-4 -left-4 glass p-6 rounded-2xl custom-shadow w-64 border border-white/50"
      >
        <div className="flex items-center justify-between mb-4">
          <span className="text-xs font-bold text-on-surface-variant uppercase tracking-widest">Growth Rate</span>
          <span className="text-emerald-600 bg-emerald-50 text-[10px] font-bold px-2 py-0.5 rounded-full">+24.8%</span>
        </div>
        <div className="h-24 w-full bg-surface-container-low rounded-xl relative overflow-hidden flex items-end">
          <div className="flex items-end gap-1 px-2 pb-2 w-full h-full">
            {[40, 60, 45, 70, 85, 65, 90].map((h, i) => (
              <div key={i} className="flex-1 bg-primary/20 rounded-t-sm" style={{ height: `${h}%` }} />
            ))}
          </div>
        </div>
      </motion.div>

      <motion.div 
        initial={{ x: 50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.7, duration: 0.6 }}
        className="absolute z-20 -bottom-8 -right-4 glass p-6 rounded-2xl custom-shadow w-72 border border-white/50"
      >
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-primary-fixed flex items-center justify-center">
              <Rocket className="w-5 h-5 text-primary" />
            </div>
            <div>
              <p className="text-sm font-bold text-on-surface">Scale Campaign</p>
              <p className="text-xs text-on-surface-variant">Active • 12 Channels</p>
            </div>
          </div>
          <div className="w-full h-2 bg-surface-container-low rounded-full overflow-hidden">
            <motion.div 
              initial={{ width: 0 }}
              animate={{ width: '75%' }}
              transition={{ duration: 1, delay: 1 }}
              className="h-full bg-primary" 
            />
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

const TrustBar = () => (
  <section className="w-full bg-primary py-12">
    <div className="max-w-7xl mx-auto px-6">
      <div className="flex flex-wrap justify-center md:justify-between items-center gap-12 opacity-60">
        {['FORBES', 'FORTUNE', 'WIRED', 'THE VERGE', 'TECHCRUNCH'].map((brand) => (
          <span key={brand} className="text-white text-2xl font-black italic tracking-tighter">{brand}</span>
        ))}
      </div>
    </div>
  </section>
);

const FeatureOne = () => (
  <section className="max-w-7xl mx-auto px-6 py-24 lg:py-40">
    <div className="grid lg:grid-cols-2 gap-20 items-center">
      <div className="order-2 lg:order-1">
        <div className="bg-surface-container-low rounded-3xl overflow-hidden aspect-video custom-shadow border border-white/20">
          <img 
            src="https://picsum.photos/seed/analytics/1200/800" 
            alt="Data Analytics" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
      </div>
      <div className="order-1 lg:order-2 space-y-6">
        <p className="text-primary font-bold text-xs uppercase tracking-[0.2em]">Data Intelligence</p>
        <h2 className="text-4xl lg:text-5xl font-bold font-headline text-on-surface leading-tight">
          Turn complex data into actionable strategies.
        </h2>
        <p className="text-lg text-on-surface-variant leading-relaxed">
          Our AI engine processes millions of data points in real-time to provide you with simple, clear directives. No more guessing—only growing.
        </p>
        <ul className="space-y-4 pt-4">
          {[
            'Real-time attribution modeling',
            'Predictive churn analysis',
            'Automated reporting suite'
          ].map((item) => (
            <li key={item} className="flex items-center gap-3 text-on-surface font-medium">
              <CheckCircle2 className="w-5 h-5 text-primary" />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  </section>
);

const FeatureTwo = () => (
  <section className="bg-surface-container-low">
    <div className="max-w-7xl mx-auto px-6 py-24 lg:py-40">
      <div className="grid lg:grid-cols-2 gap-20 items-center">
        <div className="space-y-6">
          <p className="text-primary font-bold text-xs uppercase tracking-[0.2em]">Seamless Integration</p>
          <h2 className="text-4xl lg:text-5xl font-bold font-headline text-on-surface leading-tight">
            Connect your entire stack in minutes.
          </h2>
          <p className="text-lg text-on-surface-variant leading-relaxed">
            Base integrates natively with over 200+ popular tools. Centralize your operations and eliminate the "tab fatigue" for your team.
          </p>
          <div className="pt-4">
            <button className="group flex items-center gap-2 text-primary font-bold hover:gap-4 transition-all">
              Explore Integrations
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
        <div className="relative">
          <div className="bg-white p-8 rounded-3xl custom-shadow border border-white/20">
            <div className="grid grid-cols-3 gap-6">
              {[Cloud, Zap, Database, Mail, CreditCard, MessageSquare].map((Icon, i) => (
                <div key={i} className={`aspect-square rounded-2xl flex items-center justify-center transition-colors ${i === 1 ? 'bg-primary/10 ring-2 ring-primary text-primary' : 'bg-surface-container-low text-on-surface-variant'}`}>
                  <Icon className="w-8 h-8" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const HowItWorks = () => (
  <section className="max-w-7xl mx-auto px-6 py-24 lg:py-40 text-center">
    <div className="max-w-2xl mx-auto mb-20">
      <h2 className="text-4xl font-bold font-headline mb-4">How Base Works</h2>
      <p className="text-on-surface-variant">Four simple steps to transform your operational efficiency and start scaling smarter.</p>
    </div>
    <div className="grid md:grid-cols-4 gap-8">
      {[
        { icon: LinkIcon, title: 'Connect Data', desc: 'Import your historical data from any source via our secure API.' },
        { icon: BarChart3, title: 'Analyze', desc: 'Our AI identifies patterns and anomalies across your segments.' },
        { icon: Zap, title: 'Optimize', desc: 'Apply automated workflows based on suggested optimizations.' },
        { icon: TrendingUp, title: 'Scale', desc: 'Watch your KPIs climb as manual friction disappears.' }
      ].map((step, i) => (
        <div key={i} className="group text-left">
          <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-all duration-300 ${i === 0 ? 'bg-primary text-white shadow-xl shadow-primary/20' : 'bg-surface-container-low group-hover:bg-primary group-hover:text-white'}`}>
            <step.icon className="w-8 h-8" />
          </div>
          <h3 className="text-xl font-bold font-headline mb-2">{step.title}</h3>
          <p className="text-on-surface-variant text-sm leading-relaxed">{step.desc}</p>
        </div>
      ))}
    </div>
  </section>
);

const FeatureGrid = () => (
  <section className="max-w-7xl mx-auto px-6 py-24 lg:py-40 border-t border-outline-variant/20">
    <div className="grid md:grid-cols-3 gap-12">
      {[
        { icon: ShieldCheck, title: 'Bank-Grade Security', desc: 'SOC2 Type II compliant with end-to-end encryption for all your sensitive business data.' },
        { icon: Users2, title: 'Multi-Team Access', desc: 'Flexible permission levels ensuring everyone has access to exactly what they need.' },
        { icon: History, title: 'Audit Logging', desc: 'Full transparency with comprehensive logs of every action taken within the platform.' },
        { icon: Code2, title: 'Robust API', desc: 'Build custom workflows and apps on top of our lightning-fast infrastructure.' },
        { icon: Languages, title: 'Global Localization', desc: 'Support for 32+ currencies and 15+ languages to manage your global empire.' },
        { icon: Headphones, title: 'Priority Support', desc: 'Dedicated account managers for enterprise teams available 24/7/365.' }
      ].map((feature, i) => (
        <div key={i} className="p-8 rounded-3xl hover:bg-white hover:custom-shadow transition-all duration-300">
          <feature.icon className="w-10 h-10 text-primary mb-6" />
          <h3 className="text-xl font-bold font-headline mb-3">{feature.title}</h3>
          <p className="text-on-surface-variant leading-relaxed">{feature.desc}</p>
        </div>
      ))}
    </div>
  </section>
);

const DarkShowcase = () => (
  <section className="bg-[#0F0F14] text-white py-32 overflow-hidden relative">
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/20 blur-[120px] rounded-full pointer-events-none" />
    <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">
      <div className="relative z-10">
        <h2 className="text-5xl font-bold font-headline mb-6">Predict the future of your growth.</h2>
        <p className="text-slate-400 text-lg leading-relaxed mb-8">
          Our proprietary forecasting models use deep learning to predict your next quarter with 98.4% accuracy. Stop looking at where you were—start seeing where you're going.
        </p>
        <div className="flex items-center gap-12">
          <div>
            <p className="text-3xl font-bold">98.4%</p>
            <p className="text-slate-500 text-sm">Accuracy Rate</p>
          </div>
          <div className="h-12 w-px bg-slate-800" />
          <div>
            <p className="text-3xl font-bold">3.2x</p>
            <p className="text-slate-500 text-sm">Avg. ROI Boost</p>
          </div>
        </div>
      </div>
      <div className="relative h-[500px] lg:h-[600px]">
        <div className="absolute inset-0 bg-slate-900/50 backdrop-blur-2xl rounded-3xl border border-white/5 p-8">
          <img 
            src="https://picsum.photos/seed/future/1000/800" 
            alt="Predictive Analytics" 
            className="w-full h-full object-cover rounded-2xl opacity-60"
            referrerPolicy="no-referrer"
          />
          <div className="absolute top-12 -left-12 glass bg-white/5 p-6 rounded-2xl border border-white/10 w-48">
            <p className="text-xs text-slate-400 mb-1">Weekly Churn</p>
            <p className="text-2xl font-bold text-red-400">-12.5%</p>
          </div>
          <div className="absolute bottom-12 -right-12 glass bg-white/5 p-6 rounded-2xl border border-white/10 w-56">
            <p className="text-xs text-slate-400 mb-1">Customer LTV</p>
            <p className="text-2xl font-bold text-primary-fixed">$2,480.00</p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Testimonials = () => (
  <section className="max-w-7xl mx-auto px-6 py-32">
    <div className="grid md:grid-cols-3 gap-8">
      {[
        { quote: "Base changed the way our marketing team functions. We've saved 20+ hours a week on reporting alone.", author: 'Sarah Jenkins', role: 'Head of Growth, Linear' },
        { quote: "The most intuitive analytics platform I've used in 15 years of SaaS. It's not just a tool, it's a team member.", author: 'Marcus Thorne', role: 'CEO, Flow State', featured: true },
        { quote: "Setup took less than 10 minutes. The automated insights were generating value for us by the next morning.", author: 'Elena Rodriguez', role: 'Product Manager, Vercel' }
      ].map((t, i) => (
        <div key={i} className={`p-10 rounded-3xl bg-white custom-shadow border ${t.featured ? 'border-2 border-primary ring-8 ring-primary/5 transform scale-105 z-10' : 'border-surface-container-low self-center'}`}>
          <p className={`italic text-on-surface mb-8 ${t.featured ? 'text-xl' : 'text-lg'}`}>"{t.quote}"</p>
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-surface-container-low overflow-hidden">
              <img src={`https://i.pravatar.cc/150?u=${t.author}`} alt={t.author} referrerPolicy="no-referrer" />
            </div>
            <div>
              <p className="font-bold">{t.author}</p>
              <p className="text-sm text-on-surface-variant">{t.role}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  </section>
);

const Pricing = () => (
  <section className="bg-surface-container-low py-32">
    <div className="max-w-7xl mx-auto px-6">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold font-headline mb-4">Simple, Transparent Pricing</h2>
        <p className="text-on-surface-variant">Scale Base with your business. No hidden fees or complex contracts.</p>
      </div>
      <div className="grid md:grid-cols-3 gap-8 items-end">
        {[
          { name: 'Starter', price: '19', features: ['Up to 5 team members', 'Core analytics dashboard', '10 integrations'] },
          { name: 'Pro', price: '49', features: ['Unlimited team members', 'Advanced AI forecasting', 'Custom integrations', '24/7 priority support'], popular: true },
          { name: 'Enterprise', price: '99', features: ['White-label dashboards', 'Custom security protocols', 'Dedicated account manager'] }
        ].map((plan, i) => (
          <div key={i} className={`bg-white p-10 rounded-3xl custom-shadow border ${plan.popular ? 'border-2 border-primary ring-8 ring-primary/5 transform scale-[1.05] z-10' : 'border-surface-container-low h-fit'}`}>
            {plan.popular && <div className="bg-primary text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full w-fit mb-4">Most Popular</div>}
            <h3 className="text-lg font-bold mb-2">{plan.name}</h3>
            <div className="flex items-baseline gap-1 mb-6">
              <span className="text-4xl font-bold">${plan.price}</span>
              <span className="text-on-surface-variant">/mo</span>
            </div>
            <ul className="space-y-4 mb-10">
              {plan.features.map((f, j) => (
                <li key={j} className="flex items-center gap-2 text-sm">
                  <CheckCircle2 className="w-4 h-4 text-primary" />
                  {f}
                </li>
              ))}
            </ul>
            <button className={`w-full py-3 rounded-full font-bold transition-all ${plan.popular ? 'btn-gradient text-white' : 'border border-primary text-primary hover:bg-primary-fixed'}`}>
              {plan.name === 'Enterprise' ? 'Contact Sales' : `Choose ${plan.name}`}
            </button>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const FAQ = () => {
  const [open, setOpen] = useState(0);
  const faqs = [
    { q: 'Is there a free trial available?', a: 'Yes, every new account starts with a 14-day full-access trial of our Pro plan. No credit card required to start.' },
    { q: 'Can I cancel my subscription at any time?', a: 'Absolutely. You can cancel your subscription from your account settings at any time without any penalties.' },
    { q: 'How secure is my business data?', a: 'We use industry-standard encryption and are SOC2 Type II compliant. Your data is isolated and encrypted at rest and in transit.' }
  ];

  return (
    <section className="max-w-3xl mx-auto px-6 py-32">
      <h2 className="text-4xl font-bold font-headline text-center mb-16">Frequently Asked Questions</h2>
      <div className="space-y-4">
        {faqs.map((faq, i) => (
          <div key={i} className={`p-6 bg-white rounded-2xl border border-surface-container-low transition-all ${open === i ? 'opacity-100' : 'opacity-60'}`}>
            <button 
              onClick={() => setOpen(i)}
              className="flex justify-between items-center w-full text-left font-bold text-lg"
            >
              {faq.q}
              <ChevronDown className={`w-5 h-5 transition-transform ${open === i ? 'rotate-180' : ''}`} />
            </button>
            {open === i && <p className="mt-4 text-on-surface-variant text-sm leading-relaxed">{faq.a}</p>}
          </div>
        ))}
      </div>
    </section>
  );
};

const FinalCTA = () => (
  <section className="max-w-7xl mx-auto px-6 py-20">
    <div className="bg-gradient-to-r from-primary-container to-[#9B6BFF] rounded-3xl p-16 lg:p-24 text-center text-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 blur-[100px] rounded-full -mr-48 -mt-48" />
      <div className="relative z-10 max-w-2xl mx-auto space-y-8">
        <h2 className="text-4xl lg:text-6xl font-bold font-headline leading-tight">Ready to transform your workflow?</h2>
        <p className="text-xl text-white/80">Join 5,000+ teams who are building the future with Base.</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
          <button className="bg-white text-primary px-10 py-5 rounded-full font-bold text-lg hover:shadow-2xl transition-all active:scale-95">
            Start free trial
          </button>
          <button className="bg-white/10 backdrop-blur-md text-white border border-white/20 px-10 py-5 rounded-full font-bold text-lg hover:bg-white/20 transition-all">
            Schedule Demo
          </button>
        </div>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="w-full bg-surface-container-low mt-20">
    <div className="grid grid-cols-2 md:grid-cols-6 gap-12 px-8 py-20 max-w-7xl mx-auto">
      <div className="col-span-2 space-y-6">
        <span className="text-2xl font-bold text-on-surface font-headline">Base</span>
        <p className="text-sm text-on-surface-variant max-w-xs leading-relaxed">
          The premium operating system for high-growth SaaS and digital products. Built with restraint and precision.
        </p>
        <div className="flex gap-4">
          {[Globe, Terminal, Github].map((Icon, i) => (
            <Icon key={i} className="w-5 h-5 text-outline-variant cursor-pointer hover:text-primary transition-colors" />
          ))}
        </div>
      </div>
      {[
        { title: 'Product', links: ['Features', 'Integrations', 'Pricing'] },
        { title: 'Company', links: ['About Us', 'Careers', 'Blog'] },
        { title: 'Resources', links: ['Documentation', 'Help Center', 'Community'] },
        { title: 'Legal', links: ['Privacy Policy', 'Terms of Service'] }
      ].map((group, i) => (
        <div key={i} className="space-y-4">
          <h4 className="font-bold text-xs text-on-surface uppercase tracking-widest">{group.title}</h4>
          <ul className="space-y-2">
            {group.links.map((link) => (
              <li key={link}>
                <a href="#" className="text-sm text-on-surface-variant hover:text-primary transition-colors">{link}</a>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
    <div className="max-w-7xl mx-auto px-8 py-8 border-t border-outline-variant/20 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-on-surface-variant">
      <span>© 2024 Base Inc. All rights reserved.</span>
      <div className="flex gap-6">
        <a href="#" className="hover:text-primary transition-colors">Twitter</a>
        <a href="#" className="hover:text-primary transition-colors">LinkedIn</a>
        <a href="#" className="hover:text-primary transition-colors">GitHub</a>
      </div>
    </div>
  </footer>
);

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <TrustBar />
        <FeatureOne />
        <FeatureTwo />
        <HowItWorks />
        <FeatureGrid />
        <DarkShowcase />
        <Testimonials />
        <Pricing />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
