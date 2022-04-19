import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import "./index.scss";

const menu = [
  {
    title: "Home",
    link: "/",
  },
  {
    title: "About Us",
    link: "/about-us",
  },
  {
    title: "Services",
    detail: [
      {
        title: "Our Services",
        content:
          "Enterprise-level processes, technology and strategy for small and medium businesses. We engineer software solutions with emerging technology stack.",
      },
    ],
    submenucount: 3,
    submenu: [
      {
        title: "Dedicated Team",
        content:
          "Transform your business and help you win customer satisfaction.",
      },
      {
        title: "Blockchain Solutions",
        conten: "Scale your business with modern blockchain solutions.",
      },
      {
        title: "Web App Development",
        content:
          "Simple, cost-effective, full-service strategy, creation and development.",
      },
      {
        title: "UI/UX",
        content:
          "Design and launch products that deliver great user experiences.",
      },
      {
        title: "Mobile App Development",
        content: "Mobile applications that help businesses grow.",
      },
      {
        title: "Q/A Testing",
        content:
          "Automated software testing, and streamlined Q&A testing lifecycle.",
      },
      {
        title: "RPAs",
        content: "Solutions that support everyday processes for your business.",
      },
      {
        title: "AI/ML",
        content:
          "Scalable AI solutions for industrial infrastructure and IoT ecosystems.",
      },
      {
        title: "Banking Solutions",
        content:
          "Alleviate the conflict of conventional financial and banking solutions.",
      },
      {
        title: "Custom Software Development",
        content: "Purpose-built custom software to support processes swiftly.",
      },
      {
        title: "DevOps",
        content: "Improve service reliability among software stakeholders.",
      },
    ],
  },
  {
    title: "Industries",
    detail: [
      {
        title: "Enterprise Blockchain Solutions",
      },
      {
        title: "Agile Custom Software Development",
      },
      {
        title: "Corporate Financial Solutions",
      },
      {
        title: "Branding",
      },
      {
        title: "Industry 4.0",
      },
    ],
    submenucount: 3,
    submenu: [
      {
        title: "Hybrid Blockchain Solutions",
        content: "Real-World Combinations of Public and Private DLT.",
      },
      {
        title: "Custom Business Software Development",
        content: "Successful business software deployments.",
      },
      {
        title: "Fintech Private Banking",
        content:
          "Embrace the operational success with secure banking solutions.",
      },
      {
        title: "Custom AI/ML Solutions",
        content: "Customised solutions tailored for the business needs.",
      },
      {
        title: "RPAs in Freight Transportation",
        content: "Develop and Deploy Robotic Automation Systems.",
      },
      {
        title: "Supply Chain Management",
        content: "Empower your corporate clients with tailored solutions.",
      },
      {
        title: "Identity and Access Management",
        content: "Authentication and secure portals to control access.",
      },
      {
        title: "Tailored Banking Solutions",
        content:
          "Empower your business with Bank Management and Financial Services.",
      },
      {
        title: "Customer Experience Architect",
        content: "Enhance the user experience and customer satisfaction.",
      },
      {
        title: "Business Automation",
        content: "Empower the operations of your business with RPAs.",
      },
      {
        title: "Custom Blockchain Solutions",
        content: "B2B and B2C-oriented custom blockchain solutions.",
      },
      {
        title: "Custom Healthcare Software Development",
        content: "custom healthcare app development solutions.",
      },
      {
        title: "Banking Software Development",
        content: "Build fraud-resistant banking solutions for your business.",
      },
      {
        title: "Website Design and Development",
        content: "Responsive website development and intuitive design.",
      },
      {
        title: "Robotic Process Automation",
        content: "Get efficient and productive work done in less time.",
      },
    ],
  },
  {
    title: "Insights",
    detail: [
      {
        title: "Market Insights",
        content:
          "Enlighten yourself with the latest research and market insights",
      },
    ],
    submenucount: 2,
    submenu: [
      {
        title: "Blogs",
        content:
          "Explore the latest Information about the recent market technology trends",
      },
      {
        title: "Newsroom",
        content:
          "Stories about tech industry revolution and how it's changing the world for better",
      },
    ],
  },
  {
    title: "Careers",
    detail: [
      {
        title: "Careers",
        content:
          "Reimagine your career with Hi-solution E-commerce LTD and get a chance to work with exceptional talent.",
      },
    ],
    submenucount: 2,
    submenu: [
      {
        title: "Working at Hi-solution E-commerce LTD",
        content: "Hi-solution E-commerce LTD’s values, perks and benefits.",
      },
      {
        title: "Open Positions",
        content:
          "Current job openings & career information at Hi-solution E-commerce LTD.",
      },
    ],
  },
];

const renderSubMenu = (submenu, count) => {
  let resultDiv = [],
    ind = 0;
  for (let i = 0; i < count; i++) {
    let group = [];
    for (; ind < (submenu.length / count) * (i + 1); ind++) {
      group.push(
        <div className="menu-item">
          <div className="menu-item-title">{submenu[ind].title}</div>
          <div className="menu-item-content">{submenu[ind].content}</div>
        </div>
      );
    }
    resultDiv.push(<div className="submenu-group">{group.map((m) => m)}</div>);
  }
  return <>{resultDiv.map((g) => g)}</>;
};

export default () => {
  const [scrollTop, setScrollTop] = useState(true);
  const navigate = useNavigate();
  const listenToScroll = () => {
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;

    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;

    const scrolled = winScroll / height;
    if (scrolled == 0) setScrollTop(true);
    else setScrollTop(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", listenToScroll);
    return () => {
      window.removeEventListener("scroll", listenToScroll);
    };
  }, []);

  return (
    <div className={`header ${scrollTop ? "transparent" : "white"}`}>
      <div className="header-logo">Hi-solution</div>
      <div className="header-menu">
        {menu.map((category) => (
          <div className="header-menu-category">
            <div
              className="title"
              onClick={() => {
                if (category.link != undefined) navigate(category.link);
              }}
            >
              {category.title}
            </div>
            {category.detail && (
              <div className="submenu">
                <div className="submenu-group">
                  {category.detail.map((d) => (
                    <div className="detail-item">
                      <div className="detail-item-title">{d.title}</div>
                      <div className="detail-item-content">{d.content}</div>
                    </div>
                  ))}
                </div>
                {renderSubMenu(category.submenu, category.submenucount)}
              </div>
            )}
          </div>
        ))}
      </div>
      <div className="header-buttons">
        <div className="button-red">Estimate Project</div>
      </div>
    </div>
  );
};
