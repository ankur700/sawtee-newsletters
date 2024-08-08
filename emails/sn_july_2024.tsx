import { Body, Button, Column, Container, Font, Head, Heading, Hr, Html, Img, Link, Preview, Row, Section, Text } from '@react-email/components';
import * as React from 'react';

const textAlign = "center" as const;
interface News {
  row: number;
  posts: Post[];
}

interface Post {
  title: string;
  link: string;
  content: string;
  image?: string;
}

interface Event {
  title: string;
  content: string;
  link: string | null;
}

const Data = {
  title: 'TRADE, CLIMATE CHANGE AND DEVELOPMENT MONITOR',
  subtitle: 'Monthly E-Newsletter of South Asia Watch on Trade, Economics and Environment',
  issue: 'Volume 21, Issue 07, July 2024',
  news: [
    {
      row: 1,
      posts: [{
        title: "Korea resumes ODA concessional loan projects in Sri Lanka",
        content: "The Export-Import Bank of Korea notified Sri Lanka’s Ministry of Finance, Economic Stabilisation and National Policies of its decision to resume EDCF Official Development Assistance (ODA) concessional loan projects in Sri Lanka.",
        link: "https://www.ft.lk/front-page/Korea-resumes-ODA-concessional-loan-projects-in-Sri-Lanka/44-764936",
        image: ""
      },
      {
        title: "Bangladesh's economy with deep scars limps along",
        content: "Violent clashes, stemming from the quota reform demonstrations, shuttered garment factories and shops and choked port activities when Bangladesh was already grappling with the economic challenges.",
        link: "https://www.thedailystar.net/news/bangladesh/news/economy-deep-scars-limps-along-3661351 ",
        image: "https://www.thedailystar.net/sites/default/files/styles/big_202/public/images/2024/07/25/bank-counter.jpg"
      },]
    },
    {
      row: 2,
      posts: [{
        title: "FDI from China may not benefit India in long run",
        content: "Increasing foreign direct investment from China in the domestic market may benefit in the short-term but it risks undermining India's long-term economic security and strategic autonomy, said the Global Trade Research Initiative.",
        link: "https://economictimes.indiatimes.com/news/economy/foreign-trade/fdi-from-china-may-benefit-india-in-short-term-but-not-in-long-run-gtri/articleshow/111934669.cms",
        image: "https://img.etimg.com/thumb/msid-111934672,width-300,height-225,imgsize-13716,resizemode-75/china-fdi.jpg"
      },
      {
        title: "Indo-Bangla trade comes to standstill",
        content: "Trade between India and Bangladesh via land ports came to a standstill on Sunday as there was no movement of cargo trucks to and fro due to the ongoing student protests in the neighbouring country.",
        link: "https://economictimes.indiatimes.com/news/economy/foreign-trade/indo-bangla-trade-comes-to-standstill-as-students-protests-intensify/articleshow/111906695.cms?utm_source=contentofinterest&utm_medium=text&utm_campaign=cppst",
        image: "https://img.etimg.com/thumb/msid-111908278,width-300,height-225,imgsize-43890,resizemode-75/.jpg"
      },]
    },
    {
      row: 3,
      posts: [
        {
          title: "China to continue zero-tariff facilities post-LDC to Bangladesh",
          content: "China will continue to provide zero-tariff treatment on 98 percent of taxable items to Bangladesh beyond 2026 after graduation from LDC status.",
          link: "https://www.tbsnews.net/bangladesh/china-continue-zero-tariff-treatment-bangladesh-beyond-ldc-graduation-yao-900981",
          image: "https://www.tbsnews.net/sites/default/files/styles/big_3/public/images/2024/07/16/1721144746-unb_newswire.jpg"
        },
        {
          title: "Nepal allows digital retail payments in all countries",
          content: "Nepal’s central bank has allowed Nepali payment system operators to deal with digital retail payments in any country for merchant-to-person payment (M2P).",
          link: "https://kathmandupost.com/money/2024/07/13/nepal-allows-digital-retail-payments-in-all-countries",
          image: "https://assets-api.kathmandupost.com/thumb.php?src=https://assets-cdn.kathmandupost.com/uploads/source/news/2024/third-party/thumb13-1720834841.jpg&w=900&height=601"
        },]
    },
    {
      row: 4,
      posts: [
        {
          title: "Delay in traceability system curbs Ceylon Cinnamon exports",
          content: "The prolonged delay in implementing a traceability system for Ceylon Cinnamon has emerged as a major obstacle, preventing the export of the spice with its Geographical Indication (GI) certification and costing the industry and the economy millions of dollars.",
          link: "https://www.ft.lk/top-story/Delay-in-traceability-system-curbs-Ceylon-Cinnamon-exports/26-764040",
          image: "https://bmkltsly13vb.compat.objectstorage.ap-mumbai-1.oraclecloud.com/cdn.ft.lk/assets/uploads/image_2ca84eaa2f.jpg"
        },
        {
          title: "EU hits Chinese electric cars with new tariffs",
          content: "The European Union has raised tariffs on Chinese electric vehicles, as Brussels takes action to protect the bloc's motor industry. The new tariffs on individual manufacturers range from 17.4 percent to 37.6 percent, which is on top of a 10 percent duty that was already in place.",
          link: "https://www.bbc.com/news/articles/cy99z53qypko",
          image: "https://ichef.bbci.co.uk/news/800/cpsprodpb/bb81/live/f9652020-38cd-11ef-b198-3767acdf2cde.jpg.webp"
        }]
    },
  ],
  events: [{
    title: "Call for SAWTEE Media Fellowship 2024",
    content: "SAWTEE is delighted to announce an exciting fellowship opportunity for journalists in Nepal. The fellowship program will select two journalists who will have the opportunity to delve into trade and climate change nexus. This fellowship presents a unique opportunity for journalists to deepen their knowledge, expand their network, and contribute to the public’s understanding of critical issues at the intersection of trade and climate change.",
    link: "https://www.sawtee.org/media-fellows.php"
  }],
  publications: null,
  opinion: {
    title: "South Asia’s attempt at electrifying its transport system",
    paragraphOne: 'South Asia is gearing up to electrify its transport system as a pathway to the net-zero future. However, the unique set of challenges faced by each country means the adoption of electric vehicles in the region could still be far off the mark.',
    paragraphTwo: 'The transport sector contributes approximately 20 percent to 25 percent of total national CO2 emissions in various South Asian countries. Considering the growth trajectory of the region and the rapid urbanization, transport networks and vehicle ownership are expected to grow in the future. To balance the growing need for transportation and meet their targets to minimize greenhouse gas emissions as per the Paris Climate Agreement, South Asian countries have pledged to replace their presently internal combustible engine-dominated transport fleet—private and public –with electric vehicles. EVs typically produce lower greenhouse gases compared to gasoline or diesel vehicles. For instance, studies indicate that EVs can emit up to <a href="https://energy5.com/the-benefits-of-electric-cars-for-the-environment" >60 percent less</a> carbon dioxide than conventional vehicles. EVs are more energy-efficient than traditional vehicles, <a href="https://www.nrdc.org/bio/madhur-boloor/electric-vehicle-basics">converting about 60 percent of electrical energy from the grid to power at the wheels</a>, compared to just 17-21 percent for gasoline vehicles. Moreover, as all the countries in South Asia are net importers of petroleum products, switching to EVs could also lead to decreased import bills.',
    link: "https://sawtee.org/opinion-in-lead/south-asia%E2%80%99s-attempt-at-electrifying-its-transport-system.html"
  },
  report: null
}

