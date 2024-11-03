"use client";
import React, { useState } from "react";
import SectionHeading from "./section-heading";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { experienceData, educationData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { useTheme } from "@/context/theme-context";

export default function Timeline() {
  const { ref } = useSectionInView("Experience", 0.1);
  const { theme } = useTheme();
  const [activeTab, setActiveTab] = useState("experience");

  const toggleButtons = [
    { id: "experience", label: "Experience" },
    { id: "education", label: "Education" },
  ];

  const activeData =
    activeTab === "experience" ? experienceData : educationData;

  const contentStyle = {
    background: theme === "light" ? "white" : "rgba(255, 255, 255, 0.05)",
    boxShadow:
      theme === "light"
        ? "0 4px 6px rgba(0, 0, 0, 0.1)"
        : "0 4px 6px rgba(0, 0, 0, 0.3)",
    border:
      theme === "light"
        ? "1px solid rgba(0, 0, 0, 0.05)"
        : "1px solid rgba(255, 255, 255, 0.1)",
    borderRadius: "0.75rem",
    padding: "1.5rem",
  };

  const contentArrowStyle = {
    borderRight:
      theme === "light"
        ? "0.4rem solid #e5e7eb"
        : "0.4rem solid rgba(255, 255, 255, 0.2)",
  };

  const iconStyle = {
    background: theme === "light" ? "white" : "rgba(255, 255, 255, 0.15)",
    fontSize: "1.5rem",
    boxShadow:
      theme === "light"
        ? "0 0 0 4px #fff, inset 0 2px 0 rgba(0,0,0,.08), 0 3px 0 4px rgba(0,0,0,.05)"
        : "0 0 0 4px rgba(255, 255, 255, 0.05), inset 0 2px 0 rgba(0,0,0,.08), 0 3px 0 4px rgba(0,0,0,.05)",
  };

  return (
    <section
      id="experience"
      ref={ref}
      className="scroll-mt-28 mb-28 sm:mb-40 w-full"
    >
      <SectionHeading>My Experience</SectionHeading>

      {/* Toggle Buttons */}
      <div className="flex justify-center gap-6 mb-8">
        {toggleButtons.map((button) => (
          <button
            key={button.id}
            onClick={() => setActiveTab(button.id)}
            className={`
              px-4 py-2 rounded-lg font-medium transition-all duration-200
              ${
                activeTab === button.id
                  ? "bg-gray-900 text-white dark:bg-white dark:text-gray-900"
                  : "bg-gray-100 text-gray-900 hover:bg-gray-200 dark:bg-white/10 dark:text-white/70 dark:hover:bg-white/20"
              }
            `}
          >
            {button.label}
          </button>
        ))}
      </div>

      <VerticalTimeline
        lineColor={theme === "light" ? "#e5e7eb" : "rgba(255, 255, 255, 0.2)"}
      >
        {activeData.map((item, index) => (
          <VerticalTimelineElement
            key={index}
            contentStyle={contentStyle}
            contentArrowStyle={contentArrowStyle}
            date={item.date}
            icon={item.icon}
            iconStyle={iconStyle}
          >
            <div className="hover:bg-gray-50 dark:hover:bg-white/5 transition-all rounded-lg -mx-4 -my-3 p-4">
              <h3 className="font-bold text-xl mb-1">{item.title}</h3>
              <p className="font-medium text-gray-600 dark:text-white/75 mb-2">
                {item.type}
              </p>
              <p className="text-gray-700 dark:text-white/60 mb-1">
                {item.subject}
              </p>
              {item.marks && (
                <p className="text-gray-600 dark:text-white/75 font-medium">
                  {item.marks}
                </p>
              )}
            </div>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </section>
  );
}
