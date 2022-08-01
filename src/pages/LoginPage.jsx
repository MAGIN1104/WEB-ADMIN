import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import icons from "../assets/svg/svg-icons.svg";
import "../assets/styles/index.css";
import "@fontsource/roboto/300.css";
export const LoginPage = () => {
  return (
    <div className="body_login">
      <div className="lateral-card">hola mundo</div>
      <div className="login_area">
        <div className="card-login">
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
            label="email@example.com"
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
          <Button
            sx={{
              mb: 2,
              width: "100%",
              outlineColor: "#3f50b5",
              color: "#3f50b5",
              borderBlockColor: "#3f50b5",
            }}
            variant="outlined"
          >
            Sign In
          </Button>
          <a href="/">Sign Up</a>
        </div>
      </div>
    </div>
  );
};
