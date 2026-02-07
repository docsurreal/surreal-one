import { Send } from 'lucide-react';

interface WelcomeScreenProps {
  input: string;
  setInput: (value: string) => void;
  handleSubmit: (e: React.FormEvent) => Promise<void>;
  isLoading: boolean;
}

export const WelcomeScreen = ({ 
  input, 
  setInput, 
  handleSubmit, 
  isLoading 
}: WelcomeScreenProps) => (
  <div className="flex items-center justify-center flex-1 px-4">
    <div className="w-full max-w-4xl mx-auto">
      <div className="welcome-hero">
        <h1 className="welcome-title">Surrealium Chat</h1>
        <p className="welcome-copy">
          You are plugged into the Operator. Issue commands, iterate on ideas, or explore the network — the neon console is yours.
        </p>
      </div>
      <div className="glass-card">
        <form onSubmit={handleSubmit}>
          <div className="input-shell">
            <textarea
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' && !e.shiftKey) {
                  e.preventDefault()
                  handleSubmit(e)
                }
              }}
              placeholder="Command the Operator..."
              className="input-area"
              rows={3}
              style={{ minHeight: '88px' }}
            />
            <div className="input-actions">
              <button
                type="submit"
                disabled={!input.trim() || isLoading}
                className="circle-btn"
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
); 
