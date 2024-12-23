// src/data/mockData.js
const mockLeads = Array.from({ length: 20 }, (_, i) => ({
    id: i + 1,
    name: `Lead ${i + 1}`,
    email: `lead${i + 1}@example.com`,
    phone: `080123456${i}`,
    status: i % 2 === 0 ? "Active" : "Inactive",
  }));
  
  export default mockLeads;
  