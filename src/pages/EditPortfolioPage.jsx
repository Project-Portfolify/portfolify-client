import { useEffect, useState } from "react";
import PortfolioStepper from "../components/PortfolioStepper";
import axios from "axios";
import { useParams } from "react-router-dom";
import ErrorAlert from "../components/ErrorAlert";
const env = import.meta.env.VITE_BASE_API_URL;

const EditPortfolioPage = () => {
  const [formData, setFormData] = useState();
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const { slug } = useParams();

  useEffect(() => {
    axios
      .get(`${env}/portfolios/${slug}`)
      .then((response) => {
        setFormData(response.data);
      })
      .catch((err) => {
        setError(true);
        setErrorMessage("Error fetching data");
      });
  }, [slug]);

  return (
    <div>
      {formData && <PortfolioStepper formData={formData} isEdit />}
      {error && (
        <ErrorAlert message={errorMessage} onClose={() => setError(false)} />
      )}
    </div>
  );
};

export default EditPortfolioPage;
