import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'pt';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Extended translation object with complete Portuguese support
const translations = {
  // Navigation
  'nav.home': {
    en: 'Home',
    pt: 'Início'
  },
  'nav.mentoring': {
    en: 'Mentoring',
    pt: 'Mentoria'
  },
  'nav.consultation': {
    en: 'Consultation',
    pt: 'Consulta'
  },
  'nav.blog': {
    en: 'Blog',
    pt: 'Blog'
  },
  'nav.resources': {
    en: 'Resources',
    pt: 'Recursos'
  },
  'nav.scientificevidence': {
    en: 'Scientific Evidence',
    pt: 'Evidência Científica'
  },
  'nav.about': {
    en: 'About Us',
    pt: 'Sobre Nós'
  },
  'nav.contact': {
    en: 'Contact Us',
    pt: 'Contato'
  },
  
  // NotFound Page
  'notfound.title': {
    en: '404',
    pt: '404'
  },
  'notfound.subtitle': {
    en: 'Oops! Page not found',
    pt: 'Oops! Página não encontrada'
  },
  'notfound.gohome': {
    en: 'Return to Home',
    pt: 'Voltar para a página inicial'
  },
  
  // CharacterAnalysis Page
  'char_analysis.back': { en: 'Back to Consultation', pt: 'Voltar para Consulta' },
  'char_analysis.title': { en: 'Character Analysis Mapping Session', pt: 'Sessão de Mapeamento de Análise de Caráter' },
  'char_analysis.session_info': { en: '1 Session', pt: '1 Sessão' },
  'char_analysis.description1': { en: 'A foundational 1-on-1 session to understand your character structure through BodyMind Integration.', pt: 'Uma sessão individual fundamental para entender sua estrutura de caráter através da Integração Corpo-Mente.' },
  'char_analysis.description2': { en: 'Discover the blueprint of your emotional patterns and unlock the wisdom your body holds about who you truly are.', pt: 'Descubra o mapa de seus padrões emocionais e desvende a sabedoria que seu corpo guarda sobre quem você realmente é.' },
  'char_analysis.cta.title': { en: 'Begin Your Journey', pt: 'Comece Sua Jornada' },
  'char_analysis.cta.description': { en: 'Start with a foundational understanding of your character structure.', pt: 'Comece com um entendimento fundamental da sua estrutura de caráter.' },
  'char_analysis.cta.button': { en: 'Book Your Session', pt: 'Agende Sua Sessão' },

  // VagusNerveReset Page
  'vagus.back': { en: 'Back to Consultation', pt: 'Voltar para Consulta' },
  'vagus.title': { en: 'Vagus Nerve Reset + EFT + Aromatherapy', pt: 'Reset do Nervo Vago + EFT + Aromaterapia' },
  'vagus.description1': { en: 'A calming session combining nervous system regulation, tapping therapy, and sensory healing.', pt: 'Uma sessão calmante que combina regulação do sistema nervoso, terapia de tapping e cura sensorial.' },
  'vagus.description2': { en: 'Experience deep relaxation and nervous system reset through this integrated healing approach.', pt: 'Experimente um relaxamento profundo e um reset do sistema nervoso através desta abordagem de cura integrada.' },
  'vagus.cta.title': { en: 'Reset & Restore', pt: 'Reset & Restauração' },
  'vagus.cta.description': { en: 'Experience profound nervous system healing and regulation.', pt: 'Experimente uma cura e regulação profundas do sistema nervoso.' },
  'vagus.cta.button': { en: 'Book Your Session', pt: 'Agende Sua Sessão' },

  // NutritionBeyondPlate Page
  'nutrition.back': { en: 'Back to Consultation', pt: 'Voltar para Consulta' },
  'nutrition.title': { en: 'Nutrition Beyond the Plate', pt: 'Nutrição Além do Prato' },
  'nutrition.p1': { en: 'Emotional patterns, survival traits, and the hunger that food can\'t touch.', pt: 'Padrões emocionais, traços de sobrevivência e a fome que a comida não alcança.' },
  'nutrition.p2': { en: 'We all want to live long, vibrant, healthy lives.<br />But true health cannot be compartmentalized.', pt: 'Todos nós queremos viver vidas longas, vibrantes e saudáveis.<br />Mas a verdadeira saúde não pode ser compartimentalizada.' },
  'nutrition.p3': { en: 'Mental health, emotional well-being, physical care — they are not separate journeys.<br />They\'re the same path, walked on different layers.', pt: 'Saúde mental, bem-estar emocional, cuidado físico — não são jornadas separadas.<br />São o mesmo caminho, percorrido em diferentes camadas.' },
  'nutrition.p4': { en: 'And while many obsess over clean food and perfect routines,<br />they often forget to ask:<br /><em>What am I emotionally feeding on?</em><br /><em>What am I holding in, instead of releasing?</em>', pt: 'E enquanto muitos se obsediam com comida limpa e rotinas perfeitas,<br />eles frequentemente se esquecem de perguntar:<br /><em>Do que estou me alimentando emocionalmente?</em><br /><em>O que estou guardando, em vez de liberar?</em>' },
  'nutrition.card.p1': { en: 'Weight gain is not always about food.<br />It\'s often about protection.', pt: 'O ganho de peso nem sempre é sobre comida.<br />Muitas vezes, é sobre proteção.' },
  'nutrition.card.p2': { en: 'It\'s your body\'s intelligent way of saying:<br />"I\'m overwhelmed."<br />"I need space."<br />"I don\'t know how to ask for help, so I carry everything instead."', pt: 'É a maneira inteligente do seu corpo dizer:<br />"Estou sobrecarregado."<br />"Preciso de espaço."<br />"Não sei como pedir ajuda, então carrego tudo em vez disso."' },
  'nutrition.p5': { en: 'Food becomes a soothing ritual for deeper wounds:', pt: 'A comida se torna um ritual calmante para feridas mais profundas:' },
  'nutrition.list.item1': { en: '• The perfectionist weight of the Rigid character', pt: '• O peso perfeccionista do caráter Rígido' },
  'nutrition.list.item2': { en: '• The craving for love of the Oral', pt: '• O desejo por amor do Oral' },
  'nutrition.list.item3': { en: '• The silent endurance of the Masochist', pt: '• A resistência silenciosa do Masoquista' },
  'nutrition.list.item4': { en: '• The need for control of the Psychopath', pt: '• A necessidade de controle do Psicopata' },
  'nutrition.list.item5': { en: '• The emotional withdrawal of the Schizoid', pt: '• O retraimento emocional do Esquizoide' },
  'nutrition.p6': { en: 'What you\'re eating is just one part of the story.<br />the other part is the pain you swallowed,<br />the tears you silenced,<br />the boundaries you never spoke.', pt: 'O que você está comendo é apenas uma parte da história.<br />A outra parte é a dor que você engoliu,<br />as lágrimas que você silenciou,<br />as fronteiras que você nunca falou.' },
  'nutrition.p7': { en: '✨ It\'s not a willpower problem.<br />It\'s a story the body keeps holding — silently begging to be heard.', pt: '✨ Não é um problema de força de vontade.<br />É uma história que o corpo continua guardando — silenciosamente implorando para ser ouvida.' },
  'nutrition.p8': { en: 'This space exists to help you listen — to your hunger, your body, your truth.<br />To reconnect what got fragmented.<br />To heal from the root, and not just the symptom.', pt: 'Este espaço existe para ajudá-lo a ouvir — sua fome, seu corpo, sua verdade.<br />Para reconectar o que foi fragmentado.<br />Para curar pela raiz, e não apenas pelo sintoma.' },
  'nutrition.p9': { en: 'Because what you carry isn\'t just weight…<br />It\'s emotion, protection, and memory.', pt: 'Porque o que você carrega não é apenas peso…<br />É emoção, proteção e memória.' },
  'nutrition.p10': { en: 'It\'s a story the body keeps holding, silently waiting to be heard.', pt: 'É uma história que o corpo continua guardando, silenciosamente esperando para ser ouvida.' },
  'nutrition.cta.title': { en: 'Ready to Begin?', pt: 'Pronto para Começar?' },
  'nutrition.cta.description': { en: 'Transform your relationship with food, body, and emotional well-being.', pt: 'Transforme sua relação com a comida, o corpo e o bem-estar emocional.' },
  'nutrition.cta.button': { en: 'Book Your Program', pt: 'Agende seu Programa' },

  // Scientific Evidence Page
  'scientific.hero.title': {
    en: 'Scientific Evidence',
    pt: 'Evidência Científica'
  },
  'scientific.hero.subtitle': {
    en: 'Explore the research and evidence behind our character development methodologies.',
    pt: 'Explore a pesquisa e evidências por trás de nossas metodologias de desenvolvimento de caráter.'
  },
  'scientific.downloads.title': {
    en: 'Research Papers & Studies',
    pt: 'Artigos de Pesquisa & Estudos'
  },
  'scientific.download': {
    en: 'Download PDF',
    pt: 'Baixar PDF'
  },
  'scientific.analysis.title': {
    en: 'Understanding Character Analysis',
    pt: 'Entendendo a Análise de Caráter'
  },
  'scientific.analysis.intro': {
    en: 'Character analysis is a scientific approach to understanding human personality, behavior patterns, and the underlying psychological structures that drive our actions. This field combines insights from psychology, neuroscience, and behavioral science to create comprehensive frameworks for personal development.',
    pt: 'A análise de caráter é uma abordagem científica para entender a personalidade humana, padrões de comportamento e as estruturas psicológicas subjacentes que impulsionam nossas ações. Este campo combina insights da psicologia, neurociência e ciência comportamental para criar estruturas abrangentes para o desenvolvimento pessoal.'
  },
  'scientific.analysis.history.title': {
    en: 'Historical Foundations',
    pt: 'Fundamentos Históricos'
  },
  'scientific.analysis.history.content1': {
    en: 'The study of character has ancient roots, tracing back to Aristotelian virtue ethics and Hippocrates\' theory of temperaments. However, modern characterology emerged in the 19th and 20th centuries as psychologists began applying scientific methods to understand personality development.',
    pt: 'O estudo do caráter tem raízes antigas, remontando à ética das virtudes aristotélica e à teoria dos temperamentos de Hipócrates. No entanto, a caracterologia moderna emergiu nos séculos XIX e XX, quando os psicólogos começaram a aplicar métodos científicos para entender o desenvolvimento da personalidade.'
  },
  'scientific.analysis.history.content2': {
    en: 'The field gained significant momentum with the work of Wilhelm Reich, who developed the concept of character armor, and later with the contributions of Alexander Lowen in bioenergetic analysis. These pioneers laid the groundwork for understanding how psychological patterns manifest in physical and emotional expressions.',
    pt: 'O campo ganhou impulso significativo com o trabalho de Wilhelm Reich, que desenvolveu o conceito de armadura do caráter, e posteriormente com as contribuições de Alexander Lowen na análise bioenergética. Esses pioneiros estabeleceram as bases para entender como os padrões psicológicos se manifestam em expressões físicas e emocionais.'
  },
  'scientific.analysis.founders.title': {
    en: 'Founding Thinkers',
    pt: 'Pensadores Fundadores'
  },
  'scientific.analysis.founders.content': {
    en: 'Key figures in characterology include Carl Jung, whose work on psychological types influenced modern personality theory; Karen Horney, who explored neurotic character patterns; and more recently, researchers like Martin Seligman, who pioneered positive psychology and character strengths research. These thinkers contributed essential frameworks that continue to inform contemporary character development practices.',
    pt: 'Figuras-chave na caracterologia incluem Carl Jung, cujo trabalho sobre tipos psicológicos influenciou a teoria moderna da personalidade; Karen Horney, que explorou padrões de caráter neuróticos; e mais recentemente, pesquisadores como Martin Seligman, que foi pioneiro da psicologia positiva e pesquisa de forças de caráter. Esses pensadores contribuíram com estruturas essenciais que continuam a informar as práticas contemporâneas de desenvolvimento de caráter.'
  },
  'scientific.analysis.modern.title': {
    en: 'Modern Applications',
    pt: 'Aplicações Modernas'
  },
  'scientific.analysis.modern.content': {
    en: 'Today, character analysis incorporates findings from neuroscience, showing how brain plasticity enables character change throughout life. Modern approaches combine traditional psychological insights with evidence-based techniques like cognitive-behavioral therapy, mindfulness practices, and somatic awareness to create holistic development programs that address both psychological and physiological aspects of character transformation.',
    pt: 'Hoje, a análise de caráter incorpora descobertas da neurociência, mostrando como a plasticidade cerebral permite mudanças de caráter ao longo da vida. Abordagens modernas combinam insights psicológicos tradicionais com técnicas baseadas em evidências como terapia cognitivo-comportamental, práticas de mindfulness e consciência somática para criar programas de desenvolvimento holístico que abordam aspectos psicológicos e fisiológicos da transformação do caráter.'
  },
  
  // Home Page
  'home.hero.title': {
    en: 'Character Analysis Mapping Method',
    pt: 'Método de Mapeamento de Análise de Caráter'
  },
  'home.hero.subtitle': {
    en: 'Based on Characterology and BodyMind Integration',
    pt: 'Baseado em Caracterologia e Integração Corpo-Mente'
  },
  'home.hero.description': {
    en: 'Join thousands who have transformed their lives through our proven 8-week character development program led by expert coach Claudia Fisher.',
    pt: 'Junte-se a milhares de pessoas que transformaram suas vidas através do nosso comprovado programa de desenvolvimento de caráter de 8 semanas, liderado pela coach especialista Claudia Fisher.'
  },
  'home.hero.get_started': {
    en: 'Get Started',
    pt: 'Comece Agora'
  },
  'home.manifest.title': {
    en: 'Manifest',
    pt: 'Manifesto'
  },
  'home.manifest.p1': {
    en: 'There comes a moment in every journey…<br />when performance no longer satisfies.<br />When pleasing others becomes too heavy.<br />When the stories we tell ourselves no longer make sense.',
    pt: 'Chega um momento em toda jornada…<br />quando o desempenho não satisfaz mais.<br />Quando agradar aos outros se torna pesado demais.<br />Quando as histórias que contamos a nós mesmos não fazem mais sentido.'
  },
  'home.manifest.p2': {
    en: "That moment is not a crisis.<br />It's a calling.",
    pt: 'Esse momento não é uma crise.<br />É um chamado.'
  },
  'home.manifest.p3': {
    en: "A calling to strip the armor,<br />to pause the noise,<br />to finally meet the version of you that's been waiting —<br />not to be fixed,<br />but to be seen.",
    pt: 'Um chamado para tirar a armadura,<br />pausar o ruído,<br />para finalmente encontrar a versão de você que estava esperando —<br />não para ser consertada,<br />mas para ser vista.'
  },
  'home.manifest.p4': {
    en: "Essence Unveiled is not about perfection, fixing, or becoming someone else.<br />It's about remembering the self that was always there — before the fear, before the masks, before the shoulds.",
    pt: 'Essence Unveiled não é sobre perfeição, conserto ou se tornar outra pessoa.<br />É sobre lembrar o eu que sempre esteve lá — antes do medo, antes das máscaras, antes dos "deveria".'
  },
  'home.manifest.p5': {
    en: 'This is a space for transformation that begins within.<br />Through Character Analysis, body intelligence, and emotional integration,<br />you are invited to reconnect with the truth beneath the defenses.',
    pt: 'Este é um espaço para a transformação que começa por dentro.<br />Através da Análise de Caráter, inteligência corporal e integração emocional,<br />você é convidado a se reconectar com a verdade sob as defesas.'
  },
  'home.manifest.p6': {
    en: "Because your essence is not something you need to build.<br />It's something you were born with.",
    pt: 'Porque sua essência não é algo que você precisa construir.<br />É algo com que você nasceu.'
  },
  'home.manifest.p7': {
    en: "Now it's time to live from it.",
    pt: 'Agora é hora de viver a partir dela.'
  },
  'home.mentor.title': {
    en: 'Meet Your Character Coach',
    pt: 'Conheça Sua Coach de Caráter'
  },
  'home.mentor.subtitle': {
    en: 'Expert in Character Analysis and BodyMind Integration with over 10 years of experience in transformational healing.',
    pt: 'Especialista em Análise de Caráter e Integração Corpo-Mente com mais de 10 anos de experiência em cura transformacional.'
  },
  'home.mentor.story.title': {
    en: 'Why I Chose This Path',
    pt: 'Por Que Escolhi Este Caminho'
  },
  'home.mentor.story.p1': {
    en: "Because clarity didn't come from fixing myself…<br />It came from remembering who I already was.",
    pt: 'Porque a clareza não veio de me consertar…<br />Veio de lembrar quem eu já era.'
  },
  'home.mentor.story.p2': {
    en: 'For years, I was searching — not just for tools or answers —<br />but for something that could finally explain why I felt so disconnected from myself.',
    pt: 'Por anos, eu estava procurando — não apenas por ferramentas ou respostas —<br />mas por algo que pudesse finalmente explicar por que eu me sentia tão desconectada de mim mesma.'
  },
  'home.mentor.story.p3': {
    en: 'I looked confident on the outside.<br />But deep down, I felt small.<br />Inferior.<br />Lost.<br />Unworthy.<br />Like I was always one step away from being "good enough"… but never quite there.',
    pt: 'Eu parecia confiante por fora.<br />Mas no fundo, eu me sentia pequena.<br />Inferior.<br />Perdida.<br />Indigna.<br />Como se estivesse sempre a um passo de ser "boa o suficiente"... mas nunca chegava lá.'
  },
  'home.mentor.story.p4': {
    en: "I was capable — but I couldn't see it.<br />I had gifts — but I couldn't access them.<br />Because I didn't yet know how to accept who I truly was.",
    pt: 'Eu era capaz — mas não conseguia ver.<br />Eu tinha dons — mas não conseguia acessá-los.<br />Porque eu ainda não sabia como aceitar quem eu realmente era.'
  },
  'home.mentor.story.p5': {
    en: 'Then Character Analysis found me.',
    pt: 'Então a Análise de Caráter me encontrou.'
  },
  'home.mentor.story.p6': {
    en: 'And everything changed.',
    pt: 'E tudo mudou.'
  },
  'home.mentor.story.p7': {
    en: 'For the first time, I saw myself with clarity —<br />not as broken,<br />but as someone designed a different way,<br />with specific strengths, sensitivities, and emotional intelligence that had been buried under years of comparison, judgment, and self-doubt.',
    pt: 'Pela primeira vez, eu me vi com clareza —<br />não como quebrada,<br />mas como alguém projetada de uma maneira diferente,<br />com forças, sensibilidades e inteligência emocional específicas que foram enterradas sob anos de comparação, julgamento e auto-dúvida.'
  },
  'home.mentor.story.p8': {
    en: "This tool didn't just describe me.<br />It revealed me.",
    pt: 'Esta ferramenta não apenas me descreveu.<br />Ela me revelou.'
  },
  'home.mentor.story.p9': {
    en: 'And in that moment,<br />something inside shifted —<br />from shame… to understanding.<br />from resistance… to motivation.<br />from fear… to direction.',
    pt: 'E naquele momento,<br />algo dentro de mim mudou —<br />da vergonha… para o entendimento.<br />da resistência… para a motivação.<br />do medo… para a direção.'
  },
  'home.mentor.story.p10': {
    en: 'Today, what moves me is not performance or perfection —<br />but connection.<br />Truth.<br />Authenticity.',
    pt: 'Hoje, o que me move não é o desempenho ou a perfeição —<br />mas a conexão.<br />A verdade.<br />A autenticidade.'
  },
  'home.mentor.story.p11': {
    en: "These aren't just values.<br />They're how I choose to live.<br />And that's why I chose this path:<br />Because it gave meaning to my pain, and purpose to my journey.",
    pt: 'Estes não são apenas valores.<br />São como eu escolho viver.<br />E é por isso que escolhi este caminho:<br />Porque deu significado à minha dor e propósito à minha jornada.'
  },
  'home.mentor.story.p12': {
    en: 'And now, I share it — so you can see yourself the way I finally saw me.',
    pt: 'E agora, eu o compartilho — para que você possa se ver da maneira como eu finalmente me vi.'
  },
  'home.mentor.story.p13': {
    en: 'Clear.<br />Whole.<br />Already enough.',
    pt: 'Clara.<br />Completa.<br />Já suficiente.'
  },
  'home.mentor.story.clear': { en: 'Clear.', pt: 'Clara.' },
  'home.mentor.story.whole': { en: 'Whole.', pt: 'Completa.' },
  'home.mentor.story.enough': { en: 'Already enough.', pt: 'Já suficiente.' },
  'home.mentor.learn_more': {
    en: 'Learn More',
    pt: 'Saiba Mais'
  },
  'home.qualifications.title': {
    en: 'Professional Qualifications',
    pt: 'Qualificações Profissionais'
  },
  'home.qualifications.subtitle': {
    en: 'Built on years of dedicated study, practice, and transformation',
    pt: 'Construídas em anos de estudo dedicado, prática e transformação'
  },
  'home.qualifications.card1.title': {
    en: 'Certified Character Analyst',
    pt: 'Analista de Caráter Certificada'
  },
  'home.qualifications.card1.date': {
    en: 'Since 2009',
    pt: 'Desde 2009'
  },
  'home.qualifications.card1.description': {
    en: '15+ years of specialized training in body-based character analysis and emotional mapping',
    pt: 'Mais de 15 anos de treinamento especializado em análise de caráter baseada no corpo e mapeamento emocional'
  },
  'home.qualifications.card2.title': {
    en: 'Psychology & Somatic Studies',
    pt: 'Psicologia e Estudos Somáticos'
  },
  'home.qualifications.card2.date': {
    en: 'Since 2005',
    pt: 'Desde 2005'
  },
  'home.qualifications.card2.description': {
    en: 'Advanced studies in psychology, somatic therapy, and emotional intelligence',
    pt: 'Estudos avançados em psicologia, terapia somática e inteligência emocional'
  },
  'home.qualifications.card3.title': {
    en: 'International Workshop Leader',
    pt: 'Líder de Workshops Internacionais'
  },
  'home.qualifications.card3.date': {
    en: 'Since 2012',
    pt: 'Desde 2012'
  },
  'home.qualifications.card3.description': {
    en: 'Led transformational workshops across 12 countries, impacting thousands of lives',
    pt: 'Liderou workshops transformacionais em 12 países, impactando milhares de vidas'
  },
  'home.qualifications.card4.title': {
    en: 'Ongoing Professional Development',
    pt: 'Desenvolvimento Profissional Contínuo'
  },
  'home.qualifications.card4.date': {
    en: 'Since Present',
    pt: 'Atualmente'
  },
  'home.qualifications.card4.description': {
    en: 'Continuous learning in neuroscience, trauma-informed practices, and holistic healing',
    pt: 'Aprendizado contínuo em neurociência, práticas informadas sobre trauma e cura holística'
  },
  'home.resources.title': {
    en: 'Educational Resources',
    pt: 'Recursos Educacionais'
  },
  'home.resources.subtitle': {
    en: 'Discover the foundations of Character Analysis through these educational videos',
    pt: 'Descubra os fundamentos da Análise de Caráter através destes vídeos educacionais'
  },
  'home.resources.video1.title': {
    en: 'Introduction to Character Analysis',
    pt: 'Introdução à Análise de Caráter'
  },
  'home.resources.video1.description': {
    en: 'Learn the fundamentals of character mapping and body-based insights.',
    pt: 'Aprenda os fundamentos do mapeamento de caráter e insights baseados no corpo.'
  },
  'home.resources.video2.title': {
    en: 'Emotional Mapping Demonstration',
    pt: 'Demonstração de Mapeamento Emocional'
  },
  'home.resources.video2.description': {
    en: 'Watch a live demonstration of the emotional mapping process.',
    pt: 'Assista a uma demonstração ao vivo do processo de mapeamento emocional.'
  },
  'home.resources.video3.title': {
    en: 'Client Transformation Stories',
    pt: 'Histórias de Transformação de Clientes'
  },
  'home.resources.video3.description': {
    en: 'Real stories of transformation through character development.',
    pt: 'Histórias reais de transformação através do desenvolvimento de caráter.'
  },
  'home.resources.watch_video': {
    en: 'Watch Video',
    pt: 'Assistir Vídeo'
  },
  'home.faq.title': {
    en: 'Frequently Asked Questions',
    pt: 'Perguntas Frequentes'
  },
  'home.faq.subtitle': {
    en: 'Common questions about our character development program',
    pt: 'Perguntas comuns sobre nosso programa de desenvolvimento de caráter'
  },
  'home.faq.q1': {
    en: 'What is character development?',
    pt: 'O que é desenvolvimento de caráter?'
  },
  'home.faq.a1': {
    en: "Character development is a transformative process that helps you understand your authentic self through body-based insights and emotional mapping. It's about recognizing your natural patterns, strengths, and areas for growth to live more aligned with your true essence.",
    pt: 'O desenvolvimento de caráter é um processo transformador que ajuda você a entender seu eu autêntico através de insights baseados no corpo e mapeamento emocional. Trata-se de reconhecer seus padrões naturais, pontos fortes e áreas para crescimento para viver mais alinhado com sua verdadeira essência.'
  },
  'home.faq.q2': {
    en: 'How long does the program take?',
    pt: 'Quanto tempo dura o programa?'
  },
  'home.faq.a2': {
    en: 'Our comprehensive character development program is designed as an 8-week intensive journey. This timeframe allows for deep exploration, integration, and sustainable transformation while providing adequate support throughout your process.',
    pt: 'Nosso programa abrangente de desenvolvimento de caráter é projetado como uma jornada intensiva de 8 semanas. Este período permite exploração profunda, integração e transformação sustentável, fornecendo suporte adequado durante todo o processo.'
  },
  'home.faq.q3': {
    en: 'Is this program suitable for everyone?',
    pt: 'Este programa é adequado para todos?'
  },
  'home.faq.a3': {
    en: "This program is ideal for individuals who feel ready to explore their authentic self and are committed to personal growth. It's particularly beneficial for those who feel disconnected from themselves or are seeking deeper self-entendimento and emotional integration.",
    pt: 'Este programa é ideal para indivíduos que se sentem prontos para explorar seu eu autêntico e estão comprometidos com o crescimento pessoal. É particularmente benéfico para aqueles que se sentem desconectados de si mesmos ou buscam um auto-entendimento e integração emocional mais profundos.'
  },
  'home.faq.q4': {
    en: 'What kind of support will I receive?',
    pt: 'Que tipo de suporte receberei?'
  },
  'home.faq.a4': {
    en: "You'll receive personalized one-on-one coaching sessions with Claudia Fisher, detailed character analysis reports, ongoing emotional support, and access to educational resources. The program includes regular check-ins and customized guidance based on your unique character structure.",
    pt: 'Você receberá sessões de coaching individuais personalizadas com Claudia Fisher, relatórios detalhados de análise de caráter, apoio emocional contínuo e acesso a recursos educacionais. O programa inclui check-ins regulares e orientação personalizada com base em sua estrutura de caráter única.'
  },
  'home.faq.q5': {
    en: 'What is emotional mapping?',
    pt: 'O que é mapeamento emocional?'
  },
  'home.faq.a5': {
    en: 'Emotional mapping is a specialized technique that identifies how emotions are stored and expressed in your body. It reveals your emotional patterns, triggers, and natural responses, helping you understand and work with your emotional intelligence more effectively.',
    pt: 'Mapeamento emocional é uma técnica especializada que identifica como as emoções são armazenadas e expressas em seu corpo. Ele revela seus padrões emocionais, gatilhos e respostas naturais, ajudando você a entender e trabalhar com sua inteligência emocional de forma mais eficaz.'
  },
  'home.faq.q6': {
    en: 'How does character analysis work?',
    pt: 'Como funciona a análise de caráter?'
  },
  'home.faq.a6': {
    en: 'Character analysis examines your body structure, movement patterns, breathing, and emotional expressions to understand your core character structure. This body-based approach reveals unconscious patterns and provides insights into your natural strengths, challenges, and optimal ways of being in the world.',
    pt: 'A análise de caráter examina sua estrutura corporal, padrões de movimento, respiração e expressões emocionais para entender sua estrutura de caráter central. Essa abordagem baseada no corpo revela padrões inconscientes e fornece insights sobre suas forças naturais, desafios e maneiras ideais de estar no mundo.'
  },
  'home.insights.title': {
    en: 'Latest Insights',
    pt: 'Últimos Insights'
  },
  'home.insights.subtitle': {
    en: 'Discover the latest research and insights on character development and emotional transformation.',
    pt: 'Descubra as últimas pesquisas e insights sobre desenvolvimento de caráter e transformação emocional.'
  },
  'home.insights.button': {
    en: 'Explore Scientific Evidence',
    pt: 'Explorar Evidências Científicas'
  },
  
  // Footer
  'footer.description': {
    en: 'Transform your character and unlock your true potential with proven coaching methods.',
    pt: 'Transforme seu caráter e desvende seu verdadeiro potencial com métodos de coaching comprovados.'
  },
  'footer.quicklinks': {
    en: 'Quick Links',
    pt: 'Links Rápidos'
  },
  'footer.connect': {
    en: 'Connect With Us',
    pt: 'Conecte-se Conosco'
  },
  'footer.rights': {
    en: '© 2025 CharacterCoach. All rights reserved.',
    pt: '© 2025 CharacterCoach. Todos os direitos reservados.'
  }
};

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    const translation = translations[key as keyof typeof translations];
    return translation ? translation[language] : key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
