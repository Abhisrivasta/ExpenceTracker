import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300 flex flex-col items-center justify-center px-4 py-10">
      <div className="max-w-4xl w-full">
        <h1 className="text-5xl font-bold text-center text-purple-700 dark:text-purple-400 mb-6">
          Budget Board
        </h1>
        <p className="text-center text-lg mb-10">
          Welcome! This is your personal expense tracker dashboard. Manage your expenses, view transactions, and add your earnings.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6">
          <Link
            to="/show-expenses"
            className="bg-blue-100 dark:bg-blue-800 hover:shadow-xl transition-all rounded-xl p-6 flex flex-col items-center text-center hover:scale-[1.02]"
          >
            <h2 className="text-2xl font-semibold text-blue-700 dark:text-blue-200">Show Expenses</h2>
            <p className="mt-2 text-sm">View all your expense records</p>
          </Link>

          <Link
            to="/show-transactions"
            className="bg-green-100 dark:bg-green-800 hover:shadow-xl transition-all rounded-xl p-6 flex flex-col items-center text-center hover:scale-[1.02]"
          >
            <h2 className="text-2xl font-semibold text-green-700 dark:text-green-200">Show Transactions</h2>
            <p className="mt-2 text-sm">Check all income & expense history</p>
          </Link>

          <Link
            to="/add-Earning"
            className="bg-yellow-100 dark:bg-yellow-800 hover:shadow-xl transition-all rounded-xl p-6 flex flex-col items-center text-center hover:scale-[1.02]"
          >
            <h2 className="text-2xl font-semibold text-yellow-700 dark:text-yellow-200">Add Earning</h2>
            <p className="mt-2 text-sm">Log your income manually</p>
          </Link>

          <Link
            to="/about"
            className="bg-purple-100 dark:bg-purple-800 hover:shadow-xl transition-all rounded-xl p-6 flex flex-col items-center text-center hover:scale-[1.02]"
          >
            <h2 className="text-2xl font-semibold text-purple-700 dark:text-purple-200">About</h2>
            <p className="mt-2 text-sm">Learn more about this app</p>
          </Link>
        </div>
      </div>
    </div>
  );
}
