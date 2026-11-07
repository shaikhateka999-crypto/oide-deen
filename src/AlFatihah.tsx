import { Link } from "react-router-dom";

const verses = [
  {
    number: 1,
    arabic: "بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ",
    english:
      "In the name of Allāh,[2] the Entirely Merciful, the Especially Merciful.[3]",
    japanese: "慈悲あまねく*慈愛深き*アッラー*の御名において。",
    englishFootnote:
      '[2] Allāh is a proper name belonging only to the one Almighty God, Creator and Sustainer of the heavens and the earth and all that is within them, the Eternal and Absolute, to whom alone all worship is due.\n\n[3] Ar-Raḥmān and ar-Raḥeem are two names of Allāh derived from the word "raḥmah" (mercy).',
    japaneseFootnote: "",
  },
  {
    number: 2,
    arabic: "الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ",
    english: "[All] praise is [due] to Allāh, Lord[4] of the worlds -",
    japanese: "全創造物の主*、アッラー*に称賛*あれ、",
    englishFootnote:
      '[4] When referring to Allāh, the Arabic term "rabb" (translated as "Lord") includes owner, master, ruler, controller, sustainer, provider, guardian and caretaker.',
    japaneseFootnote: "",
  },
  {
    number: 3,
    arabic: "الرَّحْمَٰنِ الرَّحِيمِ",
    english: "The Entirely Merciful, the Especially Merciful,",
    japanese: "慈悲あまねく慈愛深きお方、",
    englishFootnote: "",
    japaneseFootnote: "",
  },
  {
    number: 4,
    arabic: "مَالِكِ يَوْمِ الدِّينِ",
    english: "Sovereign of the Day of Recompense.[5]",
    japanese: "報いの日*の支配者（に）。",
    englishFootnote:
      "[5] i.e., repayment and compensation for whatever was earned of good or evil during life on this earth.",
    japaneseFootnote: "",
  },
  {
    number: 5,
    arabic: "إِيَّاكَ نَعْبُدُ وَإِيَّاكَ نَسْتَعِينُ",
    english: "It is You we worship and You we ask for help.",
    japanese:
      "私たちはあなただけを崇拝*し、あなただけにお力添えを乞います[1]。",
    englishFootnote: "",
    japaneseFootnote:
      "「崇拝*」だけでなく、アッラー*のお力添えがなければ何事も叶わない。イブン・カスィール*は「このアーヤ*の前半部分では、アッラー*に何か他のものを並べることとの決別が、そして後半部分では、自らに何らかの力が備わっているとすることの決別と、アッラー*のみに全てを委ねることが命じられている」としている。",
  },
  {
    number: 6,
    arabic: "اهْدِنَا الصِّرَاطَ الْمُسْتَقِيمَ",
    english: "Guide us to the straight path -",
    japanese: "私たちを、まっすぐな道[1]へとお導きください。",
    englishFootnote: "",
    japaneseFootnote: "[1] 来世での成功へと続く道である、イスラーム*のこと。",
  },
  {
    number: 7,
    arabic:
      "صِرَاطَ الَّذِينَ أَنْعَمْتَ عَلَيْهِمْ غَيْرِ الْمَغْضُوبِ عَلَيْهِمْ وَلَا الضَّالِّينَ",
    english:
      "The path of those upon whom You have bestowed favor, not of those who have earned [Your] anger or of those who are astray.",
    japanese:
      "あなたが恩恵をお授けになった者たち[1]、つまり、（あなたの）お怒りを受けるでもなく、迷うでもない者たち[2]の道へ。[3]",
    englishFootnote: "",
    japaneseFootnote:
      "[1] 婦人章66-69も参照。\n[2] 「お怒りを受ける」者たちとは、知識を預かってはいても、それに沿って行わなかった当時のユダヤ教徒、および彼らと同様の状態にある者たちのこと。また「迷う」者たちとは、無知ゆえに導かれず、正しい道から迷い去ってしまった当時のキリスト教徒、および彼らと同様の状態にある者たちのこと。\n[3] 礼拝中かどうかに関わらず、開端章を読み終えた後には、「アーミーン」と唱えることが薦められている。",
  },
];

function AlFatihah() {
  return (
    <div className="quran-page">
      <header className="quran-header">
        <Link to="/" className="quran-logo">
          ☪ Oide Deen
        </Link>
        <Link to="/quran" className="back-home">
          ← Back to Qur'an
        </Link>
      </header>

      <main className="quran-main">
        <p className="quran-eyebrow">SURAH 001 · 7 VERSES</p>
        <h1>Surah Al-Fatihah</h1>
        <p className="surah-japanese">開端章</p>
        <p className="quran-intro">The Opening</p>

        <p className="quran-note">
          Arabic is the original Qur'anic text. English and Japanese
          translations convey its meanings.
        </p>

        <section className="verses-list">
          {verses.map((verse) => (
            <article className="verse" key={verse.number}>
              <p className="verse-number">{verse.number}</p>

              <p className="verse-arabic" dir="rtl" lang="ar">
                {verse.arabic}
              </p>

              <p className="verse-english" lang="en">
                {verse.english}
              </p>

              <p className="verse-japanese" lang="ja">
                {verse.japanese}
              </p>

              {verse.englishFootnote && (
                <details className="verse-footnotes">
                  <summary>English footnotes</summary>
                  <p>{verse.englishFootnote}</p>
                </details>
              )}

              {verse.japaneseFootnote && (
                <details className="verse-footnotes">
                  <summary>日本語の注釈</summary>
                  <p lang="ja">{verse.japaneseFootnote}</p>
                </details>
              )}
            </article>
          ))}
        </section>

        <p className="quran-note">
          English: Noor International Center, version 1.1.2.
          <br />
          Japanese: Saeed Sato, under the supervision of Rowwad Translation
          Center, version 1.0.13.
        </p>
      </main>

      <footer className="quran-footer">© Oide Deen</footer>
    </div>
  );
}

export default AlFatihah;
