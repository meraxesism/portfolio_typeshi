"use client";
import { useEffect } from "react";

export default function Page() {
  useEffect(() => {
    // Nav Scroll
    const nav = document.getElementById('navbar');
    const handleScroll = () => {
      if (nav) nav.classList.toggle('scrolled', window.scrollY > 60);
    };
    window.addEventListener('scroll', handleScroll);

    // Scroll Reveal
    const reveals = document.querySelectorAll('.reveal');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add('visible');        
      });
    }, { threshold: 0.12 });
    reveals.forEach(el => observer.observe(el));

    // Staggered Animations
    const featured = document.querySelector('.project-featured');
    const boxes = document.querySelectorAll('.arch-box') as NodeListOf<HTMLElement>;
    let timeouts: ReturnType<typeof setTimeout>[] = [];
    const handleMouseEnter = () => {
      boxes.forEach((box, i) => {
        timeouts.push(setTimeout(() => {
          box.style.borderColor = 'rgba(200,169,110,0.5)';
          box.style.color = '#c8a96e';
        }, i * 60));
      });
    };
    const handleMouseLeave = () => {
      timeouts.forEach(clearTimeout);
      timeouts = [];
      boxes.forEach(box => {
        box.style.borderColor = '';
        box.style.color = '';
      });
    };

    if (featured) {
      featured.addEventListener('mouseenter', handleMouseEnter);
      featured.addEventListener('mouseleave', handleMouseLeave);
    }

    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
      if (featured) {
        featured.removeEventListener('mouseenter', handleMouseEnter);
        featured.removeEventListener('mouseleave', handleMouseLeave);
      }
    };
  }, []);

  return (
    <main>


{/*  NAV  */}
<nav id="navbar">
  <a href="https://github.com/meraxesism" target="_blank" className="btn btn-gold" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
    GITHUB
  </a>
  <div className="nav-links">
    <a href="#projects">Projects</a>
    <a href="#skills">Skills</a>
    <a href="#about">About</a>
    <a href="#contact">Contact</a>
  </div>
</nav>

{/*  HERO  */}
<section className="hero" id="top">
  <div className="hero-grid"></div>
  <div className="hero-accent"></div>

  <div className="hero-eyebrow">AI/ML Engineer Â· Pune, India</div>

  <div className="hero-name">
    Apurv<br/><em>Bhosale</em>
  </div>

  <div className="hero-title">Building intelligent systems from the ground up</div>

  <div className="hero-meta">
    <div className="hero-desc">
      Third-year Diploma candidate in Artificial Intelligence &amp; Machine Learning
      at AISSMS Polytechnic. I architect distributed ML infrastructure
      and ship production AI systems. Currently, three of my
      projects are live production systems being used in an MNC.
    </div>
    <div className="hero-stats">
      <div className="stat">
        <span className="stat-num">15+</span>
        <span className="stat-label">ML Algorithms</span>
      </div>
      <div className="stat">
        <span className="stat-num">3</span>
        <span className="stat-label">Production Systems</span>
      </div>
    </div>
  </div>

  <div className="scroll-hint">
    <div className="scroll-line"></div>
    <span>Scroll</span>
  </div>
</section>

{/*  ABOUT  */}



{/*  PROJECTS  */}


{/* SKILLS */}




{/*  CONTACT  */}






<section id="projects">
  <div className="section-label">01 - Projects</div>
  <div className="section-heading">Systems built,<br/>not <em>assembled</em></div>

  <div className="projects-container">

    {/* FEATURED: FlowML */}
    <div className="project-featured reveal">
      <div className="project-visual" style={{ background: 'var(--bg3)', borderRadius: '8px', border: '1px solid var(--line)', overflow: 'hidden', position: 'relative', minHeight: '300px' }}>
        <img src="/flowml-cover.png" alt="FlowML Studio" style={{ width: '100%', height: '100%', objectFit: 'cover', position: 'absolute' }} />
      </div>

      <div className="project-content">
        <div>
          <div className="project-tag">Capstone Project</div>
          <div className="project-name">FlowML <em>Studio</em></div>
          <div className="project-desc">
            Self-hosted distributed AutoML platform. GPU acceleration, FastAPI/Celery/Redis orchestration, Optuna HPO, 15+ algorithms, Tailscale-secured deployment, React 18 + WebSocket telemetry frontend. Built solo.
          </div>

          <ul className="project-bullets">
            <li>Distributed task queues with Celery &amp; Redis</li>
            <li>Hyperparameter optimization via Optuna</li>
            <li>Tailscale-secured VPC deployment</li>
          </ul>

          <div className="project-stack">
            <span className="stack-tag">FastAPI</span>
            <span className="stack-tag">Celery</span>
            <span className="stack-tag">Redis</span>
            <span className="stack-tag">Optuna</span>
            <span className="stack-tag">React 18</span>
            <span className="stack-tag">Docker</span>
            <span className="stack-tag">MinIO</span>
          </div>
        </div>

        <div className="project-links">
          <a href="https://github.com/FlowML101/FlowML" target="_blank" className="btn btn-gold" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
            GitHub
          </a>
        </div>
      </div>
    </div>

    {/* SECONDARY PROJECTS */}
    <div className="projects-grid reveal" style={{ display: 'grid', gap: '1px', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', background: 'var(--line-soft)', border: '1px solid var(--line-soft)' }}>

      <div className="project-card" style={{ padding: 0, display: 'flex', flexDirection: 'column' }}>
        <div style={{ width: '100%', height: '220px', background: 'var(--bg3)', borderBottom: '1px solid var(--line)', position: 'relative' }}>
          <img src="/dianav-cover.png" alt="DiaNav Project" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        </div><div style={{ padding: '2rem' }}><div className="card-num">01</div>
        <div className="card-tag">Tata Motors</div>
        <div className="card-name" style={{ fontFamily: 'var(--serif)', fontSize: '1.6rem', color: 'var(--cream)', marginBottom: '0.8rem' }}>DiaNav</div>       
        <div className="project-desc" style={{ fontSize: '0.85rem' }}>
          On-premise RAG platform for QA workflows. LLM inference, semantic search, Hindi/Marathi NLP, concurrent session handling. Deployed and in active use. 
        </div>
        <div className="project-stack" style={{ marginBottom: 0 }}>
          <span className="stack-tag">FastAPI</span>
          <span className="stack-tag">LLMs</span>
          <span className="stack-tag">RAG</span>
          <span className="stack-tag">React 18</span>
        </div>
        <div style={{ marginTop: '1.5rem', paddingTop: '1.5rem', borderTop: '1px solid var(--line-soft)' }}>
          <a href="https://github.com/meraxesism/DiaNav" target="_blank" className="card-link" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', color: 'var(--gold)', fontSize: '0.8rem', textDecoration: 'none', fontFamily: 'var(--mono)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
            GitHub
          </a>
        </div>
      </div>
      </div>

      <div className="project-card" style={{ padding: 0, display: 'flex', flexDirection: 'column' }}>
        <div style={{ width: '100%', height: '220px', background: 'var(--bg3)', borderBottom: '1px solid var(--line)', position: 'relative' }}>
          <img src="/mantion-cover.png" alt="ManTion Project" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        </div><div style={{ padding: '2rem' }}><div className="card-num">02</div>
        <div className="card-tag">Indie / Tata Motors</div>
        <div className="card-name" style={{ fontFamily: 'var(--serif)', fontSize: '1.6rem', color: 'var(--cream)', marginBottom: '0.8rem' }}>ManTion</div>      
        <div className="project-desc" style={{ fontSize: '0.85rem' }}>
          Real-time computer vision safety system for assembly lines. YOLOv8 + MediaPipe, sub-100ms latency, gesture-based machine control.
        </div>
        <div className="project-stack" style={{ marginBottom: 0 }}>
          <span className="stack-tag">YOLOv8</span>
          <span className="stack-tag">MediaPipe</span>
          <span className="stack-tag">CV</span>
          <span className="stack-tag">Python</span>
        </div>
        <div style={{ marginTop: '1.5rem', paddingTop: '1.5rem', borderTop: '1px solid var(--line-soft)' }}>
          <a href="https://github.com/meraxesism/ManTion" target="_blank" className="card-link" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', color: 'var(--gold)', fontSize: '0.8rem', textDecoration: 'none', fontFamily: 'var(--mono)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
            GitHub
          </a>
        </div>
      </div>
      </div>

      <div className="project-card" style={{ padding: 0, display: 'flex', flexDirection: 'column' }}>
        <div style={{ width: '100%', height: '220px', background: 'var(--bg3)', borderBottom: '1px solid var(--line)', position: 'relative' }}>
          <img src="/pbs-cover.png" alt="Shop-floor Analytics" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        </div><div style={{ padding: '2rem' }}><div className="card-num">03</div>
        <div className="card-tag">Tata Motors</div>
        <div className="card-name" style={{ fontFamily: 'var(--serif)', fontSize: '1.6rem', color: 'var(--cream)', marginBottom: '0.8rem', lineHeight: '1.2' }}>Shop-floor Analytics</div>
        <div className="project-desc" style={{ fontSize: '0.85rem' }}>
          Live visualization system for automotive paint shop ops. CPK/cp statistical quality control, predictive maintenance tracking.
        </div>
        <div className="project-stack" style={{ marginBottom: 0 }}>
          <span className="stack-tag">Real-time viz</span>
          <span className="stack-tag">SQC</span>
          <span className="stack-tag">Pred Maint.</span>
        </div>
        <div style={{ marginTop: '1.5rem', paddingTop: '1.5rem', borderTop: '1px solid var(--line-soft)' }}>
          <a href="https://github.com/meraxesism/pbs-data-analytics" target="_blank" className="card-link" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', color: 'var(--gold)', fontSize: '0.8rem', textDecoration: 'none', fontFamily: 'var(--mono)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
            GitHub
          </a>
        </div>
      </div>
      </div>

    </div>
  </div>
</section>

<section id="skills">
  <div className="section-label">02 - Skills &amp; Stack</div>
  <div className="section-heading">What I<br/>actually <em>know</em></div>      

  <div className="skills-layout" style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 1.2fr)', gap: '4rem', alignItems: 'start' }}>
    <div className="skills-left">
    <div className="reveal">
      <div className="skills-group">
        <div className="skills-group-label">Machine Learning &amp; AI</div>     
        <div className="skills-list">
          <span className="skill-pill primary">XGBoost</span>
          <span className="skill-pill primary">LightGBM</span>
          <span className="skill-pill primary">CatBoost</span>
          <span className="skill-pill primary">AutoML</span>
          <span className="skill-pill">Optuna (HPO)</span>
          <span className="skill-pill">Sentence-Transformers</span>
          <span className="skill-pill">Ollama (Local LLM)</span>
          <span className="skill-pill">Vector Search</span>
          <span className="skill-pill">scikit-learn</span>
          <span className="skill-pill">Evaluation Metrics</span>
        </div>
      </div>
      <div className="skills-group">
        <div className="skills-group-label">Backend &amp; Infrastructure</div>  
        <div className="skills-list">
          <span className="skill-pill primary">Python</span>
          <span className="skill-pill primary">FastAPI</span>
          <span className="skill-pill primary">Celery</span>
          <span className="skill-pill primary">Redis</span>
          <span className="skill-pill">PostgreSQL</span>
          <span className="skill-pill">MinIO</span>
          <span className="skill-pill">Docker</span>
          <span className="skill-pill">Tailscale VPN</span>
          <span className="skill-pill">REST APIs</span>
          <span className="skill-pill">Pydantic</span>
        </div>
      </div>
      <div className="skills-group">
        <div className="skills-group-label">Frontend</div>
        <div className="skills-list">
          <span className="skill-pill primary">React 18</span>
          <span className="skill-pill primary">TypeScript</span>
          <span className="skill-pill">Tailwind CSS</span>
          <span className="skill-pill">React i18next</span>
          <span className="skill-pill">State Management</span>
        </div>
      </div>
      <div className="skills-group">
        <div className="skills-group-label">Data &amp; Cloud</div>
        <div className="skills-list">
          <span className="skill-pill">Apache Spark</span>
          <span className="skill-pill">Hadoop / MapReduce</span>
          <span className="skill-pill">Hive / Pig</span>
          <span className="skill-pill">MongoDB</span>
          <span className="skill-pill">Google Cloud AI</span>
          <span className="skill-pill">AWS ML</span>
          <span className="skill-pill">Databricks</span>
        </div>
      </div>
    </div>
  </div>

    {/* Right Column: Experience Timeline */}
    
    <div className="skills-right reveal">
      <div style={{ fontFamily: 'var(--mono)', fontSize: '0.62rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--gold-dim)', marginBottom: '2rem' }}>
        Experience
      </div>
      <div className="timeline-container" style={{ position: 'relative', marginLeft: '6px', paddingLeft: '2.5rem', display: 'flex', flexDirection: 'column', gap: '3rem', borderLeft: '1px solid var(--line)' }}>
        
        {/* ML Engineering Intern Parent Node */}
        <div className="timeline-item" style={{ position: 'relative' }}>
          <div style={{ position: 'absolute', top: '8px', left: '-2.5rem', width: '13px', height: '13px', borderRadius: '50%', background: 'var(--bg)', border: '2px solid var(--gold)', transform: 'translateX(-50%)' }}></div>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '0.3rem' }}>     
              <h3 style={{ fontFamily: 'var(--serif)', fontSize: '2rem', color: 'var(--gold)', fontWeight: 400, lineHeight: 1.2 }}>ML Engineering Intern</h3>       
              <span style={{ fontFamily: 'var(--sans)', fontSize: '0.85rem', color: 'var(--cream-dim)' }}>Jul 2025 - Present</span>
            </div>
            <div style={{ fontFamily: 'var(--mono)', fontSize: '0.75rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--cream-dim)', marginBottom: '2rem' }}>
              Tata Motors, Digitalization &amp; QA
            </div>

            {/* NESTED TIMELINE */}
            <div style={{ position: 'relative', paddingLeft: '2rem', borderLeft: '1px solid var(--line-soft)', display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
                
                {/* Nested Item 1: DiaNav */}
                <div style={{ position: 'relative' }}>
                  <div style={{ position: 'absolute', top: '5px', left: '-2rem', width: '9px', height: '9px', borderRadius: '50%', background: 'var(--bg)', border: '2px solid var(--gold)', transform: 'translateX(-50%)' }}></div>
                  <h4 style={{ fontFamily: 'var(--serif)', fontSize: '1.4rem', color: 'var(--cream)', marginBottom: '0.5rem' }}>DiaNav</h4>
                  <div style={{ color: 'var(--cream-dim)', fontSize: '0.9rem', lineHeight: 1.6, marginBottom: '0.8rem' }}>
                    Built an on-premise RAG platform for QA workflows. LLM inference, semantic search, Hindi/Marathi NLP, concurrent session handling. Deployed and in active use.
                  </div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>      
                    <span className="stack-tag" style={{ border: '1px solid var(--line)', padding: '0.2rem 0.6rem', fontSize: '0.65rem', fontFamily: 'var(--mono)', borderRadius: '4px', color: 'var(--cream-dim)' }}>FastAPI</span>
                    <span className="stack-tag" style={{ border: '1px solid var(--line)', padding: '0.2rem 0.6rem', fontSize: '0.65rem', fontFamily: 'var(--mono)', borderRadius: '4px', color: 'var(--cream-dim)' }}>LLMs</span>
                    <span className="stack-tag" style={{ border: '1px solid var(--line)', padding: '0.2rem 0.6rem', fontSize: '0.65rem', fontFamily: 'var(--mono)', borderRadius: '4px', color: 'var(--cream-dim)' }}>RAG</span>
                    <span className="stack-tag" style={{ border: '1px solid var(--line)', padding: '0.2rem 0.6rem', fontSize: '0.65rem', fontFamily: 'var(--mono)', borderRadius: '4px', color: 'var(--cream-dim)' }}>React 18</span>
                  </div>
                </div>

                {/* Nested Item 2: ManTion */}
                <div style={{ position: 'relative' }}>
                  <div style={{ position: 'absolute', top: '5px', left: '-2rem', width: '9px', height: '9px', borderRadius: '50%', background: 'var(--bg)', border: '2px solid var(--cream)', transform: 'translateX(-50%)' }}></div>
                  <h4 style={{ fontFamily: 'var(--serif)', fontSize: '1.4rem', color: 'var(--cream)', marginBottom: '0.5rem' }}>ManTion</h4>
                  <div style={{ color: 'var(--cream-dim)', fontSize: '0.9rem', lineHeight: 1.6, marginBottom: '0.8rem' }}>
                    Computer vision safety system for assembly lines. YOLOv8 + MediaPipe, sub-100ms latency, gesture-based machine control with smart debouncing.
                  </div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>      
                    <span className="stack-tag" style={{ border: '1px solid var(--line)', padding: '0.2rem 0.6rem', fontSize: '0.65rem', fontFamily: 'var(--mono)', borderRadius: '4px', color: 'var(--cream-dim)' }}>YOLOv8</span>
                    <span className="stack-tag" style={{ border: '1px solid var(--line)', padding: '0.2rem 0.6rem', fontSize: '0.65rem', fontFamily: 'var(--mono)', borderRadius: '4px', color: 'var(--cream-dim)' }}>MediaPipe</span>
                    <span className="stack-tag" style={{ border: '1px solid var(--line)', padding: '0.2rem 0.6rem', fontSize: '0.65rem', fontFamily: 'var(--mono)', borderRadius: '4px', color: 'var(--cream-dim)' }}>Computer Vision</span>
                  </div>
                </div>

                {/* Nested Item 3: Shop-floor Analytics */}
                <div style={{ position: 'relative' }}>
                  <div style={{ position: 'absolute', top: '5px', left: '-2rem', width: '9px', height: '9px', borderRadius: '50%', background: 'var(--bg)', border: '2px solid var(--gold)', transform: 'translateX(-50%)' }}></div>
                  <h4 style={{ fontFamily: 'var(--serif)', fontSize: '1.4rem', color: 'var(--cream)', marginBottom: '0.5rem' }}>Shop-floor Analytics Dashboard</h4>
                  <div style={{ color: 'var(--cream-dim)', fontSize: '0.9rem', lineHeight: 1.6, marginBottom: '0.8rem' }}>
                    Live visualization system for automotive paint shop ops. CPK/cp statistical quality control, predictive maintenance tracking, real-time environmental monitoring.
                  </div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>      
                    <span className="stack-tag" style={{ border: '1px solid var(--line)', padding: '0.2rem 0.6rem', fontSize: '0.65rem', fontFamily: 'var(--mono)', borderRadius: '4px', color: 'var(--cream-dim)' }}>Real-time viz</span>
                    <span className="stack-tag" style={{ border: '1px solid var(--line)', padding: '0.2rem 0.6rem', fontSize: '0.65rem', fontFamily: 'var(--mono)', borderRadius: '4px', color: 'var(--cream-dim)' }}>SQC</span>
                    <span className="stack-tag" style={{ border: '1px solid var(--line)', padding: '0.2rem 0.6rem', fontSize: '0.65rem', fontFamily: 'var(--mono)', borderRadius: '4px', color: 'var(--cream-dim)' }}>Pred Maint.</span>
                  </div>
                </div>
                
            </div>
          </div>
        </div>

        {/* Capstone Lead */}
        <div className="timeline-item" style={{ position: 'relative' }}>        
          <div style={{ position: 'absolute', top: '8px', left: '-2.5rem', width: '13px', height: '13px', borderRadius: '50%', background: 'var(--bg)', border: '2px solid var(--cream)', transform: 'translateX(-50%)' }}></div>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '0.3rem' }}>     
              <h3 style={{ fontFamily: 'var(--serif)', fontSize: '2rem', color: 'var(--cream)', fontWeight: 400, lineHeight: 1.2 }}>Capstone Lead</h3>
              <span style={{ fontFamily: 'var(--sans)', fontSize: '0.85rem', color: 'var(--cream-dim)' }}>Jan - Mar 2026</span>
            </div>
            <div style={{ fontFamily: 'var(--mono)', fontSize: '0.75rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--cream-dim)', marginBottom: '1rem' }}>
              Capstone, AISSMS Polytechnic
            </div>
            <div style={{ color: 'var(--cream)', lineHeight: 1.6, marginBottom: '1.2rem', maxWidth: '800px' }}>
              Self-hosted distributed AutoML platform. GPU acceleration, FastAPI/Celery/Redis orchestration, Optuna HPO, 15+ algorithms, Tailscale-secured deployment, React 18 + WebSocket telemetry frontend. Built solo.
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>      
              <span className="stack-tag" style={{ border: '1px solid var(--line)', padding: '0.2rem 0.6rem', fontSize: '0.7rem', fontFamily: 'var(--mono)', borderRadius: '4px', color: 'var(--cream-dim)' }}>FastAPI</span>
              <span className="stack-tag" style={{ border: '1px solid var(--line)', padding: '0.2rem 0.6rem', fontSize: '0.7rem', fontFamily: 'var(--mono)', borderRadius: '4px', color: 'var(--cream-dim)' }}>Celery</span>
              <span className="stack-tag" style={{ border: '1px solid var(--line)', padding: '0.2rem 0.6rem', fontSize: '0.7rem', fontFamily: 'var(--mono)', borderRadius: '4px', color: 'var(--cream-dim)' }}>Redis</span>
              <span className="stack-tag" style={{ border: '1px solid var(--line)', padding: '0.2rem 0.6rem', fontSize: '0.7rem', fontFamily: 'var(--mono)', borderRadius: '4px', color: 'var(--cream-dim)' }}>Optuna</span>
              <span className="stack-tag" style={{ border: '1px solid var(--line)', padding: '0.2rem 0.6rem', fontSize: '0.7rem', fontFamily: 'var(--mono)', borderRadius: '4px', color: 'var(--cream-dim)' }}>React 18</span>
              <span className="stack-tag" style={{ border: '1px solid var(--line)', padding: '0.2rem 0.6rem', fontSize: '0.7rem', fontFamily: 'var(--mono)', borderRadius: '4px', color: 'var(--cream-dim)' }}>Docker</span>
              <span className="stack-tag" style={{ border: '1px solid var(--line)', padding: '0.2rem 0.6rem', fontSize: '0.7rem', fontFamily: 'var(--mono)', borderRadius: '4px', color: 'var(--cream-dim)' }}>MinIO</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
