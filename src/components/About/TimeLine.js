import React from 'react'
import { MdSchool } from 'react-icons/md';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';



const TimeLine = () => {
    return (
        <VerticalTimeline layout="5-column-right" className="vertical-timeline-school">
            <VerticalTimelineElement
                className="timeline-school"
                contentStyle={{ backgroundColor: 'rgba(5, 62, 120,.2)', color: '#fffff' }}
                contentArrowStyle={{ borderRight: '12px solid  rgba(5, 62, 120,.2)' }}
                date="2019-2023"
                iconStyle={{ background: 'black', color: '#1f73f1' }}
                icon={<MdSchool />}
            >
                <h3 className="vertical-timeline-element-title">Bachelor of Technology(CSE)</h3>
                <p>
                    Pursued Bachelor of Technology from Bharti Vidyapeeths College of Engineering, New Delhi (Affilated to GGSIPU) 
                    with major in Computer Science Enginnering
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="timeline-school"
                contentStyle={{ backgroundColor: 'rgba(5, 62, 120,.2)', color: '#fff' }}
                contentArrowStyle={{ borderRight: '12px solid  rgba(5, 62, 120,.2)' }}
                date="2018"
                iconStyle={{ background: 'black', color: '#1f73f1' }}
                icon={<MdSchool />}
            >
                <h3 className="vertical-timeline-element-title">Senior Secondary Education(Class 12th)</h3>
                <p>
                    PCM with Computer Science
                    Blue Bells Model Sr. Sec. School
                </p>
            </VerticalTimelineElement>
        </VerticalTimeline>
    )
}

export default TimeLine;