import { Button } from "@/components/ui/button";
import { ArrowRight, Download, Mail, Phone, Linkedin, Sparkles, Play } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-600 via-purple-600 to-blue-800 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-40 -left-20 w-60 h-60 bg-orange-400/20 rounded-full blur-2xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-pink-400/20 rounded-full blur-xl animate-pulse delay-500"></div>
      </div>

      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-200">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold text-gray-800">
              Dr. Kishore Kumar P K
            </div>
            <div className="hidden md:flex space-x-8">
              <Link to="/" className="text-gray-700 hover:text-blue-600 transition-colors">Home</Link>
              <Link to="/about" className="text-gray-700 hover:text-blue-600 transition-colors">About</Link>
              <Link to="/experience" className="text-gray-700 hover:text-blue-600 transition-colors">Experience</Link>
              <Link to="/skills" className="text-gray-700 hover:text-blue-600 transition-colors">Skills</Link>
              <Link to="/services" className="text-gray-700 hover:text-blue-600 transition-colors">Services</Link>
              <Link to="/projects" className="text-gray-700 hover:text-blue-600 transition-colors">Projects</Link>
              <Link to="/contact" className="text-gray-700 hover:text-blue-600 transition-colors">Contact</Link>
            </div>
            <Button className="bg-orange-500 hover:bg-orange-600 text-white px-6">
              <Download className="w-4 h-4 mr-2" />
              Download CV
            </Button>
          </div>
        </div>
      </nav>

      {/* Enhanced Hero Section */}
      <section className="container mx-auto px-6 py-20 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="lg:w-1/2 text-white mb-10 lg:mb-0 animate-fade-in">
            {/* Floating Badge */}
            <div className="mb-8 animate-fade-in delay-200">
              <span className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm text-white px-6 py-3 rounded-full text-sm border border-white/30 hover:bg-white/30 transition-all duration-300">
                <Sparkles className="w-4 h-4 text-orange-400" />
                Hello, I'm Dr. Kishore Kumar P K
              </span>
            </div>

            {/* Main Heading with Enhanced Typography */}
            <h1 className="text-5xl lg:text-7xl font-bold mb-8 leading-tight animate-fade-in delay-300">
              <span className="block text-white mb-2">Educator</span>
              <span className="block text-orange-400 mb-2">Researcher</span>
              <span className="block bg-gradient-to-r from-blue-200 to-white bg-clip-text text-transparent">
                Data Scientist
              </span>
            </h1>

            {/* Enhanced Description */}
            <p className="text-xl lg:text-2xl mb-10 text-blue-100 leading-relaxed animate-fade-in delay-500 max-w-2xl">
              Driving innovation and research in higher education and data science with 
              <span className="text-orange-400 font-semibold"> over a decade </span>
              of academic excellence.
            </p>

            {/* Modern CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 mb-12 animate-fade-in delay-700">
              <Button className="group bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 text-white px-8 py-4 text-lg font-semibold rounded-full shadow-2xl shadow-orange-500/25 hover:shadow-orange-500/40 transition-all duration-300 transform hover:scale-105">
                View Portfolio
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" className="group bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white hover:bg-white/20 px-8 py-4 text-lg font-semibold rounded-full hover:border-white/50 transition-all duration-300">
                <Play className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                Watch Intro
              </Button>
            </div>
            
            {/* Enhanced Stats Cards */}
            <div className="flex flex-wrap gap-6 animate-fade-in delay-1000">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105">
                <div className="text-3xl font-bold text-orange-400 mb-1">10+</div>
                <div className="text-sm text-blue-100">Years Experience</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105">
                <div className="text-3xl font-bold text-orange-400 mb-1">50+</div>
                <div className="text-sm text-blue-100">Research Projects</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105">
                <div className="text-3xl font-bold text-orange-400 mb-1">$12K</div>
                <div className="text-sm text-blue-100">Grant Funding</div>
              </div>
            </div>
          </div>

          {/* Enhanced Professional Photo Section */}
          <div className="lg:w-1/2 flex justify-center animate-fade-in delay-500">
            <div className="relative group">
              {/* Main Photo Container */}
              <div className="relative w-96 h-96 rounded-3xl bg-gradient-to-br from-orange-400 via-pink-500 to-purple-600 p-1 group-hover:scale-105 transition-all duration-500">
                <div className="w-full h-full rounded-3xl bg-gradient-to-br from-gray-100 to-gray-300 flex items-center justify-center text-gray-600 relative overflow-hidden">
                  <div className="text-center z-10">
                    <div className="w-32 h-32 bg-gradient-to-br from-gray-400 to-gray-500 rounded-full mx-auto mb-6 shadow-xl"></div>
                    <p className="text-lg font-medium">Professional Photo</p>
                    <p className="text-sm text-gray-500 mt-2">Dr. Kishore Kumar P K</p>
                  </div>
                  {/* Overlay Effect */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>
              </div>

              {/* Floating Decorative Elements */}
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-br from-orange-400 to-pink-500 rounded-2xl opacity-80 rotate-12 group-hover:rotate-45 transition-all duration-500 shadow-2xl"></div>
              <div className="absolute -bottom-6 -left-6 w-20 h-20 bg-gradient-to-br from-blue-400 to-purple-500 rounded-xl opacity-70 -rotate-12 group-hover:-rotate-45 transition-all duration-500 shadow-xl"></div>
              
              {/* Animated Ring */}
              <div className="absolute inset-0 rounded-3xl border-2 border-white/30 animate-pulse"></div>
              
              {/* Floating Skills Tags */}
              <div className="absolute -left-8 top-20 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium text-gray-800 shadow-lg animate-bounce delay-1000">
                Python
              </div>
              <div className="absolute -right-8 top-40 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium text-gray-800 shadow-lg animate-bounce delay-1500">
                AWS
              </div>
              <div className="absolute -left-12 bottom-32 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium text-gray-800 shadow-lg animate-bounce delay-2000">
                Data Science
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Contact */}
      <section className="bg-white py-16 relative">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Get In Touch</h2>
            <p className="text-gray-600">Ready to collaborate or discuss research opportunities?</p>
          </div>
          <div className="flex flex-wrap justify-center gap-8">
            <div className="flex items-center gap-3 bg-blue-50 px-6 py-4 rounded-lg">
              <Mail className="w-5 h-5 text-blue-600" />
              <span className="text-gray-700">kishoremath@email.com</span>
            </div>
            <div className="flex items-center gap-3 bg-green-50 px-6 py-4 rounded-lg">
              <Phone className="w-5 h-5 text-green-600" />
              <span className="text-gray-700">+968 XXXX XXXX</span>
            </div>
            <div className="flex items-center gap-3 bg-blue-50 px-6 py-4 rounded-lg">
              <Linkedin className="w-5 h-5 text-blue-600" />
              <span className="text-gray-700">LinkedIn Profile</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
