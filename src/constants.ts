import { Banner, DropdownItem } from "./interfaces";

export const SERVICES: DropdownItem[] = [
  { slug: "/services/odc" || "/", title: "Offshore development" },
  { slug: "/services/mobile-development", title: "Mobile Development" },
  {
    slug: "/services/web-and-web-app-development",
    title: "Web Application Development",
  },

  { slug: "/services/iot", title: "Internet of Things (IOT)" },
  { slug: "/services/ai", title: "Artificial Intelligence" },
];

export const ABOUTUS = [
  { slug: "/about-us/human-resource", title: "Human Resource" },
  { slug: "/about-us/technical-capability", title: "Technical Capability" },
  {
    slug: "/about-us/our-process",
    title: "Our process",
  },

  { slug: "/about-us/quality-assurance", title: "Quality Assurance" },
  { slug: "/about-us/ceo-sta", title: "CEO Statement" },
];

export const BannerList: Banner[] = [
  {
    path: "/",
    title: "The Professional SoftwareDevelopment Service Provider",
    description:
      "Our senior management team has about 10 years of domestic and international IT experience and technological accomplishments.",
    text: "center",
  },
  {
    path: "/services" || "/services/odc",
    title: "OFFSHORE DEVELOPMENT CENTER (ODC)",
    description:
      "VMO has been offering reliable and affordable ODC to customer worldwide since 2012 with power of the top Vietnam senior software developers in the heart of Hanoi, Vietnam",
    text: "left",
    details:
      "VMO has been offering reliable and affordable ODC to customer worldwide since 2010 with power of the top Vietnam senior software developers in the heart of Hanoi, Vietnam. ODC is the ideal choice for companies that don’t have an internal IT department capable of the full cycle of software development and would like to outsource the whole IT processes on VMO premise.",
    logoImage: "	https://www.vmogroup.com/static/media/ic_center.c720c5e0.svg",
  },
  {
    path: "/services/mobile-development",
    title: "MOBILE DEVELOPMENT",
    description:
      "Develop powerful, highly usable mobile apps that solve business problems, attract users, and reinforce your brand! VMO flagship team in engineering and development are the creators of +100 excellent and profitable applications that are loved globally by the users.",
    text: "left",
    details:
      "Develop powerful, highly usable mobile apps that solve business problems, attract users, and reinforce your brand! VMO flagship team in engineering and development are the creators of +100 excellent and profitable applications that are loved globally by the users.",
    logoImage:
      "https://www.vmogroup.com/static/media/ic_smartphone.857cb01b.svg",
  },
  {
    path: "/services/web-and-web-app-development",
    title: "WEB AND WEB-APP DEVELOPMENT",
    description:
      "We offer end-to-end Web and Web application development, from planning sitemap and wireframe, design page layouts to actual implementation and maintenance. VMO is proud to providing tailor-made, cost-effective, highly scalable and rich interactive web apps for clients across various business sectors.",
    text: "left",
    details:
      "We offer end-to-end Web and Web application development, from planning sitemap and wireframe, design page layouts to actual implementation and maintenance. VMO is proud to providing tailor-made, cost-effective, highly scalable and rich interactive web apps for clients across various business sectors.",
    logoImage: "https://www.vmogroup.com/static/media/ic_code_web.0fcc504c.svg",
  },
  {
    path: "/services/iot",
    title: "INTERNET OF THINGS (IOT)",
    description:
      "VMO offers complete IoT enterprise solutions that will prepare your company for a more inter-connected, device-driven world. Our IoT flagship team successfully delivered custom solutions for clients in various sectors: smart cities, industrial factories, wearables, vehicles,… connecting hundred of smart devices, sensors and systems into one growing ecosystem..",
    text: "left",
    details:
      "VMO offers complete IoT enterprise solutions that will prepare your company for a more inter-connected, device-driven world. Our IoT flagship team successfully delivered custom solutions for clients in various sectors: smart cities, industrial factories, wearables, vehicles, etc. Connecting hundred of smart devices, sensors and systems into one growing ecosystem.",
    logoImage: "https://www.vmogroup.com/static/media/ic_IOT.f125a75e.svg",
  },
  {
    path: "/services/ai",
    title: "ARTIFICIAL INTELLIGENCE ",
    description:
      "VMO understand how AI-powered applications can change the future of your company! Drive business growth and enhance operational efficiency with more intelligent, automated solutions, steered by latest AI technologies: from machine learning to natural language processing, to computer vision and Predictive Analytics.",
    text: "left",
    details:
      "VMO understand how AI-powered applications can change the future of your company! Drive business growth and enhance operational efficiency with more intelligent, automated solutions, steered by latest AI technologies: from machine learning to natural language processing, to computer vision and Predictive Analytics.",
    logoImage: "	https://www.vmogroup.com/static/media/ic_AI.dc651284.svg",
  },
  {
    path: "/portfolio",
    title: "PROJECTS WE DID",
    description:
      "In period of almost 10 years, VMO has successfully built a wide customer base coming from different areas of business society. We have not only government organizations as our clients but have also become a reliable name for overseas clients",
    text: "left",
  },
  {
    path: "/startup",
    title: "A RELIABLE PARTNER FOR START-UP",
    description:
      "In period of almost 10 years, VMO has successfully built a wide customer base coming from different areas of business society. We have not only government organizations as our clients but have also become a reliable name for overseas clients",
    text: "left",
  },
];

