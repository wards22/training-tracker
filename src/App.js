import React from 'react';
import { Database, Key, Link } from 'lucide-react';

const StarSchemaDesign = () => {
  const factTable = {
    name: "Fact_TrainingProgress",
    columns: [
      { name: "EmployeeKey", type: "INT", fk: true },
      { name: "CourseKey", type: "INT", fk: true },
      { name: "LocationKey", type: "INT", fk: true },
      { name: "StartDateKey", type: "INT", fk: true },
      { name: "DueDateKey", type: "INT", fk: true },
      { name: "CompletionDateKey", type: "INT", fk: true },
      { name: "DaysInTraining", type: "INT", fk: false },
      { name: "DaysOffTrack", type: "INT", fk: false },
      { name: "IsCompleted", type: "BIT", fk: false },
      { name: "IsOnTrack", type: "BIT", fk: false }
    ]
  };

  const dimensions = [
    {
      name: "Dim_Employee",
      columns: [
        { name: "EmployeeKey", type: "INT", pk: true },
        { name: "ICIMSID", type: "VARCHAR(50)" },
        { name: "EmployeeName", type: "VARCHAR(255)" },
        { name: "NewHireType", type: "VARCHAR(50)" },
        { name: "TrainingStatus", type: "VARCHAR(50)" }
      ]
    },
    {
      name: "Dim_Course",
      columns: [
        { name: "CourseKey", type: "INT", pk: true },
        { name: "ModuleCode", type: "VARCHAR(50)" },
        { name: "CourseName", type: "VARCHAR(255)" },
        { name: "CourseOrder", type: "INT" }
      ]
    },
    {
      name: "Dim_TrainingPath",
      columns: [
        { name: "PathKey", type: "INT", pk: true },
        { name: "Variation", type: "VARCHAR(50)" },
        { name: "NewHireType", type: "VARCHAR(50)" },
        { name: "OffsetDays", type: "INT" }
      ]
    },
    {
      name: "Dim_Location",
      columns: [
        { name: "LocationKey", type: "INT", pk: true },
        { name: "CenterLocation", type: "VARCHAR(255)" },
        { name: "Market", type: "VARCHAR(100)" },
        { name: "Area", type: "VARCHAR(100)" }
      ]
    },
    {
      name: "Dim_Date",
      columns: [
        { name: "DateKey", type: "INT", pk: true },
        { name: "FullDate", type: "DATE" },
        { name: "Year", type: "INT" },
        { name: "Month", type: "INT" },
        { name: "Quarter", type: "INT" },
        { name: "IsBusinessDay", type: "BIT" }
      ]
    }
  ];

  return (
    <div className="w-full h-full bg-gradient-to-br from-blue-50 to-slate-100 p-8 overflow-auto">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <div className="flex items-center gap-4 mb-4">
            <Database className="w-10 h-10 text-blue-600" />
            <div>
              <h1 className="text-4xl font-bold text-gray-800">Training Tracker Star Schema</h1>
              <p className="text-gray-600 mt-1">Simplified Data Model for Prefect ETL</p>
            </div>
          </div>
        </div>

        {/* Star Schema Diagram */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Star Schema Architecture</h2>
          
          <div className="relative" style={{ minHeight: '850px', paddingTop: '60px', paddingBottom: '80px' }}>
            {/* Fact Table - Center */}
            <div className="absolute left-1/2 transform -translate-x-1/2 z-10" style={{ top: '280px' }}>
              <div className="bg-gradient-to-br from-amber-400 to-orange-500 rounded-lg shadow-2xl p-6 border-4 border-amber-600 w-64">
                <div className="text-center">
                  <Database className="w-8 h-8 text-white mx-auto mb-2" />
                  <h3 className="text-xl font-bold text-white mb-4">{factTable.name}</h3>
                  <div className="bg-white bg-opacity-20 rounded p-3 text-left">
                    {factTable.columns.map((col, idx) => (
                      <div key={idx} className="text-white text-xs mb-1 flex items-center gap-2">
                        {col.fk ? (
                          <Link className="w-3 h-3 flex-shrink-0" />
                        ) : (
                          <span className="w-3 h-3 flex-shrink-0 bg-white rounded-full"></span>
                        )}
                        <span className="font-mono truncate">{col.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Top Row */}
            <div className="absolute top-0 left-1/4 transform -translate-x-1/2">
              <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg shadow-xl p-4 border-2 border-blue-700 w-56">
                <h4 className="font-bold text-white text-sm mb-3 text-center">{dimensions[0].name}</h4>
                <div className="bg-white bg-opacity-20 rounded p-2">
                  {dimensions[0].columns.map((col, colIdx) => (
                    <div key={colIdx} className="text-white text-xs mb-1 flex items-center gap-2">
                      {col.pk ? (
                        <Key className="w-3 h-3 text-yellow-300 flex-shrink-0" />
                      ) : (
                        <span className="w-3 h-3 flex-shrink-0"></span>
                      )}
                      <span className="font-mono truncate">{col.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="absolute top-0 right-1/4 transform translate-x-1/2">
              <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg shadow-xl p-4 border-2 border-blue-700 w-56">
                <h4 className="font-bold text-white text-sm mb-3 text-center">{dimensions[1].name}</h4>
                <div className="bg-white bg-opacity-20 rounded p-2">
                  {dimensions[1].columns.map((col, colIdx) => (
                    <div key={colIdx} className="text-white text-xs mb-1 flex items-center gap-2">
                      {col.pk ? (
                        <Key className="w-3 h-3 text-yellow-300 flex-shrink-0" />
                      ) : (
                        <span className="w-3 h-3 flex-shrink-0"></span>
                      )}
                      <span className="font-mono truncate">{col.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Middle Row */}
            <div className="absolute left-0 transform -translate-y-1/2" style={{ top: '340px' }}>
              <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg shadow-xl p-4 border-2 border-blue-700 w-56">
                <h4 className="font-bold text-white text-sm mb-3 text-center">{dimensions[2].name}</h4>
                <div className="bg-white bg-opacity-20 rounded p-2">
                  {dimensions[2].columns.map((col, colIdx) => (
                    <div key={colIdx} className="text-white text-xs mb-1 flex items-center gap-2">
                      {col.pk ? (
                        <Key className="w-3 h-3 text-yellow-300 flex-shrink-0" />
                      ) : (
                        <span className="w-3 h-3 flex-shrink-0"></span>
                      )}
                      <span className="font-mono truncate">{col.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="absolute right-0 transform -translate-y-1/2" style={{ top: '340px' }}>
              <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg shadow-xl p-4 border-2 border-blue-700 w-56">
                <h4 className="font-bold text-white text-sm mb-3 text-center">{dimensions[3].name}</h4>
                <div className="bg-white bg-opacity-20 rounded p-2">
                  {dimensions[3].columns.map((col, colIdx) => (
                    <div key={colIdx} className="text-white text-xs mb-1 flex items-center gap-2">
                      {col.pk ? (
                        <Key className="w-3 h-3 text-yellow-300 flex-shrink-0" />
                      ) : (
                        <span className="w-3 h-3 flex-shrink-0"></span>
                      )}
                      <span className="font-mono truncate">{col.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Bottom Row */}
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2">
              <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg shadow-xl p-4 border-2 border-blue-700 w-56">
                <h4 className="font-bold text-white text-sm mb-3 text-center">{dimensions[4].name}</h4>
                <div className="bg-white bg-opacity-20 rounded p-2">
                  {dimensions[4].columns.map((col, colIdx) => (
                    <div key={colIdx} className="text-white text-xs mb-1 flex items-center gap-2">
                      {col.pk ? (
                        <Key className="w-3 h-3 text-yellow-300 flex-shrink-0" />
                      ) : (
                        <span className="w-3 h-3 flex-shrink-0"></span>
                      )}
                      <span className="font-mono truncate">{col.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Key Points */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-lg font-bold text-gray-800 mb-4">Fact Table</h3>
            <ul className="space-y-2 text-sm text-gray-700">
              <li className="flex items-start gap-2">
                <span className="text-amber-600 font-bold">•</span>
                <span>Tracks training progress per employee per course</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-amber-600 font-bold">•</span>
                <span>Stores metrics: days in training, days off track</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-amber-600 font-bold">•</span>
                <span>Links to 5 dimension tables via foreign keys</span>
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-lg font-bold text-gray-800 mb-4">Dimensions</h3>
            <ul className="space-y-2 text-sm text-gray-700">
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold">•</span>
                <span><strong>Employee:</strong> Who is being trained</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold">•</span>
                <span><strong>Course:</strong> What modules they're completing</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold">•</span>
                <span><strong>TrainingPath:</strong> Variation & offset rules</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold">•</span>
                <span><strong>Location:</strong> Where training occurs</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold">•</span>
                <span><strong>Date:</strong> When events happen</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StarSchemaDesign;