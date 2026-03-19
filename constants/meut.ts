import BrandsExp from "@/Icons/Brand";
import Culture from "@/Icons/Culture";
import Eduaction from "@/Icons/Education";
import Tech from "@/Icons/Tech";

type LogoProps = { w: number; h: number };

type Section = {
  subpage: string;
  description: string;
  formats: string[];
  logo: React.ComponentType<LogoProps>;
};

export const data: Record<string, Section> = {
  "Brand&Experience": {
    subpage: "Brand & Experience",
    description: `Culture Marketing ist mehr als ein Trendbegriff – es ist eine Chance für Marken, Teil kultureller Bewegungen zu
werden und Verantwortung für die Räume zu übernehmen, in denen Kultur entsteht.
THE SPACE schafft dafür den Rahmen: einen Ort, an dem Marken Erlebnisräume gestalten und in direkten
Austausch mit Besucher, Communities und Kulturschaffenden treten.
Mitten am Kurfürstendamm nutzen wir eine Baulücke als urbanen Experimentierraum aus fast vierzig
Hochseecontainern. Ein großformatiges Mural als XXL Canvas in prominenter Lage, ein modularer Event- und
Pop-up-Space sowie ein erfahrenes Team aus Event-, Kultur- und Kreativprofis ermöglichen außergewöhnliche
Brand Activations, Launches und Showrooms im urbanen Kontext.
Gleichzeitig verstehen wir THE SPACE als kleines Modell dafür, wie Marken Kultur mittragen können: Bei
größeren Aktivierungen fließen fünf Prozent als Kulturpauschale direkt in die Finanzierung künstlerischer Projekte
und Programme vor Ort.
So schaffen wir einen Ort, an dem Marken sichtbar werden, Kultur unterstützt wird und neue Ideen im Austausch
entstehen.`,
    formats: [
      `Brand Aktivierungen mit Community-Einbindung`,
      `Produktpräsentationen mit inhaltlichem Kontext`,
      `Immersive Installationen & interaktive Experiences`,
      `Kampagnenräume mit PR-, Social- und Live-Verzahnung`,
    ],
    logo: BrandsExp,
  },
  "Culture&Community": {
    subpage: "Culture & Community",
    description: `THE SPACE ist ein Ort für zeitgenössische Kultur und lebendige Communities – offen, nahbar und mitten in der Stadt am Kurfürstendamm.

Hier treffen kreative Szenen, lokale Communities und neue Perspektiven aufeinander. Wir schaffen Raum für Austausch, gemeinsames Erleben und kulturelle Impulse, die Menschen verbinden und Dialog ermöglichen.

Kultur ist bei uns kein Rahmenprogramm, sondern der Kern des Ortes. THE SPACE bietet Künstlern, Creators und kulturellen Initiativen eine sichtbare Bühne im Herzen der Stadt – einen zentralen Ort, an dem Ideen geteilt, neue Perspektiven entdeckt und Menschen zusammengebracht werden.

Wo sinnvoll, schlagen wir Brücken zu passenden kommerziellen Projekten und Kooperationen, um kreative Arbeit sichtbar zu machen und neue Möglichkeiten zu eröffnen.`,
    formats: [
      "Ausstellungen & Murals",
      "Performances & Musikformate",
      "Community-Events & Screenings",
      "Kollaborative Kulturprojekte",
    ],
    logo: Culture,
  },

  "tech-future-urban-lab": {
    subpage: "Tech, Future & Urban Lab",
    description: `THE SPACE versteht sich als Experimentierraum für technologische Innovation, neue Denkansätze und gesellschaftliche Transformation.

Im Kooperationsformat "ALREADY POSSIBLE" untersuchen wir nicht ferne Zukünfte, sondern wie Zukunft bereits heute entsteht – in Laboren, Netzwerken, Studios und Communities.

Wir bringen Akteur:innen aus AI, Design, Gaming, Wissenschaft, Start-ups, Kunst und Industrie zusammen und schaffen Formate, die Technologie in einen kulturellen Kontext setzen.

Talks, Showcases, Installationen und hybride Labs werden zu offenen Experimenten, in denen neue Technologien und Perspektiven aufeinandertreffen.

So wird THE SPACE zu einem Ort, an dem Zukunft sichtbar und erlebbar wird.`,
    formats: [
      "Talks & Future Conversations",
      "Showcases & Prototypen",
      "Interaktive Installationen",
      "Hybrid Labs & Experimente",
    ],
    logo: Tech,
  },

  "Education&Wellbeing": {
    subpage: "Education & Wellbeing",
    description: `Education & Wellbeing verbindet Diskurs, Co-Learning und reflektierende Formate mit Räumen für Achtsamkeit und persönliche Entwicklung.

Panels, Talks und Workshops bringen Stimmen aus Wissenschaft, Kreativwirtschaft, Technologie und Gesellschaft zusammen und ermöglichen Austausch auf Augenhöhe.

Dabei geht es nicht nur um Wissensvermittlung, sondern um kollektives Lernen – Ideen werden diskutiert, Erfahrungen geteilt und neue Perspektiven entwickelt.

Gleichzeitig schaffen wir bewusste Gegenräume zum urbanen Alltag. Wellbeing-Formate und offene Lernräume laden dazu ein, innezuhalten und neue Impulse ganzheitlich zu erleben.

So entsteht ein Umfeld, in dem Lernen, Denken und Wohlbefinden zusammenkommen.`,
    formats: [
      "Panels & Talks",
      "Workshops & Co-Learning Sessions",
      "Outdoor-Klassenzimmer & offene Lernformate",
      "Wellbeing-Sessions & Mindfulness Formate",
    ],
    logo: Eduaction,
  },
};