</section>

<section id="about">
  <div className="section-label">03 - About</div>
  <div className="section-heading">The <em>context</em><br/>behind the code</div>
  <div className="about-grid">
    <div className="about-text reveal">
      <p>
        Third-year AI/ML Diploma student. Three projects under live use in an MNC.
      </p>
      <p>
        At Tata Motors, I built an AI diagnostic assistant for quality assurance - local LLM inference, vector search, three-language support. It&apos;s deployed. Engineers use it.
      </p>
      <p>
        My capstone is FlowML Studio - a self-hosted AutoML platform with GPU acceleration, distributed task queues, object storage, VPN-secured networking, and a hyperparameter optimization engine supporting 15+ algorithms. Built solo. Runs on real infrastructure.
      </p>
      <p>
        I work at the systems level. I understand the fundamentals, then build on top of them. Clean architecture, production-grade reliability, no shortcuts.  
      </p>
    </div>
    <div className="about-right reveal">
      <p style={{fontFamily: 'var(--mono)', fontSize: '0.62rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--gold-dim)', marginBottom: '1.2rem'}}>Recognition & Impact</p>

      <div className="cert-item" style={{ flexDirection: 'column', gap: '1.5rem', padding: '1.5rem', background: 'var(--bg2)', border: '1px solid var(--line)' }}>

        {/* Text Section Above */}
        <div className="cert-body" style={{ width: '100%' }}>
          <div className="cert-name" style={{ fontSize: '0.95rem', color: 'var(--gold)', marginBottom: '0.6rem', lineHeight: '1.4' }}>
            Felicitation by Tata Motors QA Dept General Manager
          </div>
          <div className="cert-issuer" style={{ color: 'var(--cream-dim)', lineHeight: '1.6' }}>
            Recognized by leadership and team for independently architecting the DiaNav semantic AI platform, transforming QA workflows and operational scalability.
            <br/><br/>
            <em style={{ color: 'var(--gold-dim)' }}>[ Letter of Recommendation & Feedback Pending ]</em>
          </div>
        </div>

        {/* Image as a small rectangular card below */}
        <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
          <img
            src="/tata-appreciation.jpg"
            alt="Felicitation at Tata Motors"
            style={{
              width: '100%',
              maxWidth: '260px',
              height: '160px',
              objectFit: 'cover',
              border: '1px solid var(--line)',
              borderRadius: '6px',
              filter: 'grayscale(0.1) contrast(1.05)'
            }}
          />
        </div>

      </div>
    </div>
  </div>
