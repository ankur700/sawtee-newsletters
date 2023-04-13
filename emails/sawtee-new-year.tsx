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
      <Preview>Happy New Year 2080 !!</Preview>
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
                    width="24"
                    height="24"
                    alt="Twitter"
                  />
                </Link>
                <Link href="https://www.facebook.com/SAWTEENP/" style={social_links}>
                  <Img
                    src="https://sawtee.org/images/facebook-logo.png"
                    width="24"
                    height="24"
                    alt="Facebook"
                  />
                </Link>
                <Link href="https://www.linkedin.com/company/sawtee" style={social_links}>
                  <Img
                    src="https://sawtee.org/images/linkedin-logo.png"
                    width="24"
                    height="24"
                    alt="LinkedIn"
                  />
                </Link>
                <Link href="https://www.youtube.com/channel/UCP--4sJx0HJONM-UP_53vjg" style={social_links}>
                  <Img
                    src="https://sawtee.org/images/youtube-logo.png"
                    width="24"
                    height="24"
                    alt="Youtube"
                  />
                </Link>

              </Column>
            </Section>

            <Hr style={hr} />

            <Section style={{ marginBottom: '30px' }}>
              <Img src='https://sawtee.org/images/new-year-poster-2080.png' width="100%" height="auto" alt="New Year Poster 2080" loading='lazy' />
            </Section>

            <Section style={greeting_heading}>

              <Heading as='h2'>
                Dear friends and colleagues
              </Heading>
              <Text style={paragraph}>
                As we near the end of the year, SAWTEE would like to reflect on the research and events that the organization has accomplished in the year 2079 B.S
              </Text>
              <Text style={paragraph}>
                As the year progressed, SAWTEE steadfastly upheld its commitment to its
                <Link style={anchor} href='https://sawtee.org/publications.php'> research</Link>, <Link style={anchor} href='https://www.sawtee.org/featured-events/media-training-programme-on-%E2%80%9Ceconomic-reporting-external-sector%E2%80%9D-.html'>capacity building</Link> and <Link style={anchor} href='https://sawtee.org/sawtee-in-media/'>advocacy</Link> activities on a diverse range of topics at national and regional levels. One of the major research outcomes of the year has been a <Link style={anchor} href='https://sawtee.org/publications/LDC_graduation_study_Sep_2022.pdf'>study</Link> on the implications of Nepal’s expected graduation from the least developed country category three years hence. SAWTEE undertook studies on mainstreaming trade policy at subnational levels, economic diplomacy, value chain analysis of export commodities of interest to Koshi Province, gender dimensions of trade in Nepal, evaluation of innovation support programmes for small business, political economic analysis of Nepal’s public debt, among others.
              </Text>
            </Section>
            {/* <Button
              pX={10}
              pY={10}
              style={button}
              href="https://dashboard.stripe.com/login"
            >
              View your Stripe Dashboard
            </Button> */}
            <Hr style={hr} />
            <Text style={paragraph}>
              SAWTEE organized in-person <Link style={anchor} href="https://sawtee.org/featured-events/">workshops</Link>, including a <Link style={anchor} href="https://sawtee.org/featured-events/regional-conference-on-suitable-seeds-for-food-security.html">regional</Link> one. Most recently, it held a <Link style={anchor} href="https://sawtee.org/in-focus/roundtable-discussion-on-nepal-india-treaty-of-trade.html">roundtable</Link> discussion to identify the required amendments to the Nepal-India Treaty of Trade, which is up for renewal in 2080 B.S., bringing together policymakers, the private sector, civil society and the media. In addition, SAWTEE organized a series of webinars in the second half of 2079 as part of a Civil Society Forum, on <Link style={anchor} href="https://sawtee.org/featured-events/cop27-issues-agenda-and-expectations--.html">climate change</Link>, <Link style={anchor} href="https://sawtee.org/featured-events/regional-connectivity-bimstec-master-plan-for-transport-connectivity.html">BIMSTEC Master Plan on transport connectivity</Link>, and <Link style={anchor} href="https://sawtee.org/featured-events/regional-investment-barriers-opportunities-and-facilitation.html">intraregional investment in South Asia</Link>. We continued with the publication of <Link style={anchor} href="https://www.sawtee.org/publications/trade-insight/">Trade Insight</Link>, and <Link style={anchor} href="https://www.sawtee.org/publications/issue-paper/">issue briefs</Link> and <Link style={anchor} href="https://sawtee.org/publications/policy-brief/">policy briefs</Link> on varied topics.
            </Text>
            <Text style={paragraph}>
              We look forward to continuing our efforts in the coming year in the areas of research, advocacy and capacity building. If you have any feedback, please reach out to us through <Link style={anchor} href="mailto:sawtee@sawtee.org">sawtee@sawtee.org</Link> or our social media accounts.
            </Text>
            <Text style={paragraph}>
              Thank you for your continued support. We wish you a happy, healthy, and prosperous New Year 2080 B.S.
            </Text>

            {/* <Text style={paragraph}>— The SAWTEE team</Text> */}
            <Hr style={hr} />


            <Section style={footer_section}>
              <Container style={{ textAlign: 'center' as const }}>
                <Text style={address}>South Asia Watch on Trade, Economics and Environment (SAWTEE)</Text>
                <Text style={address}>P.O. Box: 19366, Tukucha Marg, Kathmandu, Nepal</Text>
                <Text style={address}>Tel: 977-1-4424360, 4444438 Fax: 977-1-4444570</Text>
                <Text style={address}> Email: sawtee@sawtee.org</Text>
                <Text style={address}> Web: <Link href="https://sawtee.org" style={anchor}>www.sawtee.org</Link></Text>

                <Section style={{ display: 'inline-flex', marginTop: '10px', justifyContent: 'center' }}>
                  <Column style={{ paddingLeft: '5px' }}>
                    <Link href='https://twitter.com/sawteenp' style={social_links}>
                      <Img
                        src="https://sawtee.org/images/twitter-logo.png"
                        width="24"
                        height="24"
                        alt="Twitter"
                      />
                    </Link>
                  </Column>
                  <Column style={{ paddingLeft: '5px' }}>
                    <Link href="https://www.facebook.com/SAWTEENP/" style={social_links}>
                      <Img
                        src="https://sawtee.org/images/facebook-logo.png"
                        width="24"
                        height="24"
                        alt="Facebook"
                      />
                    </Link>
                  </Column>
                  <Column style={{ paddingLeft: '5px' }}>
                    <Link href="https://www.linkedin.com/company/sawtee" style={social_links}>
                      <Img
                        src="https://sawtee.org/images/linkedin-logo.png"
                        width="24"
                        height="24"
                        alt="LinkedIn"
                      />
                    </Link>
                  </Column>
                  <Column style={{ paddingLeft: '5px' }}>
                    <Link href="https://www.youtube.com/channel/UCP--4sJx0HJONM-UP_53vjg" style={social_links}>
                      <Img
                        src="https://sawtee.org/images/youtube-logo.png"
                        width="24"
                        height="24"
                        alt="Youtube"
                      />
                    </Link>
                  </Column>
                </Section>
              </Container>
              <Text style={footer_shoutOut}>
                You are receiving this email because you have visited our site or asked us about regular newsletter. If you wish to unsubscribe from our newsletter, please email us with a subject of "UNSUBSCRIBE".
              </Text>
            </Section>

            <Section style={{ backgroundColor: '#5885AF', padding: '10px' }}>
              <Column style={{ textAlign: 'center' as const }}><Link style={publications_link} href="https://www.sawtee.org/publications/trade-insight">Trade Insight </Link></Column>
              <Column style={{ color: '#fff' }}>|</Column>
              <Column style={{ textAlign: 'center' as const }}><Link style={publications_link} href="https://www.sawtee.org/publications/books">Books</Link>
              </Column>
              <Column style={{ color: '#fff' }}>|</Column>
              <Column style={{ textAlign: 'center' as const }}><Link style={publications_link} href="https://www.sawtee.org/publications/working-paper">Working Paper</Link>
              </Column>
              <Column style={{ color: '#fff' }}>|</Column>

              <Column style={{ textAlign: 'center' as const }}><Link style={publications_link} href="https://www.sawtee.org/newsletters">Newsletter</Link></Column>
            </Section>

          </Section>
        </Container>
      </Section>
    </Html>
  );
}

