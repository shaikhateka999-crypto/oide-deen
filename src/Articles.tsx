import { useEffect, useState } from "react";
import { Link, Routes, Route, useParams, useNavigate } from "react-router-dom";
import "./App.css";

type Language = "ja" | "en";

type Article = {
  id: string;
  title: Record<Language, string>;
  description: Record<Language, string>;
  reference: string;
  arabic: string;
  translation: Record<Language, string>;
  body: Record<Language, string[]>;
};

const articles: Article[] = [
  {
    id: "purpose",
    title: {
      ja: "人生の目的とは何でしょうか？",
      en: "What Is the Purpose of Life?",
    },
    description: {
      ja: "私たちはなぜ存在し、何のために生きているのでしょうか。クルアーンから考えてみましょう。",
      en: "Why are we here, and what is the purpose of our existence? Explore this question through the Quran.",
    },
    reference: "Quran 51:56",
    arabic: "وَمَا خَلَقْتُ الْجِنَّ وَالْإِنسَ إِلَّا لِيَعْبُدُونِ",
    translation: {
      ja: "われはジンと人間を、われに仕えさせるために創造した。",
      en: "And I did not create the jinn and mankind except to worship Me.",
    },
    body: {
      ja: [
        "私たちは、なぜ生きているのでしょうか。人生には、仕事、勉強、家族、夢など、さまざまな大切なものがあります。しかし、そのすべての奥に、もっと深い問いがあります。「私たちは何のために存在しているのでしょうか。」",
        "クルアーンのスーラ51章56節では、アッラーはジンと人間を、かれを崇拝するために創造したと教えています。",
        "イスラームにおける崇拝は、礼拝だけを意味するものではありません。アッラーを信じ、誠実に生き、親に親切にし、人々を助け、正直に行動することも、イスラームの教えに沿った正しい意図を持って行えば、信仰を実践する一部となります。",
        "私たちは人生のすべてを理解できるわけではありません。困難や悲しみを経験することもあります。それでも、人生の目的を考えることは、日々の選択に意味を見いだす助けになります。",
        "自分自身に問いかけてみましょう。私の行動は、誠実さ、思いやり、正義につながっているでしょうか。今日からできる小さな善い行いは何でしょうか。",
        "イスラームでは、人生は単に時間を過ごすためだけのものではありません。創造主を知り、かれを崇拝し、善い行いを通して人生を歩む機会なのです。",
      ],
      en: [
        "Why are we alive? Life contains many important things: work, education, family, and personal dreams. Yet beneath all these things lies a deeper question: What is the purpose of our existence?",
        "In Surah Adh-Dhariyat, verse 56, the Quran teaches that Allah created jinn and humankind to worship Him.",
        "In Islam, worship is not limited to formal prayer. Believing in Allah, living sincerely, treating parents kindly, helping people, and acting honestly can also become part of practising faith when done with the right intention and in ways consistent with Islamic teachings.",
        "We cannot understand everything that happens in life. We may experience hardship, sadness, and uncertainty. Still, reflecting on our purpose can help us find direction in our daily choices.",
        "Ask yourself: Do my actions reflect sincerity, compassion, and justice? What small good deed can I do today?",
        "In Islam, life is not simply about passing time. It is an opportunity to know and worship the Creator and to live with faith and good character.",
      ],
    },
  },
  {
    id: "mercy",
    title: {
      ja: "アッラーの慈悲を決して諦めないで",
      en: "Never Despair of Allah’s Mercy",
    },
    description: {
      ja: "過ちを犯したときも、悔い改めてアッラーに立ち返る道があります。",
      en: "Even after making mistakes, there is a path to repentance and returning to Allah.",
    },
    reference: "Quran 39:53",
    arabic:
      "قُلْ يَا عِبَادِيَ الَّذِينَ أَسْرَفُوا عَلَىٰ أَنفُسِهِمْ لَا تَقْنَطُوا مِن رَّحْمَةِ اللَّهِ",
    translation: {
      ja: "「自分自身に対して度を越したことのある、わがしもべたちよ、アッラーの慈悲に絶望してはならない。」",
      en: "“O My servants who have transgressed against themselves, do not despair of the mercy of Allah.”",
    },
    body: {
      ja: [
        "誰でも間違いを犯すことがあります。過去の選択を後悔し、自分はもう許されないのではないかと感じることもあるでしょう。しかし、イスラームは人々に絶望するよう教えているのではありません。",
        "クルアーンのスーラ39章53節では、アッラーの慈悲に絶望してはならないと教えられています。この節は、過ちを認め、心から悔い改めてアッラーに立ち返る希望を与えてくれます。",
        "悔い改めとは、ただ言葉で謝ることだけではありません。自分の過ちを認め、後悔し、悪い行いをやめ、再び同じ過ちを繰り返さないよう努力することが大切です。他人の権利を侵害した場合には、その権利を回復するためにできることも考えましょう。",
        "アッラーの慈悲を信じることは、過ちを軽く考えることではありません。希望を持ちながら、自分を改善する努力を続けることです。",
        "もし今、過去の過ちで心が重くなっているなら、悔い改めること、善い行いを始めること、そして正しい道を歩もうとすることから始めてみましょう。",
      ],
      en: [
        "Everyone makes mistakes. We may regret past choices and wonder whether we can ever be forgiven. But Islam does not teach people to give up hope.",
        "In Surah Az-Zumar, verse 53, the Quran teaches us not to despair of Allah’s mercy. This verse offers hope to those who recognise their mistakes, sincerely repent, and turn back to Allah.",
        "Repentance is more than saying sorry. It involves recognising the wrong, feeling sincere regret, stopping the sinful action, and making a genuine effort not to repeat it. If another person’s rights were violated, we should also consider how to make things right.",
        "Trusting in Allah’s mercy does not mean treating wrongdoing lightly. It means maintaining hope while continuing to work on ourselves.",
        "If past mistakes weigh heavily on your heart, begin with sincere repentance, good deeds, and a renewed effort to follow the right path.",
      ],
    },
  },
  {
    id: "kindness",
    title: {
      ja: "善い言葉と親切の大切さ",
      en: "The Importance of Kind Words and Kindness",
    },
    description: {
      ja: "日々の小さな親切や優しい言葉が、なぜ大切なのかを学びましょう。",
      en: "Discover why small acts of kindness and gentle words matter in everyday life.",
    },
    reference: "Quran 2:83",
    arabic: "وَقُولُوا لِلنَّاسِ حُسْنًا",
    translation: {
      ja: "人々に善い言葉を語りなさい。",
      en: "Speak kindly to people.",
    },
    body: {
      ja: [
        "親切とは、特別なことを成し遂げるときだけに必要なものではありません。毎日の会話、家族との接し方、困っている人への対応など、小さな場面にも親切を示す機会があります。",
        "クルアーンのスーラ2章83節では、人々に善い言葉を語るよう教えています。言葉は人の心を励ますこともあれば、深く傷つけることもあります。だからこそ、何を言うかだけでなく、どのように言うかも大切です。",
        "親切は、言葉だけでなく行動にも表れます。困っている人を助けること、約束を守ること、相手の話をよく聞くこと、そして人を公平に扱うことも、日々実践できる大切な行いです。",
        "意見が違うときでも、相手を侮辱する必要はありません。敬意を持って話し、正直でありながら思いやりを忘れないことが大切です。",
        "今日、誰かに優しい言葉をかけてみませんか。小さな親切でも、誠実な気持ちから行うことには意味があります。",
      ],
      en: [
        "Kindness is not only needed when we do something extraordinary. Everyday conversations, family relationships, and the way we respond to someone in need all offer opportunities to be kind.",
        "In Surah Al-Baqarah, verse 83, the Quran instructs people to speak kindly to others. Words can encourage someone’s heart, but they can also cause deep hurt. That is why both what we say and how we say it matter.",
        "Kindness is shown through actions as well as words. Helping someone in need, keeping promises, listening carefully, and treating people fairly are meaningful ways to practise kindness every day.",
        "Even when we disagree, we do not need to insult others. We can speak respectfully and remain honest without losing compassion.",
        "Why not offer someone a kind word today? Even a small act of kindness matters when it is done sincerely.",
      ],
    },
  },

  {
    id: "quran",
    title: {
      ja: "クルアーンとは何か？",
      en: "What Is the Qur’an?",
    },
    description: {
      ja: "イスラームの聖典クルアーンと、ムスリムにとってのその意味を学びましょう。",
      en: "Discover what the Qur’an is and why it is central to Muslim faith.",
    },
    reference: "Quran 17:9",
    arabic: "إِنَّ هَٰذَا الْقُرْآنَ يَهْدِي لِلَّتِي هِيَ أَقْوَمُ",
    translation: {
      ja: "本当にこのクルアーンは、最も正しい道へ導く。",
      en: "Indeed, this Qur’an guides to what is most upright.",
    },
    body: {
      ja: [
        "クルアーンとは何でしょうか。イスラームにおいて、クルアーンはアッラーから預言者ムハンマド ﷺ に啓示された聖典です。ムスリムは、これを信仰と生き方の重要な導きとして大切にしています。",
        "クルアーンはアラビア語で啓示されました。世界中のムスリムがさまざまな言語を話していても、アラビア語の原文を共通の聖典として読み、朗誦しています。",
        "クルアーンには、アッラーへの信仰、正義、慈悲、忍耐、家族や社会に対する責任など、多くの教えが含まれています。それは単なる歴史の本ではなく、人生について考え、行動を見つめ直すための導きです。",
        "スーラ17章9節では、クルアーンが最も正しい道へ導くと教えられています。その教えを理解するには、翻訳を読むだけでなく、文脈や信頼できる解説にも注意を払うことが大切です。",
        "イスラームを理解したいなら、まずクルアーンの内容を少しずつ学んでみてください。疑問を持つことも、真剣に理解しようとする大切な一歩です。",
      ],
      en: [
        "What is the Qur’an? In Islam, the Qur’an is the revelation from Allah to the Prophet Muhammad ﷺ. Muslims regard it as a central source of guidance for faith and life.",
        "The Qur’an was revealed in Arabic. Although Muslims around the world speak many languages, they share the Arabic text as their scripture and recite it in worship.",
        "The Qur’an teaches about faith in Allah, justice, mercy, patience, and responsibilities toward family and society. It is not simply a historical book; Muslims turn to it for guidance and reflection.",
        "Surah 17:9 describes the Qur’an as guiding to what is most upright. Understanding its teachings involves considering context and consulting reliable explanations, not relying on isolated phrases alone.",
        "If you want to understand Islam, consider beginning with the Qur’an and studying it gradually. Asking sincere questions is also an important step toward understanding.",
      ],
    },
  },
  {
    id: "women",
    title: {
      ja: "イスラームにおける女性の尊厳",
      en: "The Dignity of Women in Islam",
    },
    description: {
      ja: "クルアーンから、女性の尊厳、精神的な価値、そして人としての責任について考えます。",
      en: "Explore women’s dignity, spiritual worth, and human responsibilities through the Qur’an.",
    },
    reference: "Quran 4:1",
    arabic:
      "يَا أَيُّهَا النَّاسُ اتَّقُوا رَبَّكُمُ الَّذِي خَلَقَكُم مِّن نَّفْسٍ وَاحِدَةٍ",
    translation: {
      ja: "人々よ、あなたがたを一つの魂から創造された主を意識しなさい。",
      en: "O humanity, be mindful of your Lord, who created you from a single soul.",
    },
    body: {
      ja: [
        "女性の価値は、外見、社会的な立場、結婚しているかどうかだけで決まるものではありません。イスラームでは、人は創造主との関係、信仰、そして行いについて考える存在です。",
        "クルアーンのスーラ4章1節は、人類が一つの魂から創造されたことを人々に思い起こさせます。この節は、人間の共通の起源と、互いに責任を持って接することの大切さを教えています。",
        "イスラームの教えには、女性に関する権利や責任も含まれています。具体的な権利には、婚姻、財産、相続、教育などの問題があり、詳細を理解するには関連する節や信頼できる学者の説明を学ぶ必要があります。",
        "文化や社会の慣習と、宗教の教えは必ずしも同じではありません。女性が不当に扱われている事例を見たときは、その行為をイスラームの理想そのものと決めつけず、教えと実際の行動を区別して考えることが大切です。",
        "女性の尊厳について学ぶことは、女性だけでなく、すべての人が互いの権利と責任を理解することにつながります。敬意、公正さ、思いやりを日常生活で実践することから始めましょう。",
      ],
      en: [
        "A woman’s worth is not defined only by her appearance, social position, or marital status. In Islam, every person is accountable for their faith and actions before the Creator.",
        "Surah An-Nisa 4:1 reminds humanity that people were created from a single soul. The verse highlights our shared origin and the importance of being mindful of our responsibilities toward one another.",
        "Islamic teachings address women’s rights and responsibilities, including matters of marriage, property, inheritance, and education. Understanding specific rulings requires studying the relevant texts and consulting reliable scholarship.",
        "Cultural customs and religious teachings are not always identical. When women are treated unjustly, it is important to distinguish between people’s actions and the principles taught by Islam rather than assuming every cultural practice represents the religion.",
        "Learning about women’s dignity helps everyone understand rights and responsibilities more clearly. We can begin by practising respect, fairness, and compassion in everyday life.",
      ],
    },
  },
  {
    id: "prayer",
    title: {
      ja: "イスラームの礼拝とは何か？",
      en: "What Is Prayer in Islam?",
    },
    description: {
      ja: "ムスリムが礼拝を行う理由と、日々の生活におけるその意味を学びましょう。",
      en: "Learn why Muslims pray and what daily prayer means in their lives.",
    },
    reference: "Quran 2:43",
    arabic:
      "وَأَقِيمُوا الصَّلَاةَ وَآتُوا الزَّكَاةَ وَارْكَعُوا مَعَ الرَّاكِعِينَ",
    translation: {
      ja: "礼拝を行い、喜捨をし、礼拝する人々とともに礼をしなさい。",
      en: "Establish prayer, give zakah, and bow with those who bow.",
    },
    body: {
      ja: [
        "イスラームの礼拝は、アラビア語でサラートと呼ばれます。ムスリムにとって礼拝は、アッラーを崇拝し、信仰を日々の生活の中で実践する重要な行いです。",
        "成人したムスリムには、原則として一日に五回の義務の礼拝があります。それぞれの礼拝には定められた時間と手順があり、立つ、クルアーンを朗誦する、礼をする、ひれ伏すなどの動作を行います。",
        "クルアーンのスーラ2章43節では、礼拝を行い、喜捨をするよう教えています。礼拝とともに他者への責任も示されていることから、信仰は個人の崇拝と社会に対する責任の両方に関わることがわかります。",
        "礼拝は、忙しい一日の中で立ち止まり、自分の行動や意図を振り返る時間にもなります。しかし、礼拝の価値は気持ちを落ち着かせることだけではなく、アッラーへの崇拝という宗教的な意味そのものにあります。",
        "礼拝について初めて学ぶ人は、まずその目的と基本的な手順を知ることから始められます。わからないことがあれば、信頼できるムスリムや学識のある人に尋ねてみましょう。",
      ],
      en: [
        "Prayer in Islam is called salah. For Muslims, it is an essential act of worship through which faith is practised in daily life.",
        "Adult Muslims are generally obligated to perform five daily prayers. Each has an appointed time and includes movements and recitations such as standing, reciting Qur’an, bowing, and prostrating.",
        "Surah Al-Baqarah 2:43 instructs people to establish prayer and give zakah. The verse connects worship with responsibility toward others, reminding Muslims that faith involves both devotion and social obligations.",
        "Prayer can provide moments to pause during a busy day and reflect on one’s intentions and actions. Its religious purpose, however, is not merely relaxation; it is an act of worship directed to Allah.",
        "Anyone beginning to learn about salah can start by understanding its purpose and basic practice. Questions can be discussed with trustworthy Muslims or knowledgeable teachers.",
      ],
    },
  },
  {
    id: "patience",
    title: {
      ja: "イスラームにおける忍耐とは",
      en: "What Does Patience Mean in Islam?",
    },
    description: {
      ja: "困難なときに忍耐を保つこと、そして祈りと努力を続けることについて考えます。",
      en: "Explore patience during hardship and the importance of prayer and continued effort.",
    },
    reference: "Quran 2:153",
    arabic:
      "يَا أَيُّهَا الَّذِينَ آمَنُوا اسْتَعِينُوا بِالصَّبْرِ وَالصَّلَاةِ إِنَّ اللَّهَ مَعَ الصَّابِرِينَ",
    translation: {
      ja: "信仰する者たちよ、忍耐と礼拝によって助けを求めなさい。本当にアッラーは忍耐する者とともにおられる。",
      en: "O you who believe, seek help through patience and prayer. Indeed, Allah is with the patient.",
    },
    body: {
      ja: [
        "人生には、思いどおりにならないことがあります。失敗、病気、別れ、不安などに直面すると、前に進む力を失いそうになることもあります。イスラームでは、忍耐はそのようなときに大切にされる徳の一つです。",
        "アラビア語でサブルと呼ばれる忍耐は、ただ何もせずに苦しみに耐えることだけを意味しません。正しいことを続け、悪い行いを避け、困難の中でも誠実さを保つことも含まれます。",
        "クルアーンのスーラ2章153節では、忍耐と礼拝によって助けを求めるよう教えられています。この教えは、困難なときにも祈りと信仰を大切にしながら、必要な努力を続けることを促します。",
        "忍耐は、不正や危険な状況を黙って受け入れることではありません。必要な助けを求め、問題を解決するために行動し、信頼できる人に相談することも大切です。",
        "今、困難なことに直面しているなら、一度にすべてを解決しようとせず、今日できる小さな一歩を考えてみましょう。忍耐とは、希望を持ちながら正しい努力を続けることでもあります。",
      ],
      en: [
        "Life does not always go as we hope. Failure, illness, separation, and uncertainty can leave us feeling overwhelmed. In Islam, patience is an important virtue during such times.",
        "The Arabic word sabr does not simply mean doing nothing while suffering. It can include remaining steadfast in doing what is right, avoiding wrongdoing, and preserving integrity through difficulty.",
        "Surah Al-Baqarah 2:153 teaches believers to seek help through patience and prayer. It encourages people to maintain their faith while continuing to make appropriate efforts.",
        "Patience does not mean silently accepting injustice or dangerous circumstances. Seeking help, taking steps to address a problem, and speaking to trustworthy people can also be important.",
        "If you are facing difficulty now, you do not need to solve everything at once. Consider one constructive step you can take today. Patience can mean continuing to make the right effort while holding on to hope.",
      ],
    },
  },
  {
    id: "hereafter",
    title: {
      ja: "イスラームにおける来世の考え方",
      en: "Understanding the Hereafter in Islam",
    },
    description: {
      ja: "死後の世界と復活の日について、イスラームの信仰から学びましょう。",
      en: "Learn about life after death and the Day of Resurrection in Islamic belief.",
    },
    reference: "Quran 3:185",
    arabic: "كُلُّ نَفْسٍ ذَائِقَةُ الْمَوْتِ",
    translation: {
      ja: "すべての魂は死を味わう。",
      en: "Every soul will taste death.",
    },
    body: {
      ja: [
        "イスラームでは、現世の人生が終わった後にも存在が続き、復活の日に人々がアッラーの前に立つと信じられています。この信仰は、来世への信仰として知られています。",
        "クルアーンのスーラ3章185節は、すべての魂が死を味わい、復活の日に報いが完全に与えられることを教えています。この節は、人生が限られたものであることと、行いに責任を持つことを思い起こさせます。",
        "来世への信仰は、死について考えることだけを意味するものではありません。今の人生をどのように生きるかにも関係しています。正直さ、公正さ、他者への思いやり、そして善い行いを大切にする理由の一つとなります。",
        "イスラームでは、アッラーの慈悲と公正さが重視されています。人の最終的な行き先を勝手に断定するのではなく、自分自身の行いを見つめ、悔い改めと善い行いに努めることが大切です。",
        "死について考えることは、恐れだけでなく、人生で本当に大切なものを見直す機会にもなります。今日、自分ができる善い行いは何か、誰に優しさを示せるかを考えてみましょう。",
      ],
      en: [
        "In Islam, earthly life is not the end of existence. Muslims believe in the Hereafter and that people will be resurrected and stand before Allah.",
        "Surah Al Imran 3:185 teaches that every soul will taste death and that full recompense will be given on the Day of Resurrection. The verse reminds people that life is limited and that actions matter.",
        "Belief in the Hereafter is not only about thinking of death. It also influences how Muslims live now, encouraging honesty, justice, compassion, and good deeds.",
        "Islam emphasises both Allah’s mercy and justice. Rather than claiming to know the final fate of individuals, people should reflect on their own actions and strive toward repentance and good deeds.",
        "Reflecting on death can be an opportunity not only to feel fear, but also to reconsider what truly matters. What good deed can you do today, and to whom can you show kindness?",
      ],
    },
  },
];