</section>

<section id="contact">
  <div className="section-label">04 - Contact</div>
  <div className="contact-inner">
    <div className="contact-left reveal">
      <div className="contact-large">
        Let&apos;s build<br/>something <em>real.</em>
      </div>
      <div className="contact-links">
        <a href="https://github.com/meraxesism" target="_blank" className="contact-link">
          <span className="contact-link-icon">GitHub</span>
          github.com/meraxesism
        </a>
        <a href="https://www.linkedin.com/in/apurvvbhosale/" target="_blank" className="contact-link">
          <span className="contact-link-icon">LinkedIn</span>
          linkedin.com/in/apurvvbhosale
        </a>
        <a href="mailto:apurvbhosale643@gmail.com" className="contact-link">     
          <span className="contact-link-icon">Email</span>
          apurvbhosale643@gmail.com
        </a>
      </div>
    </div>
    <div className="contact-right reveal">
      <div className="availability">
        <div className="dot"></div>
        Available for opportunities
      </div>
      <div className="availability-desc">
        Open to internships, full-time roles, and research positions
        in AI/ML engineering, MLOps, and distributed systems.
        I work fast, build clean, and take problems seriously.
        <br/><br/>
        Based in Pune, India. Remote-friendly.
      </div>
    </div>
  </div>
</section>

{/*  FOOTER  */}
<footer>
  <span>� 2026 Apurv Bhosale</span>
  <span>Built with intent Â· AISSMS Polytechnic, Pune</span>
  </footer>


    </main>
  );
}