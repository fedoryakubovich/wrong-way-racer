import * as React from "react";
import Tabs from "../components/Tabs";

const TabsContainer = ({ tabsList }) => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return <Tabs handleChange={handleChange} tabsList={tabsList} value={value} />;
};

export default TabsContainer;
