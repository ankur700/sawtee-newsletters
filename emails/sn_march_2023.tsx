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

let CurrentIssue = "Volume 20, Issue 03, March 2023"

export default function Email() {

  return (
    <Html>
      <Head />
      <Preview>Monthly E-Newsletter of South Asia Watch on Trade, Economics and Environment | Volume 20, Issue 03, March 2023</Preview>
      <Section style={main}>
        {/* Header Section */}
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
              <span style={{ float: 'right' }}>Volume 20, Issue 03, March 2023</span>
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
          {/* Opinion in Lead Section */}
          <Section style={section} >
            <Heading as='h2' style={section_heading}>Opinion in Lead</Heading>
            <Heading as='h3' style={section_title}>Climate change disrupts agriculture trade</Heading>
            <Text style={paragraph}>
              Climate change has started to have profound effects on many sectors of the economy, including agriculture and global
              trade in agricultural commodities. Climate change causes drastic changes in the weather pattern, which impacts
              agricultural yields and production, creating economic uncertainty for farmers, traders, and other market participants.
              Erratic weather patterns, extreme heat or cold usually cause a fall in production or reduce the yield, causing shortages
              of agricultural products, impacting food security as well as creating a shortage of agricultural raw materials. Since
              agricultural trade accounts for <Link href="https://www.ifpri.org/publication/link-between-agricultural-trade-climate-change-and-food-security-tariff-elimination" target="_blank">10 percent of global commodities trade</Link>, any shocks in production will impact global
              trade.
            </Text>
            <Text style={paragraph}>
              According to some estimates, with a percentage increase in temperature <Link target="_blank" href="https://openknowledge.worldbank.org/server/api/core/bitstreams/5d543ded-1163-5fc6-8fe8-319d913cf269/content">agricultural exports</Link> from high-income nations could decline by 6 percent, while exports from low- and middle-income nations could dip by as much as 13 percent. <Link target="_blank" href="https://papers.ssrn.com/sol3/papers.cfm?abstract_id=3281550">The estimates show</Link> that a 1°C increase in temperature could result in a 23 percent drop in lower-middle-income countries’ exports while low-income countries could experience a 39 percent decline in exports. Similarly, Africa is expected to see a 4.8 percent decline in agricultural exports with every 1°C rise in temperature, whereas Asia is affected at a proportionately greater level, with a reduction of 14.4 percent—almost three times that of Africa.
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
                href="https://sawtee.org/opinion-in-lead/climate-change-disrupts-agriculture-trade.html"
              >
                Read More
              </Button>
            </Section>

          </Section>

          {/* News Section */}
          <Section style={section} >
            <Heading as='h2' style={section_heading}>News</Heading>
            <Section style={news_section}>
              <Column style={{ float: 'left', paddingRight: '2%', width: '48%' }}>
                <Link href='https://www.theguardian.com/business/2023/mar/31/uk-joins-asia-pacific-cptpp-trade-bloc-that-includes-japan-and-australia'><Img width='100%' height='180' alt='UK joins Asia-Pacific CPTPP trade bloc' title='UK joins Asia-Pacific CPTPP trade bloc' src='https://i.guim.co.uk/img/media/dba8fa0fb7786cc463e449b8e10bf13d0b6c7383/0_20_3500_2101/master/3500.jpg?width=620&quality=85&dpr=1&s=none' /></Link>
                <Heading style={news_title} as='h3'>UK joins Asia-Pacific CPTPP trade bloc</Heading>
                <Text style={paragraph}>Britain has joined the 11-member strong Asia-Pacific trade bloc that includes Japan and Australia after nearly two years of negotiations.</Text>
                <Link style={news_link} href="https://www.theguardian.com/business/2023/mar/31/uk-joins-asia-pacific-cptpp-trade-bloc-that-includes-japan-and-australia">Read More</Link>
              </Column>
              <Column style={{ float: 'right', paddingLeft: '2%', width: '48%' }}>
                <Link href='https://economictimes.indiatimes.com/news/economy/foreign-trade/export-ban-on-wheat-to-continue-record-output-likely-even-after-untimely-rains-fci-cmd-ashok-k-meena/articleshow/99068285.cms?utm_source=contentofinterest&utm_medium=text&utm_campaign=cppst'><Img width='100%' height='180' alt='Export ban on wheat to continue' title='Export ban on wheat to continue' src='https://img.etimg.com/thumb/msid-99068327,width-300,height-225,imgsize-55634,,resizemode-75/wheat.jpg' /></Link>
                <Heading style={news_title} as='h3'>Export ban on wheat to continue</Heading>
                <Text style={paragraph}>The Indian government said the export ban on wheat will continue as long as the country does not feel comfortable with the domestic supplies to meet the food security needs.</Text>
                <Link style={news_link} href="https://economictimes.indiatimes.com/news/economy/foreign-trade/export-ban-on-wheat-to-continue-record-output-likely-even-after-untimely-rains-fci-cmd-ashok-k-meena/articleshow/99068285.cms?utm_source=contentofinterest&utm_medium=text&utm_campaign=cppst">Read More</Link>
              </Column>
            </Section>

            <Section style={news_section}>
              <Column style={{ float: 'left', paddingRight: '2%', width: '48%' }}>
                <Link style={news_link} href="https://www.dawn.com/news/1744663/imf-wants-external-financing-commitments-fulfilled-to-release-funds-says-pm-shehbaz"><Img width='100%' height='180' alt="IMF wants external financing commitments fulfilled to release funds" title="IMF wants external financing commitments fulfilled to release funds" src='https://i.dawn.com/primary/2023/03/281615326357657.jpg' /></Link>
                <Heading style={news_title} as='h3'>IMF wants external financing commitments fulfilled to release funds</Heading>
                <Text style={paragraph}>The IMF wants external financing commitments fulfilled from friendly countries before it releases bailout funds, Prime Minister Shehbaz Sharif said.</Text>
                <Link style={news_link} href="https://www.dawn.com/news/1744663/imf-wants-external-financing-commitments-fulfilled-to-release-funds-says-pm-shehbaz">Read More</Link>
              </Column>
              <Column style={{ float: 'right', paddingLeft: '2%', width: '48%' }}>
                <Link style={news_link} href="https://myrepublica.nagariknetwork.com/news/china-agrees-to-resume-bilateral-trade-with-nepal-via-tatopani-khasa-customs-after-a-hiatus-of-nine-years/"><Img width='100%' height='180' alt='China agrees to resume trade via Tatopani-Khasa customs' title='China agrees to resume trade via Tatopani-Khasa customs' src='https://myrepublica.nagariknetwork.com/uploads/media/Photo2_20230330081958.jpg' /></Link>
                <Heading style={news_title} as='h3'>China agrees to resume trade via Tatopani-Khasa customs</Heading>
                <Text style={paragraph}>The Chinese government has agreed to resume the two-way trade via Tatopani-Khasa route from May 1 this year after a hiatus of nine years.</Text>
                <Link style={news_link} href="https://myrepublica.nagariknetwork.com/news/china-agrees-to-resume-bilateral-trade-with-nepal-via-tatopani-khasa-customs-after-a-hiatus-of-nine-years/">Read More</Link>
              </Column>
            </Section>

            <Section style={news_section}>
              <Column style={{ float: 'left', paddingRight: '2%', width: '48%' }}>
                <Link style={news_link} href="https://www.newagebd.net/article/197487/bangladesh-bhutan-sign-agreement-on-transit"><Img width='100%' height='180' alt='Bangladesh, Bhutan sign agreement on transit' title='Bangladesh, Bhutan sign agreement on transit' src='https://www.newagebd.com/files/records/news/202303/197487_140.jpg' /></Link>
                <Heading style={news_title} as='h3'>Bangladesh, Bhutan sign agreement on transit</Heading>
                <Text style={paragraph}>Bangladesh and Bhutan signed an agreement on movement of traffic-in-transit and protocol at the Bhutanese capital Thimpu to simplify further bilateral trade between the two countries.</Text>
                <Link style={news_link} href="https://www.newagebd.net/article/197487/bangladesh-bhutan-sign-agreement-on-transit">Read More</Link>
              </Column>
              <Column style={{ float: 'right', paddingLeft: '2%', width: '48%' }}>
                <Link style={news_link} href="https://www.dawn.com/news/1742627/dollar-starved-pakistan-struggles-to-pay-international-airlines-report"><Img width='100%' height='180' alt='‘Dollar-starved’ Pakistan struggles to pay international airlines' title='‘Dollar-starved’ Pakistan struggles to pay international airlines' src='https://th.bing.com/th/id/OIP.KfU1AKJCo4V2eZkVGzKmeAHaDt?pid=ImgDet&rs=1' /></Link>
                <Heading style={news_title} as='h3'>‘Dollar-starved’ Pakistan struggles to pay international airlines</Heading>
                <Text style={paragraph}>The global air transport body has warned of an ‘aviation crisis’ in Pakistan as airlines are struggling to recover $290 million due to a severe financial crisis.</Text>
                <Link style={news_link} href="https://www.dawn.com/news/1742627/dollar-starved-pakistan-struggles-to-pay-international-airlines-report">Read More</Link>
              </Column>
            </Section>

            <Section style={news_section}>
              <Column style={{ float: 'left', paddingRight: '2%', width: '48%' }}>
                <Link style={news_link} href="https://www.newagebd.net/article/196219/extend-preferential-market-access-for-graduating-ldcs-pm-to-dev-partners"><Img width='100%' height='180' alt='Extend preferential market access for graduating LDCs: Bangladesh' title='Extend preferential market access for graduating LDCs: Bangladesh' src='https://www.newagebd.com/files/records/news/202303/196219_148.jpg' /></Link>
                <Heading style={news_title} as='h3'>Extend preferential market access for graduating LDCs: Bangladesh</Heading>
                <Text style={paragraph}>Bangladesh prime minister placed a five-point recommendation, including at least six-year extension of preferential market access for Bangladesh and other graduating least developed countries.</Text>
                <Link style={news_link} href="https://www.newagebd.net/article/196219/extend-preferential-market-access-for-graduating-ldcs-pm-to-dev-partners">Read More</Link>
              </Column>
              <Column style={{ float: 'right', paddingLeft: '2%', width: '48%' }}>
                <Link style={news_link} href="https://economictimes.indiatimes.com/news/economy/foreign-trade/asian-buyers-step-up-indian-corn-imports-as-drought-cuts-argentine-crop/articleshow/98351214.cms?utm_source=contentofinterest&utm_medium=text&utm_campaign=cppst"><Img width='100%' height='180' alt='Asian buyers step up Indian corn imports as drought cuts Argentine crop' title='Asian buyers step up Indian corn imports as drought cuts Argentine crop' src='https://img.etimg.com/thumb/msid-98351262,width-300,height-225,imgsize-128126,,resizemode-75/corn-a-gencies.jpg' /></Link>
                <Heading style={news_title} as='h3'>Asian buyers step up Indian corn imports as drought cuts Argentine crop</Heading>
                <Text style={paragraph}>Feed millers in Asia are boosting corn purchases from India, as a severe drought has reduced production in traditional supplier Argentina.</Text>
                <Link style={news_link} href="https://economictimes.indiatimes.com/news/economy/foreign-trade/asian-buyers-step-up-indian-corn-imports-as-drought-cuts-argentine-crop/articleshow/98351214.cms?utm_source=contentofinterest&utm_medium=text&utm_campaign=cppst">Read More</Link>
              </Column>
            </Section>

            {/* <Section style={news_section}>
              <Column style={{ float: 'left', paddingRight: '2%', width: '48%' }}>
                <Link style={news_link} href="https://www.newagebd.net/article/196219/extend-preferential-market-access-for-graduating-ldcs-pm-to-dev-partners"><Img width='100%' height='180' alt='B’desh opens Bangalabandha Dry Port for Nepali yarn' title='B’desh opens Bangalabandha Dry Port for Nepali yarn' src='https://myrepublica.nagariknetwork.com/uploads/media/dryport_20230108080820.jpg' /></Link>
                <Heading style={news_title} as='h3'>7.	Extend preferential market access for graduating LDCs: Bangladesh</Heading>
                <Text style={paragraph}>Bangladesh prime minister placed a five-point recommendation, including at least six-year extension of preferential market access for Bangladesh and other graduating least developed countries.</Text>
                <Link style={news_link} href="https://www.newagebd.net/article/196219/extend-preferential-market-access-for-graduating-ldcs-pm-to-dev-partners">Read More</Link>
              </Column>

              <Column style={{ float: 'right', paddingLeft: '2%', width: '48%' }}>
                <Link style={news_link} href="https://economictimes.indiatimes.com/news/economy/foreign-trade/asian-buyers-step-up-indian-corn-imports-as-drought-cuts-argentine-crop/articleshow/98351214.cms?utm_source=contentofinterest&utm_medium=text&utm_campaign=cppst"><Img width='100%' height='180' alt='‘Dollar-starved’ Pakistan struggles to pay international airlines' title='Asian buyers step up Indian corn imports as drought cuts Argentine crop' src='https://i.dawn.com/primary/2023/01/63c0c38bcb0fd.jpg' /></Link>
                <Heading style={news_title} as='h3'>Asian buyers step up Indian corn imports as drought cuts Argentine crop</Heading>
                <Text style={paragraph}>Feed millers in Asia are boosting corn purchases from India, as a severe drought has reduced production in traditional supplier Argentina.</Text>
                <Link style={news_link} href="https://economictimes.indiatimes.com/news/economy/foreign-trade/asian-buyers-step-up-indian-corn-imports-as-drought-cuts-argentine-crop/articleshow/98351214.cms?utm_source=contentofinterest&utm_medium=text&utm_campaign=cppst">Read More</Link>
              </Column>
            </Section> */}
          </Section>

          {/* Publications/Events Section */}
          <Section style={{ backgroundColor: '#E8F5F2', padding: '20px 30px', }}>
            <Heading as='h2' style={section_heading}>Publication</Heading>
            <Heading as='h3' style={section_title}>Economic case for clean energy transition in Nepal</Heading>
            <Link href='https://sawtee.org/publications/Issue-Paper-9.pdf'><Img style={{ float: 'center', margin: '0 auto' }} width='50%' height='350' alt='Economic case for clean energy transition in Nepal' title='Economic case for clean energy transition in Nepal' src='https://sawtee.org/Web_images/publication-image.jpg' /></Link>
            <Text style={paragraph}>A low level of industrialization and an energy mix dominated by traditional fuel sources (e.g., firewood) coupled with good prospects of domestic clean energy sources may make a clean energy transition economically and environmentally desirable. This Issue Brief explores Nepal's pathways to green structural transformation in Nepal.</Text>
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
              href="https://sawtee.org/publications/Issue-Paper-9.pdf"
            >
              Read More
            </Button>
          </Section>

          {/* Footer Section */}
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

const publication_image = {
  margin: 'o auto'
}

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