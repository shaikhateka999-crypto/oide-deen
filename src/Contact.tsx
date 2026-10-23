import { useState } from "react";
import { Link } from "react-router-dom";
import "./App.css";

type Language = "ja" | "en";

export default function Contact() {
  const [language, setLanguage] = useState<Language>("ja");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [topic, setTopic] = useState("question");
  const [message, setMessage] = useState("");

  const ja = language === "ja";

  return (
    <main className="contact-page">
      <header className="contact-heading">
        <p className="contact-eyebrow">OIDE DEEN</p>

        <h1>{ja ? "お問い合わせ" : "Contact Us"}</h1>

        <p className="contact-subtitle">
          {ja
            ? "イスラームについての質問や感想をお送りください。"
            : "Questions or feedback about Islam are welcome."}
        </p>

        <button
          type="button"
          className="contact-language"
          onClick={() =>
            setLanguage((current) => (current === "ja" ? "en" : "ja"))
          }
        >
          {ja ? "English" : "日本語"}
        </button>
      </header>

      <section className="contact-youtube">
        <h2>{ja ? "YouTubeチャンネル" : "Our YouTube Channel"}</h2>

        <p>
          {ja
            ? "イスラームについてもっと知りたい方は、ぜひご覧ください。"
            : "Explore our videos to learn more about Islam."}
        </p>

        <a
          href="https://youtube.com/@oidedeene.official"
          target="_blank"
          rel="noreferrer"
          className="contact-youtube-link"
        >
          {ja ? "チャンネルを見る ↗" : "Visit Oide Deen ↗"}
        </a>
      </section>

      <section className="contact-form-section">
        <h2>{ja ? "メッセージを送る" : "Send a Message"}</h2>

        <p className="contact-form-intro">
          {ja ? "以下のフォームにご記入ください。" : "Fill in the form below."}
        </p>

        <form
          action="https://formsubmit.co/shaikhateka999@gmail.com"
          method="POST"
          className="contact-form"
        >
          <input
            type="hidden"
            name="_subject"
            value="New Oide Deen Website Question"
          />

          <input type="hidden" name="_template" value="table" />

          <label htmlFor="contact-name">
            {ja ? "お名前（任意）" : "Name (optional)"}
          </label>
          <input
            id="contact-name"
            name="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder={ja ? "お名前" : "Your name"}
          />

          <label htmlFor="contact-email">
            {ja ? "メールアドレス" : "Email address"}
          </label>
          <input
            id="contact-email"
            name="email"
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@example.com"
          />

          <label htmlFor="contact-topic">
            {ja ? "お問い合わせの種類" : "Topic"}
          </label>
          <select
            id="contact-topic"
            name="topic"
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
          >
            <option value="question">
              {ja ? "イスラームについての質問" : "Question about Islam"}
            </option>
            <option value="feedback">
              {ja ? "ご意見・ご感想" : "Feedback"}
            </option>
            <option value="other">{ja ? "その他" : "Other"}</option>
          </select>

          <label htmlFor="contact-message">
            {ja ? "メッセージ" : "Message"}
          </label>
          <textarea
            id="contact-message"
            name="message"
            required
            rows={6}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder={
              ja
                ? "メッセージをご記入ください..."
                : "Write your question or message..."
            }
          />

          <button type="submit" className="contact-submit">
            {ja ? "メッセージを送信" : "Send Message"}
          </button>

          <p className="contact-notice">
            {ja
              ? "送信すると、メッセージはメールで送られます。"
              : "Your message will be submitted by email."}
          </p>
        </form>
      </section>

      <footer className="contact-footer">
        <Link to="/">← {ja ? "ホームへ戻る" : "Back to Home"}</Link>
      </footer>
    </main>
  );
}
