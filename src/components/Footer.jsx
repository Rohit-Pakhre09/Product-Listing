const Footer = () => {
  return (
    <footer className="bg-gray-200 py-10 mt-10">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Brand Section */}
        <div>
          <h2 className="text-3xl font-bold">Urban Cart</h2>
          <p className="mt-4 text-sm">
            Your one-stop shop for fashion, lifestyle, and everyday essentials.
            Fast delivery and top deals, always.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <a href="/" className="hover:text-blue-400">
                Home
              </a>
            </li>
            <li>
              <a href="/about" className="hover:text-blue-400">
                About
              </a>
            </li>
            <li>
              <a href="/service" className="hover:text-blue-400">
                Services
              </a>
            </li>
            <li>
              <a href="/login" className="hover:text-blue-400">
                Login
              </a>
            </li>
          </ul>
        </div>

        {/* Customer Support */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Customer Support</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:text-blue-400">
                Help Center
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-400">
                Shipping Info
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-400">
                Returns
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-400">
                Contact Us
              </a>
            </li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Subscribe</h3>
          <p className="text-sm mb-3">
            Join our newsletter to get exclusive deals and updates.
          </p>
          <form className="flex">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full p-2 rounded-l border border-gray-600 focus:outline-none"
            />
            <button
              type="submit"
              className="px-4 bg-blue-500 rounded-r hover:bg-blue-600 transition cursor-pointer"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-8 border-t border-gray-700 pt-10 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Urban Cart. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
