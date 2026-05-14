'use client';
import React, { useState, useEffect } from 'react';
import { Brain, Activity, Zap, Clock, TrendingUp, Target, Gauge, Moon, Coffee, Flame, Wind, Globe, ArrowRight, Check, Sparkles, Watch, Sun, Lightbulb } from 'lucide-react';

const translations = {
  es: {
    hero_badge: "Iluminación cognitiva en tiempo real",
    hero_title: "Iluminamos tu estado cognitivo",
    hero_subtitle: "Mentiva hace visible lo invisible. Convierte señales ocultas en claridad accionable sobre cómo opera tu mente ahora mismo.",
    cta_start: "Obtener Acceso Anticipado",
    msg_welcome: "Hola. Voy a iluminar tu estado cognitivo actual con algunas preguntas.",
    msg_q1: "¿Cómo describirías tu nivel de energía ahora mismo?",
    user_a1: "Bastante bien, tomé café hace una hora",
    msg_q2: "¿Cuántas horas dormiste anoche?",
    user_a2: "Como 6 horas",
    msg_inference: "Analizando... Respuesta rápida (1.2s), lenguaje coherente, tono energético.",
    msg_oura: "Tu Oura: 45 min sueño profundo, temperatura +0.3°C, HRV elevado.",
    msg_result: "Estado cognitivo iluminado:",
    pointer_focus: "Enfoque",
    pointer_load: "Carga",
    pointer_speed: "Velocidad",
    pointer_memory: "Memoria",
    pointer_energy: "Energía",
    rec_title: "Acción recomendada",
    rec_deep: "⚡ Trabajo Profundo (próximas 2-3h)",
    rec_reason: "Tu enfoque brilla alto, carga es baja. Actúa en esta ventana.",
    how_title: "Cómo funciona Mentiva",
    step1_title: "Conversación Diaria",
    step1_desc: "Chat corto que extrae señales de tu estado mental actual.",
    step2_title: "Inferencia Continua",
    step2_desc: "Iluminamos patrones ocultos en latencia, lenguaje y wearables.",
    step3_title: "Claridad Instantánea",
    step3_desc: "5 indicadores brillantes que revelan tu estado para actuar.",
    pain_title: "El problema que iluminamos",
    pain_subtitle: "Los humanos operan en oscuridad cognitiva",
    pain1_title: "Ciego a tu capacidad",
    pain1_desc: "No ves si estás en modo óptimo o necesitas pausa hasta que colapsas.",
    pain2_title: "Fatiga invisible",
    pain2_desc: "La sobrecarga mental se acumula en sombras. La notas solo al colapsar.",
    pain3_title: "Señales sin luz",
    pain3_desc: "Datos fragmentados de Oura, calendario lleno... ¿qué hacer HOY?",
    int_title: "Se integra con tu vida",
    int_oura: "Oura Ring",
    int_whoop: "Whoop",
    int_apple: "Apple Watch",
    int_strava: "Strava",
    feature1_title: "Inferencia Conductual",
    feature1_desc: "Iluminamos señales cognitivas desde cómo hablas, respondes y estructuras el lenguaje.",
    feature2_title: "Dashboard Luminoso",
    feature2_desc: "5 indicadores en tiempo real que revelan tu estado mental con claridad.",
    feature3_title: "Acción Adaptativa",
    feature3_desc: "Recomendaciones que brillan: trabajo profundo, tareas ligeras, descanso activo.",
    cta_title: "Sal de la oscuridad cognitiva",
    cta_subtitle: "Primera conversación en 3 minutos. Claridad mental para siempre.",
    footer_backed: "Construido sobre ciencia cognitiva + ML",
    doctor_title: "¿Listo para un plan personalizado de salud cerebral?",
    doctor_subtitle: "Conecta con un especialista en salud cognitiva para tu evaluación inicial — adaptada a tu perfil Mentiva, datos de wearables y patrones diarios.",
    doctor_cta: "Agendar con un médico",
    doctor_fine: "Consulta inicial gratuita • Cubierta por la mayoría de seguros • Remoto o presencial",
  },
  en: {
    hero_badge: "Real-time cognitive illumination",
    hero_title: "We illuminate your cognitive state",
    hero_subtitle: "Mentiva makes the invisible visible. Turn hidden signals into actionable clarity about how your mind operates right now.",
    cta_start: "Get Early Access",
    msg_welcome: "Hi. I'll illuminate your current cognitive state with a few questions.",
    msg_q1: "How would you describe your energy level right now?",
    user_a1: "Pretty good, had coffee an hour ago",
    msg_q2: "How many hours did you sleep last night?",
    user_a2: "About 6 hours",
    msg_inference: "Analyzing... Fast reply (1.2s), coherent language, energetic tone.",
    msg_oura: "Your Oura: 45 min deep sleep, body temp +0.3°C, elevated HRV.",
    msg_result: "Your cognitive state illuminated:",
    pointer_focus: "Focus",
    pointer_load: "Load",
    pointer_speed: "Speed",
    pointer_memory: "Memory",
    pointer_energy: "Energy",
    rec_title: "Recommended action",
    rec_deep: "⚡ Deep Work (next 2-3h)",
    rec_reason: "Your focus shines high, load is low. Act in this window.",
    how_title: "How Mentiva works",
    step1_title: "Daily Conversation",
    step1_desc: "Short chat that extracts signals from your current mental state.",
    step2_title: "Continuous Inference",
    step2_desc: "We illuminate hidden patterns in latency, language + wearables.",
    step3_title: "Instant Clarity",
    step3_desc: "5 bright indicators that reveal your state for action.",
    pain_title: "The problem we illuminate",
    pain_subtitle: "Humans operate in cognitive darkness",
    pain1_title: "Blind to capacity",
    pain1_desc: "You can't see if you're in optimal mode or need rest until you crash.",
    pain2_title: "Invisible fatigue",
    pain2_desc: "Mental overload accumulates in shadows. You notice only at collapse.",
    pain3_title: "Signals without light",
    pain3_desc: "Fragmented data from Oura, full calendar... but what to DO today?",
    int_title: "Integrates with your life",
    int_oura: "Oura Ring",
    int_whoop: "Whoop",
    int_apple: "Apple Watch",
    int_strava: "Strava",
    feature1_title: "Behavioral Inference",
    feature1_desc: "We illuminate cognitive signals from how you talk, respond, structure language.",
    feature2_title: "Luminous Dashboard",
    feature2_desc: "5 real-time indicators that reveal your mental state with clarity.",
    feature3_title: "Adaptive Action",
    feature3_desc: "Recommendations that shine: deep work, light tasks, active rest.",
    cta_title: "Step out of cognitive darkness",
    cta_subtitle: "First conversation in 3 minutes. Mental clarity forever.",
    footer_backed: "Built on cognitive science + ML",
    doctor_title: "Ready for a personalized brain health plan?",
    doctor_subtitle: "Connect with a cognitive health specialist for your initial assessment — tailored to your Mentiva profile, wearable data, and daily patterns.",
    doctor_cta: "Schedule with a doctor",
    doctor_fine: "Free initial consultation \u2022 Covered by most health plans \u2022 Remote or in-person",
  }
};

