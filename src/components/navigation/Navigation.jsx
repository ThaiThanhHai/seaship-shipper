import * as React from "react";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import RestoreIcon from "@mui/icons-material/Restore";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { AccountCircleOutlined, LocalShipping } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

const Navigation = () => {
  const navigate = useNavigate();
  const [value, setValue] = React.useState(0);

  return (
    <Box
      sx={{
        width: 390,
        position: "absolute",
        bottom: 0,
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
          label="Tuyến đường"
          icon={<LocationOnIcon />}
          onClick={() => {
            navigate("/route");
          }}
        />
        <BottomNavigationAction
          label="Đơn hàng"
          icon={<LocalShipping />}
          onClick={() => {
            navigate("/order");
          }}
        />
        <BottomNavigationAction
          label="Lịch sử"
          icon={<RestoreIcon />}
          onClick={() => {
            navigate("/history");
          }}
        />
        <BottomNavigationAction
          label="Thông tin"
          icon={<AccountCircleOutlined />}
          onClick={() => {
            navigate("/account");
          }}
        />
      </BottomNavigation>
    </Box>
  );
};

export default Navigation;
