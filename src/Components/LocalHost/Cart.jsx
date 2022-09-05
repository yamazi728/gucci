import React, { useContext, useEffect, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardMedia,
  Container,
  IconButton,
  Typography,
} from "@mui/material";
import RemoveIcon from "@mui/icons-material/Remove";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import { useNavigate } from "react-router-dom";
import { cartContext } from "../../contexts/cartContext";

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
];

export default function Cart() {
  const { getCart, cart, changeProductCount, deleteFromCart } =
    useContext(cartContext);
  // console.log(cart,getCart);
  useEffect(() => {
    getCart();
  }, []);
  const navigate = useNavigate();
  console.log(cart);
  return (
    <div>
      <section id="page-header8">
        <h2>#formakers</h2>
        <p>Save more with coupons $ up to 70% off!</p>
      </section>
      <Container style={{ marginTop: "50px" }}>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow style={{ backgroundColor: "#e1e1e1" }}>
                <TableCell>Movies</TableCell>
                <TableCell align="right">Price</TableCell>
                <TableCell align="right">Count</TableCell>
                <TableCell align="right">Sub Price</TableCell>
                <TableCell align="right">Info</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {cart &&
                cart?.products.map((row) => (
                  <TableRow
                    key={row.item.id}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      <div style={{ display: "flex" }}>
                        <Card
                          style={{
                            borderRadius: "10px",
                            backgroundColor: "none !important",
                          }}
                          sx={{ maxWidth: 90 }}
                        >
                          <CardActionArea>
                            <CardMedia
                              component="img"
                              height="130"
                              image={row.item.image}
                              alt={row.item.title}
                            />
                          </CardActionArea>
                          <Button
                            style={{ width: "100%", color: "#5c5c5c" }}
                            onClick={() => deleteFromCart(row.item.id)}
                            aria-label="delete"
                          >
                            <DeleteIcon />
                          </Button>
                        </Card>
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "center",
                            flexDirection: "column",
                            paddingLeft: "15px",
                          }}
                        >
                          <p style={{ fontWeight: "600" }}>{row.item.title}</p>
                          <p>Size: M</p>
                          <p>Color: Black</p>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell align="right">${row.item.price}</TableCell>
                    <TableCell align="right">
                      <IconButton
                        onClick={() =>
                          changeProductCount(row.count - 1, row.item.id)
                        }
                        aria-label="delete"
                      >
                        <RemoveIcon />
                      </IconButton>
                      <span>{row.count}</span>
                      <IconButton
                        onClick={() =>
                          changeProductCount(row.count + 1, row.item.id)
                        }
                        aria-label="delete"
                      >
                        <AddIcon />
                      </IconButton>
                    </TableCell>
                    <TableCell align="right">${row.subPrice}</TableCell>
                    <TableCell align="right"></TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </TableContainer>
        <Box
          sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
          style={{
            display: "flex",
            justifyContent: "space-around",
            margin: "30px 20px",
          }}
        >
          <div style={{ display: "flex", flexDirection: "column" }}>
            <Typography variant="h5" component="h3">
              Total: {cart && cart?.totalPrice}
            </Typography>
            <div
              style={{ width: "100%", height: "1px", background: "black" }}
            ></div>
            <Button
              onClick={() => navigate(`/order`)}
              style={{
                marginTop: "20px",
                background: "#6d49f5",
                color: "white",
              }}
            >
              Go to Buy
            </Button>
          </div>
        </Box>
      </Container>
    </div>
  );
}
