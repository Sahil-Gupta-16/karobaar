import * as React from 'react';
import { Html, Body, Head, Heading, Hr, Container, Preview, Section, Text } from '@react-email/components';

interface ContactEmailTemplateProps {
  name: string;
  email: string;
  message: string;
  company?: string;
  teamSize?: string;
  purpose?: string;
}

export const ContactEmailTemplate: React.FC<Readonly<ContactEmailTemplateProps>> = ({
  name,
  email,
  message,
  company,
  teamSize,
  purpose,
}) => (
  <Html>
    <Head />
    <Preview>New Inquiry from {name}</Preview>
    <Body style={main}>
      <Container style={container}>
        <Section style={box}>
          <Heading style={h1}>New Inquiry: {purpose || 'General'}</Heading>
          <Hr style={hr} />
          <Text style={paragraph}>
            <b>Name:</b> {name}
          </Text>
          <Text style={paragraph}>
            <b>Email:</b> {email}
          </Text>
          {company && (
            <Text style={paragraph}>
              <b>Company:</b> {company}
            </Text>
          )}
          {teamSize && (
            <Text style={paragraph}>
              <b>Team Size:</b> {teamSize}
            </Text>
          )}
          {purpose && (
            <Text style={paragraph}>
              <b>Purpose:</b> {purpose}
            </Text>
          )}
          <Text style={paragraph}>
            <b>Message:</b>
            <br />
            {message}
          </Text>
          <Hr style={hr} />
          <Text style={footer}>
            Karobaar CRM Landing Page System
          </Text>
        </Section>
      </Container>
    </Body>
  </Html>
);

const main = {
  backgroundColor: '#f6f9fc',
  fontFamily: '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Ubuntu,sans-serif',
};
const container = {
  backgroundColor: '#ffffff',
  margin: '0 auto',
  padding: '20px 0 48px',
  marginBottom: '64px',
};
const box = {
  padding: '0 48px',
};
const h1 = {
  color: '#333',
  fontSize: '24px',
  fontWeight: 'bold',
  padding: '17px 0 0',
  margin: '0',
};
const hr = {
  borderColor: '#e6ebf1',
  margin: '20px 0',
};
const paragraph = {
  color: '#525f7f',
  fontSize: '16px',
  lineHeight: '24px',
  textAlign: 'left' as const,
};
const footer = {
  color: '#8898aa',
  fontSize: '12px',
  lineHeight: '16px',
};
