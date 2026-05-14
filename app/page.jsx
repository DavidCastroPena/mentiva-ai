'use client';
import React, { useState, useEffect } from 'react';
import { Brain, Activity, Zap, Clock, TrendingUp, Target, Gauge, Moon, Coffee, Flame, Wind, Globe, ArrowRight, Check, Sparkles, Watch } from 'lucide-react';

const translations = {
  es: {
    // Hero
    hero_badge: "Demostración",
    hero_title: "Mide tu atención y conquista el día",
    hero_subtitle: "Mentiva analiza cómo opera tu mente ahora mismo y te da un plan claro para lograr tus metas de hoy.",
    cta_start: "Probar Ahora",
    cta_see_demo: "Ver Demo",
    
    // Chat messages - showing behavioral inference
    msg_welcome: "Hola. Voy a hacerte algunas preguntas para calibrar tu estado cognitivo actual.",
    msg_q1: "¿Cómo describirías tu nivel de energía ahora mismo?",
    user_a1: "Bastante bien, tomé café hace una hora",
    msg_q2: "¿Cuántas horas dormiste anoche?",
    user_a2: "Como 6 horas",
    msg_inference: "Analizando tu respuesta... Noté una respuesta rápida (1.2s) y un patrón de lenguaje coherente.",
    msg_oura: "Vi que tu Oura detectó 45 min de sueño profundo. Temperatura corporal +0.3°C.",
    msg_result: "Tu estado cognitivo ahora:",
    
    // Pointers
    pointer_focus: "Enfoque",
    pointer_load: "Carga",
    pointer_speed: "Velocidad",
    pointer_memory: "Memoria",
    pointer_energy: "Energía",
    
    // Recommendations
    rec_title: "Modo recomendado",
    rec_deep: "💎 Trabajo Profundo (próximas 2-3h)",
    rec_reason: "Tu enfoque está alto, carga es baja. Aprovecha esta ventana.",
    
    // How it works
    how_title: "Cómo funciona Mentiva",
    step1_title: "Conversación Diaria",
    step1_desc: "Chat corto (2-3 min) que extrae señales lingüísticas y de comportamiento.",
    step2_title: "Inferencia Continua",
    step2_desc: "Analizamos patrones: latencia, complejidad, consistencia + datos de wearables.",
    step3_title: "Pointers en Tiempo Real",
    step3_desc: "5 indicadores simples: Enfoque, Carga, Velocidad, Memoria, Energía.",
    
    // Pain point
    pain_title: "El problema que resolvemos",
    pain_subtitle: "Los humanos operan cognitivamente 'a ciegas'",
    pain1_title: "Decisiones sin datos",
    pain1_desc: "No sabes si estás en modo para trabajo profundo o si necesitas descansar hasta que es demasiado tarde.",
    pain2_title: "Burnout invisible",
    pain2_desc: "La fatiga cognitiva se acumula silenciosamente. Lo notas solo después del colapso de rendimiento.",
    pain3_title: "Señales fragmentadas",
    pain3_desc: "Tu Oura dice 'recuperación 67%', tu calendario está lleno, pero ¿qué significa para tu trabajo HOY?",
    
    // Integrations
    int_title: "Se integra con tu vida",
    int_oura: "Oura Ring",
    int_whoop: "Whoop",
    int_apple: "Apple Watch",
    
    // Features
    feature1_title: "Inferencia Conductual",
    feature1_desc: "Extraemos señales cognitivas de cómo hablas, cuándo respondes, qué tan complejo escribes.",
    feature2_title: "Dashboard de Pointers",
    feature2_desc: "5 métricas simples que cambian en tiempo real según tu estado mental actual.",
    feature3_title: "Modos Adaptativos",
    feature3_desc: "Recomendaciones que cambian: trabajo profundo, tareas ligeras, descanso activo.",
    
    // CTA
    cta_title: "Deja de operar a ciegas",
    cta_subtitle: "Primera conversación en 3 minutos. Estado cognitivo en tiempo real para siempre.",
    
    // Footer
    footer_backed: "Construido sobre investigación de psicología cognitiva + ML",
  },
  en: {
    hero_badge: "Demo",
    hero_title: "Measure your brain attention. Crush today's goals.",
    hero_subtitle: "Mentiva reads how your mind is operating right now and builds a simple action plan so you hit what matters most today.",
    cta_start: "Try It Now",
    cta_see_demo: "See Demo",
    
    msg_welcome: "Hi. I'll ask you a few questions to calibrate your current cognitive state.",
    msg_q1: "How would you describe your energy level right now?",
    user_a1: "Pretty good, had coffee an hour ago",
    msg_q2: "How many hours did you sleep last night?",
    user_a2: "About 6 hours",
    msg_inference: "Analyzing your response... I noticed a fast reply (1.2s) and coherent language pattern.",
    msg_oura: "I saw your Oura detected 45 min deep sleep. Body temp +0.3°C.",
    msg_result: "Your cognitive state right now:",
    
    pointer_focus: "Focus",
    pointer_load: "Load",
    pointer_speed: "Speed",
    pointer_memory: "Memory",
    pointer_energy: "Energy",
    
    rec_title: "Recommended mode",
    rec_deep: "💎 Deep Work (next 2-3h)",
    rec_reason: "Your focus is high, load is low. Use this window.",
    
    how_title: "How Mentiva works",
    step1_title: "Daily Conversation",
    step1_desc: "Short chat (2-3 min) that extracts linguistic and behavioral signals.",
    step2_title: "Continuous Inference",
    step2_desc: "We analyze patterns: latency, complexity, consistency + wearable data.",
    step3_title: "Real-time Pointers",
    step3_desc: "5 simple indicators: Focus, Load, Speed, Memory, Energy.",
    
    pain_title: "The problem we solve",
    pain_subtitle: "Humans operate cognitively 'blind'",
    pain1_title: "Decisions without data",
    pain1_desc: "You don't know if you're in deep work mode or need rest until it's too late.",
    pain2_title: "Invisible burnout",
    pain2_desc: "Cognitive fatigue accumulates silently. You notice only after performance drops.",
    pain3_title: "Fragmented signals",
    pain3_desc: "Your Oura says '67% recovery', your calendar is full, but what does that mean for your work TODAY?",
    
    int_title: "Integrates with your life",
    int_oura: "Oura Ring",
    int_whoop: "Whoop",
    int_apple: "Apple Watch",
    
    feature1_title: "Behavioral Inference",
    feature1_desc: "We extract cognitive signals from how you talk, when you respond, how complex you write.",
    feature2_title: "Pointers Dashboard",
    feature2_desc: "5 simple metrics that change in real-time based on your current mental state.",
    feature3_title: "Adaptive Modes",
    feature3_desc: "Recommendations that shift: deep work, light tasks, active rest.",
    
    cta_title: "Stop operating blind",
    cta_subtitle: "First conversation in 3 minutes. Real-time cognitive state forever.",
    
    footer_backed: "Built on cognitive psychology research + ML",
  }
};

