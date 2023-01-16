// @/src/components/Table.tsx
import { styled } from "@stitches/react";
import { useEffect, useState } from "react";
import Paginator from "./paginator/paginator";

import { TableHeader } from "./tableHeader";
import { TableRow } from "./tableRow";

export interface IColumnType<T> {
  key: string;
  title: string;
  width?: number;
  render?: (column: IColumnType<T>, item: T) => void;
}

interface Props<T> {
  data: T[];
  columns: IColumnType<T>[];
}

export function Table<T>({ data, columns }: Props<T>): JSX.Element {
  const [commentData, setcommentData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = commentData.slice(indexOfFirstPost, indexOfLastPost);

  const pageHandler = (pageNumber: any) => {
    setCurrentPage(pageNumber);
  };

  useEffect(() => {
    let commentArr: any = data;
    setcommentData(commentArr);
  }, [currentPage, data]);

  return (
    <>
      <table className="table col-sm-3 table-responsive-sm table-striped col-md-12 ">
        <thead>
          <TableHeader columns={columns} />
        </thead>

        <tbody>
          <TableRow data={currentPosts} columns={columns} />
        </tbody>
        <div className="">
          <Paginator
            onChangepage={pageHandler}
            postsPerPage={postsPerPage}
            totalPosts={commentData.length}
          />
        </div>
      </table>
    </>
  );
}
