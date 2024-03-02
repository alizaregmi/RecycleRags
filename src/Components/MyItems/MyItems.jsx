import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import SellItems from "../SellItems/SellItems";
import History from "../History/History";

const MyItems = () => {
  const topStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  };
  const headingStyle = {
    color: "#171717",
    fontSize: "50px",
    fontWeight: "600",
  };
  const hrStyle = {
    width: "200px",
    height: "6px",
    borderRadius: "10px",
    background: "#252525",
  };
  const tabsStyle = {};
  const tabListStyle = {
    display: "flex",
    justifyContent: "space-evenly",
    borderBottom: "2px solid #ccc",
    marginBottom: "10px",
    marginTop: "5vh",
  };

  const tabStyle = {
    padding: "10px",
    cursor: "pointer",
    color: "#c43ccd",
    fontSize: "30px",
    fontWeight: "400",
  };

  const tabPanelStyle = {
    padding: "20px",
  };

  return (
    <div>
      <div
        className='top'
        style={topStyle}
      >
        <h1 style={headingStyle}>Your Items </h1>
        <hr style={hrStyle} />
      </div>

      <Tabs style={tabsStyle}>
        <TabList style={tabListStyle}>
          <Tab style={tabStyle}>Current Items</Tab>
          <Tab style={tabStyle}>Sold Items</Tab>
        </TabList>

        <TabPanel style={tabPanelStyle}>
          <SellItems />
        </TabPanel>
        <TabPanel style={tabPanelStyle}>
          <History />
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default MyItems;
