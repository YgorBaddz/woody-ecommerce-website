import { aweicon, footer } from "../data/Data";
import "./../customClasses.css";

const Footer = () => {
  return (
    <div className="bg-white text-black py-8 px-4">
      <div className="flex justify-between">
        <div className="w-1/2">
          <div className="flex justify-around uppercase flex-col lg:flex-row">
            {footer.map((val, idx) => (
              <div key={idx}>
                <div className="text-2xl font-semibold mb-2">{val.header}</div>

                <div className="flex flex-col">
                  {val.title.map((item, key) => (
                    <span
                      key={key}
                      className="mr-2 mb-2 hover:text-teal-400 cursor-pointer"
                    >
                      {item.subtitle}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="w-1/2 p-6 bg-gray-100 rounded-lg shadow-md">
          <h1 className="text-2xl font-semibold mb-4">
            SIGN UP FOR NEWSLETTER
          </h1>

          <p className="text-gray-600 mb-4">
            Don't miss out on exciting promotions and latest shopping news
          </p>

          <input
            type="text"
            name="text"
            placeholder="Your Email Address"
            className="w-full md:w-2/3 p-4 border-gray-300 rounded"
          />

          <button
            type="button"
            className="bg-black text-white pt-4 pb-4 p-6 my-4 rounded hover:bg-teal-400 duration-300"
          >
            SUBSCRIBE
          </button>

          <div className="flex text-center flex-col md:flex-row">
            {aweicon.slice(2, 6).map((val, idx) => (
              <div
                className="bg-white p-2 px-4 mr-2 text-2xl cursor-pointer hover:text-white hover:bg-teal-400 duration-300"
                key={idx}
              >
                {val.icon}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
