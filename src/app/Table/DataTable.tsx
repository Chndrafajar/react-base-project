import React, { useEffect, useState, JSX } from "react";
import axios from "axios";
import { Table, Spinner, Form, Modal, Button } from "react-bootstrap";
import ReactPaginate from "react-paginate";
import axiosInstance from "@app/axios/axiosInstance";
import { Dflex, DflexJustifyBetween } from "@app/components/display.style";
import Skeleton from "react-loading-skeleton";
import { toast } from "react-toastify";

interface Column {
  key: string;
  label: string;
  render?: (row: any) => JSX.Element; // Tambahkan ini agar bisa menerima fungsi render
}

interface TableProps {
  endpoint: string;
  columns: Column[];
  dataAction?: any;
  idParams?: any;
  setDataAction?: any;
  customLabel?: string;
}

const DataTable: React.FC<TableProps> = ({
  endpoint,
  columns,
  dataAction,
  setDataAction,
  idParams,
  customLabel = "",
}) => {
  const [data, setData] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [page, setPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(1);
  const [pageSize, setPageSize] = useState<number>(10);
  const [showModal, setShowModal] = useState(false);

  const handleClose = () => {
    setShowModal(false);
    setDataAction("");
  };
  const handleShow = () => setShowModal(true);

  useEffect(() => {
    fetchData(page, pageSize);
  }, [page, pageSize]);

  useEffect(() => {
    if (dataAction === "modal.delete") {
      setShowModal(true);
    }
  }, [dataAction, idParams]);

  const deleteData = async () => {
    if (dataAction !== "modal.delete") {
      console.log("Aksi tidak valid:", dataAction);
      return;
    }

    setLoading(true);
    try {
      const resp = await axiosInstance.delete(`${endpoint}/delete/${idParams}`);
      console.log(resp, "ini resp");
      toast.success(`Sukses Delete Data ${customLabel}`);
      fetchData(page, pageSize);
      handleClose();
    } catch (error) {
      console.error(error);
      toast.error(`${error}`);
    } finally {
      setLoading(false);
    }
  };

  const fetchData = async (page: number, pageSize: number) => {
    setLoading(true);
    try {
      const response = await axiosInstance.get(`${endpoint}/get?page=${page}&limit=${pageSize}`);
      setData(response.data.users || response.data.data);
      setTotalPages(response.data.totalPages);
    } catch (error) {
      console.error("Error fetching data", error);
      toast.error(`${error}`);
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
        <Table bordered>
          <thead>
            <tr>
              <th>
                <Dflex style={{ justifyContent: "center" }}>#</Dflex>
              </th>
              {columns?.map((col: any) => (
                <th key={col.key}>{col.label}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((row, index) => (
              <tr key={index}>
                <td>
                  <Dflex style={{ justifyContent: "center" }}>{index + 1}</Dflex>
                </td>
                {columns?.map((col: any) => (
                  <td key={col.key}>{col.render ? col.render(row) : row[col.key]}</td>
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
          previousLabel={"<"}
          nextLabel={">"}
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
      <Modal show={showModal} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Konfirmasi Hapus</Modal.Title>
        </Modal.Header>
        <Modal.Body>Apakah Anda yakin ingin menghapus data ini? Tindakan ini tidak dapat dibatalkan.</Modal.Body>
        <Modal.Footer>
          <Button variant="outline" onClick={handleClose}>
            Batal
          </Button>
          <Button variant="danger" onClick={deleteData} disabled={loading}>
            {loading ? <Spinner animation="border" size="sm" /> : "Ya, Hapus"}
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default DataTable;
