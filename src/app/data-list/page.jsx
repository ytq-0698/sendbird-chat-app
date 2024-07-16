"use client";
import { useState, useMemo, useEffect } from "react";
import Layout from "../../app/components/Layout";
import SortIcon from "../../app/Icons/Sort";

function generateFakeData() {
  const priorities = ["low", "medium", "high"];
  const statuses = ["pending", "in-progress", "completed"];
  const fakeData = [];

  for (let i = 1; i <= 50; i++) {
    const id = i;
    const content = `Content for item ${i}`;
    const priority = priorities[Math.floor(Math.random() * priorities.length)];
    const status = statuses[Math.floor(Math.random() * statuses.length)];

    fakeData.push({ id, content, priority, status });
  }

  return fakeData;
}

const data = generateFakeData();

const Table = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortColumn, setSortColumn] = useState("id");
  const [sortDirection, setSortDirection] = useState("asc");

  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const filteredData = useMemo(() => {
    return data.filter((item) =>
      Object.values(item).some(
        (val) =>
          typeof val === "string" &&
          val.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
  }, [searchTerm]);

  const sortedData = useMemo(() => {
    return filteredData.sort((a, b) => {
      if (a[sortColumn] < b[sortColumn]) {
        return sortDirection === "asc" ? -1 : 1;
      }
      if (a[sortColumn] > b[sortColumn]) {
        return sortDirection === "asc" ? 1 : -1;
      }
      return 0;
    });
  }, [filteredData, sortColumn, sortDirection]);

  const handleSort = (column) => {
    if (column === sortColumn) {
      setSortDirection((prev) => (prev === "asc" ? "desc" : "asc"));
    } else {
      setSortColumn(column);
      setSortDirection("asc");
    }
  };

  return (
    <>
      {isClient && (
        <Layout>
          <div className="p-4">
            <input
              type="text"
              placeholder="Search..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="mb-4 p-2 border border-gray-300 rounded"
            />
            <table className="min-w-full border border-gray-300">
              <thead>
                <tr>
                  <th
                    onClick={() => handleSort("id")}
                    className="p-2 cursor-pointer"
                  >
                    <p className="flex items-center gap-2">
                      ID
                      <SortIcon />
                    </p>
                  </th>
                  <th
                    onClick={() => handleSort("content")}
                    className="p-2 cursor-pointer"
                  >
                    <p className="flex items-center gap-2">
                      Content
                      <SortIcon />
                    </p>
                  </th>
                  <th
                    onClick={() => handleSort("priority")}
                    className="p-2 cursor-pointer"
                  >
                    <p className="flex items-center gap-2">
                      Priority
                      <SortIcon />
                    </p>
                  </th>
                  <th
                    onClick={() => handleSort("status")}
                    className="p-2 cursor-pointer"
                  >
                    <p className="flex items-center gap-2">
                      Status
                      <SortIcon />
                    </p>
                  </th>
                </tr>
              </thead>
              <tbody>
                {sortedData.map((item) => (
                  <tr key={item.id}>
                    <td className="border-t border-gray-300 p-2">{item.id}</td>
                    <td className="border-t border-gray-300 p-2">
                      {item.content}
                    </td>
                    <td className="border-t border-gray-300 p-2">
                      {item.priority}
                    </td>
                    <td className="border-t border-gray-300 p-2">
                      {item.status}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Layout>
      )}
    </>
  );
};

export default Table;
