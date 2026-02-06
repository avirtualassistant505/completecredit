import { Link } from 'react-router-dom';
import { ArrowRight, Shield, Zap, TrendingUp, Users, Award, DollarSign, FileCheck, Target, BarChart3, Sparkles, CheckCircle2, Star } from 'lucide-react';
import { Button } from '../components/Button';
import { Card } from '../components/Card';
import { HeroSection } from '../components/HeroSection';
import { HeroWave } from '../components/HeroWave';

export function Home() {
  return (
    <div className="min-h-screen overflow-hidden bg-white">
      <HeroSection className="py-24 md:py-32">

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-white/10 px-5 py-2.5 rounded-full mb-8 backdrop-blur-sm border border-white/20">
                <Sparkles className="w-5 h-5 text-white" strokeWidth={2.5} />
                <span className="text-sm font-bold text-white">Transform Your Financial Future</span>
              </div>

              <h1 className="text-5xl md:text-7xl font-black mb-8 leading-tight tracking-tight">
                Credit Optimization
                <span className="block text-white">Meets Capital Access</span>
              </h1>

              <p className="text-xl text-gray-300 mb-10 leading-relaxed font-medium">
                Transform your credit profile and unlock funding opportunities with our proven two-step approach.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-10">
                <Link to="/credit-repair" className="flex-1 sm:flex-none">
                  <Button
                    size="lg"
                    className="w-full bg-white text-black hover:bg-gray-100 shadow-xl font-bold text-base"
                  >
                    <TrendingUp className="mr-2 w-6 h-6" strokeWidth={2.5} />
                    Fix My Credit
                  </Button>
                </Link>
                <Link to="/funding" className="flex-1 sm:flex-none">
                  <Button size="lg" className="w-full bg-white/10 backdrop-blur-sm border-2 border-white/20 text-white hover:bg-white hover:text-black shadow-xl font-bold text-base">
                    <DollarSign className="mr-2 w-6 h-6" strokeWidth={2.5} />
                    Get Funding
                  </Button>
                </Link>
              </div>

              <div className="flex items-center gap-6">
                <div className="flex -space-x-3">
                  <div className="w-12 h-12 rounded-full bg-white border-2 border-black flex items-center justify-center">
                    <Star className="w-6 h-6 text-black" fill="black" />
                  </div>
                  <div className="w-12 h-12 rounded-full bg-gray-800 border-2 border-black flex items-center justify-center">
                    <Star className="w-6 h-6 text-white" fill="white" />
                  </div>
                  <div className="w-12 h-12 rounded-full bg-gray-600 border-2 border-black flex items-center justify-center">
                    <Star className="w-6 h-6 text-white" fill="white" />
                  </div>
                </div>
                <div>
                  <div className="flex gap-1 mb-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-white" fill="white" strokeWidth={2} />
                    ))}
                  </div>
                  <p className="text-sm text-gray-300 font-semibold">Trusted by 5,000+ clients</p>
                </div>
              </div>
            </div>

            <div className="relative hidden lg:block">
              <div className="relative">
                <div className="absolute inset-0 bg-white rounded-3xl blur-xl opacity-10 animate-pulse"></div>
                <div className="relative bg-white/10 backdrop-blur-sm rounded-3xl p-8 border-2 border-white/20">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border-2 border-white/20">
                      <TrendingUp className="w-12 h-12 text-white mb-4" strokeWidth={2.5} />
                      <div className="text-4xl font-black mb-2">+150</div>
                      <div className="text-sm text-gray-300 font-semibold">Avg Score Increase</div>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border-2 border-white/20">
                      <DollarSign className="w-12 h-12 text-white mb-4" strokeWidth={2.5} />
                      <div className="text-4xl font-black mb-2">$500K+</div>
                      <div className="text-sm text-gray-300 font-semibold">Funding Secured</div>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border-2 border-white/20">
                      <Users className="w-12 h-12 text-white mb-4" strokeWidth={2.5} />
                      <div className="text-4xl font-black mb-2">5,000+</div>
                      <div className="text-sm text-gray-300 font-semibold">Happy Clients</div>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border-2 border-white/20">
                      <Award className="w-12 h-12 text-white mb-4" strokeWidth={2.5} />
                      <div className="text-4xl font-black mb-2">90 Days</div>
                      <div className="text-sm text-gray-300 font-semibold">Success Timeline</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <HeroWave fill="white" />
      </HeroSection>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-black px-5 py-2.5 rounded-full mb-6">
              <Zap className="w-5 h-5 text-white" strokeWidth={2.5} />
              <span className="text-sm font-bold text-white">Our Services</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-black text-black mb-6 tracking-tight">
              Two Powerful Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto font-medium">
              Choose the path that fits your needs or combine both for maximum results
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <div className="group relative">
              <div className="absolute inset-0 bg-black rounded-3xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity"></div>
              <Card className="relative h-full border-4 border-black hover:border-gray-800 transition-all duration-300 hover:shadow-2xl">
                <div className="p-10">
                  <div className="w-20 h-20 bg-black rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                    <TrendingUp className="w-12 h-12 text-white" strokeWidth={2.5} />
                  </div>

                  <h3 className="text-4xl font-black text-black mb-6 tracking-tight">
                    Credit Repair
                  </h3>

                  <p className="text-gray-700 mb-8 leading-relaxed text-lg font-medium">
                    Strategic credit optimization with proven dispute processes. Remove negatives, boost scores, and prepare for funding.
                  </p>

                  <div className="space-y-4 mb-10">
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-7 h-7 text-black mt-0.5 flex-shrink-0" strokeWidth={2.5} />
                      <span className="text-base text-gray-900 font-semibold">Tri-bureau analysis & disputes</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-7 h-7 text-black mt-0.5 flex-shrink-0" strokeWidth={2.5} />
                      <span className="text-base text-gray-900 font-semibold">90-day optimization program</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-7 h-7 text-black mt-0.5 flex-shrink-0" strokeWidth={2.5} />
                      <span className="text-base text-gray-900 font-semibold">Average +150 point increase</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-7 h-7 text-black mt-0.5 flex-shrink-0" strokeWidth={2.5} />
                      <span className="text-base text-gray-900 font-semibold">Flat $500 fee (billed after delivery)</span>
                    </div>
                  </div>

                  <Link to="/credit-repair">
                    <Button className="w-full bg-black hover:bg-gray-900 group-hover:shadow-xl transition-all font-bold text-base py-4">
                      Start Credit Repair
                      <ArrowRight className="ml-2 w-6 h-6 group-hover:translate-x-1 transition-transform" strokeWidth={2.5} />
                    </Button>
                  </Link>
                </div>
              </Card>
            </div>

            <div className="group relative">
              <div className="absolute inset-0 bg-black rounded-3xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity"></div>
              <Card className="relative h-full border-4 border-black hover:border-gray-800 transition-all duration-300 hover:shadow-2xl">
                <div className="p-10">
                  <div className="w-20 h-20 bg-black rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                    <DollarSign className="w-12 h-12 text-white" strokeWidth={2.5} />
                  </div>

                  <h3 className="text-4xl font-black text-black mb-6 tracking-tight">
                    Credit Funding
                  </h3>

                  <p className="text-gray-700 mb-8 leading-relaxed text-lg font-medium">
                    Access capital opportunities based on your credit profile. Multi-factor review with personalized funding strategies.
                  </p>

                  <div className="space-y-4 mb-10">
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-7 h-7 text-black mt-0.5 flex-shrink-0" strokeWidth={2.5} />
                      <span className="text-base text-gray-900 font-semibold">Fast eligibility assessment</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-7 h-7 text-black mt-0.5 flex-shrink-0" strokeWidth={2.5} />
                      <span className="text-base text-gray-900 font-semibold">Multiple funding options</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-7 h-7 text-black mt-0.5 flex-shrink-0" strokeWidth={2.5} />
                      <span className="text-base text-gray-900 font-semibold">$10K - $500K+ available</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-7 h-7 text-black mt-0.5 flex-shrink-0" strokeWidth={2.5} />
                      <span className="text-base text-gray-900 font-semibold">No upfront fees</span>
                    </div>
                  </div>

                  <Link to="/funding">
                    <Button className="w-full bg-black hover:bg-gray-900 group-hover:shadow-xl transition-all font-bold text-base py-4">
                      Check Eligibility
                      <ArrowRight className="ml-2 w-6 h-6 group-hover:translate-x-1 transition-transform" strokeWidth={2.5} />
                    </Button>
                  </Link>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-black px-5 py-2.5 rounded-full mb-6">
              <Target className="w-5 h-5 text-white" strokeWidth={2.5} />
              <span className="text-sm font-bold text-white">The Process</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-black text-black mb-6 tracking-tight">
              How It Works
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto font-medium">
              Simple, transparent, and effective in just three steps
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 relative">
            <div className="hidden md:block absolute top-24 left-1/3 right-1/3 h-1 bg-black opacity-10"></div>

            <div className="relative">
              <div className="relative z-10">
                <div className="w-24 h-24 bg-black rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-xl">
                  <FileCheck className="w-14 h-14 text-white" strokeWidth={2.5} />
                </div>
                <div className="text-center">
                  <h3 className="text-3xl font-black text-black mb-4">1. Evaluate</h3>
                  <p className="text-gray-700 leading-relaxed font-medium text-lg">
                    Comprehensive credit analysis identifying opportunities and strategies for improvement
                  </p>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative z-10">
                <div className="w-24 h-24 bg-black rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-xl">
                  <BarChart3 className="w-14 h-14 text-white" strokeWidth={2.5} />
                </div>
                <div className="text-center">
                  <h3 className="text-3xl font-black text-black mb-4">2. Optimize</h3>
                  <p className="text-gray-700 leading-relaxed font-medium text-lg">
                    Strategic execution of disputes, negotiations, and credit profile enhancement
                  </p>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative z-10">
                <div className="w-24 h-24 bg-black rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-xl">
                  <Award className="w-14 h-14 text-white" strokeWidth={2.5} />
                </div>
                <div className="text-center">
                  <h3 className="text-3xl font-black text-black mb-4">3. Access</h3>
                  <p className="text-gray-700 leading-relaxed font-medium text-lg">
                    Unlock funding opportunities with improved creditworthiness and strategic positioning
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-black px-5 py-2.5 rounded-full mb-8">
                <Shield className="w-5 h-5 text-white" strokeWidth={2.5} />
                <span className="text-sm font-bold text-white">Bank-Level Security</span>
              </div>
              <h2 className="text-5xl md:text-6xl font-black text-black mb-8 tracking-tight">
                Your Trust Is Our Priority
              </h2>
              <p className="text-lg text-gray-700 mb-10 leading-relaxed font-medium">
                We use industry-leading security measures to protect your sensitive information. Your data is encrypted, secure, and never shared without explicit consent.
              </p>
              <div className="space-y-6">
                <div className="flex items-center gap-5">
                  <div className="w-16 h-16 bg-black rounded-xl flex items-center justify-center flex-shrink-0">
                    <Shield className="w-9 h-9 text-white" strokeWidth={2.5} />
                  </div>
                  <div>
                    <div className="font-black text-black text-lg">256-bit Encryption</div>
                    <div className="text-base text-gray-600 font-medium">Military-grade data protection</div>
                  </div>
                </div>
                <div className="flex items-center gap-5">
                  <div className="w-16 h-16 bg-gray-800 rounded-xl flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="w-9 h-9 text-white" strokeWidth={2.5} />
                  </div>
                  <div>
                    <div className="font-black text-black text-lg">Compliance First</div>
                    <div className="text-base text-gray-600 font-medium">Full regulatory compliance</div>
                  </div>
                </div>
                <div className="flex items-center gap-5">
                  <div className="w-16 h-16 bg-gray-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Award className="w-9 h-9 text-white" strokeWidth={2.5} />
                  </div>
                  <div>
                    <div className="font-black text-black text-lg">Proven Track Record</div>
                    <div className="text-base text-gray-600 font-medium">5,000+ successful clients</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-black rounded-3xl blur-2xl opacity-10"></div>
              <div className="relative bg-white rounded-3xl p-10 shadow-2xl border-4 border-black">
                <div className="space-y-6">
                  <div className="flex items-center justify-between p-6 bg-gray-50 rounded-xl border-2 border-black">
                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 bg-black rounded-lg flex items-center justify-center">
                        <CheckCircle2 className="w-8 h-8 text-white" strokeWidth={2.5} />
                      </div>
                      <span className="font-black text-black text-lg">SSL Secured</span>
                    </div>
                    <span className="text-xs font-black text-white bg-black px-4 py-2 rounded-full">Active</span>
                  </div>
                  <div className="flex items-center justify-between p-6 bg-gray-50 rounded-xl border-2 border-gray-800">
                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 bg-gray-800 rounded-lg flex items-center justify-center">
                        <Shield className="w-8 h-8 text-white" strokeWidth={2.5} />
                      </div>
                      <span className="font-black text-black text-lg">Data Encrypted</span>
                    </div>
                    <span className="text-xs font-black text-white bg-gray-800 px-4 py-2 rounded-full">Verified</span>
                  </div>
                  <div className="flex items-center justify-between p-6 bg-gray-50 rounded-xl border-2 border-gray-600">
                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 bg-gray-600 rounded-lg flex items-center justify-center">
                        <Award className="w-8 h-8 text-white" strokeWidth={2.5} />
                      </div>
                      <span className="font-black text-black text-lg">Compliant</span>
                    </div>
                    <span className="text-xs font-black text-white bg-gray-600 px-4 py-2 rounded-full">Certified</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <HeroSection className="py-20">

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-5xl md:text-6xl font-black mb-8 tracking-tight">
            Ready to Transform Your Financial Future?
          </h2>
          <p className="text-xl text-gray-300 mb-12 leading-relaxed font-medium">
            Join thousands who have improved their credit and accessed capital
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/credit-repair">
              <Button size="lg" className="bg-white text-black hover:bg-gray-100 shadow-xl font-bold text-base">
                <TrendingUp className="mr-2 w-6 h-6" strokeWidth={2.5} />
                Start Credit Repair
              </Button>
            </Link>
            <Link to="/funding">
              <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-black shadow-xl font-bold text-base">
                <DollarSign className="mr-2 w-6 h-6" strokeWidth={2.5} />
                Get Funding Now
              </Button>
            </Link>
          </div>
        </div>
      </HeroSection>
    </div>
  );
}
