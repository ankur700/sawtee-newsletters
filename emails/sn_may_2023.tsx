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

const Data = {
  title: 'TRADE, CLIMATE CHANGE AND DEVELOPMENT MONITOR',
  subtitle: 'Monthly E-Newsletter of South Asia Watch on Trade, Economics and Environment',
  issue: 'Volume 20, Issue 05, May 2023',
  news: [
    {
      row: 1,
      posts: [{
        title: "Pakistan designated ‘very high concern’ area in food insecurity",
        content: "Acute food insecurity in Pakistan is likely to further exacerbate in coming months if the economic and political crisis further worsens, compounding the effects of the 2022 floods.",
        link: "https://www.dawn.com/news/1756769/pakistan-designated-very-high-concern-area-in-food-insecurity",
        image: "https://i.dawn.com/primary/2023/05/6475602b28e9d.jpg"
      },
      {
        title: "India may defer ICT case appeal against EU in WTO",
        content: "India could defer its appeal against a ruling by the dispute settlement body of the WTO that had favoured the EU against New Delhi's imposition of tariffs on mobile phones and electronic components and ICT goods.",
        link: "https://economictimes.indiatimes.com/news/economy/foreign-trade/india-may-defer-ict-case-appeal-against-eu-in-wto/articleshow/100602903.cms?utm_source=contentofinterest&utm_medium=text&utm_campaign=cppst",
        image: "https://img.etimg.com/thumb/msid-100603044,width-300,height-225,imgsize-191972,,resizemode-75/a-logo-is-seen-at-the-wto-in-geneva.jpg"
      },]
    },
    {
      row: 2,
      posts: [{
        title: "Solar investment outshines oil",
        content: "Investment in solar power is expected to overtake oil for the first time this year as clean energy spending outpaces that for fossil fuels.",
        link: "https://www.aljazeera.com/news/2023/5/25/solar-investment-outshines-oil-as-race-for-clean-energy-heats-up",
        image: "https://www.aljazeera.com/wp-content/uploads/2018/03/20121130125021786734_20.jpeg?h=540&w=961"
      },
      {
        title: "India to continue export ban on wheat",
        content: "The ban on export of wheat and wheat products will continue in the current year. The ban had been imposed in May last year due to reduced wheat output.",
        link: "https://economictimes.indiatimes.com/news/economy/foreign-trade/export-ban-on-wheat-to-continue-in-the-current-year/articleshow/100456219.cms?utm_source=contentofinterest&utm_medium=text&utm_campaign=cppst",
        image: "https://img.etimg.com/thumb/msid-100456222,width-300,height-225,imgsize-93418,,resizemode-75/wheat_bccl.jpg"
      },]
    },
    {
      row: 3,
      posts: [
        {
          title: "Sri Lanka promises EU to present plan to lift import restrictions",
          content: "Sri Lanka has promised the EU to present a plan by June to lift the import restrictions that came into place in 2020 as a measure to hold on to the fast-depleting foreign exchange reserves.",
          link: "https://www.dailymirror.lk/breaking_news/Sri-Lanka-promises-EU-to-present-plan-to-lift-import-restrictions-by-June/108-259413",
          image: "https://lankaleader.lk/images/EU_2022.2.11.jpg"
        },
        {
          title: "Economic slowdown triggers massive unemployment in Pakistan",
          content: "Millions of jobs in formal or informal sectors of the economy across Pakistan have been lost due to a massive decline in industrial production so far this fiscal year.",
          link: "https://www.dawn.com/news/1751330/economic-slowdown-triggers-massive-unemployment",
          image: "https://i.dawn.com/primary/2023/05/6456d04f96ee5.jpg"
        },]
    },
    {
      row: 4,
      posts: [
        {
          title: "IBM to freeze hiring as CEO expects AI to replace 7,800 jobs",
          content: "IBM will freeze hiring as it expects about 7,800 jobs to be replaced by Artificial Intelligence (AI) in the coming years, the tech giant’s CEO has said.",
          link: "https://www.aljazeera.com/economy/2023/5/3/ibm-to-freeze-hiring-as-ceo-expects-ai-to-replace-7800-jobs",
          image: "https://www.aljazeera.com/wp-content/uploads/2023/05/2005-05-06T000000Z_1522757626_RP6DRNARICAA_RTRMADP_3_TECH-IBM-RESTRUCTURIING-1683077403.jpg?resize=770%2C513&quality=80"
        },
        {
          title: "Two-way trade through Tatopani border point with China resumes",
          content: "After eight years, the main Tatopani border crossing between Nepal and China has been put into two-way operation.",
          link: "https://myrepublica.nagariknetwork.com/news/two-way-trade-through-tatopani-border-point-with-china-resumes-after-eight-years-human-movement-remains-halted/",
          image: "https://myrepublica.nagariknetwork.com/uploads/media/Tatopani_20201006104443.jpg"
        }]
    },

  ],
  events: [{
    title: "Pre-budget discussion held at Koshi Province",
    content: "SAWTEE, in association with FNCCI Koshi Province, Community Engagements and Outreach (CEO), Nepal Institute for Urban and Regional Studies (NIURS) and VRock and Company, organized a pre-budget discussion at Koshi Province on 19 May 2023. During the interaction, Ms. Neelu Thapa, Executive Member, SAWTEE, made a presentation on the roles that provincial governments could play in the area of international trade, especially in relation to promoting exports. The programme was supported by The Asia Foundation.",
    link: null
  }],
  publications: []
}

