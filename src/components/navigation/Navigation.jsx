import * as React from "react";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import RestoreIcon from "@mui/icons-material/Restore";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { AccountCircleOutlined, Assessment, LocalShipping } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

const Navigation = () => {
  const navigate = useNavigate();
  const url = window.location.href
  const navDefault = url.split('/')[3];
  const [value, setValue] = React.useState(navDefault);

  return (
    <Box
      sx={{
        width: 390,
        position: "absolute",
        bottom: 0,
        left: 0,
        borderRadius: "10px",
        boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
      }}
    >
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction
          label="Lộ trình"
          value="route"
          icon={<LocationOnIcon />}
          onClick={() => {
            navigate("/route");
          }}
        />
        <BottomNavigationAction
          label="Đơn hàng"
          value="order"
          icon={<LocalShipping />}
          onClick={() => {
            navigate("/order");
          }}
        />
        <BottomNavigationAction
          label="Thống kê"
          value="statistic"
          icon={<Assessment />}
          onClick={() => {
            navigate("/statistic");
          }}
        />
        <BottomNavigationAction
          label="Lịch sử"
          icon={<RestoreIcon />}
          value="history"
          onClick={() => {
            navigate("/history");
          }}
        />
      </BottomNavigation>
    </Box>
  );
};

export default Navigation;
