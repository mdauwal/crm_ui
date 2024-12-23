import React, { useState } from "react";
import EnhancedHeader from "./enhancedHeader";

interface Lead {
  name: string;
  topic: string;
  status: string;
  createdOn: string;
}

const LeadTable: React.FC = () => {
  const [search, setSearch] = useState<string>("");
  const initialLeads: Lead[] = [
    { name: "Winford Asher", topic: "Cafe A100 for commercial use", status: "New", createdOn: "2024-04-02T12:00:00" },
    { name: "Josia Love", topic: "Upgrading service plan", status: "New", createdOn: "2024-03-30T07:45:00" },
    { name: "Harrison Curtis", topic: "Issue with throughput on EspressoMaster", status: "New", createdOn: "2024-03-28T15:30:00" },
    { name: "Jermaine Berrett", topic: "New roaster in distribution facility", status: "New", createdOn: "2024-03-25T11:05:00" },
    { name: "Gerald Stephens", topic: "Concerns on current machines", status: "New", createdOn: "2024-03-23T16:50:00" },
    { name: "Rachel Michael", topic: "Expanding business", status: "New", createdOn: "2024-03-21T10:20:00" },
    { name: "Allan Munger", topic: "Premium coffee beans", status: "New", createdOn: "2024-03-20T14:30:00" },
    { name: "Jane Reyes", topic: "Improving cost per cup", status: "New", createdOn: "2024-03-17T08:00:00" },
    { name: "Ellis Banks", topic: "Custom training for staff", status: "New", createdOn: "2024-03-15T09:00:00" },
    { name: "Irene Douglas", topic: "Adding seasonal drinks", status: "New", createdOn: "2024-03-14T14:15:00" },
    { name: "Olivia Parker", topic: "Scheduling machine maintenance", status: "Follow-Up", createdOn: "2024-03-12T08:30:00" },
    { name: "James Cooper", topic: "Cost-effective coffee solutions", status: "Follow-Up", createdOn: "2024-03-10T13:20:00" },
    { name: "Sophia Walker", topic: "Partnership proposal", status: "Closed", createdOn: "2024-03-08T11:45:00" },
    { name: "Noah Bennett", topic: "Machine troubleshooting", status: "Closed", createdOn: "2024-03-07T16:10:00" },
    { name: "Emma Wilson", topic: "Upgrading to new models", status: "New", createdOn: "2024-03-05T12:40:00" },
    { name: "Liam Carter", topic: "Employee barista training", status: "New", createdOn: "2024-03-04T09:50:00" },
    { name: "Mia Robinson", topic: "Opening new branch", status: "New", createdOn: "2024-03-03T08:25:00" },
    { name: "Logan Harris", topic: "Feedback on service", status: "New", createdOn: "2024-03-02T15:00:00" },
    { name: "Ava Clark", topic: "Refurbishing machines", status: "Follow-Up", createdOn: "2024-03-01T10:10:00" },
    { name: "Lucas Lewis", topic: "Support on barista tools", status: "Follow-Up", createdOn: "2024-02-28T11:30:00" },
  ];

  const [leads, setLeads] = useState<Lead[]>(initialLeads);
  const [sortField, setSortField] = useState<keyof Lead>("name");
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [selectedLeads, setSelectedLeads] = useState<string[]>([]);
  const itemsPerPage = 10;

  // Filter and sort logic
  const filteredLeads = leads
    .filter((lead) =>
      lead.name.toLowerCase().includes(search.toLowerCase()) ||
      lead.topic.toLowerCase().includes(search.toLowerCase())
    )
    .sort((a, b) => {
      const fieldA = a[sortField].toLowerCase();
      const fieldB = b[sortField].toLowerCase();
      if (fieldA < fieldB) return sortOrder === "asc" ? -1 : 1;
      if (fieldA > fieldB) return sortOrder === "asc" ? 1 : -1;
      return 0;
    });

  // Pagination logic
  const totalPages = Math.ceil(filteredLeads.length / itemsPerPage);
  const displayedLeads = filteredLeads.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handleSort = (field: keyof Lead) => {
    setSortField(field);
    setSortOrder((prev) => (prev === "asc" ? "desc" : "asc"));
  };

  const toggleLeadSelection = (name: string) => {
    setSelectedLeads((prev) =>
      prev.includes(name)
        ? prev.filter((lead) => lead !== name)
        : [...prev, name]
    );
  };

  const isAllSelected = displayedLeads.every((lead) =>
    selectedLeads.includes(lead.name)
  );

  const toggleSelectAll = () => {
    if (isAllSelected) {
      setSelectedLeads((prev) =>
        prev.filter((name) => !displayedLeads.some((lead) => lead.name === name))
      );
    } else {
      setSelectedLeads((prev) => [
        ...prev,
        ...displayedLeads
          .filter((lead) => !prev.includes(lead.name))
          .map((lead) => lead.name),
      ]);
    }
  };

  return (
    <div className="bg-white shadow-md rounded-lg border border-gray-200 p-4 max-w-6xl mx-auto">
      {/* Enhanced Header */}
      <EnhancedHeader search={search} setSearch={setSearch} />
      <p>Search Query: {search}</p>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-50 text-left text-gray-600 text-sm font-medium">
              <th className="p-2 border-b border-gray-200">
                <input
                  type="checkbox"
                  checked={isAllSelected}
                  onChange={toggleSelectAll}
                  className="cursor-pointer"
                />
              </th>
              <th
                className="p-2 border-b border-gray-200 cursor-pointer"
                onClick={() => handleSort("name")}
              >
                Name {sortField === "name" && (sortOrder === "asc" ? "↑" : "↓")}
              </th>
              <th
                className="p-2 border-b border-gray-200 cursor-pointer"
                onClick={() => handleSort("topic")}
              >
                Topic {sortField === "topic" && (sortOrder === "asc" ? "↑" : "↓")}
              </th>
              <th className="p-2 border-b border-gray-200">Status Reason</th>
              <th
                className="p-2 border-b border-gray-200 cursor-pointer"
                onClick={() => handleSort("createdOn")}
              >
                Created On {sortField === "createdOn" && (sortOrder === "asc" ? "↑" : "↓")}
              </th>
            </tr>
          </thead>
          <tbody>
            {displayedLeads.map((lead, index) => (
              <tr key={index} className="text-sm text-gray-700 hover:bg-gray-50">
                <td className="p-2 border-b border-gray-200">
                  <input
                    type="checkbox"
                    checked={selectedLeads.includes(lead.name)}
                    onChange={() => toggleLeadSelection(lead.name)}
                    className="cursor-pointer"
                  />
                </td>
                <td className="p-2 border-b border-gray-200">{lead.name}</td>
                <td className="p-2 border-b border-gray-200">{lead.topic}</td>
                <td className="p-2 border-b border-gray-200">{lead.status}</td>
                <td className="p-2 border-b border-gray-200">
                  {new Date(lead.createdOn).toLocaleString()}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="mt-4 flex items-center justify-between">
        <div className="text-sm text-gray-600">
          Page {currentPage} of {totalPages}
        </div>
        <div className="flex items-center space-x-2">
          <button
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
            className="px-4 py-1 text-sm text-black border border-blue-300 bg-white rounded-md disabled:opacity-50"
          >
            Previous
          </button>
          <button
            onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
            disabled={currentPage === totalPages}
            className="px-4 py-1 text-sm text-black border border-blue-300 bg-white rounded-md disabled:opacity-50"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default LeadTable;
