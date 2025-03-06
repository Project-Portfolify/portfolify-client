import { useEffect } from "react";
import PortfolioStepper from "../components/PortfolioStepper";
import axios from "axios";

const EditPortfolio = () => {
  useEffect(() => {
    axios.get("", () => {});
  }, []);

  return (
    <div>
      <PortfolioStepper />
    </div>
  );
};

export default EditPortfolio;
