import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { Pencil, Eye, Trash2, Mail, MapPin } from "lucide-react";
import DeleteAlertBox from "../components/DeleteAlertBox";
import profileDummy from "../assets/profiledummy.png";

const env = import.meta.env.VITE_BASE_API_URL;

const PortfolioPage = () => {
  const [portfolios, setPortfolios] = useState([]);
  const [deleteId, setDeleteId] = useState();
  const { getToken } = useContext(AuthContext);

  const getPortfolios = async () => {
    try {
      const response = await axios.get(`${env}/portfolios`, {
        headers: { Authorization: `Bearer ${getToken()}` },
      });

      setPortfolios(response.data);
    } catch (error) {
      console.error("Error al obtener portfolios:", error);
    }
  };

  useEffect(() => {
    getPortfolios();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`${env}/portfolios/${id}`, {
        headers: { Authorization: `Bearer ${getToken()}` },
      });
      await getPortfolios();
      setDeleteId(undefined);
    } catch (error) {
      console.error("Error deleting portfolio:", error);
    }
  };

  return (
    <div className="container mx-auto p-6 text-center">
      <h1 className="text-2xl font-bold mb-8 text-gray-900">My Portfolios</h1>

      {portfolios.length === 0 ? (
        <p className="text-gray-500 dark:text-gray-400">
          There are no portfolios yet
        </p>
      ) : (
        <div className="flex flex-wrap gap-30 m-auto justify-center">
          {portfolios.map((portfolio) => (
            <div
              key={portfolio._id}
              className="profile-card w-[300px] rounded-xl shadow-xl overflow-hidden relative cursor-pointer snap-start shrink-0 bg-white border-1 border-white hover:scale-105 flex flex-col items-center justify-center gap-3 transition-all duration-300 p-6 group"
            >
              {/* Avatar Section */}
              <div className="avatar w-full pt-5 flex items-center justify-center flex-col gap-1">
                <div className="img_container w-full flex items-center justify-center relative z-40 after:absolute  after:top-4 after:group-hover:[size:1%] after:delay-300 after:group-hover:delay-0 after:group-hover:transition-all after:group-hover:duration-300 after:transition-all after:duration-300 before:absolute  before:bottom-4 before:group-hover:[size:1%] before:delay-300 before:group-hover:delay-0 before:group-hover:transition-all before:group-hover:duration-300 before:transition-all before:duration-300">
                  {portfolio.imageUrl ? (
                    <img
                      src={portfolio.imageUrl || profileDummy}
                      alt={portfolio.name || "Default Avatar"}
                      className="size-36 z-40 border-2 group-hover:border-[#58b0e0] rounded-full group-hover:border-3 group-hover:transition-all group-hover:duration-300 transition-all duration-300"
                    />
                  ) : (
                    //dummy avatar here
                    <img
                      src={profileDummy}
                      alt="Default Avatar"
                      className="size-36 z-40 border-2 bg-white group-hover:border-[#58b0e0] rounded-full group-hover:border-3 group-hover:transition-all group-hover:duration-300 transition-all duration-300"
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
                <ul className="flex flex-col items-start gap-2 pb-3 text-xs font-semibold text-[#434955] rounded-lg shadow-sm p-4">
                  {portfolio.email && (
                    <li className="flex items-center gap-2">
                      <Mail className="w-4 h-4 fill-white group-hover:fill-[#58b0e0]" />
                      <p>{portfolio.email}</p>
                    </li>
                  )}

                  {portfolio.template && (
                    <li className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 fill-white group-hover:fill-[#58b0e0]" />
                      <p>{portfolio.slug}</p>
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
                  onClick={() => {
                    return setDeleteId(portfolio._id);
                  }}
                  className="text-red-500 hover:text-red-400 transition-colors hover:cursor-pointer"
                  title="Delete"
                >
                  <Trash2 className="w-5 h-5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
      {deleteId && (
        <DeleteAlertBox
          message="Are you sure you want to delete this portfolio?"
          onDelete={() => handleDelete(deleteId)}
          onCancel={() => setDeleteId(undefined)}
        />
      )}
    </div>
  );
};

export default PortfolioPage;
