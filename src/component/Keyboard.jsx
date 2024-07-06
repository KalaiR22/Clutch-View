import React, { useState, useEffect } from 'react';
import { ImShift } from "react-icons/im";
import { LuDelete } from "react-icons/lu";
import { RiDeleteBin6Line } from "react-icons/ri";
import { VscNewline } from "react-icons/vsc";

import '../pages/Home.css'
import EyeMove from './EyesMove';

const { speechSynthesis, SpeechSynthesisUtterance } = window;

export default function Keyboard( ) {
  
  const [isNumericKeyboard, setIsNumericKeyboard] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [capsLock, setCapslock] = useState(false);
  let timer;
  
  
  


    // Return your JSX with the input field

  useEffect(() => {
    return () => {
      clearTimeout(timer);
    };
  }, [timer]);


// Import the speech synthesis library (no need for destructuring)


// ...

const speak = (text) => {
  const utterance = new SpeechSynthesisUtterance(text);
  window.speechSynthesis.speak(utterance); // Use window.speechSynthesis.speak
};

// ...


// Modify the handleMouseOver function to handle special characters
const handleMouseOver = (letter) => {
  let pronunciation = letter;

  // Define pronunciations for special characters
  const specialCharacters = {
    '-': 'minus',
    '(': 'open parenthesis',
    ')': 'close parenthesis',
    '!':'exclamation mark',
    ':': 'colon',
    ';': 'semicolon',
    '"':'double quotation',
    ',':'comma',
    '.':'dot',
    '?':'question mark',
    '`':'backtick',
    '~':'tilde',
    '<':'lesser then',
    '>':'greater then'
  
    // Add more special characters and their pronunciations as needed
  };

  if (specialCharacters.hasOwnProperty(letter)) {
    pronunciation = specialCharacters[letter];
  }

  timer = setTimeout(() => {
    const utterance = new SpeechSynthesisUtterance(pronunciation);
    speechSynthesis.speak(utterance);

    setInputValue((prevValue) => prevValue + (capsLock ? letter.toUpperCase() : letter.toLowerCase()));
  }, 1000);
};

const handletextChange = (e) => {
  // Replace Enter key with newline character
  const value = e.target.value.replace(/\r?\n/g, '\n');
  setInputValue(value);
};





 const handleChangeMouseOver = () => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      setIsNumericKeyboard((prevValue) => !prevValue);
    }, 1000);
  };

  const handleMouseOut = () => {
    clearTimeout(timer);
  };
 const handlecapsMouseOver = () => {
  // Clear any existing timeouts before setting a new one
  if (timer !== null) {
    clearTimeout(timer);
  }

  // Set a new timeout to speak "shift" and toggle capsLock after 2 seconds
  timer = setTimeout(() => {
    // Speak "shift" using the Web Speech API
    const synth = window.speechSynthesis;
    const utterance = new SpeechSynthesisUtterance("shift");
    synth.speak(utterance);

    // Toggle the capsLock state
    setCapslock((prevCapslock) => !prevCapslock);
  }, 1000);
};


   let deleteTimeout;

 const removeLetter = () => {
  if (inputValue.length > 0) {
    setInputValue(inputValue.slice(0, -1));

    // Speak "delete" using the Web Speech API
    const synth = window.speechSynthesis;
    const utterance = new SpeechSynthesisUtterance("delete");
    synth.speak(utterance);
  }
};

  const startDeleteTimeout = () => {
    deleteTimeout = setTimeout(removeLetter, 1000);
  };

  const stopDeleteTimeout = () => {
    clearTimeout(deleteTimeout);
  };

  

  console.log(inputValue)

 let spaceTimeout;

 const addSpace = () => {
  // Speak "space" using the Web Speech API
  const synth = window.speechSynthesis;
  const utterance = new SpeechSynthesisUtterance("space");
  synth.speak(utterance);

  // Add a space to the inputValue
  setInputValue(inputValue + ' ');
};


  const startSpaceTimeout = () => {
    spaceTimeout = setTimeout(addSpace, 1000);
  };


  const stopSpaceTimeout = () => {
    clearTimeout(spaceTimeout);
  };

 let newLineTimeout;

 const addNewLine = () => {
  setInputValue(inputValue + '\n');

  // Speak "enter" using the Web Speech API
  const synth = window.speechSynthesis;
  const utterance = new SpeechSynthesisUtterance("enter");
  synth.speak(utterance);
};


  const startNewLineTimeout = () => {
    newLineTimeout = setTimeout(addNewLine, 1000);
  };

  const stopNewLineTimeout = () => {
    clearTimeout(newLineTimeout);
  };
  const deleteAllValues = () => {
    setInputValue('');
    const synth = window.speechSynthesis;
  const utterance = new SpeechSynthesisUtterance("delete all");
  synth.speak(utterance);
  };

  const startDeleteAllTimeout = () => {
    deleteTimeout = setTimeout(deleteAllValues, 1000);
  };

  const stopDeleteAllTimeout = () => {
    clearTimeout(deleteTimeout);
  };

  const renderKeyboardKeys = () => {
    if (isNumericKeyboard) {
      return (
  
  <div className='btn-row'>
    <div>
  <button className='btn alp' onMouseOver={() => handleMouseOver('A')} onMouseOut={handleMouseOut}>{capsLock?'A' : 'a'}</button>
  <button className='btn alp' onMouseOver={() => handleMouseOver('B')} onMouseOut={handleMouseOut}>{capsLock? 'B' : 'b'}</button>
  <button className='btn alp' onMouseOver={() => handleMouseOver('C')} onMouseOut={handleMouseOut}>{capsLock? 'C' : 'c'} </button>
  <button className='btn alp' onMouseOver={() => handleMouseOver('D')} onMouseOut={handleMouseOut}> {capsLock? 'D' : 'd'}</button>
  <button className='btn alp' onMouseOver={() => handleMouseOver('E')} onMouseOut={handleMouseOut}>{capsLock? 'E' : 'e'}</button>
  <button className='btn alp' onMouseOver={() => handleMouseOver('F')} onMouseOut={handleMouseOut}>{capsLock? 'F' : 'f'}</button>
  <button className='btn alp' onMouseOver={() => handleMouseOver('G')} onMouseOut={handleMouseOut}>{capsLock? 'G' : 'g'}</button>
</div>
<div>
  <button className='btn alp' onMouseOver={() => handleMouseOver('H')} onMouseOut={handleMouseOut}>{capsLock? 'H' : 'h'}</button>
  <button className='btn alp' onMouseOver={() => handleMouseOver('I')} onMouseOut={handleMouseOut}>{capsLock? 'I' : 'i'}</button>
  <button className='btn alp' onMouseOver={() => handleMouseOver('J')} onMouseOut={handleMouseOut}>{capsLock? 'J' : 'j'}</button>
  <button className='btn alp' onMouseOver={() => handleMouseOver('K')} onMouseOut={handleMouseOut}>{capsLock? 'K' : 'k'}</button>
  <button className='btn alp' onMouseOver={() => handleMouseOver('L')} onMouseOut={handleMouseOut}>{capsLock? 'L' : 'l'}</button>
  <button className='btn alp' onMouseOver={() => handleMouseOver('M')} onMouseOut={handleMouseOut}>{capsLock? 'M' : 'm'}</button>
  <button className='btn alp' onMouseOver={() => handleMouseOver('N')} onMouseOut={handleMouseOut}>{capsLock? 'N' : 'n'}</button>
</div>
<div>
  <button className='btn alp' onMouseOver={() => handleMouseOver('O')} onMouseOut={handleMouseOut}>{capsLock? 'O' : 'o'}</button>
  <button className='btn alp' onMouseOver={() => handleMouseOver('P')} onMouseOut={handleMouseOut}>{capsLock? 'P' : 'p'}</button>
  <button className='btn alp' onMouseOver={() => handleMouseOver('Q')} onMouseOut={handleMouseOut}>{capsLock? 'Q' : 'q'}</button>
  <button className='btn alp' onMouseOver={() => handleMouseOver('R')} onMouseOut={handleMouseOut}>{capsLock? 'R' : 'r'}</button>
  <button className='btn alp' onMouseOver={() => handleMouseOver('S')} onMouseOut={handleMouseOut}>{capsLock? 'S' : 's'}</button>
  <button className='btn alp' onMouseOver={() => handleMouseOver('T')} onMouseOut={handleMouseOut}>{capsLock? 'T' : 't'}</button>
  <button className='btn alp' onMouseOver={() => handleMouseOver('U')} onMouseOut={handleMouseOut}>{capsLock? 'U' : 'u'}</button>
</div>
<div>
  <button className='btn ele' onMouseOver={handlecapsMouseOver} onMouseOut={handleMouseOut}><ImShift  className="large-icon" /></button>
  <button className='btn alp' onMouseOver={() => handleMouseOver('V')} onMouseOut={handleMouseOut}>{capsLock? 'V' : 'v'}</button>
  <button className='btn alp' onMouseOver={() => handleMouseOver('W')} onMouseOut={handleMouseOut}>{capsLock? 'W' : 'w'}</button>
  <button className='btn alp' onMouseOver={() => handleMouseOver('X')} onMouseOut={handleMouseOut}> {capsLock? 'X' : 'x'}</button>
  <button className='btn alp' onMouseOver={() => handleMouseOver('Y')} onMouseOut={handleMouseOut}>{capsLock? 'Y' : 'y'}</button>
  <button className='btn alp' onMouseOver={() => handleMouseOver('Z')} onMouseOut={handleMouseOut}>{capsLock? 'Z' : 'z'}</button>
  <button className='btn ele' onMouseOver={startDeleteTimeout} onMouseOut={stopDeleteTimeout}><LuDelete className="large-icon"/></button>
</div>
<div>
  <button className='btn ele'  onMouseOver={startDeleteAllTimeout} onMouseOut={stopDeleteAllTimeout}><RiDeleteBin6Line className="large-icon"/></button>
  <button className='btn alp' onMouseOver={() => handleMouseOver('.')} onMouseOut={handleMouseOut}>.</button>
  <button className='btn alp' onMouseOver={handleChangeMouseOver}  onMouseOut={handleMouseOut}>123</button>
  <button className='btn alp' onMouseOver={() => handleMouseOver(',')} onMouseOut={handleMouseOut}>,</button>
  <button className='btn ele' onMouseOver={startNewLineTimeout} onMouseOut={stopNewLineTimeout}><VscNewline className="large-icon"/></button>
        
</div>
<div>
  <button className='alp space' onMouseOver={startSpaceTimeout} onMouseOut={stopSpaceTimeout}>Space</button>
</div>
</div>
      );
    } else {
      return (
        
  <div className='btn-row'>
  <div>
  <button className='btn alp' onMouseOver={() => handleMouseOver('+')} onMouseOut={handleMouseOut}>+</button>
  <button className='btn alp' onMouseOver={() => handleMouseOver('1')} onMouseOut={handleMouseOut}>1</button>
  <button className='btn alp' onMouseOver={() => handleMouseOver('2')} onMouseOut={handleMouseOut}>2</button>
  <button className='btn alp' onMouseOver={() => handleMouseOver('3')} onMouseOut={handleMouseOut}>3</button>
  <button className='btn alp' onMouseOver={() => handleMouseOver('4')} onMouseOut={handleMouseOut}>4</button>
  <button className='btn alp' onMouseOver={() => handleMouseOver('5')} onMouseOut={handleMouseOut}>5</button>
  <button className='btn alp' onMouseOver={() => handleMouseOver('*')} onMouseOut={handleMouseOut}>*</button>
</div>
<div>
  <button className='btn alp' onMouseOver={() => handleMouseOver('-')} onMouseOut={handleMouseOut}>-</button>
  <button className='btn alp' onMouseOver={() => handleMouseOver('6')} onMouseOut={handleMouseOut}>6</button>
  <button className='btn alp' onMouseOver={() => handleMouseOver('7')} onMouseOut={handleMouseOut}>7</button>
  <button className='btn alp' onMouseOver={() => handleMouseOver('8')} onMouseOut={handleMouseOut}>8</button>
  <button className='btn alp' onMouseOver={() => handleMouseOver('9')} onMouseOut={handleMouseOut}>9</button>
  <button className='btn alp' onMouseOver={() => handleMouseOver('0')} onMouseOut={handleMouseOut}>0</button>
  <button className='btn alp' onMouseOver={() => handleMouseOver('%')} onMouseOut={handleMouseOut}>%</button>
</div>
<div>
  <button className='btn alp' onMouseOver={() => handleMouseOver('!')} onMouseOut={handleMouseOut}>!</button>
  <button className='btn alp' onMouseOver={() => handleMouseOver('@')} onMouseOut={handleMouseOut}>@</button>
  <button className='btn alp' onMouseOver={() => handleMouseOver('#')} onMouseOut={handleMouseOut}>#</button>
  <button className='btn alp' onMouseOver={() => handleMouseOver('$')} onMouseOut={handleMouseOut}>$</button>
  <button className='btn alp' onMouseOver={() => handleMouseOver('_')} onMouseOut={handleMouseOut}>_</button>
  <button className='btn alp' onMouseOver={() => handleMouseOver('(')} onMouseOut={handleMouseOut}>{`(`}</button>
  <button className='btn alp' onMouseOver={() => handleMouseOver(')')} onMouseOut={handleMouseOut}>{`)`}</button>
</div>
<div>
  <button className='btn ele' onMouseOver={() => handleMouseOver('?')} onMouseOut={handleMouseOut}>?</button>
  <button className='btn alp' onMouseOver={() => handleMouseOver('=')} onMouseOut={handleMouseOut}>=</button>
  <button className='btn alp' onMouseOver={() => handleMouseOver('&')} onMouseOut={handleMouseOut}>&</button>
  <button className='btn alp' onMouseOver={() => handleMouseOver(';')} onMouseOut={handleMouseOut}>;</button>
  <button className='btn alp' onMouseOver={() => handleMouseOver('`')} onMouseOut={handleMouseOut}>`</button>
  <button className='btn alp' onMouseOver={() => handleMouseOver('/')} onMouseOut={handleMouseOut}>/</button>
  <button className='btn ele' onMouseOver={startDeleteTimeout} onMouseOut={stopDeleteTimeout}><LuDelete className="large-icon"/></button>
</div>
<div>
  <button className='btn ele'  onMouseOver={startDeleteAllTimeout} onMouseOut={stopDeleteAllTimeout}><RiDeleteBin6Line className="large-icon"/></button>
  <button className='btn alp' onMouseOver={() => handleMouseOver('<')} onMouseOut={handleMouseOut}>{`<`}</button>
  <button className='btn alp' onMouseOver={() => handleMouseOver('.')} onMouseOut={handleMouseOut}>.</button>
  <button className='btn alp' onMouseOver={handleChangeMouseOver}  onMouseOut={handleMouseOut}>ABC</button>
  <button className='btn alp' onMouseOver={() => handleMouseOver(',')} onMouseOut={handleMouseOut}>,</button>
  <button className='btn alp' onMouseOver={() => handleMouseOver('>')} onMouseOut={handleMouseOut}>{`>`}</button>
  <button className='btn ele' onMouseOver={startNewLineTimeout} onMouseOut={stopNewLineTimeout}><VscNewline className="large-icon"/></button>
        
</div>
<div>
  <button className='alp space' onMouseOver={startSpaceTimeout} onMouseOut={stopSpaceTimeout}>Space</button>
</div>
</div>
 
      );
    }
  };

  return (
    <div className='leftpart'>
      <div>
        <EyeMove inputValue={inputValue}/>
      </div>
     <div  className='board-layout'>
      <div className='text-box'>
        {/* <p>{inputValue.length}/100</p> */}
        <textarea
       value={inputValue}
       onChange={handletextChange}
        style={{ whiteSpace: "pre-line" }}
        cols="50"
        rows=""
        placeholder='Your text goes here.....'
      ></textarea>
      </div>
        
        {renderKeyboardKeys()}
     
     </div>
 </div>
    
  );
}
