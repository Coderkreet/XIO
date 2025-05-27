import React from "react";
import EventImage1 from "../../src/userAssets/EventImage1.png";
import EventImage2 from "../../src/userAssets/EventImage2.jpg";
import EventImage3 from "../../src/userAssets/EventImage3.jpg";

const events = [
    {
        image: EventImage1,
        tag: "Inspiration",
        title: "8 Creative Ways to Repurpose Your Webinar Content",
        link: "#",
    },
    {
        image: EventImage2,
        tag: "Inspiration",
        title:
            "Why Webinars Are the #1 Lead Generation Marketing Strategy, You May Not Be Thinking About",
        link: "#",
    },
    {
        image: EventImage3,
        tag: "Inspiration",
        title:
            "How to Drive Qualified Pipeline and Enable Sales After Your Webinar Wraps",
        link: "#",
    },
];

const RecentEvents = () => {
    return (
        <section className="py-16 px-4  font1">
            <h2 className="text-2xl md:text-3xl font-normal text-center mb-10">
                Recent Events
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
                {events.map((event, index) => (
                    <div
                        key={index}
                        className="rounded-tr-[3rem] overflow-hidden  transition-shadow duration-300"
                    >
                        <img
                            src={event.image}
                            alt={event.title}
                            className="w-full h-56 object-cover"
                        />
                        <div className="p-4 flex flex-col gap-4">
                            <p className="text-sm  mb-1">{event.tag}</p>
                            <h3 className="text-base font-medium leading-snug mb-2">
                                {event.title}
                            </h3>
                            <a href={event.link} className="text-[#9747FF] text-sm font-semibold hover:underline">
                                Read
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default RecentEvents;
