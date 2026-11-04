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
    background: theme === "light" ? "white" : "#1A1A1A",
    boxShadow:
      theme === "light"
        ? "0 4px 6px rgba(0, 0, 0, 0.1)"
        : "0 4px 6px rgba(0, 0, 0, 0.3)",
    border:
      theme === "light"
        ? "1px solid rgba(0, 0, 0, 0.05)"
        : "1px solid rgba(255, 255, 255, 0.08)",
    borderRadius: "0.75rem",
    padding: "1.5rem",
  };

  const contentArrowStyle = {
    borderRight:
      theme === "light"
        ? "0.4rem solid #ffd0c0"
        : "0.4rem solid #232323",
  };

  const iconStyle = {
    background: "#F26B45",
    color: "white",
    fontSize: "1.5rem",
    boxShadow:
      theme === "light"
        ? "0 0 0 4px #FFF8F5, 0 3px 0 4px rgba(242,107,69,.15)"
        : "0 0 0 4px #000, 0 3px 0 4px rgba(242,107,69,.15)",
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
                  ? "bg-brand text-white"
                  : "bg-white text-gray-900 borderBlack hover:text-brand dark:bg-ink dark:text-white/70 dark:hover:text-brand"
              }
            `}
          >
            {button.label}
          </button>
        ))}
      </div>

      <VerticalTimeline
        lineColor="rgba(242, 107, 69, 0.3)"
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
            <div className="hover:bg-brand-light dark:hover:bg-white/5 transition-all rounded-lg -mx-4 -my-3 p-4">
              <h3 className="font-bold text-xl mb-1">{item.title}</h3>

              {/* Role progression for experience entries */}
              {"roles" in item && (item as (typeof experienceData)[number]).roles && (
                <div className="mt-3 mb-3 border-l-2 border-gray-200 dark:border-gray-700 ml-1">
                  {(item as (typeof experienceData)[number]).roles.map(
                    (role, i) => (
                      <div key={i} className="relative pl-5 pb-4 last:pb-0">
                        {/* Dot positioned on the border line */}
                        <div
                          className={`absolute left-[-5px] top-[3px] w-2 h-2 rounded-full ${
                            "current" in role && role.current
                              ? "bg-green-500 ring-2 ring-green-500/30"
                              : "bg-gray-400 dark:bg-gray-500"
                          }`}
                        />
                        <p
                          className={`font-semibold text-sm leading-none flex items-center ${
                            "current" in role && role.current
                              ? "text-green-600 dark:text-green-400"
                              : "text-gray-600 dark:text-white/60"
                          }`}
                        >
                          {role.title}
                          {"current" in role && role.current && (
                            <span className="ml-2 text-[10px] font-semibold uppercase tracking-wider px-1.5 py-0.5 rounded bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400 leading-none">
                              Current
                            </span>
                          )}
                        </p>
                        <p className="text-xs text-gray-400 dark:text-white/40 mt-1">
                          {role.date}
                        </p>
                      </div>
                    )
                  )}
                </div>
              )}

              {/* Fallback for education entries that still use `type` */}
              {"type" in item && (
                <p className="font-medium text-brand mb-2">
                  {(item as (typeof educationData)[number]).type}
                </p>
              )}

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
