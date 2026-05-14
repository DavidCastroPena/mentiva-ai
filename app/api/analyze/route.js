export async function POST(req) {
  try {
    const body = await req.json();
    const { answers, correctCount, totalCog, feeling, timeOfDay, topGoal, drain } = body;

    const apiUrl = process.env.GEMINI_API_URL;
    const apiKey = process.env.GEMINI_API_KEY;
    const keyType = process.env.GEMINI_API_KEY_TYPE || 'apikey'; // 'apikey' or 'bearer'

    if (!apiUrl || !apiKey) {
      return new Response(JSON.stringify({ error: 'GEMINI_API_URL or GEMINI_API_KEY not set' }), { status: 500 });
    }

    // Build a rich prompt with full context
    const prompt = `You are Mentiva AI, a cognitive health assistant. A user just completed a 3-minute brain check-in.

Context about them right now:
- Feeling: ${feeling || 'not provided'}
- Time of day: ${timeOfDay || 'not provided'}
- Top goal today: ${topGoal || 'not provided'}
- Energy drain: ${drain || 'not provided'}

Cognitive challenge results: ${correctCount ?? 0} out of ${totalCog ?? 4} correct (timed challenges on memory, attention, sequence, and speed).

Detailed answers: ${JSON.stringify(answers)}

Return JSON exactly in this format (no markdown, no extra text):
{"score": <number 0-4>, "feedback": "<2-3 sentence personalized insight about their brain state today>", "plan": "<2-3 concrete action items tailored to their context, e.g. focus block timing, energy management, top focus task>"}

Be warm, science-informed, and specific to their context. Do not mention MoCA or clinical diagnosis.`;

    const headers = { 'Content-Type': 'application/json' };
    let url = apiUrl;
    if (keyType === 'bearer') headers['Authorization'] = `Bearer ${apiKey}`;
    else url = `${apiUrl}?key=${apiKey}`;

    // Gemini generateContent payload format
    const payload = {
      contents: [{ parts: [{ text: prompt }] }],
      generationConfig: { temperature: 0.7, maxOutputTokens: 512 },
    };

    const r = await fetch(url, { method: 'POST', headers, body: JSON.stringify(payload) });
    const data = await r.json();

    // Extract text from Gemini generateContent response
    let text = '';
    if (data.candidates?.[0]?.content?.parts?.[0]?.text) {
      text = data.candidates[0].content.parts[0].text;
    } else {
      text = JSON.stringify(data);
    }

    // Attempt to parse JSON from model text (strip markdown fences if present)
    try {
      const clean = text.replace(/^```(?:json)?\s*/i, '').replace(/\s*```$/, '').trim();
      const parsed = JSON.parse(clean);
      return new Response(JSON.stringify({ ok: true, result: parsed }), { status: 200 });
    } catch (e) {
      return new Response(JSON.stringify({ ok: true, result: { raw: text } }), { status: 200 });
    }
  } catch (err) {
    return new Response(JSON.stringify({ error: String(err) }), { status: 500 });
  }
}
