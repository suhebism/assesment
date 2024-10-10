import React from "react";
import ProjectCard from "@/components/ProjectCard";
import PageTransition from "@/components/PageTransition";
import chargespot from "@/public/image.png";
import cookie from '@/public/cookie-.png'
import spilledCoffee from '@/public/spilled-coffee-cup.png'
import pizza from '@/public/pizza.png'
import pastry from '@/public/cream-pastry.png'


const page = () => {
  return (
    <PageTransition>
    <div className="px-10 py-20 flex flex-col gap-5 ">
      <h1 className='text-3xl font-black text-[#FAE9D0] text-center'>Projects</h1>
      <div className="flex gap-5 items-center justify-center">
        <ProjectCard
          img={chargespot}
          img2={cookie}
          title="ChargeSpot"
          desc="EV Vehicle"
          projectDetail=" Streamlining EV Charging with User-Centered Design"
        />
        <ProjectCard
          img={chargespot}
          img2={spilledCoffee}
          title="Centarius.app"
          desc="Gaming platform"
          projectDetail="Redefining Gaming with Seamless Contests & Rewards"
        />
      </div>
      <div className="flex gap-5 items-center justify-center">
        <ProjectCard
          img={chargespot}
          img2={pizza}
          title="Homeshiksha"
          desc="Online Tutoring"
          projectDetail="Designing a Seamless Tutor-Student Platform"
        />
        <ProjectCard
          img={chargespot}
          img2={pastry}
          title="Quiz App"
          desc="UPSC Quiz App"
          projectDetail="UPSC Preparation:Quiz App for Focused Learning"
        />
      </div>
      <p className='text-3xl font-black text-[#FAE9D0] text-center'>Plenty left untold</p>
    </div>
    </PageTransition>
  );
};

export default page;
