export default function Footer() {
  return (
    <footer className="bg-black text-white py-10 px-4 md:px-0">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-start space-y-8 md:space-y-0">
        {/* Logo dan Deskripsi */}
        <div className="md:w-1/4">
          <img
            src="./../image 75.svg"
            alt="Sagara Tech"
            className="mb-4"
          />
          <h3 className="font-bold text-lg mb-4">SAGARA TECH</h3>
          <p className="leading-relaxed mb-4">
            Plan, build, grow digital products. Continuously delivering impact.
          </p>
          <div className="flex space-x-4">
            <a href="#" className="text-white text-2xl">
              <i className="bx bxl-facebook"></i>
            </a>
            <a href="#" className="text-white text-2xl">
              <i className="bx bxl-twitter"></i>
            </a>
            <a href="#" className="text-white text-2xl">
              <i className="bx bxl-linkedin"></i>
            </a>
            <a href="#" className="text-white text-2xl">
              <i className="bx bxl-instagram"></i>
            </a>
          </div>
        </div>

        {/* Pages */}
        <div className="md:w-1/4">
          <h4 className="font-bold text-lg mb-4">Pages</h4>
          <ul className="space-y-2">
            <li>
              <a href="#" className="text-white hover:text-gray-400">
                IT Certification
              </a>
            </li>
            <li>
              <a href="#" className="text-white hover:text-gray-400">
                Careers
              </a>
            </li>
            <li>
              <a href="#" className="text-white hover:text-gray-400">
                FAQ
              </a>
            </li>
            <li>
              <a href="#" className="text-white hover:text-gray-400">
                Terms & Condition
              </a>
            </li>
          </ul>
        </div>

        {/* Careers */}
        <div className="md:w-1/4">
          <h4 className="font-bold text-lg mb-4">Careers</h4>
          <ul className="space-y-2">
            <li>
              <a href="#" className="text-white hover:text-gray-400">
                Front End Developer
              </a>
            </li>
            <li>
              <a href="#" className="text-white hover:text-gray-400">
                Back End Developer
              </a>
            </li>
            <li>
              <a href="#" className="text-white hover:text-gray-400">
                Quality Assurance
              </a>
            </li>
            <li>
              <a href="#" className="text-white hover:text-gray-400">
                UI/UX Design
              </a>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div className="md:w-1/4">
          <h4 className="font-bold text-lg mb-4">Contact</h4>
          <ul className="space-y-2">
            <li>
              <i className="bx bx-phone text-xl mr-2"></i> +62 856-4087-7358
            </li>
            <li>
              <i className="bx bx-envelope text-xl mr-2"></i>{" "}
              consult@sagara.asia
            </li>
            <li>
              <i className="bx bx-map text-xl mr-2"></i> South Jakarta and
              Bandung, Indonesia.
            </li>
          </ul>
        </div>
      </div>
      <div className="text-center text-gray-500 mt-8">
        Copyright © 2024 PT. Sagara Asia Teknologi
      </div>
    </footer>
  );
};