import { createContext, useState } from "react";

export const TransactionContext = createContext();

export const TransactionProvider = ({ children }) => {
  const [transactionId, setTransactionId] = useState("");
  const [transactionNumber, setTransactionNumber] = useState("");

  const value = {
    transactionId,
    setTransactionId,
    transactionNumber,
    setTransactionNumber,
  };
  console.log("Transaction in context", transactionId, transactionNumber);
  return (
    <TransactionContext.Provider value={value}>
      {children}
    </TransactionContext.Provider>
  );
};
