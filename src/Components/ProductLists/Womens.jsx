import {
  AccordionDetails,
  Accordion,
  AccordionSummary,
  Box,
  Button,
  Typography,
  Stack,
  Pagination,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import React, { useContext, useEffect, useState } from "react";
import { clothesContext } from "../../contexts/clothesContext";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import MenCard from "../Cards/MenCard";
import FiltersForMens from "../Filters/FiltersForMens";
import SearchIcon from "@mui/icons-material/Search";
import WomenCard from "../Cards/WomenCard";
import { useSearchParams } from "react-router-dom";

const Womens = () => {
  const { getWomens, womens, womensPages } = useContext(clothesContext);

  const [searchParams, setSearchParams] = useSearchParams();
  const [price, setPrice] = useState([0, 5000]);
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState(
    searchParams.get("q") ? searchParams.get("q") : ""
  );
  useEffect(() => {
    setSearchParams({
      q: search,
      price_gte: price[0],
      price_lte: price[1],
      _page: page,
      _limit: 5,
    });
  }, []);
  useEffect(() => {
    setSearchParams({
      q: search,
      price_gte: price[0],
      price_lte: price[1],
      _page: page,
      _limit: 5,
    });
  }, [search, price, page]);
  // console.log(mensPages);
  // console.log(mens);
  useEffect(() => {
    getWomens();
  }, [searchParams]);
  // console.log(womensPages);
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        backgroundColor: "antiquewhite",
        backgroundImage:
          'url("https://static.collectui.com/shots/2666136/daily-ui-059-background-pattern-large")',
      }}
    >
      <section id="page-header2">
        <h2>#formakers</h2>
        <p>Save more with coupons $ up to 70% off!</p>
      </section>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Accordion
          style={{
            width: "40%",
            borderBottomLeftRadius: "20px",
            borderBottomRightRadius: "20px",
          }}
        >
          <AccordionSummary
            style={{ display: "flex", justifyContent: "center" }}
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography style={{ display: "flex", alignItems: "center" }}>
              <FilterAltIcon style={{ marginRight: "10px" }} /> Filters
            </Typography>
          </AccordionSummary>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <div
              style={{
                width: "90%",
                height: "1px",
                backgroundColor: "#999999",
              }}
            ></div>
          </div>
          <AccordionDetails style={{ position: "relative" }}>
            <FiltersForMens
              search={search}
              setSearch={setSearch}
              price={price}
              setPrice={setPrice}
            />
          </AccordionDetails>
        </Accordion>
      </div>
      <Box
        margin={"16px"}
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          flexFlow: "wrap",
        }}
      >
        {womens.map((item) => (
          <WomenCard key={item.id} item={item} />
        ))}
      </Box>
      <Stack spacing={2}>
        <Pagination
          style={{ display: "flex", justifyContent: "center" }}
          count={isNaN(womensPages) ? 0 : womensPages}
          onChange={(e, value) => setPage(value)}
          page={page}
          variant="outlined"
          shape="rounded"
        />
      </Stack>
    </div>
  );
};

export default Womens;
