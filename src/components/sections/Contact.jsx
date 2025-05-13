// import React, { useRef } from "react";
// import styled from "styled-components";
// import emailjs from "@emailjs/browser";
// import EarthCanvas from "../canvas/Earth";

// const Container = styled.div`
//   display: flex;
//   justify-content: center;
//   gap: 12px;
//   z-index: 1;
//   align-items: center;
//   @media (max-width: 960px) {
//     padding: 0px;
//   }
// `;

// const Wrapper = styled.div`
//   position: relative;
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   flex-direction: column;
//   width: 100%;
//   max-width: 1350px;
//   padding: 0px 0px 80px 0px;
//   gap: 12px;
//   @media (max-width: 960px) {
//     flex-direction: column;
//   }
// `;

// const Title = styled.div`
//   font-size: 52px;
//   text-align: center;
//   font-weight: 600;
//   margin-top: 20px;
//   color: ${({ theme }) => theme.text_primary};
//   @media (max-width: 768px) {
//     margin-top: 12px;
//     font-size: 32px;
//   }
// `;

// const Desc = styled.div`
//   font-size: 18px;
//   text-align: center;
//   max-width: 600px;
//   color: ${({ theme }) => theme.text_secondary};
//   @media (max-width: 768px) {
//     margin-top: 12px;
//     font-size: 16px;
//   }
// `;
// const ContactForm = styled.form`
//   width: 95%;
//   max-width: 600px;
//   display: flex;
//   flex-direction: column;
//   background-color: rgba(17, 25, 40, 0.83);
//   border: 1px solid rgba(255, 255, 255, 0.125);
//   padding: 32px;
//   border-radius: 12px;
//   box-shadow: rgba(23, 92, 230, 0.1) 0px 4px 24px;
//   margin-top: 28px;
//   gap: 12px;
// `;
// const ContactTitle = styled.div`
//   font-size: 28px;
//   margin-bottom: 6px;
//   font-weight: 600;
//   color: ${({ theme }) => theme.text_primary};
// `;
// const ContactInput = styled.input`
//   flex: 1;
//   background-color: transparent;
//   border: 1px solid ${({ theme }) => theme.text_secondary + 50};
//   outline: none;
//   font-size: 18px;
//   color: ${({ theme }) => theme.text_primary};
//   border-radius: 12px;
//   padding: 12px 16px;
//   &:focus {
//     border: 1px solid ${({ theme }) => theme.primary};
//   }
// `;
// const ContactInputMessage = styled.textarea`
//   flex: 1;
//   background-color: transparent;
//   border: 1px solid ${({ theme }) => theme.text_secondary + 50};
//   outline: none;
//   font-size: 18px;
//   color: ${({ theme }) => theme.text_primary};
//   border-radius: 12px;
//   padding: 12px 16px;
//   &:focus {
//     border: 1px solid ${({ theme }) => theme.primary};
//   }
// `;
// const ContactButton = styled.input`
//   width: 100%;
//   text-decoration: none;
//   text-align: center;
//   background: hsla(271, 100%, 50%, 1);
//   background: linear-gradient(
//     225deg,
//     hsla(271, 100%, 50%, 1) 0%,
//     hsla(294, 100%, 50%, 1) 100%
//   );
//   background: -moz-linear-gradient(
//     225deg,
//     hsla(271, 100%, 50%, 1) 0%,
//     hsla(294, 100%, 50%, 1) 100%
//   );
//   background: -webkit-linear-gradient(
//     225deg,
//     hsla(271, 100%, 50%, 1) 0%,
//     hsla(294, 100%, 50%, 1) 100%
//   );
//   padding: 13px 16px;
//   margin-top: 2px;
//   border-radius: 12px;
//   border: none;
//   color: ${({ theme }) => theme.text_primary};
//   font-size: 18px;
//   font-weight: 600;
// `;

// const Contact = () => {
//   const form = useRef();

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     emailjs
//       .sendForm(
//         "service_tox7kqs",
//         "template_nv7k7mj",
//         form.current,
//         "SybVGsYS52j2TfLbi"
//       )
//       .then(
//         (result) => {
//           alert("Message Sent");
//           form.current.resut();
//         },
//         (error) => {
//           alert(error);
//         }
//       );
//   };

