import { Link } from "react-router-dom";
import "./Quran.css";

function Quran() {
  return (
    <div className="quran-page">
      <header className="quran-header">
        <Link to="/" className="quran-logo">
          ☪ Oide Deen
        </Link>

        <Link to="/" className="back-home">
          ← Home
        </Link>
      </header>

      <main className="quran-main">
        <p className="quran-eyebrow">KNOWLEDGE · GUIDANCE · REFLECTION</p>

        <h1>The Holy Qur'an</h1>

        <p className="quran-intro">
          Explore the meanings of the Qur'an through its original Arabic text
          and carefully attributed translations.
        </p>

        <section className="surah-card">
          <p className="surah-number">SURAH 001</p>

          <h2>Al-Fatihah</h2>

          <p className="surah-japanese">開端章</p>

          <p className="surah-arabic" dir="rtl" lang="ar">
            سُورَةُ الْفَاتِحَةِ
          </p>

          <p className="surah-info">The Opening · 7 Verses</p>

          <Link to="/quran/al-fatihah" className="surah-button">
            Read Surah →
          </Link>
        </section>

        <p className="quran-note">
          Translations convey the meanings of the Qur'an. The original Qur'anic
          text is in Arabic.
        </p>
      </main>

      <footer className="quran-footer">© Oide Deen</footer>
    </div>
  );
}

export default Quran;