export const Whoweare = [
  {
    size: 240,
    color: "#ff6f00",
    amount: 10,
    title: "Years of Experience",
    plus: false,
    posX: 50,
    posY: 50,
  },
  {
    size: 220,
    color: "#e6c400",
    amount: 100,
    title: "Millions of End Users",
    plus: true,
    posX: 50,
    posY: 38,
  },
  {
    size: 200,
    color: "#ad0070",
    amount: 1000,
    title: "Headcounts",
    plus: true,
    posX: 59,
    posY: 1,
  },
  {
    size: 150,
    color: "#3d00ad",
    amount: 20,
    title: "Nations",
    plus: true,
    posX: 25,
    posY: 75,
  },
  {
    size: 180,
    color: "#3d00ad",
    amount: 50,
    title: "Big Brands",
    plus: true,
    posX: 0,
    posY: 75,
  },
];

export const SwiperBanner = [
  {
    productImg:
      "https://www.vmogroup.com/static/media/img_aimee_screenshot.e67b8cd1.png",
    bgImage:
      "https://cdn.vmogroup.com/vmogroup-global/assets/img/bestworks/img_aimee_bg.jpg",
    field: "AI-driven",
    description: "Personal health assistant",
    productName: "Aimee",
    details:
      "Within our web and mobile apps, you receive ongoing nutritional analysis via tracking food with image recognition and fill the gaps with physician-grade, tested supplements in the form of convenient 30-day pack subscriptions.",
  },
  {
    productImg:
      "https://www.vmogroup.com/static/media/img_ck_screenshot.37beb192.png",
    bgImage:
      "https://cdn.vmogroup.com/vmogroup-global/assets/img/bestworks/img_aimee_bg.jpg",
    field: "Cross Platform",
    description: "Strongly enhance your information security",
    productName: "Clearkeep",
    details:
      "Just launched! Secure software for your enterprise unified communication! ClearKeep is the only open source and encrypted end-to-end communication tool for your team.",
  },
  {
    productImg:
      "https://www.vmogroup.com/static/media/img_ck_screenshot.37beb192.png",
    bgImage: "https://www.vmogroup.com/static/media/img_syomit_bg.9ea1bc8e.jpg",
    field: "AI & Machine Learning tool",
    description: "To optimize user shopping Experience",
    productName: "SYOMit",
    details:
      "We believe that small businesses should have access to the latest technology to thrive in today's world. We build tools so they can use Machine Learning and AI to manage inventory and generate coupons to nearby users simply and easily.",
  },
  {
    productImg:
      "	https://www.vmogroup.com/static/media/img_paktor_screenshot.857bb9a3.png",
    bgImage: "https://www.vmogroup.com/static/media/img_syomit_bg.9ea1bc8e.jpg",
    field: "Giant Start-up",
    description: "About online dating in Asia",
    productName: "Paktor",
    details:
      "We believe that small businesses should have access to the latest technology to thrive in today's world. We build tools so they can use Machine Learning and AI to manage inventory and generate coupons to nearby users simply and easily.",
  },
  {
    productImg:
      "	https://www.vmogroup.com/static/media/img_mobio_screenshot.97261b15.png",
    bgImage: "https://www.vmogroup.com/static/media/img_mobio_bg.29622987.jpg",
    field: "Comprehensive",
    description: "Digital Marketing & CEM Platform",
    productName: "SYOMit",
    details:
      "Leveraging Paktor’s carefully crafted proprietary technology and first-mover advantage in the region, Paktor’s flagship app has become the most successful social networking app for singles in Southeast Asia and Taiwan.",
  },
  {
    productImg:
      "https://www.vmogroup.com/static/media/img_ck_screenshot.37beb192.png",
    bgImage: "https://www.vmogroup.com/static/media/img_bbb_bg.606117b9.jpg",
    field: "Amazing AI based",
    description: "Marketplace",
    productName: "Bicycle Blue Book",
    details:
      " A first of its kind valuation authority, designed to provide cycling enthusiasts with the safest and the easiest way to assess the value of a bike.",
  },
  {
    productImg:
      "	https://www.vmogroup.com/static/media/img_staffdirect_screenshot.deabb6d0.png",
    bgImage:
      "https://www.vmogroup.com/static/media/img_staffdirect_bg.2e399af2.jpg",
    field: "Quick and easy way",
    description:
      "To connect qualified dental professionals with dental offices",
    productName: "Staff Direct",
    details:
      "Staff Direct provides comprehensive solution to dental staffing and dental jobs for Canadian dental professionals. By connecting both parties directly, without any interference of the third party, Staff Direct allows all involved parties to find the perfect match on their own terms.",
  },
];

