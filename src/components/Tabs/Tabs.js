import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

import { styled } from "@mui/material/styles";
import Records from "../../modules/Records";
import Players from "../../modules/Players";
import Chat from "../../modules/Chat";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <section
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </section>
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

const StyledMuiTabs = styled(Tabs)(() => ({
  "&.MuiTabs-root": {
    color: "rgba(255, 255, 255, 0.5)",
    textTransform: "capitalize",
    fontWeight: 500,
    fontSize: 16,
    lineHeight: "20px",

    "& .MuiTabs-indicator": {
      height: 4,
      background: "#ffffff",
      borderRadius: 4,
    },
  },
}));

const StyledMuiTab = styled(Tab)(() => ({
  "&.MuiTab-root": {
    color: "rgba(255, 255, 255, 0.5)",
    textTransform: "capitalize",
    fontWeight: 500,
    fontSize: 16,
    lineHeight: "20px",

    "&.Mui-selected": {
      color: "#ffffff",
      fontWeight: 900,
      fontSize: 16,
      lineHeight: "20px",
      textShadow:
        "0px 0px 10px rgb(255 255 255 / 25%), 0px 2px 0px rgb(0 0 0 / 25%), -1px 0px 0px #000000, 1px 0px 0px #000000, 0px -1px 0px #000000, 0px 1px 0px #000000",
    },
  },
}));

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{
        width: "100%",
        background: "#1F1143",
        boxShadow:
          "0px 4px 4px rgba(0, 0, 0, 0.25), inset 0px 4px 37px #573DC6, inset 0px 4px 30px rgba(255, 255, 255, 0.25)",
        borderRadius: "24px",
        maxHeight: 384,
        paddingBottom: 20,
      }}
    >
      <Box
        sx={{
          borderBottom: 1,
          borderColor: "divider",
          borderColor: "rgba(255, 255, 255, 0.2)",
        }}
      >
        <StyledMuiTabs
          value={value}
          onChange={handleChange}
          allowScrollButtonsMobile
          sx={{ px: "30px" }}
        >
          <StyledMuiTab label="Records" {...a11yProps(0)} />
          <StyledMuiTab label="Player List" {...a11yProps(1)} />
          <StyledMuiTab label="Chat" {...a11yProps(2)} />
        </StyledMuiTabs>
      </Box>

      <TabPanel value={value} index={0}>
        <Records />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Players />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Chat />
      </TabPanel>
    </Box>
  );
}
