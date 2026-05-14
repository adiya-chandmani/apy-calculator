export const metadata = {
  title: "Privacy Policy",
  description: "Privacy policy for APY Calculator.",
};

export default function PrivacyPage() {
  return (
    <article className="copy-block">
      <h1>Privacy Policy</h1>
      <p>
        APY Calculator does not require account creation and does not ask you to submit sensitive financial information to use the core calculator.
      </p>
      <h2>Data we may collect</h2>
      <ul className="inline-list">
        <li>Basic anonymous analytics such as page views and device type</li>
        <li>Information you voluntarily send through the contact page or email</li>
      </ul>
      <h2>How data is used</h2>
      <p>
        We use limited data to maintain the site, understand traffic trends, and reply to support questions. We do not sell personal data.
      </p>
      <h2>Third-party services</h2>
      <p>
        Hosting, analytics, and email providers may process limited technical information to deliver the website reliably.
      </p>
    </article>
  );
}
