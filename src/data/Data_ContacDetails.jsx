import { FaEnvelope, FaPhoneAlt, FaWhatsapp } from "react-icons/fa"

const contactDetails=[
    {
        type:"mail",
        link:"mailto:tensoragri@gmail.com",
        icon:<FaEnvelope/>,
        title:"Email Us",
        content:"Send us an email and we’ll get back to you soon.",
        text:"ensoragri@gmail.com"
    },
    {
        type:"whatsapp",
        link:"https://wa.me/+96777989787",
        icon:<FaWhatsapp/>,
        title:"WhatsApp Us",
        content:"Message us on WhatsApp for instant support",
        text:"+96777989787"
    },
    {
        type:"call",
        link:"tel:+96777989787",
        icon:<FaPhoneAlt/>,
        title:"Call Us",
        content:"Give us a call and let’s discuss your project.",
        text:"+96777989787"
    }
]
export default contactDetails