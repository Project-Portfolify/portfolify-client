import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

import AtomTheme from "../templates/AtomTheme";
import LightTheme from "../templates/LightTheme";
import BoldTheme from "../templates/BoldTheme";
import GreyTheme from "../templates/GreyTheme";
import DarkTheme from "../templates/DarkTheme";
import { Templates } from "../constants";

const PortfolioPage = () => {
    const { slug } = useParams();
    // Use an object for a single portfolio
    const [portfolio, setPortfolio] = useState(null);
    const env = import.meta.env.VITE_BASE_API_URL;

    useEffect(() => {
        axios
            .get(`${env}/portfolios/${slug}`)
            .then((response) => {
                console.log(response.data);
                setPortfolio(response.data);
            })
            .catch((error) => {
                console.error("Error:", error);
            });
    }, [slug, env]);

    // Function to render the correct template based on the portfolio.template value
    const renderTemplate = (portfolio) => {
        if (!portfolio) return <p>Loading...</p>;
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
                return <p>Template not found</p>;
        }
    };

    // While loading, display a loading message
    if (!portfolio) {
        return (
            <div className="container mx-auto p-4">
                <h1 className="text-3xl font-bold mb-6">Loading Portfolio...</h1>
            </div>
        );
    }

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-3xl font-bold mb-6">Portfolio Published</h1>
            <div className="border p-4 rounded-lg shadow-lg mb-6">
                <h2 className="text-xl font-semibold">{portfolio.name}</h2>
                <p className="text-gray-600">{portfolio.title}</p>
                <div className="mt-4">{renderTemplate(portfolio)}</div>
                <Link
                    to={`/portfolios/${portfolio.slug}`}
                    className="mt-4 inline-block bg-blue-500 text-white px-4 py-2 rounded-lg"
                >
                    View Portfolio
                </Link>
            </div>
        </div>
    );
};

export default PortfolioPage;