const MentivaAI = () => {
  const [lang, setLang] = useState('en');
  const t = translations[lang];
  // Demo (gamified MoCA) state
  const [showDemo, setShowDemo] = useState(false);
  const [demoStarted, setDemoStarted] = useState(false);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [timeLeft, setTimeLeft] = useState(20);
  const [answers, setAnswers] = useState([]);
  const [results, setResults] = useState(null);

  const demoQuestions = [
    // Phase 1: Context (no timer)
    { id: 1, phase: 'context', emoji: '💬', label: 'How you feel', prompt: "Hey! Before we measure your focus — how are you feeling right now?", type: 'choice', options: ['⚡ Energized & clear', '🌀 Scattered & distracted', '😌 Calm but low energy', '😴 Tired but pushing through', '😰 Stressed & overwhelmed'], maxTime: 0 },
    { id: 2, phase: 'context', emoji: '🕐', label: 'Time of day', prompt: "Got it. What part of the day is this for you?", type: 'choice', options: ['🌅 Early morning', '☀️ Morning', '⛅ Midday', '🌤 Afternoon', '🌙 Evening / Night'], maxTime: 0 },
    { id: 3, phase: 'context', emoji: '🎯', label: 'Top goal', prompt: "Nice. What is your #1 priority for today?", type: 'choice', options: ['🧠 Deep focused work', '🤝 Meetings & collaboration', '📚 Learning something new', '🎨 Creative work', '📋 Admin & catch-up'], maxTime: 0 },
    { id: 4, phase: 'context', emoji: '🔋', label: 'Energy drain', prompt: "Last one before your brain check — what is draining you most right now?", type: 'choice', options: ['😴 Poor sleep', '📱 Too many distractions', '😟 Emotional stress', '🍽 Skipping meals or water', '🏃 Physical fatigue'], maxTime: 0 },
    // Phase 2: Cognitive (timed + science/culture context)
    { id: 5, phase: 'cognitive', emoji: '🧬', label: 'Memory', prompt: "Science update ✨ A 2025 Nature study found the brain's hippocampus replays memories during quiet rest — not only during sleep. Which organ was named?", type: 'choice', options: ['Hippocampus', 'Cerebellum', 'Amygdala'], correct: 'Hippocampus', maxTime: 15 },
    { id: 6, phase: 'cognitive', emoji: '🎨', label: 'Attention', prompt: "Culture check 🖼️ Artist Cecily Brown's 2025 retrospective explores chaos and perception through layered paint. How many letters are in the word 'paint'?", type: 'choice', options: ['4', '5', '6'], correct: '5', maxTime: 12 },
    { id: 7, phase: 'cognitive', emoji: '📚', label: 'Sequence', prompt: "Literature note 📖 The 2024 Booker Prize winner explores fractured identity through memory loops. Quick pattern: 4, 8, 16, ___?", type: 'choice', options: ['24', '32', '20'], correct: '32', maxTime: 12 },
    { id: 8, phase: 'cognitive', emoji: '⚡', label: 'Speed', prompt: "Final sprint ⚡ Which of these is in correct alphabetical order?", type: 'choice', options: ['apple → car → river', 'car → apple → river', 'river → car → apple'], correct: 'apple → car → river', maxTime: 10 },
  ];

  useEffect(() => {
    let timer;
    const q = demoQuestions[questionIndex];
    // Context questions (maxTime === 0) have no timer — wait for explicit selection
    if (demoStarted && q && q.maxTime > 0 && timeLeft > 0) {
      timer = setTimeout(() => setTimeLeft(t => t - 1), 1000);
    } else if (demoStarted && q && q.maxTime > 0 && timeLeft === 0) {
      // Auto-advance on timeout
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
    const correctCount = cogAnswers.filter(a => {
      const q = demoQuestions.find(q => q.id === a.q);
      return q && a.answer === q.correct;
    }).length;
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
    return `Your brain is working under load. Address ${drain?.toLowerCase()} first — even a 10-min walk can reset focus for the next 2 hours.`;
  }

  return (
    <div className="mentiva-ai">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Sora:wght@300;400;500;600;700;800&family=Inter:wght@300;400;500;600&display=swap');
        
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        
        :root {
          /* Mentiva — Yellow/Amber illumination palette */
          --primary: #D97706;        /* Amber 600 — main CTA */
          --primary-light: #FBBF24;  /* Amber 400 */
          --primary-dark: #92400E;   /* Amber 800 */
          --accent: #F59E0B;         /* Amber 500 */
          --accent-light: #FCD34D;   /* Amber 300 */
          --accent-dark: #B45309;    /* Amber 700 */

          --bg: #FFFBF0;             /* Warm off-white page bg */
          --bg-light: #FFF8E7;       /* Slightly warmer surface */
          --surface: #FFFFFF;
          --border: #E5E0D5;

          --text: #1C1917;           /* Warm near-black */
          --text-secondary: #57534E; /* Warm gray */
          --text-muted: #A8A29E;

          --success: #16a34a;
          --warning: #F59E0B;
          --danger: #ef4444;

          /* Mapped light-mode vars */
          --light-bg: #FFF8E7;
          --light-surface: #FFFFFF;
          --light-text: #1C1917;
          --light-text-secondary: #57534E;
          --light-border: #E5E0D5;
        }
        
        .mentiva-ai {
          font-family: 'Inter', -apple-system, sans-serif;
          background: var(--bg);
          color: var(--text);
          line-height: 1.6;
        }
        
        /* Navigation */
        nav {
          position: fixed;
          top: 0;
          width: 100%;
          background: rgba(255, 251, 240, 0.92);
          backdrop-filter: blur(20px);
          z-index: 100;
          border-bottom: 1px solid var(--border);
        }
        
        .nav-content {
          max-width: 1400px;
          margin: 0 auto;
          padding: 1.2rem 2rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        
        .logo {
          font-family: 'Sora', sans-serif;
          font-size: 1.5rem;
          font-weight: 700;
          background: linear-gradient(135deg, #D97706 0%, #F59E0B 60%, #FBBF24 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          letter-spacing: -0.02em;
        }
        
        .nav-right {
          display: flex;
          gap: 2rem;
          align-items: center;
        }
        
        .nav-link {
          color: var(--text-secondary);
          text-decoration: none;
          font-size: 0.95rem;
          font-weight: 500;
          transition: color 0.2s;
        }
        
        .nav-link:hover {
          color: var(--primary);
        }
        
        .lang-toggle {
          background: transparent;
          border: 1.5px solid #E5E0D5;
          color: #57534E;
          padding: 0.5rem 1rem;
          border-radius: 8px;
          cursor: pointer;
          font-weight: 500;
          font-size: 0.9rem;
          transition: all 0.2s;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }
        
        .lang-toggle:hover {
          border-color: #D97706;
          color: #D97706;
        }
        
        /* Hero Section */
        .hero {
          max-width: 1400px;
          margin: 0 auto;
          padding: 8rem 2rem 4rem;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          align-items: center;
        }
        
        .hero-content {
          max-width: 600px;
        }
        
        .hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          background: rgba(245, 158, 11, 0.12);
          border: 1px solid rgba(217, 119, 6, 0.35);
          padding: 0.5rem 1rem;
          border-radius: 50px;
          font-size: 0.85rem;
          font-weight: 600;
          color: #B45309;
          margin-bottom: 2rem;
          animation: fadeIn 0.8s ease-out;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }
        
        .hero h1 {
          font-family: 'Sora', sans-serif;
          font-size: 3.5rem;
          font-weight: 700;
          color: var(--text);
          line-height: 1.1;
          margin-bottom: 1.5rem;
          letter-spacing: -0.03em;
          animation: fadeInUp 0.8s ease-out 0.2s backwards;
        }
        
        .hero p {
          font-size: 1.15rem;
          color: var(--text-secondary);
          line-height: 1.7;
          margin-bottom: 2rem;
          animation: fadeInUp 0.8s ease-out 0.4s backwards;
        }
        
        .hero-ctas {
          display: flex;
          gap: 1rem;
          animation: fadeInUp 0.8s ease-out 0.6s backwards;
        }
        
        .btn-primary {
          background: linear-gradient(135deg, #D97706 0%, #F59E0B 100%);
          color: #1C1917;
          border: none;
          padding: 1rem 2rem;
          border-radius: 12px;
          font-size: 1rem;
          font-weight: 700;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          transition: all 0.3s;
          box-shadow: 0 4px 20px rgba(217, 119, 6, 0.35);
        }
        
        .btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 30px rgba(217, 119, 6, 0.5);
          background: linear-gradient(135deg, #F59E0B 0%, #FBBF24 100%);
        }
        
        .btn-secondary {
          background: transparent;
          color: var(--text-secondary);
          border: 1.5px solid var(--border);
          padding: 1rem 2rem;
          border-radius: 12px;
          font-size: 1rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.2s;
        }
        
        .btn-secondary:hover {
          border-color: var(--primary);
          color: var(--primary);
        }
        
        /* iPhone Mockup */
        .phone-mockup {
          position: relative;
          width: 100%;
          max-width: 380px;
          margin: 0 auto;
          animation: float 3s ease-in-out infinite;
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        
        .phone-frame {
          position: relative;
          background: #1a1a1a;
          border-radius: 50px;
          padding: 12px;
          box-shadow: 0 30px 80px rgba(0, 0, 0, 0.3);
        }
        
        .phone-notch {
          position: absolute;
          top: 12px;
          left: 50%;
          transform: translateX(-50%);
          width: 150px;
          height: 30px;
          background: #1a1a1a;
          border-radius: 0 0 20px 20px;
          z-index: 2;
        }
        
        .phone-screen {
          background: #FFFBF0;
          border-radius: 40px;
          overflow: hidden;
          position: relative;
          height: 750px;
          color: #1C1917;
        }
        
        /* Chat Header */
        .chat-header {
          background: linear-gradient(135deg, #D97706 0%, #F59E0B 100%);
          padding: 1.5rem 1.5rem 1rem;
          display: flex;
          align-items: center;
          gap: 1rem;
          padding-top: 3rem;
          color: #1C1917;
        }
        
        .chat-avatar {
          width: 45px;
          height: 45px;
          background: rgba(255, 255, 255, 0.2);
          backdrop-filter: blur(10px);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
        }
        
        .chat-info {
          flex: 1;
        }
        
        .chat-name {
          font-weight: 700;
          font-size: 1rem;
          font-family: 'Sora', sans-serif;
        }
        
        .chat-status {
          font-size: 0.8rem;
          opacity: 0.9;
          display: flex;
          align-items: center;
          gap: 0.3rem;
        }
        
        .status-dot {
          width: 6px;
          height: 6px;
          background: white;
          border-radius: 50%;
          animation: pulse 2s ease-in-out infinite;
        }
        
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }
        
        /* Messages */
        .chat-messages {
          padding: 1.5rem 1rem;
          min-height: 400px;
          background: #FFFBF0;
        }
        
        .message {
          margin-bottom: 1rem;
          animation: slideUp 0.4s ease-out;
        }
        
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .message-ai {
          display: flex;
          gap: 0.5rem;
          align-items: flex-start;
        }
        
        .message-user {
          display: flex;
          justify-content: flex-end;
        }
        
        .message-avatar {
          width: 30px;
          height: 30px;
          background: linear-gradient(135deg, #D97706 0%, #FBBF24 100%);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #1C1917;
          flex-shrink: 0;
        }
        
        .message-bubble {
          max-width: 75%;
          padding: 0.75rem 1rem;
          border-radius: 18px;
          font-size: 0.9rem;
          line-height: 1.5;
        }
        
        .message-bubble-ai {
          background: #FFFFFF;
          color: #1C1917;
          border: 1px solid #E5E0D5;
          box-shadow: 0 2px 8px rgba(0,0,0,0.06);
        }
        
        .message-bubble-user {
          background: linear-gradient(135deg, #D97706 0%, #F59E0B 100%);
          color: #1C1917;
        }
        
        .typing-indicator {
          display: flex;
          gap: 0.5rem;
          padding: 1rem;
          background: white;
          border-radius: 18px;
          width: fit-content;
          border: 1px solid var(--light-border);
          animation: slideUp 0.4s ease-out;
        }
        
        .typing-dot {
          width: 8px;
          height: 8px;
          background: #D97706;
          border-radius: 50%;
          animation: typingBounce 1.4s ease-in-out infinite;
        }
        
        .typing-dot:nth-child(2) {
          animation-delay: 0.2s;
        }
        
        .typing-dot:nth-child(3) {
          animation-delay: 0.4s;
        }
        
        @keyframes typingBounce {
          0%, 60%, 100% { transform: translateY(0); }
          30% { transform: translateY(-8px); }
        }
        
        /* Pointers Dashboard in Phone */
        .pointers-panel {
          background: #FFFBF0;
          padding: 1.5rem;
          animation: slideUp 0.6s ease-out;
        }
        
        .pointers-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 0.75rem;
          margin-bottom: 1rem;
        }
        
        .pointer-card {
          background: #FFF8E7;
          padding: 1rem;
          border-radius: 12px;
          text-align: center;
          border: 1px solid #E5E0D5;
        }
        
        .pointer-label {
          font-size: 0.75rem;
          color: #57534E;
          margin-bottom: 0.5rem;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          font-weight: 600;
        }
        
        .pointer-value {
          font-size: 2rem;
          font-weight: 700;
          font-family: 'Sora', sans-serif;
          background: linear-gradient(135deg, #D97706 0%, #F59E0B 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        
        .pointer-bar {
          height: 4px;
          background: var(--light-border);
          border-radius: 2px;
          overflow: hidden;
          margin-top: 0.5rem;
        }
        
        .pointer-fill {
          height: 100%;
          background: linear-gradient(90deg, #D97706 0%, #FBBF24 100%);
          transition: width 1s ease-out;
        }
        
        .recommendation-card {
          background: linear-gradient(135deg, #D97706 0%, #FBBF24 100%);
          padding: 1rem;
          border-radius: 12px;
          color: #1C1917;
        }
        
        .rec-title {
          font-size: 0.75rem;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          margin-bottom: 0.5rem;
          opacity: 0.9;
        }
        
        .rec-action {
          font-size: 1rem;
          font-weight: 600;
          margin-bottom: 0.25rem;
        }
        
        .rec-reason {
          font-size: 0.85rem;
          opacity: 0.9;
        }
        
        /* Pain Point Section */
        .pain-section {
          background: #1C1917;
          color: #FFF8E7;
          padding: 6rem 2rem;
        }
        
        .pain-content {
          max-width: 1200px;
          margin: 0 auto;
          text-align: center;
        }
        
        .section-title {
          font-family: 'Sora', sans-serif;
          font-size: 2.5rem;
          font-weight: 700;
          margin-bottom: 1rem;
          letter-spacing: -0.02em;
        }
        
        .section-subtitle {
          font-size: 1.2rem;
          color: #A8A29E;
          margin-bottom: 4rem;
        }
        
        .pain-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2rem;
          margin-top: 3rem;
        }
        
        .pain-card {
          background: #292524;
          padding: 2rem;
          border-radius: 20px;
          text-align: left;
          border: 1px solid #3C3835;
        }
        
        .pain-icon {
          width: 60px;
          height: 60px;
          background: linear-gradient(135deg, #D97706 0%, #FBBF24 100%);
          border-radius: 16px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #1C1917;
          margin-bottom: 1.5rem;
        }
        
        .pain-title {
          font-family: 'Sora', sans-serif;
          font-size: 1.3rem;
          font-weight: 600;
          margin-bottom: 0.75rem;
          color: #FFF8E7;
        }
        
        .pain-desc {
          color: #A8A29E;
          line-height: 1.6;
        }
        
        /* How It Works */
        .how-it-works {
          padding: 6rem 2rem;
          background: #FFFBF0;
        }
        
        .how-content {
          max-width: 1200px;
          margin: 0 auto;
        }
        
        .steps-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 3rem;
          margin-top: 4rem;
        }
        
        .step-card {
          text-align: center;
        }
        
        .step-number {
          width: 50px;
          height: 50px;
          background: linear-gradient(135deg, #D97706 0%, #FBBF24 100%);
          color: #1C1917;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 700;
          font-size: 1.2rem;
          margin: 0 auto 1.5rem;
        }
        
        .step-title {
          font-family: 'Sora', sans-serif;
          font-size: 1.3rem;
          font-weight: 600;
          color: var(--text);
          margin-bottom: 0.75rem;
        }
        
        .step-desc {
          color: var(--text-secondary);
          line-height: 1.6;
        }
        
        /* Integrations */
        .integrations {
          background: #FFF8E7;
          padding: 4rem 2rem;
          border-top: 1px solid #E5E0D5;
        }
        
        .integrations-content {
          max-width: 1000px;
          margin: 0 auto;
          text-align: center;
        }
        
        .int-title {
          font-family: 'Sora', sans-serif;
          font-size: 2rem;
          font-weight: 600;
          margin-bottom: 3rem;
          color: var(--text);
        }
        
        .int-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1.5rem;
        }
        
        .int-card {
          background: #FFFBF0;
          padding: 2rem;
          border-radius: 16px;
          border: 2px solid #E5E0D5;
          transition: all 0.3s;
        }
        
        .int-card:hover {
          border-color: #D97706;
          transform: translateY(-4px);
          box-shadow: 0 8px 24px rgba(217,119,6,0.15);
        }
        
        .int-icon {
          width: 60px;
          height: 60px;
          margin: 0 auto 1rem;
          background: linear-gradient(135deg, #D97706 0%, #FBBF24 100%);
          border-radius: 16px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #1C1917;
        }
        
        .int-name {
          font-size: 1.1rem;
          font-weight: 600;
          color: var(--text);
        }
        
        /* Features Section */
        .features {
          padding: 6rem 2rem;
          background: #FFFBF0;
        }
        
        .features-content {
          max-width: 1200px;
          margin: 0 auto;
        }
        
        .features-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 3rem;
          margin-top: 4rem;
        }
        
        .feature-card {
          text-align: center;
        }
        
        .feature-icon {
          width: 70px;
          height: 70px;
          background: linear-gradient(135deg, #D97706 0%, #FBBF24 100%);
          border-radius: 20px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #1C1917;
          margin: 0 auto 1.5rem;
        }
        
        .feature-title {
          font-family: 'Sora', sans-serif;
          font-size: 1.3rem;
          font-weight: 600;
          color: var(--text);
          margin-bottom: 0.75rem;
        }
        
        .feature-desc {
          color: var(--text-secondary);
          line-height: 1.6;
        }
        
        /* Final CTA */
        .final-cta {
          background: linear-gradient(135deg, #B45309 0%, #D97706 50%, #F59E0B 100%);
          padding: 6rem 2rem;
          text-align: center;
          color: #1C1917;
        }
        
        .cta-content {
          max-width: 700px;
          margin: 0 auto;
        }
        
        .cta-title {
          font-family: 'Sora', sans-serif;
          font-size: 2.5rem;
          font-weight: 700;
          margin-bottom: 1rem;
        }
        
        .cta-subtitle {
          font-size: 1.1rem;
          opacity: 0.9;
          margin-bottom: 2rem;
        }
        
        .btn-white {
          background: #1C1917;
          color: #FBBF24;
          border: none;
          padding: 1.2rem 3rem;
          border-radius: 12px;
          font-size: 1.1rem;
          font-weight: 700;
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          gap: 0.75rem;
          transition: all 0.3s;
          box-shadow: 0 10px 40px rgba(0, 0, 0, 0.25);
        }
        
        .btn-white:hover {
          transform: translateY(-3px);
          box-shadow: 0 15px 50px rgba(0, 0, 0, 0.35);
          color: #FCD34D;
        }
        
        /* Footer */
        footer {
          background: #1C1917;
          color: #A8A29E;
          padding: 2rem;
          text-align: center;
        }
        
        /* Animations */
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        /* Responsive */
        @media (max-width: 1024px) {
          .hero {
            grid-template-columns: 1fr;
            gap: 3rem;
          }
          
          .pain-grid,
          .steps-grid,
          .int-grid,
          .features-grid {
            grid-template-columns: 1fr;
            gap: 2rem;
          }
          
          .hero h1 {
            font-size: 2.5rem;
          }
          
          .phone-mockup {
            max-width: 320px;
          }
        }
      `}</style>
      
      <nav>
        <div className="nav-content">
          <div className="logo">Mentiva AI</div>
          <div className="nav-right">
            <a href="#how" className="nav-link">How it works</a>
            <a href="#integrations" className="nav-link">Integrations</a>
            <button className="lang-toggle" onClick={() => setLang(lang === 'es' ? 'en' : 'es')}>
              <Globe size={16} />
              {lang === 'es' ? 'EN' : 'ES'}
            </button>
          </div>
        </div>
      </nav>
      
      <section className="hero">
        <div className="hero-content">
          <div className="hero-badge">
            <Zap size={14} />
            {t.hero_badge}
          </div>
          
          <h1>{t.hero_title}</h1>
          
          <p>{t.hero_subtitle}</p>
          
          <div className="hero-ctas">
            <button className="btn-primary" onClick={startDemo}>
              <Brain size={20} />
              Get Early Access
              <ArrowRight size={18} />
            </button>
          </div>
        </div>
        
        <div className="phone-mockup">
          <div className="phone-frame">
            <div className="phone-notch"></div>
            <div className="phone-screen">
              {/* Demo header */}
              <div className="chat-header">
                <div className="chat-avatar">
                  <Brain size={24} />
                </div>
                <div className="chat-info">
                  <div className="chat-name">Mentiva Chat</div>
                  <div className="chat-status">
                    <span className="status-dot"></span>
                    Brain check-in · 3 min
                  </div>
                </div>
              </div>

              {/* Demo content */}
              {!showDemo && (
                <div style={{padding: '2rem', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100%'}}>
                  <div style={{fontSize: '2.5rem', marginBottom: '0.75rem'}}>🧠</div>
                  <h3 style={{marginBottom: '0.75rem', color: '#1C1917', fontFamily: 'Sora, sans-serif', textAlign: 'center'}}>Measure your brain attention</h3>
                  <p style={{color: '#57534E', marginBottom: '1.75rem', textAlign: 'center', lineHeight: 1.6, fontSize: '0.95rem'}}>4 context questions + 4 science-inspired challenges. ≈ 3 min. Get an action plan for today.</p>
                  <button className="btn-primary" onClick={startDemo}>
                    <Brain size={18} /> Start brain check-in
                  </button>
                </div>
              )}

              {showDemo && (
                <div style={{display: 'flex', flexDirection: 'column', height: '100%'}}>
                  <div style={{padding: '1rem 1.25rem', borderBottom: '1px solid #E5E0D5'}}>
                    <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.4rem'}}>
                      <div style={{fontWeight: 700, color: '#1C1917', fontSize: '0.9rem'}}>{demoStarted ? `${demoQuestions[questionIndex].emoji} ${demoQuestions[questionIndex].label} · ${questionIndex + 1}/${demoQuestions.length}` : (results ? '🌟 Results' : 'Brain check-in')}</div>
                      <div style={{fontSize: '0.85rem', fontWeight: 700, color: timeLeft <= 5 ? '#ef4444' : '#D97706'}}>{demoStarted && demoQuestions[questionIndex].maxTime > 0 ? `⏰ ${timeLeft}s` : ''}</div>
                    </div>
                    <div style={{height: 3, background: '#E5E0D5', borderRadius: 2}}><div style={{height: 3, background: 'linear-gradient(90deg,#D97706,#FBBF24)', borderRadius: 2, width: `${(questionIndex / demoQuestions.length) * 100}%`, transition: 'width 0.4s ease'}}></div></div>
                  </div>

                  <div style={{padding: '1rem', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '1rem'}}>
                    {!demoStarted && !results && (
                      <div style={{textAlign: 'center', color: '#57534E'}}>Preview mode — press Start to begin the timed challenges.</div>
                    )}

                    {demoStarted && (
                      <div style={{display: 'flex', flexDirection: 'column', gap: '1rem'}}>
                        {demoQuestions[questionIndex].phase === 'context' && (
                          <div style={{fontSize: '0.75rem', fontWeight: 600, color: '#57534E', textTransform: 'uppercase', letterSpacing: '0.08em'}}>Context check-in</div>
                        )}
                        {demoQuestions[questionIndex].phase === 'cognitive' && (
                          <div style={{fontSize: '0.75rem', fontWeight: 600, color: '#D97706', textTransform: 'uppercase', letterSpacing: '0.08em'}}>⚡ Timed challenge</div>
                        )}
                        <p style={{fontSize: '0.93rem', color: '#1C1917', lineHeight: 1.65}}>{demoQuestions[questionIndex].prompt}</p>
                        <div style={{display: 'flex', flexDirection: 'column', gap: '0.5rem'}}>
                          {demoQuestions[questionIndex].options.map((opt, i) => (
                            <button key={i} onClick={() => submitAnswer(opt)} style={{padding: '0.6rem 0.9rem', borderRadius: 10, border: '1.5px solid #E5E0D5', background: demoQuestions[questionIndex].phase === 'cognitive' ? '#FFF8E7' : '#FFFBF0', color: '#1C1917', fontWeight: 500, cursor: 'pointer', textAlign: 'left', fontSize: '0.9rem', transition: 'all 0.15s'}}>{opt}</button>
                          ))}
                        </div>
                      </div>
                    )}

                    {results && (
                      <div style={{textAlign: 'left'}}>
                        {results.score !== undefined ? (
                          <>
                            <div style={{fontSize: '1.1rem', fontWeight: 700, color: '#1C1917', marginBottom: '0.5rem'}}>🧠 Brain score: {results.score}/4</div>
                            <p style={{color: '#57534E', lineHeight: 1.6, fontSize: '0.9rem', marginBottom: results.plan ? '0.75rem' : 0}}>{results.feedback}</p>
                            {results.plan && (
                              <div style={{background: '#FFF8E7', border: '1px solid #FBBF24', borderRadius: 10, padding: '0.75rem', marginTop: '0.5rem'}}>
                                <div style={{fontSize: '0.75rem', fontWeight: 700, color: '#D97706', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.4rem'}}>Your action plan</div>
                                <p style={{fontSize: '0.88rem', color: '#1C1917', lineHeight: 1.65}}>{results.plan}</p>
                              </div>
                            )}
                          </>
                        ) : (
                          <>
                            <div style={{fontSize: '1.05rem', fontWeight: 700, color: '#1C1917', marginBottom: '0.5rem', textAlign: 'center'}}>✅ Check-in complete!</div>
                            <p style={{color: '#57534E', lineHeight: 1.6, fontSize: '0.9rem', textAlign: 'center', marginBottom: '1rem'}}>Analyzing your brain state and context…</p>
                            <button className="btn-primary" style={{display: 'flex', margin: '0 auto'}} onClick={analyzeResults}>
                              <Sparkles size={16} /> Get my personalized plan
                            </button>
                          </>
                        )}
                      </div>
                    )}
                  </div>

                  <div style={{padding: '1rem', borderTop: '1px solid #E5E0D5', display: 'flex', justifyContent: 'space-between'}}>
                    {!demoStarted && !results && (
                      <div style={{display: 'flex', gap: '0.5rem'}}>
                        <button className="btn-primary" onClick={() => { setDemoStarted(true); setTimeLeft(demoQuestions[questionIndex].maxTime); }}>
                          Start
                        </button>
                        <button className="btn-secondary" onClick={() => { setShowDemo(false); setDemoStarted(false); }}>
                          Close
                        </button>
                      </div>
                    )}

                    {demoStarted && (
                      <div style={{display: 'flex', gap: '0.5rem'}}>
                        <button className="btn-secondary" onClick={() => { submitAnswer(null); }}>Skip</button>
                      </div>
                    )}

                    {results && (
                      <div style={{display: 'flex', gap: '0.5rem'}}>
                        <button className="btn-primary" onClick={() => { startDemo(); }}>
                          Retry
                        </button>
                        <button className="btn-secondary" onClick={() => { setShowDemo(false); setResults(null); }}>
                          Close
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
      
      <section className="pain-section">
        <div className="pain-content">
          <h2 className="section-title">{t.pain_title}</h2>
          <p className="section-subtitle">{t.pain_subtitle}</p>
          
          <div className="pain-grid">
            <div className="pain-card">
              <div className="pain-icon">
                <Target size={30} />
              </div>
              <h3 className="pain-title">{t.pain1_title}</h3>
              <p className="pain-desc">{t.pain1_desc}</p>
            </div>
            
            <div className="pain-card">
              <div className="pain-icon">
                <Flame size={30} />
              </div>
              <h3 className="pain-title">{t.pain2_title}</h3>
              <p className="pain-desc">{t.pain2_desc}</p>
            </div>
            
            <div className="pain-card">
              <div className="pain-icon">
                <Activity size={30} />
              </div>
              <h3 className="pain-title">{t.pain3_title}</h3>
              <p className="pain-desc">{t.pain3_desc}</p>
            </div>
          </div>
        </div>
      </section>
      
      <section className="how-it-works" id="how">
        <div className="how-content">
          <h2 className="section-title" style={{textAlign: 'center'}}>{t.how_title}</h2>
          
          <div className="steps-grid">
            <div className="step-card">
              <div className="step-number">1</div>
              <h3 className="step-title">{t.step1_title}</h3>
              <p className="step-desc">{t.step1_desc}</p>
            </div>
            
            <div className="step-card">
              <div className="step-number">2</div>
              <h3 className="step-title">{t.step2_title}</h3>
              <p className="step-desc">{t.step2_desc}</p>
            </div>
            
            <div className="step-card">
              <div className="step-number">3</div>
              <h3 className="step-title">{t.step3_title}</h3>
              <p className="step-desc">{t.step3_desc}</p>
            </div>
          </div>
        </div>
      </section>
      
      <section className="integrations" id="integrations">
        <div className="integrations-content">
          <h3 className="int-title">{t.int_title}</h3>
          
          <div className="int-grid">
            <div className="int-card">
              <div className="int-icon">
                <Watch size={30} />
              </div>
              <div className="int-name">{t.int_oura}</div>
            </div>
            
            <div className="int-card">
              <div className="int-icon">
                <Activity size={30} />
              </div>
              <div className="int-name">{t.int_whoop}</div>
            </div>
            
            <div className="int-card">
              <div className="int-icon">
                <Watch size={30} />
              </div>
              <div className="int-name">{t.int_apple}</div>
            </div>
            <div className="int-card">
              <div className="int-icon">
                <Activity size={30} />
              </div>
              <div className="int-name">Strava</div>
            </div>
          </div>
        </div>
      </section>

      {/* Doctor appointment section */}
      <section style={{background: '#FFFBF0', padding: '5rem 2rem', borderTop: '1px solid #E5E0D5'}}>
        <div style={{maxWidth: 780, margin: '0 auto', textAlign: 'center'}}>
          <div style={{fontSize: '2.5rem', marginBottom: '1rem'}}>🧑‍⚕️</div>
          <h2 style={{fontFamily: 'Sora, sans-serif', fontSize: '2rem', fontWeight: 700, color: '#1C1917', marginBottom: '1rem', letterSpacing: '-0.02em'}}>Ready for a personalized brain health plan?</h2>
          <p style={{color: '#57534E', fontSize: '1.1rem', lineHeight: 1.7, marginBottom: '2rem'}}>Connect with a cognitive health specialist for your initial assessment — tailored to your Mentiva profile, wearable data, and daily patterns.</p>
          <button className="btn-primary" style={{margin: '0 auto', display: 'inline-flex'}}>
            Schedule with a doctor <ArrowRight size={18} style={{marginLeft: 8}} />
          </button>
          <p style={{marginTop: '1.25rem', color: '#A8A29E', fontSize: '0.9rem'}}>Free initial consultation • Covered by most health plans • Remote or in-person</p>
        </div>
      </section>
      
      <section className="features">
        <div className="features-content">
          <h2 className="section-title" style={{textAlign: 'center'}}>
            How we infer your state
          </h2>
          
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">
                <Brain size={32} />
              </div>
              <h3 className="feature-title">{t.feature1_title}</h3>
              <p className="feature-desc">{t.feature1_desc}</p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">
                <Gauge size={32} />
              </div>
              <h3 className="feature-title">{t.feature2_title}</h3>
              <p className="feature-desc">{t.feature2_desc}</p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">
                <Zap size={32} />
              </div>
              <h3 className="feature-title">{t.feature3_title}</h3>
              <p className="feature-desc">{t.feature3_desc}</p>
            </div>
          </div>
        </div>
      </section>
      
      <section className="final-cta">
        <div className="cta-content">
          <h2 className="cta-title">{t.cta_title}</h2>
          <p className="cta-subtitle">{t.cta_subtitle}</p>
          
          <button className="btn-white">
            <Brain size={24} />
            Start Now
            <ArrowRight size={20} />
          </button>
        </div>
      </section>
      
      <footer>
        <p>{t.footer_backed}</p>
      </footer>
    </div>
  );
};

export default MentivaAI;