export default function Email() {

  return (
    <Html>
      <Head />
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
          <Section style={section} >
            <Heading as='h2' style={section_heading}>Opinion in Lead</Heading>
            <Heading as='h3' style={section_title}>Is it time to consider opening outward FDI?</Heading>
            <Text style={paragraph}>
              For nearly six decades, strict capital controls, which prohibit outward investment, have been a constant policy in Nepal. While the authorities have been loosening the grip in small steps, the question is how long Nepal can hold on to the strict capital control regime in this highly globalized world.
            </Text>
            <Text style={paragraph}>
              Since 2016, the Nepal Rastra Bank (NRB)—Nepali central bank and foreign exchange regulator—<Link href="https://www.nrb.org.np/contents/uploads/2020/02/FXM_Unified_Circular-2074.pdf" target="_blank">allowed</Link> any exporting firms to set up their branch or liaison office or showrooms in foreign countries. Both goods and services exporters are eligible to open such offices. However, the condition is that these firms need to have a proper plan for at least following three years and could only spend up to 5 percent of their total foreign exchange earnings as an annual expense at their foreign outposts. Thanks to this provision, a few Nepali firms have established their branch offices and showrooms outside Nepal.
            </Text>
            <Section style={{ textAlign: 'center' as const, marginTop: '20px' }}>
              <Button
                pX={10}
                pY={10}
                style={ButtonStyle}
                href="https://sawtee.org/opinion-in-lead/is-it-time-to-consider-opening-outward-fdi.html"
              >
                Read More
              </Button>
            </Section>

          </Section>
          {/* Opinion in Lead End*/}

          {/* News Start */}
          <Section style={section}>
            <Heading as='h2' style={section_heading}>News</Heading>
            {
              Data.news && Data.news.map((item) => {
                return (
                  <Section key={item.row} style={{ paddingBottom: '50px', minHeight: "280px" }} >
                    {item.posts && item.posts.map((post, idx) => {
                      return (
                        <Column key={'0' + idx} style={{ float: 'left', padding: ' 0 2%', width: '46%', }}>
                          <Link href={post.link}><Img width='100%' height='180' alt={post.title} title={post.title} src={post.image ? post.image : "/static/placeholer-image.svg"} /></Link>
                          <Heading style={news_title} as='h3'>{post.title}</Heading>
                          <Text style={paragraph}>{post.content}</Text>
                          <Link style={news_link} href={post.link}>Read More</Link>
                        </Column>
                      )
                    })}
                  </Section>
                )
              })
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
                    <Section>
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
          {Data.publications.length > 0 ?
            (
              <>
                <Section style={publication_events_section}>
                  <Heading as='h2' style={section_heading}>Publications</Heading>
                  {Data.publications.map((publication) => {
                    return (
                      <Section style={{ paddingBottom: "50px" }}>
                        <Heading as='h3' style={section_title}>{publication.title}</Heading>
                        <Text style={paragraph}>{publication.content}</Text>
                        <Button
                          pX={10}
                          pY={10}
                          style={ButtonStyle}
                          href={publication.link}
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
  wordBreak: 'break-word'
};

const report_para = {
  color: '#525f7f',
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Ubuntu,sans-serif',
  fontSize: '16px',
  lineHeight: '24px',
  textAlign: 'justify' as const,
  wordBreak: 'break-all'
}

const anchor = {
  color: '#556cd6',
  textDecoration: 'underline',
  textUnderlineOffset: '3px'
};

const publication_events_section = {
  backgroundColor: '#E8F5F2', padding: '0px 30px',
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