import { Button } from '@react-email/button';
import { Container } from '@react-email/container';
import { Head } from '@react-email/head';
import { Hr } from '@react-email/hr';
import { Html } from '@react-email/html';
import { Img } from '@react-email/img';
import { Link } from '@react-email/link';
import { Preview } from '@react-email/preview';
import { Section } from '@react-email/section';
import { Text } from '@react-email/text';
import { Font } from '@react-email/font';
import * as React from 'react';
import { Heading } from '@react-email/heading';
import { Column } from '@react-email/column';
import { Row } from '@react-email/components';

const data = {
  year: "2024",
  banner_image: "https://sawtee.org/images/Happy-New-Year-Background-08.png",
  heading: "Dear friends and colleagues",
  content: ["As we step into the new year, SAWTEE would like to share a glimpse of its activities and accomplishments throughout 2023.", "During this period, SAWTEE continued to work on its research, capacity-building, and advocacy activities on a diverse range of topics spanning trade, economics, and the environment. One of the major research outputs of the year has been a study on the Nepal-India Trade Treaty and avenues for amendments. Furthermore, SAWTEE organized several discussion programmes on the assessment of public debt and prospects and challenges of Nepal’s regional trade, Nepal-US trade, and Nepal-China trade, among others. Aiming to strengthen the skills and knowledge of economic journalists, this year, SAWTEE offered media fellowship to five Nepali journalists.", "We look forward to continuing our efforts in the areas of research, advocacy, and capacity building. Your feedback is much appreciated. Please share it through sawtee@sawtee.org or our social media accounts.", " Here’s wishing you a joyful and prosperous New Year 2024. May this year bring abundant happiness to you and your family."],
  contact: {
    name: "South Asia Watch on Trade, Economics and Environment (SAWTEE)",
    email: "sawtee@sawtee.org",
    phone: "+977-1-4444438",
    fax: "+977-1-4444570",
    address: "P.O. Box: 19366, Tukucha Marg, Kathmandu, Nepal",
    website: "https://sawtee.org",
    facebook: "https://www.facebook.com/sawtee.org",
    twitter: "https://twitter.com/sawteenp",
    linkedin: "https://www.linkedin.com/company/sawtee",
    youtube: "https://www.youtube.com/@sawteenp",
  },
  footer: {
    shoutOut: "You are receiving this email because you have visited our site or asked us about regular newsletter. If you wish to unsubscribe from our newsletter, please email us with a subject of 'UNSUBSCRIBE'.",
    links: [
      {
        name: "trade insight",
        link: "https://www.sawtee.org/publications/trade-insight/"
      },
      {
        name: "books",
        link: "https://www.sawtee.org/publications/books/"
      },
      {
        name: "working paper",
        link: "https://www.sawtee.org/publications/working-paper/"
      },
      {
        name: "newsletters",
        link: "https://www.sawtee.org/publications/newsletters/"
      }
    ]
  }

}

