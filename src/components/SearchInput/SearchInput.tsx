import { Search } from "@mui/icons-material";
import { InputBase, InputBaseProps, styled } from "@mui/material";
import { FC } from "react";

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  height: 44,
  width: "100%",
  fontSize: 14,
  maxWidth: 350,
  fontWeight: 500,
  padding: "0 1rem",
  borderRadius: "8px",
  color: theme.palette.grey[600],
  border: `1px solid ${theme.palette.grey[500]}`,
  background: theme.palette.background.paper,
}));

const SearchInput: FC<InputBaseProps> = (props) => {
  return (
    <StyledInputBase
      startAdornment={<Search sx={{ fontSize: 19, mr: 1 }} />}
      {...props}
    />
  );
};

export default SearchInput;
