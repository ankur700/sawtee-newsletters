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

let issue = 'Volume 20, Issue 02, February 2023';

export default function Email() {

  return (
    <Html>
      <Head />
      <Preview>Monthly E-Newsletter of South Asia Watch on Trade, Economics and Environment | {issue}</Preview>
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
              <span style={{ float: 'right' }}>{issue}</span>
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
            <Column style={{ display: 'flex', maxWidth: 'max-content', justifyContent: 'center', float: 'right' }}>
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

          {/* Opinion in Lead Start */}

          <Section style={section} >
            <Heading as='h2' style={section_heading}>Opinion in Lead</Heading>
            <Heading as='h3' style={section_title}>US Inflation Reduction Act disrupts green industrial race</Heading>
            <Text style={paragraph}>
              South Asia is <Link style={anchor} href="https://blogs.worldbank.org/endpovertyinsouthasia/green-energy-can-accelerate-sustainable-growth-across-south-asia#:~:text=A%20Haven%20for%20Green%20Energy&text=Bhutan%20and%20Nepal%20produce%20vast,coal-fired%20capacity%20with%20renewables.">rich in resources</Link> for renewable energy generation: hydropower in Nepal and Bhutan, solar energy potential in Bangladesh and Pakistan, and wind and solar energy generation in Maldives and Sri Lanka. Despite relying heavily on fossil fuels, South Asian countries have been steadily making progress in clean energy projects.
            </Text>
            <Text style={paragraph}>
              In the market for end products that use or potentially use clean energy, India hosts companies with potential for international competitiveness, such as Tata Motors which dominates the domestic as well as South Asian electric vehicle (EV) markets and has been looking to <Link style={anchor} href="https://www.business-standard.com/article/companies/tata-motors-to-export-its-evs-to-mature-auto-markets-122040601374_1.html">expand</Link> exports to international markets. As of July 2021, India has 380 EV manufacturers, including 19 companies that <Link style={anchor} href="https://e-amrit.niti.gov.in/Manufacturers">manufacture</Link> four-wheelers. Industry exports were valued at US$13.3 billion in FY21, with USA, Germany, UK, Thailand and Italy as major importers. Exports were <Link style={anchor} href="https://www.investindia.gov.in/sector/auto-components">projected</Link> to grow to US$80 billion by 2026. However, the United States' new <Link style={anchor} href="https://www.whitehouse.gov/cleanenergy/inflation-reduction-act-guidebook/">Inflation Reduction Act</Link> (IRA) could change this trajectory.
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
                href="https://sawtee.org/opinion-in-lead/us-inflation-reduction-act-disrupts-green-industrial-race.html"
              >
                Read More
              </Button>
            </Section>

          </Section>

          {/* Opinion in Lead End*/}

          {/* Report */}

          {/* <Section style={{ backgroundColor: '#E8F5F2', padding: '20px 30px', }}>
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

          </Section> */}

          {/* Report End */}


          {/* News Start */}
          <Hr style={hr} />
          <Section style={section} >
            <Heading as='h2' style={section_heading}>News</Heading>

            <Section style={news_section}>
              <Column style={{ float: 'left', paddingRight: '2%', width: '48%' }}>
                <Link href='https://tkpo.st/41KEjbs'><Img width='100%' height='180' alt='Trademark bill languishes as infringement cases rise' title='Trademark bill languishes as infringement cases rise' src='https://assets-api.kathmandupost.com/thumb.php?src=https://assets-cdn.kathmandupost.com/uploads/source/news/2023/third-party/Unauthoriseduseoftrademarksofmultinationalandnationalbrandshasbeenincreasingbythedayduetoweakenforcementoflaws-1677598467.jpg&w=900&height=601' /></Link>
                <Heading style={news_title} as='h3'>Trademark bill languishes as infringement cases rise</Heading>
                <Text style={paragraph}>The cases of trademark infringement in Nepal have been on the rise each passing year due to the failure of the government to enact a new law.</Text>
                <Link style={news_link} href="https://tkpo.st/41KEjbs">Read More</Link>
              </Column>
              <Column style={{ float: 'right', paddingLeft: '2%', width: '48%' }}>
                <Link href='https://www.dawn.com/news/1739675/govt-unhappy-as-imf-shifts-goalposts'><Img width='100%' height='180' alt='Pak govt unhappy as IMF ‘shifts goalposts’' title='Pak govt unhappy as IMF ‘shifts goalposts’' src='https://th.bing.com/th?id=OIF.brHZM24Iw%2fGsAU891bUWHg&pid=ImgDet&rs=1' /></Link>
                <Heading style={news_title} as='h3'>Pak govt unhappy as IMF ‘shifts goalposts’</Heading>
                <Text style={paragraph}>Pakistani authorities say IMF ‘changed its mind’ on at least four prior actions and they hint at ‘1998-like situation’, adding foreign capitals working for Pakistan’s ‘meltdown’.</Text>
                <Link style={news_link} href="https://www.dawn.com/news/1739675/govt-unhappy-as-imf-shifts-goalposts">Read More</Link>
              </Column>
            </Section>

            <Section style={news_section}>
              <Column style={{ float: 'left', paddingRight: '2%', width: '48%' }}>
                <Link style={news_link} href="https://kathmandupost.com/money/2023/02/07/national-pashmina-sector-export-strategy-launched"><Img width='100%' height='180' alt="  National pashmina sector export strategy launched" title="National pashmina sector export strategy launched" src='https://assets-api.kathmandupost.com/thumb.php?src=https://assets-cdn.kathmandupost.com/uploads/source/news/2023/money/NationalPashminaSectorLaunchprogram07022323-1675777714.jpg&w=900&height=601' /></Link>
                <Heading style={news_title} as='h3'>National pashmina sector export strategy launched</Heading>
                <Text style={paragraph}>The National Pashmina Sector Export Strategy 2022-26 was launched on Tuesday with an aim to boost the export of “Chyangra pashmina” from NPR2.82 billion in 2021 to NPR10 billion by the end of 2026.</Text>
                <Link style={news_link} href="https://kathmandupost.com/money/2023/02/07/national-pashmina-sector-export-strategy-launched">Read More</Link>
              </Column>
              <Column style={{ float: 'right', paddingLeft: '2%', width: '48%' }}>
                <Link style={news_link} href="https://www.newagebd.net/article/193941/bangladeshs-rmg-exports-to-us-cross-10b-in-2022"><Img width='100%' height='180' alt=' Bangladesh’s RMG exports to US cross $10b' title='Bangladesh’s RMG exports to US cross $10b' src='https://www.newagebd.com/files/records/news/202302/193941_125.jpg' /></Link>
                <Heading style={news_title} as='h3'>Bangladesh’s RMG exports to US cross $10b</Heading>
                <Text style={paragraph}>Bangladesh’s apparel and textile exports to the United States crossed US$10 billion in 2022 amid global economic volatility as the US shifted a good chunk of its business from China.</Text>
                <Link style={news_link} href="https://www.newagebd.net/article/193941/bangladeshs-rmg-exports-to-us-cross-10b-in-2022">Read More</Link>
              </Column>
            </Section>

            <Section style={news_section}>
              <Column style={{ float: 'left', paddingRight: '2%', width: '48%' }}>
                <Link style={news_link} href="https://www.dailymirror.lk/breaking_news/Negotiations-on-revised-trade-pact-linking-electricity-grids-with-India-to-begin-in-2-months/108-254220"><Img width='100%' height='180' alt=' Sri Lanka-India negotiate revised trade pact, linking electricity grids ' title=' Sri Lanka-India negotiate revised trade pact, linking electricity grids ' src='https://cdn.newsfirst.lk/english-uploads/2020/05/a928c74b-electricity.jpg' /></Link>
                <Heading style={news_title} as='h3'> Sri Lanka-India negotiate revised trade pact, linking electricity grids </Heading>
                <Text style={paragraph}>Sri Lanka and India are looking into ways to strengthen their relationship and will step up their efforts with a revised trade agreement and a deal to connect the electricity grids of the two countries.</Text>
                <Link style={news_link} href="https://www.dailymirror.lk/breaking_news/Negotiations-on-revised-trade-pact-linking-electricity-grids-with-India-to-begin-in-2-months/108-254220">Read More</Link>
              </Column>
              <Column style={{ float: 'right', paddingLeft: '2%', width: '48%' }}>
                <Link style={news_link} href="https://economictimes.indiatimes.com/news/economy/foreign-trade/carbon-border-rules-protectionist-and-discriminatory-india-to-wto/articleshow/97958613.cms?utm_source=contentofinterest&utm_medium=text&utm_campaign=cppst"><Img width='100%' height='180' alt=' India to WTO: carbon border rules protectionist ' title=' India to WTO: carbon border rules protectionist ' src='https://img.etimg.com/thumb/msid-97958692,width-300,height-225,imgsize-26868,,resizemode-75/carbon.jpg' /></Link>
                <Heading style={news_title} as='h3'> India to WTO: carbon border rules protectionist </Heading>
                <Text style={paragraph}>India has slammed the carbon border measures being implemented by some countries, terming them discriminatory and protectionist in a submission to WTO.</Text>
                <Link style={news_link} href="https://economictimes.indiatimes.com/news/economy/foreign-trade/carbon-border-rules-protectionist-and-discriminatory-india-to-wto/articleshow/97958613.cms?utm_source=contentofinterest&utm_medium=text&utm_campaign=cppst">Read More</Link>
              </Column>
            </Section>

            <Section style={news_section}>
              <Column style={{ float: 'left', paddingRight: '2%', width: '48%' }}>
                <Link style={news_link} href="https://www.dailymirror.lk/top_story/Paris-Club-to-give-Sri-Lanka-financing-assurances-amid-IMF-debt-talks/155-253409"><Img width='100%' height='180' alt='Paris Club to give Sri Lanka financing assurances amid IMF debt talks' title='Paris Club to give Sri Lanka financing assurances amid IMF debt talks' src='https://cdn.newsfirst.lk/english-uploads/2023/02/Paris%20Club-714430.jpg' /></Link>
                <Heading style={news_title} as='h3'>Paris Club to give Sri Lanka financing assurances amid IMF debt talks</Heading>
                <Text style={paragraph}>The Paris Club of creditor nations is ready to provide financing assurances to Sri Lanka, a key step needed to unlock a US$2.9 billion bailout by the International Monetary Fund (IMF)</Text>
                <Link style={news_link} href="https://www.dailymirror.lk/top_story/Paris-Club-to-give-Sri-Lanka-financing-assurances-amid-IMF-debt-talks/155-253409">Read More</Link>
              </Column>
              <Column style={{ float: 'right', paddingLeft: '2%', width: '48%' }}>
                <Link style={news_link} href="https://economictimes.indiatimes.com/news/economy/foreign-trade/more-asian-countries-interested-in-rupee-trade-central-bank-executive/articleshow/98189304.cms?utm_source=contentofinterest&utm_medium=text&utm_campaign=cppst"><Img width='100%' height='180' alt='More Asian countries interested in Rupee trade' title='More Asian countries interested in Rupee trade' src='https://img.etimg.com/thumb/msid-98189324,width-300,height-225,imgsize-78776,,resizemode-75/rupee-getty.jpg' /></Link>
                <Heading style={news_title} as='h3'>More Asian countries interested in Rupee trade</Heading>
                <Text style={paragraph}>More Asian countries, such as Indonesia and the United Arab Emirates, are showing interest in using the Rupee as a trading unit, potentially reducing dependence on the world's reserve currency for cross-border exchange of goods and services.</Text>
                <Link style={news_link} href="https://economictimes.indiatimes.com/news/economy/foreign-trade/more-asian-countries-interested-in-rupee-trade-central-bank-executive/articleshow/98189304.cms?utm_source=contentofinterest&utm_medium=text&utm_campaign=cppst">Read More</Link>
              </Column>
            </Section>

          </Section>

          {/* News End */}

          {/* Publication Start */}

          {/* <Section style={{ backgroundColor: '#E8F5F2', padding: '20px 30px', }}>
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
          </Section> */}

          {/* Publication End */}

          {/* Footer Start */}
          <Hr style={hr} />

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
              <Img src="https://sawtee.org/images/logo_sawtee.jpg" alt="SAWTEE LOGO" width="150" height="auto" style={{ margin: '0 auto', marginBottom: '10px' }} />
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
            </Section>
            <Section style={{ marginTop: '20px', maxWidth: 'max-content' }}>
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

          {/* Footer End */}

        </Container>

      </Section>
    </Html>
  );
}

const main = {
  backgroundColor: 'rgb(246, 243, 234)',
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
  color: '#fff',
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