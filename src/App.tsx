import { useEffect, useState } from "react";
import Contact from "./Contact";
import { Analytics } from "@vercel/analytics/react";
import { Link, Routes, Route } from "react-router-dom";
import "./App.css";
import Articles from "./Articles";

type Language = "ja" | "en";

const content = {
  en: {
    nav: ["Home", "About Islam", "Articles", "Videos"],
    eyebrow: "KNOWLEDGE · FAITH · UNDERSTANDING",
    heroTitle: ["Discover Islam.", "Find Your Peace."],
    heroDescription:
      "Explore the beauty of Islam through authentic knowledge, thoughtful reflections, and answers to life's deepest questions.",
    heroButton: "Begin Your Journey",
    arabicCaption: "Read in the name of your Lord",
    welcomeLabel: "WELCOME TO OIDE DEEN",
    welcomeTitle: "A place to learn, reflect, and understand.",
    welcomeDescription:
      "Whether you are discovering Islam for the first time or deepening your understanding, you are welcome here.",

    reflectionLabel: "A MOMENT TO REFLECT",
    reflectionTitle: "What if hardship is not the end of your story?",
    reflectionVerse: "فَإِنَّ مَعَ الْعُسْرِ يُسْرًا",
    reflectionTranslation: "For indeed, with hardship comes ease.",
    reflectionReference: "Qur'an 94:5–6",
    reflectionButton: "Reflect on this verse",

    reflectionNote:
      "This verse reminds us that hardship is not the whole story. Turn to Allah, seek His guidance, and keep moving forward with hope.",

    topicsLabel: "EXPLORE ISLAM",
    topicsTitle: "Where would you like to begin?",
    topics: [
      {
        number: "01",
        title: "Beliefs & Faith",
        description: "Explore the foundations of Islamic belief.",
      },
      {
        number: "02",
        title: "The Quran",
        description: "Discover the message and guidance of the Quran.",
      },
      {
        number: "03",
        title: "Life & Purpose",
        description: "Reflect on life's meaning and our purpose.",
      },
    ],
    videosLabel: "WATCH & LEARN",
    videosTitle: "Continue learning with Oide Deen",
    videosDescription:
      "Discover Islam through thoughtful videos and reflections.",
    youtubeButton: "Watch more videos on YouTube",
    articlesButton: "Explore Articles",
    footerDescription: "Knowledge shared with sincerity and care.",
  },

  ja: {
    nav: ["ホーム", "イスラームについて", "記事", "動画"],
    eyebrow: "知識・信仰・理解",
    heroTitle: ["イスラームを知り、", "心の安らぎを見つけよう。"],
    heroDescription:
      "信頼できる知識と丁寧な解説を通して、イスラームの美しさや人生の大切な問いについて学びましょう。",
    heroButton: "学びの旅を始める",
    arabicCaption: "あなたの主の御名によって読め",
    welcomeLabel: "OIDE DEENへようこそ",
    welcomeTitle: "学び、考え、理解を深める場所。",
    welcomeDescription:
      "初めてイスラームに触れる方も、もっと深く学びたい方も、ここで一緒に学びましょう。",

    reflectionLabel: "立ち止まって考える",
    reflectionTitle: "困難は、あなたの物語の終わりではありません。",
    reflectionVerse: "فَإِنَّ مَعَ الْعُسْرِ يُسْرًا",
    reflectionTranslation: "本当に、困難と共に安楽がある。",
    reflectionReference: "クルアーン 94章5–6節",
    reflectionButton: "この節について考える",
    reflectionNote:
      "この節は、困難だけがすべてではないことを思い出させてくれます。アッラーに導きを求め、希望を持って歩み続けましょう。",

    topicsLabel: "イスラームを学ぶ",
    topicsTitle: "何から学び始めますか？",
    topics: [
      {
        number: "01",
        title: "信仰の基礎",
        description: "イスラームの信仰の基本について学びましょう。",
      },
      {
        number: "02",
        title: "クルアーン",
        description: "クルアーンのメッセージと導きを学びましょう。",
      },
      {
        number: "03",
        title: "人生の意味と目的",
        description: "人生の意味と、私たちの存在の目的について考えましょう。",
      },
    ],
    videosLabel: "動画で学ぶ",
    videosTitle: "Oide Deenと一緒に学び続けましょう",
    videosDescription:
      "イスラームについての動画や考察を通して、理解を深めましょう。",
    youtubeButton: "YouTubeで動画をもっと見る",
    articlesButton: "記事を読む",
    footerDescription: "誠実な心で、知識を分かち合います。",
  },
} satisfies Record<
  Language,
  {
    nav: string[];
    eyebrow: string;
    heroTitle: string[];
    heroDescription: string;
    heroButton: string;
    arabicCaption: string;
    welcomeLabel: string;
    welcomeTitle: string;
    welcomeDescription: string;

    reflectionLabel: string;
    reflectionTitle: string;
    reflectionVerse: string;
    reflectionTranslation: string;
    reflectionReference: string;
    reflectionButton: string;
    reflectionNote: string;

    topicsLabel: string;
    topicsTitle: string;
    topics: {
      number: string;
      title: string;
      description: string;
    }[];
    videosLabel: string;
    videosTitle: string;
    videosDescription: string;
    youtubeButton: string;
    articlesButton: string;
    footerDescription: string;
  }
>;

type YouTubeShort = {
  id: string;
  title: string;
  published: string;
};

