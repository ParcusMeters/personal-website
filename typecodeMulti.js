import React, { useState, useEffect } from 'react';

const TypingAnimation = ({ sentences, typingDelay = 150, erasingDelay = 100, delay = 1500 }) => {
  const [currentSentenceIndex, setCurrentSentenceIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  const [isCursorVisible, setIsCursorVisible] = useState(true);

  useEffect(() => {
    let timer;
    if (isTyping) {
      timer = setTimeout(() => {
        const currentSentence = sentences[currentSentenceIndex];
        setDisplayText(currentSentence.substring(0, displayText.length + 1));

        if (displayText === currentSentence) {
          setIsTyping(false);
          clearTimeout(timer);
          setTimeout(() => {
            setIsTyping(true);
          }, 9999999); // Delay before erasing starts
        }
      }, typingDelay);
    } else {
      timer = setTimeout(() => {
        setDisplayText(displayText.substring(0, displayText.length - 1));

        if (displayText === '') {
          setIsTyping(true);
          setCurrentSentenceIndex((prevIndex) => (prevIndex + 1) % sentences.length); // Cycle to the next sentence
          clearTimeout(timer);
        }
      }, erasingDelay);
    }

    return () => clearTimeout(timer);
  }, [currentSentenceIndex, displayText, isTyping, sentences, typingDelay, erasingDelay, delay]);

  useEffect(() => {
    const typingTimer = setTimeout(() => setIsTyping(false), delay);
    const erasingTimer = setTimeout(() => setIsTyping(true), delay + sentences[currentSentenceIndex].length + 500);

    const cursorTimer = setInterval(() => {
      setIsCursorVisible((prevIsCursorVisible) => !prevIsCursorVisible);
    }, 500); // Cursor blinking interval

    return () => {
      clearTimeout(typingTimer);
      clearTimeout(erasingTimer);
      clearInterval(cursorTimer);
    };
  }, [sentences, currentSentenceIndex, delay]);

  useEffect(() => {
    // Reset current sentence index when sentences change
    setCurrentSentenceIndex(0);
  }, [sentences]);

  return (
    <span>
      {displayText}
      <span className={`typing-cursor ${isCursorVisible ? '' : 'hidden'}`}>|</span>
    </span>
  );
};

export default TypingAnimation;
