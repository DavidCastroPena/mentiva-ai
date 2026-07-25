// redeploy trigger
'use client';
import React, { useState } from 'react';

const copy = {
  es: {
    nav_how: 'C\u00f3mo funciona',
    nav_benefits: 'D\u00eda a d\u00eda',
    nav_routines: 'Rutinas',
    nav_partners: 'Socios',
    nav_teams: 'Organizaciones',
    tag1: 'Personal.',
    tag2: 'Medible.',
    sub: 'Dos se\u00f1ales \u2014 un wearable de ritmo card\u00edaco cotidiano, m\u00e1s un casco ligero en sesi\u00f3n \u2014 combinadas en un solo n\u00famero sobre el cual actuar, antes de que el d\u00eda se te escape.',
    cta: 'Solicitar acceso anticipado',
    tab1: 'Alerta', tab2: 'Rutina sugerida', tab3: 'Agenda semanal',
    s1_eyebrow: 'HOY', s1_label: 'Saturaci\u00f3n cognitiva alta', s1_msg: 'Es buen momento para una pausa corta antes de seguir.',
    s2_eyebrow: 'RUTINA SUGERIDA', s2_activity: 'Yoga y respiraci\u00f3n \u00b7 20 min', s2_note: 'Basado en tu l\u00ednea base de esta semana.', s2_cta: 'Agendar',
    s3_eyebrow: 'TU SEMANA', s3_days: ['L', 'M', 'X', 'J', 'V', 'S', 'D'], s3_options_title: 'Agregar a la semana',
    r1_h: 'Yoga', r2_h: 'Entrenamiento', r3_h: 'Lectura', r4_h: 'Social',
    benefits_eyebrow: 'D\u00eda a d\u00eda',
    benefits_title: 'As\u00ed se ve en tu semana.',
    b1_h: 'Trabajo profundo', b1_pre: 'Sabes cu\u00e1ndo tu mente rinde m\u00e1s, ', b1_em: 'sin adivinar', b1_post: '.',
    b2_h: 'Reincorporaci\u00f3n laboral', b2_pre: 'Vuelves al trabajo con un ', b2_em: 'plan', b2_post: ', no solo con buenas intenciones.',
    b3_h: 'Rutinas de recuperaci\u00f3n', b3_pre: 'Ves si la rutina realmente te ', b3_em: 'ayud\u00f3', b3_post: ', no solo si la sentiste bien.',
    b4_h: 'D\u00eda a d\u00eda', b4_pre: 'Ajustas tu semana ', b4_em: 'antes', b4_post: ' de llegar al cansancio extremo.',
    routines_eyebrow: 'Variedad de rutinas',
    routines_title: 'No es una receta \u00fanica.',
    routines_sub: 'La rutina que te proponemos se adapta a lo que ya te funciona \u2014 no todos necesitan lo mismo.',
    r1_full: 'Yoga y respiraci\u00f3n', r1_b: 'Sesiones suaves para bajar la carga y recuperar claridad.',
    r2_full: 'Entrenamiento funcional', r2_b: 'CrossFit u otro entrenamiento de alta intensidad, cuando tu cuerpo lo pide.',
    r3_full: 'Lectura y desconexi\u00f3n', r3_b: 'Tiempo a solas con un libro, sin pantallas, para bajar el ritmo mental.',
    r4_full: 'Conexi\u00f3n social', r4_b: 'Tiempo con amigos o familia \u2014 socializar tambi\u00e9n es parte de la recuperaci\u00f3n.',
    how_eyebrow: 'C\u00f3mo funciona',
    how_title: 'Cuatro pasos, sin tecnicismos.',
    step1_t: 'Medimos tu punto de partida', step1_b: 'Un chequeo corto establece c\u00f3mo est\u00e1s hoy \u2014 tu enfoque y tu estado de \u00e1nimo, en tus propios t\u00e9rminos.',
    step2_t: 'Te proponemos una rutina', step2_b: 'Algo simple, cerca de tu casa o desde tu casa \u2014 pensado para tu situaci\u00f3n, no una receta gen\u00e9rica.',
    step3_t: 'Medimos si funcion\u00f3', step3_b: 'Volvemos a chequear despu\u00e9s de la rutina para ver si realmente hubo un cambio real, no solo una sensaci\u00f3n.',
    step4_t: 'Te ayudamos a ajustar', step4_b: 'Con esos resultados, afinamos la rutina para que tu recuperaci\u00f3n \u2014 mental y f\u00edsica \u2014 mejore cada semana.',
    quotes_eyebrow: 'Lo que dir\u00e1n los primeros usuarios',
    quote1: '\u201c[Testimonio de un usuario piloto describiendo la primera vez que vio su propio patr\u00f3n de enfoque hecho visible.]\u201d',
    quote1_who: '[ Nombre ], [ rol ]',
    quote2: '\u201c[Testimonio de un especialista describiendo c\u00f3mo la l\u00ednea base cambi\u00f3 una conversaci\u00f3n cl\u00ednica.]\u201d',
    quote2_who: '[ Nombre ], [ rol cl\u00ednico ]',
    quotes_note: 'Marcadores de posici\u00f3n \u2014 reemplazar con testimonios reales cuando lleguen los primeros pilotos.',
    partners_eyebrow: 'En conversaci\u00f3n con',
    partners_1: '[ laboratorio de investigaci\u00f3n universitario ]',
    partners_2: '[ cl\u00ednica especializada independiente ]',
    partners_3: '[ estudio de bienestar aliado ]',
    partners_note: 'Nombres reservados hasta confirmar pilotos.',
    teams_eyebrow: 'Para organizaciones',
    teams_title: 'Construido para el costo de un d\u00eda sin enfoque \u2014 no el costo de una clase.',
    teams_body: 'Mentiva est\u00e1 hecho para organizaciones que ya rastrean la p\u00e9rdida de enfoque como l\u00ednea de presupuesto, no como beneficio discrecional.',
    teams_1: 'Reincorporaci\u00f3n laboral', teams_1b: 'Seguimiento objetivo del enfoque durante el regreso tras una licencia por agotamiento.',
    teams_2: 'Programas de asistencia al empleado', teams_2b: 'Un resultado medible que mostrar, no solo una sesi\u00f3n asistida.',
    teams_3: 'Roles de alto riesgo', teams_3b: 'Cl\u00ednicos, pilotos, traders \u2014 donde un descuido tiene un costo real.',
    restraint_title: 'Lo que Mentiva es \u2014 y no es.',
    restraint_body: 'Mentiva te muestra un patr\u00f3n en tus propias se\u00f1ales. No diagnostica, no trata, no reemplaza a un cl\u00ednico.',
    final_title: 'Ve tu propio patr\u00f3n.',
    final_sub: 'El acceso anticipado abre en grupos peque\u00f1os, comenzando con socios piloto.',
    final_cta: 'Solicitar acceso anticipado',
    footer_tag: 'Mentiva \u2014 construido sobre ciencia cognitiva y machine learning.',
    footer_terms: 'T\u00e9rminos', footer_privacy: 'Privacidad', footer_contact: 'Contacto',
    footer_copy: '\u00a9 2026 Mentiva. Todos los derechos reservados.',
  },
  en: {
    nav_how: 'How it works',
    nav_benefits: 'Day to day',
    nav_routines: 'Routines',
    nav_partners: 'Partners',
    nav_teams: 'Organizations',
    tag1: 'Personal.',
    tag2: 'Measurable.',
    sub: 'Two signals \u2014 an everyday heart-rate wearable, plus a light in-session headset \u2014 combined into one number you can act on, before the day gets away from you.',
    cta: 'Request early access',
    tab1: 'Alert', tab2: 'Suggested routine', tab3: 'Weekly plan',
    s1_eyebrow: 'TODAY', s1_label: 'High cognitive saturation', s1_msg: 'A short reset would help before you keep going.',
    s2_eyebrow: 'SUGGESTED ROUTINE', s2_activity: 'Yoga and breathing \u00b7 20 min', s2_note: 'Based on your baseline this week.', s2_cta: 'Schedule',
    s3_eyebrow: 'YOUR WEEK', s3_days: ['M', 'T', 'W', 'T', 'F', 'S', 'S'], s3_options_title: 'Add to your week',
    r1_h: 'Yoga', r2_h: 'Training', r3_h: 'Reading', r4_h: 'Social',
    benefits_eyebrow: 'Day to day',
    benefits_title: 'What this looks like in your week.',
    b1_h: 'Deep work', b1_pre: 'You know when your mind performs best, ', b1_em: 'without guessing', b1_post: '.',
    b2_h: 'Return to work', b2_pre: 'You return with a ', b2_em: 'plan', b2_post: ', not just good intentions.',
    b3_h: 'Recovery routines', b3_pre: 'You see if the routine actually ', b3_em: 'helped', b3_post: ', not just whether it felt good.',
    b4_h: 'Day to day', b4_pre: 'You adjust your week ', b4_em: 'before', b4_post: ' reaching real exhaustion.',
    routines_eyebrow: 'A range of routines',
    routines_title: 'Not a one-size-fits-all prescription.',
    routines_sub: 'The routine we suggest builds on what already works for you \u2014 not everyone needs the same thing.',
    r1_full: 'Yoga and breathing', r1_b: 'Gentle sessions to lower load and regain clarity.',
    r2_full: 'Functional training', r2_b: 'CrossFit or other high-intensity training, when your body calls for it.',
    r3_full: 'Reading and disconnection', r3_b: 'Solo time with a book, no screens, to slow the mental pace.',
    r4_full: 'Social connection', r4_b: 'Time with friends or family \u2014 socializing is part of recovery too.',
    how_eyebrow: 'How it works',
    how_title: 'Four steps, no jargon.',
    step1_t: 'We measure your starting point', step1_b: 'A short check-in establishes where you are today \u2014 your focus and your mood, in your own terms.',
    step2_t: 'We suggest a routine', step2_b: 'Something simple, near your home or from home \u2014 built for your situation, not a generic prescription.',
    step3_t: 'We measure whether it worked', step3_b: 'We check in again after the routine to see if there was a real change, not just a feeling.',
    step4_t: 'We help you adjust', step4_b: 'With those results, we fine-tune the routine so your recovery \u2014 mental and physical \u2014 improves week over week.',
    quotes_eyebrow: 'What early users will say',
    quote1: '\u201c[Placeholder quote from a pilot user describing the first time they saw their own focus pattern made visible.]\u201d',
    quote1_who: '[ Name ], [ role ]',
    quote2: '\u201c[Placeholder quote from a specialist describing how the baseline changed a clinical conversation.]\u201d',
    quote2_who: '[ Name ], [ clinical role ]',
    quotes_note: 'Placeholders \u2014 replace with real testimonials once first pilots are in.',
    partners_eyebrow: 'In conversation with',
    partners_1: '[ university research lab ]',
    partners_2: '[ independent specialist clinic ]',
    partners_3: '[ wellness studio partner ]',
    partners_note: 'Names withheld until pilots are confirmed.',
    teams_eyebrow: 'For organizations',
    teams_title: 'Built for the cost of an unfocused day \u2014 not the cost of a class pass.',
    teams_body: 'Mentiva is built for organizations that already track lost focus as a budget line, not as a discretionary perk.',
    teams_1: 'Return-to-work programs', teams_1b: 'Objective focus tracking during re-entry after burnout leave.',
    teams_2: 'Employee assistance programs', teams_2b: 'A measurable outcome to point to, not just a session attended.',
    teams_3: 'High-stakes roles', teams_3b: 'Clinicians, pilots, traders \u2014 where a lapse has a real cost.',
    restraint_title: 'What Mentiva is \u2014 and isn\u2019t.',
    restraint_body: 'Mentiva shows you a pattern in your own signals. It does not diagnose, treat, or replace a clinician.',
    final_title: 'See your own pattern.',
    final_sub: 'Early access opens in small cohorts, starting with pilot partners.',
    final_cta: 'Request early access',
    footer_tag: 'Mentiva \u2014 built on cognitive science and machine learning.',
    footer_terms: 'Terms', footer_privacy: 'Privacy', footer_contact: 'Contact',
    footer_copy: '\u00a9 2026 Mentiva. All rights reserved.',
  },
};

