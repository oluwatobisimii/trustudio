import Image from "next/image";

const AboutSection = () => {
  return (
    <section className=" bg-white dark:bg-black dark:text-white w-full lg:py-20">
      <div className="container mx-auto flex flex-col md:flex-row justify-center py-25 px-4 md:px-20">
        {/* Left: Logo & Play Button */}
        <div className="flex flex-col items-center justify-center bg-gray-200 w-full md:w-1/3 aspect-[9/16] mr-0 md:mr-12 rounded-md relative overflow-hidden">
          {/* Video Placeholder */}
          {/* <iframe
            width="491"
            height="872"
            src="https://www.youtube.com/embed/LCjyv9EqEaw?autoplay=1&mute=1&loop=1&playlist=LCjyv9EqEaw"
            title="I Made It #graduation #prom #vacation #education #congratulations"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
            className="w-full h-full object-cover rounded-md"
          ></iframe> */}
          <video
            src={"./TeamShoot.mov"}
            autoPlay
            muted
            loop
            className="w-full h-full object-cover rounded-md"
          />
        </div>

        {/* Right: Text & Stats */}
        <div className="flex-1 flex flex-col gap-8 mt-8 md:mt-0 max-w-[600px]">
          <div>
            <h5 className="text-xs font-bold tracking-wide mb-2 text-gray-700 dark:text-white">
              ABOUT US
            </h5>
            <h2 className="text-3xl md:text-4xl font-bold mb-4  leading-tight font-trajan">
              At TruStudio, Everything
              <br />
              Starts With A Story
            </h2>
            <p className="text-gray-600 dark:text-white mb-2">
              Our heart beats for turning events into experiences you won’t
              forget. We don’t just cover events; we craft immersive,
              story-driven moments that pull audiences right in.
            </p>
            <p className="text-gray-600 dark:text-white">
              And that storytelling magic? It flows into everything we create.
              Documentaries that uncover truth and move you. B2B & B2C Content
              that connects brands with people. Short Films that pack a powerful
              punch. No matter the format, we tell your story in the way your
              audience wants to hear it – relevant, engaging, and impossible to
              ignore.
            </p>
          </div>
          <button className="bg-[#5C4023] text-white px-8 py-3 rounded-md font-semibold w-fit shadow hover:bg-[#3A2C1A] transition mb-4">
            LETS TALK NOW →
          </button>
          <div className="relative w-full flex-1">
            <Image
              src="/event.png"
              alt="Event"
              width={600}
              height={200}
              className="rounded-md object-cover w-11/12 h-full"
            />
            <div className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-[#222] bg-opacity-95 rounded-md px-8 py-6 flex flex-col gap-4 w-[340px]">
              <div className="flex items-center gap-3 text-white text-lg font-semibold">
                <svg width="28" height="28" fill="none" viewBox="0 0 24 24">
                  <path
                    fill="#fff"
                    d="M19 4h-1V2h-2v2H8V2H6v2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2ZM5 20V8h14v12H5Z"
                  />
                  <path
                    fill="#fff"
                    d="M7 10h2v2H7v-2Zm4 0h2v2h-2v-2Zm4 0h2v2h-2v-2ZM7 14h2v2H7v-2Zm4 14h2v2h-2v-2Zm4 14h2v2h-2v-2Z"
                  />
                </svg>
                200+ Events
              </div>
              <hr className="border-gray-700" />
              <div className="flex items-center gap-3 text-white text-lg font-semibold">
                <svg width="28" height="28" fill="none" viewBox="0 0 24 24">
                  <path
                    fill="#fff"
                    d="M16 11a4 4 0 1 0-8 0v2a4 4 0 0 0 8 0v-2Zm-4-2a2 2 0 0 1 2 2v2a2 2 0 0 1-4 0v-2a2 2 0 0 1 2-2Zm6 8a6 6 0 0 0-12 0v1a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1v-1Zm-6-4a4 4 0 0 1 4 4v1H8v-1a4 4 0 0 1 4-4Z"
                  />
                </svg>
                70+ Satisfied Clients
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
