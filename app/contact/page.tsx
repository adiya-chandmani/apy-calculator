export const metadata = {
  title: "Contact",
  description: "Contact APY Calculator.",
};

export default function ContactPage() {
  return (
    <article className="copy-block">
      <h1>Contact</h1>
      <p>
        Questions, bug reports, or partnership ideas? Reach out by email and include the page you were using plus a short description of the issue.
      </p>
      <h2>Email</h2>
      <p>
        <a href="mailto:hello@example.com">hello@example.com</a>
      </p>
      <h2>What to include</h2>
      <ul className="inline-list">
        <li>Your device and browser</li>
        <li>The deposit, APY, contribution, and years you entered</li>
        <li>What result you expected to see</li>
      </ul>
    </article>
  );
}
