import axios from "axios";
import { useEffect, useState } from "react";
import { Templates } from "../constants";
import { useParams } from "react-router-dom";
import AtomTheme from "../templates/AtomTheme";
import BoldTheme from "../templates/BoldTheme";
import LightTheme from "../templates/LightTheme";
import GreyTheme from "../templates/GreyTheme";
import DarkTheme from "../templates/GreyTheme";

const env = import.meta.env.VITE_BASE_API_URL;

function PublishedPortfolioPage() {
  const [portfolio, setPortfolio] = useState();
  const { slug } = useParams();

  useEffect(() => {
    axios
      .get(`${env}/portfolios/${slug}`)
      .then((response) => {
        console.log(response.data);
        setPortfolio(response.data);
      })
      .catch((error) => {
        console.error("Error to fetch portfolios:", error);
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
  return <div>{renderTemplate()}</div>;
}

export default PublishedPortfolioPage;
