import { Button } from '@react-email/button';
import { Container } from '@react-email/container';
import { Head } from '@react-email/head';
import { Hr } from '@react-email/hr';
import { Html } from '@react-email/html';
import { Img } from '@react-email/img';
import { Link } from '@react-email/link';
import { Preview } from '@react-email/preview';
import { Section } from '@react-email/section';
import { Column } from '@react-email/column';
import { Heading } from '@react-email/heading';
import { Text } from '@react-email/text';
import * as React from 'react';

export default function Email() {

  return (
    <Html>
      <Head />
      <Preview>You're now ready to make live transactions with Stripe!</Preview>
      <Section style={main}>
        <Section style={header}>
          <Heading as='h1' style={header_top}>
            TRADE, CLIMATE CHANGE AND DEVELOPMENT MONITOR
          </Heading>
          <Section style={header_bottom}>
            <Column>
              <span style={{ float: 'left' }}>
                Monthly E-Newsletter of South Asia Watch on Trade, Economics and Environment
              </span>
            </Column>
            <Column>
              <span style={{ float: 'right' }}>Volume 20, Issue 01, January 2023</span>
            </Column>
          </Section>
        </Section>
        <Container style={container}>
          <Section style={{ padding: '20px 48px 0' }} >
            <Column>
              <Img
                src="/static/sawtee-logo.webp"
                width="120"
                height="30"
                alt="SAWTEE"
              />
            </Column>
            <Column style={{ display: 'inline-flex', float: 'right' }}>
              <Link href='https://twitter.com/sawteenp' style={social_links}>
                <Img
                  src="/static/twitter-logo-black.png"
                  width="24"
                  height="24"
                  alt="Twitter"
                />
              </Link>
              <Link href="https://www.facebook.com/SAWTEENP/" style={social_links}>
                <Img
                  src="/static/facebook-logo-black.png"
                  width="24"
                  height="24"
                  alt="Facebook"
                />
              </Link>
              <Link href="https://www.linkedin.com/company/sawtee" style={social_links}>
                <Img
                  src="/static/linkedin-logo-black.png"
                  width="24"
                  height="24"
                  alt="LinkedIn"
                />
              </Link>
              <Link href="https://www.youtube.com/channel/UCP--4sJx0HJONM-UP_53vjg" style={social_links}>
                <Img
                  src="/static/youtube-logo-black.png"
                  width="24"
                  height="24"
                  alt="Youtube"
                />
              </Link>

            </Column>
          </Section>
          <Hr style={hr} />
          <Section style={section} >
            <Heading as='h2' style={section_heading}>Opinion in Lead</Heading>
            <Heading as='h3' style={opinion_title}>Implications of carbon border tax</Heading>
            <Text style={paragraph}>
              In its fight against climate change, the European Union, in July 2021, decided to integrate its trade policy with climate policy by proposing the Carbon Border Adjustment Mechanism (CBAM). The proposal was in line with its goal to cut net greenhouse gas (GHG) emissions by at <Link style={anchor} href="https://www.lemonde.fr/en/environment/article/2022/12/13/eu-adopts-carbon-border-tax-to-fight-polluting-imports_6007589_114.html">least 55 per cent by 2030 compared to 1990</Link> and achieve carbon neutrality by 2050. To achieve this, the EU is <Link style={anchor} href="https://www.consilium.europa.eu/en/policies/green-deal/fit-for-55-the-eu-plan-for-a-green-transition/">updating and revising EU legislation</Link> and putting in place new initiatives with the aim of ensuring that EU policies are in line with the climate goals, calling it ‘Fit for 55’. The CBAM, which was agreed on by the EU Council and Parliament in December 2022, is one of the initiatives under its Fit for 55 programme.
            </Text>
            <Text style={paragraph}>
              The <Link style={anchor} href="https://taxation-customs.ec.europa.eu/green-taxation-0/carbon-border-adjustment-mechanism_en">CBAM</Link> will enter into force in its transitional phase as of 1 October 2023 and is planned to be fully implemented by January 2026. The CBAM will initially apply to imports of certain goods whose production is carbon intensive and at the most significant risk of carbon leakage, such as cement, iron and steel, aluminum, fertilizers, electricity and hydrogen. According to the EU, this move is aimed at curbing what it has called ‘carbon leakage’, which occurs when companies based in the EU move carbon-intensive production abroad to countries where less stringent climate policies are in place than in the EU, or when the EU products get replaced by more carbon-intensive imports. By 2023, importers will be required to report emissions embedded in the goods they import and purchase carbon import permits for each metric ton of carbon dioxide (CO2) emissions produced by carbon-intensive products brought into the EU. Goods imported from countries that have domestic carbon-pricing regimes similar to the EU’s will be exempt from the levy, subject to an agreement between those countries and the EU.
            </Text>
            <Section style={{ textAlign: 'center' as const }}>
              <Button
                pX={10}
                pY={10}
                style={button}
                href="https://sawtee.org/opinion-in-lead/implications-of-the-carbon-border-tax.html"
              >
                Read More
              </Button>
            </Section>

          </Section>
          <Hr style={hr} />
          <Section style={section}>
            <Heading as='h2' style={section_heading}>Report</Heading>
            <Heading as='h3' style={opinion_title}>Inflation peaking amid low growth</Heading>
            <Section>
              <Text style={{
                color: '#525f7f',
                fontFamily:
                  '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Ubuntu,sans-serif',
                fontSize: '16px',
                lineHeight: '24px',
                paddingRight: '10px',
                textAlign: 'justify' as const,
              }}>
                Global growth is projected to fall from an estimated 3.4 percent in
                2022 to 2.9 percent in 2023, then rise to 3.1 percent in 2024. The
                forecast for 2023 is 0.2 percentage point higher than predicted in
                the October 2022 World Economic Outlook (WEO) but below the
                historical (2000–19) average of 3.8 percent.

              </Text>
            </Section>
            <Section>
              <Column>
                <Link href="https://www.imf.org/-/media/Files/Publications/WEO/2023/Update/January/English/text.ashx">
                  <Img width='230' height='auto' alt="Report Image" align='left' style={{ display: 'inline', marginRight: '20px' }} src='https://yrncnd.stripocdn.email/content/guids/CABINET_49b31ae232a5315e6ed3052a7a22ca956179bd55f48a5e42fbf3ee6e31c3f0fd/images/newsletter_vol_20_issue_01_january_2023_report_image.png' />
                </Link>
              </Column>
              <Column>
                <Text style={{
                  color: '#525f7f',
                  fontFamily:
                    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Ubuntu,sans-serif',
                  fontSize: '16px',
                  lineHeight: '24px',
                  textAlign: 'justify' as const,
                }}>
                  The rise in central bank rates to fight inflation and Russia’s war in Ukraine continue to weigh on economic activity. The rapid spread of COVID-19 in
                  China dampened growth in 2022, but the recent reopening has
                  paved the way for a faster-than-expected recovery. Global
                  inflation is expected to fall from 8.8 percent in 2022 to 6.6 percent
                  in 2023 and 4.3 percent in 2024, still above pre-pandemic (2017–
                  19) levels of about 3.5 percent.
                </Text>
              </Column>
            </Section>
            <Section>
              <Column>
                <Text style={report_para}>
                  The balance of risks remains tilted to the downside, but adverse risks have moderated since the October 2022 WEO. On the upside, a stronger boost from pent-up demand in numerous economies or a faster fall in inflation are plausible. On the downside, severe health outcomes in China could hold back the recovery, Russia’s war in Ukraine could escalate, and tighter global financing costs could worsen debt distress. Financial markets could also suddenly reprice in response to adverse inflation news, while further geopolitical fragmentation could hamper economic progress.
                </Text>
              </Column>
              <Column>
                <Text style={report_para}>
                  The balance of risks remains tilted to the downside, but adverse risks have moderated since the October 2022 WEO. On the upside, a stronger boost from pent-up demand in numerous economies or a faster fall in inflation are plausible. On the downside, severe health outcomes in China could hold back the recovery, Russia’s war in Ukraine could escalate, and tighter global financing costs could worsen debt distress. Financial markets could also suddenly reprice in response to adverse inflation news, while further geopolitical fragmentation could hamper economic progress.
                </Text>
              </Column>
            </Section>
            <Section style={{ textAlign: 'center' as const }}>
              <Button
                pX={10}
                pY={10}
                style={button}
                href="https://www.imf.org/-/media/Files/Publications/WEO/2023/Update/January/English/text.ashx"
              >
                Read Full Report
              </Button>
            </Section>

          </Section>
          <Hr style={hr} />
          <Section style={section} >
            <Heading as='h2' style={section_heading}>News</Heading>
            <Section>
              <Column>
                <Img width='250' height='auto' alt='Third of world in recession this year, IMF head warns' title='Third of world in recession this year, IMF head warns' src='https://ichef.bbci.co.uk/news/976/cpsprodpb/E5DF/production/_128174885_993e57dee044e4e94f6de72ac1637f5d2ba6d50b.jpg' />
                <Heading as='h3'>Third of world in recession this year, IMF head warns</Heading>
                <Text>A third of the global economy will be in recession this year as the war in Ukraine, rising prices, higher interest rates and the spread of COVID in China weigh on the global economy.</Text>
                <Link href="https://www.bbc.com/news/business-64142662">Read More</Link>
              </Column>
              <Column>
                <Img width='250' height='auto' alt='Third of world in recession this year, IMF head warns' title='Third of world in recession this year, IMF head warns' src='https://ichef.bbci.co.uk/news/976/cpsprodpb/E5DF/production/_128174885_993e57dee044e4e94f6de72ac1637f5d2ba6d50b.jpg' />
                <Heading as='h3'>Third of world in recession this year, IMF head warns</Heading>
                <Text>A third of the global economy will be in recession this year as the war in Ukraine, rising prices, higher interest rates and the spread of COVID in China weigh on the global economy.</Text>
                <Link href="https://www.bbc.com/news/business-64142662">Read More</Link>
              </Column>
            </Section>

            <Section>
              <Column>
                <Img width='250' height='auto' alt='Third of world in recession this year, IMF head warns' title='Third of world in recession this year, IMF head warns' src='https://ichef.bbci.co.uk/news/976/cpsprodpb/E5DF/production/_128174885_993e57dee044e4e94f6de72ac1637f5d2ba6d50b.jpg' />
                <Heading as='h3'>Third of world in recession this year, IMF head warns</Heading>
                <Text>A third of the global economy will be in recession this year as the war in Ukraine, rising prices, higher interest rates and the spread of COVID in China weigh on the global economy.</Text>
                <Link href="https://www.bbc.com/news/business-64142662">Read More</Link>
              </Column>
              <Column>
                <Img width='250' height='auto' alt='Third of world in recession this year, IMF head warns' title='Third of world in recession this year, IMF head warns' src='https://ichef.bbci.co.uk/news/976/cpsprodpb/E5DF/production/_128174885_993e57dee044e4e94f6de72ac1637f5d2ba6d50b.jpg' />
                <Heading as='h3'>Third of world in recession this year, IMF head warns</Heading>
                <Text>A third of the global economy will be in recession this year as the war in Ukraine, rising prices, higher interest rates and the spread of COVID in China weigh on the global economy.</Text>
                <Link href="https://www.bbc.com/news/business-64142662">Read More</Link>
              </Column>
            </Section>

            <Section>
              <Column>
                <Img width='250' height='auto' alt='Third of world in recession this year, IMF head warns' title='Third of world in recession this year, IMF head warns' src='https://ichef.bbci.co.uk/news/976/cpsprodpb/E5DF/production/_128174885_993e57dee044e4e94f6de72ac1637f5d2ba6d50b.jpg' />
                <Heading as='h3'>Third of world in recession this year, IMF head warns</Heading>
                <Text>A third of the global economy will be in recession this year as the war in Ukraine, rising prices, higher interest rates and the spread of COVID in China weigh on the global economy.</Text>
                <Link href="https://www.bbc.com/news/business-64142662">Read More</Link>
              </Column>
              <Column>
                <Img width='250' height='auto' alt='Third of world in recession this year, IMF head warns' title='Third of world in recession this year, IMF head warns' src='https://ichef.bbci.co.uk/news/976/cpsprodpb/E5DF/production/_128174885_993e57dee044e4e94f6de72ac1637f5d2ba6d50b.jpg' />
                <Heading as='h3'>Third of world in recession this year, IMF head warns</Heading>
                <Text>A third of the global economy will be in recession this year as the war in Ukraine, rising prices, higher interest rates and the spread of COVID in China weigh on the global economy.</Text>
                <Link href="https://www.bbc.com/news/business-64142662">Read More</Link>
              </Column>
            </Section>

            <Section>
              <Column>
                <Img width='250' height='auto' alt='Third of world in recession this year, IMF head warns' title='Third of world in recession this year, IMF head warns' src='https://ichef.bbci.co.uk/news/976/cpsprodpb/E5DF/production/_128174885_993e57dee044e4e94f6de72ac1637f5d2ba6d50b.jpg' />
                <Heading as='h3'>Third of world in recession this year, IMF head warns</Heading>
                <Text>A third of the global economy will be in recession this year as the war in Ukraine, rising prices, higher interest rates and the spread of COVID in China weigh on the global economy.</Text>
                <Link href="https://www.bbc.com/news/business-64142662">Read More</Link>
              </Column>
              <Column>
                <Img width='250' height='auto' alt='Third of world in recession this year, IMF head warns' title='Third of world in recession this year, IMF head warns' src='https://ichef.bbci.co.uk/news/976/cpsprodpb/E5DF/production/_128174885_993e57dee044e4e94f6de72ac1637f5d2ba6d50b.jpg' />
                <Heading as='h3'>Third of world in recession this year, IMF head warns</Heading>
                <Text>A third of the global economy will be in recession this year as the war in Ukraine, rising prices, higher interest rates and the spread of COVID in China weigh on the global economy.</Text>
                <Link href="https://www.bbc.com/news/business-64142662">Read More</Link>
              </Column>
            </Section>

            <Section>
              <Column>
                <Img width='250' height='auto' alt='Third of world in recession this year, IMF head warns' title='Third of world in recession this year, IMF head warns' src='https://ichef.bbci.co.uk/news/976/cpsprodpb/E5DF/production/_128174885_993e57dee044e4e94f6de72ac1637f5d2ba6d50b.jpg' />
                <Heading as='h3'>Third of world in recession this year, IMF head warns</Heading>
                <Text>A third of the global economy will be in recession this year as the war in Ukraine, rising prices, higher interest rates and the spread of COVID in China weigh on the global economy.</Text>
                <Link href="https://www.bbc.com/news/business-64142662">Read More</Link>
              </Column>
              <Column></Column>
            </Section>

          </Section>
          <Section style={section}>
            <Text style={footer}>
              Stripe, 354 Oyster Point Blvd, South San Francisco, CA 94080
            </Text>
          </Section>
        </Container>
      </Section>
    </Html>
  );
}

