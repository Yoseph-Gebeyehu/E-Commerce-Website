import React from "react";
import Title from "../components/Title";
import { assets } from "../assets/frontend_assets/assets";
import Newsletterbox from "../components/Newsletterbox";

const About = () => {
  return (
    <div>
      <div className="text-2xl text-start pt-8 border-t ">
        <Title text1={"ABOUT"} text2={"US"} />
        <div className="my-10 flex flex-col md:flex-row gap-16">
          <img
            className="w-full md:max-w-[450px]"
            src={assets.about_img}
            alt=""
          />
          <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600 ">
            <p className="text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Doloremque recusandae rerum qui! Alias accusamus consequuntur hic
              harum dolores laboriosam velit!
            </p>
            <p className="text-gray-600">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Repudiandae, quisquam?
            </p>
            <b className="text-gray-800 ">Our Mission</b>
            <p className="text-gray-600">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
              officia laudantium laborum. Non optio nihil magnam aliquid dicta
              omnis. Nisi molestias obcaecati eos deserunt blanditiis quisquam
              sint nostrum quos culpa?
            </p>
          </div>
        </div>

        <div className="text-xl py-4">
          <Title text1={"WHY"} text2={"CHOOSE US"} />
        </div>
        <div className="flex flex-col md:flex-row text-sm mb-20">
          <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
            <b>Quality Assurance:</b>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Accusantium, ab officia. Aliquam facere dolorem, perferendis
              dolores corrupti doloribus eligendi hic fugit officiis excepturi
              asperiores. Iusto optio corrupti possimus culpa molestiae!
            </p>
          </div>
          <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
            <b>Convenience:</b>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Accusantium, ab officia. Aliquam facere dolorem, perferendis
              dolores corrupti doloribus eligendi hic fugit officiis excepturi
              asperiores. Iusto optio corrupti possimus culpa molestiae!
            </p>
          </div>
          <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
            <b>Exceptional Customer Service:</b>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Accusantium, ab officia. Aliquam facere dolorem, perferendis
              dolores corrupti doloribus eligendi hic fugit officiis excepturi
              asperiores. Iusto optio corrupti possimus culpa molestiae!
            </p>
          </div>
        </div>

        <Newsletterbox />
      </div>
    </div>
  );
};

export default About;
