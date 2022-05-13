import React, { Component } from "react";
import Testimonial from "../testimonial/testimonial.component";

export default function TestimonialList() {
  const cards = [
    {
      creator: {
        img: "https://www.scabard.com/user/deronius/image/kella.png",
        name: "Kella Darkhope",
        title: "Software Engineer",
      },
      img: "https://images.ctfassets.net/aq13lwl6616q/B21J05G7wOcBFk0Rx9Udw/a46d0a2eda4b395d475364d9f2664f85/tesla-9.svg",
      text: "I was asked a lot of questions at my interview for Tesla. I was only able to answer them because of ECCC's course. I would recommend their courses to anyone who wants to learn web dev like a pro.",
      id: 1,
    },
    {
      creator: {
        img: "https://this-person-does-not-exist.com/img/avatar-035f59736eb4f3a40d1fd1573ef981e0.jpg",
        name: "Ruby J. Brown",
        title: "Frontend Programmer",
      },
      img: "https://images.ctfassets.net/aq13lwl6616q/6qfcsIXcbG8pjC83J1chZQ/fb3c84ea352d6322361f85a07547d210/uber.svg",
      text: "ECCC's course helped me ace my Frontend Engineer interviews at Uber. Can't thank the ECCC community enough!",
      id: 2,
    },
    {
      creator: {
        img: "https://images.generated.photos/hxB2FffuIBiq7SXFQnFj5CjaC_gtK5G06620YYP1J4E/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/MTExNDIyLmpwZw.jpg",
        name: "Kevin Behler",
        title: "Senior Software Engineer",
      },
      img: "https://images.ctfassets.net/aq13lwl6616q/1wjx0CrukEvUWPJBYHLmDx/b55c4f18cb17b8067800460f2861f649/google-1-1.svg",
      text: "I want to thank ECCC for building such an amazing platform. They have helped me gain the foundation to be a great engineer. Thanks!",
      id: 3,
    },
    {
      creator: {
        img: "https://images.generated.photos/Rf3x-9E002i3jU-R0uVGZ8v5AA-tzGreXbTuzO0nOlU/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/OTMyMDU4LmpwZw.jpg",
        name: "Jerry McClure",
        title: "Associate Software Engineer",
      },
      img: "https://images.ctfassets.net/aq13lwl6616q/4u0RpsSDtlo7uPcFocvJha/029e302dbd55229c342d4cce7f7695a4/Blizzard_Entertainment_Logo_2015x.png",
      text: "I just got hired at Blizzard as an Associate Software Engineer. ECCC's course and the their community helped me gain the confidence and knowledge to get this role.",
      id: 4,
    },
    {
      creator: {
        img: "https://images.generated.photos/LzyKWC8WrhhZoJqsM_FGDDVuipSzH2xtHjMLq12ABxI/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/NTY4NTQxLmpwZw.jpg",
        name: "Kurtis Weissnat",
        title: "Tortizzi Developer",
      },
      img: "https://www.retail-fmcg.ro/wp-content/uploads/2017/10/Logo-Alka-page-001-e1509009739231.jpg",
      text: "All because of ECCC, I’ve been able to learn to code, blow away interviewers, get my first job as a web developer, become a React instructor and just got a new job as an intermediate developer with double the salary in only 7 months!",
      id: 5,
    },
    {
      creator: {
        img: "https://images.generated.photos/pJh5fJUdYoRzCj_oerh8MBx50om6Hd1xL_PFINKXg1M/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/NjI0NzQwLmpwZw.jpg",
        name: "Kenneth Newsom",
        title: "Web Application Developer",
      },
      img: "https://images.ctfassets.net/aq13lwl6616q/3AWILqoSncpxomtpcPruAu/f3f0a58b6c456d6671c100ed86511748/amazon-2.svg",
      text: "I am largely grateful to the ECCC community.",
      id: 6,
    },
    {
      creator: {
        img: "https://images.generated.photos/nA2InQAB_DpYrjiPFqaa4LUHYZd3P2ilQJbJui260BI/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/ODczMTY2LmpwZw.jpg",
        name: "Kristian Rykkje",
        title: "Software Engineer",
      },
      img: "https://images.ctfassets.net/aq13lwl6616q/2m9onQIgo58O1WBHKXvhA0/f8fe412ab10f0b1ebd6f8991c2ddc6a0/iConnect-Info-Logo-new1-6.jpg",
      text: "Just got my first job as a junior software developer despite not having a CS degree or any work exp. Thank you ECCC!",
      id: 7,
    },
    {
      creator: {
        img: "https://images.generated.photos/Bv-BhNwK19d5X_S-VnCf6adjL3jeLVi9rYdDZUndmIc/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/NDY1MDk5LmpwZw.jpg",
        name: "Gaëtan Salian",
        title: "Full Stack Developer",
      },
      img: "https://images.ctfassets.net/aq13lwl6616q/2fDhrw8Blf9T1qklBUbcgY/0fb559effc34f0c6a5ea7c94ad5db7d5/jp-morgan.svg",
      text: "I was able to succeed in my interviews and get hired as a Full Stack Developer at JP Morgan thanks to your courses. Even now, I am still learning from you!",
      id: 8,
    },
    {
      creator: {
        img: "https://images.generated.photos/HKmh1x_QsOftfyOQOXusuA-Ifjrk3UWUoSQ5jmLvBns/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/MTgzODU4LmpwZw.jpg",
        name: "Catalin Smitthimedhin",
        title: "Frontend React Developer",
      },
      img: "https://images.ctfassets.net/aq13lwl6616q/7FzVq50j6LeZMTuOg3dazu/76149d8d6aa5fccf3d50b87ec8b09579/Oracle_logo.svg",
      text: "I got hired by Oracle! ECCC's courses, monthly coding challenges and the discord group put me on the right track to advance. Thank you ECCC!",
      id: 9,
    },
    {
      creator: {
        img: "https://images.generated.photos/pgUipEZ1s3AgnkrozxfP46CXN1OzNQfSUl42xmzTdNE/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/MTgwOTYxLmpwZw.jpg",
        name: "Tyler Price",
        title: "Big Data Engineer",
      },
      img: "https://images.ctfassets.net/aq13lwl6616q/3pqHp0Faf4BDOUQuu7pRwm/4388b71335d5b58a406f2eea6866edfc/Shopify_logo_2018.svg",
      text: "Thank you! Within weeks of taking your Coding Interview course, I got a job at my dream company! Unlike other courses, I learned the fundamentals that apply to any problem which helped immensely.",
      id: 10,
    },
  ];

  return (
    <div className="mt-8 min-h-fit grid grid-cols-5 justify-center gap-5">
      {cards.map(({ creator, img, text, id }) => (
        <Testimonial key={id} creator={creator} img={img} text={text} />
      ))}
    </div>
  );
}