export const logoGridList = [
  {
    imgLink: "https://www.vmogroup.com/static/media/ricoh.ebcba070.png",
  },
  {
    imgLink: "https://www.vmogroup.com/static/media/eis.370a3e8f.png",
  },
  {
    imgLink: "https://www.vmogroup.com/static/media/BBB.fa9d4fe4.png",
  },
  {
    imgLink: "https://www.vmogroup.com/static/media/betterhomes.f9afc739.png",
  },
  {
    imgLink: "https://www.vmogroup.com/static/media/Exgo.610df2e8.png",
  },
  {
    imgLink:
      "https://www.vmogroup.com/static/media/ExpertSolutions.0d9342a2.png",
  },
  {
    imgLink: "https://www.vmogroup.com/static/media/OPC.53f936e7.png",
  },
  {
    imgLink: "https://www.vmogroup.com/static/media/photobook.ec23c0a1.png",
  },
  {
    imgLink: "https://www.vmogroup.com/static/media/PowerKiosk.dca8a3e8.png",
  },
  {
    imgLink: "https://www.vmogroup.com/static/media/VMAS.d5af5dfb.png",
  },
  {
    imgLink: "https://www.vmogroup.com/static/media/betterhomes.f9afc739.png",
  },
  {
    imgLink: "https://www.vmogroup.com/static/media/Exgo.610df2e8.png",
  },
];

export const OurDomains = [
  {
    title: "Banking and Finance",
    img: "https://www.vmogroup.com/static/media/ic_finance.961b0ea0.svg",
    list: [
      "Stock market trading platform",
      "Digital Banking System",
      "Tax Paying Application",
    ],
  },
  {
    title: "Health Care",
    img: "https://www.vmogroup.com/static/media/ic_health.9f069986.svg",
    list: [
      "Stock market trading platform",
      "Digital Banking System",
      "Tax Paying Application",
    ],
  },
  {
    title: "Education",
    img: "https://www.vmogroup.com/static/media/ic_education.129958f4.svg",
    list: [
      "Stock market trading platform",
      "Digital Banking System",
      "Tax Paying Application",
    ],
  },
  {
    title: "Logistic",
    img: "	https://www.vmogroup.com/static/media/ic_logistic.c8bfecc0.svg",
    list: [
      "Stock market trading platform",
      "Digital Banking System",
      "Tax Paying Application",
    ],
  },
  {
    title: "Retailer, B2B, B2C",
    img: "https://www.vmogroup.com/static/media/ic_shopping_bag.116e1827.svg",
    list: [
      "Stock market trading platform",
      "Digital Banking System",
      "Tax Paying Application",
    ],
  },
  {
    title: "Real Estate",
    img: "https://www.vmogroup.com/static/media/ic_property.0c2da66b.svg",
    list: [
      "Stock market trading platform",
      "Digital Banking System",
      "Tax Paying Application",
    ],
  },
  {
    title: "Leisure & Travel",
    img: "https://www.vmogroup.com/static/media/ic_global.051f5874.svg",
    list: [
      "Stock market trading platform",
      "Digital Banking System",
      "Tax Paying Application",
    ],
  },
  {
    title: "Loyalty",
    img: "https://www.vmogroup.com/static/media/ic_global.051f5874.svg",
    list: [
      "Stock market trading platform",
      "Digital Banking System",
      "Tax Paying Application",
    ],
  },
  {
    title: "Agriculture",
    img: "https://www.vmogroup.com/static/media/ic_agriculture.9a4d6aa3.svg",
    list: [
      "Stock market trading platform",
      "Digital Banking System",
      "Tax Paying Application",
    ],
  },
  {
    title: "Start-ups",
    img: "https://www.vmogroup.com/static/media/ic_finance.961b0ea0.svg",
    list: [
      "Stock market trading platform",
      "Digital Banking System",
      "Tax Paying Application",
    ],
  },
  {
    title: "Media",
    img: "	https://www.vmogroup.com/static/media/ic_media.c3f223fd.svg",
    list: [
      "Stock market trading platform",
      "Digital Banking System",
      "Tax Paying Application",
    ],
  },
  {
    title: "Work and Collaborate",
    img: "https://www.vmogroup.com/static/media/ic_collaborate.b3283ead.svg",
    list: [
      "Stock market trading platform",
      "Digital Banking System",
      "Tax Paying Application",
    ],
  },
];

