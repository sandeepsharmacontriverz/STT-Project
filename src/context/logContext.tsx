import React, { createContext, useState, useContext, ReactNode } from 'react';

interface LogsContextType {
  enableLogs: boolean;
  setEnableLogs: any;
}

const LogsContext = createContext<LogsContextType | undefined>(undefined);

interface LogsProviderProps {
  children: ReactNode;
}

export const LogsProvider = ({ children }: LogsProviderProps) => {
  const [enableLogs, setEnableLogs] = useState(false);

  const contextValue: LogsContextType = {
    enableLogs,
    setEnableLogs,
  };

  return (
    <LogsContext.Provider value={contextValue}>
      {children}
    </LogsContext.Provider>
  );
};

export const useLogs = () => {
  const context = useContext(LogsContext);
  if (context === undefined) {
    throw new Error('useLogs must be used within a LogsProvider');
  }
  return context;
};
