import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Zap,
  Shield,
  Target,
  AlertTriangle,
  FileText,
  Users,
  CheckCircle,
  Star,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Header */}
      <header className="border-b border-gray-800">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Image
              src="/upmatch-logo.png"
              alt="UpMatch"
              width={32}
              height={32}
              className="rounded-lg"
            />
            <span className="text-xl font-bold">UpMatch</span>
          </div>
          <Link
            href="https://chrome.google.com/webstore/detail/gehmelpbogeemmldldkonbimnhalhcjj"
            className="inline-flex items-center px-4 py-2 bg-[#2DE37D] hover:bg-[#25c470] text-gray-900 font-semibold rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            <Image
              src="/chrome-logo.png"
              alt="Chrome"
              width={16}
              height={16}
              className="mr-2"
            />
            Install UpMatch Extension
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center max-w-4xl">
          <Badge className="mb-6 bg-[#2DE37D]/10 text-[#2DE37D] border-[#2DE37D]/20">
            AI-Powered Chrome Extension
          </Badge>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Win More Jobs on <span className="text-[#2DE37D]">Upwork</span> with
            AI
          </h1>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            UpMatch analyzes job posts, predicts your match chances, detects red
            flags, and generates winning proposals using advanced AI. Get the
            edge you need to succeed as an Upwork freelancer.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="https://chrome.google.com/webstore/detail/gehmelpbogeemmldldkonbimnhalhcjj"
              className="inline-flex items-center px-8 py-4 bg-[#2DE37D] hover:bg-[#25c470] text-gray-900 font-semibold text-lg rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              <Image
                src="/chrome-logo.png"
                alt="Chrome"
                width={20}
                height={20}
                className="mr-3"
              />
              Install UpMatch Extension
              <ArrowRight className="w-5 h-5 ml-3" />
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-gray-800/50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Powerful AI Features</h2>
            <p className="text-xl text-gray-300">
              Everything you need to dominate Upwork
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-gray-800 border-gray-700">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-[#2DE37D]/10 rounded-lg flex items-center justify-center mb-4">
                  <Zap className="w-6 h-6 text-[#2DE37D]" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-white">
                  AI Job Analysis
                </h3>
                <p className="text-gray-300">
                  Instantly analyze job requirements, budget, and client history
                  to understand what they're really looking for.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gray-800 border-gray-700">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-[#2DE37D]/10 rounded-lg flex items-center justify-center mb-4">
                  <Target className="w-6 h-6 text-[#2DE37D]" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-white">
                  Match Prediction
                </h3>
                <p className="text-gray-300">
                  Get AI-powered predictions on your chances of winning each job
                  based on your profile and past performance.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gray-800 border-gray-700">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-[#2DE37D]/10 rounded-lg flex items-center justify-center mb-4">
                  <AlertTriangle className="w-6 h-6 text-[#2DE37D]" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-white">
                  Red Flag Detection
                </h3>
                <p className="text-gray-300">
                  Automatically detect suspicious clients, unrealistic budgets,
                  and potential scams before you apply.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gray-800 border-gray-700">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-[#2DE37D]/10 rounded-lg flex items-center justify-center mb-4">
                  <FileText className="w-6 h-6 text-[#2DE37D]" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-white">
                  Proposal Generation
                </h3>
                <p className="text-gray-300">
                  Generate personalized, winning proposals in seconds using AI
                  trained on successful Upwork applications.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gray-800 border-gray-700">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-[#2DE37D]/10 rounded-lg flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-[#2DE37D]" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-white">
                  Client Intelligence
                </h3>
                <p className="text-gray-300">
                  Deep insights into client behavior, hiring patterns, and
                  preferences to help you stand out.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gray-800 border-gray-700">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-[#2DE37D]/10 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="w-6 h-6 text-[#2DE37D]" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-white">
                  Privacy First
                </h3>
                <p className="text-gray-300">
                  Your data stays secure with enterprise-grade encryption and
                  privacy protection built-in.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">How It Works</h2>
            <p className="text-xl text-gray-300">
              Get started in just 2 simple steps
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-[#2DE37D] rounded-full flex items-center justify-center text-gray-900 font-bold text-sm">
                  1
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    Install the Chrome Extension
                  </h3>
                  <p className="text-gray-300">
                    Add UpMatch to your browser in seconds. It integrates
                    seamlessly with Upwork's interface.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-[#2DE37D] rounded-full flex items-center justify-center text-gray-900 font-bold text-sm">
                  2
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    Get Instant AI Insights
                  </h3>
                  <p className="text-gray-300">
                    Browse jobs on Upwork and get real-time AI analysis, match
                    predictions, and proposal suggestions.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gray-800 rounded-lg p-8 border border-gray-700">
              <div className="space-y-4">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-[#2DE37D]" />
                  <span>Job analyzed in 0.3 seconds</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Star className="w-5 h-5 text-[#2DE37D]" />
                  <span>92% match probability</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Shield className="w-5 h-5 text-[#2DE37D]" />
                  <span>No red flags detected</span>
                </div>
                <div className="flex items-center space-x-2">
                  <FileText className="w-5 h-5 text-[#2DE37D]" />
                  <span>Proposal generated</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 bg-gray-800/50">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-6">
            <Card className="bg-gray-800 border-gray-700">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-2 text-white">
                  What is UpMatch?
                </h3>
                <p className="text-gray-300">
                  UpMatch is an AI-powered Chrome extension designed
                  specifically for Upwork freelancers. It analyzes job posts in
                  real-time, predicts your match chances, detects potential red
                  flags, and helps generate winning proposals to increase your
                  success rate on the platform.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gray-800 border-gray-700">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-2 text-white">
                  Does this violate Upwork's terms of service?
                </h3>
                <p className="text-gray-300">
                  No, UpMatch is a browser extension that provides insights and
                  suggestions. You still write and submit your own proposals.
                  It's similar to using grammar checkers or research tools.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gray-800 border-gray-700">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-2 text-white">
                  How accurate are the match predictions?
                </h3>
                <p className="text-gray-300">
                  Our AI achieves 85%+ accuracy in predicting job match
                  likelihood by analyzing job requirements, client history, and
                  your profile compatibility using advanced machine learning
                  algorithms.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gray-800 border-gray-700">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-2 text-white text-white text-black text-white text-white text-black text-transparent text-white text-white text-black text-white text-white text-slate-50 text-white text-slate-300 text-slate-950 text-gray-100 text-gray-200 text-gray-300 text-gray-500 text-gray-600 text-slate-300 text-slate-200 text-slate-100 text-white text-black text-white text-slate-50 text-white">
                  Can I customize the AI suggestions?
                </h3>
                <p className="text-gray-300">
                  Yes! UpMatch learns from your preferences and successful
                  applications to provide increasingly personalized suggestions
                  over time.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center max-w-3xl">
          <h2 className="text-4xl font-bold mb-6">Ready to Win More Jobs?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Join thousands of freelancers who are already using UpMatch to boost
            their Upwork success rate.
          </p>
          <Link
            href="https://chrome.google.com/webstore/detail/gehmelpbogeemmldldkonbimnhalhcjj"
            className="inline-flex items-center px-8 py-4 bg-[#2DE37D] hover:bg-[#25c470] text-gray-900 font-semibold text-lg rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            <Image
              src="/chrome-logo.png"
              alt="Chrome"
              width={20}
              height={20}
              className="mr-3"
            />
            Install UpMatch Extension
            <ArrowRight className="w-5 h-5 ml-3" />
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800 py-12 px-4">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <Image
                src="/upmatch-logo.png"
                alt="UpMatch"
                width={32}
                height={32}
                className="rounded-lg"
              />
              <span className="text-xl font-bold">UpMatch</span>
            </div>

            <div className="flex space-x-6 text-gray-400">
              <Link
                href="/terms"
                className="hover:text-[#2DE37D] transition-colors"
              >
                Terms of Service
              </Link>
              <Link
                href="/privacy"
                className="hover:text-[#2DE37D] transition-colors"
              >
                Privacy Policy
              </Link>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
            <p>© 2025 UpMatch. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
