import * as React from "react";
import MuiBox from "@mui/material/Box";
import { StyledMuiTab, StyledMuiTabs } from "./styled";
import TabPanel from "./TabPanel";

const Tabs = ({ handleChange, tabsList, value }) => {
  return (
    <MuiBox
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
      <MuiBox
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
          {tabsList.map(({ label }, index) => {
            return (
              <StyledMuiTab
                id={`tab-${index}`}
                ariaControls={`tabpanel-${index}`}
                label={label}
              />
            );
          })}
        </StyledMuiTabs>
      </MuiBox>

      {tabsList.map(({ component }, index) => {
        return (
          <TabPanel value={value} index={index}>
            {component}
          </TabPanel>
        );
      })}
    </MuiBox>
  );
};

export default Tabs;
