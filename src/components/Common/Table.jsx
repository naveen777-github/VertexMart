import React from "react";

import "./Table.css";

export const Table = ({ headings, rows }) => {
  const safeHeadings = Array.isArray(headings) ? headings : [];
  const safeRows = Array.isArray(rows) ? rows : [];

  return (
    <table className="common-table">
      <thead>
        <tr>
          {safeHeadings.map((heading, index) => (
            <th key={index}>{heading}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {safeRows.map((row, rowIndex) => {
          const safeRow = Array.isArray(row) ? row : [row];

          return (
            <tr key={rowIndex}>
              {safeRow.map((cell, cellIndex) => (
              <td key={cellIndex}>{cell}</td>
              ))}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