export default function Email() {

  return (
    <Html>
      <Head>
        <Font
          fontFamily="Roboto"
          fallbackFontFamily="Verdana"
          webFont={{
            url: 'https://fonts.googleapis.com/css?family=Roboto|Verdana',
          }}
          fontWeight={400}
          fontStyle="normal"
        />

        <title>{Data.subtitle + " | " + Data.issue}</title>
        <style>

        </style>
      </Head>
      <Preview>{Data.subtitle + " | " + Data.issue}</Preview>
      <Body style={main}>
        <Header />

        <Container style={containerStyle}>

          <TopSection />

          <Hr style={hr} />

          {Data.opinion !== null ? (<OpinionSection opinion={Data.opinion} />) : null}

          {Data.report !== null ? <ReportSection report={Data.report} /> : null}

          {Data.news !== null ? <NewsSection news={Data.news} /> : null}

          {Data.events !== null ? <EventSection events={Data.events} /> : null
          }
          {Data.events !== null && Data.publications !== null && <Section style={publication_events_section}>
            <Hr style={{ margin: "30px 0", borderTop: "1px solid #00618173" }} />
          </Section>}

          {Data.publications !== null ? <PublicationSection publications={Data.publications} /> : null
          }

          <FooterSection />
        </Container>
      </Body>
    </Html >
  );
}


