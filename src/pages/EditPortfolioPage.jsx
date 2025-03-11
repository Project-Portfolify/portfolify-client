import { useEffect } from "react";
import PortfolioStepper from "../components/PortfolioStepper";
import axios from "axios";
import { useParams } from "react-router-dom";

const env = import.meta.env.VITE_BASE_API_URL;

const EditPortfolioPage = () => {
  const { slug } = useParams();

  useEffect(() => {
    axios
      .get(`${env}/portfolios/${slug}`)
      .then((response) => {
        console.log(response.data);
      })
      .catch((err) => {
        console.log("Error", err);
      });
  }, [slug]);

  return (
    <div>
      <PortfolioStepper />
    </div>
  );
};

export default EditPortfolioPage;
