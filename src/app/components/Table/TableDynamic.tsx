import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Table } from "react-bootstrap";
import axios, { AxiosRequestConfig } from "axios";

// Interface Props
interface Column {
  header: string;
  accessor: string;
}

interface TableDynamicProps {
  apiService: string;
  method: "GET" | "POST" | "PUT" | "DELETE";
  columns: Column[];
  params?: Record<string, any>; // Optional payload for POST/PUT requests
  payload?: Record<string, any>; // Optional payload for POST/PUT requests
}

const TableDynamic: React.FC<TableDynamicProps> = ({ apiService, method, columns, params, payload }) => {
  const [data, setData] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);

      try {
        const config: AxiosRequestConfig = {
          url: apiService,
          method: method,
          params: params,
          ...(payload && { data: payload }),
        };

        const response = await axios(config);
        setData(response.data);
      } catch (err) {
        setError("Error fetching data.");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [apiService, method, params, payload]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <Table bordered>
      <thead>
        <tr>
          {columns.map((column) => (
            <th key={column.accessor}>{column.header}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row, index) => (
          <tr key={index}>
            {columns.map((column) => (
              <td key={column.accessor}>{row[column.accessor]}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default TableDynamic;