function ArticleDetail({ language }: { language: Language }) {
  const { articleId } = useParams();
  const navigate = useNavigate();
  const article = articles.find((item) => item.id === articleId);

  if (!article) {
    return (
      <section className="welcome">
        <h1>
          {language === "ja" ? "記事が見つかりません" : "Article not found"}
        </h1>
        <button
          className="primary-button"
          onClick={() => navigate("/articles")}
        >
          {language === "ja" ? "記事一覧に戻る" : "Back to articles"}
        </button>
      </section>
    );
  }

  return (
    <section className="welcome">
      <button className="primary-button" onClick={() => navigate("/articles")}>
        ← {language === "ja" ? "記事一覧に戻る" : "Back to articles"}
      </button>

      <p className="eyebrow">OIDE DEEN · {article.reference}</p>
      <h1>{article.title[language]}</h1>

      <div className="article-verse">
        <h2>
          {language === "ja" ? "クルアーンの言葉" : "A Verse from the Quran"}
        </h2>
        <p className="arabic-verse" lang="ar" dir="rtl">
          {article.arabic}
        </p>
        <p>{article.translation[language]}</p>
        <p>
          <strong>{language === "ja" ? "出典" : "Reference"}:</strong>{" "}
          {article.reference}
        </p>
      </div>

      <div className="article-body">
        {article.body[language].map((paragraph, index) => (
          <p key={index} lang={language}>
            {paragraph}
          </p>
        ))}
      </div>

      <div className="article-reflection">
        <h2>
          {language === "ja" ? "考えてみましょう" : "A Moment to Reflect"}
        </h2>
        <p>
          {language === "ja"
            ? "この記事を読んで、どのようなことを考えましたか。あなたの感想を大切にしてください。"
            : "What thoughts came to your mind while reading this article? Take a moment to reflect on what it means to you."}
        </p>
      </div>

      <p className="article-note">
        {language === "ja"
          ? "注：翻訳は意味を伝えるための訳です。クルアーンの原文はアラビア語です。"
          : "Note: The translations here convey the meaning of the verses. The original Quranic text is in Arabic."}
      </p>
    </section>
  );
}

