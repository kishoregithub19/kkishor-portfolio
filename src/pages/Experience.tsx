
import { Calendar, MapPin, Award } from "lucide-react";
import { Link } from "react-router-dom";

const Experience = () => {
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
              <Link to="/about" className="text-gray-700 hover:text-blue-600 transition-colors">About</Link>
              <Link to="/experience" className="text-blue-600 font-medium">Experience</Link>
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
            <h1 className="text-4xl font-bold text-gray-800 mb-4">Professional Experience</h1>
            <p className="text-xl text-gray-600">A decade of academic excellence and research innovation</p>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mt-6"></div>
          </div>

          {/* Timeline */}
          <div className="space-y-8">
            {/* Current Position */}
            <div className="relative">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1 bg-white rounded-lg p-8 shadow-sm border border-gray-200">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <h3 className="text-xl font-bold text-gray-800 mb-2 md:mb-0">
                      Academic Researcher & Faculty
                    </h3>
                    <div className="flex items-center gap-2 text-gray-600">
                      <Calendar className="w-4 h-4" />
                      <span>2019 - 2022</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-2 text-gray-600 mb-4">
                    <MapPin className="w-4 h-4" />
                    <span>University of Technology & Applied Sciences, Oman</span>
                  </div>

                  <div className="space-y-4">
                    <h4 className="font-semibold text-gray-800">Key Contributions:</h4>
                    <ul className="space-y-2 text-gray-600">
                      <li className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                        <span>Led advanced data analysis projects using machine learning and statistical modeling</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                        <span>Successfully secured TRC RG grant funding worth $12,000 for innovative research</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                        <span>Supervised and mentored graduate students in research methodologies</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                        <span>Collaborated with international research teams on multi-disciplinary projects</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                        <span>Developed and implemented innovative curriculum for data science programs</span>
                      </li>
                    </ul>

                    <div className="bg-blue-50 p-4 rounded-lg mt-6">
                      <h4 className="font-semibold text-blue-800 mb-2">Major Achievement:</h4>
                      <p className="text-blue-700">
                        Successfully led the TRC-funded project on job scheduling using vague networks, 
                        demonstrating innovative approaches to complex optimization problems in uncertain environments.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Previous Roles */}
            <div className="relative">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1 bg-white rounded-lg p-8 shadow-sm border border-gray-200">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <h3 className="text-xl font-bold text-gray-800 mb-2 md:mb-0">
                      Senior Faculty & Researcher
                    </h3>
                    <div className="flex items-center gap-2 text-gray-600">
                      <Calendar className="w-4 h-4" />
                      <span>2015 - 2019</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-2 text-gray-600 mb-4">
                    <MapPin className="w-4 h-4" />
                    <span>Various Universities, India</span>
                  </div>

                  <div className="space-y-4">
                    <h4 className="font-semibold text-gray-800">Key Contributions:</h4>
                    <ul className="space-y-2 text-gray-600">
                      <li className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 flex-shrink-0"></div>
                        <span>Established research foundations in mathematical modeling and optimization</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 flex-shrink-0"></div>
                        <span>Published numerous peer-reviewed articles in international journals</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 flex-shrink-0"></div>
                        <span>Built strong academic networks and collaborative research partnerships</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Early Career */}
            <div className="relative">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-orange-600 rounded-full flex items-center justify-center">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1 bg-white rounded-lg p-8 shadow-sm border border-gray-200">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <h3 className="text-xl font-bold text-gray-800 mb-2 md:mb-0">
                      Research Associate & Junior Faculty
                    </h3>
                    <div className="flex items-center gap-2 text-gray-600">
                      <Calendar className="w-4 h-4" />
                      <span>2012 - 2015</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-2 text-gray-600 mb-4">
                    <MapPin className="w-4 h-4" />
                    <span>Academic Institutions, India</span>
                  </div>

                  <div className="space-y-4">
                    <h4 className="font-semibold text-gray-800">Foundation Building:</h4>
                    <ul className="space-y-2 text-gray-600">
                      <li className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-orange-600 rounded-full mt-2 flex-shrink-0"></div>
                        <span>Developed expertise in advanced mathematical theories and applications</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-orange-600 rounded-full mt-2 flex-shrink-0"></div>
                        <span>Initiated research in systems engineering and operations research</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
