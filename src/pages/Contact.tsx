
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, Linkedin, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import { useState, useRef } from "react";
import emailjs from '@emailjs/browser';
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    const formData = new FormData(e.currentTarget);
    const templateParams = {
      firstName: formData.get('firstName'),
      lastName: formData.get('lastName'),
      email: formData.get('email'),
      phone: formData.get('phone'),
      subject: formData.get('subject'),
      message: formData.get('message'),
    };

    console.log('Sending email with params:', templateParams);

    try {
      const result = await emailjs.send(
        'service_ng3tgyo',
        'template_gzwh1ob',
        templateParams,
        'v0gt7AfdtVrUZ3PtR'
      );

      console.log('EmailJS success:', result);

      toast({
        title: "Message sent successfully!",
        description: "Thank you for your message. I'll get back to you within 24-48 hours.",
      });

      // Reset form using the ref instead of e.currentTarget
      if (formRef.current) {
        formRef.current.reset();
      }
    } catch (error) {
      console.error('EmailJS error:', error);
      toast({
        title: "Failed to send message",
        description: "Please try again or contact me directly via email.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
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
              <Link to="/skills" className="text-gray-700 hover:text-blue-600 transition-colors">Skills</Link>
              <Link to="/services" className="text-gray-700 hover:text-blue-600 transition-colors">Services</Link>
              <Link to="/projects" className="text-gray-700 hover:text-blue-600 transition-colors">Projects</Link>
              <Link to="/contact" className="text-blue-600 font-medium">Contact</Link>
            </div>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-6 py-16">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">Get In Touch</h1>
            <p className="text-xl text-gray-600">Ready to collaborate on your next project?</p>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mt-6"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-gray-800 mb-6">Let's Connect</h2>
                <p className="text-gray-600 leading-relaxed mb-8">
                  I'm always interested in discussing new research opportunities, collaborations, 
                  and innovative data science projects. Whether you're looking for academic guidance, 
                  research supervision, or data analytics solutions, I'd love to hear from you.
                </p>
              </div>

              {/* Contact Details */}
              <div className="space-y-6">
                <div className="flex items-center gap-4 p-4 bg-white rounded-lg shadow-sm border border-gray-200">
                  <div className="bg-blue-100 p-3 rounded-lg">
                    <Mail className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Email Address</h3>
                    <p className="text-gray-600">swkktech@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 bg-white rounded-lg shadow-sm border border-gray-200">
                  <div className="bg-green-100 p-3 rounded-lg">
                    <Phone className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Phone Number</h3>
                    <p className="text-gray-600">+91 97898 32722</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 bg-white rounded-lg shadow-sm border border-gray-200">
                  <div className="bg-blue-100 p-3 rounded-lg">
                    <Linkedin className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">LinkedIn Profile</h3>
                    <p className="text-gray-600">www.linkedin.com/in/pkk2</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 bg-white rounded-lg shadow-sm border border-gray-200">
                  <div className="bg-purple-100 p-3 rounded-lg">
                    <MapPin className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Location</h3>
                    <p className="text-gray-600">Chennai, India</p>
                  </div>
                </div>
              </div>

              {/* Availability */}
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg p-6 text-white">
                <h3 className="font-bold mb-2">Available for:</h3>
                <ul className="space-y-1 text-blue-100">
                  <li>• Research Collaborations</li>
                  <li>• Consulting Projects</li>
                  <li>• Academic Supervision</li>
                  <li>• Speaking Engagements</li>
                </ul>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-200">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Send a Message</h2>
              
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                      First Name
                    </label>
                    <Input 
                      id="firstName" 
                      name="firstName"
                      placeholder="Your first name" 
                      className="w-full" 
                      required 
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                      Last Name
                    </label>
                    <Input 
                      id="lastName" 
                      name="lastName"
                      placeholder="Your last name" 
                      className="w-full" 
                      required 
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address
                  </label>
                  <Input 
                    id="email" 
                    name="email"
                    type="email" 
                    placeholder="your.email@example.com" 
                    className="w-full" 
                    required 
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <Input 
                    id="phone" 
                    name="phone"
                    type="tel" 
                    placeholder="+91 98765 43210" 
                    className="w-full" 
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    Subject
                  </label>
                  <Input 
                    id="subject" 
                    name="subject"
                    placeholder="What would you like to discuss?" 
                    className="w-full" 
                    required 
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <Textarea 
                    id="message" 
                    name="message"
                    placeholder="Tell me about your project or inquiry..." 
                    rows={6} 
                    className="w-full" 
                    required 
                  />
                </div>

                <Button 
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3"
                >
                  {isLoading ? "Sending..." : "Send Message"}
                </Button>

                <p className="text-sm text-gray-500 text-center">
                  I typically respond within 24-48 hours during business days.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
