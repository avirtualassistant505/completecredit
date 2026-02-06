import { Link, useLocation } from 'react-router-dom';
import { DollarSign, Mail, ReceiptText, TrendingUp } from 'lucide-react';
import { Logo } from './Logo';

export function Navigation() {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="flex items-center space-x-4 group">
            <Logo className="w-14 h-14 group-hover:scale-105 transition-transform" />
            <div>
              <span className="text-2xl font-bold text-black block leading-tight tracking-tight">
                Complete Credit Treatment
              </span>
            </div>
          </Link>

          <div className="hidden md:flex items-center space-x-2">
            <Link
              to="/"
              className={`px-5 py-2.5 text-sm font-semibold rounded-lg transition-all ${
                isActive('/')
                  ? 'text-white bg-black'
                  : 'text-gray-700 hover:text-black hover:bg-gray-100'
              }`}
            >
              Home
            </Link>
            <Link
              to="/credit-repair"
              className={`px-5 py-2.5 text-sm font-semibold rounded-lg transition-all flex items-center gap-2 ${
                isActive('/credit-repair')
                  ? 'text-white bg-black'
                  : 'text-gray-700 hover:text-black hover:bg-gray-100'
              }`}
            >
              <TrendingUp className="w-5 h-5" strokeWidth={2.5} />
              Credit Repair
            </Link>
            <Link
              to="/funding"
              className={`px-5 py-2.5 text-sm font-semibold rounded-lg transition-all flex items-center gap-2 ${
                isActive('/funding')
                  ? 'text-white bg-black'
                  : 'text-gray-700 hover:text-black hover:bg-gray-100'
              }`}
            >
              <DollarSign className="w-5 h-5" strokeWidth={2.5} />
              Funding
            </Link>

            <a
              href="https://link.fastpaydirect.com/payment-link/697105da223b983c44328f67"
              target="_blank"
              rel="noreferrer"
              className="px-5 py-2.5 text-sm font-semibold rounded-lg transition-all flex items-center gap-2 text-gray-700 hover:text-black hover:bg-gray-100"
            >
              <ReceiptText className="w-5 h-5" strokeWidth={2.5} />
              Pay Invoice
            </a>
          </div>

          <Link
            to="/contact"
            className="hidden md:flex items-center gap-2 px-8 py-3.5 bg-black text-white rounded-xl font-bold hover:bg-gray-900 transition-all shadow-lg hover:shadow-xl"
          >
            <Mail className="w-6 h-6" strokeWidth={2.5} />
            Contact Us
          </Link>
        </div>
      </div>
    </nav>
  );
}
