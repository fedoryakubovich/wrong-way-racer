import * as React from "react";
import PropTypes from "prop-types";
import MuiTypography from "@mui/material/Typography";
import MuiBox from "@mui/material/Box";

const TabPanel = ({ children, value, index, ...props }) => {
  return (
    <section
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...props}
    >
      {value === index && (
        <MuiBox sx={{ p: 3 }}>
          <MuiTypography>{children}</MuiTypography>
        </MuiBox>
      )}
    </section>
  );
};

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

export default TabPanel;
