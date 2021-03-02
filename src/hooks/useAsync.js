import { useState, useEffect } from 'react';

/**
 * It's generally a good practice to indicate to users the status of any async request. An example
 * would be fetching data from an API and displaying a loading indicator before rendering the results.
 * Another example would be a form where you want to disable the submit button when the submission is
 * pending and then display either a success or error message when it completes.
 *
 * Rather than litter your components with a bunch of useState calls to keep track of the state of an
 * async function, you can use our custom hook which takes an async function as an input and returns
 * the value, error, and status values we need to properly update our UI. Possible values for status
 * prop are: "idle", "pending", "success", "error". As you'll see in the code below, our hook allows
 * both immediate execution and delayed execution using the returned execute function.
 */
export default function useAsync(asyncFunction, immediate = true) {
  const [status, setStatus] = useState('idle');
  const [value, setValue] = useState(null);
  const [error, setError] = useState(null);

  // The execute function wraps asyncFunction and
  // handles setting state for pending, value, and error.
  // useCallback ensures the below useEffect is not called
  // on every render, but only if asyncFunction changes.
  const execute = useCallback(() => {
    setStatus('pending');
    setValue(null);
    setError(null);

    return asyncFunction()
      .then(response => {
        setValue(response);
        setStatus('success');
      })
      .catch(error => {
        setError(error);
        setStatus('error');
      });
  }, [asyncFunction]);

  // Call execute if we want to fire it right away.
  // Otherwise execute can be called later, such as
  // in an onClick handler.
  useEffect(() => {
    if (immediate) {
      execute();
    }
  }, [execute, immediate]);

  return { execute, status, value, error };
};
