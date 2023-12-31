import * as React from "react";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";

export default function CustomizedInputBase({
  searchquery,
  setSearchQuery,
}: {
  searchquery: string;
  setSearchQuery: React.Dispatch<React.SetStateAction<string>>;
}) {
  const handleSearch = (e: { target: { value: string } }) => {
    setSearchQuery(e.target.value.toLowerCase().trim());
  };
  console.log(searchquery);
  return (
    <Paper
      component="form"
      sx={{
        p: "2px 4px",
        display: "flex",
        alignItems: "center",
        width: 631,
        height: 52,
        backgroundColor: "#5a5c66",
        marginTop: 1,
        marginLeft: "226px",
      }}
    >
      <InputBase
        sx={{ ml: 1, flex: 1, color: "white" }}
        placeholder="Поиск"
        inputProps={{ "aria-label": "Поиск" }}
        onChange={handleSearch}
      />
      <IconButton
        type="button"
        sx={{ p: "10px", color: "white" }}
        aria-label="search"
      >
        <SearchIcon />
      </IconButton>
      <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
    </Paper>
  );
}
