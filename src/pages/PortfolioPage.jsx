import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

import AtomTheme from "../templates/AtomTheme";
import LightTheme from "../templates/LightTheme";
import BoldTheme from "../templates/BoldTheme";
import GreyTheme from "../templates/GreyTheme";
import DarkTheme from "../templates/DarkTheme";
import { Templates } from "../constants";

const PortfolioPage = () => {
  const [portfolios, setPortfolios] = useState([]);
  const { getToken } = useContext(AuthContext);

  useEffect(() => {
    axios
      .get(`${env}/portfolios`, {
        headers: { Authorization: `Bearer ${getToken()}` },
      })
      .then((response) => {
        console.log(response.data);
        setPortfolios(response.data);
      })
      .catch((error) => {
        console.error("Error al obtener portfolios:", error);
      });
  }, []);

  const renderTemplate = (portfolio) => {
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

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Portfolios Published</h1>
      {portfolios.length === 0 ? (
        <p>There are no portfolios yet</p>
      ) : (
        portfolios.map((portfolio) => (
          <div
            key={portfolio._id}
            className="border p-4 rounded-lg shadow-lg mb-6"
          >
            <h2 className="text-xl font-semibold">{portfolio.name}</h2>
            <p className="text-gray-600">{portfolio.title}</p>
            <div className="mt-4">{renderTemplate(portfolio)}</div>
            <Link
              to={`/portfolio/${portfolio.slug}`}
              className="mt-4 inline-block bg-blue-500 text-white px-4 py-2 rounded-lg"
            >
              Portfolio
            </Link>
          </div>
        ))
      )}
    </div>
  );
};

export default PortfolioPage;
