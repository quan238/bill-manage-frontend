import { FC } from "react";
import { Delete, Edit } from "@mui/icons-material";
import { Avatar } from "@mui/material";
import { FlexBox } from "components/Flex-box";
import { Paragraph } from "components/Typography";
import {
  StyledIconButton,
  StyledTableCell,
  StyledTableRow,
} from "components/Table/StyledComponents";
import { TGetCustomer } from "types/api";
import { useNavigate } from "react-router-dom";

// ========================================================================
type CustomerRowProps = { customer: TGetCustomer };
// ========================================================================

const CustomerRow: FC<CustomerRowProps> = ({ customer }) => {
  const { name, customerId, address, phoneNumber, _id } = customer;
  const navigate = useNavigate();

  const handleEditCustomer = () => {
    navigate(`/customers/edit-customer/${_id}`);
  };

  return (
    <StyledTableRow tabIndex={-1} role="checkbox">
      <StyledTableCell align="left" width="20%">
        <FlexBox alignItems="center" gap={1.5}>
          <Avatar src={""} />
          <Paragraph>{name}</Paragraph>
        </FlexBox>
      </StyledTableCell>

      <StyledTableCell align="left" sx={{ fontWeight: 400 }}>
        {customerId}
      </StyledTableCell>

      <StyledTableCell align="left" sx={{ fontWeight: 400 }}>
        {address}
      </StyledTableCell>

      <StyledTableCell align="left" sx={{ fontWeight: 400 }}>
        {phoneNumber}
      </StyledTableCell>

      <StyledTableCell align="center">
        <StyledIconButton onClick={handleEditCustomer}>
          <Edit />
        </StyledIconButton>

        <StyledIconButton>
          <Delete />
        </StyledIconButton>
      </StyledTableCell>
    </StyledTableRow>
  );
};

export default CustomerRow;
