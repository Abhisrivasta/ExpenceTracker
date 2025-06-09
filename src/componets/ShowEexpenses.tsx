import { useState } from 'react';
import { databases } from '../Appwrite/database';
import config from '../config/config';
import { ID, Permission, Role } from 'appwrite';

function ShowEexpenses() {
  const [name, setName] = useState('');
  const [amount, setAmount] = useState<number>();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      setLoading(true);
      const result = await databases.createDocument(
        config.appwriteDatabaseId,
        config.appwriteCollectionId,
        ID.unique(),
        { name, amount },
        [Permission.read(Role.any())]
      );

      console.log(result);
      setTimeout(() => setLoading(false), 1500);
      document.getElementById("getButton")?.click();
    } catch (err) {
      console.log("err", err);
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors px-4 py-10">
      <div className="w-full max-w-md bg-gray-100 dark:bg-gray-800 rounded-2xl shadow-xl p-8">
        <h2 className="text-3xl font-bold mb-6 text-center text-purple-700 dark:text-purple-300">
          Add an Expense
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium mb-1">Expense Via</label>
            <input
              type="text"
              placeholder="e.g. Food, Travel"
              value={name}
              onChange={e => setName(e.target.value)}
              className="w-full px-4 py-2 rounded-lg bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-400 dark:focus:ring-purple-600"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Amount</label>
            <input
              type="number"
              placeholder="Amount to enter"
              value={amount || ''}
              onChange={e => setAmount(Number(e.target.value))}
              className="w-full px-4 py-2 rounded-lg bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-400 dark:focus:ring-purple-600"
              required
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className={`w-full py-2 px-4 rounded-lg text-white font-semibold transition-colors ${
              loading
                ? 'bg-purple-300 cursor-not-allowed'
                : 'bg-purple-600 hover:bg-purple-700'
            }`}
          >
            {loading ? 'Saving...' : 'Save'}
          </button>
        </form>
      </div>
    </div>
  );
}

export default ShowEexpenses;
