/* ═══════════════════════════════════════════════════════════════════════════
   TOP HAT CYBER SOLUTIONS — MAIN JAVASCRIPT
   Funcionalidades: Idioma, Serviços, Overlay, Formulário, Animações 3D
   ═══════════════════════════════════════════════════════════════════════════ */

'use strict';

// ─── DATA ───────────────────────────────────────────────────────────────────
const SERVICES = [
  {
    id: 'fs-web', code: 'FS-01', category: 'dev',
    title: { pt: 'Desenvolvimento Web Full-Stack', en: 'Full-Stack Web Development' },
    short: { pt: 'Sistemas web completos do zero ao deploy, com HTML, CSS, JS, Node.js, Python e PHP.', en: 'Complete web systems from scratch to deploy, with HTML, CSS, JS, Node.js, Python and PHP.' },
    long:  {
      pt: 'Desenvolvimento completo de aplicações web modernas usando as linguagens e tecnologias certas para cada projeto: HTML5, CSS3, JavaScript, Node.js, Python, PHP, C e C++. Frontend responsivo, backend sólido, banco de dados relacional (SQL/MySQL/PostgreSQL) ou NoSQL, autenticação segura e CI/CD com GitHub Actions. Código documentado, testado e pronto para produção.',
      en: 'Complete development of modern web applications using the right languages and technologies for each project: HTML5, CSS3, JavaScript, Node.js, Python, PHP, C and C++. Responsive frontend, solid backend, relational (SQL/MySQL/PostgreSQL) or NoSQL database, secure authentication and CI/CD with GitHub Actions. Documented, tested, production-ready code.'
    },
    stack: ['JavaScript', 'Node.js', 'Python', 'PHP', 'HTML5', 'CSS3', 'C / C++', 'SQL', 'MySQL', 'PostgreSQL', 'React', 'Docker']
  },
  {
    id: 'fs-api', code: 'FS-02', category: 'dev',
    title: { pt: 'APIs, Automação & Integrações', en: 'APIs, Automation & Integrations' },
    short: { pt: 'APIs REST/GraphQL robustas, automações e integrações com AWS, pagamentos, ERPs e mais.', en: 'Robust REST/GraphQL APIs, automations and integrations with AWS, payments, ERPs and more.' },
    long:  {
      pt: 'Design e implementação de APIs seguras em Node.js e Python com documentação OpenAPI, rate limiting e autenticação JWT/OAuth2. Automações de processos, scripts em Python e C para tarefas críticas. Integrações com AWS (Lambda, S3, EC2, RDS), gateways de pagamento (Stripe, PagSeguro, Mercado Pago), ERPs, CRMs e serviços externos via webhooks e SDKs. Foco em segurança, performance e manutenibilidade.',
      en: 'Design and implementation of secure APIs in Node.js and Python with OpenAPI documentation, rate limiting and JWT/OAuth2 authentication. Process automations, Python and C scripts for critical tasks. Integrations with AWS (Lambda, S3, EC2, RDS), payment gateways (Stripe, PagSeguro, Mercado Pago), ERPs, CRMs and external services via webhooks and SDKs. Focus on security, performance and maintainability.'
    },
    stack: ['Node.js', 'Python', 'REST', 'GraphQL', 'AWS Lambda', 'AWS S3', 'AWS EC2', 'JWT', 'OAuth2', 'Stripe', 'Webhooks', 'OpenAPI']
  },
  {
    id: 'fs-devops', code: 'FS-03', category: 'dev',
    title: { pt: 'DevSecOps & Cloud', en: 'DevSecOps & Cloud' },
    short: { pt: 'Infraestrutura segura na AWS com Docker, automação de pipelines e monitoramento contínuo.', en: 'Secure AWS infrastructure with Docker, pipeline automation and continuous monitoring.' },
    long:  {
      pt: 'Configuração de ambientes de produção resilientes com Docker, Docker Compose e Kubernetes. Pipelines de CI/CD com GitHub Actions incluindo testes de segurança embutidos (SAST/DAST). Infraestrutura como código com Terraform na AWS. Scripts de automação em Python, Bash e C para tarefas operacionais. Logging centralizado, monitoramento com Grafana e alertas proativos. Segurança integrada desde o primeiro commit.',
      en: 'Resilient production environment setup with Docker, Docker Compose and Kubernetes. CI/CD pipelines with GitHub Actions including embedded security tests (SAST/DAST). Infrastructure as code with Terraform on AWS. Automation scripts in Python, Bash and C for operational tasks. Centralized logging, Grafana monitoring and proactive alerts. Security integrated from the first commit.'
    },
    stack: ['AWS', 'Docker', 'Kubernetes', 'Terraform', 'GitHub Actions', 'Python', 'Bash', 'Grafana', 'Linux', 'Nginx', 'PostgreSQL', 'Redis']
  },
  {
    id: 'pt-web', code: 'PT-01', category: 'sec',
    title: { pt: 'Pentest de Aplicação Web', en: 'Web Application Pentest' },
    short: { pt: 'Teste de invasão manual em apps construídas com qualquer stack: PHP, Node, Python e mais.', en: 'Manual penetration test on apps built with any stack: PHP, Node, Python and more.' },
    long:  {
      pt: 'Avaliação completa de segurança de aplicações web independente da stack usada (PHP, Node.js, Python, HTML/JS puro, SQL/MySQL). Cobrimos OWASP Top 10, injeções SQL/NoSQL/Command, XSS, CSRF, autenticação quebrada, controle de acesso, exposição de dados e lógica de negócio. Relatório técnico + executivo com CVSS e roadmap de remediação claro e acionável.',
      en: 'Complete web application security assessment regardless of the stack used (PHP, Node.js, Python, plain HTML/JS, SQL/MySQL). We cover OWASP Top 10, SQL/NoSQL/Command injections, XSS, CSRF, broken authentication, access control, data exposure and business logic. Technical + executive report with CVSS and a clear, actionable remediation roadmap.'
    },
    stack: ['Burp Suite', 'OWASP Top 10', 'CVSS', 'Metasploit', 'Nuclei', 'SQLmap', 'Nikto', 'Manual Testing']
  },
  {
    id: 'pt-api', code: 'PT-02', category: 'sec',
    title: { pt: 'Pentest de API & Serviços Cloud', en: 'API & Cloud Services Pentest' },
    short: { pt: 'Auditoria ofensiva de APIs REST/GraphQL e configurações AWS com foco em autenticação e acesso.', en: 'Offensive audit of REST/GraphQL APIs and AWS configurations focused on auth and access.' },
    long:  {
      pt: 'Testes aprofundados em APIs REST, GraphQL e gRPC: quebra de autenticação, BOLA/BFLA, mass assignment, exposição excessiva de dados, rate limiting bypass e fuzzing de endpoints. Auditoria de configurações de serviços cloud (AWS IAM, S3, Lambda, EC2) para identificar permissões excessivas, buckets expostos e segredos vazados. Baseado no OWASP API Security Top 10 com evidências detalhadas e passos de reprodução.',
      en: 'In-depth tests on REST, GraphQL and gRPC APIs: authentication bypass, BOLA/BFLA, mass assignment, excessive data exposure, rate limiting bypass and endpoint fuzzing. Audit of cloud service configurations (AWS IAM, S3, Lambda, EC2) to identify excessive permissions, exposed buckets and leaked secrets. Based on OWASP API Security Top 10 with detailed evidence and reproduction steps.'
    },
    stack: ['Burp Suite', 'Postman', 'ffuf', 'JWT Toolkit', 'OWASP API Top 10', 'AWS CLI', 'ScoutSuite', 'Pacu', 'GraphQL Map']
  },
  {
    id: 'pt-rt', code: 'PT-03', category: 'sec',
    title: { pt: 'Red Team & Auditoria', en: 'Red Team & Audit' },
    short: { pt: 'Simulação adversarial completa baseada em MITRE ATT&CK para medir resiliência real.', en: 'Full adversarial simulation based on MITRE ATT&CK to measure real resilience.' },
    long:  {
      pt: 'Exercícios de red team com escopo escrito e NDA: reconhecimento OSINT, phishing direcionado, exploração de vulnerabilidades, movimentação lateral e persistência. Scripts customizados em Python e C para evasão e pós-exploração. Relatório mapeado ao MITRE ATT&CK com evidências detalhadas e recomendações estratégicas para fortalecer a postura de segurança da organização.',
      en: 'Red team exercises with written scope and NDA: OSINT recon, targeted phishing, vulnerability exploitation, lateral movement and persistence. Custom Python and C scripts for evasion and post-exploitation. Report mapped to MITRE ATT&CK with detailed evidence and strategic recommendations to strengthen the organization\'s security posture.'
    },
    stack: ['MITRE ATT&CK', 'Metasploit', 'Sliver', 'OSINT', 'Python', 'C', 'Nmap', 'Cobalt Strike', 'Social Engineering']
  }
];

