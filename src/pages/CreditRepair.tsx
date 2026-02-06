import { useRef } from 'react';
import { Button } from '../components/Button';
import { Card } from '../components/Card';
import { HeroSection } from '../components/HeroSection';
import { LeadConnectorSurveyEmbed } from '../components/LeadConnectorSurveyEmbed';
import { HeroWave } from '../components/HeroWave';
import { CheckCircle, Search, FileText, Target, TrendingUp, Shield, Zap, Award, Star, Clock, BarChart3 } from 'lucide-react';

export function CreditRepair() {
  const formRef = useRef<HTMLDivElement | null>(null);

  const scrollToForm = () => {
    formRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const timeline = [
    {
      phase: 'Days 1-15',
      title: 'Comprehensive Evaluation',
      description: 'Deep analysis of your credit reports from all three bureaus. Identify negative items, inaccuracies, and strategic opportunities for maximum impact.',
      icon: Search,
      color: 'from-[#28C76F] to-green-600',
      bgColor: 'bg-[#28C76F]/10'
    },
    {
      phase: 'Days 16-30',
      title: 'Dispute Strategy Development',
      description: 'Custom plan creation based on your unique profile. Prioritize high-impact items and develop tactical approach for maximum results.',
      icon: FileText,
      color: 'from-blue-500 to-blue-600',
      bgColor: 'bg-blue-500/10'
    },
    {
      phase: 'Days 31-75',
      title: 'Execution & Monitoring',
      description: 'Systematic dispute filing with bureaus and creditors. Regular tracking of responses and strategic follow-up on all outstanding items.',
      icon: Target,
      color: 'from-purple-500 to-purple-600',
      bgColor: 'bg-purple-500/10'
    },
    {
      phase: 'Days 76-90',
      title: 'Optimization & Readiness',
      description: 'Final score improvements and documentation. Position your profile for optimal funding eligibility and capital access.',
      icon: TrendingUp,
      color: 'from-orange-500 to-orange-600',
      bgColor: 'bg-orange-500/10'
    }
  ];

  const benefits = [
    {
      icon: BarChart3,
      title: '+150 Point Average',
      description: 'Proven track record of significant score improvements',
      color: 'from-[#28C76F] to-green-600'
    },
    {
      icon: Clock,
      title: '90-Day Timeline',
      description: 'Structured program with clear milestones',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: Shield,
      title: 'Guaranteed Quality',
      description: 'Billed only after initial work is delivered',
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: Award,
      title: '5,000+ Success Stories',
      description: 'Join thousands of satisfied clients',
      color: 'from-orange-500 to-orange-600'
    }
  ];

  return (
    <div className="min-h-screen bg-[#F8F9FA]">
      <HeroSection className="py-20">

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-[#28C76F] bg-opacity-20 px-4 py-2 rounded-full mb-6">
                <TrendingUp className="w-4 h-4 text-[#28C76F]" />
                <span className="text-sm font-semibold text-[#28C76F]">Credit Repair Program</span>
              </div>

              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                Transform Your
                <span className="block text-[#28C76F]">Credit Profile</span>
              </h1>

              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Strategic 90-day program to remove negatives, boost your score, and unlock funding opportunities.
              </p>

              <div className="flex items-center gap-8 mb-8">
                <div>
                  <div className="text-4xl font-bold mb-1">$500</div>
                  <div className="text-sm text-gray-300">Flat Fee</div>
                </div>
                <div className="h-12 w-px bg-gray-600"></div>
                <div>
                  <div className="text-4xl font-bold mb-1">90</div>
                  <div className="text-sm text-gray-300">Days</div>
                </div>
                <div className="h-12 w-px bg-gray-600"></div>
                <div>
                  <div className="text-4xl font-bold mb-1">+150</div>
                  <div className="text-sm text-gray-300">Avg Points</div>
                </div>
              </div>

              <Button size="lg" onClick={scrollToForm} className="bg-[#28C76F] hover:bg-[#22a75f] shadow-lg shadow-[#28C76F]/30">
                <Zap className="mr-2 w-5 h-5" />
                Start Your Transformation
              </Button>
            </div>

            <div className="relative hidden lg:block">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-[#28C76F] to-green-600 rounded-3xl blur-xl opacity-30"></div>
                <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
                  <div className="space-y-4">
                    <div className="flex items-center gap-4 p-4 bg-white/10 rounded-xl backdrop-blur-sm">
                      <CheckCircle className="w-8 h-8 text-[#28C76F]" />
                      <div>
                        <div className="font-semibold">Tri-Bureau Analysis</div>
                        <div className="text-sm text-gray-300">All three credit bureaus</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 p-4 bg-white/10 rounded-xl backdrop-blur-sm">
                      <CheckCircle className="w-8 h-8 text-[#28C76F]" />
                      <div>
                        <div className="font-semibold">Strategic Disputes</div>
                        <div className="text-sm text-gray-300">Custom dispute strategy</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 p-4 bg-white/10 rounded-xl backdrop-blur-sm">
                      <CheckCircle className="w-8 h-8 text-[#28C76F]" />
                      <div>
                        <div className="font-semibold">Creditor Negotiation</div>
                        <div className="text-sm text-gray-300">Direct engagement</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 p-4 bg-white/10 rounded-xl backdrop-blur-sm">
                      <CheckCircle className="w-8 h-8 text-[#28C76F]" />
                      <div>
                        <div className="font-semibold">Progress Tracking</div>
                        <div className="text-sm text-gray-300">Real-time updates</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <HeroWave fill="#F8F9FA" />
      </HeroSection>

      <section className="py-12 -mt-16 relative z-10">
        <div ref={formRef} className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-28">
          <Card className="border-2 border-gray-200 shadow-2xl" padding="lg">
            <div className="text-center mb-6">
              <h2 className="text-2xl md:text-3xl font-bold text-[#0E2A47]">Credit Repair Form</h2>
              <p className="text-sm text-gray-600 mt-2">
                Complete the quick survey below and our team will follow up with next steps.
              </p>
            </div>

            <div className="rounded-xl overflow-hidden border border-gray-200 bg-white">
              <LeadConnectorSurveyEmbed
                id="bG9um1fCQSfCy9FGA1MP"
                src="https://api.leadconnectorhq.com/widget/survey/bG9um1fCQSfCy9FGA1MP"
                title="survey"
                minHeight={920}
              />
            </div>

            <div className="bg-yellow-50 border-2 border-yellow-200 rounded-xl p-4 mt-6">
              <p className="text-sm text-gray-700 flex items-start gap-2">
                <Shield className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                <span>
                  <strong>Payment Terms:</strong> The $500 flat fee will be billed only after initial services are rendered and you have received your comprehensive evaluation report.
                </span>
              </p>
            </div>
          </Card>
        </div>
      </section>

      <section className="py-20 bg-[#F8F9FA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-blue-100 px-4 py-2 rounded-full mb-4">
              <Star className="w-4 h-4 text-blue-600" />
              <span className="text-sm font-semibold text-blue-600">Why Choose Us</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-[#0E2A47] mb-4">
              The Complete Credit Advantage
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="group relative">
                <div className={`absolute inset-0 bg-gradient-to-br ${benefit.color} rounded-2xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity`}></div>
                <Card className="relative h-full text-center border-2 border-gray-200 group-hover:border-transparent transition-all">
                  <div className="p-6">
                    <div className={`w-16 h-16 bg-gradient-to-br ${benefit.color} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform shadow-lg`}>
                      <benefit.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="font-bold text-[#0E2A47] text-lg mb-2">
                      {benefit.title}
                    </h3>
                    <p className="text-sm text-gray-600">
                      {benefit.description}
                    </p>
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-[#28C76F] bg-opacity-10 px-4 py-2 rounded-full mb-4">
              <Clock className="w-4 h-4 text-[#28C76F]" />
              <span className="text-sm font-semibold text-[#28C76F]">90-Day Roadmap</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-[#0E2A47] mb-4">
              Your Credit Transformation Journey
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A proven, systematic approach to optimizing your credit profile
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="space-y-8">
              {timeline.map((item, index) => (
                <div key={index} className="group relative">
                  <div className="flex gap-6 items-start">
                    <div className="flex flex-col items-center flex-shrink-0">
                      <div className={`w-20 h-20 bg-gradient-to-br ${item.color} rounded-2xl flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform`}>
                        <item.icon className="w-10 h-10 text-white" />
                      </div>
                      {index < timeline.length - 1 && (
                        <div className="w-1 h-full bg-gradient-to-b from-gray-300 to-transparent my-4"></div>
                      )}
                    </div>

                    <Card className="flex-1 border-2 border-gray-200 group-hover:border-transparent group-hover:shadow-2xl transition-all">
                      <div className="p-6">
                        <div className="flex items-start justify-between mb-3">
                          <div>
                            <div className={`inline-block px-3 py-1 ${item.bgColor} rounded-full mb-2`}>
                              <span className="text-sm font-semibold text-[#0E2A47]">
                                {item.phase}
                              </span>
                            </div>
                            <h3 className="text-2xl font-bold text-[#0E2A47]">
                              {item.title}
                            </h3>
                          </div>
                          <div className={`w-12 h-12 bg-gradient-to-br ${item.color} rounded-xl flex items-center justify-center opacity-20`}>
                            <span className="text-2xl font-bold text-white">{index + 1}</span>
                          </div>
                        </div>
                        <p className="text-gray-600 leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </Card>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <HeroSection className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Start Your Credit Transformation?</h2>
          <p className="text-xl text-gray-300 mb-10 leading-relaxed">
            Start the credit repair form and well reach out with next steps.
          </p>
          <Button size="lg" onClick={scrollToForm} className="bg-[#28C76F] hover:bg-[#22a75f] shadow-xl shadow-[#28C76F]/30">
            <Zap className="mr-2 w-5 h-5" />
            Start Credit Repair Form
          </Button>
        </div>
      </HeroSection>
    </div>
  );
}
