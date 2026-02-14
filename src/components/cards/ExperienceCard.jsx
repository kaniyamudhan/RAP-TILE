import React from "react";
import styled from "styled-components";
import { VerticalTimelineElement } from "react-vertical-timeline-component";

const Top = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

const Image = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 10px;
  object-fit: cover;
`;

const Body = styled.div`
  display: flex;
  flex-direction: column;
`;

const Role = styled.div`
  font-size: 18px;
  font-weight: 600;
`;

const Company = styled.div`
  font-size: 14px;
  opacity: 0.8;
`;

const DateText = styled.div`
  font-size: 12px;
  opacity: 0.6;
`;

const Description = styled.div`
  margin-top: 10px;
  font-size: 14px;
`;

const Skills = styled.div`
  margin-top: 10px;
`;

const ItemWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

const Skill = styled.span`
  font-size: 12px;
  background: rgba(255, 255, 255, 0.1);
  padding: 4px 8px;
  border-radius: 8px;
`;

const ExperienceCard = ({ experience }) => {
  return (
    <VerticalTimelineElement
      date={experience.date}
      icon={
        <img
          width="100%"
          height="100%"
          alt={experience.company}
          style={{ borderRadius: "50%", objectFit: "cover" }}
          src={experience.img}
        />
      }
      contentStyle={{
        background: "rgba(17, 25, 40, 0.83)",
        color: "#fff",
        borderRadius: "6px",
      }}
    >
      <Top>
        <Image src={experience.img} />
        <Body>
          <Role>{experience.role}</Role>
          <Company>{experience.company}</Company>
          <DateText>{experience.date}</DateText>
        </Body>
      </Top>

      <Description>
        {experience?.desc && <div>{experience.desc}</div>}

        {experience?.skills && (
          <Skills>
            <b>Skills:</b>
            <ItemWrapper>
              {experience.skills.map((skill, index) => (
                <Skill key={index}>{skill}</Skill>
              ))}
            </ItemWrapper>
          </Skills>
        )}
      </Description>
    </VerticalTimelineElement>
  );
};

export default ExperienceCard;
