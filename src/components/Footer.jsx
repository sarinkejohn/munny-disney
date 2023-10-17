import React from "react";
import {
  FaInstagram,
  FaFacebook,
  FaYoutube,
  FaTwitter,
  FaTiktok,
  FaLinkedinIn
} from "react-icons/fa";
import { Link } from "react-router-dom";
// copy right reserveved done by Sarinke john Sarijore  whatsup me +255789204208

function Footer() {
  return (
    <div className="max-w-[1920px] m-auto px-4 py-2 bg-[#24262b]">
      <div className="py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300">
        <div>
          <h2 className="text-3xl p-4 w-full">
            Munny<span className="font-bold text-orange-700">+Shows</span>
          </h2>
          <p>
            “You don't understand! I coulda had class. I coulda been a
            contender. I could've been somebody, instead of a bum, which is what
            I am.” -On the Waterfront, 1954
          </p>{" "}
          <br />
          <p>
            “My mama always said life was like a box of chocolates. You never
            know what you're gonna get.” -Forrest Gump, 1994
          </p>
          <div className="flex justify-between md:w-[75%] my-6 cursor-pointer">
            <a
              className="flex justify-between md:w-[75%] my-6 cursor-pointer "
              href="https://www.linkedin.com/in/john-cyper-60a481143/"
            >
              <FaLinkedinIn size={30}   className=" hover:text-blue-600"/>
              <FaFacebook size={30}  className=" hover:text-blue-600"/>
              <FaInstagram size={30}  className=" hover:text-blue-600"/>
              <FaTiktok size={30} className=" hover:text-blue-600" />
              <FaTwitter size={30} className=" hover:text-blue-600" />
              <FaYoutube size={30}  className=" hover:text-blue-600"/>
            </a>
          </div>
        </div>
        <div className="lg:col-span-2 flex justify-between mt-6 ">
          <div>
            <h6 className="font-medium text-[#969696]">Our Locations</h6>
            <ul className="text-[#00df9a]">
              <li className="py-2 text-sm">Kinondoni</li>
              <li className="py-2 text-sm">Mikocheni</li>
              <li className="py-2 text-sm">Kirakoo</li>
              <li className="py-2 text-sm">Mlinani City</li>
            </ul>
          </div>
          <div>
            <h6 className="font-medium text-[#969696]">Our Locations</h6>
            <ul className="text-[#00df9a]">
              <li className="py-2 text-sm">Kinondoni</li>
              <li className="py-2 text-sm">Mikocheni</li>
              <li className="py-2 text-sm">Kirakoo</li>
              <li className="py-2 text-sm">Mlinani City</li>
            </ul>
          </div>
          <div>
            <h6 className="font-medium text-[#969696]">Our Locations</h6>
            <ul className="text-[#00df9a]">
              <li className="py-2 text-sm">Kinondoni</li>
              <li className="py-2 text-sm">Mikocheni</li>
              <li className="py-2 text-sm">Kirakoo</li>
              <li className="py-2 text-sm">Mlinani City</li>
            </ul>
          </div>
          <div>
            <h6 className="font-medium text-[#969696]">Our Locations</h6>
            <ul className="text-[#00df9a]">
              <li className="py-2 text-sm">Kinondoni</li>
              <li className="py-2 text-sm">Mikocheni</li>
              <li className="py-2 text-sm">Kirakoo</li>
              <li className="py-2 text-sm">Mlinani City</li>
            </ul>
          </div>
        </div>
        <p>
          {" "}
          &copy; right reserved done by Sarinke john whatsup me +255789204208
        </p>
      </div>
      <p className="text-center -mt-20">
        &copy; right reserved done by Sarinke john whatsup me +255789204208
      </p>
    </div>
  );
}

export default Footer;
