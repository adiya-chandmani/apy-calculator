"use client";

import { useMemo, useState } from "react";

function formatMoney(value: number) {
  if (!Number.isFinite(value) || value < 0) return "—";
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 2,
  }).format(value);
}

function formatPercent(value: number) {
  if (!Number.isFinite(value) || value < 0) return "—";
  return `${value.toFixed(2)}%`;
}

export function EmiCalculatorTool() {
  const [principal, setPrincipal] = useState("250000");
  const [annualRate, setAnnualRate] = useState("8.5");
  const [years, setYears] = useState("20");

  const result = useMemo(() => {
    const loanAmount = Number(principal);
    const rate = Number(annualRate);
    const tenureYears = Number(years);

    if (!loanAmount || loanAmount <= 0 || !Number.isFinite(rate) || rate < 0 || !tenureYears || tenureYears <= 0) {
      return null;
    }

    const months = Math.round(tenureYears * 12);
    const monthlyRate = rate / 12 / 100;
    const emi = monthlyRate === 0
      ? loanAmount / months
      : (loanAmount * monthlyRate * (1 + monthlyRate) ** months) / (((1 + monthlyRate) ** months) - 1);

    const totalPayment = emi * months;
    const totalInterest = totalPayment - loanAmount;

    const checkpoints = [12, 60, 120, months]
      .filter((value, index, array) => value <= months && array.indexOf(value) === index)
      .map((month) => {
        const balance = monthlyRate === 0
          ? Math.max(0, loanAmount - emi * month)
          : loanAmount * (((1 + monthlyRate) ** months - (1 + monthlyRate) ** month) / (((1 + monthlyRate) ** months) - 1));

        return {
          label: month === months ? "Loan end" : `After ${month / 12} year${month === 12 ? "" : "s"}`,
          balance: formatMoney(Math.max(0, balance)),
        };
      });

    return {
      emi: formatMoney(emi),
      totalPayment: formatMoney(totalPayment),
      totalInterest: formatMoney(totalInterest),
      principalShare: formatPercent((loanAmount / totalPayment) * 100),
      interestShare: formatPercent((totalInterest / totalPayment) * 100),
      months,
      checkpoints,
    };
  }, [principal, annualRate, years]);

  return (
    <section className="panel section" aria-labelledby="emi-tool-heading">
      <div className="tool-grid">
        <div className="panel-stack">
          <div>
            <h2 id="emi-tool-heading" className="section-title">Loan EMI calculator</h2>
            <p className="note">Enter the loan amount, annual interest rate, and tenure to estimate your EMI and full repayment cost.</p>
          </div>
          <div className="form-grid form-grid-3">
            <label className="field">
              <span>Loan amount</span>
              <input className="input" inputMode="decimal" value={principal} onChange={(event) => setPrincipal(event.target.value)} aria-describedby="loan-amount-help" />
            </label>
            <label className="field">
              <span>Interest rate (% per year)</span>
              <input className="input" inputMode="decimal" value={annualRate} onChange={(event) => setAnnualRate(event.target.value)} />
            </label>
            <label className="field">
              <span>Loan tenure (years)</span>
              <input className="input" inputMode="decimal" value={years} onChange={(event) => setYears(event.target.value)} />
            </label>
          </div>
          <p id="loan-amount-help" className="note">Tip: use the same currency unit throughout. The calculator displays results in USD formatting, but the math works for any currency.</p>
          <div className="card">
            <h3>How to use</h3>
            <ol className="inline-list">
              <li>Enter the principal amount you plan to borrow.</li>
              <li>Add the annual interest rate offered by the lender.</li>
              <li>Set the loan tenure in years to compare monthly affordability vs total interest.</li>
            </ol>
          </div>
        </div>

        <aside className="panel-stack" aria-live="polite">
          <div className="result-hero">
            <p className="note">Estimated monthly EMI</p>
            <h3>{result?.emi || "—"}</h3>
            <p>{result ? `Total repayment ${result.totalPayment} over ${result.months} months.` : "Add a valid loan amount, interest rate, and tenure to calculate EMI."}</p>
          </div>

          <div className="kpi-grid">
            <article className="kpi-card">
              <span className="split-label">Monthly EMI</span>
              <strong>{result?.emi || "—"}</strong>
            </article>
            <article className="kpi-card">
              <span className="split-label">Total interest</span>
              <strong>{result?.totalInterest || "—"}</strong>
            </article>
            <article className="kpi-card">
              <span className="split-label">Total repayment</span>
              <strong>{result?.totalPayment || "—"}</strong>
            </article>
          </div>

          <div className="card">
            <h3>Payment mix</h3>
            {result ? (
              <div className="split-grid compact-grid">
                <div className="split-row"><span>Principal share</span><strong>{result.principalShare}</strong></div>
                <div className="split-row"><span>Interest share</span><strong>{result.interestShare}</strong></div>
              </div>
            ) : (
              <p className="note">Your payment breakdown will appear here.</p>
            )}
          </div>

          <div className="card">
            <h3>Remaining balance checkpoints</h3>
            <div className="split-grid compact-grid">
              {result?.checkpoints.length ? (
                result.checkpoints.map((checkpoint) => (
                  <div key={checkpoint.label} className="split-row">
                    <span>{checkpoint.label}</span>
                    <strong>{checkpoint.balance}</strong>
                  </div>
                ))
              ) : (
                <p className="note">Balance checkpoints will appear after a valid calculation.</p>
              )}
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}