const Header = () => {
  return (
    <Section style={header}>
      <Heading as='h1' style={header_top}>
        {Data.title}
      </Heading>
      <Row style={header_bottom}>
        <Column style={{ width: '65%' }}>
          <span style={{ float: 'left' }}>
            {Data.subtitle}
          </span>
        </Column>
        <Column style={{ display: 'flex', justifyContent: 'end' }}>
          <span style={{ float: 'right' }}>{Data.issue}</span>
        </Column>
      </Row>
    </Section>
  )
}

const TopSection = () => {
  return (
    <Row style={{ padding: '20px 30px 0' }} >
      <Column style={{ float: 'left' }}>
        <Link href="https://sawtee.org/">
          <Img
            src="https://sawtee.org/images/logo_sawtee.jpg"
            width="120"
            height="auto"
            alt="SAWTEE"
          />
        </Link>
      </Column>
      <Column style={{ float: 'right' }}>
        <Section style={{ marginTop: '10px', width: 'max-content' }}>

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
          <Column style={{ paddingLeft: '5px' }}>
            <Link href='https://twitter.com/sawteenp' style={social_links}>
              <Img
                src="https://sawtee.org/images/twitter-logo-black.png"
                width="24"
                height="24"
                alt="Twitter"
              />
            </Link>
          </Column>
        </Section>

      </Column>
    </Row>
  )
}

const ReportSection = ({ report }) => {
  const { title, image, content, link } = report;
  return (
    <Section style={publication_events_section}>
      <Heading as='h2' style={section_heading}>Report</Heading>
      {title && <Heading as='h3' style={section_title}>{title}</Heading>}

      {image && <Img src={image} width="300px" height="auto" alt={title} style={{ margin: "20px auto" }} />}
      {content && <Text style={paragraph}>{content}</Text>}
      {link && <Button
        pX={10}
        pY={10}
        style={ButtonStyle}
        href={link}
      >
        Read More
      </Button>}
    </Section>
  )
}

const NewsSection = ({ news }) => {
  return (
    <Section style={section}>
      <Heading as='h2' style={section_heading}>News</Heading>
      {
        news.map((item: News) => {
          return (
            <Row key={item.row} style={{ paddingBottom: '50px', minHeight: "500px" }} >
              {item.posts.map(({ title, link, content, image }: Post, idx) => {
                return (
                  <Column key={title} style={{ float: idx === 0 ? 'left' : 'right', padding: ' 0 2%', width: '46%', }}>
                    <Link href={link}><Img style={Image_Style} width='265' height='180' alt={title} title={title} src={image ? image : `https://placehold.co/280x180/e4e4e4/006181?text=${title}`} /></Link>
                    <Heading style={news_title} as='h3'>{title}</Heading>
                    <Text style={paragraph}>{content}</Text>
                    <Link style={anchor} href={link}>Read More</Link>
                  </Column>
                )
              })}
            </Row>
          )
        })
      }
    </Section>
  )
}

const OpinionSection = ({ opinion }) => {
  const { title, paragraphOne, paragraphTwo, link } = opinion;
  return (
    <Section style={section} >
      <Heading as="h2" style={section_heading}>Opinion in Lead</Heading>
      <Heading as='h3' style={section_title}>{title}</Heading>

      {paragraphOne &&
        <Text style={paragraph} dangerouslySetInnerHTML={{ __html: paragraphOne }} />
      }
      {paragraphTwo &&
        <Text style={paragraph} dangerouslySetInnerHTML={{ __html: paragraphTwo }} />
      }
      <Section style={{ textAlign: 'center', marginTop: '20px' }}>
        <Button
          pX={10}
          pY={10}
          style={ButtonStyle}
          href={link}
        >
          Read More
        </Button>
      </Section>
    </Section>
  );
}

