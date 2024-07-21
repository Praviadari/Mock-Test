import React from "react";

export default function Bottombar() {
  return (
    <div className="absolute inset-x-0 bottom-0">
      <div className="flex flex-row  bg-white border-2 w-3/4">
        <button
          type="button"
          class="text-black bg-white border border-gray-500 focus:outline-none hover:bg-blue-500 hover:text-white focus:ring-4 focus:ring-gray-200 font-medium rounded-md text-md px-5 py-2 my-2 ml-3 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
        >
          Mark for Review & Next
        </button>
        <button
          type="button"
          class="text-black bg-white border border-gray-500 focus:outline-none hover:bg-blue-500 hover:text-white focus:ring-4 focus:ring-gray-200 font-medium rounded-md text-md px-5 py-2 my-2 ml-3 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
        >
          Clear Response
        </button>
        <button
          type="button"
          class="text-black bg-white border border-gray-500 focus:outline-none hover:bg-blue-500 hover:text-white focus:ring-4 focus:ring-gray-200 font-medium rounded-md text-md px-5 py-2 my-2 ml-3 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
        >
          Previous Question
        </button>
        <button
          type="button"
          class="text-white bg-blue-500 hover:bg-blue-600 border border-gray-500 focus:outline-none hover:border-black hover:text-white focus:ring-4 focus:ring-gray-200 font-medium rounded-md text-md px-5 py-2 my-2 ml-3 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
        >
          Save & Next
        </button>
      </div>
      <div className="bg-gray-500 flex items-center justify-center text-white">
        <span>version 1.0</span>
      </div>
    </div>
  );
}
