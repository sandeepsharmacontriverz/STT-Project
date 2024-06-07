import { useLogs } from '@/context/logContext';
import { useEffect } from 'react';

const useOverrideConsole = () => {
  const { enableLogs } = useLogs();

  useEffect(() => {
    // Save original console methods
    const originalConsoleLog = console.log;
    const originalConsoleWarn = console.warn;
    const originalConsoleError = console.error;
    const originalConsoleInfo = console.info;

    // Override console methods
    if (!enableLogs) {
      console.log = () => {};
      console.warn = () => {};
      console.error = () => {};
      console.info = () => {};
    } else {
      // Restore original console methods
      console.log = originalConsoleLog;
      console.warn = originalConsoleWarn;
      console.error = originalConsoleError;
      console.info = originalConsoleInfo;
    }

    // Cleanup on unmount
    return () => {
      console.log = originalConsoleLog;
      console.warn = originalConsoleWarn;
      console.error = originalConsoleError;
      console.info = originalConsoleInfo;
    };
  }, [enableLogs]);
};
export default useOverrideConsole