function ArticleList({ language }: { language: Language }) {
  return (
    <section className="topics">
      <p className="eyebrow">
        {language === "ja"
          ? "知識・信仰・理解"
          : "KNOWLEDGE · FAITH · UNDERSTANDING"}
      </p>

      <h1>{language === "ja" ? "イスラームの記事" : "Explore Our Articles"}</h1>

      <p>
        {language === "ja"
          ? "信頼できる知識を通して、イスラームへの理解を深めましょう。"
          : "Deepen your understanding of Islam through authentic knowledge."}
      </p>

      <div className="topic-grid">
        {articles.map((article) => (
          <article className="topic-card" key={article.id}>
            <span>OIDE DEEN · {article.reference}</span>
            <h2>{article.title[language]}</h2>
            <p>{article.description[language]}</p>
            <Link className="primary-button" to={`/articles/${article.id}`}>
              {language === "ja" ? "続きを読む →" : "Read Article →"}
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
}

function Articles() {
  const [language, setLanguage] = useState<Language>("ja");
  useEffect(() => {
    document.title =
      language === "ja"
        ? "イスラームの記事 | Oide Deen"
        : "Articles About Islam | Oide Deen";

    let description = document.querySelector('meta[name="description"]');

    if (!description) {
      description = document.createElement("meta");
      description.setAttribute("name", "description");
      document.head.appendChild(description);
    }

    description.setAttribute(
      "content",
      language === "ja"
        ? "クルアーンの教え、イスラームの信仰、人生の目的について学びましょう。日本語と英語でイスラームの記事を紹介します。"
        : "Explore articles about the Quran, Islamic beliefs, the purpose of life, prayer, patience, and more in Japanese and English."
    );
  }, [language]);
  return (
    <div className="website">
      <header className="header">
        <Link className="logo" to="/">
          <span className="logo-icon">☪</span>
          <span>Oide Deen</span>
        </Link>

        <nav className="navigation">
          <Link to="/">{language === "ja" ? "ホーム" : "Home"}</Link>
          <Link to="/#about">
            {language === "ja" ? "イスラームについて" : "About Islam"}
          </Link>
          <Link to="/articles">{language === "ja" ? "記事" : "Articles"}</Link>
          <Link to="/#videos">{language === "ja" ? "動画" : "Videos"}</Link>
        </nav>

        <div className="language">
          <button
            className={language === "ja" ? "active" : ""}
            onClick={() => setLanguage("ja")}
            aria-pressed={language === "ja"}
          >
            日本語
          </button>
          <button
            className={language === "en" ? "active" : ""}
            onClick={() => setLanguage("en")}
            aria-pressed={language === "en"}
          >
            English
          </button>
        </div>
      </header>

      <main>
        <Routes>
          <Route index element={<ArticleList language={language} />} />
          <Route
            path=":articleId"
            element={<ArticleDetail language={language} />}
          />
        </Routes>
      </main>

      <footer className="footer">
        <Link className="logo" to="/">
          ☪ Oide Deen
        </Link>
        <p>
          {language === "ja"
            ? "誠実な心で、知識を分かち合います。"
            : "Knowledge shared with sincerity and care."}
        </p>
        <p>© Oide Deen</p>
      </footer>
    </div>
  );
}

export default Articles;
