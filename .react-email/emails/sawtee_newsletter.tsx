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
      <Preview>Monthly E-Newsletter of South Asia Watch on Trade, Economics and Environment | Volume 20, Issue 01, January 2023</Preview>
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
          <Section style={{ padding: '20px 30px 0' }} >
            <Column>
              <Img
                src="https://sawtee.org/images/logo_sawtee.jpg"
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
          <Section style={section} >
            <Heading as='h2' style={section_heading}>Opinion in Lead</Heading>
            <Heading as='h3' style={section_title}>Implications of carbon border tax</Heading>
            <Text style={paragraph}>
              In its fight against climate change, the European Union, in July 2021, decided to integrate its trade policy with climate policy by proposing the Carbon Border Adjustment Mechanism (CBAM). The proposal was in line with its goal to cut net greenhouse gas (GHG) emissions by at <Link style={anchor} href="https://www.lemonde.fr/en/environment/article/2022/12/13/eu-adopts-carbon-border-tax-to-fight-polluting-imports_6007589_114.html">least 55 per cent by 2030 compared to 1990</Link> and achieve carbon neutrality by 2050. To achieve this, the EU is <Link style={anchor} href="https://www.consilium.europa.eu/en/policies/green-deal/fit-for-55-the-eu-plan-for-a-green-transition/">updating and revising EU legislation</Link> and putting in place new initiatives with the aim of ensuring that EU policies are in line with the climate goals, calling it ‘Fit for 55’. The CBAM, which was agreed on by the EU Council and Parliament in December 2022, is one of the initiatives under its Fit for 55 programme.
            </Text>
            <Text style={paragraph}>
              The <Link style={anchor} href="https://taxation-customs.ec.europa.eu/green-taxation-0/carbon-border-adjustment-mechanism_en">CBAM</Link> will enter into force in its transitional phase as of 1 October 2023 and is planned to be fully implemented by January 2026. The CBAM will initially apply to imports of certain goods whose production is carbon intensive and at the most significant risk of carbon leakage, such as cement, iron and steel, aluminum, fertilizers, electricity and hydrogen. According to the EU, this move is aimed at curbing what it has called ‘carbon leakage’, which occurs when companies based in the EU move carbon-intensive production abroad to countries where less stringent climate policies are in place than in the EU, or when the EU products get replaced by more carbon-intensive imports. By 2023, importers will be required to report emissions embedded in the goods they import and purchase carbon import permits for each metric ton of carbon dioxide (CO2) emissions produced by carbon-intensive products brought into the EU. Goods imported from countries that have domestic carbon-pricing regimes similar to the EU’s will be exempt from the levy, subject to an agreement between those countries and the EU.
            </Text>
            <Section style={{ textAlign: 'center' as const, marginTop: '20px' }}>
              <Button
                pX={10}
                pY={10}
                style={{
                  backgroundColor: '#006181',
                  borderRadius: '5px',
                  color: '#fff',
                  fontFamily:
                    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Ubuntu,sans-serif',
                  fontSize: '16px',
                  fontWeight: 'bold',
                  textDecoration: 'none',
                  textTransform: 'uppercase',
                  textAlign: 'center' as const,
                  display: 'block',
                  width: '95%',
                }}
                href="https://sawtee.org/opinion-in-lead/implications-of-the-carbon-border-tax.html"
              >
                Read More
              </Button>
            </Section>

          </Section>
          <Section style={{ backgroundColor: '#E8F5F2', padding: '20px 30px', }}>
            <Heading as='h2' style={section_heading}>Report</Heading>
            <Heading as='h3' style={section_title}>Inflation peaking amid low growth</Heading>
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
                historical (2000–19) average of 3.8 percent. The rise in central bank rates to fight inflation and Russia’s war in Ukraine continue to weigh on economic activity. The rapid spread of COVID-19 in
                China dampened growth in 2022, but the recent reopening has
                paved the way for a faster-than-expected recovery. Global
                inflation is expected to fall from 8.8 percent in 2022 to 6.6 percent
                in 2023 and 4.3 percent in 2024, still above pre-pandemic (2017–
                19) levels of about 3.5 percent.

              </Text>
            </Section>
            <Section style={{ textAlign: 'center' as const }}>
              <Link href="https://www.imf.org/-/media/Files/Publications/WEO/2023/Update/January/English/text.ashx">
                <Img width='50%' height='auto' alt="Report Image" style={{ display: 'inline', margin: '0 auto' }} src='https://yrncnd.stripocdn.email/content/guids/CABINET_49b31ae232a5315e6ed3052a7a22ca956179bd55f48a5e42fbf3ee6e31c3f0fd/images/newsletter_vol_20_issue_01_january_2023_report_image.png' />
              </Link>
            </Section>
            <Section>
                <Text style={report_para}>
                  The balance of risks remains tilted to the downside, but adverse risks have moderated since the October 2022 WEO. On the upside, a stronger boost from pent-up demand in numerous economies or a faster fall in inflation are plausible. On the downside, severe health outcomes in China could hold back the recovery, Russia’s war in Ukraine could escalate, and tighter global financing costs could worsen debt distress. Financial markets could also suddenly reprice in response to adverse inflation news, while further geopolitical fragmentation could hamper economic progress.
                </Text>

                <Text style={report_para}>
                In most economies, amid the cost-of-living crisis, the priority
                remains achieving sustained disinflation. With tighter monetary
                conditions and lower growth potentially affecting financial and
                debt stability, it is necessary to deploy macroprudential tools and
                strengthen debt restructuring frameworks. Accelerating COVID-19
                vaccinations in China would safeguard the recovery, with positive
                cross-border spillovers. Fiscal support should be better targeted
                at those most affected by elevated food and energy prices, and
                broad-based fiscal relief measures should be withdrawn. Stronger
                multilateral cooperation is essential to preserve the gains from the
                rules-based multilateral system and to mitigate climate change by
                limiting emissions and raising green investment
                </Text>

            </Section>
            <Section style={{ textAlign: 'center' as const, marginTop: '20px' }}>
              <Button
                pX={10}
                pY={10}
                style={{
                  backgroundColor: '#006181',
                  borderRadius: '5px',
                  color: '#fff',
                  fontFamily:
                    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Ubuntu,sans-serif',
                  fontSize: '16px',
                  fontWeight: 'bold',
                  textDecoration: 'none',
                  textTransform: 'uppercase',
                  textAlign: 'center' as const,
                  display: 'block',
                  width: '95%',
                }}
                href="https://www.imf.org/-/media/Files/Publications/WEO/2023/Update/January/English/text.ashx"
              >
                Read Full Report
              </Button>
            </Section>

          </Section>
          <Section style={section} >
            <Heading as='h2' style={section_heading}>News</Heading>
            <Section style={news_section}>
              <Column style={{ float: 'left', paddingRight: '2%', width: '48%' }}>
                <Link href='https://www.bbc.com/news/business-64142662'><Img width='100%' height='180' alt='Third of world in recession this year, IMF head warns' title='Third of world in recession this year, IMF head warns' src='https://ichef.bbci.co.uk/news/976/cpsprodpb/E5DF/production/_128174885_993e57dee044e4e94f6de72ac1637f5d2ba6d50b.jpg' /></Link>
                <Heading style={news_title} as='h3'>Third of world in recession this year, IMF head warns</Heading>
                <Text style={paragraph}>A third of the global economy will be in recession this year as the war in Ukraine, rising prices, higher interest rates and the spread of COVID in China weigh on the global economy.</Text>
                <Link style={news_link} href="https://www.bbc.com/news/business-64142662">Read More</Link>
              </Column>
              <Column style={{ float: 'right', paddingLeft: '2%', width: '48%' }}>
                <Link href='https://www.aljazeera.com/economy/2023/1/25/hindenburg-shorts-indias-adani-citing-debt-accounting-concerns'><Img width='100%' height='180' alt='Hindenburg shorts India’s Adani citing concerns' title='Hindenburg shorts India’s Adani citing concerns' src='https://www.aljazeera.com/wp-content/uploads/2023/01/2012-09-25T120000Z_295164505_GM1E89P1K6T01_RTRMADP_3_INDIA-ADANI.jpg?resize=770%2C513&quality=80' /></Link>
                <Heading style={news_title} as='h3'>Hindenburg shorts India’s Adani citing concerns</Heading>
                <Text style={paragraph}>Hindenburg Research said it held short positions in India’s Adani Group, accusing the conglomerate of improper use of offshore tax havens and flagging concerns about high debt.</Text>
                <Link style={news_link} href="https://www.aljazeera.com/economy/2023/1/25/hindenburg-shorts-indias-adani-citing-debt-accounting-concerns">Read More</Link>
              </Column>
            </Section>

            <Section style={news_section}>
              <Column style={{ float: 'left', paddingRight: '2%', width: '48%' }}>
                <Link style={news_link} href="https://www.npr.org/2023/01/29/1152428444/pakistans-nationwide-blackout-is-part-of-an-escalating-crisis"><Img width='100%' height='180' alt="Pakistan's nationwide blackout is part of an escalating crisis" title="Pakistan's nationwide blackout is part of an escalating crisis" src='https://media.npr.org/assets/img/2023/01/29/ap23028760157555_wide-8299e89954f731ca4a48c72b259e21bb3b0ce4ac.jpg?s=400' /></Link>
                <Heading style={news_title} as='h3'>Pakistan's nationwide blackout is part of an escalating crisis</Heading>
                <Text style={paragraph}>Pakistan has been struggling to keep its grid up and running in recent months and a recent nationwide blackout showed just how bad the problem has become.</Text>
                <Link style={news_link} href="https://www.npr.org/2023/01/29/1152428444/pakistans-nationwide-blackout-is-part-of-an-escalating-crisis">Read More</Link>
              </Column>
              <Column style={{ float: 'right', paddingLeft: '2%', width: '48%' }}>
                <Link style={news_link} href="https://www.dawn.com/news/1731409/pakistan-gets-4bn-lifeline-as-economic-woes-mount"><Img width='100%' height='180' alt='Indian made iPhone hits US$1bn exports mark in Dec' title='Indian made iPhone hits US$1bn exports mark in Dec' src='https://img.etimg.com/thumb/msid-97237492,width-300,height-225,imgsize-54614,,resizemode-75/iphone.jpg' /></Link>
                <Heading style={news_title} as='h3'>Indian made iPhone hits US$1bn exports mark in Dec</Heading>
                <Text style={paragraph}>Pakistan secured a lifeline of about US$4 billion from the United Arab Emirates and Saudi Arabia to sail through the immediate challenge of a sovereign default.</Text>
                <Link style={news_link} href="https://www.dawn.com/news/1731409/pakistan-gets-4bn-lifeline-as-economic-woes-mount">Read More</Link>
              </Column>
            </Section>

            <Section style={news_section}>
              <Column style={{ float: 'left', paddingRight: '2%', width: '48%' }}>
                <Link style={news_link} href="https://www.aljazeera.com/economy/2023/1/13/exxonmobil-predicted-climate-change-while-downplaying-risk-study"><Img width='100%' height='180' alt='ExxonMobil predicted climate change while downplaying risk' title='ExxonMobil predicted climate change while downplaying risk' src='https://www.aljazeera.com/wp-content/uploads/2023/01/2021-01-06T000000Z_271332300_RC2J2L9NAL8L_RTRMADP_3_EXXON-MOBIL-CARBON.jpg?resize=770%2C513&quality=80' /></Link>
                <Heading style={news_title} as='h3'>ExxonMobil predicted climate change while downplaying risk</Heading>
                <Text style={paragraph}>ExxonMobil publicly sowed doubt about climate change despite the oil giant’s own scientists accurately predicting global warming as far back as the 1970s.</Text>
                <Link style={news_link} href="https://www.aljazeera.com/economy/2023/1/13/exxonmobil-predicted-climate-change-while-downplaying-risk-study">Read More</Link>
              </Column>
              <Column style={{ float: 'right', paddingLeft: '2%', width: '48%' }}>
                <Link style={news_link} href="https://www.dawn.com/news/1731409/pakistan-gets-4bn-lifeline-as-economic-woes-mount"><Img width='100%' height='180' alt='Pakistan gets US$4bn lifeline as economic woes mount' title='Pakistan gets US$4bn lifeline as economic woes mount' src='https://i.dawn.com/primary/2023/01/63c0c38bcb0fd.jpg' /></Link>
                <Heading style={news_title} as='h3'>Pakistan gets US$4bn lifeline as economic woes mount</Heading>
                <Text style={paragraph}>Pakistan secured a lifeline of about US$4 billion from the United Arab Emirates and Saudi Arabia to sail through the immediate challenge of a sovereign default.</Text>
                <Link style={news_link} href="https://www.dawn.com/news/1731409/pakistan-gets-4bn-lifeline-as-economic-woes-mount">Read More</Link>
              </Column>
            </Section>

            <Section style={news_section}>
              <Column style={{ float: 'left', paddingRight: '2%', width: '48%' }}>
                <Link style={news_link} href="https://www.dailymirror.lk/breaking_news/Govt-to-cut-public-expenditure-by-5-as-State-coffers-run-dry/108-251955"><Img width='100%' height='180' alt='SL govt to cut public expenditure by 5%' title='SL govt to cut public expenditure by 5%' src='https://i.ytimg.com/vi/4_jLwyD7CUk/maxresdefault.jpg' /></Link>
                <Heading style={news_title} as='h3'>SL govt to cut public expenditure by 5%</Heading>
                <Text style={paragraph}>As State coffers have run dry owing to the steep contraction of the economy last year, President Ranil Wickremesinghe has instructed all ministries to cut five percent of their allocated budgets for 2023.</Text>
                <Link style={news_link} href="https://www.dailymirror.lk/breaking_news/Govt-to-cut-public-expenditure-by-5-as-State-coffers-run-dry/108-251955">Read More</Link>
              </Column>
              <Column style={{ float: 'right', paddingLeft: '2%', width: '48%' }}>
                <Link style={news_link} href="https://www.bbc.com/news/world-asia-china-64201776"><Img width='100%' height='180' alt='China reopens borders after three years of Covid closure' title='China reopens borders after three years of Covid closure' src='https://ichef.bbci.co.uk/news/976/cpsprodpb/B863/production/_128230274_6b86cb46ffb3ba4d9c3ba056a449a363dbd2de5e0_311_6311_35511000x563.jpg.webp' /></Link>
                <Heading style={news_title} as='h3'>China reopens borders after three years of Covid closure</Heading>
                <Text style={paragraph}>China has reopened its borders to international visitors for the first time since it imposed travel restrictions in March 2020 and incoming travellers will no longer need to quarantine.</Text>
                <Link style={news_link} href="https://www.bbc.com/news/world-asia-china-64201776">Read More</Link>
              </Column>
            </Section>

            <Section style={news_section}>
              <Column style={{ float: 'left', paddingRight: '2%', width: '48%' }}>
                <Link style={news_link} href="https://myrepublica.nagariknetwork.com/news/b-desh-opens-bangalabandha-dry-port-for-nepali-traders-to-export-yarn/"><Img width='100%' height='180' alt='B’desh opens Bangalabandha Dry Port for Nepali yarn' title='B’desh opens Bangalabandha Dry Port for Nepali yarn' src='https://myrepublica.nagariknetwork.com/uploads/media/dryport_20230108080820.jpg' /></Link>
                <Heading style={news_title} as='h3'>B’desh opens Bangalabandha Dry Port for Nepali yarn</Heading>
                <Text style={paragraph}>Nepal can now enjoy easy access to a dry port in Bangladesh to export its yarn to third countries.</Text>
                <Link style={news_link} href="https://myrepublica.nagariknetwork.com/news/b-desh-opens-bangalabandha-dry-port-for-nepali-traders-to-export-yarn/">Read More</Link>
              </Column>
            </Section>
          </Section>
          <Section style={{ backgroundColor: '#E8F5F2', padding: '20px 30px', }}>
            <Heading as='h2' style={section_heading}>Publication</Heading>
            <Heading as='h3' style={section_title}>Trade Insight Vol 18 No 1–4 2023</Heading>
            <Text style={paragraph}>Hopes of a normal year in 2022 were dashed by escalating geopolitical tensions, continued US-China trade war, a war in Europe and the resulting rise in energy prices and persistent inflation. Freight and cargo rates fell but were still higher than pre-pandemic levels. Economic recovery was stymied. External shocks—high prices and a hit to foreign exchange earnings—combined with domestic structural weaknesses and policy missteps led to economic crises of varied intensity in South Asia, from an economic collapse in Sri Lanka to a severe foreign exchange crisis in Pakistan to a build-up of pressure on foreign exchange reserves in Bangladesh and Nepal. The latest issue of Trade Insight explores these issues and more.</Text>
            <Button
              pX={10}
              pY={10}
              style={{
                backgroundColor: '#006181',
                borderRadius: '5px',
                color: '#fff',
                fontFamily:
                  '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Ubuntu,sans-serif',
                fontSize: '16px',
                fontWeight: 'bold',
                textDecoration: 'none',
                textTransform: 'uppercase',
                textAlign: 'center' as const,
                display: 'block',
                width: '95%',
              }}
              href="https://sawtee.org/publications/Trade-Insight_Vol-18_No_1-4_2022.pdf"
            >
              Read More
            </Button>
          </Section>
          <Section style={footer_section}>
            <Section style={{ margin: '30px auto' }}>
              <Heading as='h3' style={footer_headings}>Editor</Heading>
              <Text style={footer}>Dikshya Singh</Text>
            </Section>

            <Section>
              <Heading as='h3' style={footer_headings}>Contact</Heading>
              <Text style={footer}>
                South Asia Watch on Trade, Economics and Environment (SAWTEE)<br />
                P.O. Box: 19366, Tukucha Marg, Kathmandu, Nepal<br />
                Tel: 977-1-4424360, 4444438 Fax: 977-1-4444570<br />
                Email: <Link href="mailto:enewsletter@sawtee.org" style={anchor}>enewsletter@sawtee.org</Link><br />
                Web: <Link href="https://www.sawtee.org" style={anchor}>www.sawtee.org</Link>
              </Text>
            </Section>

            <Section style={{ paddingTop: '60px', paddingBottom: '20px' }}>
              <Text style={{
                color: '#8898aa',
                fontFamily:
                  '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Ubuntu,sans-serif',
                fontSize: '12px',
                lineHeight: 'normal',
                padding: '0', margin: '0'
              }}>
                <em>You are receiving this email because you have visited our site or asked us about regular newsletter. To unsubscribe send email with subject "Unsubscribe" to <Link href="mailto:sawtee@sawtee.org" style={anchor}>SAWTEE</Link>.
                  Check our other publications below</em>
              </Text>
            </Section>

            <Section style={{ backgroundColor: '#006181', padding: '10px', marginBottom: '20px' }}>
              <Column><Link style={publications_link} href="https://www.sawtee.org/publications/trade-insight">Trade Insight </Link></Column>
              <Column style={{ color: '#fff' }}>|</Column>
              <Column><Link style={publications_link} href="https://www.sawtee.org/publications/books">Books</Link>
              </Column>
              <Column style={{ color: '#fff' }}>|</Column>
              <Column><Link style={publications_link} href="https://www.sawtee.org/publications/working-paper">Working Paper</Link>
              </Column>
              <Column style={{ color: '#fff' }}>|</Column>

              <Column><Link style={publications_link} href="https://www.sawtee.org/newsletters">Newsletter</Link></Column>
            </Section>
            <Hr style={hr} />

            <Section>
              <Img src="https://sawtee.org/images/logo_sawtee.jpg" width="150" height="auto" style={{ margin: '0 auto', marginBottom: '10px' }} />
              <Button style={{
                backgroundColor: '#006181',
                borderRadius: '30px',
                color: '#fff',
                fontFamily:
                  '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Ubuntu,sans-serif',
                fontSize: '18px',
                fontWeight: 'bold',
                textDecoration: 'none',
                textTransform: 'uppercase',
                display: 'block',
                textAlign: 'center' as const,
              }} pX={20}
                pY={10} href="https://www.sawtee.org/">Visit Website</Button>
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
            </Section>

          </Section>
        </Container>
      </Section>
    </Html>
  );
}