const main = {
  backgroundColor: '#274472',
  // backgroundBlendMode: 'multiply',
  // backgroundImage: 'url(/static/moroccan-flower-dark.webp)',
  // backgroundSize: 'cover',
  // backgroundRepeat: 'no-repeat'
  // #f6f9fc
};

const container = {
  backgroundColor: 'rgba(0,0,0,0.25)',
  backdropFilter: 'blur(5px)',
  margin: '0 auto',
  padding: '20px 0 48px',
  marginBottom: '64px',
};

const box = {
  padding: '0 48px',
};

const social_links = {
  paddingRight: '5px'
}

const hr = {
  borderColor: '#e6ebf1',
  margin: '20px 0',
};

const greeting_heading = {
  textAlign: 'center',
  width: '100%',
  color: '#fff',

}

const paragraph = {
  color: '#f1f1f1',
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Ubuntu,sans-serif',
  fontSize: '16px',
  lineHeight: '24px',
  textAlign: 'center' as const,

};

const address = {
  margin: 0,
}

const anchor = {
  // color: '#e80046',
  color: '#B99C18',
  textShadow: "0.5px 0.5px #e80046"
};

const button = {
  backgroundColor: '#656ee8',
  borderRadius: '5px',
  color: '#fff',
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Ubuntu,sans-serif',
  fontSize: '16px',
  fontWeight: 'bold',
  textDecoration: 'none',
  textAlign: 'center' as const,
  display: 'block',
  width: '100%',
};

const footer_section = {
  textAlign: 'center' as const,
  color: '#f1f1f1',
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Ubuntu,sans-serif',
  fontSize: '12px',
  lineHeight: '16px',
  margin: '0'
}

const publications_link = {
  color: '#fff',
  fontSize: '12px',
  fontWeight: 'normal',
  fontFamily: '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Ubuntu,sans-serif',
}

const footer_shoutOut = {
  color: '#8898aa',
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Ubuntu,sans-serif',
  fontSize: '12px',
  fontWeight: 'bold',
  lineHeight: '16px',
  fontStyle: 'italic'
};