const MARQUEE_ITEMS = [
  'JAVASCRIPT', 'NODE.JS', 'PYTHON', 'PHP', 'C / C++', 'SQL', 'HTML5', 'CSS3',
  'PENTEST', 'OWASP', 'RED TEAM', 'AWS', 'DOCKER', 'API SECURITY',
  'REACT', 'KUBERNETES', 'MITRE ATT\&CK', 'DEVSECOPS', 'POSTGRESQL', 'AUTOMAÇÃO'
];

// ─── TRANSLATIONS ────────────────────────────────────────────────────────────
const T = {
  pt: {
    nav: { services: 'Serviços', about: 'Sobre', process: 'Processo', contact: 'Contato', cta: 'Solicitar Orçamento' },
    hero: {
      t1: 'Top Hat Cyber Solutions',
      lead: 'Serviços de desenvolvimento full-stack e pentest ofensivo entregues com método, rigor e sigilo. Top Hat Cyber Solutions é o estúdio de uma pessoa que faz o trabalho de uma equipe.',
      cta1: 'Ver serviços ↘', cta2: 'Falar agora',
      s1: 'Anos em código & ofensiva', s2: 'Projetos entregues', s3: 'Confidencialidade'
    },
    services: {
      ey: '01 — Serviços',
      title: 'Dois ofícios.\nUm padrão de qualidade.',
      sub: 'Construo produtos web sólidos e quebro os fracos. Toda entrega vem com documentação, código testado e clareza absoluta sobre o que foi feito.',
      all: 'Todos', dev: 'Full-Stack', sec: 'Pentest',
      details: 'Ver detalhes', stack: 'Stack Tecnológica',
      req: 'Solicitar este serviço ↗', close: 'Fechar'
    },
    about: {
      ey: '02 — Sobre',
      title: 'Quem está\ndo outro lado.',
      p1: 'Sou desenvolvedor full-stack e pentester com atuação dupla: durante o dia, projeto sistemas que funcionam; à noite, encontro formas de quebrá-los. Essa visão simétrica é o que entrego como serviço.',
      p2: 'Trabalho sob NDA, com escopo escrito, relatórios claros e nada de surpresas. Sem buzzwords, sem promessas mágicas — apenas engenharia honesta e resultados verificáveis.',
      bullets: [
        'Relatórios técnicos + executivos com CVSS',
        'Aderência a OWASP, NIST, PTES e MITRE ATT&CK',
        'Código com testes, CI/CD e revisões detalhadas',
        'Comunicação direta, ciclos curtos e transparentes'
      ]
    },
    process: {
      ey: '03 — Processo',
      title: 'Como trabalhamos juntos',
      steps: [
        { n: '01', t: 'Briefing', d: 'Conversa inicial sob NDA para entender escopo, objetivos, restrições e prazo. Sem compromisso.' },
        { n: '02', t: 'Proposta', d: 'Escopo escrito detalhado, cronograma realista, entregáveis claros e preço fechado. Zero surpresas.' },
        { n: '03', t: 'Execução', d: 'Sprints curtos com comunicação assíncrona constante e check-ins ao vivo conforme necessário.' },
        { n: '04', t: 'Entrega', d: 'Documentação completa, relatório detalhado, hand-off estruturado e retest ou garantia inclusos.' }
      ]
    },
    contact: {
      ey: '04 — Contato',
      title: 'Vamos conversar.',
      sub: 'Conte sobre o seu projeto ou desafio de segurança. Toda comunicação é tratada como estritamente confidencial desde o primeiro contato.',
      name: 'Nome completo', email: 'E-mail corporativo', service: 'Serviço de interesse',
      svcAny: '— Selecione (opcional) —', subject: 'Assunto do contato',
      message: 'Descreva seu projeto, desafio ou dúvida em detalhes',
      send: 'Enviar mensagem',
      direct: 'Ou fale diretamente via:',
      success: 'Mensagem composta com sucesso!', successSub: 'Abrindo seu cliente de e-mail...',
      error: 'Por favor, preencha todos os campos obrigatórios.'
    },
    footer: {
      tagline: 'Engenharia ofensiva e defensiva, sem teatro.',
      rights: 'Todos os direitos reservados.'
    }
  },
  en: {
    nav: { services: 'Services', about: 'About', process: 'Process', contact: 'Contact', cta: 'Get a Quote' },
    hero: {
      t1: 'Top Hat Cyber Solutions',
      lead: 'Full-stack development and offensive pentest services delivered with method, rigor and discretion. Top Hat Cyber Solutions is a one-person studio doing the work of a team.',
      cta1: 'See services ↘', cta2: 'Talk now',
      s1: 'Years in code & offense', s2: 'Projects delivered', s3: 'Confidentiality'
    },
    services: {
      ey: '01 — Services',
      title: 'Two crafts.\nOne quality bar.',
      sub: 'I build solid web products and break the weak ones. Every delivery comes with documentation, tested code and absolute clarity on what was done.',
      all: 'All', dev: 'Full-Stack', sec: 'Pentest',
      details: 'View details', stack: 'Tech Stack',
      req: 'Request this service ↗', close: 'Close'
    },
    about: {
      ey: '02 — About',
      title: "Who's on\nthe other side.",
      p1: "I'm a full-stack developer and pentester wearing two hats: by day I design systems that work; by night I find ways to break them. That symmetric view is what I deliver as a service.",
      p2: 'I work under NDA, with written scope, clear reports and no surprises. No buzzwords, no magic promises — just honest engineering and verifiable results.',
      bullets: [
        'Technical + executive reports with CVSS scoring',
        'Adherence to OWASP, NIST, PTES & MITRE ATT&CK',
        'Code with tests, CI/CD and detailed reviews',
        'Direct communication, short and transparent cycles'
      ]
    },
    process: {
      ey: '03 — Process',
      title: 'How we work together',
      steps: [
        { n: '01', t: 'Briefing', d: 'NDA-covered intro call to understand scope, goals, constraints and timeline. No commitment required.' },
        { n: '02', t: 'Proposal', d: 'Detailed written scope, realistic timeline, clear deliverables and fixed price. Zero surprises.' },
        { n: '03', t: 'Execution', d: 'Short sprints with constant async communication and live check-ins as needed throughout.' },
        { n: '04', t: 'Delivery', d: 'Full documentation, detailed report, structured hand-off and retest or warranty included.' }
      ]
    },
    contact: {
      ey: '04 — Contact',
      title: "Let's talk.",
      sub: 'Tell me about your project or security challenge. All communication is treated as strictly confidential from first contact.',
      name: 'Full name', email: 'Work email', service: 'Service of interest',
      svcAny: '— Select (optional) —', subject: 'Subject',
      message: 'Describe your project, challenge or question in detail',
      send: 'Send message',
      direct: 'Or speak directly via:',
      success: 'Message composed!', successSub: 'Opening your email client...',
      error: 'Please fill in all required fields.'
    },
    footer: {
      tagline: 'Offensive and defensive engineering, no theater.',
      rights: 'All rights reserved.'
    }
  }
};

