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
      <Preview>Happy New Year 2081 !!</Preview>
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
              <Img src='https://sawtee.org/images/sawtee-2081.png' width="100%" height="auto" alt="New Year Poster 2080" loading='lazy' />
            </Section>

            <Section style={greeting_heading}>

              <Heading as='h2'>
                Dear friends and colleagues
              </Heading>
              <Text style={paragraph}>
                As we embark upon a new year and reflect on the accomplishments of the past year, we are excited to share the accomplishments made by SAWTEE in advancing its mission on <Link href="https://sawtee.org/research/" style={anchor}>research</Link>, <Link href="https://sawtee.org/featured-events/workshop-for-journalists-in-karnali-province.html" style={anchor} >capacity-building</Link>, and <Link href="https://sawtee.org/sawtee-in-media/" style={anchor}>advocacy</Link> at both national and regional levels.
              </Text>
              <Text style={paragraph}>
                Among the notable accomplishments, SAWTEE produced two studies: <Link href="https://sawtee.org/publications/Suggested-revisions-to-Nepal-India-Trade-Treaty.pdf" style={anchor}>one</Link> examining the Nepal-India Trade Treaty and avenues for amendments, and the <Link href="https://sawtee.org/publications/WP23_Nepal-US_trade_PKharel_WP.pdf" style={anchor}>other</Link> on “The 66/77 products inside out: The long and short of the United States’ Nepal Trade Preference Programme”.
              </Text>
            </Section>

            <Hr style={hr} />

            <Text style={paragraph}>
              Additionally, SAWTEE convened discussion programmes on topics such as the public debt situation in select South Asian countries, <Link style={anchor} href="https://sawtee.org/featured-events/discussion-programme-on-regional-trade.html">the prospects and challenges of Nepal's regional trade</Link>, and bilateral trade relations with key partners like the <Link style={anchor} href="https://sawtee.org/featured-events/roundtable-discussion-on-unpacking-nepal-us-trade.html">United States</Link> and <Link style={anchor} href="https://sawtee.org/featured-events/roundtable-discussion-on-nepal-china-trade-prospects-and-challenges.html">China</Link>. SAWTEE continued to provide inputs on different trade and development issues to the private sector, government and international organizations.
            </Text>
            <Text style={paragraph}>
              This year, SAWTEE started hosting a <Link style={anchor} href="https://www.sawtee.org/reform-monitoring-platform.php">Reform Monitoring Platform</Link>, with support from USAID Trade and Competitiveness, on its website. The Platform is an initiative to strengthen monitoring and evaluation of the trade- and investment-related policy reform process in Nepal.
            </Text>
            <Text style={paragraph}>
              In line with its commitment to capacity building, SAWTEE offered workshops to media professionals in Koshi, Madhesh, Bagmati and Karnali provinces. Aiming to strengthen the skills and knowledge of economic journalists, SAWTEE also offered <Link style={anchor} href="https://www.sawtee.org/media-fellows.php">media fellowship</Link> to five Nepali journalists, enriching their expertise and understanding in the field of international trade and economics. Further, SAWTEE continued its publication of <Link style={anchor} href="https://www.sawtee.org/publications/trade-insight/">Trade Insight</Link> , <Link href="https://sawtee.org/publications/policy-brief/" style={anchor}>policy briefs</Link> and <Link style={anchor} href="https://www.sawtee.org/publications/issue-paper/">issue briefs</Link> on varied topics.
            </Text>
            <Text style={paragraph}>
              Thank you for your continued support. We look forward to continuing our efforts in the coming year in the areas covering trade, economics and environment. If you have any feedback, please reach out to us through <Link href="mailto:sawtee@sawtee.org" style={anchor}>sawtee@sawtee.org</Link> or our social media accounts.
            </Text>
            <Text style={paragraph}>
              We wish you a happy, healthy, and prosperous New Year 2081.
            </Text>

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
