import { useEffect } from "react";
import PortfolioStepper from "../components/PortfolioStepper";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useState } from "react";
const env = import.meta.env.VITE_BASE_API_URL;


const EditPortfolioPage = () => {
  const { slug } = useParams();
const [formData, setFormData ] = useState();

  useEffect(() => {
    axios
      .get(`${env}/portfolios/${slug}`)
      .then((response) => {
        console.log(response.data);
        setFormData(response.data)
      })
      .catch((err) => {
        console.log("Error", err);
      });
  }, [slug]);

  return (
    <div>
      { formData && <PortfolioStepper formData={formData} isEdit/>}
    </div>
  );
};

export default EditPortfolioPage;
