import React, { useState, useEffect, useRef, useCallback } from 'react'
import LayoutStyle from '../styles/Layout.module.css';

export default function LayoutBg () {
  const [viewH, setViewH] = useState(document.documentElement.clientHeight);
  const [scrollH, setScrollH] = useState(document.documentElement.scrollHeight);
  const [scrollTop, setScrollTop] = useState(0);
  const [top, setTop] = useState(0);
  const [bgH, setBgH] = useState(0);

  const calcTop = useCallback(() => {
    const scrollFullH = scrollH - viewH;
    if (scrollFullH <= 0) {
      setTop(0);
      setBgH(viewH);
    } else {
      const ratio = scrollTop / scrollFullH;
      const bgH = viewH + scrollFullH * 0.5;
      const top = scrollFullH * 0.5 * ratio;
      setTop(top);
      setBgH(bgH);
    }
  }, [viewH, scrollH, scrollTop]);

  const handlerUpdateInfo = () => {
    const { clientHeight, scrollHeight, scrollTop } = document.documentElement;
    setViewH(clientHeight);
    setScrollH(scrollHeight);
    setScrollTop(scrollTop);
  };

  useEffect(() => {
    calcTop();
  })

  // Add event listener using our hook
  useEventListener("scroll", handlerUpdateInfo);
  useEventListener("resize", handlerUpdateInfo);

  return <div id="LayoutBG" className={LayoutStyle.layoutBG} style={{ height: bgH, top: -top }} />
}

// Hook
function useEventListener(eventName: string, handler: Function, element = window) {
  // Create a ref that stores handler
  const savedHandler = useRef(handler);
  // Update ref.current value if handler changes.
  // This allows our effect below to always get latest handler ...
  // ... without us needing to pass it in effect deps array ...
  // ... and potentially cause effect to re-run every render.
  useEffect(() => {
    savedHandler.current = handler;
  }, [handler]);

  useEffect(
    () => {
      // Make sure element supports addEventListener
      // On
      const isSupported = element && element.addEventListener;
      if (!isSupported) return;
      // Create event listener that calls handler function stored in ref
      const eventListener = (event: any) => savedHandler.current(event);
      // Add event listener
      element.addEventListener(eventName, eventListener);
      // Remove event listener on cleanup
      return () => {
        element.removeEventListener(eventName, eventListener);
      };
    },
    [eventName, element] // Re-run if eventName or element changes
  );
}