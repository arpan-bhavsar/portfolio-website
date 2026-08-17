import { useState, useRef, useEffect } from 'react';
import WindowContainer from './WindowContainer';
import { Terminal as TerminalIcon } from 'lucide-react';

export default function TerminalApp({ title, isMinimized, zIndex, onFocus, onMinimize, onClose }) {
  const [history, setHistory] = useState([
    { type: 'system', text: 'Microsoft Windows [Version 11.0.22631.3007]' },
    { type: 'system', text: '(c) Arpan Bhavsar Portfolio OS. All rights reserved.\n' },
    { type: 'system', text: 'Type "help" to see available terminal commands.\n' }
  ]);
  const [input, setInput] = useState('');
  const [cmdHistory, setCmdHistory] = useState([]);
  const [historyIdx, setHistoryIdx] = useState(-1);
  const bottomRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  const handleCommand = (cmdStr) => {
    const trimmed = cmdStr.trim();
    if (!trimmed) {
      setHistory(prev => [...prev, { type: 'prompt', text: `C:\\Users\\Arpan> ` }]);
      return;
    }

    setCmdHistory(prev => [...prev, trimmed]);
    setHistoryIdx(-1);

    const parts = trimmed.split(' ');
    const cmd = parts[0].toLowerCase();
    const args = parts.slice(1).join(' ');

    let response = [];

    switch (cmd) {
      case 'help':
        response = [
          { type: 'output', text: 'Available Commands:' },
          { type: 'output', text: '  about      - Display overview of Arpan Bhavsar' },
          { type: 'output', text: '  skills     - List technical proficiencies & stack' },
          { type: 'output', text: '  projects   - Show highlighted portfolio projects' },
          { type: 'output', text: '  education  - Academic credentials and timeline' },
          { type: 'output', text: '  contact    - Reach out via email, phone, links' },
          { type: 'output', text: '  echo <msg> - Print a custom message' },
          { type: 'output', text: '  date       - Show current system date & time' },
          { type: 'output', text: '  whoami     - Current user session details' },
          { type: 'output', text: '  clear      - Clear the console window' },
          { type: 'output', text: '  exit       - Close the terminal window' }
        ];
        break;

      case 'about':
        response = [
          { type: 'output', text: '👤 Arpan Jagdish Bhavsar' },
          { type: 'output', text: 'Location: Bharuch, Gujarat, India' },
          { type: 'output', text: 'Role: Full-Stack Developer (MERN) & IoT Solutions Engineer' },
          { type: 'output', text: 'Passionate about engineering reliable web applications and IoT telemetry systems.' }
        ];
        break;

      case 'skills':
        response = [
          { type: 'output', text: '🛠️ TECHNICAL STACK' },
          { type: 'output', text: '• Frontend: React.js, Vite, TailwindCSS, Bootstrap 5, HTML5/CSS3' },
          { type: 'output', text: '• Backend:  Node.js, Express.js, REST APIs, WebSockets (Socket.io)' },
          { type: 'output', text: '• Database: MongoDB Atlas, Mongoose, MySQL, Firebase' },
          { type: 'output', text: '• Languages: JavaScript, Java, Python, C++, SQL' },
          { type: 'output', text: '• Tools:     Git, GitHub, Docker, Android Studio, Arduino IDE, Postman' }
        ];
        break;

      case 'projects':
        response = [
          { type: 'output', text: '🚀 HIGHLIGHTED PROJECTS' },
          { type: 'output', text: '1. Complaint Management System (MERN Stack, Cloudinary, RBAC)' },
          { type: 'output', text: '2. Smart Energy Meter (IoT + Firebase Realtime DB)' },
          { type: 'output', text: '3. Industrial Motor Vibration Monitor (IoT + MERN Telemetry)' },
          { type: 'output', text: '4. Sales Forecasting (Python, Predictive ML Analytics)' },
          { type: 'output', text: '5. Smart Stick for Visually Impaired (Ultrasonic IoT Assistance)' }
        ];
        break;

      case 'education':
        response = [
          { type: 'output', text: '🎓 EDUCATION' },
          { type: 'output', text: '• B.Tech Computer Science & Engineering (P. P. Savani University) | CGPA: 7.47' },
          { type: 'output', text: '• Diploma Computer Engineering (Shri K. J. Polytechnic, GTU) | CGPA: 7.95' }
        ];
        break;

      case 'contact':
        response = [
          { type: 'output', text: '📬 CONTACT DETAILS' },
          { type: 'output', text: '• Email:    arpanjbhavsar123@gmail.com' },
          { type: 'output', text: '• Phone:    +91 9979600129' },
          { type: 'output', text: '• GitHub:   https://github.com/arpan-bhavsar' },
          { type: 'output', text: '• LeetCode: https://leetcode.com/u/arpan-bhavsar' }
        ];
        break;

      case 'clear':
      case 'cls':
        setHistory([]);
        return;

      case 'date':
      case 'time':
        response = [{ type: 'output', text: new Date().toString() }];
        break;

      case 'whoami':
        response = [{ type: 'output', text: 'guest@arpan-portfolio-os (Standard User)' }];
        break;

      case 'echo':
        response = [{ type: 'output', text: args }];
        break;

      case 'exit':
        onClose();
        return;

      default:
        response = [
          { type: 'error', text: `'${cmd}' is not recognized as an internal or external command.` },
          { type: 'error', text: `Type "help" for a list of available commands.` }
        ];
        break;
    }

    setHistory(prev => [
      ...prev,
      { type: 'prompt', text: `C:\\Users\\Arpan> ${trimmed}` },
      ...response
    ]);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleCommand(input);
      setInput('');
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (cmdHistory.length > 0) {
        const nextIdx = historyIdx === -1 ? cmdHistory.length - 1 : Math.max(0, historyIdx - 1);
        setHistoryIdx(nextIdx);
        setInput(cmdHistory[nextIdx]);
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (cmdHistory.length > 0 && historyIdx !== -1) {
        const nextIdx = historyIdx + 1;
        if (nextIdx < cmdHistory.length) {
          setHistoryIdx(nextIdx);
          setInput(cmdHistory[nextIdx]);
        } else {
          setHistoryIdx(-1);
          setInput('');
        }
      }
    }
  };

  return (
    <WindowContainer
      defaultWidth={720}
      defaultHeight={460}
      title={title || 'Command Prompt'}
      icon={<TerminalIcon size={15} style={{ color: '#0ea5e9' }} />}
      isMinimized={isMinimized}
      zIndex={zIndex}
      onFocus={onFocus}
      onMinimize={onMinimize}
      onClose={onClose}
    >
      <div 
        style={{
          flex: 1,
          backgroundColor: '#0c0c0c',
          color: '#cccccc',
          fontFamily: "'Consolas', 'Courier New', monospace",
          fontSize: '13px',
          padding: '16px',
          overflowY: 'auto',
          lineHeight: '1.4',
          cursor: 'text'
        }}
        onClick={() => inputRef.current?.focus()}
      >
        {history.map((line, idx) => (
          <div 
            key={idx} 
            style={{
              color: line.type === 'error' ? '#ef4444' : line.type === 'prompt' ? '#ffffff' : line.type === 'system' ? '#94a3b8' : '#38bdf8',
              whiteSpace: 'pre-wrap',
              marginBottom: '4px'
            }}
          >
            {line.text}
          </div>
        ))}

        <div style={{ display: 'flex', alignItems: 'center', marginTop: '4px' }}>
          <span style={{ color: '#ffffff', marginRight: '8px' }}>C:\Users\Arpan&gt;</span>
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            autoFocus
            style={{
              flex: 1,
              backgroundColor: 'transparent',
              border: 'none',
              outline: 'none',
              color: '#ffffff',
              fontFamily: "'Consolas', 'Courier New', monospace",
              fontSize: '13px',
              padding: 0
            }}
          />
        </div>
        <div ref={bottomRef} />
      </div>
    </WindowContainer>
  );
}
