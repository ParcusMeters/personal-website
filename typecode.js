import React, { useState, useEffect, useRef } from 'react';

const TypingAnimation = ({ text, typingDelay = 150, erasingDelay = 100, delay = 1500 }) => {
  const [displayText, setDisplayText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [isCursorVisible, setIsCursorVisible] = useState(true);
  const [isVisible, setIsVisible] = useState(false);
  const animationRef = useRef(null);
  const targetRef = useRef(null);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5, // Trigger when at least 50% of the target is visible
    };

    const handleIntersection = (entries) => {
      const [entry] = entries;
      setIsVisible(entry.isIntersecting);
      if (entry.isIntersecting) {
        setIsTyping(true);
      }
    };

    const observer = new IntersectionObserver(handleIntersection, options);
    if (targetRef.current) {
      observer.observe(targetRef.current);
    }

    return () => {
      if (targetRef.current) {
        observer.unobserve(targetRef.current);
      }
    };
  }, []);

  useEffect(() => {
    let timer;
    if (isTyping && isVisible) {
      timer = setTimeout(() => {
        setDisplayText(text.substring(0, displayText.length + 1));
      }, typingDelay);
    } else {
      timer = setTimeout(() => {
        setDisplayText(text.substring(0, displayText.length - 1));
      }, erasingDelay);
    }

    return () => clearTimeout(timer);
  }, [displayText, isTyping, isVisible, text, typingDelay, erasingDelay]);

  useEffect(() => {
    const typingTimer = setTimeout(() => {
      if (isVisible) setIsTyping(false);
    }, delay);
    const erasingTimer = setTimeout(() => {
      if (isVisible) setIsTyping(true);
    }, delay + text.length + 500);

    const cursorTimer = setInterval(() => {
      setIsCursorVisible((prevIsCursorVisible) => !prevIsCursorVisible);
    }, 500); // Cursor blinking interval

    animationRef.current = { typingTimer, erasingTimer, cursorTimer };

    return () => {
      clearTimeout(typingTimer);
      clearTimeout(erasingTimer);
      clearInterval(cursorTimer);
    };
  }, [text, delay, isVisible]);

  return (
    <span ref={targetRef}>
      {displayText}
      <span className={`typing-cursor ${isCursorVisible ? '' : 'hidden'}`}>|</span>
    </span>
  );
};

export default TypingAnimation;
