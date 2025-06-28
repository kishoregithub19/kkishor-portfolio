
import { Button } from "@/components/ui/button";
import { ArrowRight, Download, Mail, Phone, Linkedin } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-600 via-purple-600 to-blue-800">
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

      {/* Hero Section */}
      <section className="container mx-auto px-6 py-20">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <div className="lg:w-1/2 text-white mb-10 lg:mb-0">
            <div className="mb-6">
              <span className="inline-block bg-white/20 text-white px-4 py-2 rounded-full text-sm mb-4">
                Hello, I'm
              </span>
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Dr. Kishore Kumar P K
              <br />
              <span className="text-orange-400">Educator | Researcher</span>
            </h1>
            <p className="text-xl mb-8 text-blue-100 leading-relaxed">
              Driving innovation and research in higher education and data science with over a decade of academic excellence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3">
                <ArrowRight className="w-4 h-4 ml-2" />
                View Portfolio
              </Button>
              <Button variant="outline" className="bg-white/10 border-white/30 text-white hover:bg-white/20 px-8 py-3">
                Watch Intro
              </Button>
            </div>
            
            {/* Achievement Badge */}
            <div className="mt-8 inline-flex items-center bg-white/10 rounded-lg p-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-orange-400">10+</div>
                <div className="text-sm text-blue-100">Years Experience</div>
              </div>
            </div>
          </div>

          {/* Professional Photo Placeholder */}
          <div className="lg:w-1/2 flex justify-center">
            <div className="relative">
              <div className="w-80 h-80 rounded-full bg-gradient-to-br from-orange-400 to-pink-500 p-1">
                <div className="w-full h-full rounded-full bg-gray-300 flex items-center justify-center text-gray-600">
                  <div className="text-center">
                    <div className="w-24 h-24 bg-gray-400 rounded-full mx-auto mb-4"></div>
                    <p className="text-sm">Professional Photo</p>
                  </div>
                </div>
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-orange-400 rounded-full opacity-20"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-pink-400 rounded-full opacity-20"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Contact */}
      <section className="bg-white py-16">
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