export const whyODC = [
  {
    title: "Cost Saving",
    img: "https://cdn.vmogroup.com/vmogroup-global/assets/img/odc/ic_saving.svg",
  },
  {
    title: "Focus on core IT competencies",
    img: "https://cdn.vmogroup.com/vmogroup-global/assets/img/odc/ic_focus.svg",
  },
  {
    title: "Speed up development, especially if the work is on 24/7 principle",
    img: "https://cdn.vmogroup.com/vmogroup-global/assets/img/odc/ic_2407.svg",
  },
  {
    title: "Established IT infrastructure",
    img: "https://cdn.vmogroup.com/vmogroup-global/assets/img/odc/ic_infrastructure.svg",
  },
  {
    title:
      "Overcome any skill shortage probabilities thanks to our Talent pools",
    img: "https://cdn.vmogroup.com/vmogroup-global/assets/img/odc/ic_overcome.svg",
  },
  {
    title: "Full operational control",
    img: "https://cdn.vmogroup.com/vmogroup-global/assets/img/odc/ic_control.svg",
  },
];

export const OurODC = [
  {
    title: "Offshore mobile app development",
    img: "https://cdn.vmogroup.com/vmogroup-global/assets/img/odc/ic_mobile_code.svg",
  },
  {
    title: "Offshore Web Development",
    img: "https://cdn.vmogroup.com/vmogroup-global/assets/img/odc/ic_web_code.svg",
  },
  {
    title: "Offshore Product Development",
    img: "https://cdn.vmogroup.com/vmogroup-global/assets/img/odc/ic_document.svg",
  },
  {
    title: "Offshore Testing",
    img: "https://cdn.vmogroup.com/vmogroup-global/assets/img/odc/ic_checklist.svg",
  },
  {
    title: "Offshore Maintenance",
    img: "https://cdn.vmogroup.com/vmogroup-global/assets/img/odc/ic_maintenance.svg",
  },
  {
    title: "Offshore UI/UX Design",
    img: "https://cdn.vmogroup.com/vmogroup-global/assets/img/odc/ic_design.svg",
  },
];

export const whyOurSourceVMO = [
  {
    title:
      "Successfully deliver 100+ feature-rich and robust mobile apps to the market",
    img: "https://www.vmogroup.com/static/media/ic_app.fe3fddcc.svg",
  },
  {
    title: "Personalized User Experience Design to fulfill user needs",
    img: "https://www.vmogroup.com/static/media/ic_target.506ed66d.svg",
  },
  {
    title: "Latest technology adoption",
    img: "https://www.vmogroup.com/static/media/ic_worldwide.bcf3226d.svg",
  },
  {
    title: "Scalability and maintainability for user sustainability",
    img: "https://www.vmogroup.com/static/media/ic_user.6fc23485.svg",
  },
  {
    title: "Scalability and maintainability for user sustainability",
    img: "https://www.vmogroup.com/static/media/ic_user.6fc23485.svg",
  },
  {
    title: "Cross-platform development",
    img: "https://www.vmogroup.com/static/media/ic_padlock.00265d87.svg",
  },
];

