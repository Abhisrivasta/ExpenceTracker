import React, { useState } from 'react';
import { ID, Permission, Role } from 'appwrite';
import { databases } from '../Appwrite/database';
import config from '../config/config';
import { toast } from 'react-toastify';

function Earning() {
  const [value, setValue] = useState('');
  const [amount, setAmount] = useState<number>();
  const [load, setLoad] = useState(false);

  const handleSubmit = async () => {
    setLoad(true);
    try {
      const result = await databases.createDocument(
        config.appwriteDatabaseId,
        config.appwriteEarningCollectionId,
        ID.unique(),
        { earning: value, amount },
        [Permission.read(Role.any())]
      );
      console.log(result);
      toast.success('Earning save successfully!');
      setValue('');

    } catch (err) {
      console.log('Error saving earning:', err);
    } finally {
      setTimeout(() => {
        setLoad(false);
      }, 1000);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white dark:bg-gray-900 px-4 text-gray-900 dark:text-gray-100 transition-colors">
      <div className="w-full max-w-md bg-gray-100 dark:bg-gray-800 p-8 rounded-2xl shadow-lg space-y-6">
        <h1 className="text-3xl font-bold text-center text-green-600 dark:text-green-400">
          Add Earning
        </h1>

        <input
          type="text"
          placeholder="Earning via"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          className="w-full px-4 py-2 rounded-lg bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-green-400 dark:focus:ring-green-600"
        />

        <input
          type="number"
          placeholder="Amount to enter"
          value={amount || ''}
          onChange={(e) => setAmount(Number(e.target.value))}
          className="w-full px-4 py-2 rounded-lg bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-green-400 dark:focus:ring-green-600"
        />

        <button
          onClick={handleSubmit}
          disabled={load}
          className={`w-full py-2 px-4 rounded-lg text-white font-semibold transition-colors ${
            load
              ? 'bg-green-300 cursor-not-allowed'
              : 'bg-green-600 hover:bg-green-700'
          }`}
        >
          {load ? 'Saving...' : 'Save'}
        </button>
      </div>
    </div>
  );
}

export default Earning;
