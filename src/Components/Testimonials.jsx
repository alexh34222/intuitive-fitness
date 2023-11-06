import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import "../assets/Css/Testimonials.css";

export default function Testimonials() {
  const yourTestimonialsArray = [
    {
      title: "Abhinav T. - Jun 22, 2020 · Client-Refferal",
      text: "Tom is awesome! He has been my personal trainer for over a year now and he has been amazing. I had a pretty serious back injury a couple of years ago and he has tailored my workout to both help me strengthen my core but also generally improve my health. He’s a really chill guy that is understanding of everything that is happening and I can not recommend him more!",
    },
    {
      title: "Tarik H. - Apr 13, 2021 · Booked through Thumbtack",
      text: "Tom has been the reason my husband and I finally enjoy working out, and we never used to work out. I would highly recommend him to anyone looking for a well-informed, easy-going, no-guilt trainer. Not to mention the privacy of his well set up backyard workout shed is a pleasure to workout in as opposed to a crowded gym!",
    },
    {
      title: "Britton Q. - May 5, 2021 · Booked through Thumbtack",
      text: "Tom is knowledgeable, friendly, and professional. He's giving me new training methods and form improvements to improve my squat, deadlift and bench press. ",
    },
    {
      title: "Jazzy T. - Jan 20, 2022 · Booked through Thumbtack",
      text: "Tom is an amazing trainer - very knowledgeable and understanding. Getting back to shape is hard but he knows how to make it engaging. He knows exactly how to push you to get the best results.",
    },
    {
      title: "Sindhushree Y. - Feb 9, 2023 · Booked through Thumbtack",
      text: "It's great working with Tom. His initial assessment was helpful in understanding areas of improvement. His setup is neat with all the required equipment. Recommend him as a coach.",
    },
    {
      title: "Anne W. - Sep 23, 2020 · Client-Refferal",
      text: "I started working with Tom to help me get fit in spite of my neck pain and knee pain. While working with him, I've increased my strength and endurance and lessened my pain dramatically. He listens and works with you to create a plan that works. Very highly recommend!",
    },
    {
      title: "Jordan H. - Jun 30, 2020 · Client-Refferal",
      text: "Tom is an excellent trainer! We’ve been training together for about two years. Tom is great at listening to my goals and tailoring a fitness program to match. Workouts never feel “thrown together” or random; it’s always clear that Tom invested significant time planning the session beforehand. Additionally, Tom is engaged throughout the entire session—offering encouragement and suggestions to improve performance. Tom’s affable personality makes sessions fly by.",
    },
    {
      title: "Ashlei L. - Sep 21, 2020 · Booked through Thumbtack",
      text: "I greatly appreciated my time with Tom! He listened to my goals and created continuous sessions surrounding them. Even within our first month working together, I was able to notice changes and will continue to work to on those greater goals that I have for myself.",
    },
    {
      title: "Bill W. - Jan 3, 2023 · Client-Refferal",
      text: "I have worked with Tom for over 5 years. He takes the time to explain and educate me why I am doing certain exercises to achieve different goals I have sought out for myself over the years. I could not recommend him more!",
    },
    {
      title: "Taylor J. - Jun 19, 2020 · Client-Refferal",
      text: "Tom fixed me. Coming from a place where I have tried a few personal trainers, I always had pains in my lower back and shoulders. I can say with confidence that if you have been lifting for a while or if you are new, Tom is the safest route for getting into fitness. He gave me the tools to take care of my body while getting into fitness. It's the best money I've ever spent, because I got an education, I probably know more now than some of the trainers I've thrown money at. To top it all off, NO MORE PAIN!!!!!!!!",
    },
    {
      title: "Pat T. - Jun 18, 2020 · Client-Refferal",
      text: "Tom personalized and helped define what I wanted out of my training to my fitness goals💪",
    },
    {
      title: "Anna S. - Jun 20, 2020 · Client-Refferal",
      text: "Tom works to understand his client's needs and knows how to adjust the program. He is always happy, fully vested, and energized. He is professional and keeps finding ways to be more helpful, improve and bring more value to his clients.",
    },
    {
      title: "Shanele L. - Jun 23, 2020 · Client-Refferal",
      text: "Over the years I’ve watched Tom grow and study his passion of weightlifting + optimizing the human body. He reads, listens and absorbs as much information he can about it. Over time he’s become incredibly knowledgeable and put in serious time honing his craft. This is absolutely Tom’s lane of genius and he is the man to help you with your dreams. Beyond the workouts he sees that everyone is more than their shell, and he takes the time to make sure you realize that as well. Tom is a beautiful soul who will without a doubt help you accomplish your goals.",
    },
    {
      title: "Tim A. - Jun 23, 2020 · Client-Refferal",
      text: "Tom does a very good job of giving you quality training while providing an engaging experience.",
    },
    {
      title: "Mary-Lynn B. - Aug 17, 2020 · Booked through Thumbtack",
      text: "Tom is knowledgeable, and keeps my work outs varied and engaging. He is always professional and friendly.",
    },
  ];

  return (
    <div>
      <Header />
      <div className="clientTestimonialsPage">
        <div className="testimonialsSectionOne">
          <h2>Client Testimonials</h2>
          <div className="testimonialsMainText">
            <p>
              {/* From the early stages of life, we naturally engage in activities
              like crawling, walking, and running, as well as playful movements.
              Throughout history, our ancestors relied on physical activity for
              survival, such as hunting, gathering, and farming. <br /> <br />
              In modern times, exercise remains instinctive as it releases
              endorphins, the feel-good hormones, contributing to improved mood
              and reduced stress. Whether it's dancing, playing sports, or
              simply taking a walk, our bodies are designed to be in motion.{" "}
              <br /> <br /> */}
              The beauty of exercise is that it allows us to listen to our
              bodies, choosing activities that bring joy and fulfillment, making
              it more likely to become a sustainable and enjoyable part of our
              lives. <br />
              <br />
              Here are some clients who make Intuitive the empowering place it
              is. <br />
              *click on a name to read their testimonial*
            </p>
          </div>
        </div>
        <div className="testimonialsSectionTwo">
          {yourTestimonialsArray.map((testimonial, index) => (
            <div className="testimonial" key={index}>
              <div
                onClick={() => {
                  const dialog = document.getElementById(
                    `testimonial-dialog-${index}`
                  );
                  dialog.showModal();
                }}
                style={{ cursor: "pointer" }}
              >
                {testimonial.title}
              </div>
              <dialog
                id={`testimonial-dialog-${index}`}
                className="testimonial-dialog"
              >
                <h3>{testimonial.title}</h3>
                <p>{testimonial.text}</p>
                <button
                  onClick={() =>
                    document
                      .getElementById(`testimonial-dialog-${index}`)
                      .close()
                  }
                  className="close-button"
                >
                  X
                </button>
              </dialog>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}
