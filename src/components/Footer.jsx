import { NavLink } from "react-router-dom";
import logo from "../assets/logo.svg";
import { assets } from "../assets/assets/data";

const Footer = () => {
  return (
    <footer className="pt-16 xl:pt-20 w-full text-gray-500 bg-primary">
      <div className="max-padd-container ">
        <div className="flex flex-wrap justify-between gap-12 md:gap-6">
          <div className="max-w-80">
            <NavLink to="/" className="font-bold flex items-end gap-2">
              <img src={logo} alt="Deep Curtains Logo" className="h-16" />
              <span className="text-gray-800 mb-2 ">curtains</span>
            </NavLink>
            <p className="text-sm mt-4">
              Discover stylish sofas, dining tables, tea tables, curtains, and
              more – designed to bring comfort, elegance, and warmth into every
              corner of your home.
            </p>
            <div className="flex items-center gap-3 mt-4 cursor-pointer">
              <img src={assets.facebook} alt="" srcset="" />
                <img src={assets.twitter} alt="" srcset="" />
                <img src={assets.instagram} alt="" srcset="" />
                <img src={assets.linkedin} alt="" srcset="" />
            </div>
          </div>

          <div>
            <p className="text-lg text-gray-800">COMPANY</p>
            <ul className="mt-3 flex flex-col gap-2 text-sm">
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Careers</a>
              </li>
              <li>
                <a href="#">Press</a>
              </li>
              <li>
                <a href="#">Blog</a>
              </li>
              <li>
                <a href="#">Partners</a>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-lg text-gray-800">SUPPORT</p>
            <ul className="mt-3 flex flex-col gap-2 text-sm">
              <li>
                <a href="#">Help Center</a>
              </li>
              <li>
                <a href="#">Safety Information</a>
              </li>
              <li>
                <a href="#">Cancellation Options</a>
              </li>
              <li>
                <a href="#">Contact Us</a>
              </li>
              <li>
                <a href="#">Accessibility</a>
              </li>
            </ul>
          </div>

          <div className="max-w-80">
            <p className="text-lg text-gray-800">STAY UPDATED</p>
            <p className="mt-3 text-sm">
              Subscribe to our newsletter for inspiration and special offers.
            </p>
            <div className="flex items-center mt-4">
              <input
                type="text"
                className="bg-white rounded border border-gray-300 h-9 px-3 outline-none"
                placeholder="Your email"
              />
              <button className="flex items-center justify-center bg-black h-9 w-9 aspect-square rounded-r">
                {/* Arrow icon */}
                <svg
                  className="w-4 h-4 text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 12H5m14 0-4 4m4-4-4-4"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
        <hr className="border-gray-300 mt-8" />
        <div className="flex flex-col md:flex-row gap-2 items-center justify-between py-5">
          <p>
            © {new Date().getFullYear()}{" "}
            <a href="https://prebuiltui.com">PrebuiltUI</a>. All rights
            reserved.
          </p>
          <ul className="flex items-center gap-4">
            <li>
              <a href="#">Privacy</a>
            </li>
            <li>
              <a href="#">Terms</a>
            </li>
            <li>
              <a href="#">Sitemap</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