const EventSection = ({ events }) => {
  return (
    <Section style={publication_events_section}>

      {events.map((event: Event, i: number) => {
        return (
          <Section key={event.title} style={{ marginTop: i !== 0 ? "60px" : "0px" }}>
            <Heading as='h3' style={section_title}>{event.title}</Heading>
            <Text style={paragraph} dangerouslySetInnerHTML={{ __html: event.content }} />
            {event.link !== null &&
              <Section style={{ textAlign: 'center', marginTop: '20px' }}>
                <Button
                  pX={10}
                  pY={10}
                  style={ButtonStyle}
                  href={event.link}
                >
                  Apply here
                </Button>
              </Section>}
          </Section>
        )
      })}
    </Section>
  )
}

const PublicationSection = ({ publications }) => {
  const { title, link, image } = publications[0];
  return (
    <Section style={publication_events_section}>
      <Heading as='h2' style={section_heading}>Publications</Heading>
      <Heading as='h3' style={section_title}>{title}</Heading>
      <Row>
        {publications.map(({ content }) => { return <Text style={paragraph}>{content}</Text> }
        )}
        {/* <Column style={{ float: 'right', padding: ' 0 2%', width: '46%', paddingTop: '20px' }}>
          {image &&
            <Img src={image} width="250px" height="auto" alt={title} style={{ margin: "40px auto" }} title={title} />
          }
        </Column> */}
        <Section style={{ textAlign: 'center', marginTop: '20px' }}>
          <Button
            pX={10}
            pY={10}
            style={ButtonStyle}
            href={link}
          >
            Read More
          </Button>
        </Section>
      </Row>
    </Section>
  )
}

const FooterSection = () => {
  return (
    <Section style={{ padding: '10px 30px', maxWidth: '40em', textAlign: 'center' }}>
      <Row>
        <Heading as='h3' style={footer_headings}>Editor</Heading>
        <Text style={footer}>Dikshya Singh</Text>
      </Row>
      <Row style={{ margin: '10px auto' }}>
        <Column >
          <Heading as='h3' style={footer_headings}>Contact</Heading>
          <Text style={footer}>
            South Asia Watch on Trade, Economics and Environment (SAWTEE)<br />
            P.O. Box: 19366, Tukucha Marg, Kathmandu, Nepal<br />
            Tel: 977-1-4544438, 4524360 Fax: 977-1-4544570<br />
            Email: <Link href="mailto:sawtee@sawtee.org" style={anchor}>sawtee@sawtee.org</Link><br />
            Web: <Link href="https://www.sawtee.org" style={anchor}>www.sawtee.org</Link>
          </Text>
        </Column>
      </Row>

      <Row style={{ margin: '10px auto', maxWidth: '40em' }}>
        <Text
          style={{
            color: 'grey',
            fontSize: '12px',
            lineHeight: 'normal',
            padding: '0 0 20px',
            fontStyle: 'italic',
            maxWidth: '40em',
            margin: '0 auto'
          }}>
          You are receiving this email because you have visited our site or asked us about regular newsletter. To unsubscribe send email with subject "Unsubscribe" to <Link href="mailto:sawtee@sawtee.org" style={anchor}>SAWTEE</Link>.
          Check our other publications below
        </Text>
      </Row>

      <Row style={{ backgroundColor: '#006181', padding: '10px', marginBottom: '20px' }}>
        <Column style={{ textAlign: 'center' }}><Link style={publications_link} href="https://www.sawtee.org/publications/trade-insight/">Trade Insight </Link></Column>
        <Column style={{ color: '#fff' }}>|</Column>
        <Column style={{ textAlign: 'center' }}><Link style={publications_link} href="https://www.sawtee.org/publications/books/">Books</Link>
        </Column>
        <Column style={{ color: '#fff' }}>|</Column>
        <Column style={{ textAlign: 'center' }}><Link style={publications_link} href="https://www.sawtee.org/publications/working-paper/">Working Paper</Link>
        </Column>
        <Column style={{ color: '#fff' }}>|</Column>

        <Column style={{ textAlign: 'center' }}><Link style={publications_link} href="https://www.sawtee.org/newsletters/">Newsletter</Link></Column>
      </Row>
      <Row>
        <Column>
          <Img src="https://sawtee.org/images/logo_sawtee.jpg" width="120" height="auto" style={{ margin: '0 auto' }} />
        </Column>
        <Column>
          <Link
            role="button"
            style={{
              backgroundColor: '#006181',
              color: '#fff',
              fontFamily:
                '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Ubuntu,sans-serif',
              fontSize: '14px',
              textDecoration: 'none',
              display: 'block',
              textAlign: 'center',
              width: '100px',
              padding: '5px 10px',
              margin: '0 auto',
            }}
            px="16"
            py="8"
            href="https://www.sawtee.org/">Visit Website</Link>
        </Column>
        <Column>
          <Section style={{ marginTop: '10px', textAlign: 'center', width: 'max-content' }}>
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
            <Column style={{ paddingLeft: '5px' }}>
              <Link href='https://twitter.com/sawteenp' style={social_links}>
                <Img
                  src="https://sawtee.org/images/twitter-logo-black.png"
                  width="24"
                  height="24"
                  alt="Twitter"
                />
              </Link>
            </Column>
          </Section>
        </Column>
      </Row>
    </Section>
  )
}

