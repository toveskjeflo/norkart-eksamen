# norkart-eksamen

Prosjektet inkluderer:
- 2 sider med navigasjon - forside (index.html) og bestillingsside (produkter.html)
- Handlekurv med bestillingsskjema (modal dialog)
- OpenAI-basert chatbot - chat for kunde som kan stille spørsmål om messeutstyr
- Responsivt design
- Klient-side validering
- Tilgjengelighet (WCAG 2.1 AA)

## Funksjonalitet
- **Produktkatalog**: Visning av rollups og messevegger med filteringsmuligheter
- **Handlekurv**: Legg til produkter i handlekurv og se totalsum
- **Bestillingsskjema**: Fyll ut kontaktinformasjon, hente-/returdato og fraktområde
- **Lagerstatussystem**: Viser tilgjengelige produkter og forventet returadto for utlånte produkter
- **Venteliste**: Mulighet til å melde seg på venteliste for utlånte produkter
- **Chatbot med OpenAI API**: AI-assistent som kan svare på spørsmål om produkter og bestilling
- **Navigasjon**: Topp-navigasjonsmeny med lenker mellom forsiden og bestillingssiden
- **Responsivt design**: Mobilvennlig layout med optimalisert handlekurv-dialog for små skjermer

## Teknologier brukt
- **HTML5**
- **CSS3 (Flexbox/Grid)**
- **JavaScript (ES6+)**
- **OpenAI API** (GPT-4o-mini)

## API-nøkler
**OBS: Ingen ekte API-nøkler er inkludert.**  
I `js/main.js` (linje 211) legger du inn din egen OpenAI API-nøkkel:
```javascript
"Authorization": "Bearer YOUR_API_KEY_HERE"
```

## Filstruktur
```
norkart-eksamen/
├── index.html          # Forside
├── produkter.html      # Bestillingsside med produktkatalog
├── CSS/
│   └── style.css       # Styling for hele nettstedet
├── js/
│   └── main.js         # JavaScript for handlekurv, chatbot og produktlogikk
└── README.md           # Denne filen
```

## Slik bruker du prosjektet
1. Åpne `index.html` i en nettleser
2. Naviger til bestillingssiden ved å klikke på "Bestill produkter" i navigasjonsmenyen
3. Velg produkter fra katalogen og legg dem i handlekurven
4. Klikk på "Handlekurv" for å fullføre bestillingen
5. Bruk AI-chatbot ved å klikke på "Chat med AI"-knappen (krever OpenAI API-nøkkel)
