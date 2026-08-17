import { useState } from 'react';
import WindowContainer from './WindowContainer';
import { Calculator as CalcIcon, Delete } from 'lucide-react';

export default function CalculatorApp({ title, isMinimized, zIndex, onFocus, onMinimize, onClose }) {
  const [display, setDisplay] = useState('0');
  const [equation, setEquation] = useState('');
  const [prevValue, setPrevValue] = useState(null);
  const [operation, setOperation] = useState(null);
  const [waitingForOperand, setWaitingForOperand] = useState(false);

  const inputDigit = (digit) => {
    if (waitingForOperand) {
      setDisplay(String(digit));
      setWaitingForOperand(false);
    } else {
      setDisplay(display === '0' ? String(digit) : display + digit);
    }
  };

  const inputDot = () => {
    if (waitingForOperand) {
      setDisplay('0.');
      setWaitingForOperand(false);
    } else if (!display.includes('.')) {
      setDisplay(display + '.');
    }
  };

  const clearAll = () => {
    setDisplay('0');
    setEquation('');
    setPrevValue(null);
    setOperation(null);
    setWaitingForOperand(false);
  };

  const clearEntry = () => {
    setDisplay('0');
  };

  const backspace = () => {
    if (waitingForOperand) return;
    if (display.length > 1) {
      setDisplay(display.slice(0, -1));
    } else {
      setDisplay('0');
    }
  };

  const toggleSign = () => {
    const val = parseFloat(display);
    if (!isNaN(val)) {
      setDisplay(String(-val));
    }
  };

  const inputPercent = () => {
    const val = parseFloat(display);
    if (!isNaN(val)) {
      setDisplay(String(val / 100));
    }
  };

  const performOperation = (nextOp) => {
    const inputValue = parseFloat(display);

    if (prevValue === null) {
      setPrevValue(inputValue);
      setEquation(`${inputValue} ${nextOp}`);
    } else if (operation) {
      const currentValue = prevValue || 0;
      let newValue = currentValue;

      if (operation === '+') newValue = currentValue + inputValue;
      else if (operation === '-') newValue = currentValue - inputValue;
      else if (operation === '×') newValue = currentValue * inputValue;
      else if (operation === '÷') newValue = inputValue === 0 ? 'Error' : currentValue / inputValue;

      setPrevValue(typeof newValue === 'number' ? newValue : null);
      setDisplay(String(newValue));
      setEquation(nextOp === '=' ? '' : `${newValue} ${nextOp}`);
    }

    setWaitingForOperand(true);
    setOperation(nextOp === '=' ? null : nextOp);
  };

  const btnStyle = {
    flex: 1,
    height: '42px',
    border: '1px solid var(--win-border)',
    borderRadius: '4px',
    backgroundColor: 'var(--win-surface)',
    color: 'var(--win-text)',
    fontSize: '14px',
    fontWeight: 500,
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'background-color 0.1s ease',
    userSelect: 'none'
  };

  const opBtnStyle = {
    ...btnStyle,
    backgroundColor: 'rgba(0, 120, 212, 0.1)',
    color: 'var(--win-accent)',
    fontWeight: 600
  };

  const equalBtnStyle = {
    ...btnStyle,
    backgroundColor: 'var(--win-accent)',
    color: '#ffffff',
    fontWeight: 700
  };

  return (
    <WindowContainer
      defaultWidth={320}
      defaultHeight={460}
      title={title || 'Calculator'}
      icon={<CalcIcon size={15} style={{ color: '#10b981' }} />}
      isMinimized={isMinimized}
      zIndex={zIndex}
      onFocus={onFocus}
      onMinimize={onMinimize}
      onClose={onClose}
    >
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', padding: '16px', gap: '10px', backgroundColor: 'var(--win-bg)' }}>
        {/* Display Area */}
        <div style={{
          backgroundColor: 'var(--win-surface)',
          border: '1px solid var(--win-border)',
          borderRadius: '8px',
          padding: '12px 16px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-end',
          justifyContent: 'center',
          minHeight: '64px'
        }}>
          <div style={{ fontSize: '11px', color: 'var(--win-text-muted)', minHeight: '14px' }}>
            {equation}
          </div>
          <div style={{ fontSize: '28px', fontWeight: 600, color: 'var(--win-text)', overflow: 'hidden', textOverflow: 'ellipsis', maxWidth: '100%' }}>
            {display}
          </div>
        </div>

        {/* Buttons Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '6px', flex: 1 }}>
          <button style={btnStyle} onClick={inputPercent}>%</button>
          <button style={btnStyle} onClick={clearEntry}>CE</button>
          <button style={btnStyle} onClick={clearAll}>C</button>
          <button style={btnStyle} onClick={backspace}><Delete size={16} /></button>

          <button style={btnStyle} onClick={() => inputDigit(7)}>7</button>
          <button style={btnStyle} onClick={() => inputDigit(8)}>8</button>
          <button style={btnStyle} onClick={() => inputDigit(9)}>9</button>
          <button style={opBtnStyle} onClick={() => performOperation('÷')}>÷</button>

          <button style={btnStyle} onClick={() => inputDigit(4)}>4</button>
          <button style={btnStyle} onClick={() => inputDigit(5)}>5</button>
          <button style={btnStyle} onClick={() => inputDigit(6)}>6</button>
          <button style={opBtnStyle} onClick={() => performOperation('×')}>×</button>

          <button style={btnStyle} onClick={() => inputDigit(1)}>1</button>
          <button style={btnStyle} onClick={() => inputDigit(2)}>2</button>
          <button style={btnStyle} onClick={() => inputDigit(3)}>3</button>
          <button style={opBtnStyle} onClick={() => performOperation('-')}>−</button>

          <button style={btnStyle} onClick={toggleSign}>±</button>
          <button style={btnStyle} onClick={() => inputDigit(0)}>0</button>
          <button style={btnStyle} onClick={inputDot}>.</button>
          <button style={opBtnStyle} onClick={() => performOperation('+')}>+</button>

          <div style={{ gridColumn: 'span 4', display: 'flex' }}>
            <button style={{ ...equalBtnStyle, width: '100%', height: '42px' }} onClick={() => performOperation('=')}>=</button>
          </div>
        </div>
      </div>
    </WindowContainer>
  );
}
