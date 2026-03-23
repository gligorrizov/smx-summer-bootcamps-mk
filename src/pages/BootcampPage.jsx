import React from 'react'

export const BootcampPage = ({ data }) => {
  const d = data
  return (
    <>
      {/* Hero */}
      <section className="hero">
        <div className="hero-badge">{d.badge}</div>
        <h1>{d.headline}</h1>
        <p className="subtitle">{d.subheadline}</p>
        <a href="#pricing" className="hero-cta">{d.ctaText}</a>
        <div className="hero-meta">
          {d.meta.map((m, i) => (
            <div key={i} className="hero-meta-item">
              <span className="hero-meta-value">{m.value}</span>
              <span className="hero-meta-label">{m.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Transformation */}
      {d.transformation && (
        <section className="section transformation-section">
          <h2 className="section-title">{d.transformation.title}</h2>
          <p className="section-subtitle">{d.transformation.subtitle}</p>
          <div className="transformation-grid">
            <div className="transformation-col transformation-before">
              <div className="transformation-label transformation-label-before">
                {d.transformation.beforeLabel}
              </div>
              <div className="transformation-items">
                {d.transformation.before.map((item, i) => (
                  <div key={i} className="transformation-item">
                    <span className="transformation-icon">{item.icon}</span>
                    <span className="transformation-text">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="transformation-col transformation-after">
              <div className="transformation-label transformation-label-after">
                {d.transformation.afterLabel}
              </div>
              <div className="transformation-items">
                {d.transformation.after.map((item, i) => (
                  <div key={i} className="transformation-item">
                    <span className="transformation-icon">{item.icon}</span>
                    <span className="transformation-text">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* For whom */}
      <section className="section">
        <h2 className="section-title">{d.audienceTitle}</h2>
        <p className="section-subtitle">{d.audienceSubtitle}</p>
        <div className="audience-grid">
          {d.audience.map((a, i) => (
            <div key={i} className="audience-item">{a}</div>
          ))}
        </div>
      </section>

      {/* What you'll learn / outcomes */}
      <div className="section-alt">
        <section className="section">
          <h2 className="section-title">{d.outcomesTitle}</h2>
          <p className="section-subtitle">{d.outcomesSubtitle}</p>
          <div className="outcomes-grid">
            {d.outcomes.map((o, i) => (
              <div key={i} className="outcome-card">
                <div className="outcome-icon">{o.icon}</div>
                <div className="outcome-title">{o.title}</div>
                <div className="outcome-desc">{o.desc}</div>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* Program structure */}
      <section className="section">
        <h2 className="section-title">{d.programTitle}</h2>
        <p className="section-subtitle">{d.programSubtitle}</p>
        <div className="info-bar">
          {d.programInfo.map((info, i) => (
            <div key={i} className="info-item">
              <span className="info-icon">{info.icon}</span>
              <div>
                <div className="info-label">{info.label}</div>
                <div className="info-value">{info.value}</div>
              </div>
            </div>
          ))}
        </div>
        <div className="modules-list">
          {d.modules.map((m, i) => (
            m.isBreak ? (
              <div key={i} className="module-break">☀️ {m.title}</div>
            ) : (
              <div key={i} className="module-item">
                <div className="module-number">{m.num}</div>
                <div className="module-content">
                  <div className="module-title">{m.title}</div>
                  <div className="module-desc">{m.desc}</div>
                  <div className="module-weeks">{m.weeks}</div>
                </div>
              </div>
            )
          ))}
        </div>
      </section>

      {/* Tools */}
      <div className="section-alt">
        <section className="section">
          <h2 className="section-title">{d.toolsTitle}</h2>
          <p className="section-subtitle">{d.toolsSubtitle}</p>
          <div className="tools-grid">
            {d.tools.map((t, i) => (
              <div key={i} className="tool-badge">{t}</div>
            ))}
          </div>
        </section>
      </div>

      {/* Pricing */}
      <section className="section" id="pricing">
        <h2 className="section-title">{d.pricingTitle}</h2>
        <p className="section-subtitle">{d.pricingSubtitle}</p>
        <div className="pricing-card">
          <div className="price-early">{d.priceEarly}</div>
          <div className="price-regular">{d.priceRegular}</div>
          <div className="price-label">{d.priceLabel}</div>
          <div className="pricing-features">
            {d.pricingFeatures.map((f, i) => (
              <div key={i} className="pricing-feature">
                <span className="check">✓</span> {f}
              </div>
            ))}
          </div>
          <a href={d.formUrl || '#'} className="pricing-cta">{d.pricingCta}</a>
        </div>
      </section>

      {/* Guarantees */}
      {d.guarantees && d.guarantees.length > 0 && (
        <div className="section-alt">
          <section className="section guarantees-section">
            <h2 className="section-title">Што добиваш?</h2>
            <p className="section-subtitle">Сè што ти треба за успешно учење — вклучено во цената.</p>
            <div className="guarantees-list">
              {d.guarantees.map((g, i) => (
                <div key={i} className="guarantee-item">
                  <span className="guarantee-check">✓</span>
                  <span className="guarantee-text">{g}</span>
                </div>
              ))}
            </div>
          </section>
        </div>
      )}

      {/* FAQ */}
      <div className="section-alt">
        <section className="section">
          <h2 className="section-title">{d.faqTitle}</h2>
          <div className="faq-list">
            {d.faq.map((f, i) => (
              <div key={i} className="faq-item">
                <div className="faq-q">{f.q}</div>
                <div className="faq-a">{f.a}</div>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* Final CTA */}
      <section className="cta-section">
        <h2>{d.finalCtaTitle}</h2>
        <p>{d.finalCtaSubtitle}</p>
        <a href="#pricing" className="hero-cta">{d.ctaText}</a>
      </section>

      <footer className="footer">
        {d.footer}
      </footer>
    </>
  )
}
