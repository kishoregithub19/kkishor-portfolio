
import { Button } from "@/components/ui/button";
import { Download, GraduationCap } from "lucide-react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white border-b border-gray-200">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="text-2xl font-bold text-gray-800">
              Dr. Kishore Kumar P K
            </Link>
            <div className="hidden md:flex space-x-8">
              <Link to="/" className="text-gray-700 hover:text-blue-600 transition-colors">Home</Link>
              <Link to="/about" className="text-blue-600 font-medium">About</Link>
              <Link to="/experience" className="text-gray-700 hover:text-blue-600 transition-colors">Experience</Link>
              <Link to="/skills" className="text-gray-700 hover:text-blue-600 transition-colors">Skills</Link>
              <Link to="/services" className="text-gray-700 hover:text-blue-600 transition-colors">Services</Link>
              <Link to="/projects" className="text-gray-700 hover:text-blue-600 transition-colors">Projects</Link>
              <Link to="/contact" className="text-gray-700 hover:text-blue-600 transition-colors">Contact</Link>
            </div>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-6 py-16">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">About Me</h1>
            <p className="text-xl text-gray-600">Designing Solutions, Not Just Visuals</p>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mt-6"></div>
          </div>

          {/* Main Content */}
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            {/* Bio Section */}
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">My Journey</h2>
              <p className="text-gray-600 leading-relaxed">
                With over a decade of experience in academia and research, I specialize in strategic planning, 
                research innovation, and data science. My work spans universities in India and Oman, where I've 
                made significant contributions in curriculum development, faculty management, and research project leadership.
              </p>
              <p className="text-gray-600 leading-relaxed">
                As an Academic Researcher & Faculty at the University of Technology & Applied Sciences in Oman, 
                I've led groundbreaking research in data analysis, grant writing, and research supervision. 
                My expertise in mathematics and systems engineering drives my passion for solving complex problems 
                through innovative data science solutions.
              </p>
              <p className="text-gray-600 leading-relaxed">
                I believe in bridging the gap between theoretical knowledge and practical applications, 
                helping organizations and students leverage the power of data for informed decision-making.
              </p>
              
              <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                <Download className="w-4 h-4 mr-2" />
                Download Complete CV
              </Button>
            </div>

            {/* Education Section */}
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Education</h2>
              
              <div className="space-y-4">
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                  <div className="flex items-start gap-4">
                    <div className="bg-blue-100 p-2 rounded-lg">
                      <GraduationCap className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800">Ph.D., Mathematics</h3>
                      <p className="text-gray-600 text-sm">Advanced research in mathematical sciences</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                  <div className="flex items-start gap-4">
                    <div className="bg-purple-100 p-2 rounded-lg">
                      <GraduationCap className="w-6 h-6 text-purple-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800">M.E., Systems Engineering & Operations Research</h3>
                      <p className="text-gray-600 text-sm">Specialized in optimization and systems analysis</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                  <div className="flex items-start gap-4">
                    <div className="bg-green-100 p-2 rounded-lg">
                      <GraduationCap className="w-6 h-6 text-green-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800">M.Phil., Mathematics</h3>
                      <p className="text-gray-600 text-sm">Research-focused mathematical studies</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                  <div className="flex items-start gap-4">
                    <div className="bg-orange-100 p-2 rounded-lg">
                      <GraduationCap className="w-6 h-6 text-orange-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800">M.Sc., Mathematics</h3>
                      <p className="text-gray-600 text-sm">Foundation in advanced mathematical concepts</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Stats Section */}
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold mb-2">10+</div>
                <div className="text-blue-100">Years Experience</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">50+</div>
                <div className="text-blue-100">Research Projects</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">100+</div>
                <div className="text-blue-100">Students Mentored</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">25+</div>
                <div className="text-blue-100">Publications</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
