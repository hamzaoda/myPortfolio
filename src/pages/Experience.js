import React from "react";
import {
    VerticalTimeline,
    VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from "@mui/icons-material/School";
import WorkIcon from "@mui/icons-material/Work"

function Experience() {
    return (
        <div className="experience">
            <VerticalTimeline lineColor="#3e497a">
                <VerticalTimelineElement
                    className="vertical-timeline-element--education"
                    date="2013 - 2016"
                    iconStyle={{ background: "#3e497a", color: "#fff" }}
                    icon={<SchoolIcon />}
                >
                    <h3 className="vertical-timeline-element-title">
                        Yousef Alazemh, Damascus, Syria.
                    </h3>
                    <p>High School Diploma. </p>
                </VerticalTimelineElement>
            
            <VerticalTimelineElement
                className="vertical-timeline-element--education"
                date="2016 - 2022"
                iconStyle={{ background: "#3e497a", color: "#fff" }}
                icon={<SchoolIcon />}
            >
                <h3 className="vertical-timeline-element-title">
                Arab International University.                </h3>

                <h4 className="vertical-timeline-element-subtitle">
                Bachelor's Degree.
                </h4>

                <p> Informatics and Communications Engineering with Specialty in Artificial Intelligence</p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                date="2021 - 2022"
                iconStyle={{ background: "#e9d35b", color: "#fff" }}
                icon={<WorkIcon />}
            >
                <h3 className="vertical-timeline-element-title">
                    Back End Engineer - E-solution
                </h3>
                <h4 className="vertical-timeline-element-subtitle">
                    Damascus, Syria
                </h4>
                <p>Developed the backend infrastructure for 3 projects.</p>
            </VerticalTimelineElement>

            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                date="2022 - 2023"
                iconStyle={{ background: "#e9d35b", color: "#fff" }}
                icon={<WorkIcon />}
            >
                <h3 className="vertical-timeline-element-title">
                    Full Stack Engineer - Prodiogy
                </h3>
                <h4 className="vertical-timeline-element-subtitle">
                    Dubai, UAE
                </h4>
                <p>
                    Helped the team launch 2 major features by working both in
                    the front end and back end.
                </p>
            </VerticalTimelineElement>
            </VerticalTimeline>
        </div>
    );
}

export default Experience;
