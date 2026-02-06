import { Link } from 'react-router-dom';
import { Logo } from './Logo';

export function Footer() {
  return (
    <footer className="bg-black text-white mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-4 mb-6">
              <Logo className="w-12 h-12" />
              <div>
                <span className="text-xl font-black block leading-tight">Complete Credit Treatment</span>
              </div>
            </div>
            <p className="text-gray-400 leading-relaxed font-medium">
              We evaluate your credit, build a strategy, and help position you for serious funding.
            </p>
          </div>

          <div>
            <h3 className="font-black mb-4 text-lg">Services</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/credit-repair" className="text-gray-400 hover:text-white transition-colors font-medium">
                  Credit Repair
                </Link>
              </li>
              <li>
                <Link to="/funding" className="text-gray-400 hover:text-white transition-colors font-medium">
                  Funding Eligibility
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-black mb-4 text-lg">Company</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-gray-400 hover:text-white transition-colors font-medium">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-white transition-colors font-medium">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <p className="text-sm text-gray-400 leading-relaxed mb-6 font-medium">
            <strong className="text-white">Important Disclaimer:</strong> Complete Credit Treatment is not a lender and does not provide loans or financing.
            Credit repair results vary by individual circumstances and are not guaranteed. Funding eligibility is subject to review and approval
            by third-party lenders. Past performance does not guarantee future results. All services provided are for informational and
            strategic purposes only.
          </p>
          <p className="text-xs text-gray-500 font-medium">
            &copy; {new Date().getFullYear()} Complete Credit Treatment. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