//   return (
//     <Container>
//       <Wrapper>
//         <EarthCanvas />
//         <Title>Contact</Title>
//         <Desc>
//           Feel free to reach out to me for any questions or opportunities!
//         </Desc>
//         <ContactForm onSubmit={handleSubmit}>
//           <ContactTitle>Email Me 🚀</ContactTitle>
//           <ContactInput placeholder="Your Email" name="from_email" />
//           <ContactInput placeholder="Your Name" name="from_name" />
//           <ContactInput placeholder="Subject" name="subject" />
//           <ContactInputMessage placeholder="Message" name="message" rows={4} />
//           <ContactButton type="submit" value="Send" />
//         </ContactForm>
//       </Wrapper>
//     </Container>
//   );
// };

// export default Contact;


import React, { useEffect } from "react";
import styled, { keyframes } from "styled-components";
import { FaEnvelope, FaLinkedin } from "react-icons/fa";
import EarthCanvas from "../canvas/Earth";

// Sparkle effect for icons
const sparkle = keyframes`
  0% { opacity: 0.8; transform: scale(1); }
  50% { opacity: 1; transform: scale(1.1); }
  100% { opacity: 0.8; transform: scale(1); }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 40px 0;
  z-index: 1;
`;

const Wrapper = styled.div`
  max-width: 1350px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
  padding-bottom: 80px;
`;

const Title = styled.div`
  font-size: 52px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_primary};
  @media (max-width: 768px) {
    font-size: 32px;
  }
`;

const Desc = styled.div`
  font-size: 18px;
  max-width: 600px;
  color: ${({ theme }) => theme.text_secondary};
  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const Row = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  max-width: 900px;
  margin-top: 40px;
  flex-wrap: wrap;
  gap: 32px;
`;

const IconColumn = styled.a`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-decoration: none;
  gap: 8px;
  cursor: pointer;
`;

const MailIcon = styled(FaEnvelope)`
  font-size: 36px;
  color: white;
  animation: ${sparkle} 1.5s infinite;
`;

const LinkedInIcon = styled(FaLinkedin)`
  font-size: 36px;
  color: white;
  animation: ${sparkle} 1.5s infinite;
`;

const IconText = styled.div`
  font-size: 24px;
  color: white;
  font-weight: bold;
`;

const LogoWrapper = styled.div`
  pointer-events: none;
  user-select: none;
  -webkit-user-drag: none;
`;

const LogoImage = styled.img`
  max-width: 150px;
  height: auto;
  border-radius: 16px;
  box-shadow: 0 0 25px rgba(255, 255, 255, 0.15);
  pointer-events: none;
  user-select: none;
  -webkit-user-drag: none;

  @media (max-width: 768px) {
    max-width: 120px;
  }
`;

const Contact = () => {
  useEffect(() => {
    const disableRightClick = (e) => e.preventDefault();
    document.addEventListener('contextmenu', disableRightClick);
    return () => document.removeEventListener('contextmenu', disableRightClick);
  }, []);

  return (
    <Container>
      <Wrapper>
        <EarthCanvas />
        <Title>Contact</Title>
        <Desc>I am actively seeking roles where I can contribute meaningfully.</Desc>
        <Row>
          <IconColumn href="mailto:kaniyamudhanyogaraja@gmail.com">
            <MailIcon />
            <IconText>Email</IconText>
          </IconColumn>

          <LogoWrapper>
            <LogoImage src="https://github.com/user-attachments/assets/85ad52c3-8c56-408a-8d9d-c7d7f89c7f95" alt="Logo" />
          </LogoWrapper>

          <IconColumn href="https://www.linkedin.com/in/kaniyamuhdan-y" target="_blank" rel="noopener noreferrer">
            <LinkedInIcon />
            <IconText>LinkedIn</IconText>
          </IconColumn>
        </Row>
      </Wrapper>
    </Container>
  );
};

export default Contact;
