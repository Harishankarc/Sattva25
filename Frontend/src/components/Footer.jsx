import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row justify-between md:items-center gap-10 md:gap-0">
          <div>
            <h3 className="text-2xl font-bold mb-4">SATTVA 2025</h3>
            <p className="text-gray-400">
              Join us for the biggest college arts and sports festival of the year.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white">
                <FaFacebook size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <FaTwitter size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <FaInstagram size={24} />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2025 SATTVA. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;