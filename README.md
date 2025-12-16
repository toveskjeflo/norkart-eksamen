# norkart-eksamen
Prosjektet inkluderer:
- Minst 3 sider - forside (index), bestilling (produkter), bestillingsskjema (modal), 
- OpenAI-basert chatbot - chat for kunde feks kan legge inn ønske om messeutstyr som mangler
- Ett tredjeparts-API
- Responsivt design
- Klient-side validering
- Full tilgjengelighet (WCAG 2.1 AA)

##  Funksjonalitet
- Chatbot med OpenAI API (brukeren må legge inn egen API-nøkkel)
- Integrasjon mot tredjeparts-API (se nedenfor)
- Navigasjon mellom flere sider
- Formvalidering i JavaScript
- Mobilvennlig layout

##  Teknologier brukt
- **HTML5**
- **CSS3 (Flexbox/Grid)**
- **JavaScript (ES6+)**
- **OpenAI API**
- **Tredjeparts API**

##  API-nøkler
**OBS: Ingen ekte API-nøkler er inkludert.**  
I `script.js` legger du inn din egen:
```javascript
const OPENAI_API_KEY = "SETT_INN_DIN_EGEN_NØKKEL_HER";