const main = {
  backgroundColor: 'hsl(45, 38%, 94%)',
};

const container = {
  backgroundColor: '#ffffff',
  margin: '0 auto',
  marginBottom: '64px',
};

const section = {
  padding: '0 48px 20px ',
}

const header = {
  backgroundColor: '#006181',
  margin: '0 auto',
}

const header_top = {
  margin: '0 auto',
  textAlign: 'center' as const,
  color: '#7fc4fd',
  fontSize: '24px',
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Ubuntu,sans-serif',
  padding: '20px 0 10px'
}

const header_bottom = {
  padding: '20px',
  color: '#efefef',
  fontSize: '16px',
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Ubuntu,sans-serif',
  fontWeight: 'bold',
}


const social_links = {
  paddingRight: '5px'
}

const hr = {
  borderColor: '#e6ebf1',
  margin: '20px 0',
};

const section_heading = {
  fontSize: '20px',
  fontWeight: 'bold',
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Ubuntu,sans-serif',
  paddingBottom: '10px',
  margin: '0'
}

const opinion_title = {
  fontSize: '16px',
  color: 'hsl(193, 41%, 30%)',
  fontWeight: 'bold',
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Ubuntu,sans-serif',
  paddingBottom: '10px',
  margin: '0'
}

const paragraph = {
  color: '#525f7f',
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Ubuntu,sans-serif',
  fontSize: '16px',
  lineHeight: '24px',
  textAlign: 'left' as const,
};

const report_para = {
  color: '#525f7f',
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Ubuntu,sans-serif',
  fontSize: '16px',
  lineHeight: '24px',
  paddingRight: '20px',
  textAlign: 'justify' as const,
}

const anchor = {
  color: '#556cd6',
  textDecoration: 'underline',
  textUnderlineOffset: '3px'
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
  width: '95%',
};

const footer = {
  color: '#8898aa',
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Ubuntu,sans-serif',
  fontSize: '12px',
  lineHeight: '16px',
};