// ── Brain check-in demo questions ──────────────────────────────────────────
const demoQuestions = [
  { id: 1, phase: 'context', emoji: '\ud83d\udcac', label: 'How you feel', prompt: "Hey! Before we measure your focus \u2014 how are you feeling right now?", type: 'choice', options: ['\u26a1 Energized & clear', '\ud83c\udf00 Scattered & distracted', '\ud83d\ude0c Calm but low energy', '\ud83d\ude34 Tired but pushing through', '\ud83d\ude30 Stressed & overwhelmed'], maxTime: 0 },
  { id: 2, phase: 'context', emoji: '\ud83d\udd50', label: 'Time of day', prompt: "Got it. What part of the day is this for you?", type: 'choice', options: ['\ud83c\udf05 Early morning', '\u2600\ufe0f Morning', '\u26c5 Midday', '\ud83c\udf24 Afternoon', '\ud83c\udf19 Evening / Night'], maxTime: 0 },
  { id: 3, phase: 'context', emoji: '\ud83c\udfaf', label: 'Top goal', prompt: "Nice. What is your #1 priority for today?", type: 'choice', options: ['\ud83e\udde0 Deep focused work', '\ud83e\udd1d Meetings & collaboration', '\ud83d\udcda Learning something new', '\ud83c\udfa8 Creative work', '\ud83d\udccb Admin & catch-up'], maxTime: 0 },
  { id: 4, phase: 'context', emoji: '\ud83d\udd0b', label: 'Energy drain', prompt: "Last one before your brain check \u2014 what is draining you most right now?", type: 'choice', options: ['\ud83d\ude34 Poor sleep', '\ud83d\udcf1 Too many distractions', '\ud83d\ude1f Emotional stress', '\ud83c\udf7d Skipping meals or water', '\ud83c\udfc3 Physical fatigue'], maxTime: 0 },
  { id: 5, phase: 'cognitive', emoji: '\ud83e\uddec', label: 'Memory', prompt: "Science update \u2728 A 2025 Nature study found the brain\u2019s hippocampus replays memories during quiet rest \u2014 not only during sleep. Which organ was named?", type: 'choice', options: ['Hippocampus', 'Cerebellum', 'Amygdala'], correct: 'Hippocampus', maxTime: 15 },
  { id: 6, phase: 'cognitive', emoji: '\ud83c\udfa8', label: 'Attention', prompt: "Culture check \ud83d\uddbc\ufe0f Artist Cecily Brown\u2019s 2025 retrospective explores chaos and perception through layered paint. How many letters are in the word \u2018paint\u2019?", type: 'choice', options: ['4', '5', '6'], correct: '5', maxTime: 12 },
  { id: 7, phase: 'cognitive', emoji: '\ud83d\udcda', label: 'Sequence', prompt: "Literature note \ud83d\udcd6 The 2024 Booker Prize winner explores fractured identity through memory loops. Quick pattern: 4, 8, 16, ___?", type: 'choice', options: ['24', '32', '20'], correct: '32', maxTime: 12 },
  { id: 8, phase: 'cognitive', emoji: '\u26a1', label: 'Speed', prompt: "Final sprint \u26a1 Which of these is in correct alphabetical order?", type: 'choice', options: ['apple \u2192 car \u2192 river', 'car \u2192 apple \u2192 river', 'river \u2192 car \u2192 apple'], correct: 'apple \u2192 car \u2192 river', maxTime: 10 },
];

