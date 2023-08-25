import React, { useState } from 'react';
import './App.css';
import { CSSTransition } from 'react-transition-group';      //for content switcher transition
import TickIcon from './tickIcon.svg';


// Accordion component
function Accordion() {
  const [expanded, setExpanded] = useState(false);          //state variable and function from hook

  const toggleAccordion = () => {                           //toggling state based on actions
    setExpanded(!expanded);
  };

  return (
    <div className={`accordion ${expanded ? 'expanded' : ''}`}>
      <div className="accordion-header" onClick={toggleAccordion}>    {/*detecting clicks */}
        <h3 className="accordion-title">This is an Accordion</h3>
        <span><button className={`accordion-arrow ${expanded ? 'up' : ''}`}>    {/* setting arrow direction based on click */}
          &#9662;
        </button></span>
      </div>
      {/* eslint-disable-next-line */}
      <hr className={'accordion-line ${expanded ? "visible" : ""}'}/>           {/*displaying accordion content when tapped */}
      {expanded && (
        <div className="accordion-content">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Nunc auctor sed ante fringilla consequat. 
            Quisque euismod diam faucibus lectus ornare ullamcorper. 
            Praesent a feugiat orci. Vivamus dapibus risus magna, 
            ullamcorper aliquet nibh vehicula sed. Nullam et vehicula sem. 
            Donec sagittis, dui et dictum dictum, urna nibh accumsan lacus, 
            vel aliquet tellus metus et elit. Nunc laoreet justo nunc, 
            sit amet egestas sapien maximus vitae. Sed ut urna pharetra 
            lectus laoreet pharetra ut eget nisl. Nullam et vehicula sem. 
            Donec sagittis, dui et dictum dictum, urna nibh accumsan lacus, 
            vel aliquet tellus metus et elit.</p>
        </div>
      )}
    </div>
  );
}

//Checkbox Component
function Checkbox() {
  const [checked, setChecked] = useState(false);

  const handleCheckboxChange = () => {          //toggling state
    setChecked(!checked);
  };

  return (
    <div className="checkbox-container">
      <label>
        <input
          type="checkbox"
          checked={checked}
          onChange={handleCheckboxChange}
        />
        <span className={checked ? 'checkbox-label checked' : 'checkbox-label'}>
          Check this out!           {/* ^toggles check mark*/}
        </span>
      </label>
    </div>
  );
}


// Content Switcher component
function ContentSwitcher() {
  const [content, setContent] = useState('Content A');

  const handleContentChange = (newContent) => {  //updates content displayed depending on latest click
    setContent(newContent);
  };

  return (
    <div className="content-switcher">
      <button
        className={`content-switcher-button ${
          content === 'Content A' ? 'selected' : ''
        }`}           // defines the button 
        onClick={() => handleContentChange('You chose Content A')}>
         <span>Content A</span> {content === 'You chose Content A' && <img src={TickIcon} alt="Tick" className="tick-icon" />}
      </button>                     {/*displays text and inserts check mark inside button if clicked */}
      <button
        className={`content-switcher-button ${
          content === 'Content B' ? 'selected' : ''
        }`}
        onClick={() => handleContentChange('You chose Content B')}>
        <span>Content B</span> {content === 'You chose Content B' && <img src={TickIcon} alt="Tick" className="tick-icon" />}
      </button>
      <CSSTransition        //defines a particular transition
        in={true}
        appear={true}
        timeout={500}
        classNames="fade"
      >
        <p className="content">{content}</p>    {/* displays text relevant to the button tapped */}
      </CSSTransition>
    </div>
  );
}

// Dropdown component
function Dropdown() {
  const [selectedOption, setSelectedOption] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleOptionChange = (event) => {             //ensuring user doesn't select "Select an option" from dropdown
    const newOption = event.target.value;
    if (newOption !== '') {
      setSelectedOption(newOption);
      setErrorMessage('');
    } else {                                          //error message
      setErrorMessage('You have to choose a valid option.');
    }
  };

  return (
    <div className="custom-dropdown">
      <select
        value={selectedOption}
        onChange={handleOptionChange}
        className={`dropdown-select ${errorMessage ? 'error' : ''}`}    //initialising error message element
      > 
        <option value="">Select an option</option>
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
        <option value="option3">Option 3</option>
      </select>
      {errorMessage && <p className="error-message">{errorMessage}</p>}
    </div>
  );
}

// App component
function App() {
  return (
    <div className="App">
      <h1>An Assortment of React Components</h1>
      <Accordion />
      <Checkbox />
      <ContentSwitcher />
      <Dropdown />
    </div>
  );
}

export default App;
