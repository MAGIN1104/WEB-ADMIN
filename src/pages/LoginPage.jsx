import { useNavigate } from "react-router-dom";
import { useFormLogin } from "../hooks/useFormLogin";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import icons from "../assets/svg/svg-icons.svg";
import "../assets/styles/index.scss";
import "@fontsource/roboto/300.css";
export const LoginPage = () => {
  const { email, password, onInputChange } = useFormLogin({
    email: "",
    password: "",
  });
  const regex = new RegExp(/^[\w-]+@([\w-]+\.)+[\w-]{2,4}$/);
  const navigate = useNavigate();
  const onLogin = () => {
    navigate("/admin/home", {
      replace: true,
    });
  };
  return (
    <div className="left_area">
      <div className="left_area_contain">
        <div className="container">
          <svg className="left-icon">
            <use xlinkHref={`${icons}#svg-park`} />
          </svg>
        </div>
      </div>
      <div className="right_area_contain">
        <div className="card-login">
          <div className="logo">
            <svg className="logo_svg">
              <use xlinkHref={`${icons}#svg-avatar`} />
            </svg>
          </div>
          <Typography align="center" variant="h5" component="h2">
            Hello Again!
          </Typography>
          <p className="parrafo mt-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
          </p>
          <TextField
            name="email"
            id="email"
            label="email@example.com"
            onChange={onInputChange}
            sx={{ mb: 2, width: "100%" }}
            value={email}
            variant="standard"
            error={
              email.length > 0 ? (regex.test(email) ? false : true) : false
            }
            helperText={
              email.length > 0 ? (regex.test(email) ? "" : "Invalid email") : ""
            }
          />
          <TextField
            name="password"
            id="password"
            type="password"
            label="Password"
            onChange={onInputChange}
            sx={{ mb: 2, width: "100%" }}
            value={password}
            variant="standard"
            error={
              password.length > 0
                ? password.length >= 6
                  ? false
                  : true
                : false
            }
            helperText={
              password.length > 0
                ? password.length >= 6
                  ? ""
                  : "Enter more 5 characters"
                : ""
            }
          />
          <Button
            sx={{
              my: 4,
              width: "100%",
              outlineColor: "#3f50b5",
              color: "#3f50b5",
              borderBlockColor: "#3f50b5",
            }}
            variant="outlined"
            disabled={
              email.length > 0 && password.length >= 6
                ? regex.test(email)
                  ? false
                  : true
                : true
            }
            onClick={onLogin}
          >
            Sign In
          </Button>
        </div>
      </div>
    </div>
  );
};
