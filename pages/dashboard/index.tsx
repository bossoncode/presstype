import BarChart from "@/components/dashboard/barchart/BarChart";
import ProfileHeader from "@/components/dashboard/profile_header/ProfileHeader";
import Searchbar from "@/components/dashboard/searchbar";
import Stats from "@/components/dashboard/stats";
import DashboardLayout from "@/layouts/dashboard_layout";
import React from "react";
import styles from "./styles.module.scss";

const DashboardHome = () => {
  return (
    <DashboardLayout page_name={"Dashboard"}>
      <div className={styles.dashboard_top}>
        {/* <Searchbar />
        <ProfileHeader /> */}
      </div>
      <Stats />
      <BarChart />
    </DashboardLayout>
  );
};

export default DashboardHome;
