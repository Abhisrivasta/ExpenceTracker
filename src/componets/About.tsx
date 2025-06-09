import React from 'react';

export default function About() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300 p-4 flex items-center justify-center">
      <div className="max-w-3xl bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-100 rounded-2xl shadow-lg p-8 space-y-6">
        <h1 className="text-4xl font-bold text-center text-purple-700 dark:text-purple-400">
          About Budget Tracker
        </h1>

        <p className="text-lg leading-relaxed">
          Welcome to <span className="font-semibold text-purple-600 dark:text-purple-300">Budget Tracker</span> —
          a simple and powerful tool to help you stay in control of your finances.
        </p>

        <p className="text-lg leading-relaxed">
          With this tracker, you can:
        </p>

        <ul className="list-disc pl-6 text-lg space-y-1">
          <li>
            Add and track your <span className="font-medium text-green-600 dark:text-green-400">total income</span>.
          </li>
          <li>
            Record your <span className="font-medium text-red-500 dark:text-red-400">total expenses</span>.
          </li>
          <li>View and analyze all your transactions in one place.</li>
          <li>Stay updated on your financial balance in real-time.</li>
        </ul>

        <p className="text-lg leading-relaxed">
          Whether you're budgeting for the month or tracking spending habits, this app keeps things clear and simple.
        </p>

        <p className="text-center text-sm text-gray-500 dark:text-gray-400">
          Built with ❤️ using React & Appwrite.
        </p>
      </div>
    </div>
  );
}
