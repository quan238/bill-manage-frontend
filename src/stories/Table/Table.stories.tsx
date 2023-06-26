import { Stack, Table, TableBody, TableContainer } from "@mui/material";
import type { StoryObj } from "@storybook/react";
import TableHeader from "components/Table/TableHeader";
import { useMuiTable } from "hooks";
import { tableMockData, tableMockHeading } from "./Table.mock";
import RefundRequestRow from "./RefundRequestRow";
import TablePagination from "components/Table/TablePagination";

export default {
  title: "Table",
};

const TableExample = (props) => {
  const {
    order,
    orderBy,
    selected,
    rowsPerPage,
    filteredList,
    handleChangePage,
    handleRequestSort,
  } = useMuiTable({ listData: tableMockData });

  return (
    <>
      <TableContainer sx={{ minWidth: 900 }}>
        <Table>
          <TableHeader
            order={order}
            hideSelectBtn
            orderBy={orderBy}
            heading={tableMockHeading}
            rowCount={tableMockData.length}
            numSelected={selected.length}
            onRequestSort={handleRequestSort}
          />
          <TableBody>
            {filteredList.map((request, index) => (
              <RefundRequestRow request={request} key={index} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Stack alignItems="center" my={4}>
        <TablePagination
          onChange={handleChangePage}
          count={Math.ceil(tableMockHeading.length / rowsPerPage)}
        />
      </Stack>
    </>
  );
};

export const TableDemo: StoryObj<typeof TableExample> = {
  name: "Full Table",
  render: (args) => <TableExample {...args} />,
};

export const TablePaginationDemo: StoryObj<typeof TablePagination> = {
  name: "Pagination",
  args: {
    count: 100,
    onChange: (e, page) => console.log(page),
  },
  render: (args) => <TablePagination {...args} />,
};

export const TableHeaderDemo: StoryObj<typeof TableHeader> = {
  name: "Header",
  argTypes: {
    order: {
      name: "Order",
      type: "string",
      options: ["asc", "desc"],
      control: "select",
    },
  },
  args: {
    order: "asc",
    hideSelectBtn: true,
    orderBy: "name",
    heading: tableMockHeading,
    rowCount: tableMockHeading.length,
    numSelected: 1,
    onRequestSort: (id) => console.log(id),
  },
  decorators: [
    (Story) => (
      <Table>
        <Story />
      </Table>
    ),
  ],
  render: (args) => <TableHeader {...args} />,
};

export const TableRow: StoryObj<typeof RefundRequestRow> = {
  name: "Row",
  args: {
    request: tableMockData[0],
  },
  decorators: [
    (Story) => (
      <Table>
        <TableBody>
          <Story />
        </TableBody>
      </Table>
    ),
  ],
  render: (args) => <RefundRequestRow {...args} />,
};
