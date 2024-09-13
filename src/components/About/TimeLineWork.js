import React from 'react'
import { MdWork } from 'react-icons/md';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';


const TimeLineWork = () => {
  return (
    <VerticalTimeline layout="5-column-right" className="vertical-timeline-work">
            <VerticalTimelineElement
                className="timeline-work"
                contentStyle={{ backgroundColor: 'rgba(70, 2, 115,.2)', color: '#fff' }}
                contentArrowStyle={{ borderRight: '12px solid  rgba(70, 2, 115,.2)'}}
                date="Jun 2021 - Sep 2021"
                iconStyle={{ background: 'black', color: '#ce17d8' }}
                icon={<MdWork />}
            >
                <h3 className="vertical-timeline-element-title">Incedo</h3>
                <h4 className="vertical-timeline-element-subtitle">Software Engineer</h4>
                <p>
                    Was tasekd with the job of transitioning existing <b className='blue'>EJS pages</b>
                    to <b className='blue'>React based components</b>
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="timeline-work"
                contentStyle={{ backgroundColor: 'rgba(70, 2, 115,.2)', color: '#fff' }}
                contentArrowStyle={{ borderRight: '12px solid  rgba(70, 2, 115,.2)'}}
                date="Jun 2021 - Sep 2021"
                iconStyle={{ background: 'black', color: '#ce17d8' }}
                icon={<MdWork />}
            >
                <h3 className="vertical-timeline-element-title">Unolo</h3>
                <h4 className="vertical-timeline-element-subtitle">Software Engineer Intern</h4>
                <p>
                    Was tasekd with the job of transitioning existing <b className='blue'>EJS pages</b>
                    to <b className='blue'>React based components</b>
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="timeline-work"
                contentStyle={{ backgroundColor: 'rgba(70, 2, 115,.2)', color: '#fff' }}
                contentArrowStyle={{ borderRight: '12px solid  rgba(70, 2, 115,.2)' }}
                date="Jun 2020 - Aug 2020"
                iconStyle={{ background: 'black', color: '#ce17d8' }}
                icon={<MdWork />}
            >
                <h3 className="vertical-timeline-element-title">StrideAhead</h3>
                <h4 className="vertical-timeline-element-subtitle">Design Intern</h4>
                <p>
                    Implemented design ideas through <b className='blue'>wireframing</b> tools such as <b className='blue'>Figma & Illustrator</b>
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="timeline-work"
                contentStyle={{ backgroundColor: 'rgba(70, 2, 115,.2)', color: '#fff' }}
                contentArrowStyle={{ borderRight: '12px solid  rgba(70, 2, 115,.2)' }}
                date="Aug 2020 - May 2021"
                iconStyle={{ background: 'black', color: '#ce17d8' }}
                icon={<MdWork />}
            >
                <h3 className="vertical-timeline-element-title">IEEE Student Branch</h3>
                <h4 className="vertical-timeline-element-subtitle">Executive Committee Member</h4>
                <p>
                    <b className='blue'>Led</b> the tech team of 3 for the society's flagship event <b className='blue'>WIEHack3.0</b>
                </p>
            </VerticalTimelineElement>
        </VerticalTimeline>
  )
}

export default TimeLineWork