function IconYoga({ color, size = 40 }) {
  return (
    <svg viewBox="0 0 56 56" width={size} height={size} fill="none" stroke={color} strokeWidth="2" strokeLinecap="round">
      <circle cx="28" cy="14" r="5" />
      <path d="M 28 19 L 28 32" />
      <path d="M 28 24 C 18 24 14 34 14 40" />
      <path d="M 28 24 C 38 24 42 34 42 40" />
      <path d="M 16 40 C 20 44 36 44 40 40" />
    </svg>
  );
}
function IconTraining({ color, size = 40 }) {
  return (
    <svg viewBox="0 0 56 56" width={size} height={size} fill="none" stroke={color} strokeWidth="2" strokeLinecap="round">
      <circle cx="28" cy="33" r="14" />
      <path d="M 28 19 C 24 19 21 15 24 11 C 26 9 30 9 32 11 C 35 15 32 19 28 19 Z" />
    </svg>
  );
}
function IconReading({ color, size = 40 }) {
  return (
    <svg viewBox="0 0 56 56" width={size} height={size} fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M 28 16 C 24 12 16 12 12 14 L 12 40 C 16 38 24 38 28 42" />
      <path d="M 28 16 C 32 12 40 12 44 14 L 44 40 C 40 38 32 38 28 42" />
      <path d="M 28 16 L 28 42" />
    </svg>
  );
}
function IconSocial({ color, size = 40 }) {
  return (
    <svg viewBox="0 0 56 56" width={size} height={size} fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M 10 16 h 22 a 3 3 0 0 1 3 3 v 10 a 3 3 0 0 1 -3 3 h -14 l -8 6 v -6 h -0 a 3 3 0 0 1 -3 -3 v -10 a 3 3 0 0 1 3 -3 Z" />
      <path d="M 27 24 h 16 a 3 3 0 0 1 3 3 v 8 a 3 3 0 0 1 -3 3 h -1 v 5 l -7 -5 h -8 a 3 3 0 0 1 -3 -3 v -2" />
    </svg>
  );
}

