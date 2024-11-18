import hero from "../asserts/images/page/hero.webp"
import reasons from "./Data_Reason";
import services from './Data_Services';
import teamMembers from './Data_OurTeam';
import contactDetails from "./Data_ContacDetails";
export const homedata={
    hero:{
    title:"Empowering Your Business with Cutting-Edge Software Solutions",
    content:" At [Your Company Name], we create innovative software solutions that help businesses thrive. Our team specializes in web and mobile development, AI, and cloud technologies to deliver scalable, user-friendly products. We partner with companies of all sizes to streamline operations, enhance customer engagement, and drive growth. With a focus on cutting-edge technology and user-centered design, we turn your vision into impactful software that evolves with your business. Let’s build a future-ready solution together!",
    image:hero,
    button:{
        content:"Get Started",
        color:"bg-green-600 text-white hover:bg-green-400",
        link:"#contac-us"
    
    }
}
}

export const servicedata={
    services:services
}


export const aboutusdata={
    title:"About Us",
    content:"We are a leading software development company, delivering cutting-edge solutions tailored to meet the specific needs of businesses around the globe. Our goal is to empower companies with scalable, reliable, and innovative technology.",
    why_we_us:" Our approach sets us apart from other software development firms. With years of experience, a client-first mentality, and a commitment to innovation, we ensure that your business thrives in the digital age.",
    reasons
}

export const ourTeamData={
    teamMembers
}

export const contactusData={
    title:"Contact Us",
    content:"Have a question or want to discuss a project? Reach out to us through any of the following channels.",
   contactDetails
}