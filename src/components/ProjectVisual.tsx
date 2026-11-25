type Props = { type: string; accent: string };

export function ProjectVisual({ type, accent }: Props) {
  return (
    <div className={`project-visual ${type} ${accent}`} aria-hidden="true">
      <span className="visual-note">UI illustration</span>
      {type === "dashboard" && (
        <div className="mock-window">
          <div className="mock-sidebar"><i /><i /><i /><i /><i /></div>
          <div className="mock-content">
            <div className="mock-top"><b>Overview</b><span>•••</span></div>
            <div className="mock-stats"><i /><i /><i /></div>
            <div className="mock-chart"><div className="chart-labels"><i /><i /><i /></div><div className="chart-line" /></div>
            <div className="mock-bottom"><i /><i /><i /></div>
          </div>
        </div>
      )}
      {type === "qr-ordering" && (
        <div className="qr-order-window">
          <div className="qr-order-header"><span>QR ORDER / MENU</span><span>SCAN TO START</span></div>
          <div className="qr-order-content"><div className="qr-art" aria-hidden="true"><i /><i /><i /><i /></div><div className="qr-menu-lines"><b>Scan. Browse. Order.</b><i /><i /><i /><span>VIEW MENU&nbsp; ↗</span></div></div>
          <div className="qr-order-footer"><span>FOOD ORDERING</span><span>◉ QR</span></div>
        </div>
      )}
      {type === "code" && (
        <div className="code-window">
          <div className="code-top"><i /><i /><i /><span>onechain.tech</span></div>
          <div className="code-lines">
            <div><em>01</em><span className="purple">project</span>: <span className="cyan">Corporate Website</span></div>
            <div><em>02</em><span className="purple">framework</span>: Next.js</div>
            <div><em>03</em><span className="purple">language</span>: TypeScript</div>
            <div><em>04</em><span className="purple">API docs</span>: Swagger</div>
            <div><em>05</em><span className="purple">state</span>: Redux Toolkit</div>
            <div><em>06</em><span className="purple">data</span>: React Query</div>
          </div>
          <div className="code-orb" />
        </div>
      )}
    </div>
  );
}