// ─── STATE ───────────────────────────────────────────────────────────────────
let lang = 'pt';
let activeFilter = 'all';
let selectedSvc = null;

// ─── UTILS ───────────────────────────────────────────────────────────────────
function scrollToSection(id) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function showToast(msg, sub = '') {
  const t = document.getElementById('toast');
  t.innerHTML = msg + (sub ? `<small>${sub}</small>` : '');
  t.classList.add('show');
  setTimeout(() => t.classList.remove('show'), 3500);
}

// ─── LANGUAGE ────────────────────────────────────────────────────────────────
function setLang(l) {
  lang = l;
  document.getElementById('btn-pt').classList.toggle('active', l === 'pt');
  document.getElementById('btn-en').classList.toggle('active', l === 'en');
  const t = T[l];

  // Nav
  document.getElementById('nav-services').textContent = t.nav.services;
  document.getElementById('nav-about').textContent    = t.nav.about;
  document.getElementById('nav-process').textContent  = t.nav.process;
  document.getElementById('nav-contact').textContent  = t.nav.contact;
  document.getElementById('nav-cta').textContent      = t.nav.cta;

  // Mobile nav
  const mNav = document.querySelectorAll('.mobile-nav-link');
  const keys = ['services','about','process','contact'];
  keys.forEach((k, i) => { if (mNav[i]) mNav[i].textContent = t.nav[k]; });

  // Hero
  const hTag = document.getElementById('h-tag');
  if (hTag) hTag.textContent = l === 'pt' ? 'Construir, Quebrar e Proteger.' : 'Build, Break and Protect.';
  const ht1 = document.getElementById('h-title1');
  if (ht1) ht1.textContent = t.hero.t1;
  document.getElementById('h-lead').textContent    = t.hero.lead;
  document.getElementById('h-cta1').innerHTML      = t.hero.cta1;
  document.getElementById('h-cta2').textContent    = t.hero.cta2;
  document.getElementById('stat1-lbl').textContent = t.hero.s1;
  document.getElementById('stat2-lbl').textContent = t.hero.s2;
  document.getElementById('stat3-lbl').textContent = t.hero.s3;

  // Services
  document.getElementById('srv-eyebrow').textContent = t.services.ey;
  document.getElementById('srv-title').textContent   = t.services.title;
  document.getElementById('srv-sub').textContent     = t.services.sub;
  document.getElementById('tab-all').textContent     = t.services.all;
  document.getElementById('tab-dev').textContent     = t.services.dev;
  document.getElementById('tab-sec').textContent     = t.services.sec;

  // About
  document.getElementById('abt-eyebrow').textContent = t.about.ey;
  document.getElementById('abt-title').textContent   = t.about.title;
  document.getElementById('abt-p1').textContent      = t.about.p1;
  document.getElementById('abt-p2').textContent      = t.about.p2;
  const bullets = document.querySelectorAll('#abt-bullets .bullet-text');
  t.about.bullets.forEach((b, i) => { if (bullets[i]) bullets[i].textContent = b; });

  // Process
  document.getElementById('proc-eyebrow').textContent = t.process.ey;
  document.getElementById('proc-title').textContent   = t.process.title;
  renderSteps();

  // Contact
  document.getElementById('ct-eyebrow').textContent  = t.contact.ey;
  document.getElementById('ct-title').textContent    = t.contact.title;
  document.getElementById('ct-sub').textContent      = t.contact.sub;
  document.getElementById('ct-direct').textContent   = t.contact.direct;
  document.getElementById('lbl-name').textContent    = t.contact.name;
  document.getElementById('lbl-email').textContent   = t.contact.email;
  document.getElementById('lbl-service').textContent = t.contact.service;
  document.getElementById('lbl-subject').textContent = t.contact.subject;
  document.getElementById('lbl-message').textContent = t.contact.message;
  document.getElementById('svc-placeholder').textContent = t.contact.svcAny;
  document.getElementById('submit-btn').innerHTML    = `${t.contact.send} <span>↗</span>`;

  // Footer
  document.getElementById('ft-tagline').textContent  = t.footer.tagline;
  document.getElementById('ft-rights').textContent   = t.footer.rights;
  document.getElementById('ft-srv-lbl').textContent  = t.nav.services;
  document.getElementById('ft-ct-lbl').textContent   = t.nav.contact;

  // Overlay (if open)
  if (selectedSvc) {
    document.getElementById('overlay-req-btn').textContent   = t.services.req;
    document.getElementById('overlay-close-btn').textContent = t.services.close;
    document.getElementById('overlay-stack-lbl').textContent = t.services.stack;
    document.getElementById('overlay-title').textContent     = selectedSvc.title[lang];
    document.getElementById('overlay-desc').textContent      = selectedSvc.long[lang];
  }

  renderCards();

  // Founder band
  const founderRoleEl = document.getElementById('founder-role-label');
  if (founderRoleEl) {
    founderRoleEl.textContent = lang === 'pt'
      ? 'FUNDADOR & DESENVOLVEDOR FULL-STACK'
      : 'FOUNDER & FULL-STACK DEVELOPER';
  }
}