export default function Email() {
  return (
    <Html>
      <Head>
        <Font
          fontFamily="Roboto"
          fallbackFontFamily="Verdana"
          webFont={{
            url: 'https://fonts.gstatic.com/s/roboto/v27/KFOmCnqEu92Fr1Mu4mxKKTU1Kg.woff2',
            format: 'woff2',
          }}
          fontWeight={400}
          fontStyle="normal"
        />
      </Head>
      <Preview>Happy New Year {data.year} !!</Preview>
      <Section style={main}>
        <Container style={container}>
          <Section style={box}>
            <Section style={{ padding: '20px 30px 0' }} >
              <Column>
                <Img
                  src="https://sawtee.org/images/logo-sawtee.webp"
                  width="120"
                  height="auto"
                  alt="SAWTEE"
                />
              </Column>
              <Column style={{ display: 'inline-flex', float: 'right' }}>
                <Link href='https://twitter.com/sawteenp' style={social_links}>
                  <Img
                    src="https://sawtee.org/images/twitter-logo.png"
                    style={image_style}
                    alt="Twitter"
                    width="24"
                    height="24"
                  />
                </Link>
                <Link href="https://www.facebook.com/SAWTEENP/" style={social_links}>
                  <Img
                    src="https://sawtee.org/images/facebook-logo.png"
                    style={image_style}
                    alt="Facebook"
                    width="24"
                    height="24"
                  />
                </Link>
                <Link href="https://www.linkedin.com/company/sawtee" style={social_links}>
                  <Img
                    src="https://sawtee.org/images/linkedin-logo.png"
                    style={image_style}
                    alt="LinkedIn"
                    width="24"
                    height="24"
                  />
                </Link>
                <Link href="https://www.youtube.com/channel/UCP--4sJx0HJONM-UP_53vjg" style={social_links}>
                  <Img
                    src="https://sawtee.org/images/youtube-logo.png"
                    style={image_style}
                    alt="Youtube"
                    width="24"
                    height="24"
                  />
                </Link>

              </Column>
            </Section>

            <Hr style={hr} />

            <Section style={{ marginBottom: '30px' }}>
              <Img src="https://sawtee.org/images/Happy-New-Year-Background-08.png" width="100%" height="auto" alt={`New Year ${data.year} banner`} loading='lazy' />
            </Section>

            <Section style={greeting_heading}>
              <Heading as='h2'>
                {data.heading}
              </Heading>
              <Text style={paragraph}>
                As we step into the new year, SAWTEE would like to share a glimpse of its activities and accomplishments throughout 2023.
              </Text>
              <Text style={paragraph}>
                During this period, SAWTEE continued to work on its <Link style={anchor} href="https://sawtee.org/research/">research</Link>, <Link style={anchor} href="https://sawtee.org/featured-events/workshop-for-economic-journalists.html">capacity-building</Link>, and <Link style={anchor} href="https://sawtee.org/sawtee-in-media/">advocacy</Link> activities on a diverse range of topics spanning trade, economics, and the environment. One of the major research outputs of the year has been a <Link style={anchor} href="https://sawtee.org/publications/Suggested-revisions-to-Nepal-India-Trade-Treaty.pdf">study</Link> on the Nepal-India Trade Treaty and avenues for amendments. Furthermore, SAWTEE organized several discussion programmes on the assessment of <Link style={anchor} href="https://www.sawtee.org/featured-events/discussion-programme-on-public-debt.html">public debt</Link> and prospects and challenges of Nepal’s <Link style={anchor} href="https://www.sawtee.org/featured-events/discussion-programme-on-regional-trade.html">regional</Link> trade, <Link style={anchor} href="https://www.sawtee.org/featured-events/roundtable-discussion-on-unpacking-nepal-us-trade.html">Nepal-US</Link> trade, and <Link style={anchor} href="https://sawtee.org/featured-events/roundtable-discussion-on-nepal-china-trade-prospects-and-challenges.html">Nepal-China</Link> trade, among others. Aiming to strengthen the skills and knowledge of economic journalists, this year, SAWTEE offered <Link style={anchor} href="https://www.sawtee.org/media-fellows.php">media fellowship</Link> to five Nepali journalists.
              </Text>


              <Text style={paragraph}>
                We look forward to continuing our efforts in the areas of research, advocacy, and capacity building. Your feedback is much appreciated. Please share it through <Link href="mailto:sawtee@sawtee.org" style={anchor}>sawtee@sawtee.org</Link> or our social media accounts.
              </Text>

              <Text style={paragraph}>
                Here’s wishing you a joyful and prosperous New Year 2024. May this year bring abundant happiness to you and your family.
              </Text>

              <Hr style={hr} />
            </Section>
            <Section style={footer_section}>
              <Text style={address}>{data.contact.name}</Text>
              <Text style={address}>{data.contact.address}</Text>
              <Text style={address}>Tel: {data.contact.phone} Fax: {data.contact.fax}</Text>
              <Text style={address}> Email: {data.contact.email}</Text>
              <Text style={address}> Web: <Link href={data.contact.website} style={anchor}>{data.contact.website}</Link></Text>
              <Section style={{ display: 'inline-flex', marginTop: '10px', justifyContent: 'center', textAlign: 'center' as const }}>
                <Row >
                  <Column style={social_column}>
                    <Link href={data.contact.twitter} style={social_links}>
                      <Img
                        style={image_style}
                        src="https://sawtee.org/images/twitter-logo.png"
                        width="24"
                        height="24"
                        alt="Twitter"
                      />
                    </Link>
                  </Column>
                  <Column style={social_column}>
                    <Link href={data.contact.facebook} style={social_links}>
                      <Img
                        style={image_style}
                        src="https://sawtee.org/images/facebook-logo.png"
                        width="24"
                        height="24"
                        alt="Facebook"
                      />
                    </Link>
                  </Column>
                  <Column style={social_column}>
                    <Link href={data.contact.linkedin} style={social_links}>
                      <Img
                        style={image_style}
                        src="https://sawtee.org/images/linkedin-logo.png"
                        width="24"
                        height="24"
                        alt="LinkedIn"
                      />
                    </Link>
                  </Column>
                  <Column style={social_column}>
                    <Link href={data.contact.youtube} style={social_links}>
                      <Img
                        style={image_style}
                        src="https://sawtee.org/images/youtube-logo.png"
                        width="24"
                        height="24"
                        alt="Youtube"
                      />
                    </Link>
                  </Column>
                </Row>
              </Section>
              <Text style={footer_shoutOut}>
                {data.footer.shoutOut}
              </Text>
            </Section>

            {/* <Section style={{ backgroundColor: '#5C8374', padding: '10px' }}>
              {data.footer.links.map((item) => {
                return (
                  <Column style={{ textAlign: 'center' as const }}>
                    <Link style={publications_link} href={item.link}> {"| " + item.name + " |"}</Link>
                  </Column>
                );
              })}
            </Section> */}
          </Section>
        </Container >
      </Section >
    </Html >
  );
}

