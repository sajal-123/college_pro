import React from 'react';
import { TableItem } from '@/Data/Interface';
// Define the type for the data prop
interface TableProps {
  data: {
    title: string;
    items: TableItem[];
  };
}

const Table: React.FC<TableProps> = ({ data }) => {
  // Check if data.items is defined and an array
  const items = data?.items ?? [];

  return (
    <div className="relative overflow-x-auto rounded-lg">
      {items.length === 0 ? (
        <p className="text-center text-gray-500 dark:text-gray-400">No data available</p>
      ) : (
        <>
          {/* Dynamic Title from Data */}
          <div className="text-xl font-semibold rounded-lg text-gray-700 dark:text-gray-300 mb-4">
            {data.title}
          </div>

          {/* Table for Documents/Information */}
          <table className="w-full text-sm text-left rtl:text-right text-gray-700 bg-white dark:bg-gray-900">
            <thead className="text-xs uppercase bg-blue-500 text-white">
              <tr>
                <th scope="col" className="px-6 py-3">
                  S.NO.
                </th>
                <th scope="col" className="px-6 py-3">
                  DOCUMENTS / INFORMATION
                </th>
                <th scope="col" className="px-6 py-3">
                  UPLOAD DOCUMENT
                </th>
              </tr>
            </thead>
            <tbody>
              {items.map((item, index) => (
                <tr
                  key={index}
                  className={`${
                    index % 2 === 0 ? 'bg-blue-50' : 'bg-white'
                  } border-b dark:border-gray-700`}
                >
                  <td className="px-6 py-4">{item.serialNo}</td>
                  <td className="px-6 py-4">{item.documentName}</td>
                  <td className="px-6 py-4">{item.uploadStatus}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </>
      )}
    </div>
  );
};

export default Table;
