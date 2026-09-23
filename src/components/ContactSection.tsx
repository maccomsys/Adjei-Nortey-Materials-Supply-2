import React, { useState } from 'react';
import {
  MapPin,
  Phone,
  ArrowRight,
  Mail,
  Send,
  CheckCircle2,
  Clock,
  Sparkles,
  X,
} from 'lucide-react';
import { COMPANY_DETAILS, IMAGES } from '../data/materialsData';

interface ContactSectionProps {
  onOpenQuoteModal: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onOpenQuoteModal }) => {
  const [directMessageOpen, setDirectMessageOpen] = useState(false);
  const [msgName, setMsgName] = useState('');
  const [msgPhone, setMsgPhone] = useState('');
  const [msgText, setMsgText] = useState('');
  const [msgSent, setMsgSent] = useState(false);

  const handleSendDirectMessage = (e: React.FormEvent) => {
    e.preventDefault();
    setMsgSent(true);
    setTimeout(() => {
      setMsgSent(false);
      setDirectMessageOpen(false);
      setMsgName('');
      setMsgPhone('');
      setMsgText('');
    }, 2000);
  };

  return (
    <section className="py-16 sm:py-20 bg-gray-50 border-t border-gray-200/60" id="contact">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          {/* Left: Minor Color Card "Start Your Modern Construction Today" */}
          <div className="lg:col-span-7 bg-[#080e21] rounded-3xl p-8 sm:p-12 relative overflow-hidden text-white flex flex-col justify-between min-h-[340px] shadow-xl">
            {/* Background image overlay */}
            <div className="absolute inset-0 opacity-25 pointer-events-none mix-blend-luminosity">
              <img
                alt="Construction background"
                className="w-full h-full object-cover"
                src={IMAGES.hero}
                referrerPolicy="no-referrer"
              />
            </div>

            <div className="relative z-10 space-y-4 max-w-lg">
              <h2 className="text-3xl sm:text-4xl font-extrabold font-display leading-tight">
                Start Your Modern <br />
                Construction Today
              </h2>
              <p className="text-sm text-gray-300 leading-relaxed">
                Get premium quality building materials delivered straight to your site on time.
                Contact {COMPANY_DETAILS.name} to schedule your supply.
              </p>
            </div>

            <div className="relative z-10 pt-8 flex flex-wrap gap-4 items-center">
              <a
                className="inline-flex items-center gap-2 bg-[#EB4D23] hover:bg-[#D03B13] text-white font-bold px-7 py-3.5 rounded-full shadow-lg shadow-[#EB4D23]/30 transition hover:scale-[1.02]"
                href="#quote-form"
              >
                <span>Contact Us Now</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <button
                onClick={() => setDirectMessageOpen(true)}
                className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold text-xs px-5 py-3.5 rounded-full transition cursor-pointer"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>Send Quick Dispatch Note</span>
              </button>
            </div>
          </div>

          {/* Right: Location/Phone card & Orange Tile */}
          <div className="lg:col-span-5 flex flex-col gap-6 justify-between">
            {/* White Card: Location & Phone */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-gray-200/80 shadow-xs space-y-6 flex-1 flex flex-col justify-center">
              {/* Location Item */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-[#FFF2EE] text-[#EB4D23] flex items-center justify-center flex-shrink-0 text-lg">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs uppercase tracking-wider font-bold text-gray-400 block mb-0.5">
                    Our Location
                  </span>
                  <p className="text-sm font-bold text-gray-900">{COMPANY_DETAILS.location}</p>
                  <p className="text-xs text-gray-500 mt-0.5">Nationwide delivery available</p>
                </div>
              </div>

              <div className="border-t border-gray-100"></div>

              {/* Phone Item */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-[#FFF2EE] text-[#EB4D23] flex items-center justify-center flex-shrink-0 text-lg">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs uppercase tracking-wider font-bold text-gray-400 block mb-0.5">
                    Phone
                  </span>
                  <a
                    className="text-base font-extrabold text-gray-900 hover:text-[#EB4D23] transition block font-mono"
                    href={`tel:${COMPANY_DETAILS.phone}`}
                  >
                    {COMPANY_DETAILS.phone}
                  </a>
                  <p className="text-xs text-gray-500 mt-0.5">Available 24/7 for urgent orders</p>
                </div>
              </div>
            </div>

            {/* Orange Tile: "Contact Us Today" */}
            <a
              className="bg-[#EB4D23] hover:bg-[#D03B13] transition-colors rounded-3xl p-6 text-white flex items-center justify-between shadow-lg shadow-[#EB4D23]/20 group cursor-pointer"
              href={`tel:${COMPANY_DETAILS.phone}`}
            >
              <div>
                <span className="text-xs uppercase font-bold tracking-wider text-white/80 block">
                  Quick Connect
                </span>
                <p className="text-xl sm:text-2xl font-extrabold font-display">Contact Us Today</p>
              </div>
              <div className="w-12 h-12 rounded-2xl bg-white/20 group-hover:scale-110 transition-transform flex items-center justify-center text-white text-lg">
                <Phone className="w-6 h-6" />
              </div>
            </a>
          </div>
        </div>
      </div>

      {/* Direct Dispatch Note Modal */}
      {directMessageOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
          <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl relative border border-gray-100">
            <button
              onClick={() => setDirectMessageOpen(false)}
              className="absolute top-5 right-5 p-2 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-600 transition"
            >
              <X className="w-5 h-5" />
            </button>

            <h3 className="text-xl font-black text-gray-900 font-display mb-1">
              Direct Dispatch Message
            </h3>
            <p className="text-xs text-gray-500 mb-5">
              Send a direct request directly to Mr. Adjei Nortey and the dispatch logistics desk.
            </p>

            {msgSent ? (
              <div className="py-8 text-center space-y-2">
                <CheckCircle2 className="w-12 h-12 text-emerald-500 mx-auto" />
                <h4 className="font-bold text-gray-900">Message Received</h4>
                <p className="text-xs text-gray-500">
                  Our dispatch coordinator will call you back shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSendDirectMessage} className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase mb-1">
                    Your Name
                  </label>
                  <input
                    required
                    value={msgName}
                    onChange={(e) => setMsgName(e.target.value)}
                    placeholder="e.g. Kwesi Mensah"
                    className="w-full px-3.5 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-[#EB4D23]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase mb-1">
                    Phone Number
                  </label>
                  <input
                    required
                    value={msgPhone}
                    onChange={(e) => setMsgPhone(e.target.value)}
                    placeholder="0244520024"
                    className="w-full px-3.5 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-[#EB4D23]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase mb-1">
                    Site Location &amp; Material Needed
                  </label>
                  <textarea
                    required
                    rows={3}
                    value={msgText}
                    onChange={(e) => setMsgText(e.target.value)}
                    placeholder="e.g. Need 4 trips of 3/4 quarry stones at East Legon Hills tomorrow morning."
                    className="w-full px-3.5 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-[#EB4D23]"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-[#EB4D23] hover:bg-[#D03B13] text-white font-bold py-3 px-6 rounded-xl flex items-center justify-center gap-2 cursor-pointer shadow-md shadow-[#EB4D23]/20"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Dispatch Request</span>
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </section>
  );
};
