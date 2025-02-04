'use client';
import { useState, useEffect } from 'react';
export default function MultiLevelAccordation() {
  const [faqData, setFaqData] = useState([]);
  const [openIndex, setOpenIndex] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('/data/faqData.json');
      const data = await response.json();
      setFaqData(data);
    };
    fetchData();
  }, []);
  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return (
    <div className="max-w-7xl mx-auto p-4">
      <h1 className="text-center text-2xl font-bold text-blue-600 mb-6">List of HS Codes</h1>
      <div className="space-y-4">
        {faqData.map((item, index) => (
          <div
            key={index}
            className={`border border-blue-600 rounded-lg p-4 transition-all duration-500 ${openIndex === index ? 'bg-blue-500 text-white shadow-lg' : 'bg-transparent'}`}
          >
            <button
              className="w-full flex justify-between items-center text-left text-lg font-medium focus:outline-none"
              onClick={() => toggleFAQ(index)}
            >
              {item.question}
              <span className={`transform transition-transform duration-300 ${openIndex === index ? 'rotate-180' : 'rotate-0'}`}>
                ▼
              </span>
            </button>
            <div className={`overflow-hidden transition-all duration-500 ease-in-out ${openIndex === index ? 'max-h-96 mt-2' : 'max-h-0'}`}>
              <ul className="list-inside list-disc text-white text-sm p-2">
                {item.answer.map((ans, ansIndex) => (
                  <li key={ansIndex} className="mb-2 'text-[10px]'">
                    <strong>{ans.bullet}:</strong> {ans.description}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
