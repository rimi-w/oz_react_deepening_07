import { useState } from 'react';
import './App.css';
import Clock from './Clock';

/**
 * App 컴포넌트는 버튼을 통해 Clock 컴포넌트의 실행 상태를 제어하는 기능을 제공합니다.
 *
 * App 컴포넌트를 렌더링하면 버튼과 Clock 컴포넌트가 표시됩니다.
 *
 *
 * 상태:
 * - componentRunning: Clock 컴포넌트의 실행 여부를 나타내는 상태입니다. (true: 실행 중, false: 정지)
 *
 * 함수:
 * - handleComponentToggle: 버튼 클릭 시 componentRunning 상태를 토글하여 Timer 컴포넌트의 실행 상태를 변경합니다.
 *
 * 렌더링:
 * - 버튼: 현재 상태에 따라 '컴포넌트 정지' 또는 '컴포넌트 시작' 텍스트를 표시하며, 클릭 시 상태를 변경합니다.
 * - Clock 컴포넌트: componentRunning 상태가 true일 때만 렌더링됩니다.
 */
function App() {
  const [isStart, setIsStart] = useState(false);

  const handleComponentToggle = () => (
    isStart === false ? setIsStart(true) : setIsStart(false)
  );

  const onOff = () => (
    isStart === false ?
      <div>Clock On</div> :
      <div>Clock Off</div>
  );

  const buttonStyle = (
    isStart === true ?
      { backgroundColor: `#ff8a31d0` } :
      { backgroundColor: `#dadadabe` }
  );
  return (
    <div className='clock'>
      <button
        className='onOffButton'
        onClick={handleComponentToggle}
        style={buttonStyle}
      >
        {onOff()}
      </button>
      <div className="container">
        {isStart === true ? <Clock /> : null}
      </div>
    </div>
  );
}

export default App;
