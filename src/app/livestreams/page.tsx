import React from "react";
import ContactButton from "@/components/ContactButton";
import HeroSection from "@/components/NewHero";

const ServiceOffering = () => {
  const SERVICE_OFFERINGS = [
    {
      label: "Put your live video to work.",
      description:
        "Reach everyone in real-time, whether you’re live streaming a conference or your company all-hands. Live streaming gives you a way to connect with your employees, customers, and community.",
    },
    {
      label: "Professional tools. Simple setup.",
      description:
        "TruStudio provides a simple setup process, scalable and flexible. Give your live streaming events professional polish without the hassle of an encoder. Easily share your screen and add lower thirds, full-screen graphics, and logos — straight from your browser.",
    },
    {
      label: "Live stream in full HD.",
      description:
        "Broadcast your events in full HD with adaptive streaming, giving your viewers the best quality across devices, even with limited bandwidth. And when your event is over, it’s auto-archived in up to 4K.",
    },
    {
      label: "Live production graphics ",
      description:
        "We take care of your lower thirds, transition graphics, next, currently happening, All graphics that makes your event looks straight out of broadcasting room, you’re covered",
    },
    {
      label: "Professional tools. Simple setup.",
      description:
        "TruStudio provides a simple setup process, scalable and flexible. Give your live streaming events professional polish without the hassle of an encoder. Easily share your screen and add lower thirds, full-screen graphics, and logos — straight from your browser.",
    },
    {
      label: "Livestream Host",
      description:
        "We fill in space for the empty session, you get your event stream and you get live moderation and feedback from your audience. Your online viewers are not left out but completely immersed",
    },
  ];
  return (
    <section className="container mx-auto lg:p-20 space-y-[100px] lg:py-60">
      <div className="flex flex-col lg:flex-row gap-6 lg:justify-between items-start">
        <div className="space-y-2">
          <p className="uppercase tracking-widest text-xs">what we offer</p>
          <h3 className="font-bold font-trajan text-2xl lg:text-4xl text-balance max-w-[600px]">
            Shatter the distance limitation for you event.
          </h3>
        </div>
        <ContactButton />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-5 lg:gap-10">
        {SERVICE_OFFERINGS.map((item, i) => {
          return (
            <div className="text-[#505050] dark:text-white space-y-4" key={i}>
              <p className="font-bold text-lg">{item.label}</p>
              <p className="text-sm">{item.description}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

const LivestreamingMarquee = () => {
  const LIVESTREAMING_OFFERINGS = [
    "Virtual Concerts",
    "Webcasting Services",
    "Church Live Streaming",
    "Paywall Platform",
    "Webinar Webcast",
    "Mobile Live Streaming",
    "Graduations",
    "Business Webcasting",
    "Facebook Live Streaming",
    "Zoom Integration",
  ];
  return (
    <div className="w-full overflow-hidden whitespace-nowrap py-10 bg-[#5D3C18] font-trajan rotate-[-2deg]">
      <p className="text-2xl  animate-marquee text-[#505050] dark:text-white">
        {LIVESTREAMING_OFFERINGS.map((item, i) => (
          <React.Fragment key={i}>
            <span key={i} className="mx-10">
              {item}
            </span>
            <span>|</span>
          </React.Fragment>
        ))}
      </p>
    </div>
  );
};

const LivestreamPage = () => {
  return (
    <>
      <HeroSection />
      <ServiceOffering />
      <LivestreamingMarquee />
    </>
  );
};

export default LivestreamPage;
