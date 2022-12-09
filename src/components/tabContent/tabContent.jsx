import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { List, Paper } from "@mui/material";
import { useState } from "react";
import {
  DepartureBoard,
  RestartAlt,
  SportsScore,
  TurnLeft,
  TurnRight,
  TurnSlightLeft,
  TurnSlightRight,
} from "@mui/icons-material";
import { round } from "lodash";

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

export default function TabContent({ data, steps }) {
  const [value, setValue] = useState(0);

  const modifier =
    steps &&
    steps.map((step, index) => {
      if (index === 0) return "depart";
      if (index === steps.length - 1) return "destination";
      return step.maneuver.modifier;
    });
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleDisplayIcon = (modifier) => {
    let icon;
    switch (modifier) {
      case "depart":
        icon = <DepartureBoard />;
        break;
      case "left":
        icon = <TurnLeft />;
        break;
      case "slight left":
        icon = <TurnSlightLeft />;
        break;
      case "right":
        icon = <TurnRight />;
        break;
      case "slight right":
        icon = <TurnSlightRight />;
        break;
      case "destination":
        icon = <SportsScore />;
        break;
      default:
        icon = <RestartAlt />;
    }
    return icon;
  };

  const handleDistance = (distance) => {
    if (distance >= 1000) {
      const convert = round(distance / 1000, 1);
      return `${convert} km`;
    }

    const convert = round(distance, 1);
    return `${convert} m`;
  };

  return (
    <Box sx={{ width: "100%", marginLeft: "10px", marginTop: "-10px" }}>
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
        <Paper style={{ maxHeight: 270, width: 365, overflow: "auto" }}>
          <List>
            <div className="instruction">
              {steps &&
                steps.map((step, index) => {
                  return (
                    <div className="guied">
                      <div className="draw">
                        <div className="before">
                          {handleDisplayIcon(modifier[index])}
                        </div>
                        <div className="after"></div>
                      </div>
                      <div className="label">
                        <p>{step.maneuver.instruction}</p>
                        <p>{handleDistance(step.distance)}</p>
                      </div>
                    </div>
                  );
                })}
            </div>
          </List>
        </Paper>
      </TabPanel>
      <TabPanel value={value} index={0}>
        <div className="order-name">{data.order_name}</div>
        <div>
          <div className="label">
            <p className="left">Người nhận</p>
            <p className="right">{data.receiver_name}</p>
          </div>
          <div className="label">
            <p className="left">SĐT</p>
            <p className="right">{data.phone}</p>
          </div>
          <div className="label">
            <p className="left">Phí ship</p>
            <p className="right">{data.shipping_fee} VNĐ</p>
          </div>
          <div className="label">
            <p className="left">Địa chỉ</p>
            <p className="right">{data.address}</p>
          </div>
        </div>
      </TabPanel>
    </Box>
  );
}
