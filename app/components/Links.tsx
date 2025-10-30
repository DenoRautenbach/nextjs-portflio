import Image from "next/image";
import GitHubLink from "../assets/Home/GitHubLink.png"
import LinkedIn from "../assets/Home/LinkedIn.png"
import Instagram from "../assets/Home/Instagram.png"

const LinksLayout = () => {
    return (
        <div className="socialLinks flex justify-center pt-16" >
                <div className="">
                <Image
                className=""
                src={LinkedIn}
                alt="1st image"
                />
                </div>
                <div className="">
                <Image
                className=""
                src={GitHubLink}
                alt="2nd image"
                />
                </div>
                <div className="">
                <Image
                className=""
                src={Instagram}
                alt="3rd image"
                />
                </div>
            </div>
    )
}

export default LinksLayout;