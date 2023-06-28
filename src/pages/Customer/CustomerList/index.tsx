import {
  Box,
  Card,
  Stack,
  Table,
  TableBody,
  TableContainer,
} from "@mui/material";
import Scrollbar from "components/Scrollbar";
import SearchArea from "components/SearchArea";
import TableHeader from "components/Table/TableHeader";
import { H3 } from "components/Typography";
import { useMuiTable } from "hooks";
import React from "react";
import { tableHeading } from "./constant/customer.constant";
import TablePagination from "components/Table/TablePagination";
import CustomerRow from "./components/CustomerRow";
import NoDataFound from "components/No-data-found";
import { useGetListCustomer } from "apis/hooks/customer.query";
import { Loading } from "components/Loading";
import { useNavigate } from "react-router-dom";

export default function CustomerListPage() {
  const { data: customerListData, isLoading: loadingGetListCustomer } =
    useGetListCustomer();
  const navigate = useNavigate();
  const {
    order,
    orderBy,
    selected,
    rowsPerPage,
    filteredList,
    handleChangePage,
    handleRequestSort,
  } = useMuiTable({ listData: customerListData?.data });

  if (loadingGetListCustomer) return <Loading />;

  return (
    <Box py={4}>
      <H3 mb={2}>Customers</H3>

      <SearchArea
        handleSearch={() => undefined}
        buttonText="Add Customer"
        handleBtnClick={() => navigate("/customers/create-customer")}
        searchPlaceholder="Search Customer..."
      />

      <Card>
        <Scrollbar>
          <TableContainer sx={{ minWidth: 900 }}>
            <Table>
              <TableHeader
                order={order}
                hideSelectBtn
                orderBy={orderBy}
                heading={tableHeading}
                numSelected={selected.length}
                rowCount={filteredList.length}
                onRequestSort={handleRequestSort}
              />

              <TableBody>
                {filteredList.map((customer) => (
                  <CustomerRow customer={customer} key={customer.id} />
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Scrollbar>

        {filteredList.length === 0 && <NoDataFound />}
        <Stack alignItems="center" my={4}>
          <TablePagination
            onChange={handleChangePage}
            count={Math.ceil(filteredList.length / rowsPerPage)}
          />
        </Stack>
      </Card>
    </Box>
  );
}
