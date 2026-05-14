export const metadata = {
  title: "Terms of Service",
  description: "Terms of service for APY Calculator.",
};

export default function TermsPage() {
  return (
    <article className="copy-block">
      <h1>Terms of Service</h1>
      <p>
        APY Calculator is provided for general informational use. We aim for accuracy, but savings decisions and financial planning remain your responsibility.
      </p>
      <h2>Acceptable use</h2>
      <ul className="inline-list">
        <li>Do not misuse the site, interfere with service, or attempt unauthorized access.</li>
        <li>Do not rely on the calculator as financial, legal, or tax advice.</li>
      </ul>
      <h2>Availability</h2>
      <p>
        We may update, improve, or remove features at any time. Continued use of the site means you accept the current terms.
      </p>
    </article>
  );
}