const main = {
  backgroundColor: '#5C8374',
  fontFamily:
    '-apple-system,BlinkMacSystemFont, system-ui, "Segoe UI",Roboto,"Helvetica Neue",Ubuntu,sans-serif',
};

const image_style = {
  width: '24px',
  height: 'auto',
  objectFit: 'cover',
  display: 'block'
}

const social_column = {
  width: '24px',
  height: '24px',
}

const container = {
  backgroundColor: '#1B4242',
  backdropFilter: 'blur(5px)',
  margin: '0 auto',
  padding: '20px 0 48px',
  marginBottom: '64px',
};

const box = {
  padding: '0 48px',
};

const social_links = {
  width: '24px',
  height: '24px',
  display: 'block',
  paddingRight: '5px',
  textAlign: 'center' as const,
  margin: '0 auto'
}

const hr = {
  borderColor: '#9EC8B9',
  margin: '20px 0',
};

const greeting_heading = {
  textAlign: 'center',
  width: '100%',
  color: '#9EC8B9',

}

const paragraph = {
  color: '#9EC8B9',
  fontFamily:
    '-apple-system,BlinkMacSystemFont, system-ui, "Segoe UI",Roboto,"Helvetica Neue",Ubuntu,sans-serif',
  fontSize: '16px',
  lineHeight: '24px',
  textAlign: 'center' as const,

};

const address = {
  margin: 0,
}

const anchor = {
  color: '#FFECD6',
};

const button = {
  backgroundColor: '#656ee8',
  borderRadius: '5px',
  color: '#fff',

  fontSize: '16px',
  fontWeight: 'bold',
  textDecoration: 'none',
  textAlign: 'center' as const,
  display: 'block',
  width: '100%',
};

const footer_section = {
  textAlign: 'center' as const,
  color: '#9EC8B9',

  fontSize: '12px',
  lineHeight: '16px',
  margin: '0'
}

const publications_link = {
  color: '#092635',
  fontSize: '12px',
  // fontWeight: 'bold',

  textTransform: 'uppercase',
}

const footer_shoutOut = {
  color: '#8898aa',
  fontSize: '12px',
  fontWeight: 'normal',
  lineHeight: '16px',
  fontStyle: 'italic'
};
