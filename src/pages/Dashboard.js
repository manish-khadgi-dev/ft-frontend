import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/esm/Container";
import { MainLayout } from "../components/mainLayout/MainLayout";
import { CustomTable } from "../customTable/CustomTable";
import { fetchTransaction } from "../helpers/axiosHelper";

const Dashboard = () => {
  const [trans, SetTrans] = useState([]);

  useEffect(() => {
    fetchingTrans();
  }, []);

  const fetchingTrans = async () => {
    const { status, result } = await fetchTransaction();
    status === "success" && SetTrans(result);
  };

  return (
    <div>
      <MainLayout>
        <Container className=" mt-5">
          {/* form seciton */}

          {/* table section */}
          <div className="ttable">
            <CustomTable trans={trans} />
          </div>
        </Container>
      </MainLayout>
    </div>
  );
};

export default Dashboard;
