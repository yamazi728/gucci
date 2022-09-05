import * as React from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import SearchIcon from "@mui/icons-material/Search";
import { Typography } from "@mui/material";
function valuetext(value) {
  return `${value}°C`;
}

export default function FiltersForWomens({
  search,
  setSearch,
  price,
  setPrice,
}) {
  return (
    <div style={{ height: "17vh" }}>
      <Box>
        <Typography>For Price</Typography>
        <Slider
          className="large-slider"
          style={{ color: "#767e85" }}
          getAriaLabel={() => "Temperature range"}
          value={price}
          onChange={(e, value) => setPrice(value)}
          min={0}
          max={5000}
          valueLabelDisplay="auto"
          getAriaValueText={valuetext}
        />
        <Slider
          className="small-slider"
          size="small"
          style={{ color: "#767e85" }}
          getAriaLabel={() => "Temperature range"}
          value={price}
          onChange={(e, value) => setPrice(value)}
          min={0}
          max={5000}
          valueLabelDisplay="auto"
          getAriaValueText={valuetext}
        />
      </Box>
      <Box
        style={{
          width: " 100%",
          height: "40px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div className="search-box">
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="search-input"
            type="text"
            placeholder="Search"
          />
          <div className="search-btn">
            <SearchIcon />
          </div>
        </div>
      </Box>
    </div>
  );
}
