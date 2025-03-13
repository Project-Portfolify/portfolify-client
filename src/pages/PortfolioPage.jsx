import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { Pencil, Eye, Trash2, Phone, Mail, Globe, MapPin } from "lucide-react";
import profileDummy from "../assets/profiledummy.png";

const env = import.meta.env.VITE_BASE_API_URL;

const PortfolioPage = () => {
  const [portfolios, setPortfolios] = useState([]);
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
        console.error("Error al obtener portfolios:", error);
      });
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`${env}/portfolios/${id}`, {
        headers: { Authorization: `Bearer ${getToken()}` },
      });
      setPortfolios((prev) => prev.filter((portfolio) => portfolio._id !== id));
    } catch (error) {
      console.error("Error deleting portfolio:", error);
    }
  };

  return (
    <div className="container mx-auto p-6 text-center">
      <h1 className="text-2xl font-bold mb-8 text-gray-900">Your Portfolios</h1>

      {portfolios.length === 0 ? (
        <p className="text-gray-500 dark:text-gray-400">
          There are no portfolios yet
        </p>
      ) : (
        <div className="flex flex-wrap gap-30 m-auto justify-center">
          {portfolios.map((portfolio) => (
            <div
              key={portfolio._id}
              className="profile-card w-[300px] rounded-md shadow-xl overflow-hidden relative cursor-pointer snap-start shrink-0 bg-white border-1 border-gray-800 flex flex-col items-center justify-center gap-3 transition-all duration-300 group"
            >
              {/* Avatar Section */}
              <div className="avatar w-full pt-5 flex items-center justify-center flex-col gap-1">
                <div className="img_container w-full flex items-center justify-center relative z-40 after:absolute  after:top-4 after:group-hover:[size:1%] after:delay-300 after:group-hover:delay-0 after:group-hover:transition-all after:group-hover:duration-300 after:transition-all after:duration-300 before:absolute  before:bottom-4 before:group-hover:[size:1%] before:delay-300 before:group-hover:delay-0 before:group-hover:transition-all before:group-hover:duration-300 before:transition-all before:duration-300">
                  {portfolio.imageUrl ? (
                    <img
                      src={portfolio.imageUrl || profileDummy}
                      alt={portfolio.name || "Default Avatar"}
                      className="size-36 z-40 border-4 border-gray-800 rounded-full group-hover:border-6 group-hover:transition-all group-hover:duration-300 transition-all duration-300"
                    />
                  ) : (
                    //dummy avatar here
                    <img
                      src={profileDummy}
                      alt="Default Avatar"
                      className="size-36 z-40 border-4 bg-white border-gray-800 rounded-full group-hover:border-6 group-hover:transition-all group-hover:duration-300 transition-all duration-300"
                    />
                  )}
                  <div className="absolute bg-[#58b0e0] z-10 w-full group-hover:transition-all group-hover:duration-300 transition-all duration-300 delay-700 group-hover:delay-0"></div>
                </div>
              </div>

              {/* Headings */}
              <div className="headings text-center leading-4">
                <p className="text-xl font-serif font-semibold text-[#434955]">
                  {portfolio.name}
                </p>
                <p className="text-sm font-semibold text-[#434955]">
                  {portfolio.role || portfolio.title}
                </p>
              </div>

              {/* Contact details */}
              <div className="w-full flex items-center justify-center">
                <ul className="flex flex-col items-start gap-2 pb-3 text-xs font-semibold text-[#434955] border-b border-dotted border-b-stone-700">
                  {portfolio.phone && (
                    <li className="flex items-center gap-2">
                      <Phone className="w-4 h-4 fill-stone-700 group-hover:fill-[#58b0e0]" />
                      <p>{portfolio.phone}</p>
                    </li>
                  )}
                  {portfolio.email && (
                    <li className="flex items-center gap-2">
                      <Mail className="w-4 h-4 fill-stone-700 group-hover:fill-[#58b0e0]" />
                      <p>{portfolio.email}</p>
                    </li>
                  )}
                  {portfolio.website && (
                    <li className="flex items-center gap-2">
                      <Globe className="w-4 h-4 fill-stone-700 group-hover:fill-[#58b0e0]" />
                      <p>{portfolio.website}</p>
                    </li>
                  )}
                  {portfolio.template && (
                    <li className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 fill-stone-700 group-hover:fill-[#58b0e0]" />
                      <p>{portfolio.template}</p>
                    </li>
                  )}
                </ul>
              </div>

              {/* action bottons */}
              <div className="flex justify-between gap-4 p-4 w-full border-t">
                {/* Edit */}
                <Link
                  to={`/portfolio/${portfolio.template}/${portfolio.slug}/edit`}
                  className="text-gray-700 hover:text-gray-600 transition-colors"
                  title="Edit"
                >
                  <Pencil className="w-5 h-5" />
                </Link>

                {/* view */}
                <Link
                  to={`/portfolio/${portfolio.slug}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-900 hover:text-blue-800 transition-colors"
                  title="View"
                >
                  <Eye className="w-5 h-5" />
                </Link>

                {/* Delete */}
                <button
                  onClick={() => handleDelete(portfolio._id)}
                  className="text-red-500 hover:text-red-400 transition-colors"
                  title="Delete"
                >
                  <Trash2 className="w-5 h-5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default PortfolioPage;
