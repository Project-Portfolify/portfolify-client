import AtomTheme from "../templates/AtomTheme";
import LightTheme from "../templates/LightTheme";
import BoldTheme from "../templates/BoldTheme";
import GreyTheme from "../templates/GreyTheme";
import DarkTheme from "../templates/DarkTheme";
import { Templates } from "../constants";
import axios from "axios";
import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import slugify from "slugify";
import LogInModal from "../components/LogInModal";
import { useNavigate, useParams } from "react-router-dom";
import ErrorAlert from "./ErrorAlert";
const env = import.meta.env.VITE_BASE_API_URL;

const TemplateSwitch = ({ templateId, data, onClickPrev, isEdit }) => {
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const { slug } = useParams();
  const themes = {
    [Templates.AtomTheme]: <AtomTheme data={data} />,
    [Templates.LightTheme]: <LightTheme data={data} />,
    [Templates.BoldTheme]: <BoldTheme data={data} />,
    [Templates.GreyTheme]: <GreyTheme data={data} />,
    [Templates.DarkTheme]: <DarkTheme data={data} />,
  };
  const { getToken, isAuthenticated } = useContext(AuthContext);
  const [portfolio, setPortfolio] = useState(null);
  const navigate = useNavigate();
  const currentTheme = themes[templateId] || <h1>Template not found</h1>;

  const generateSlug = (name) => {
    if (!name || typeof name !== "string") {
      return slugify("default-name", {
        lower: true,
        strict: true,
        trim: true,
      });
    }
    return slugify(name, {
      lower: true,
      strict: true,
      trim: true,
    });
  };

  const generateUniqueSlug = (name) => {
    const baseSlug = generateSlug(name || "default-name");
    const randomId = Math.random().toString(36).substring(2, 6);
    // Use a fallback for templateId if it's undefined.
    return `${baseSlug}-${randomId}-${templateId || "defaultTemplate"}`;
  };

  const portfolioData = {
    slug: generateUniqueSlug(data.name),
    ...data,
  };

  const handleSubmit = () => {
    if (!isEdit) {
      axios
        .post(`${env}/portfolios`, portfolioData, {
          headers: { Authorization: `Bearer ${getToken()}` },
        })
        .then((response) => {
          // alert("Portfolio Published Successfully! 🎉");
          <div
            class="p-4 mb-4 text-sm text-green-800 rounded-lg bg-green-50 dark:bg-gray-800 dark:text-green-400"
            role="alert"
          >
            <span class="font-medium">Publish successful!</span>
          </div>;
          setPortfolio(response.data);
          window.open(
            `/portfolio/${portfolioData.slug}`,
            "_blank",
            "noopener,noreferrer"
          );

          navigate("/portfolios");
        })
        .catch((error) => {
          setErrorMessage("Failed to publish portfolio. ❌");
          setError(true);
        });
    } else {
      axios
        .put(`${env}/portfolios/${slug}`, portfolioData, {
          headers: { Authorization: `Bearer ${getToken()}` },
        })
        .then((response) => {
          <div
            class="p-4 mb-4 text-sm text-green-800 rounded-lg bg-green-50 dark:bg-gray-800 dark:text-green-400"
            role="alert"
          >
            <span class="font-medium">Edit successful!</span>
          </div>;
          setPortfolio(response.data);
          window.open(
            `/portfolio/${portfolioData.slug}`,
            "_blank",
            "noopener,noreferrer"
          );
          navigate("/portfolios");
          isEdit = false;
        })
        .catch((err) => {
          setErrorMessage("Failed to edit portfolio. ❌");
          setError(true);
        });
    }
  };

  return (
    <div>
      <div className="flex flex-col md:flex-row justify-between items-center mb-20 w-full">
        {/* Left-aligned Previous Step button */}
        <div className="flex-1 mb-4 md:mb-0">
          <button
            className="w-35 h-10 shadow-sm rounded-full bg-blue-950 hover:bg-blue-800 hover:cursor-pointer transition-all duration-700 text-white text-base font-semibold leading-7"
            onClick={onClickPrev}
          >
            Previous step
          </button>
        </div>

        {/* Right-aligned: Either Publish button or Login Modal */}
        <div className=" flex justify-end">
          {isAuthenticated ? (
            <button
              onClick={handleSubmit}
              className="w-35 h-10 shadow-sm rounded-full bg-blue-950 hover:bg-blue-800 hover:cursor-pointer transition-all duration-700 text-white text-base font-semibold leading-7"
            >
              Publish
            </button>
          ) : (
            <LogInModal />
          )}
        </div>
      </div>

      {currentTheme}
      {error && (
        <ErrorAlert message={errorMessage} onClose={() => setError(false)} />
      )}
    </div>
  );
};

export default TemplateSwitch;
