import { useEffect, useState } from "react";
import PortfolioStepper from "../components/PortfolioStepper";
import axios from "axios";
import { useParams } from "react-router-dom";
const env = import.meta.env.VITE_BASE_API_URL;

const EditPortfolioPage = () => {
  const [formData, setFormData] = useState();
  const { slug } = useParams();

  useEffect(() => {
    axios
      .get(`${env}/portfolios/${slug}`)
      .then((response) => {
        console.log(response.data);
        setFormData(response.data);
      })
      .catch((err) => {
        console.log("Error", err);
      });
  }, [slug]);

  return (
    <div>{formData && <PortfolioStepper formData={formData} isEdit />}</div>
  );
};

export default EditPortfolioPage;
