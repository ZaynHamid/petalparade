import { TwitterIcon, FacebookIcon, InstagramIcon } from "../icons";
import Image from "../assets/pexels-ylanite-koppens-1445419.jpg";
import Image1 from "../assets/pexels-benjamin-lehman-1436132.jpg";
import Image2 from "../assets/pexels-scott-webb-185498.jpg";
import Image3 from "../assets/pexels-madison-inouye-1382393.jpg";
import Image4 from "../assets/pexels-nadine-wuchenauer-1563650.jpg";
import Image5 from "../assets/pexels-andré-beltrame-1449462.jpg";
const Footer = () => {
    return <>
        <div className="w-full bg-[#fbf8f9] mt-32 p-8">
            <div className="md:flex justify-between container mx-auto">
                <div className="text-[#222] md:w-1/2">
                    <h2 className="md:text-3xl text-xl uppercase font-semibold">Petal Parade</h2>
                    <p className="my-3 md:text-lg text-[14px] w-2/3 text-[#6c757d]">Bringing nature to your doorstep - We believe that everyone
                        should have access to the beauty & benefits of nature.</p>

                    <h1 className="text-[#6c757d]">+1 123 456 789</h1>
                    <div className="flex gap-3 my-4">
                        <TwitterIcon />
                        <FacebookIcon />
                        <InstagramIcon />
                    </div>

                </div>
                <div className="md:w-1/2 mx-auto text-[#222]">
                    <h1 className="font-semibold text-2xl my-3">Useful Links</h1>
                    <a className="text-lg text-[#000]">Home</a><br />
                    <a className="text-lg text-[#000]">About</a><br />
                    <a className="text-lg text-[#000]">Product</a><br />
                    <a className="text-lg text-[#000]">Contact</a><br />
                </div>
                <div className="md:mt-0 mt-8 md:w-1/2 mx-auto" style={{ color: "#222" }}>
                    <h1 className="text-2xl font-semibold mb-4">Shop Instagram</h1>
                    <div className="flex">
                        <img src={Image} alt="flower" className="md:w-[200px] w-[100px]" />
                        <img src={Image1} alt="flower" className="md:w-[200px] w-[100px]" />
                        <img src={Image2} alt="flower" className="md:w-[200px] w-[100px]" />
                    </div>    <div className="flex">
                        <img src={Image3} alt="flower" className="md:w-[200px] w-[100px]" />
                        <img src={Image4} alt="flower" className="md:w-[200px] w-[100px]" />
                        <img src={Image5} alt="flower" className="md:w-[200px] w-[100px]" />
                    </div>
                </div>
            </div>
        </div>
    </>
}

export default Footer;

