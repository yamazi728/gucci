import {
  AccordionDetails,
  Accordion,
  AccordionSummary,
  Box,
  Button,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import React, { useContext, useEffect, useState } from "react";
import { clothesContext } from "../../contexts/clothesContext";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import MenCard from "../Cards/MenCard";
import FiltersForMens from "../Filters/FiltersForMens";
import SearchIcon from "@mui/icons-material/Search";
import { useSearchParams } from "react-router-dom";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { Parallax } from "react-parallax";
import b1 from "../IMGS/banner/b1.jpg";

const Mens = () => {
  const { getMens, mens, mensPages } = useContext(clothesContext);
  // console.log(mensPages);
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
    getMens();
  }, [searchParams]);
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        backgroundImage:
          "url(https://static.collectui.com/shots/2666136/daily-ui-059-background-pattern-large)",
      }}
    >
      <Parallax bgImage={b1} strength={-110}>
        <section id="page-header">
          <h2>#formakers</h2>
          <p>Save more with coupons $ up to 70% off!</p>
        </section>
      </Parallax>
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
        {mens.map((item) => (
          <MenCard key={item.id} item={item} />
        ))}
      </Box>
      <Stack spacing={2}>
        <Pagination
          style={{ display: "flex", justifyContent: "center" }}
          count={isNaN(mensPages) ? 0 : mensPages}
          onChange={(e, value) => setPage(value)}
          page={page}
          variant="outlined"
          shape="rounded"
        />
      </Stack>
    </div>
  );
};

export default Mens;
