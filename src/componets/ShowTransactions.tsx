/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from 'react';
import { databases } from '../Appwrite/database';
import config from '../config/config';
import { toast } from 'react-toastify';

export default function ShowTransactions() {
  const [result, setResult] = useState<Document[]>([]);
  const [loading, setLoading] = useState(false);
  const [remainingFunds, setRemainingFunds] = useState<number>(0);
  const [income, setIncome] = useState(0);
  const [totalAmount, setTotalAmount] = useState(0);

  const ShowTransactions = async () => {
    try {
      setLoading(true);
      const response = await databases.listDocuments(
        config.appwriteDatabaseId,
        config.appwriteCollectionId
      );
      const docs = response.documents as [];
      setResult(docs);
      getTotalAmount(docs);
    } catch (e) {
      console.log('error fetching', e);
      toast.error("Failed to fetch transactions.");
    } finally {
      setLoading(false);
    }
  };

  const showEarning = async () => {
    try {
      setLoading(true);
      const response = await databases.listDocuments(
        config.appwriteDatabaseId,
        config.appwriteEarningCollectionId
      );
      const docs = response.documents as [];
     
      let totalIncome = 0;
      docs.forEach((item: any) => {
        totalIncome += item.amount;
      });
      setIncome(totalIncome);
    } catch (e) {
      console.log('error fetching', e);
      toast.error("Failed to fetch income.");
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (item: any) => {
    try {
      await databases.deleteDocument(
        config.appwriteDatabaseId,
        config.appwriteCollectionId,
        item.$id
      );
      toast.success('Transaction deleted successfully!');
      ShowTransactions(); 
    } catch (error) {
      toast.error('Failed to delete transaction.');
      console.log('error deleting document', error);
    }
  };

  const getTotalAmount = (docs: any) => {
    let temp = 0;
    docs.forEach((item: any) => {
      temp += item.amount;
    });
    setTotalAmount(temp);
  };

  useEffect(() => {
    if (result) {
      getTotalAmount(result);
    }
  }, [result]);

  useEffect(() => {
    if (totalAmount && income) {
      setRemainingFunds(income - totalAmount);
    }
  }, [totalAmount, income]);

  return (
    <div className="min-h-screen px-4 py-8 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors">
      <div className="max-w-4xl mx-auto space-y-8">
        <h1 className="text-4xl font-bold text-center text-blue-700 dark:text-blue-400">
          Your Transactions
        </h1>

        <div className="flex flex-wrap gap-4 justify-center">
          <button
            id="getButton"
            onClick={ShowTransactions}
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition"
          >
            Show Transactions
          </button>

          <button
            onClick={showEarning}
            className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg transition"
          >
            Show Income
          </button>
        </div>

        {loading && <p className="text-center">Loading...</p>}

        {result?.length > 0 && (
          <div className="grid gap-4 md:grid-cols-2">
            {result.map((item: any) => (
              <div
                key={item.$id}
                className="bg-gray-100 dark:bg-gray-800 p-4 rounded-xl shadow-md flex justify-between items-center"
              >
                <div>
                  <p className="text-lg font-semibold">{item.name}</p>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    Amount: ₹{item.amount}
                  </p>
                </div>
                <button
                  onClick={() => handleDelete(item)}
                  className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-lg"
                >
                  Delete
                </button>
              </div>
            ))}
          </div>
        )}

        {(totalAmount !== 0 || income !== 0) && (
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg space-y-2 text-center mt-10">
            <h2 className="text-xl font-bold text-gray-800 dark:text-gray-200">Summary</h2>
            {income !== 0 && <p className="text-green-600">Total Income: ₹{income}</p>}
            {totalAmount !== 0 && <p className="text-red-500">Total Expenses: ₹{totalAmount}</p>}
            {remainingFunds !== 0 && (
              <p className="text-blue-600 font-semibold">Remaining Balance: ₹{remainingFunds}</p>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
