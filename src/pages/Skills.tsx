
import { Code, Database, Settings, Users, FileText, Target } from "lucide-react";
import { Link } from "react-router-dom";

const Skills = () => {
  const skillCategories = [
    {
      title: "Data Science & Analytics",
      icon: Database,
      color: "blue",
      skills: [
        { name: "Python for Data Analytics", level: 95 },
        { name: "Data Mining & Warehousing", level: 90 },
        { name: "Machine Learning", level: 88 },
        { name: "Statistical Analysis", level: 92 }
      ]
    },
    {
      title: "Cloud & Engineering",
      icon: Code,
      color: "purple",
      skills: [
        { name: "AWS Cloud Services", level: 85 },
        { name: "Data Engineering", level: 87 },
        { name: "Systems Engineering", level: 90 },
        { name: "Operations Research", level: 93 }
      ]
    },
    {
      title: "Project Management",
      icon: Settings,
      color: "green",
      skills: [
        { name: "Project Management", level: 90 },
        { name: "Grant Writing", level: 88 },
        { name: "Strategic Planning", level: 85 },
        { name: "Quality Assurance", level: 87 }
      ]
    },
    {
      title: "Leadership & Collaboration",
      icon: Users,
      color: "orange",
      skills: [
        { name: "Team Leadership", level: 92 },
        { name: "Collaboration Skills", level: 95 },
        { name: "Research Supervision", level: 90 },
        { name: "Faculty Management", level: 88 }
      ]
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: "bg-blue-100 text-blue-600 border-blue-200",
      purple: "bg-purple-100 text-purple-600 border-purple-200",
      green: "bg-green-100 text-green-600 border-green-200",
      orange: "bg-orange-100 text-orange-600 border-orange-200"
    };
    return colors[color as keyof typeof colors];
  };

  const getProgressColor = (color: string) => {
    const colors = {
      blue: "bg-blue-600",
      purple: "bg-purple-600",
      green: "bg-green-600",
      orange: "bg-orange-600"
    };
    return colors[color as keyof typeof colors];
  };

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
              <Link to="/skills" className="text-blue-600 font-medium">Skills</Link>
              <Link to="/services" className="text-gray-700 hover:text-blue-600 transition-colors">Services</Link>
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
            <h1 className="text-4xl font-bold text-gray-800 mb-4">Skills & Expertise</h1>
            <p className="text-xl text-gray-600">Technical proficiencies and professional competencies</p>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mt-6"></div>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {skillCategories.map((category, index) => {
              const IconComponent = category.icon;
              return (
                <div key={index} className="bg-white rounded-xl p-8 shadow-sm border border-gray-200 hover:shadow-lg transition-shadow">
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`p-3 rounded-lg ${getColorClasses(category.color)}`}>
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-800">{category.title}</h3>
                  </div>
                  
                  <div className="space-y-4">
                    {category.skills.map((skill, skillIndex) => (
                      <div key={skillIndex}>
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-gray-700 font-medium">{skill.name}</span>
                          <span className="text-gray-500 text-sm">{skill.level}%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div 
                            className={`h-2 rounded-full ${getProgressColor(category.color)} transition-all duration-700`}
                            style={{ width: `${skill.level}%` }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Core Competencies */}
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white mb-16">
            <h2 className="text-2xl font-bold text-center mb-8">Core Competencies</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              <div className="text-center">
                <Database className="w-8 h-8 mx-auto mb-2" />
                <p className="text-sm">Data Scientist</p>
              </div>
              <div className="text-center">
                <Code className="w-8 h-8 mx-auto mb-2" />
                <p className="text-sm">Data Engineer</p>
              </div>
              <div className="text-center">
                <Settings className="w-8 h-8 mx-auto mb-2" />
                <p className="text-sm">AWS Expert</p>
              </div>
              <div className="text-center">
                <FileText className="w-8 h-8 mx-auto mb-2" />
                <p className="text-sm">Grant Writer</p>
              </div>
              <div className="text-center">
                <Users className="w-8 h-8 mx-auto mb-2" />
                <p className="text-sm">Team Leader</p>
              </div>
              <div className="text-center">
                <Target className="w-8 h-8 mx-auto mb-2" />
                <p className="text-sm">Strategic Planner</p>
              </div>
            </div>
          </div>

          {/* Certifications & Tools */}
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-200">
              <h3 className="text-xl font-bold text-gray-800 mb-6">Technical Tools</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gray-50 p-3 rounded-lg text-center">
                  <p className="font-medium text-gray-800">Python</p>
                </div>
                <div className="bg-gray-50 p-3 rounded-lg text-center">
                  <p className="font-medium text-gray-800">R</p>
                </div>
                <div className="bg-gray-50 p-3 rounded-lg text-center">
                  <p className="font-medium text-gray-800">SQL</p>
                </div>
                <div className="bg-gray-50 p-3 rounded-lg text-center">
                  <p className="font-medium text-gray-800">MATLAB</p>
                </div>
                <div className="bg-gray-50 p-3 rounded-lg text-center">
                  <p className="font-medium text-gray-800">AWS</p>
                </div>
                <div className="bg-gray-50 p-3 rounded-lg text-center">
                  <p className="font-medium text-gray-800">Tableau</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-200">
              <h3 className="text-xl font-bold text-gray-800 mb-6">Research Areas</h3>
              <div className="space-y-3">
                <div className="bg-blue-50 p-3 rounded-lg">
                  <p className="font-medium text-blue-800">Mathematical Modeling</p>
                </div>
                <div className="bg-purple-50 p-3 rounded-lg">
                  <p className="font-medium text-purple-800">Operations Research</p>
                </div>
                <div className="bg-green-50 p-3 rounded-lg">
                  <p className="font-medium text-green-800">Machine Learning</p>
                </div>
                <div className="bg-orange-50 p-3 rounded-lg">
                  <p className="font-medium text-orange-800">Systems Engineering</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