export const OSVMObile = [
  {
    title: "IOS APP DEVELOPMENT",
    description:
      "We create memorable experiences across various iOS devices. Backed by top iOS developers that master Objective-C and Swift language, we create top-notch iOS apps while ensuring to follow strict Apple standards.",
    img: "https://www.vmogroup.com/static/media/ic_apple.71ab4912.svg",
  },
  {
    title: "UI/UX DESIGN",
    description:
      "We design Mobile apps with wow factor. VMO design team has extensive experience in creating engaging visuals that are user-centered and guarantee to provide great digital experience.",
    img: "https://www.vmogroup.com/static/media/ic_design.e9ec3589.svg",
  },
  {
    title: "ANDROID APP DEVELOPMENT",
    description:
      "Android-based devices are taking the majority of the market share, making it crucial to develop an Android app if you want a greater access to potential users. We have experience in designing, developing, and deploying Android apps for a range of device to entrust your project to..",
    img: "https://www.vmogroup.com/static/media/ic_apple.71ab4912.svg",
  },
  {
    title: "REACT NATIVE APP DEVELOPMENT",
    description:
      "React Native is the trusted development framework for cross-platform mobile apps. Incorporating React Native helps to optimize performance, reduce cost and time for apps running on both Android and iOS platform..",
    img: "https://www.vmogroup.com/static/media/ic_RNAD.cc72ee86.svg",
  },
  {
    title: "APP TESTING",
    description:
      "Our QA professionals guarantee risk-free apps. Mobile app testing done right ensures a bug-free, fully-functional and real-life usage product..",
    img: "https://www.vmogroup.com/static/media/ic_testing.f1871334.svg",
  },
  {
    title: "APP SUPPORT & MAINTENANCE",
    description:
      "Keep your app up-to-date, robust and secure with us. Our dedicated team ensures to always accomplish your mobility needs. No matter if you wish to upgrade the app or extend a feature, the team will perform the task without interrupting the continued user experience.",
    img: "https://www.vmogroup.com/static/media/ic_support.76d41059.svg",
  },
];

export const Profolio = [{}];

export const Manager = [
  {
    name: "Hoang Tuan HAI",
    position: "Chief Executive Officer",
    image:
      "https://cdn.vmogroup.com/vmogroup-global/assets/img/managementboard/Hoang_Tuan_Hai_CEO.png",
  },
  {
    name: "Hoang Hai VIET",
    position: "Japan Market Director",
    image:
      "https://cdn.vmogroup.com/vmogroup-global/assets/img/managementboard/Hoang_Hai_Viet_Japan_Market_Director.jpg",
  },
  {
    name: "Yusuf Saib",
    position: "US Market Director",
    image:
      "https://cdn.vmogroup.com/vmogroup-global/assets/img/managementboard/Yusuf.png",
  },
  {
    name: "Pham Thi NHUNG",
    position: "Chief Human Resources Officer",
    image:
      "https://cdn.vmogroup.com/vmogroup-global/assets/img/managementboard/Pham_Thi_Nhung_CHRO.jpg",
  },
  {
    name: "Nguyen Khanh DIEP",
    position: "Chief Business Officer - Global Market",
    image:
      "https://cdn.vmogroup.com/vmogroup-global/assets/img/managementboard/Nguyen_Khanh_Diep(Jamie)_Sales_Manager.jpg",
  },
  {
    name: "Nguyen Thi Phuong MAI",
    position: "Chief Executive Officer",
    image:
      "https://cdn.vmogroup.com/vmogroup-global/assets/img/managementboard/Nguyen_Thi_Phuong_Mai.jpg",
  },
  {
    name: "Ngo Quang MINH",
    position: "Chief Production Officer",
    image:
      "https://cdn.vmogroup.com/vmogroup-global/assets/img/managementboard/Ngo_Quang_Minh_CPO.jpg",
  },
  {
    name: "Nguyen Duc HANH",
    position: "Chief Operations Officer",
    image:
      "https://cdn.vmogroup.com/vmogroup-global/assets/img/managementboard/Nguyen_Duc_Hanh_COO.jpg",
  },
  {
    name: "Hoang Van THOAN",
    position: "Chief Technology Officer",
    image:
      "https://cdn.vmogroup.com/vmogroup-global/assets/img/managementboard/Hoang_Van_Thoan_CTO.jpg",
  },
];
