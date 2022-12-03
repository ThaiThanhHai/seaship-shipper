import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { List, Paper } from "@mui/material";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function TabContent({ data, coordinates }) {
  console.log(coordinates);
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Box sx={{ width: "100%" }}>
      <Box
        sx={{
          borderBottom: 1,
          borderColor: "divider",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label="Chi tiết đơn hàng" {...a11yProps(0)} />
          <Tab label="Hướng dẫn lộ trình" {...a11yProps(1)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={1}>
        <Paper style={{ maxHeight: 250, width: 388, overflow: "auto" }}>
          <List>
            <p>Item</p>
            <p>Item</p>
            <p>Item</p>
            <p>Item</p>
            <p>Item</p>
            <p>Item</p>
            <p>Item</p>
            <p>Item</p>
            <p>Item</p>
            <p>Item</p>
            <p>Item</p>
            <p>Item</p>
          </List>
        </Paper>
      </TabPanel>
      <TabPanel value={value} index={0}>
        <div className="order-name">Đơn hàng 001</div>
        <div>
          <div className="label">
            <p className="left">Người nhận</p>
            <p className="right">{data && data.receiver}</p>
          </div>
          <div className="label">
            <p className="left">SĐT</p>
            <p className="right">{data && data.phone}</p>
          </div>
          <div className="label">
            <p className="left">Phí ship</p>
            <p className="right">{data && data.shipping_fee} VNĐ</p>
          </div>
          <div className="address">
            <p className="title">Địa chỉ</p>
            <p className="name">{data && data.address}</p>
          </div>
        </div>
      </TabPanel>
    </Box>
  );
}