const main = {
  backgroundColor: 'hsl(45, 38%, 94%)',
  fontFamily: '"Roboto", serif',
};

const publications_link = {
  color: '#fff',
  fontSize: '12px',
  fontWeight: 'normal',
}

const containerStyle = {
  backgroundColor: '#ffffff',
  margin: '0 auto',
  marginBottom: '64px',
  width: '100%',
  maxWidth: '40em',
};


const header = {
  backgroundColor: '#006181',
  margin: '0 auto',
}

const header_top = {
  margin: '0 auto',
  textAlign: textAlign,
  color: '#7fc4fd',
  fontSize: '24px',
  padding: '20px 0 10px',
}

const header_bottom = {
  padding: '20px',
  color: '#efefef',
  fontSize: '12px',
  fontWeight: 500,
}

const social_links = {
  paddingRight: '5px',
}

const hr = {
  borderColor: '#e6ebf1',
};

const section_heading = {
  color: "#262626",
  fontSize: '24px',
  fontWeight: '600',
  paddingBottom: '20px',
  margin: '0',
}

const section_title = {
  fontSize: '15px',
  color: '#006181',
  fontWeight: 'bold',
  margin: '10px 0',
}

const paragraph = {
  color: '#262626',
  fontSize: '13px',
  fontFamily: '"Verdana", serif',
  lineHeight: '1.5',
  textAlign: 'left',
  wordBreak: 'break-word',
};

const anchor = {
  color: '#1f1f1f',
  fontFamily: "monospace",
  fontWeight: 'bold',
  textDecoration: 'underline',
  textUnderlineOffset: '3px',
  marginBottom: '20px'
};

const publication_events_section = {
  backgroundColor: '#E8F5F2',
  padding: '20px 30px',
}

const news_title = {
  fontSize: '14px',
  color: '#006181',
  fontWeight: 'bold',
  padding: '10px 0',
  lineHeight: '1.5',
  margin: '0',
}

const footer = {
  color: '#262626',
  fontSize: '12px',
  lineHeight: '16px',
  padding: '0', margin: '0',
  textAlign: 'center',
};

const footer_headings = {
  color: '#262626',
  fontSize: '18px',
  fontFamily: 'monospace',
  padding: '0', paddingBottom: '5px', margin: '0',
  textAlign: 'center',
}

const ButtonStyle = {
  backgroundColor: '#006181',
  color: '#fff',
  padding: "15px 20px",
  fontSize: '16px',
  fontWeight: 'bold',
  borderRadius: '5px',
  textDecoration: 'none',
  textTransform: 'uppercase',
  textAlign: textAlign,
  flexGrow: '1',
  width: '98% !important',
}

const section = {
  padding: '20px 30px',
}

const Image_Style = {
  display: "block",
  width: "100%",
  objectFit: "cover",
  border: "1px solid grey",
}

const footer_section = {
  padding: '0 48px 20px ',
  textAlign: 'center',
}


