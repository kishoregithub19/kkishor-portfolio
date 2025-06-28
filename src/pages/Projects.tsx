import { Calendar, DollarSign, Target, Award } from "lucide-react";
import { Link } from "react-router-dom";

const Projects = () => {
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
              <Link to="/experience" className="text-gray-700 hover:text-blue-600 transition-colors">Experience</Link>
              <Link to="/skills" className="text-gray-700 hover:text-blue-600 transition-colors">Skills</Link>
              <Link to="/services" className="text-gray-700 hover:text-blue-600 transition-colors">Services</Link>
              <Link to="/projects" className="text-blue-600 font-medium">Projects</Link>
              <Link to="/contact" className="text-gray-700 hover:text-blue-600 transition-colors">Contact</Link>
            </div>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-6 py-16">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">Featured Projects</h1>
            <p className="text-xl text-gray-600">Digital Product Showcases</p>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mt-6"></div>
          </div>

          {/* Featured Project */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden mb-12">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-8 text-white">
              <div className="flex items-center gap-3 mb-4">
                <Award className="w-8 h-8" />
                <span className="bg-white/20 px-3 py-1 rounded-full text-sm">Featured Project</span>
              </div>
              <h2 className="text-3xl font-bold mb-4">TRC-Funded Research Project</h2>
              <p className="text-xl text-blue-100">Job Scheduling Using Vague Networks</p>
            </div>
            
            <div className="p-8">
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="text-center">
                  <div className="bg-green-100 p-3 rounded-lg inline-flex items-center justify-center mb-2">
                    <DollarSign className="w-6 h-6 text-green-600" />
                  </div>
                  <div className="text-2xl font-bold text-green-600">$12,000</div>
                  <div className="text-gray-600 text-sm">Grant Funding</div>
                </div>
                <div className="text-center">
                  <div className="bg-blue-100 p-3 rounded-lg inline-flex items-center justify-center mb-2">
                    <Calendar className="w-6 h-6 text-blue-600" />
                  </div>
                  <div className="text-2xl font-bold text-blue-600">2019-2022</div>
                  <div className="text-gray-600 text-sm">Project Duration</div>
                </div>
                <div className="text-center">
                  <div className="bg-purple-100 p-3 rounded-lg inline-flex items-center justify-center mb-2">
                    <Target className="w-6 h-6 text-purple-600" />
                  </div>
                  <div className="text-2xl font-bold text-purple-600">TRC</div>
                  <div className="text-gray-600 text-sm">Funding Body</div>
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">Project Summary</h3>
                  <p className="text-gray-600 leading-relaxed">
                    This groundbreaking research project explores innovative approaches to job scheduling problems 
                    in uncertain environments using vague network theory. The project addresses complex optimization 
                    challenges in resource allocation and scheduling systems where traditional deterministic methods 
                    fall short due to inherent uncertainties.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">Objectives</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Develop novel algorithms for job scheduling in vague network environments</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Create mathematical models for uncertainty quantification in scheduling systems</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Validate theoretical frameworks through computational simulations</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Publish findings in high-impact international journals</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">Methods Used</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-gray-800 mb-2">Mathematical Modeling</h4>
                      <p className="text-gray-600 text-sm">Advanced vague set theory and fuzzy logic applications</p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-gray-800 mb-2">Algorithm Development</h4>
                      <p className="text-gray-600 text-sm">Custom optimization algorithms for uncertain environments</p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-gray-800 mb-2">Computational Analysis</h4>
                      <p className="text-gray-600 text-sm">Python-based simulations and performance evaluations</p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-gray-800 mb-2">Statistical Validation</h4>
                      <p className="text-gray-600 text-sm">Robust statistical analysis of results and outcomes</p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">Key Outcomes</h3>
                  <div className="bg-green-50 p-6 rounded-lg">
                    <ul className="space-y-2 text-green-800">
                      <li className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                        <span>Successfully developed novel mathematical frameworks for vague network scheduling</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                        <span>Published 5+ peer-reviewed articles in international journals</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                        <span>Presented findings at 3 international academic conferences</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                        <span>Mentored 6 graduate students in advanced research methodologies</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                        <span>Established collaborative partnerships with international research institutions</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Other Projects */}
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-200">
              <div className="mb-6">
                <div className="bg-blue-100 p-3 rounded-lg inline-flex items-center justify-center mb-4">
                  <Target className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Mathematical Optimization Models</h3>
                <p className="text-gray-600">Advanced mathematical modeling for complex optimization problems in various domains.</p>
              </div>
              <div className="space-y-2 text-sm text-gray-600">
                <div className="flex justify-between">
                  <span>Duration:</span>
                  <span className="font-medium">2018-2020</span>
                </div>
                <div className="flex justify-between">
                  <span>Publications:</span>
                  <span className="font-medium">8 Articles</span>
                </div>
                <div className="flex justify-between">
                  <span>Impact:</span>
                  <span className="font-medium">High</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-200">
              <div className="mb-6">
                <div className="bg-purple-100 p-3 rounded-lg inline-flex items-center justify-center mb-4">
                  <Target className="w-6 h-6 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Data Analytics Framework</h3>
                <p className="text-gray-600">Comprehensive data analytics solutions for academic and industry applications.</p>
              </div>
              <div className="space-y-2 text-sm text-gray-600">
                <div className="flex justify-between">
                  <span>Duration:</span>
                  <span className="font-medium">2020-2022</span>
                </div>
                <div className="flex justify-between">
                  <span>Tools:</span>
                  <span className="font-medium">Python, R, AWS</span>
                </div>
                <div className="flex justify-between">
                  <span>Impact:</span>
                  <span className="font-medium">Very High</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
