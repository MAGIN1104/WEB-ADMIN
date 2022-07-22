import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import "./assets/styles/index.css";
import "@fontsource/roboto/300.css";
import icons from "./assets/svg/svg-icons.svg";
export const AdminApp = () => {
  return (
    <>
      <div className="d-flex">
        <div className="background-medium"></div>
        <div className="container-login">
          <div className="col-12">
            <div className="logo">
              <svg>
                <use xlinkHref={`${icons}#svg-users`} />
              </svg>
            </div>
            <Typography align="center" variant="h6" component="h2">
              Hello Again!
            </Typography>
            <p className="parrafo mt-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
              vitae nulla ratione doloribus sunt quod!
            </p>
            <TextField
              id="outlined-basic"
              label="name@example.com"
              variant="outlined"
              sx={{ mb: 2, width: "100%" }}
            />
            <TextField
              type="password"
              id="outlined-basic"
              label="Password"
              variant="outlined"
              sx={{ mb: 2, width: "100%" }}
            />
            <Button sx={{ mb: 2, width: "100%" }} variant="outlined">
              Ingresar
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};