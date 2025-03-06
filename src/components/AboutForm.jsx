import { Asterisk } from "lucide-react";

const AboutForm = () => {
  return (
    <form>
      <div className="flex flex-col">
        <div className="flex flex-col">
          <div className="flex flex-row gap-x-6 mb-6">
            <div className="w-full relative">
              <label className="flex items-center mb-2 text-gray-600 text-sm font-medium">
                Role
              </label>
              <input
                type="text"
                className="block w-full px-5 py-2.5 bg-white leading-7 text-base font-normal shadow-xs text-gray-900 border border-gray-300 rounded-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
            <div className="w-full relative">
              <label className="flex items-center mb-2 text-gray-600 text-sm font-medium">
                Company
              </label>
              <input
                type="text"
                name="company"
                className="block w-full px-5 py-2.5 bg-white leading-7 text-base font-normal shadow-xs text-gray-900 border border-gray-300 rounded-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
          </div>
          <div className="flex flex-row gap-x-6 mb-6">
            <div className="w-full relative">
              <label className="flex items-center mb-2 text-gray-600 text-sm font-medium">
                Describe your role
              </label>
              <textarea
                type="text"
                rows="4"
                name="description"
                className="block w-full px-5 py-2.5 bg-white leading-7 text-base font-normal shadow-xs text-gray-900 border border-gray-300 rounded-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
            <div className="w-full relative">
              <label className="flex items-center mb-2 text-gray-600 text-sm font-medium">
                Duration
              </label>
              <div className="flex space-x-4">
                <input
                  type="number"
                  name="yearFrom"
                  placeholder="From"
                  min="1900"
                  max="2100"
                  className="block w-full px-5 py-2.5 bg-white leading-7 text-base font-normal shadow-xs text-gray-900 border border-gray-300 rounded-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
                <span className="flex items-center text-gray-600">-</span>
                <input
                  type="number"
                  name="yearTo"
                  placeholder="To"
                  min="1900"
                  max="2100"
                  className="block w-full px-5 py-2.5 bg-white leading-7 text-base font-normal shadow-xs text-gray-900 border border-gray-300 rounded-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>
            </div>
          </div>

          <div className="flex justify-between w-full mt-6">
            <button
              className="w-52 h-12 shadow-sm rounded-full bg-indigo-600 hover:bg-indigo-800 transition-all duration-700 text-white text-base font-semibold leading-7"
              onClick={onClickPrev}
            >
              Previous step
            </button>
            <button
              className="w-52 h-12 shadow-sm rounded-full bg-indigo-600 hover:bg-indigo-800 transition-all duration-700 text-white text-base font-semibold leading-7"
              type="submit"
            >
              Next step
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};
export default AboutForm;
