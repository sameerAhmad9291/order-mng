/* eslint-disable */
import { useEffect, useState } from 'react';

export function useIsUpdated(method, props) {
  const [hasRun, setHasRun] = useState(false);

  useEffect(() => {
    if (hasRun) {
      method();
    } else {
      setHasRun(true);
    }
  }, [props]);
}
