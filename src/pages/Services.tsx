
import { Search, FileText, Database, Settings } from "lucide-react";
import { Link } from "react-router-dom";

const Services = () => {
  const services = [
    {
      icon: Search,
      title: "Research Guidance",
      description: "Comprehensive research mentorship and supervision for graduate students and academic professionals. Expert guidance in mathematical modeling, data analysis methodologies, and research publication strategies.",
      features: [
        "PhD & Master's thesis supervision",
        "Research methodology training",
        "Statistical analysis guidance",
        "Publication support"
      ]
    },
    {
      icon: FileText,
      title: "Project Proposal Development",
      description: "Strategic development of compelling research proposals and grant applications. Specialized expertise in securing funding from national and international research councils.",
      features: [
        "Grant proposal writing",
        "Budget planning & justification",
        "Risk assessment & mitigation",
        "Compliance & ethical review"
      ]
    },
    {
      icon: Database,
      title: "Data Analysis & Machine Learning",
      description: "Advanced data analytics services using cutting-edge machine learning techniques. Transform raw data into actionable insights for academic research and industry applications.",
      features: [
        "Predictive modeling",
        "Statistical analysis",
        "Data visualization",
        "Algorithm development"
      ]
    },
    {
      icon: Settings,
      title: "Data Science & Engineering Solutions",
      description: "Comprehensive data science solutions including cloud infrastructure, data warehousing, and engineering pipelines. Expertise in AWS and modern data technologies.",
      features: [
        "Cloud data architecture",
        "ETL pipeline development",
        "Data warehouse design",
        "Performance optimization"
      ]
    }
  ];

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
              <Link to="/services" className="text-blue-600 font-medium">Services</Link>
              <Link to="/projects" className="text-gray-700 hover:text-blue-600 transition-colors">Projects</Link>
              <Link to="/contact" className="text-gray-700 hover:text-blue-600 transition-colors">Contact</Link>
            </div>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-6 py-16">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">Professional Services</h1>
            <p className="text-xl text-gray-600">Expertise Service! Let's check it out</p>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mt-6"></div>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div key={index} className="bg-white rounded-xl p-8 shadow-sm border border-gray-200 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <div className="text-center mb-6">
                    <div className="bg-blue-100 w-16 h-16 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="w-8 h-8 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 mb-3">{service.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{service.description}</p>
                  </div>
                  
                  <div className="space-y-3">
                    <h4 className="font-semibold text-gray-800 text-sm uppercase tracking-wide">Key Features:</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center gap-2 text-gray-600">
                          <div className="w-2 h-2 bg-blue-600 rounded-full flex-shrink-0"></div>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Process Section */}
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white mb-16">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold mb-4">My Working Process</h2>
              <p className="text-blue-100">A systematic approach to delivering exceptional results</p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-white/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold">1</span>
                </div>
                <h3 className="font-semibold mb-2">Business Planning</h3>
                <p className="text-blue-100 text-sm">Initial consultation and comprehensive project analysis</p>
              </div>
              
              <div className="text-center">
                <div className="bg-white/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold">2</span>
                </div>
                <h3 className="font-semibold mb-2">Design Strategy</h3>
                <p className="text-blue-100 text-sm">Strategic approach development and methodology design</p>
              </div>
              
              <div className="text-center">
                <div className="bg-white/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold">3</span>
                </div>
                <h3 className="font-semibold mb-2">Grow Your Business</h3>
                <p className="text-blue-100 text-sm">Implementation and continuous improvement for optimal results</p>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Ready to Start Your Project?</h2>
            <p className="text-gray-600 mb-6">Let's discuss how I can help you achieve your research and data science goals.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium transition-colors"
              >
                Get Started
              </Link>
              <Link 
                to="/projects" 
                className="bg-gray-100 hover:bg-gray-200 text-gray-800 px-8 py-3 rounded-lg font-medium transition-colors"
              >
                View Projects
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
