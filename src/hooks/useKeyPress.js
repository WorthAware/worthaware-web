import { useState, useEffect } from 'react';

/**
 * This hook makes it easy to detect when the user is pressing a specific key on their keyboard. The
 * recipe is fairly simple, as I want to show how little code is required, but I challenge any readers
 * to create a more advanced version of this hook. Detecting when multiple keys are held down at the
 * same time would be a nice addition. Bonus points: also require they be held down in a specified
 * order.
 */
export default function useKeyPress(targetKey) {
  // State for keeping track of whether key is pressed
  const [keyPressed, setKeyPressed] = useState(false);

  // If pressed key is our target key then set to true
  function downHandler({ key }) {
    if (key === targetKey) {
      setKeyPressed(true);
    }
  }

  // If released key is our target key then set to false
  const upHandler = ({ key }) => {
    if (key === targetKey) {
      setKeyPressed(false);
    }
  };

  // Add event listeners
  useEffect(() => {
    window.addEventListener('keydown', downHandler);
    window.addEventListener('keyup', upHandler);
    // Remove event listeners on cleanup
    return () => {
      window.removeEventListener('keydown', downHandler);
      window.removeEventListener('keyup', upHandler);
    };
  }, []); // Empty array ensures that effect is only run on mount and unmount

  return keyPressed;
}