function PhoneMock({ t }) {
  const [tab, setTab] = useState(0);
  const scheduled = { 1: '#3A4048', 4: '#C16B54' };
  return (
    <div style={{ maxWidth: 320, margin: '0 auto' }}>
      <div style={{ background: '#22201C', borderRadius: 34, padding: 10, boxShadow: '0 12px 30px rgba(0,0,0,0.15)' }}>
        <div style={{ background: '#F5F3EE', borderRadius: 24, minHeight: 380, padding: '1.5rem 1.25rem', display: 'flex', flexDirection: 'column' }}>
          <div style={{ display: 'flex', gap: '0.4rem', marginBottom: '1.25rem' }}>
            {[t.tab1, t.tab2, t.tab3].map((label, i) => (
              <button
                key={i}
                onClick={() => setTab(i)}
                style={{
                  flex: 1, padding: '0.45rem 0.5rem', fontSize: '0.72rem', borderRadius: 999, cursor: 'pointer',
                  fontFamily: 'Inter, sans-serif', fontWeight: 500,
                  background: tab === i ? '#22201C' : 'transparent',
                  color: tab === i ? '#F5F3EE' : '#5C574C',
                  border: tab === i ? 'none' : '1px solid #D9D4C9',
                }}
              >
                {label}
              </button>
            ))}
          </div>

          {tab === 0 && (
            <div>
              <p style={{ fontSize: '0.7rem', letterSpacing: '0.08em', color: '#5C574C', marginBottom: '0.75rem' }}>{t.s1_eyebrow}</p>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                <div style={{ width: 76, height: 76, borderRadius: '50%', border: '3px solid #C16B54', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <span style={{ fontFamily: 'Newsreader, serif', fontSize: '1.9rem', fontWeight: 600, color: '#C16B54' }}>32</span>
                </div>
                <p style={{ fontFamily: 'Newsreader, serif', fontSize: '1.05rem', fontWeight: 600, margin: 0, lineHeight: 1.3 }}>{t.s1_label}</p>
              </div>
              <p style={{ fontSize: '0.88rem', color: '#5C574C', lineHeight: 1.6, margin: 0 }}>{t.s1_msg}</p>
            </div>
          )}

          {tab === 1 && (
            <div>
              <p style={{ fontSize: '0.7rem', letterSpacing: '0.08em', color: '#5C574C', marginBottom: '0.75rem' }}>{t.s2_eyebrow}</p>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem', background: '#EDEBE6', borderRadius: 12, padding: '1rem', marginBottom: '0.85rem' }}>
                <IconYoga color="#3A4048" size={32} />
                <p style={{ fontFamily: 'Newsreader, serif', fontSize: '1rem', fontWeight: 600, margin: 0 }}>{t.s2_activity}</p>
              </div>
              <p style={{ fontSize: '0.85rem', color: '#5C574C', lineHeight: 1.6, marginBottom: '1rem' }}>{t.s2_note}</p>
              <button style={{ background: '#22201C', color: '#F5F3EE', border: 'none', borderRadius: 999, padding: '0.6rem 1.25rem', fontSize: '0.85rem', fontWeight: 500, cursor: 'pointer', fontFamily: 'Inter, sans-serif' }}>{t.s2_cta}</button>
            </div>
          )}

          {tab === 2 && (
            <div>
              <p style={{ fontSize: '0.7rem', letterSpacing: '0.08em', color: '#5C574C', marginBottom: '0.85rem' }}>{t.s3_eyebrow}</p>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1.25rem' }}>
                {t.s3_days.map((d, i) => (
                  <div key={i} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.35rem' }}>
                    <div style={{ width: 28, height: 28, borderRadius: '50%', border: '1px solid #D9D4C9', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.72rem', color: '#22201C' }}>{d}</div>
                    <div style={{ width: 6, height: 6, borderRadius: '50%', background: scheduled[i] || 'transparent' }} />
                  </div>
                ))}
              </div>
              <p style={{ fontSize: '0.78rem', color: '#5C574C', marginBottom: '0.6rem' }}>{t.s3_options_title}</p>
              <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                {[[IconYoga, t.r1_h], [IconTraining, t.r2_h], [IconReading, t.r3_h], [IconSocial, t.r4_h]].map(([Icon, label], i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', border: '1px solid #D9D4C9', borderRadius: 999, padding: '0.35rem 0.7rem' }}>
                    <Icon color="#5C574C" size={16} />
                    <span style={{ fontSize: '0.75rem', color: '#22201C' }}>{label}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default function MentivaLanding() {
  const [lang, setLang] = useState('es');
  const t = copy[lang];

  return (
    <div style={{ background: '#EDEBE6', color: '#22201C', fontFamily: 'Inter, sans-serif', minHeight: '100vh' }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Newsreader:ital,wght@0,500;0,600;1,500&family=Inter:wght@400;500;600&display=swap');
        * { box-sizing: border-box; }
        .mv-link { color: #22201C; text-decoration: none; font-size: 0.95rem; }
        .mv-link:hover, .mv-link:focus-visible { color: #3A4048; }
        .mv-link:focus-visible { outline: 1.5px solid #3A4048; outline-offset: 3px; }
        .mv-cta { background: #22201C; color: #F5F3EE; border: none; padding: 0.95rem 2rem; border-radius: 999px; font-size: 0.95rem; font-weight: 500; cursor: pointer; font-family: Inter, sans-serif; }
        .mv-cta:hover { opacity: 0.85; }
        .mv-cta:focus-visible { outline: 1.5px solid #3A4048; outline-offset: 3px; }
        .mv-lang { background: transparent; border: 1.5px solid #22201C; color: #22201C; padding: 0.4rem 0.85rem; border-radius: 999px; font-size: 0.8rem; cursor: pointer; font-family: Inter, sans-serif; }
        .mv-grid-3 { display: grid; grid-template-columns: repeat(3, 1fr); gap: 2.25rem; }
        .mv-grid-4 { display: grid; grid-template-columns: repeat(4, 1fr); gap: 1.75rem; }
        .mv-hero-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 3.5rem; align-items: center; }
        em.mv-em { font-style: italic; font-family: Newsreader, serif; color: #C16B54; }
        @media (max-width: 900px) {
          .mv-grid-3, .mv-grid-4 { grid-template-columns: 1fr; gap: 1.75rem; }
          .mv-hero-grid { grid-template-columns: 1fr; }
        }
      `}</style>

      <nav style={{ borderBottom: '1px solid #D9D4C9' }}>
        <div style={{ maxWidth: 1180, margin: '0 auto', padding: '1.2rem 2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span style={{ fontFamily: 'Newsreader, serif', fontSize: '1.3rem', fontWeight: 600, letterSpacing: '-0.01em' }}>Mentiva</span>
          <div style={{ display: 'flex', gap: '2.1rem', alignItems: 'center' }}>
            <a href="#benefits" className="mv-link">{t.nav_benefits}</a>
            <a href="#routines" className="mv-link">{t.nav_routines}</a>
            <a href="#how" className="mv-link">{t.nav_how}</a>
            <a href="#partners" className="mv-link">{t.nav_partners}</a>
            <a href="#teams" className="mv-link">{t.nav_teams}</a>
            <button className="mv-lang" onClick={() => setLang(lang === 'es' ? 'en' : 'es')}>{lang === 'es' ? 'EN' : 'ES'}</button>
          </div>
        </div>
      </nav>

      <section style={{ maxWidth: 1180, margin: '0 auto', padding: '4rem 2rem' }}>
        <div className="mv-hero-grid">
          <div>
            <h1 style={{ fontFamily: 'Newsreader, serif', fontSize: '3.2rem', fontWeight: 600, lineHeight: 1.08, letterSpacing: '-0.01em', margin: '0 0 1.25rem' }}>
              {t.tag1}<br /><span style={{ fontStyle: 'italic', color: '#3B6B52' }}>{t.tag2}</span>
            </h1>
            <p style={{ fontSize: '1.05rem', color: '#5C574C', lineHeight: 1.7, maxWidth: 460, marginBottom: '2rem' }}>{t.sub}</p>
            <button className="mv-cta">{t.cta}</button>
          </div>

          <PhoneMock t={t} />
        </div>
      </section>

      <section id="benefits" style={{ maxWidth: 1180, margin: '0 auto', padding: '4rem 2rem', borderTop: '1px solid #D9D4C9' }}>
        <p style={{ fontSize: '0.78rem', letterSpacing: '0.08em', textTransform: 'uppercase', color: '#5C574C', marginBottom: '1rem' }}>{t.benefits_eyebrow}</p>
        <h2 style={{ fontFamily: 'Newsreader, serif', fontSize: '1.9rem', fontWeight: 600, margin: '0 0 3rem', maxWidth: 640 }}>{t.benefits_title}</h2>
        <div className="mv-grid-4">
          {[[t.b1_h, t.b1_pre, t.b1_em, t.b1_post], [t.b2_h, t.b2_pre, t.b2_em, t.b2_post], [t.b3_h, t.b3_pre, t.b3_em, t.b3_post], [t.b4_h, t.b4_pre, t.b4_em, t.b4_post]].map(([h, pre, em, post], i) => (
            <div key={i} style={{ background: '#F5F3EE', border: '1px solid #D9D4C9', borderRadius: 14, padding: '1.5rem' }}>
              <p style={{ fontSize: '0.8rem', color: '#5C574C', marginBottom: '0.75rem' }}>{h}</p>
              <p style={{ fontFamily: 'Newsreader, serif', fontSize: '1.15rem', fontWeight: 500, lineHeight: 1.4, margin: 0 }}>
                {pre}<em className="mv-em">{em}</em>{post}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section id="routines" style={{ maxWidth: 1180, margin: '0 auto', padding: '4rem 2rem', borderTop: '1px solid #D9D4C9' }}>
        <p style={{ fontSize: '0.78rem', letterSpacing: '0.08em', textTransform: 'uppercase', color: '#5C574C', marginBottom: '1rem' }}>{t.routines_eyebrow}</p>
        <h2 style={{ fontFamily: 'Newsreader, serif', fontSize: '1.9rem', fontWeight: 600, margin: '0 0 0.75rem', maxWidth: 640 }}>{t.routines_title}</h2>
        <p style={{ fontSize: '1rem', color: '#5C574C', lineHeight: 1.7, maxWidth: 600, marginBottom: '2.5rem' }}>{t.routines_sub}</p>
        <div className="mv-grid-4">
          {[[IconYoga, t.r1_full, t.r1_b, '#3A4048'], [IconTraining, t.r2_full, t.r2_b, '#C16B54'], [IconReading, t.r3_full, t.r3_b, '#3A4048'], [IconSocial, t.r4_full, t.r4_b, '#C16B54']].map(([Icon, h, b, c], i) => (
            <div key={i} style={{ background: '#F5F3EE', border: '1px solid #D9D4C9', borderRadius: 14, padding: '1.5rem' }}>
              <div style={{ marginBottom: '1rem' }}><Icon color={c} /></div>
              <h3 style={{ fontFamily: 'Newsreader, serif', fontSize: '1.05rem', fontWeight: 600, margin: '0 0 0.5rem' }}>{h}</h3>
              <p style={{ fontSize: '0.88rem', color: '#5C574C', lineHeight: 1.6, margin: 0 }}>{b}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="how" style={{ maxWidth: 1180, margin: '0 auto', padding: '4rem 2rem', borderTop: '1px solid #D9D4C9' }}>
        <p style={{ fontSize: '0.78rem', letterSpacing: '0.08em', textTransform: 'uppercase', color: '#5C574C', marginBottom: '1rem' }}>{t.how_eyebrow}</p>
        <h2 style={{ fontFamily: 'Newsreader, serif', fontSize: '1.9rem', fontWeight: 600, margin: '0 0 3rem' }}>{t.how_title}</h2>
        <div className="mv-grid-4">
          {[[t.step1_t, t.step1_b], [t.step2_t, t.step2_b], [t.step3_t, t.step3_b], [t.step4_t, t.step4_b]].map(([title, body], i) => (
            <div key={i} style={{ borderTop: '1px solid #22201C', paddingTop: '1.25rem' }}>
              <p style={{ fontFamily: 'Newsreader, serif', fontSize: '0.85rem', color: '#C16B54', marginBottom: '0.5rem' }}>{i + 1}</p>
              <h3 style={{ fontFamily: 'Newsreader, serif', fontSize: '1.05rem', fontWeight: 600, margin: '0 0 0.6rem' }}>{title}</h3>
              <p style={{ fontSize: '0.88rem', color: '#5C574C', lineHeight: 1.6, margin: 0 }}>{body}</p>
            </div>
          ))}
        </div>
      </section>

      <section style={{ maxWidth: 1180, margin: '0 auto', padding: '4rem 2rem', borderTop: '1px solid #D9D4C9' }}>
        <p style={{ fontSize: '0.78rem', letterSpacing: '0.08em', textTransform: 'uppercase', color: '#5C574C', marginBottom: '1.5rem' }}>{t.quotes_eyebrow}</p>
        <div className="mv-grid-3" style={{ gridTemplateColumns: '1fr 1fr' }}>
          {[[t.quote1, t.quote1_who], [t.quote2, t.quote2_who]].map(([q, who], i) => (
            <div key={i} style={{ borderLeft: '2px solid #C16B54', paddingLeft: '1.25rem' }}>
              <p style={{ fontFamily: 'Newsreader, serif', fontStyle: 'italic', fontSize: '1.1rem', lineHeight: 1.55, margin: '0 0 0.75rem' }}>{q}</p>
              <p style={{ fontSize: '0.85rem', color: '#5C574C', margin: 0 }}>{who}</p>
            </div>
          ))}
        </div>
        <p style={{ fontSize: '0.82rem', color: '#8A8477', marginTop: '1.5rem' }}>{t.quotes_note}</p>
      </section>

      <section id="partners" style={{ maxWidth: 1180, margin: '0 auto', padding: '4rem 2rem', borderTop: '1px solid #D9D4C9' }}>
        <p style={{ fontSize: '0.78rem', letterSpacing: '0.08em', textTransform: 'uppercase', color: '#5C574C', marginBottom: '1rem' }}>{t.partners_eyebrow}</p>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem 2rem', marginBottom: '1.25rem' }}>
          {[t.partners_1, t.partners_2, t.partners_3].map((p, i) => (
            <span key={i} style={{ fontFamily: 'Newsreader, serif', fontStyle: 'italic', color: '#5C574C', fontSize: '1.05rem' }}>{p}</span>
          ))}
        </div>
        <p style={{ fontSize: '0.85rem', color: '#8A8477', margin: 0 }}>{t.partners_note}</p>
      </section>

      <section id="teams" style={{ maxWidth: 1180, margin: '0 auto', padding: '4rem 2rem', borderTop: '1px solid #D9D4C9' }}>
        <p style={{ fontSize: '0.78rem', letterSpacing: '0.08em', textTransform: 'uppercase', color: '#5C574C', marginBottom: '1rem' }}>{t.teams_eyebrow}</p>
        <h2 style={{ fontFamily: 'Newsreader, serif', fontSize: '1.9rem', fontWeight: 600, lineHeight: 1.3, margin: '0 0 1rem', maxWidth: 700 }}>{t.teams_title}</h2>
        <p style={{ fontSize: '1rem', color: '#5C574C', lineHeight: 1.7, maxWidth: 620, marginBottom: '3rem' }}>{t.teams_body}</p>
        <div className="mv-grid-3">
          {[[t.teams_1, t.teams_1b], [t.teams_2, t.teams_2b], [t.teams_3, t.teams_3b]].map(([title, body], i) => (
            <div key={i} style={{ borderTop: '1px solid #22201C', paddingTop: '1.25rem' }}>
              <h3 style={{ fontFamily: 'Newsreader, serif', fontSize: '1.05rem', fontWeight: 600, margin: '0 0 0.6rem' }}>{title}</h3>
              <p style={{ fontSize: '0.9rem', color: '#5C574C', lineHeight: 1.6, margin: 0 }}>{body}</p>
            </div>
          ))}
        </div>
      </section>

      <section style={{ borderTop: '1px solid #D9D4C9', borderBottom: '1px solid #D9D4C9', padding: '2.5rem 2rem', background: '#E3DFD3' }}>
        <div style={{ maxWidth: 1180, margin: '0 auto' }}>
          <h3 style={{ fontFamily: 'Newsreader, serif', fontSize: '1.1rem', fontWeight: 600, margin: '0 0 0.5rem' }}>{t.restraint_title}</h3>
          <p style={{ fontSize: '0.92rem', color: '#5C574C', lineHeight: 1.6, margin: 0, maxWidth: 640 }}>{t.restraint_body}</p>
        </div>
      </section>

      <section style={{ maxWidth: 1180, margin: '0 auto', padding: '5rem 2rem', textAlign: 'center' }}>
        <h2 style={{ fontFamily: 'Newsreader, serif', fontSize: '2.1rem', fontWeight: 600, margin: '0 0 0.75rem' }}>{t.final_title}</h2>
        <p style={{ fontSize: '0.98rem', color: '#5C574C', marginBottom: '2rem' }}>{t.final_sub}</p>
        <button className="mv-cta">{t.final_cta}</button>
      </section>

      <footer style={{ borderTop: '1px solid #D9D4C9', padding: '2.5rem 2rem' }}>
        <div style={{ maxWidth: 1180, margin: '0 auto', display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem', alignItems: 'center' }}>
          <p style={{ fontSize: '0.85rem', color: '#8A8477', margin: 0 }}>{t.footer_tag}</p>
          <div style={{ display: 'flex', gap: '1.5rem' }}>
            <a href="#" className="mv-link" style={{ fontSize: '0.85rem' }}>{t.footer_terms}</a>
            <a href="#" className="mv-link" style={{ fontSize: '0.85rem' }}>{t.footer_privacy}</a>
            <a href="#" className="mv-link" style={{ fontSize: '0.85rem' }}>{t.footer_contact}</a>
          </div>
        </div>
        <p style={{ maxWidth: 1180, margin: '1.5rem auto 0', fontSize: '0.78rem', color: '#8A8477' }}>{t.footer_copy}</p>
      </footer>
    </div>
  );
}
