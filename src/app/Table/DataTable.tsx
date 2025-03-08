import React, { useEffect, useState } from "react";
import axios from "axios";
import { Table, Spinner, Form } from "react-bootstrap";
import ReactPaginate from "react-paginate";
import axiosInstance from "@app/axios/axiosInstance";
import { Dflex, DflexJustifyBetween } from "@app/components/display.style";
import Skeleton from "react-loading-skeleton";

interface TableProps {
  endpoint: string;
  columns: { key: string; label: string }[];
}

const DataTable: React.FC<TableProps> = ({ endpoint, columns }) => {
  const [data, setData] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [page, setPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(1);
  const [pageSize, setPageSize] = useState<number>(10);

  useEffect(() => {
    fetchData(page, pageSize);
  }, [page, pageSize]);

  const fetchData = async (page: number, pageSize: number) => {
    setLoading(true);
    try {
      const response = await axiosInstance.get(`${endpoint}?page=${page}&limit=${pageSize}`);
      setData(response.data.users || response.data.data);
      setTotalPages(response.data.totalPages);
    } catch (error) {
      console.error("Error fetching data", error);
    } finally {
      setLoading(false);
    }
  };

  const handlePageChange = (selectedItem: { selected: number }) => {
    setPage(selectedItem.selected + 1);
  };

  const handlePageSizeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setPageSize(Number(e.target.value));
    setPage(1);
  };

  return (
    <div>
      {loading ? (
        <Table bordered>
          <thead>
            <tr>
              <th>
                <Dflex style={{ justifyContent: "center" }}>
                  <Skeleton height={25} width={150} />
                </Dflex>
              </th>
              {Array.from({ length: 5 }).map((_, index) => (
                <th key={index}>
                  <Dflex style={{ justifyContent: "center" }}>
                    <Skeleton height={25} width={150} />
                  </Dflex>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {Array.from({ length: 8 }).map((_, index) => (
              <tr key={index}>
                <th>
                  <Dflex style={{ justifyContent: "center" }}>
                    <Skeleton height={25} width={150} />
                  </Dflex>
                </th>
                {Array.from({ length: 5 }).map((_, index) => (
                  <th key={index}>
                    <Dflex style={{ justifyContent: "center" }}>
                      <Skeleton height={25} width={150} />
                    </Dflex>
                  </th>
                ))}
              </tr>
            ))}
          </tbody>
        </Table>
      ) : (
        <Table bordered hover>
          <thead>
            <tr>
              <th>#</th>
              {columns.map((col) => (
                <th key={col.key}>{col.label}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={item._id || index}>
                <td>{index + 1}</td>
                {columns.map((col) => (
                  <td key={col.key}>{item[col.key]}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </Table>
      )}
      <DflexJustifyBetween>
        <Form.Select onChange={handlePageSizeChange} value={pageSize} className="w-auto">
          <option value="5">5</option>
          <option value="10">10</option>
          <option value="20">20</option>
          <option value="50">50</option>
        </Form.Select>
        <ReactPaginate
          previousLabel={"Previous"}
          nextLabel={"Next"}
          breakLabel={"..."}
          pageCount={totalPages}
          marginPagesDisplayed={2}
          pageRangeDisplayed={5}
          onPageChange={handlePageChange}
          containerClassName={"pagination justify-content-center"}
          pageClassName={"page-item"}
          pageLinkClassName={"page-link"}
          previousClassName={"page-item"}
          previousLinkClassName={"page-link"}
          nextClassName={"page-item"}
          nextLinkClassName={"page-link"}
          breakClassName={"page-item"}
          breakLinkClassName={"page-link"}
          activeClassName={"active"}
        />
      </DflexJustifyBetween>
    </div>
  );
};

export default DataTable;
