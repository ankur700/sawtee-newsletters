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
import { Font } from '@react-email/font';
const Data = {
  title: 'TRADE, CLIMATE CHANGE AND DEVELOPMENT MONITOR',
  subtitle: 'Monthly E-Newsletter of South Asia Watch on Trade, Economics and Environment',
  issue: 'Volume 20, Issue 06, June 2023',
  news: [
    {
      row: 1,
      posts: [{
        title: "Crisis-hit Pakistan strikes $3bn IMF bailout deal",
        content: "Crisis-hit Pakistan has reached a staff-level agreement with the International Monetary Fund (IMF) over US$3bn `of funding.",
        link: "https://www.bbc.com/news/business-66062429",
        image: "https://ichef.bbci.co.uk/news/976/cpsprodpb/59B4/production/_130246922_gettyimages-1258534844.jpg.webp"
      },
      {
        title: "India, US decide to end six trade disputes at WTO ",
        content: "India and the United States have agreed to end six trade disputes at the World Trade Organisation and New Delhi will also lift retaliatory customs duties on 28 American products.",
        link: "https://economictimes.indiatimes.com/news/economy/foreign-trade/us-india-agree-to-end-six-wto-disputes-lift-some-tariffs/articleshow/101200514.cms?utm_source=contentofinterest&utm_medium=text&utm_campaign=cppst",
        image: "https://img.etimg.com/thumb/msid-101200523,width-300,height-225,imgsize-83502,,resizemode-75/u-s-president-joe-biden-hosts-indias-prime-minister-narendra-modi-for-an-official-white-house-state-visit-in-washington.jpg"
      },]
    },
    {
      row: 2,
      posts: [{
        title: "Nepal govt announces NTIS 2022 with the aim to boost exports",
        content: "The government has enforced ‘Nepal Trade Integration Strategy 2022’ allocating a hefty amount to be invested in selected exportable goods although previous two similar programs had failed to yield positive outcomes in a notable value.",
        link: "https://myrepublica.nagariknetwork.com/news/govt-spending-rs-463-billion-in-five-years-for-ntis-2022-with-the-aim-to-boost-exports/",
        image: "https://myrepublica.nagariknetwork.com/uploads/media/MinistryofIndustryCommerceandSupplies_20220717125318.jpg"
      },
      {
        title: "Pak govt shoulders some blame for economic woes",
        content: "The government has conceded that lingering political instability, import controls and tight monetary policies caused the country’s prevailing economic downfall, taking the blame for the turmoil it has largely pinned on the usual suspects: the PTI and the floods.",
        link: "https://www.dawn.com/news/1758580/govt-shoulders-some-blame-for-economic-woes",
        image: ""
      },]
    },
    {
      row: 3,
      posts: [
        {
          title: "Bangladesh should focus living wages, progression paths of RMG workforce",
          content: "The textile and garment manufacturing industry needs to focus on living wages and clearly defined career progression paths for the workforce to achieve its sustainability targets in the coming days.",
          link: "https://www.newagebd.net/article/203474/focus-should-be-on-living-wages-progression-paths-of-rmg-workforce-pwc",
          image: "https://www.newagebd.com/files/records/news/202306/203474_185.jpg"
        },
        {
          title: "India's palm oil imports hit 27-month low",
          content: "India's palm oil imports sank to a 27-month low in May as buyers cancelled expensive cargoes of the edible oil and replaced them with cheaper soyoil and sunflower oil.",
          link: "https://economictimes.indiatimes.com/news/economy/foreign-trade/indias-palm-oil-imports-hit-27-month-low-buyers-pick-cheaper-soft-oils-dealers/articleshow/100782902.cms?utm_source=contentofinterest&utm_medium=text&utm_campaign=cppst",
          image: "https://img.etimg.com/thumb/msid-100783007,width-300,height-225,imgsize-168138,,resizemode-75/1.jpg"
        },]
    },
    {
      row: 4,
      posts: [
        {
          title: "Nepal, India reach slew of agreements",
          content: "Nepal and India reached a slew of agreements and launched over half a dozen projects during Prime Minister Pushpa Kamal Dahal's official visit to India to deepen economic cooperation between the two countries.",
          link: "https://myrepublica.nagariknetwork.com/news/nepal-india-reach-slew-of-agreements-including-a-long-term-energy-deal-to-deepen-economic-cooperation/",
          image: "https://myrepublica.nagariknetwork.com/uploads/media/PRO_KTM-6F8A8825_20230601152232.jpg"
        },
        {
          title: "Nepal, India sign pact for cross-border digital payment",
          content: "Nepal and India signed a memorandum of understanding for cross-border digital payment, which is expected to ease digital transactions for business people, students, and tourists from both countries.",
          link: "https://kathmandupost.com/money/2023/06/01/hed-nepal-india-sign-pact-for-cross-border-digital-payment",
          image: "https://assets-api.kathmandupost.com/thumb.php?src=https://assets-cdn.kathmandupost.com/uploads/source/news/2023/third-party/0moneyNEWLEADnepalclearinghouse-1685633672.png&w=900&height=601"
        }]
    },

  ],
  events: [{
    title: "Workshop for Economic Journalists",
    content: "SAWTEE in collaboration with the Society of Economic Journalists (SEJON) organized a workshop for economic journalists to build their capacity in covering issues related to balance of payments, Nepal-India trade and transit treaty, examining trade through gender lens, Nepal-Bangladesh trade, and LDC graduation. The residential workshop was held at Godavari Village Resort on 30 June -1 July 2023.",
    link: "https://sawtee.org/featured-events/workshop-for-economic-journalists.html"
  }],
  publications: [],
  opinion: {
    title: "Food security remains a key challenge for South Asia",
    paraone: "The impacts of climate change, pandemic coupled with natural and manmade disasters have South Asia struggling to ensure food security for a fifth of its population. The region that is home to one-fourth of the world's population and where agriculture contributes more than 40 percent of employment, South Asia does not seem to be on the path to meeting the zero hunger goal by 2030 as aspired under the Sustainable Development Goals (SDGs). The UN SDGs report 2022 highlights that around 828 million people suffered from hunger in 2021 and approximately one-third of the world population (2.3 billion people) were moderately or severely food insecure, which means they did not have regular access to adequate food. South Asia's food security situation is no different, and it is still a long way from achieving Goal 2—Zero hunger. According to a report by The State of Food Security and Nutrition in the World 2022, extreme food insecurity in South Asian countries increased from 14.4 percent to 21 percent between 2014 and 2021. In 2022, South Asian countries accounted for 45 percent of food insecurity globally and 84 percent in Asia.",
    paratwo: "In spite of experiencing significant economic growth in recent years, reports are rife chronicling the distressed state of food security in the region. South Asia has an alarming position in the Global Hunger Index (GHI), exhibiting the highest regional level of hunger at 27.4 in 2022 and the highest levels of stunting and wasting as well. Afghanistan is the worst-ranked (109) country according to GHI, followed by India (107), Pakistan (99), Bangladesh (84), Nepal (81) and Sri Lanka (64). The 2022 Global Report on Food Crises highlights that in South Asia, a total of 28.73 million individuals were classified as being in crisis or worse or its equivalent.",
    link: "https://sawtee.org/opinion-in-lead/food-security-remains-a-key-challenge-for-south-asia.html"
  },
  report: {
    title: "",
    content: "SAWTEE, with support from International Development Research Center, has published a report titled ‘Mapping Innovation Support Programmes for Micro, Small and Medium Enterprise Development: Findings from Nepal’. This study examines the innovation support landscape in Nepal, describing existing policies and major innovation support programmes for MSMEs, presenting stakeholders’ views on the same, examining the availability of credible empirical evidence on the effectiveness of these policies and programmes. The study has a special focus on the support available to growth-oriented startups and export promotion.",
    link: "https://sawtee.org/articles/mapping-innovation-support-programmes-for-micro-small-and-medium-enterprise-development.html",
    image: "https://sawtee.org/Web_images/SMEs-cover-page.jpg"
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
      <Preview>{Data.subtitle + " | " + Data.issue}</Preview>
      <Section style={main}>
        {/* Header section Start */}
        <Section style={header}>
          <Heading as='h1' style={header_top}>
            {Data.title}
          </Heading>
          <Section style={header_bottom}>
            <Column>
              <span style={{ float: 'left' }}>
                {Data.subtitle}
              </span>
            </Column>
            <Column>
              <span style={{ float: 'right' }}>{Data.issue}</span>
            </Column>
          </Section>
        </Section>
        {/* Header section End */}

        <Container style={container}>

          {/* Logo and social nav section Start */}
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
          {/* Logo and social nav section Start */}

          <Hr style={hr} />

          {/* Opinion in Lead Start */}
          {Data.opinion.title && <Section style={section} >
            <Heading as='h2' style={section_heading}>Opinion in Lead</Heading>
            <Heading as='h3' style={section_title}>{Data.opinion.title}</Heading>
            <Text style={paragraph}>
              {Data.opinion.paraone}
            </Text>
            <Text style={paragraph}>
              {Data.opinion.paratwo}
            </Text>
            <Section style={{ textAlign: 'center' as const, marginTop: '20px' }}>
              <Button
                pX={10}
                pY={10}
                style={ButtonStyle}
                href={Data.opinion.link}
              >
                Read More
              </Button>
            </Section>

          </Section>}
          {/* Opinion in Lead End*/}

          {/* Report Start */}
          {Data.report ?
            (
              <Section style={publication_events_section}>
                <Heading as='h2' style={section_heading}>Report</Heading>
                {Data.report.title && <Heading as='h3' style={section_title}>{Data.report.title}</Heading>}

                {Data.report.image && <Img src={Data.report.image} width="300px" height="auto" alt={Data.report.title} style={{ margin: "20px auto" }} />}
                {Data.report.content && <Text style={paragraph}>{Data.report.content}</Text>}
                {Data.report.link && <Button
                  pX={10}
                  pY={10}
                  style={ButtonStyle}
                  href={Data.report.link}
                >
                  Read More
                </Button>}
              </Section>
            ) : null
          }
          {/* Report End */}

          {/* News Start */}
          <Section style={section}>
            <Heading as='h2' style={section_heading}>News</Heading>
            {
              Data.news ? Data.news.map((item) => {
                return (
                  <Section key={item.row} style={{ paddingBottom: '50px', minHeight: "280px" }} >
                    {item.posts ? item.posts.map(({ title, link, content, image }) => {
                      return (
                        <Column key={title} style={{ float: 'left', padding: ' 0 2%', width: '46%', }}>
                          <Link href={link}><Img width='100%' height='180' alt={title} title={title} src={image ? image : `https://placehold.co/280x180/e4e4e4/006181?text=${title}`} /></Link>
                          < Heading style={news_title} as='h3'>{title}</Heading>
                          <Text style={paragraph}>{content}</Text>
                          <Link style={news_link} href={link}>Read More</Link>
                        </Column>
                      )
                    }) : null}
                  </Section>
                )
              }) : null
            }

          </Section>
          {/* News End */}

          {/* Events Start */}
          {Data.events.length > 0 ?
            (<>
              <Section style={{ backgroundColor: '#E8F5F2', padding: '20px 30px', }}>
                <Heading as='h2' style={section_heading}>Events</Heading>
                {Data.events.map((event) => {
                  return (
                    <Section key={event.title}>
                      <Heading as='h3' style={section_title}>{event.title}</Heading>
                      <Text style={paragraph}>{event.content}</Text>
                      {event.link !== null && <Button
                        pX={10}
                        pY={10}
                        style={ButtonStyle}
                        href={event.link}
                      >
                        Read More
                      </Button>}
                    </Section>
                  )
                })}
              </Section>

            </>) : null
          }

          {/* Publication Start */}
          {Data.publications && Data.publications.length > 0 ?
            (
              <>
                <Section style={publication_events_section}>
                  <Heading as='h2' style={section_heading}>Publications</Heading>
                  {Data.publications.map(({ title, content, link, image }) => {
                    return (
                      <Section key={title} style={{ paddingBottom: "50px" }}>
                        {image &&
                          <Container style={{ margin: "20px 0 40px 0" }} >
                            <Link href={link}> <Img src={image} width="250px" height="auto" alt={title} style={{ margin: "0 auto" }} title={title} /></Link>
                          </Container>
                        }
                        {/* <Heading as='h3' style={section_title}>{title}</Heading> */}
                        {content && <Text style={paragraph}>{content}</Text>}
                        <Button
                          pX={10}
                          pY={10}
                          style={ButtonStyle}
                          href={link}
                        >
                          Read More
                        </Button>
                      </Section>
                    )
                  })}
                </Section>
                <Section style={publication_events_section}>
                  <Hr style={{ margin: "30px 0", borderTop: "1px solid #00618173" }} />
                </Section>
              </>
            ) : null
          }
          {/* Publication End */}

          {/* Footer Start */}
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
                Tel: 977-1-4544438, 4524360 Fax: 977-1-4544570<br />
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
              <Section style={{ marginTop: '10px', textAlign: 'center' as const, width: 'max-content' }}>
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
          {/* Footer End */}

        </Container>
      </Section>
    </Html >
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
  wordBreak: 'break-word'
};

const anchor = {
  color: '#556cd6',
  textDecoration: 'underline',
  textUnderlineOffset: '3px'
};

const publication_events_section = {
  backgroundColor: '#E8F5F2',
  padding: '20px 30px',
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

const ButtonStyle = {
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
}