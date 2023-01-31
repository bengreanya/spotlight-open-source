import React from 'react';
import { Table, Column, HeaderCell, Cell } from 'rsuite-table';
import 'rsuite-table/lib/less/index.less';
const dataList = [
  { id: 1, name: 'me', email: 'me@email.com', location: 'oregon' },
  { id: 2, name: 'you', email: 'you@email.com', location: 'florida' },
  { id: 3, name: 'us', email: 'us@email.com', location: 'US' },
];

export default function TableComp() {
  return <Table data={dataList}></Table>;
}
