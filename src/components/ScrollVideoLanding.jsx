import { useEffect, useRef } from "react";

export default function ScrollVideoLanding() {
  const containerRef = useRef(null);
  const rafRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const clamp = (v) => Math.min(1, Math.max(0, v));
    const easeOut = (t) => 1 - Math.pow(1 - t, 3);

    const onScroll = () => {
      if (rafRef.current) return;

      rafRef.current = requestAnimationFrame(() => {
        const rect = container.getBoundingClientRect();
        const raw = -rect.top / (rect.height - window.innerHeight);
        const progress = clamp(raw);

        container.style.setProperty("--progress", progress);
        container.style.setProperty("--ease", easeOut(progress));

        rafRef.current = null;
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <section ref={containerRef} className="scrolly-section">
      {/* BACKGROUND */}
      <div className="scrolly-bg" />
      <div className="scrolly-vignette" />

      {/* PROGRESS */}
      <div className="progress-bar" />

      {/* STAGES */}
      <div className="scrolly-stages">
        <section className="stage stage-1">
          <div className="stage-content">
            <h1>1892</h1>
            <p>When chai first found its place in Indian homes</p>
          </div>
        </section>

        <section className="stage stage-2">
          <div className="stage-content">
            <h2>Royal Indian Households</h2>
            <p>Steeped in generations of tradition</p>
          </div>
        </section>

        <section className="stage stage-3">
          <div className="stage-content">
            <h2>Instant. Elegant. Authentic.</h2>
            <p>Heritage perfected for modern rituals</p>
          </div>
        </section>

        <section className="stage stage-4">
          <div className="stage-content">
            <h2>Coming Soon</h2>
            <p>Be the first to experience Chai Royale</p>
            <div className="email-signup">
              <input className="email-input" placeholder="Enter your email" />
              <button className="email-btn">Notify Me</button>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
}