// ─── MARQUEE ─────────────────────────────────────────────────────────────────
function renderMarquee() {
  const track = document.getElementById('marquee-track');
  const doubled = [...MARQUEE_ITEMS, ...MARQUEE_ITEMS];
  track.innerHTML = doubled.map(item =>
    `<div class="marquee-item"><span>${item}</span><span class="marquee-sep">/</span></div>`
  ).join('');
}

// ─── SERVICES GRID ───────────────────────────────────────────────────────────
function renderCards() {
  const t = T[lang].services;
  const filtered = activeFilter === 'all'
    ? SERVICES
    : SERVICES.filter(s => s.category === activeFilter);

  const countEl = document.getElementById('filter-count');
  if (countEl) countEl.textContent = `${String(filtered.length).padStart(2,'0')} / ${String(SERVICES.length).padStart(2,'0')}`;

  const grid = document.getElementById('services-grid');
  if (!grid) return;

  grid.innerHTML = filtered.map(svc => `
    <article class="service-card reveal" onclick="openOverlay('${svc.id}')" role="button" tabindex="0" aria-label="${svc.title[lang]}">
      <div class="service-card-head">
        <span class="card-code">${svc.code}</span>
        <span class="card-arrow">↗</span>
      </div>
      <div>
        <div class="card-cat card-muted">${svc.category === 'dev' ? 'Full-Stack' : 'Pentest'}</div>
        <h3 class="card-title">${svc.title[lang]}</h3>
      </div>
      <p class="card-desc card-muted">${svc.short[lang]}</p>
      <div class="card-more card-muted">
        <span>${t.details}</span><span>→</span>
      </div>
    </article>
  `).join('');

  // Keyboard support
  grid.querySelectorAll('.service-card').forEach(card => {
    card.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        card.click();
      }
    });
  });

  // Populate service select
  const sel = document.getElementById('f-service');
  if (sel) {
    const val = sel.value;
    while (sel.options.length > 1) sel.remove(1);
    SERVICES.forEach(s => {
      const opt = document.createElement('option');
      opt.value = s.id;
      opt.textContent = `${s.code} — ${s.title[lang]}`;
      opt.style.background = '#111';
      sel.appendChild(opt);
    });
    sel.value = val;
  }

  // Trigger reveal for newly rendered cards
  requestAnimationFrame(observeReveal);
}