function ShortsGrid() {
  const [videos, setVideos] = useState<YouTubeShort[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    let cancelled = false;

    async function loadVideos() {
      try {
        const response = await fetch("/api/youtube-feed");

        if (!response.ok) {
          throw new Error("Unable to load YouTube feed");
        }

        const xmlText = await response.text();
        const xml = new DOMParser().parseFromString(xmlText, "application/xml");

        if (xml.querySelector("parsererror")) {
          throw new Error("Invalid YouTube feed");
        }

        const entries = Array.from(xml.querySelectorAll("entry"));

        const latestVideos = entries
          .map((entry) => {
            const id =
              entry.getElementsByTagName("yt:videoId")[0]?.textContent ?? "";

            const title =
              entry.getElementsByTagName("title")[0]?.textContent?.trim() ??
              "Oide Deen";

            return {
              id,
              title,
              published: entry.querySelector("published")?.textContent ?? "",
            };
          })
          .filter((video) => video.id)
          .slice(0, 6);

        if (!cancelled) {
          setVideos(latestVideos);
          setError(false);
        }
      } catch {
        if (!cancelled) setError(true);
      } finally {
        if (!cancelled) setLoading(false);
      }
    }

    loadVideos();

    return () => {
      cancelled = true;
    };
  }, []);

  if (loading) {
    return <p className="shorts-message">Loading latest Shorts...</p>;
  }

  if (error || videos.length === 0) {
    return (
      <p className="shorts-message">
        Videos could not be loaded. Please visit our YouTube channel.
      </p>
    );
  }

  return (
    <div className="shorts-grid">
      {videos.map((video) => (
        <a
          className="short-card"
          href={`https://www.youtube.com/watch?v=${video.id}`}
          target="_blank"
          rel="noreferrer"
          key={video.id}
        >
          <div className="short-thumbnail">
            <img
              src={`https://i.ytimg.com/vi/${video.id}/hqdefault.jpg`}
              alt={video.title}
              loading="lazy"
            />
            <span className="short-play">▶</span>
          </div>

          <h3>{video.title}</h3>
          <p>
            {video.published
              ? new Date(video.published).toLocaleDateString()
              : ""}
          </p>
        </a>
      ))}
    </div>
  );
}

function Home() {
  const [language, setLanguage] = useState<Language>("ja");
  const text = content[language];

  return (
    <div className="website">
      <header className="header">
        <a className="logo" href="#home">
          <span className="logo-icon">☪</span>
          <span>Oide Deen</span>
        </a>

        <nav className="navigation">
          <a href="#home">{text.nav[0]}</a>
          <a href="#about">{text.nav[1]}</a>

          <Link to="/articles">{text.nav[2]}</Link>
          <Link to="/contact">
            {language === "ja" ? "お問い合わせ" : "Contact"}
          </Link>
          <a href="#videos">{text.nav[3]}</a>
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
        <section className="hero" id="home">
          <p className="eyebrow">{text.eyebrow}</p>

          <h1>
            {text.heroTitle[0]}
            <br />
            {text.heroTitle[1]}
          </h1>

          <p className="hero-description">{text.heroDescription}</p>

          <a className="primary-button" href="#about">
            {text.heroButton}
          </a>

          <p className="arabic-caption">{text.arabicCaption}</p>
        </section>

        <section className="welcome" id="about">
          <p className="eyebrow">{text.welcomeLabel}</p>
          <h2>{text.welcomeTitle}</h2>
          <p>{text.welcomeDescription}</p>
        </section>

        <section className="reflection" id="reflection">
          <p className="eyebrow">{text.reflectionLabel}</p>
          <h2>{text.reflectionTitle}</h2>

          <p className="reflection-arabic" dir="rtl" lang="ar">
            {text.reflectionVerse}
          </p>

          <p className="reflection-translation">{text.reflectionTranslation}</p>

          <p className="reflection-reference">{text.reflectionReference}</p>

          <p className="reflection-note">{text.reflectionNote}</p>

          <Link className="reflection-button" to="/articles">
            {text.reflectionButton} →
          </Link>
        </section>

        <section className="topics" id="topics">
          <p className="eyebrow">{text.topicsLabel}</p>
          <h2>{text.topicsTitle}</h2>

          <div className="topic-grid">
            {text.topics.map((topic) => (
              <article className="topic-card" key={topic.number}>
                <span>{topic.number}</span>
                <h3>{topic.title}</h3>
                <p>{topic.description}</p>

                <Link className="primary-button" to="/articles">
                  {text.articlesButton} →
                </Link>
              </article>
            ))}
          </div>
        </section>

        <section className="videos" id="videos">
          <p className="eyebrow">{text.videosLabel}</p>
          <h2>{text.videosTitle}</h2>
          <p>{text.videosDescription}</p>

          <ShortsGrid />

          <a
            className="primary-button"
            href="https://www.youtube.com/@oidedeene.official"
            target="_blank"
            rel="noreferrer"
          >
            {text.youtubeButton} →
          </a>
        </section>
      </main>

      <footer className="footer">
        <a className="logo" href="#home">
          ☪ Oide Deen
        </a>

        <p>{text.footerDescription}</p>
        <p>© Oide Deen</p>
      </footer>
    </div>
  );
}

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/articles/*" element={<Articles />} />
        <Route path="*" element={<Home />} />
      </Routes>

      <Analytics />
    </>
  );
}

export default App;