const MentivaAI = () => {
  const [lang, setLang] = useState('en');
  const t = translations[lang];

  // Animated chat state (hero phone)
  const [visibleMessages, setVisibleMessages] = useState(0);
  const [showPointers, setShowPointers] = useState(false);
  const [isTyping, setIsTyping] = useState(false);

  // Brain check-in demo state
  const [showDemo, setShowDemo] = useState(false);
  const [demoStarted, setDemoStarted] = useState(false);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [timeLeft, setTimeLeft] = useState(20);
  const [answers, setAnswers] = useState([]);
  const [results, setResults] = useState(null);

  const messages = [
    { type: 'ai', content: t.msg_welcome, delay: 800 },
    { type: 'ai', content: t.msg_q1, delay: 1800 },
    { type: 'user', content: t.user_a1, delay: 2800 },
    { type: 'ai', content: t.msg_q2, delay: 3800 },
    { type: 'user', content: t.user_a2, delay: 4800 },
    { type: 'ai', content: t.msg_inference, delay: 5800 },
    { type: 'ai', content: t.msg_oura, delay: 6800 },
    { type: 'ai', content: t.msg_result, delay: 7600 },
  ];

  // Animate hero chat on mount
  useEffect(() => {
    messages.forEach((msg, index) => {
      setTimeout(() => {
        if (index < messages.length - 1) {
          setIsTyping(true);
          setTimeout(() => { setVisibleMessages(index + 1); setIsTyping(false); }, 500);
        } else {
          setVisibleMessages(index + 1);
          setTimeout(() => setShowPointers(true), 800);
        }
      }, msg.delay);
    });
  }, []);

  // Brain check-in timer
  useEffect(() => {
    let timer;
    const q = demoQuestions[questionIndex];
    if (demoStarted && q && q.maxTime > 0 && timeLeft > 0) {
      timer = setTimeout(() => setTimeLeft(t => t - 1), 1000);
    } else if (demoStarted && q && q.maxTime > 0 && timeLeft === 0) {
      setAnswers(prev => [...prev, { q: q.id, answer: null, timedOut: true }]);
      if (questionIndex < demoQuestions.length - 1) {
        setQuestionIndex(i => i + 1);
        setTimeLeft(demoQuestions[questionIndex + 1].maxTime);
      } else {
        setDemoStarted(false);
        setResults({ finished: true });
      }
    }
    return () => clearTimeout(timer);
  }, [demoStarted, timeLeft, questionIndex]);

  function startDemo() {
    setShowDemo(true);
    setDemoStarted(true);
    setQuestionIndex(0);
    setTimeLeft(demoQuestions[0].maxTime);
    setAnswers([]);
    setResults(null);
  }

  function submitAnswer(answer) {
    setAnswers(prev => [...prev, { q: demoQuestions[questionIndex].id, answer, timedOut: false }]);
    if (questionIndex < demoQuestions.length - 1) {
      const next = questionIndex + 1;
      setQuestionIndex(next);
      setTimeLeft(demoQuestions[next].maxTime);
    } else {
      setDemoStarted(false);
      setResults({ finished: true });
    }
  }

  async function analyzeResults() {
    const contextAnswers = answers.filter(a => demoQuestions.find(q => q.id === a.q)?.phase === 'context');
    const cogAnswers = answers.filter(a => demoQuestions.find(q => q.id === a.q)?.phase === 'cognitive');
    const correctCount = cogAnswers.filter(a => { const q = demoQuestions.find(q => q.id === a.q); return q && a.answer === q.correct; }).length;
    const totalCog = demoQuestions.filter(q => q.phase === 'cognitive').length;
    const feeling = contextAnswers[0]?.answer || 'unknown';
    const timeOfDay = contextAnswers[1]?.answer || 'unknown';
    const topGoal = contextAnswers[2]?.answer || 'unknown';
    const drain = contextAnswers[3]?.answer || 'unknown';
    try {
      const resp = await fetch('/api/analyze', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ answers, correctCount, totalCog, feeling, timeOfDay, topGoal, drain }),
      });
      const json = await resp.json();
      if (json?.ok && json.result) {
        const r = json.result;
        setResults({ score: r.score ?? correctCount, feedback: r.feedback ?? defaultFeedback(correctCount, drain), plan: r.plan });
      } else {
        setResults({ score: correctCount, feedback: defaultFeedback(correctCount, drain) });
      }
    } catch {
      setResults({ score: correctCount, feedback: defaultFeedback(correctCount, drain) });
    }
  }

  function defaultFeedback(score, drain) {
    if (score >= 3) return `Sharp! Your attention is firing well. Since ${drain?.toLowerCase()} is draining you, block 25-min deep work sprints with 5-min breaks.`;
    return `Your brain is working under load. Address ${drain?.toLowerCase()} first \u2014 even a 10-min walk can reset focus for the next 2 hours.`;
  }

  return (
    <div className="mentiva-ai">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Sora:wght@300;400;500;600;700;800&family=Inter:wght@300;400;500;600&display=swap');
        * { margin: 0; padding: 0; box-sizing: border-box; }

        :root {
          --illuminate: #F59E0B;
          --illuminate-light: #FBBF24;
          --illuminate-dark: #D97706;
          --action: #FB923C;
          --action-dark: #EA580C;
          --clarity: #FDE047;
          --bg: #0A0A0A;
          --bg-light: #1A1A1A;
          --surface: #2A2A2A;
          --border: #3A3A3A;
          --text: #FAFAFA;
          --text-secondary: #D4D4D4;
          --light-bg: #FFFBEB;
          --light-surface: #FFFFFF;
          --light-text: #1C1917;
          --light-text-secondary: #57534E;
          --light-border: #FEF3C7;
        }

        .mentiva-ai { font-family: 'Inter', -apple-system, sans-serif; background: var(--light-bg); color: var(--light-text); line-height: 1.6; }

        nav { position: fixed; top: 0; width: 100%; background: rgba(255,251,235,0.92); backdrop-filter: blur(20px); z-index: 100; border-bottom: 2px solid var(--light-border); }
        .nav-content { max-width: 1400px; margin: 0 auto; padding: 1.2rem 2rem; display: flex; justify-content: space-between; align-items: center; }
        .logo { font-family: 'Sora', sans-serif; font-size: 1.5rem; font-weight: 700; background: linear-gradient(135deg, var(--illuminate) 0%, var(--action) 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; letter-spacing: -0.02em; display: flex; align-items: center; gap: 0.5rem; }
        .nav-right { display: flex; gap: 2rem; align-items: center; }
        .nav-link { color: var(--light-text-secondary); text-decoration: none; font-size: 0.95rem; font-weight: 500; transition: color 0.2s; }
        .nav-link:hover { color: var(--illuminate); }
        .lang-toggle { background: transparent; border: 1.5px solid var(--illuminate-light); color: var(--light-text-secondary); padding: 0.5rem 1rem; border-radius: 8px; cursor: pointer; font-weight: 500; font-size: 0.9rem; transition: all 0.2s; display: flex; align-items: center; gap: 0.5rem; }
        .lang-toggle:hover { border-color: var(--illuminate); color: var(--illuminate); }

        .hero { max-width: 1400px; margin: 0 auto; padding: 8rem 2rem 4rem; display: grid; grid-template-columns: 1fr 1fr; gap: 4rem; align-items: center; }
        .hero-content { max-width: 600px; }
        .hero-badge { display: inline-flex; align-items: center; gap: 0.5rem; background: linear-gradient(135deg, rgba(245,158,11,0.15) 0%, rgba(251,146,60,0.15) 100%); border: 2px solid var(--illuminate-light); padding: 0.5rem 1rem; border-radius: 50px; font-size: 0.82rem; font-weight: 700; color: var(--illuminate-dark); margin-bottom: 2rem; text-transform: uppercase; letter-spacing: 0.08em; animation: glow 2.5s ease-in-out infinite; }
        @keyframes glow { 0%,100% { box-shadow: 0 0 20px rgba(245,158,11,0.3); } 50% { box-shadow: 0 0 32px rgba(245,158,11,0.55); } }
        .hero h1 { font-family: 'Sora', sans-serif; font-size: 3.8rem; font-weight: 800; color: var(--light-text); line-height: 1.05; margin-bottom: 1.5rem; letter-spacing: -0.04em; animation: fadeInUp 0.8s ease-out 0.2s backwards; }
        .hero h1 .highlight { background: linear-gradient(135deg, var(--illuminate) 0%, var(--action) 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; }
        .hero p { font-size: 1.1rem; color: var(--light-text-secondary); line-height: 1.7; margin-bottom: 2rem; animation: fadeInUp 0.8s ease-out 0.4s backwards; }
        .hero-ctas { display: flex; gap: 1rem; animation: fadeInUp 0.8s ease-out 0.6s backwards; flex-wrap: wrap; }

        .btn-primary { background: linear-gradient(135deg, var(--illuminate) 0%, var(--action) 100%); color: white; border: none; padding: 1.1rem 2.5rem; border-radius: 12px; font-size: 1rem; font-weight: 700; cursor: pointer; display: inline-flex; align-items: center; gap: 0.6rem; transition: all 0.3s; box-shadow: 0 8px 25px rgba(245,158,11,0.35); }
        .btn-primary:hover { transform: translateY(-3px); box-shadow: 0 12px 40px rgba(245,158,11,0.5); }
        .btn-secondary { background: transparent; color: var(--illuminate-dark); border: 2px solid var(--illuminate-light); padding: 0.9rem 1.8rem; border-radius: 12px; font-size: 0.95rem; font-weight: 600; cursor: pointer; transition: all 0.2s; }
        .btn-secondary:hover { border-color: var(--illuminate); background: rgba(245,158,11,0.06); color: var(--illuminate); }

        /* Phone */
        .phone-mockup { position: relative; width: 100%; max-width: 380px; margin: 0 auto; animation: float 3s ease-in-out infinite; filter: drop-shadow(0 30px 60px rgba(245,158,11,0.2)); }
        @keyframes float { 0%,100% { transform: translateY(0); } 50% { transform: translateY(-10px); } }
        .phone-frame { background: linear-gradient(145deg, #2A2A2A 0%, #1A1A1A 100%); border-radius: 50px; padding: 12px; box-shadow: 0 30px 80px rgba(0,0,0,0.4), inset 0 2px 10px rgba(245,158,11,0.08); }
        .phone-notch { position: absolute; top: 12px; left: 50%; transform: translateX(-50%); width: 150px; height: 30px; background: #1A1A1A; border-radius: 0 0 20px 20px; z-index: 2; }
        .phone-screen { background: white; border-radius: 40px; overflow: hidden; position: relative; height: 750px; display: flex; flex-direction: column; }

        .chat-header { background: linear-gradient(135deg, var(--illuminate) 0%, var(--action) 100%); padding: 3rem 1.5rem 1rem; display: flex; align-items: center; gap: 1rem; color: white; flex-shrink: 0; }
        .chat-avatar { width: 45px; height: 45px; background: rgba(255,255,255,0.25); border-radius: 50%; display: flex; align-items: center; justify-content: center; color: white; border: 2px solid rgba(255,255,255,0.3); flex-shrink: 0; }
        .chat-name { font-weight: 800; font-size: 1.05rem; font-family: 'Sora', sans-serif; }
        .chat-status { font-size: 0.8rem; opacity: 0.95; display: flex; align-items: center; gap: 0.4rem; }
        .status-dot { width: 7px; height: 7px; background: white; border-radius: 50%; animation: pulse 2s ease-in-out infinite; box-shadow: 0 0 8px rgba(255,255,255,0.7); }
        @keyframes pulse { 0%,100% { opacity: 1; transform: scale(1); } 50% { opacity: 0.7; transform: scale(0.88); } }

        /* Animated chat view */
        .chat-messages { padding: 1.25rem 1rem; flex: 1; overflow-y: auto; background: var(--light-bg); }
        .message { margin-bottom: 0.85rem; animation: slideUp 0.35s ease-out; }
        @keyframes slideUp { from { opacity:0; transform: translateY(8px); } to { opacity:1; transform: translateY(0); } }
        .message-ai { display: flex; gap: 0.5rem; align-items: flex-start; }
        .message-user { display: flex; justify-content: flex-end; }
        .message-avatar { width: 28px; height: 28px; background: linear-gradient(135deg, var(--illuminate-light) 0%, var(--action) 100%); border-radius: 50%; display: flex; align-items: center; justify-content: center; color: white; flex-shrink: 0; }
        .message-bubble { max-width: 78%; padding: 0.8rem 1rem; border-radius: 16px; font-size: 0.88rem; line-height: 1.5; }
        .message-bubble-ai { background: white; color: var(--light-text); border: 1.5px solid var(--light-border); }
        .message-bubble-user { background: linear-gradient(135deg, var(--illuminate) 0%, var(--action) 100%); color: white; }
        .typing-indicator { display: flex; gap: 0.4rem; padding: 0.9rem 1rem; background: white; border-radius: 16px; width: fit-content; border: 1.5px solid var(--light-border); }
        .typing-dot { width: 7px; height: 7px; background: var(--illuminate); border-radius: 50%; animation: typingBounce 1.4s ease-in-out infinite; }
        .typing-dot:nth-child(2) { animation-delay: 0.2s; }
        .typing-dot:nth-child(3) { animation-delay: 0.4s; }
        @keyframes typingBounce { 0%,60%,100% { transform: translateY(0); } 30% { transform: translateY(-7px); } }

        /* Pointers panel */
        .pointers-panel { background: linear-gradient(135deg,#FFFBEB 0%,#FEF3C7 100%); padding: 1.25rem; border-top: 2px solid var(--illuminate-light); flex-shrink: 0; }
        .pointers-grid { display: grid; grid-template-columns: repeat(2,1fr); gap: 0.6rem; margin-bottom: 0.8rem; }
        .pointer-card { background: white; padding: 0.85rem; border-radius: 12px; text-align: center; border: 1.5px solid var(--light-border); }
        .pointer-label { font-size: 0.65rem; color: var(--illuminate-dark); margin-bottom: 0.4rem; text-transform: uppercase; letter-spacing: 0.08em; font-weight: 700; }
        .pointer-value { font-size: 2rem; font-weight: 800; font-family: 'Sora', sans-serif; background: linear-gradient(135deg, var(--illuminate) 0%, var(--action) 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; }
        .pointer-bar { height: 4px; background: var(--light-border); border-radius: 2px; overflow: hidden; margin-top: 0.4rem; }
        .pointer-fill { height: 100%; background: linear-gradient(90deg, var(--illuminate) 0%, var(--action) 100%); transition: width 1s ease-out; }
        .recommendation-card { background: linear-gradient(135deg, var(--action) 0%, var(--action-dark) 100%); padding: 1rem 1.2rem; border-radius: 12px; color: white; }
        .rec-title { font-size: 0.65rem; text-transform: uppercase; letter-spacing: 0.08em; margin-bottom: 0.4rem; opacity: 0.9; font-weight: 700; }
        .rec-action { font-size: 1rem; font-weight: 700; margin-bottom: 0.3rem; }
        .rec-reason { font-size: 0.82rem; opacity: 0.95; }

        /* Demo modal overlay */
        .demo-overlay { position: fixed; inset: 0; background: rgba(10,10,10,0.75); backdrop-filter: blur(6px); z-index: 200; display: flex; align-items: center; justify-content: center; padding: 1rem; animation: fadeIn 0.2s ease-out; }
        .demo-modal { background: white; border-radius: 28px; width: 100%; max-width: 440px; overflow: hidden; box-shadow: 0 40px 100px rgba(0,0,0,0.4); }
        .demo-modal-header { background: linear-gradient(135deg, var(--illuminate) 0%, var(--action) 100%); padding: 1.5rem; color: white; }
        .demo-modal-title { font-family: 'Sora', sans-serif; font-weight: 800; font-size: 1.1rem; margin-bottom: 0.5rem; }
        .demo-progress-row { display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.5rem; font-size: 0.82rem; opacity: 0.95; }
        .demo-progress-bar { height: 4px; background: rgba(255,255,255,0.3); border-radius: 2px; }
        .demo-progress-fill { height: 100%; background: white; border-radius: 2px; transition: width 0.4s ease; }
        .demo-modal-body { padding: 1.5rem; }
        .demo-phase-label { font-size: 0.72rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.1em; margin-bottom: 0.75rem; }
        .demo-phase-context { color: var(--light-text-secondary); }
        .demo-phase-cognitive { color: var(--illuminate-dark); }
        .demo-prompt { font-size: 0.95rem; color: var(--light-text); line-height: 1.65; margin-bottom: 1.25rem; }
        .demo-options { display: flex; flex-direction: column; gap: 0.5rem; }
        .demo-option { padding: 0.7rem 1rem; border-radius: 10px; border: 1.5px solid #E5E0D5; background: var(--light-bg); color: var(--light-text); font-weight: 500; cursor: pointer; text-align: left; font-size: 0.9rem; transition: all 0.15s; }
        .demo-option:hover { border-color: var(--illuminate); background: rgba(245,158,11,0.06); }
        .demo-modal-footer { padding: 1rem 1.5rem; border-top: 1px solid #E5E0D5; display: flex; gap: 0.5rem; justify-content: flex-end; }

        /* Results */
        .demo-result-score { font-size: 1.15rem; font-weight: 700; color: var(--light-text); margin-bottom: 0.5rem; }
        .demo-result-feedback { font-size: 0.9rem; color: var(--light-text-secondary); line-height: 1.65; margin-bottom: 1rem; }
        .demo-result-plan { background: #FFF8E7; border: 1.5px solid var(--illuminate-light); border-radius: 10px; padding: 0.85rem; }
        .demo-result-plan-label { font-size: 0.7rem; font-weight: 700; color: var(--illuminate-dark); text-transform: uppercase; letter-spacing: 0.08em; margin-bottom: 0.4rem; }
        .demo-result-plan-text { font-size: 0.88rem; color: var(--light-text); line-height: 1.65; }

        /* Sections */
        .pain-section { background: var(--bg); color: var(--text); padding: 6rem 2rem; position: relative; overflow: hidden; }
        .pain-section::before { content: ''; position: absolute; top: 0; left: 0; right: 0; height: 2px; background: linear-gradient(90deg, transparent, var(--illuminate), transparent); }
        .pain-content { max-width: 1200px; margin: 0 auto; text-align: center; }
        .section-title { font-family: 'Sora', sans-serif; font-size: 2.5rem; font-weight: 800; margin-bottom: 1rem; letter-spacing: -0.02em; }
        .section-title .highlight { background: linear-gradient(135deg, var(--illuminate-light) 0%, var(--clarity) 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; }
        .section-subtitle { font-size: 1.15rem; color: var(--text-secondary); margin-bottom: 4rem; }
        .pain-grid { display: grid; grid-template-columns: repeat(3,1fr); gap: 2rem; margin-top: 3rem; }
        .pain-card { background: var(--bg-light); padding: 2rem; border-radius: 20px; text-align: left; border: 2px solid var(--border); transition: all 0.3s; }
        .pain-card:hover { border-color: var(--illuminate); transform: translateY(-4px); box-shadow: 0 10px 30px rgba(245,158,11,0.2); }
        .pain-icon { width: 60px; height: 60px; background: linear-gradient(135deg, var(--illuminate) 0%, var(--action) 100%); border-radius: 16px; display: flex; align-items: center; justify-content: center; color: white; margin-bottom: 1.5rem; }
        .pain-title { font-family: 'Sora', sans-serif; font-size: 1.25rem; font-weight: 600; margin-bottom: 0.75rem; color: var(--text); }
        .pain-desc { color: var(--text-secondary); line-height: 1.6; }

        .how-it-works { padding: 6rem 2rem; background: var(--light-bg); }
        .how-content { max-width: 1200px; margin: 0 auto; }
        .steps-grid { display: grid; grid-template-columns: repeat(3,1fr); gap: 3rem; margin-top: 4rem; }
        .step-card { text-align: center; }
        .step-number { width: 55px; height: 55px; background: linear-gradient(135deg, var(--illuminate) 0%, var(--action) 100%); color: white; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: 800; font-size: 1.3rem; margin: 0 auto 1.5rem; box-shadow: 0 6px 20px rgba(245,158,11,0.3); }
        .step-title { font-family: 'Sora', sans-serif; font-size: 1.25rem; font-weight: 700; color: var(--light-text); margin-bottom: 0.75rem; }
        .step-desc { color: var(--light-text-secondary); line-height: 1.6; }

        .integrations { background: white; padding: 4rem 2rem; border-top: 2px solid var(--light-border); }
        .integrations-content { max-width: 1000px; margin: 0 auto; text-align: center; }
        .int-title { font-family: 'Sora', sans-serif; font-size: 2rem; font-weight: 700; margin-bottom: 3rem; color: var(--light-text); }
        .int-grid { display: grid; grid-template-columns: repeat(4,1fr); gap: 1.5rem; }
        .int-card { background: var(--light-bg); padding: 2rem 1.5rem; border-radius: 16px; border: 2px solid var(--light-border); transition: all 0.3s; }
        .int-card:hover { border-color: var(--illuminate); transform: translateY(-4px); box-shadow: 0 8px 25px rgba(245,158,11,0.2); }
        .int-icon { width: 56px; height: 56px; margin: 0 auto 1rem; background: linear-gradient(135deg, var(--illuminate-light) 0%, var(--action) 100%); border-radius: 14px; display: flex; align-items: center; justify-content: center; color: white; }
        .int-name { font-size: 1rem; font-weight: 700; color: var(--light-text); }

        .features { padding: 6rem 2rem; background: var(--light-bg); }
        .features-content { max-width: 1200px; margin: 0 auto; }
        .features-grid { display: grid; grid-template-columns: repeat(3,1fr); gap: 3rem; margin-top: 4rem; }
        .feature-card { text-align: center; }
        .feature-icon { width: 72px; height: 72px; background: linear-gradient(135deg, var(--illuminate) 0%, var(--action) 100%); border-radius: 20px; display: flex; align-items: center; justify-content: center; color: white; margin: 0 auto 1.5rem; box-shadow: 0 8px 25px rgba(245,158,11,0.3); }
        .feature-title { font-family: 'Sora', sans-serif; font-size: 1.3rem; font-weight: 700; color: var(--light-text); margin-bottom: 0.75rem; }
        .feature-desc { color: var(--light-text-secondary); line-height: 1.6; }

        .final-cta { background: linear-gradient(135deg, var(--illuminate) 0%, var(--action) 100%); padding: 6rem 2rem; text-align: center; color: white; position: relative; overflow: hidden; }
        .final-cta::before { content: ''; position: absolute; inset: 0; background: radial-gradient(circle at 30% 50%, rgba(253,224,71,0.2), transparent 55%); pointer-events: none; }
        .cta-content { max-width: 700px; margin: 0 auto; position: relative; }
        .cta-title { font-family: 'Sora', sans-serif; font-size: 2.8rem; font-weight: 800; margin-bottom: 1rem; }
        .cta-subtitle { font-size: 1.1rem; opacity: 0.95; margin-bottom: 2.5rem; }
        .btn-white { background: white; color: var(--illuminate-dark); border: none; padding: 1.2rem 3rem; border-radius: 12px; font-size: 1.1rem; font-weight: 800; cursor: pointer; display: inline-flex; align-items: center; gap: 0.75rem; transition: all 0.3s; box-shadow: 0 10px 40px rgba(0,0,0,0.2); }
        .btn-white:hover { transform: translateY(-4px); box-shadow: 0 15px 50px rgba(0,0,0,0.3); }

        footer { background: var(--bg); color: var(--text-secondary); padding: 2rem; text-align: center; border-top: 2px solid var(--illuminate-dark); }

        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        @keyframes fadeInUp { from { opacity: 0; transform: translateY(30px); } to { opacity: 1; transform: translateY(0); } }

        @media (max-width: 1024px) {
          .hero { grid-template-columns: 1fr; gap: 3rem; }
          .pain-grid, .steps-grid, .int-grid, .features-grid { grid-template-columns: 1fr; gap: 2rem; }
          .hero h1 { font-size: 2.5rem; }
          .phone-mockup { max-width: 320px; }
        }
      `}</style>

      {/* Nav */}
      <nav>
        <div className="nav-content">
          <div className="logo">
            <Lightbulb size={22} style={{color: 'var(--illuminate)'}} />
            Mentiva AI
          </div>
          <div className="nav-right">
            <a href="#how" className="nav-link">How it works</a>
            <a href="#integrations" className="nav-link">Integrations</a>
            <button className="lang-toggle" onClick={() => setLang(lang === 'es' ? 'en' : 'es')}>
              <Globe size={15} />
              {lang === 'es' ? 'EN' : 'ES'}
            </button>
          </div>
        </div>
      </nav>

      {/* Brain check-in demo modal */}
      {showDemo && (
        <div className="demo-overlay" onClick={e => { if (e.target === e.currentTarget) { setShowDemo(false); setDemoStarted(false); setResults(null); } }}>
          <div className="demo-modal">
            <div className="demo-modal-header">
              <div className="demo-progress-row">
                <div className="demo-modal-title">
                  {demoStarted ? `${demoQuestions[questionIndex].emoji} ${demoQuestions[questionIndex].label}` : (results ? '\ud83c\udf1f Results' : 'Brain check-in \u00b7 3 min')}
                </div>
                <div style={{fontWeight: 700, fontSize: '0.9rem'}}>
                  {demoStarted && demoQuestions[questionIndex].maxTime > 0 ? `\u23f0 ${timeLeft}s` : (demoStarted ? `${questionIndex + 1}/8` : '')}
                </div>
              </div>
              <div className="demo-progress-bar">
                <div className="demo-progress-fill" style={{width: `${demoStarted || results ? ((questionIndex + (results ? 1 : 0)) / demoQuestions.length) * 100 : 0}%`}}></div>
              </div>
            </div>

            <div className="demo-modal-body">
              {demoStarted && !results && (
                <>
                  <div className={`demo-phase-label ${demoQuestions[questionIndex].phase === 'context' ? 'demo-phase-context' : 'demo-phase-cognitive'}`}>
                    {demoQuestions[questionIndex].phase === 'context' ? 'Context check-in' : '\u26a1 Timed challenge'}
                  </div>
                  <div className="demo-prompt">{demoQuestions[questionIndex].prompt}</div>
                  <div className="demo-options">
                    {demoQuestions[questionIndex].options.map((opt, i) => (
                      <button key={i} className="demo-option" onClick={() => submitAnswer(opt)}>{opt}</button>
                    ))}
                  </div>
                </>
              )}

              {results && results.score === undefined && (
                <div style={{textAlign: 'center', padding: '1rem 0'}}>
                  <div style={{fontSize: '2rem', marginBottom: '0.75rem'}}>\u2705</div>
                  <div style={{fontFamily: 'Sora,sans-serif', fontWeight: 700, fontSize: '1.1rem', marginBottom: '0.75rem'}}>Check-in complete!</div>
                  <p style={{color: 'var(--light-text-secondary)', fontSize: '0.9rem', marginBottom: '1.5rem'}}>Analyzing your brain state and context\u2026</p>
                  <button className="btn-primary" style={{margin: '0 auto', display: 'inline-flex'}} onClick={analyzeResults}>
                    <Sparkles size={17} /> Get my personalized plan
                  </button>
                </div>
              )}

              {results && results.score !== undefined && (
                <div>
                  <div className="demo-result-score">\ud83e\udde0 Brain score: {results.score}/4</div>
                  <div className="demo-result-feedback">{results.feedback}</div>
                  {results.plan && (
                    <div className="demo-result-plan">
                      <div className="demo-result-plan-label">Your action plan</div>
                      <div className="demo-result-plan-text">{results.plan}</div>
                    </div>
                  )}
                </div>
              )}
            </div>

            <div className="demo-modal-footer">
              {demoStarted && (
                <button className="btn-secondary" style={{padding: '0.6rem 1.2rem', fontSize: '0.88rem'}} onClick={() => submitAnswer(null)}>Skip</button>
              )}
              {results && (
                <button className="btn-secondary" style={{padding: '0.6rem 1.2rem', fontSize: '0.88rem'}} onClick={startDemo}>Retry</button>
              )}
              <button className="btn-secondary" style={{padding: '0.6rem 1.2rem', fontSize: '0.88rem'}} onClick={() => { setShowDemo(false); setDemoStarted(false); setResults(null); }}>Close</button>
            </div>
          </div>
        </div>
      )}

      {/* Hero */}
      <section className="hero">
        <div className="hero-content">
          <div className="hero-badge">
            <Sun size={13} />
            {t.hero_badge}
          </div>
          <h1>
            <span className="highlight">We illuminate</span><br />
            your cognitive state
          </h1>
          <p>{t.hero_subtitle}</p>
          <div className="hero-ctas">
            <button className="btn-primary" onClick={startDemo}>
              <Lightbulb size={19} />
              {t.cta_start}
              <ArrowRight size={17} />
            </button>
          </div>
        </div>

        {/* Animated phone */}
        <div className="phone-mockup">
          <div className="phone-frame">
            <div className="phone-notch"></div>
            <div className="phone-screen">
              <div className="chat-header">
                <div className="chat-avatar"><Lightbulb size={22} /></div>
                <div>
                  <div className="chat-name">Mentiva</div>
                  <div className="chat-status"><span className="status-dot"></span>Illuminating now</div>
                </div>
              </div>

              <div className="chat-messages">
                {messages.slice(0, visibleMessages).map((msg, idx) => (
                  <div key={idx} className={`message ${msg.type === 'ai' ? 'message-ai' : 'message-user'}`}>
                    {msg.type === 'ai' && <div className="message-avatar"><Lightbulb size={14} /></div>}
                    <div className={`message-bubble ${msg.type === 'ai' ? 'message-bubble-ai' : 'message-bubble-user'}`}>{msg.content}</div>
                  </div>
                ))}
                {isTyping && visibleMessages < messages.length && (
                  <div className="message message-ai">
                    <div className="message-avatar"><Lightbulb size={14} /></div>
                    <div className="typing-indicator">
                      <span className="typing-dot"></span>
                      <span className="typing-dot"></span>
                      <span className="typing-dot"></span>
                    </div>
                  </div>
                )}
              </div>

              {showPointers && (
                <div className="pointers-panel">
                  <div className="pointers-grid">
                    {[['Focus','82','82%'],['Load','34','34%'],['Speed','76','76%'],['Memory','71','71%']].map(([label,val,w]) => (
                      <div key={label} className="pointer-card">
                        <div className="pointer-label">{label}</div>
                        <div className="pointer-value">{val}</div>
                        <div className="pointer-bar"><div className="pointer-fill" style={{width: w}}></div></div>
                      </div>
                    ))}
                    <div className="pointer-card" style={{gridColumn:'span 2'}}>
                      <div className="pointer-label">Energy</div>
                      <div className="pointer-value">88</div>
                      <div className="pointer-bar"><div className="pointer-fill" style={{width:'88%'}}></div></div>
                    </div>
                  </div>
                  <div className="recommendation-card">
                    <div className="rec-title">{t.rec_title}</div>
                    <div className="rec-action">{t.rec_deep}</div>
                    <div className="rec-reason">{t.rec_reason}</div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Pain */}
      <section className="pain-section">
        <div className="pain-content">
          <h2 className="section-title">The problem we <span className="highlight">illuminate</span></h2>
          <p className="section-subtitle">{t.pain_subtitle}</p>
          <div className="pain-grid">
            <div className="pain-card"><div className="pain-icon"><Moon size={28} /></div><h3 className="pain-title">{t.pain1_title}</h3><p className="pain-desc">{t.pain1_desc}</p></div>
            <div className="pain-card"><div className="pain-icon"><Flame size={28} /></div><h3 className="pain-title">{t.pain2_title}</h3><p className="pain-desc">{t.pain2_desc}</p></div>
            <div className="pain-card"><div className="pain-icon"><Activity size={28} /></div><h3 className="pain-title">{t.pain3_title}</h3><p className="pain-desc">{t.pain3_desc}</p></div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="how-it-works" id="how">
        <div className="how-content">
          <h2 className="section-title" style={{textAlign:'center'}}>{t.how_title}</h2>
          <div className="steps-grid">
            <div className="step-card"><div className="step-number">1</div><h3 className="step-title">{t.step1_title}</h3><p className="step-desc">{t.step1_desc}</p></div>
            <div className="step-card"><div className="step-number">2</div><h3 className="step-title">{t.step2_title}</h3><p className="step-desc">{t.step2_desc}</p></div>
            <div className="step-card"><div className="step-number">3</div><h3 className="step-title">{t.step3_title}</h3><p className="step-desc">{t.step3_desc}</p></div>
          </div>
        </div>
      </section>

      {/* Integrations */}
      <section className="integrations" id="integrations">
        <div className="integrations-content">
          <h3 className="int-title">{t.int_title}</h3>
          <div className="int-grid">
            <div className="int-card"><div className="int-icon"><Watch size={28} /></div><div className="int-name">{t.int_oura}</div></div>
            <div className="int-card"><div className="int-icon"><Activity size={28} /></div><div className="int-name">{t.int_whoop}</div></div>
            <div className="int-card"><div className="int-icon"><Watch size={28} /></div><div className="int-name">{t.int_apple}</div></div>
            <div className="int-card"><div className="int-icon"><Activity size={28} /></div><div className="int-name">{t.int_strava}</div></div>
          </div>
        </div>
      </section>

      {/* Doctor appointment */}
      <section style={{background:'#FFFBF0', padding:'5rem 2rem', borderTop:'2px solid var(--light-border)'}}>
        <div style={{maxWidth:780, margin:'0 auto', textAlign:'center'}}>
          <div style={{fontSize:'2.5rem', marginBottom:'1rem'}}>\ud83e\uddd1\u200d\u2695\ufe0f</div>
          <h2 style={{fontFamily:'Sora,sans-serif', fontSize:'2rem', fontWeight:700, color:'var(--light-text)', marginBottom:'1rem', letterSpacing:'-0.02em'}}>{t.doctor_title}</h2>
          <p style={{color:'var(--light-text-secondary)', fontSize:'1.05rem', lineHeight:1.7, marginBottom:'2rem'}}>{t.doctor_subtitle}</p>
          <button className="btn-primary" style={{margin:'0 auto', display:'inline-flex'}}>
            {t.doctor_cta} <ArrowRight size={17} style={{marginLeft:4}} />
          </button>
          <p style={{marginTop:'1.25rem', color:'#A8A29E', fontSize:'0.88rem'}}>{t.doctor_fine}</p>
        </div>
      </section>

      {/* Features */}
      <section className="features">
        <div className="features-content">
          <h2 className="section-title" style={{textAlign:'center'}}>How we <span className="highlight">illuminate</span> your state</h2>
          <div className="features-grid">
            <div className="feature-card"><div className="feature-icon"><Brain size={32} /></div><h3 className="feature-title">{t.feature1_title}</h3><p className="feature-desc">{t.feature1_desc}</p></div>
            <div className="feature-card"><div className="feature-icon"><Sun size={32} /></div><h3 className="feature-title">{t.feature2_title}</h3><p className="feature-desc">{t.feature2_desc}</p></div>
            <div className="feature-card"><div className="feature-icon"><Zap size={32} /></div><h3 className="feature-title">{t.feature3_title}</h3><p className="feature-desc">{t.feature3_desc}</p></div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="final-cta">
        <div className="cta-content">
          <h2 className="cta-title">{t.cta_title}</h2>
          <p className="cta-subtitle">{t.cta_subtitle}</p>
          <button className="btn-white" onClick={startDemo}>
            <Lightbulb size={22} />
            Start Now
            <ArrowRight size={19} />
          </button>
        </div>
      </section>

      <footer><p>{t.footer_backed}</p></footer>
    </div>
  );
};

export default MentivaAI;
