import { PlusCircle, MessageCircle, Trash2, Edit2, PanelLeftClose, PanelLeftOpen } from 'lucide-react';

interface SidebarProps {
  conversations: Array<{ id: string; title: string }>;
  currentConversationId: string | null;
  handleNewChat: () => void;
  setCurrentConversationId: (id: string) => void;
  handleDeleteChat: (id: string) => void;
  editingChatId: string | null;
  setEditingChatId: (id: string | null) => void;
  editingTitle: string;
  setEditingTitle: (title: string) => void;
  handleUpdateChatTitle: (id: string, title: string) => void;
  collapsed: boolean;
  onToggleCollapse: () => void;
}

export const Sidebar = ({ 
  conversations, 
  currentConversationId, 
  handleNewChat, 
  setCurrentConversationId, 
  handleDeleteChat, 
  editingChatId, 
  setEditingChatId, 
  editingTitle, 
  setEditingTitle, 
  handleUpdateChatTitle,
  collapsed,
  onToggleCollapse,
}: SidebarProps) => (
  <div className={`operator-sidebar ${collapsed ? 'collapsed' : ''}`}>
    <div className="sidebar-inner">
      <div className="sidebar-header">
        <button
          onClick={onToggleCollapse}
          className="sidebar-toggle"
          aria-label={collapsed ? 'Expand sidebar' : 'Collapse sidebar'}
        >
          {collapsed ? <PanelLeftOpen className="w-4 h-4" /> : <PanelLeftClose className="w-4 h-4" />}
        </button>
        <button
          onClick={handleNewChat}
          className={`sidebar-btn ${collapsed ? 'icon-only' : ''}`}
          aria-label="New chat"
        >
          <PlusCircle className="w-4 h-4" />
          {!collapsed && <span>&nbsp;New Chat</span>}
        </button>
      </div>

      <div className={`chat-list ${collapsed ? 'hidden' : ''}`}>
        {conversations.map((chat) => (
          <div
            key={chat.id}
            className={`chat-item ${chat.id === currentConversationId ? 'active' : ''}`}
            onClick={() => setCurrentConversationId(chat.id)}
          >
            <MessageCircle className="w-4 h-4 text-[var(--aqua)]" />
            {editingChatId === chat.id ? (
              <input
                type="text"
                value={editingTitle}
                onChange={(e) => setEditingTitle(e.target.value)}
                onFocus={(e) => e.target.select()}
                onBlur={() => {
                  if (editingTitle.trim()) {
                    handleUpdateChatTitle(chat.id, editingTitle)
                  }
                  setEditingChatId(null)
                  setEditingTitle('')
                }}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' && editingTitle.trim()) {
                    handleUpdateChatTitle(chat.id, editingTitle)
                  } else if (e.key === 'Escape') {
                    setEditingChatId(null)
                    setEditingTitle('')
                  }
                }}
                className="flex-1 text-sm bg-transparent text-[var(--text-primary)] focus:outline-none"
                autoFocus
              />
            ) : (
              <span className="chat-title truncate">{chat.title}</span>
            )}
            <div className="chat-actions">
              <button
                onClick={(e) => {
                  e.stopPropagation()
                  setEditingChatId(chat.id)
                  setEditingTitle(chat.title)
                }}
                className="icon-btn"
                aria-label="Rename chat"
              >
                <Edit2 className="w-3 h-3" />
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation()
                  handleDeleteChat(chat.id)
                }}
                className="icon-btn"
                aria-label="Delete chat"
              >
                <Trash2 className="w-3 h-3" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
); 
