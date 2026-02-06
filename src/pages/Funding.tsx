import { Card } from '../components/Card';
import { LeadConnectorSurveyEmbed } from '../components/LeadConnectorSurveyEmbed';
import { HeroSection } from '../components/HeroSection';
import { HeroWave } from '../components/HeroWave';
import { DollarSign, Clock, Shield } from 'lucide-react';

export function Funding() {
  return (
    <div className="min-h-screen bg-[#F8F9FA]">
      <HeroSection className="py-20">

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 bg-blue-500 bg-opacity-20 px-4 py-2 rounded-full mb-6">
              <DollarSign className="w-4 h-4 text-blue-400" />
              <span className="text-sm font-semibold text-blue-400">Credit Funding</span>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Access Capital
              <span className="block text-blue-400">For Your Business</span>
            </h1>

            <p className="text-xl text-gray-300 mb-8 leading-relaxed max-w-3xl mx-auto">
              Quick eligibility check for funding opportunities from $10K to $500K+
            </p>

            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <Clock className="w-10 h-10 text-blue-400 mx-auto mb-3" />
                <div className="text-2xl font-bold mb-1">5 Min</div>
                <div className="text-sm text-gray-300">Quick Application</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <DollarSign className="w-10 h-10 text-[#28C76F] mx-auto mb-3" />
                <div className="text-2xl font-bold mb-1">$10K-$500K+</div>
                <div className="text-sm text-gray-300">Funding Range</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <Shield className="w-10 h-10 text-purple-400 mx-auto mb-3" />
                <div className="text-2xl font-bold mb-1">No Fees</div>
                <div className="text-sm text-gray-300">Free Assessment</div>
              </div>
            </div>
          </div>
        </div>

        <HeroWave fill="#F8F9FA" />
      </HeroSection>

      <section className="py-12 -mt-16 relative z-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="border-2 border-gray-200 shadow-2xl" padding="lg">
            <div className="mb-6">
              <h2 className="text-2xl md:text-3xl font-bold text-[#0E2A47]">Funding Eligibility Form</h2>
              <p className="text-sm text-gray-600 mt-2">
                Complete the quick survey below to check eligibility and funding options.
              </p>
            </div>

            <div className="rounded-xl overflow-hidden border border-gray-200 bg-white">
              <LeadConnectorSurveyEmbed
                id="U5r0igup1ADo4hZavpPJ"
                src="https://api.leadconnectorhq.com/widget/survey/U5r0igup1ADo4hZavpPJ"
                title="survey"
              />
            </div>

            <div className="bg-yellow-50 border-2 border-yellow-200 rounded-xl p-4 mt-6">
              <p className="text-sm text-gray-700 flex items-start gap-2">
                <Shield className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                <span>
                  <strong>Important:</strong> Submitting this form does not guarantee funding approval. All applications are subject to review and approval by third-party lenders.
                </span>
              </p>
            </div>
          </Card>

          <p className="text-xs text-gray-500 text-center mt-6 flex items-center justify-center gap-2">
            <Shield className="w-4 h-4" />
            Your information is encrypted and secure
          </p>
        </div>
      </section>
    </div>
  );
}
