import { Send } from 'lucide-react';

interface ChatInputProps {
  input: string;
  setInput: (value: string) => void;
  handleSubmit: (e: React.FormEvent) => Promise<void>;
  isLoading: boolean;
}

export const ChatInput = ({ 
  input, 
  setInput, 
  handleSubmit, 
  isLoading 
}: ChatInputProps) => (
  <div className="operator-input-bar">
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
          rows={1}
          style={{ minHeight: '44px', maxHeight: '200px' }}
          onInput={(e) => {
            const target = e.target as HTMLTextAreaElement
            target.style.height = 'auto'
            target.style.height =
              Math.min(target.scrollHeight, 200) + 'px'
          }}
        />
        <div className="input-actions">
          <button
            type="submit"
            disabled={!input.trim() || isLoading}
            className="circle-btn"
            aria-label="Send"
          >
            <Send className="w-4 h-4" />
          </button>
        </div>
      </div>
    </form>
  </div>
); 
