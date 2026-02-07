export const LoadingIndicator = () => (
  <div className="mb-4">
    <div className="message-card assistant">
      <div className="message-meta">
        <div className="bubble-avatar">AI</div>
        <span className="text-xs uppercase tracking-[0.2em] text-[var(--text-dim)]">Calculating</span>
        <div className="loading-pill">
          <div className="w-2 h-2 rounded-full bg-[var(--aqua)] animate-bounce"></div>
          <div className="w-2 h-2 rounded-full bg-[var(--aqua)] animate-bounce" style={{ animationDelay: '120ms' }}></div>
          <div className="w-2 h-2 rounded-full bg-[var(--aqua)] animate-bounce" style={{ animationDelay: '240ms' }}></div>
        </div>
      </div>
      <div className="message-text text-[var(--text-dim)]">Thinking...</div>
    </div>
  </div>
); 