const main = {
  backgroundColor: 'hsl(45, 38%, 94%)',
};

const publications_link = {
  color: '#fff',
  fontSize: '12px',
  fontWeight: 'normal',
  fontFamily: '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Ubuntu,sans-serif',
}

const container = {
  backgroundColor: '#ffffff',
  margin: '0 auto',
  marginBottom: '64px',
  maxWidth: '40em'
};

const section = {
  padding: '20px 30px',
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
  fontSize: '12px',
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Ubuntu,sans-serif',
  fontWeight: 500,
}

const social_links = {
  paddingRight: '5px'
}

const hr = {
  borderColor: '#e6ebf1',
  // borderColor: '#efefef',
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

const section_title = {
  fontSize: '16px',
  color: '#006181',
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
  textAlign: 'justify' as const,
}

const anchor = {
  color: '#556cd6',
  textDecoration: 'underline',
  textUnderlineOffset: '3px'
};

const news_section = {
  paddingBottom: '50px'
}

const news_title = {
  fontSize: '16px',
  color: '#006181',
  fontWeight: 'bold',
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Ubuntu,sans-serif',
  paddingTop: '10px',
  lineHeight: '1.5',
  margin: '0'
}

const news_link = {
  color: '#006181',
  textDecoration: 'underline',
  fontWeight: 'bold',
  fontFamily: 'monospace'

}

const footer = {
  color: '#222',
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Ubuntu,sans-serif',
  fontSize: '12px',
  lineHeight: '16px',
  padding: '0', margin: '0'
};

const footer_section = {
  padding: '0 48px 20px ',
  textAlign: 'center' as const,
  // backgroundColor: '#ECE8F5'
}
const footer_headings = {
  fontSize: '18px', fontFamily:
    '-apple-system,BlinkMacSystemFont,monospace,"Segoe UI",Roboto,"Helvetica Neue",Ubuntu,sans-serif',
  padding: '0', paddingBottom: '5px', margin: '0'
}