function setFilter(f) {
  activeFilter = f;
  document.querySelectorAll('.filter-tab').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.filter === f);
  });
  renderCards();
}

// ─── OVERLAY ─────────────────────────────────────────────────────────────────
function openOverlay(id) {
  selectedSvc = SERVICES.find(s => s.id === id);
  if (!selectedSvc) return;
  const t = T[lang].services;

  document.getElementById('overlay-tag').textContent   = `${selectedSvc.code} · ${selectedSvc.category === 'dev' ? 'FULL-STACK' : 'PENTEST'}`;
  document.getElementById('overlay-title').textContent = selectedSvc.title[lang];
  document.getElementById('overlay-desc').textContent  = selectedSvc.long[lang];
  document.getElementById('overlay-stack-lbl').textContent = t.stack;
  document.getElementById('overlay-chips').innerHTML   = selectedSvc.stack.map(s => `<span class="chip">${s}</span>`).join('');
  document.getElementById('overlay-req-btn').textContent   = t.req;
  document.getElementById('overlay-close-btn').textContent = t.close;

  document.getElementById('svc-overlay').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeOverlay() {
  document.getElementById('svc-overlay').classList.remove('open');
  document.body.style.overflow = '';
  selectedSvc = null;
}

function requestService() {
  if (selectedSvc) {
    const sel = document.getElementById('f-service');
    if (sel) sel.value = selectedSvc.id;
  }
  closeOverlay();
  setTimeout(() => scrollToSection('contact'), 120);
}

document.addEventListener('keydown', e => {
  if (e.key === 'Escape') closeOverlay();
});

// ─── STEPS ───────────────────────────────────────────────────────────────────
function renderSteps() {
  const steps = T[lang].process.steps;
  const grid = document.getElementById('steps-grid');
  if (!grid) return;
  grid.innerHTML = steps.map(s => `
    <div class="step reveal">
      <div class="step-n">${s.n}</div>
      <h3 class="step-t">${s.t}</h3>
      <p class="step-d">${s.d}</p>
    </div>
  `).join('');
  requestAnimationFrame(observeReveal);
}

// ─── CONTACT FORM — mailto ───────────────────────────────────────────────────
function submitForm(e) {
  e.preventDefault();
  const t = T[lang].contact;

  const name    = document.getElementById('f-name').value.trim();
  const email   = document.getElementById('f-email').value.trim();
  const service = document.getElementById('f-service').value;
  const subject = document.getElementById('f-subject').value.trim();
  const message = document.getElementById('f-message').value.trim();

  if (!name || !email || !subject || !message) {
    showToast(t.error);
    return;
  }

  const svcLabel = service
    ? SERVICES.find(s => s.id === service)?.title[lang] || service
    : (lang === 'pt' ? 'Não especificado' : 'Not specified');

  const body = encodeURIComponent(
    `Nome / Name: ${name}\nE-mail: ${email}\nServiço / Service: ${svcLabel}\n\n${message}`
  );
  const mailto = `mailto:tophatcybersolutions@gmail.com?subject=${encodeURIComponent(subject)}&body=${body}`;

  window.location.href = mailto;
  showToast(t.success, t.successSub);
  document.getElementById('contact-form').reset();
}

// ─── MOBILE NAV TOGGLE ───────────────────────────────────────────────────────
function initMobileNav() {
  const toggle = document.getElementById('nav-toggle');
  const mobileMenu = document.getElementById('mobile-menu');
  if (!toggle || !mobileMenu) return;

  toggle.addEventListener('click', () => {
    const isOpen = mobileMenu.classList.toggle('open');
    toggle.classList.toggle('open', isOpen);
    toggle.setAttribute('aria-expanded', isOpen);
  });

  // Close on link click
  mobileMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      mobileMenu.classList.remove('open');
      toggle.classList.remove('open');
      toggle.setAttribute('aria-expanded', false);
    });
  });
}

