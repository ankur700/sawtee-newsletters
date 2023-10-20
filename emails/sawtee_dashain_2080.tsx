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
      <Preview>Happy Vijaya Dashami 2080!!</Preview>
      <Section style={main}>
        <Container style={container}>
          <Section style={box}>
            <Section style={{ padding: '20px 30px 0' }} >
              <Column style={{ width: '50%' }}>
                <Link href="https://sawtee.org/">
                  <Img
                    src="https://sawtee.org/images/logo_sawtee.jpg"
                    width="120"
                    height="auto"
                    alt="SAWTEE"
                  />
                </Link>
              </Column>
              <Column style={{ width: '100%' }}>
                <Column style={{ display: "inline-flex", paddingTop: '8px' }}>
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

              </Column>
            </Section>

            <Hr style={hr} />

            <Section style={{ marginBottom: '30px' }}>
              <Img src='https://sawtee.org/images/sawtee-dashain-2080.png' width="500" height="500" alt="New Year Poster 2080" loading='lazy' />
            </Section>

            <Section style={greeting_heading}>

              <Heading as='h2'>
                Dear friends and colleagues,
              </Heading>
              <Text style={paragraph}>
                SAWTEE would like to wish you a joyful and prosperous Dashain 2080. May this festive season bring happiness, prosperity, and good fortune to you and your family.
              </Text>
              <Text style={paragraph}>
                This year, SAWTEE’s “Media Fellowship for Economic Journalists” offered reporting <Link style={anchor} href="https://sawtee.org/media-fellows.php">fellowships</Link> to five journalists. SAWTEE continued with the publication of <Link style={anchor} href="https://sawtee.org/publications/trade-insight/">Trade Insight</Link>, <Link style={anchor} href="https://sawtee.org/publications/issue-paper/">issue briefs</Link>, and <Link style={anchor} href="https://sawtee.org/publications/policy-brief/">policy briefs</Link> on varied topics.
              </Text>
              <Text style={paragraph}>
                We thank you for your continued support.
              </Text>
            </Section>

            <Hr style={hr} />

            <Section style={footer_section}>
              <Container style={{ textAlign: 'center' as const }}>
                <Text style={address}>South Asia Watch on Trade, Economics and Environment (SAWTEE)</Text>
                <Text style={address}>P.O. Box: 19366, Tukucha Marg, Kathmandu, Nepal</Text>
                <Text style={address}>Tel: +977 1 4544438, Fax: +977 1 4544570</Text>
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
              {/* <Text style={footer_shoutOut}>
                You are receiving this email because you have visited our site or asked us about regular newsletter. If you wish to unsubscribe from our newsletter, please email us with a subject of "UNSUBSCRIBE".
              </Text> */}
            </Section>

            <Section style={{ backgroundColor: '#5885AF', padding: '10px' }}>
              <Column style={{ textAlign: 'center' as const }}><Link style={publications_link} href="https://www.sawtee.org/publications/trade-insight/">Trade Insight </Link></Column>
              <Column style={{ color: '#fff' }}>|</Column>
              <Column style={{ textAlign: 'center' as const }}><Link style={publications_link} href="https://www.sawtee.org/publications/books/">Books</Link>
              </Column>
              <Column style={{ color: '#fff' }}>|</Column>
              <Column style={{ textAlign: 'center' as const }}><Link style={publications_link} href="https://www.sawtee.org/publications/working-paper/">Working Paper</Link>
              </Column>
              <Column style={{ color: '#fff' }}>|</Column>

              <Column style={{ textAlign: 'center' as const }}><Link style={publications_link} href="https://www.sawtee.org/newsletters/">Newsletter</Link></Column>
            </Section>

          </Section>
        </Container>
      </Section>
    </Html>
  );
}

const main = {
  backgroundColor: '#fff',

};

const container = {
  backgroundColor: '#274472',
  opacity: '0.9',
  margin: '50px auto',
  padding: '20px 0 48px',
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
  color: '#B99C18',
  textShadow: "0.1px 0.1px #e80046"
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
