import { useEffect } from 'react';

export const useAntiScraping = () => {
  useEffect(() => {
    const preventDefaultBehavior = (e: Event) => {
      e.preventDefault();
      return false;
    };

    const preventKeyboardShortcuts = (e: KeyboardEvent) => {
      // Prevent Ctrl+S, Ctrl+U, Ctrl+P, F12
      if (
        (e.ctrlKey && (e.key === 's' || e.key === 'u' || e.key === 'p')) ||
        e.key === 'F12'
      ) {
        e.preventDefault();
        return false;
      }
    };

    const preventCopy = (e: ClipboardEvent) => {
      e.preventDefault();
      return false;
    };

    // Disable right click
    document.addEventListener('contextmenu', preventDefaultBehavior);
    
    // Disable keyboard shortcuts
    document.addEventListener('keydown', preventKeyboardShortcuts);
    
    // Disable copy
    document.addEventListener('copy', preventCopy);
    document.addEventListener('cut', preventCopy);
    
    // Disable drag
    document.addEventListener('dragstart', preventDefaultBehavior);
    document.addEventListener('drop', preventDefaultBehavior);

    return () => {
      document.removeEventListener('contextmenu', preventDefaultBehavior);
      document.removeEventListener('keydown', preventKeyboardShortcuts);
      document.removeEventListener('copy', preventCopy);
      document.removeEventListener('cut', preventCopy);
      document.removeEventListener('dragstart', preventDefaultBehavior);
      document.removeEventListener('drop', preventDefaultBehavior);
    };
  }, []);
};