// ─── SCROLL REVEAL ───────────────────────────────────────────────────────────
let revealObserver;

function observeReveal() {
  const els = document.querySelectorAll('.reveal:not(.visible)');
  if (!revealObserver) {
    revealObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          revealObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });
  }
  els.forEach(el => revealObserver.observe(el));
}

// ─── 3D CARD TILT EFFECT ─────────────────────────────────────────────────────
function init3DTilt() {
  document.addEventListener('mousemove', (e) => {
    const cards = document.querySelectorAll('.step');
    cards.forEach(card => {
      const rect = card.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const dx = (e.clientX - cx) / rect.width;
      const dy = (e.clientY - cy) / rect.height;
      const dist = Math.sqrt(dx*dx + dy*dy);
      if (dist < 1.2) {
        const rx = dy * -6;
        const ry = dx * 6;
        card.style.transform = `translate(-3px, -3px) perspective(600px) rotateX(${rx}deg) rotateY(${ry}deg)`;
      }
    });
  });

  document.addEventListener('mouseleave', () => {
    document.querySelectorAll('.step').forEach(card => {
      card.style.transform = '';
    });
  });
}

// ─── NAVBAR SCROLL BEHAVIOR ──────────────────────────────────────────────────
function initNavbarScroll() {
  const navbar = document.getElementById('navbar');
  let lastScroll = 0;

  window.addEventListener('scroll', () => {
    const currentScroll = window.scrollY;
    if (currentScroll > 80) {
      navbar.style.boxShadow = '0 4px 0 #000, 0 8px 0 #00000060';
    } else {
      navbar.style.boxShadow = '0 4px 0 #000, 0 8px 0 #00000040';
    }
    lastScroll = currentScroll;
  });
}

// ─── FILTER TABS EVENT ───────────────────────────────────────────────────────
function initFilterTabs() {
  document.querySelectorAll('.filter-tab').forEach(btn => {
    btn.addEventListener('click', () => setFilter(btn.dataset.filter));
  });
}

// ─── SMOOTH SCROLL FOR NAV LINKS ─────────────────────────────────────────────
function initSmoothScroll() {
  document.querySelectorAll('[data-scroll]').forEach(el => {
    el.addEventListener('click', e => {
      e.preventDefault();
      scrollToSection(el.dataset.scroll);
    });
  });
}

// ─── YEAR ────────────────────────────────────────────────────────────────────
function initYear() {
  const yrEl = document.getElementById('yr');
  if (yrEl) yrEl.textContent = new Date().getFullYear();
}

// ─── INIT ────────────────────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  initYear();
  renderMarquee();
  renderCards();
  renderSteps();
  initMobileNav();
  initFilterTabs();
  initSmoothScroll();
  initNavbarScroll();
  init3DTilt();
  observeReveal();

  // Initial reveal check
  setTimeout(observeReveal, 200);
});
