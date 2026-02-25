import React from "react";
import LawalAliyu from "@/assets/images/LawalAliyu.jpg";
import IkudayisiGbolahan from "@/assets/images/IkudayisiGbolahan.jpg";
import MuhammedOpeyemi from "@/assets/images/MuhammedOpeyemi.jpg";
import OlayiwolaBoluwatife from "@/assets/images/OlayiwolaBoluwatife.jpg";
import OmisoreGabriel from "@/assets/images/OmisoreGabriel.jpg";
import Image from "next/image";

const STAFF = [
  {
    name: "Ikudayisi Gbolahan",
    img: IkudayisiGbolahan,
  },
  {
    name: "Olayiwola Boluwatife",
    img: OlayiwolaBoluwatife,
  },
  {
    name: "Lawal Aliyu",
    img: LawalAliyu,
  },
  {
    name: "Omisore Gabriel",
    img: OmisoreGabriel,
  },
  {
    name: "Muhammed Opeyemi",
    img: MuhammedOpeyemi,
  },
];
const AboutPage = () => {
  return (
    <div>
      <section className="w-full h-screen flex items-center justify-center">
        <div className="w-full h-full relative">
          <video
            src={"./TeamShoot.mov"}
            autoPlay
            muted
            loop
            className="w-full h-full object-cover object-center rounded-md"
          ></video>
        </div>
      </section>
      <section className="container mx-auto py-20 space-y-10">
        <h2 className="font-trajan text-      4xl font-bold text-center">
          Meet The Team
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-10 xl:grid-cols-3">
          {STAFF.map((member, i) => (
            <div
              key={i}
              className="flex flex-col items-center space-y-4 aspect-[322/422] relative"
            >
              <Image
                src={member.img}
                alt={member.name}
                className=" object-cover"
              />
              <div className="bg-white absolute bottom-10 left-1/2 right-0 p-2 w-4/5 transform -translate-x-1/2 p-6">
                <p className="text-lg font-semibold text-[#333]">
                  {member.name}
                </p>
                <p className="text-xs font-semibold text-[#5f5f5f] uppercase tracking-widest">
                  Cinematographer
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
