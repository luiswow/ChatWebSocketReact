// @/src/components/TableRowCell.tsx
import { styled } from "@stitches/react";
import get from "lodash.get";

import { IColumnType } from "./table";

interface Props<T> {
  item: T;
  column: IColumnType<T>;
}

export function TableRowCell<T>({ item, column }: Props<T>): JSX.Element {
  const value = get(item, column.key);
  return <td>{column.render ? column.render(column, item) : value}</td>;
}
