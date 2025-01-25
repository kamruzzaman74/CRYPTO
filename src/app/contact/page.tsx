import React from 'react';

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-12 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-blue-600 mb-6">Get in Touch with Marketaven</h1>
        <p className="text-lg text-gray-700 mb-8">
          We would love to hear from you! Whether you have questions about our services, need assistance, or just want to connect,
          our team is here to help. Fill out the form below or reach out through any of the channels provided.
        </p>

        {/* Contact Form */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold text-blue-500 mb-4">Contact Form</h2>
            <form>
              <div className="mb-4">
                <label className="block text-lg text-gray-700">Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Your Name"
                />
              </div>
              <div className="mb-4">
                <label className="block text-lg text-gray-700">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Your Email"
                />
              </div>
              <div className="mb-4">
                <label className="block text-lg text-gray-700">Message</label>
                <textarea
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  
                  placeholder="Your Message"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full py-3 px-6 bg-blue-600 text-white text-lg rounded-lg hover:bg-blue-700 transition"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold text-blue-500 mb-4">Our Contact Info</h2>
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <span className="text-blue-600 text-2xl">📞</span>
                <p className="text-lg text-gray-700">+1 234 567 890</p>
              </div>
              <div className="flex items-center space-x-4">
                <span className="text-blue-600 text-2xl">📧</span>
                <p className="text-lg text-gray-700">contact@marketaven.com</p>
              </div>
              <div className="flex items-center space-x-4">
                <span className="text-blue-600 text-2xl">🌍</span>
                <p className="text-lg text-gray-700">123 Crypto Street, Blockchain City, USA</p>
              </div>
            </div>
          </div>
        </div>

        {/* Interactive Map */}
        <div className="mt-12">
          <h2 className="text-2xl font-semibold text-blue-500 mb-6">Find Us on the Map</h2>
          <div className="relative w-full h-96 rounded-lg overflow-hidden shadow-lg">
            <iframe
              className="absolute top-0 left-0 w-full h-full"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.0500160782067!2d-122.4194154846817!3d37.77492927975854!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085808d7a63d7b1%3A0x6ff34b2ed72db1c!2sSan%20Francisco%2C%20CA!5e0!3m2!1sen!2sus!4v1632229222222!5m2!1sen!2sus"
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
