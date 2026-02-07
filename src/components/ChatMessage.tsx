import ReactMarkdown from 'react-markdown'
import rehypeRaw from 'rehype-raw'
import rehypeSanitize from 'rehype-sanitize'
import rehypeHighlight from 'rehype-highlight'
import { Hexagon } from 'lucide-react'
import type { Message } from '../utils/ai'

export const ChatMessage = ({ message }: { message: Message }) => (
  <div className="mb-4">
    <div className={`message-card ${message.role === 'assistant' ? 'assistant' : 'user'}`}>
      <div className="message-meta">
        <div className={`bubble-avatar ${message.role === 'assistant' ? 'operator' : 'user'}`}>
          <Hexagon
            className="w-5 h-5"
            strokeWidth={2}
            fill={message.role === 'assistant' ? 'currentColor' : 'none'}
          />
        </div>
        <span className="text-xs uppercase tracking-[0.2em] text-[var(--text-dim)]">
          {message.role === 'assistant' ? 'Surrealium' : 'User'}
        </span>
      </div>
      <div className="message-text prose">
        <ReactMarkdown
          className="prose dark:prose-invert max-w-none"
          rehypePlugins={[
            rehypeRaw,
            rehypeSanitize,
            rehypeHighlight,
          ]}
        >
          {message.content}
        </ReactMarkdown>
      </div>
    </div>
  </div>
); 
