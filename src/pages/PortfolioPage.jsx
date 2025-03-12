import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { Pencil, Eye, Trash2 } from "lucide-react";
import AtomTheme from "../templates/AtomTheme";
import LightTheme from "../templates/LightTheme";
import BoldTheme from "../templates/BoldTheme";
import GreyTheme from "../templates/GreyTheme";
import DarkTheme from "../templates/DarkTheme";
import { Templates } from "../constants";
import ErrorAlert from "../components/ErrorAlert";
import { set } from "react-hook-form";

const env = import.meta.env.VITE_BASE_API_URL;

const PortfolioPage = () => {
  const [portfolios, setPortfolios] = useState([]);
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const { getToken } = useContext(AuthContext);

  useEffect(() => {
    axios
      .get(`${env}/portfolios`, {
        headers: { Authorization: `Bearer ${getToken()}` },
      })
      .then((response) => {
        setPortfolios(response.data);
      })
      .catch((error) => {
        setErrorMessage("Error al obtener portfolios:");
        setError(true);
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
        <div className="flex flex-wrap gap-4">
          {portfolios.map((portfolio) => (
            <div
              key={portfolio._id}
              className="w-[240px] h-[360px] border border-gray-300 rounded-xl shadow-md bg-white dark:bg-gray-800 overflow-hidden transition-transform duration-200 hover:scale-105 hover:shadow-xl"
            >
              <div className="flex flex-col justify-between h-full p-3">
                <div>
                  <h2 className="text-md text-white font-semibold truncate">{portfolio.name}</h2>
                  <p className="text-white dark:text-gray-400 text-sm truncate">
                    {portfolio.title}
                  </p>
                </div>


                <div className="flex justify-between gap-1 mt-4">
                  <Link
                    to={`/portfolio/${portfolio.template}/${portfolio.slug}/edit`}
                    className="text-xs bg-blue-800 hover:bg-blue-700 text-white px-2 py-1 rounded"
                  >
                    <Pencil className="w-4 h-4" />
                  </Link>
                  <Link
                    to={`/portfolio/${portfolio.slug}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs bg-green-800 hover:bg-green-700 text-white px-2 py-1 rounded"
                  >
                    <Eye className="w-4 h-4" />
                  </Link>
                  <button
                    onClick={() => {
                      axios
                        .delete(`${env}/portfolios/${portfolio._id}`, {
                          headers: { Authorization: `Bearer ${getToken()}` },
                        })
                        .then(() => {
                          setPortfolios(portfolios.filter((p) => p._id !== portfolio._id));
                        })
                        .catch((error) => console.error("Error deleting portfolio:", error));
                    }}
                    className="text-xs bg-red-800 hover:bg-red-700 text-white px-2 py-1 rounded"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
            <div className="mt-4">{renderTemplate(portfolio)}</div>
            {error && (
              <ErrorAlert
                message={errorMessage}
                onClose={() => setError(false)}
              />
            )}
          </div>
        ))
      )}
    </div>
  );
};

export default PortfolioPage;
