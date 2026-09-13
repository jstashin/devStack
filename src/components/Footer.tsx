import Logo from "../../assets/logo-text.png";

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-100 container mx-auto px-10">
      <div className="container mx-auto px-5 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <img
              src={Logo}
              alt=""
              className="w-36"
            />

            <p className="text-gray-500 text-sm mt-4 leading-6">
              Curated tools, technologies, and resources for developers <br/>building modern software.
            </p>

            <div className="flex gap-5 mt-5 text-sm">
              <a href="#">GitHub</a>
              <a href="#">Twitter</a>
              <a href="#">LinkedIn</a>
            </div>
          </div>

          
          <div>
            <h3 className="font-bold text-sm mb-5">
              PRODUCT
            </h3>

            <div className="flex flex-col gap-3 text-gray-500 text-sm">
              <a href="#">Home</a>
              <a href="#">Technologies</a>
              <a href="#">Projects</a>
            </div>
          </div>
          <div>
            <h3 className="font-bold text-sm mb-5">
              COMPANY
            </h3>

            <div className="flex flex-col gap-3 text-gray-500 text-sm">
              <a href="#">About</a>
              <a href="#">Contact</a>
              <a href="#">Careers</a>
            </div>
          </div>
          <div>
            <h3 className="font-bold text-sm mb-5">
              LEGAL
            </h3>

            <div className="flex flex-col gap-3 text-gray-500 text-sm">
              <a href="#">Privacy Policy</a>
              <a href="#">Terms of Service</a>
            </div>
          </div>

        </div>

        <div className="border-t border-gray-200 mt-12 pt-8 flex flex-col md:flex-row justify-between gap-4 text-gray-400 text-sm">

          <p>
            &copy; 2026 Dev Stack. All rights reserved.
          </p>

          <div className="flex gap-6">
            <a href="#">Privacy</a>
            <a href="#">Terms</a>
          </div>

        </div>

      </div>
    </footer>
  );
};

export default Footer;