import axios from "axios";
import { useEffect, useMemo, useState } from "react";
import { Templates } from "../constants";
import { useParams } from "react-router-dom";
import AtomTheme from "../templates/AtomTheme";
import BoldTheme from "../templates/BoldTheme";
import LightTheme from "../templates/LightTheme";
import GreyTheme from "../templates/GreyTheme";
import DarkTheme from "../templates/DarkTheme";
import ErrorAlert from "../components/ErrorAlert";
import countryList from "react-select-country-list";

const env = import.meta.env.VITE_BASE_API_URL;

function PublishedPortfolioPage() {
  const [portfolio, setPortfolio] = useState();
  const { slug } = useParams();
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const options = useMemo(() => countryList().getData(), []);

  useEffect(() => {
    axios
      .get(`${env}/portfolios/${slug}`)
      .then((response) => {
        const countryObject = options.find(
          (x) => x.value === response.data.country
        );
        setPortfolio({ ...response.data, country: countryObject });
      })
      .catch((error) => {
        setError(true);
        setErrorMessage(error.message);
      });
  }, [slug]);

  const renderTemplate = () => {
    switch (portfolio.template) {
      case Templates.AtomTheme:
        return <AtomTheme data={portfolio} />;
      case Templates.LightTheme:
        return <LightTheme data={portfolio} />;
      case Templates.BoldTheme:
        return <BoldTheme data={portfolio} />;
      case Templates.GreyTheme:
        return <GreyTheme data={portfolio} />;
      case Templates.DarkTheme:
        return <DarkTheme data={portfolio} />;
      default:
        return <div>Template not found</div>;
    }
  };

  if (!portfolio) {
    return "Loading..";
  }
  return (
    <div>
      {renderTemplate()}
      {error && (
        <ErrorAlert message={errorMessage} onClose={() => setError(false)} />
      )}
    </div>
  );
}

export default PublishedPortfolioPage;
