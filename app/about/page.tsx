export const metadata = {
  title: "About",
  description: "Learn how the APY Calculator works and who it helps.",
};

export default function AboutPage() {
  return (
    <article className="copy-block">
      <h1>About APY Calculator</h1>
      <p>
        APY Calculator is a lightweight savings growth tool for anyone who wants a quick projection without spreadsheets,
        signups, or clutter. It estimates future balance, total contributions, interest earned, and yearly checkpoints.
      </p>
      <h2>Who it is for</h2>
      <ul className="inline-list">
        <li>Savers comparing high-yield savings accounts and CDs</li>
        <li>People building an emergency fund with recurring monthly deposits</li>
        <li>Anyone modeling compound growth over a simple time horizon</li>
      </ul>
      <h2>Why this site exists</h2>
      <p>
        APY-related searches stay popular because people want a fast way to understand how compounding changes real returns.
        This site focuses on clarity, speed, and accessibility so you can compare scenarios quickly.
      </p>
    </article>
  );
}
