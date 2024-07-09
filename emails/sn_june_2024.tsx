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
  issue: 'Volume 21, Issue 06, June 2024',
  news: [
    {
      row: 1,
      posts: [{
        title: "India imposes anti-dumping duties on three Chinese products",
        content: "India imposed anti-dumping duties on three Chinese products including hydraulic rock breaker with an aim to protect domestic players from cheap imports.",
        link: "https://economictimes.indiatimes.com/news/economy/foreign-trade/india-imposes-anti-dumping-duties-on-three-chinese-products/articleshow/111321924.cms?utm_source=contentofinterest&utm_medium=text&utm_campaign=cppst",
        image: "https://img.etimg.com/thumb/msid-111321933,width-300,height-225,imgsize-42774,resizemode-75/china-flag.jpg"
      },
      {
        title: "India to enter into bilateral Rupee swap agreements with SAARC",
        content: "With the need to fund short-term foreign exchange liquidity requirements, the RBI released the revised framework on currency swap arrangements with SAARC countries.",
        link: "https://economictimes.indiatimes.com/news/economy/policy/india-to-enter-into-bilateral-rupee-swap-agreements-with-saarc-countries-rbi/articleshow/111315634.cms?utm_source=contentofinterest&utm_medium=text&utm_campaign=cppst",
        image: "https://img.etimg.com/thumb/msid-111315495,width-300,height-225,imgsize-90976,resizemode-75/reserve-bank-of-india-rbi.jpg"
      },]
    },
    {
      row: 2,
      posts: [{
        title: "AI-powered legal research platform transforms Sri Lanka’s legal industry",
        content: "In a major transformation shift in the Sri Lankan legal industry, an artificial intelligence (AI)-powered legal research platform has been introduced by RedBlocks AI (Pvt) Ltd.",
        link: "https://www.dailymirror.lk/business/First-Artificial-Intelligence-powered-legal-research-platform-transforms-Sri-Lankas-legal-industry/215-285629",
        image: "https://bmkltsly13vb.compat.objectstorage.ap-singapore-1.oraclecloud.com/cdn.sg.dailymirror.lk/assets/uploads/image_79d8c67edb.jpg"
      },
      {
        title: "Fossil fuel use, emissions hit record highs in 2023, industry report says",
        content: "Global fossil fuel consumption and greenhouse gas emissions hit record highs last year, even as renewables generated more energy than ever before, an industry report has found.",
        link: "https://www.aljazeera.com/economy/2024/6/20/fossil-fuel-use-emissions-hit-record-highs-in-2023-industry-report-says",
        image: "https://www.aljazeera.com/wp-content/uploads/2024/06/AFP__20240430__2150754047__v1__HighRes__TheEpaToRequireCoalPoweredPlantsToCapture90P-1718843544.jpg?resize=770%2C513&quality=80"
      },]
    },
    {
      row: 3,
      posts: [
        {
          title: "Britain offers Nepal special trading preferences",
          content: "The British government has assured Nepal of trade facilitation through its Developing Countries Trading Schemes as the nation prepares to graduate from a least developed country (LDC) by 2026.",
          link: "https://kathmandupost.com/money/2024/06/14/britain-offers-nepal-special-trading-preferences",
          image: "https://assets-api.kathmandupost.com/thumb.php?src=https://assets-cdn.kathmandupost.com/uploads/source/news/2024/money/Suntala-1718332579.jpg&w=900&height=601"
        },
        {
          title: "SL’s path to debt sustainability remains knife-edged: IMF",
          content: "The International Monetary Fund (IMF) said Sri Lanka’s economy is still vulnerable and the path to debt sustainability remains knife-edged hence the country need to sustain the reform momentum.",
          link: "https://www.ft.lk/top-story/SL-s-path-to-debt-sustainability-remains-knife-edged-IMF/26-763058",
          image: "https://bmkltsly13vb.compat.objectstorage.ap-mumbai-1.oraclecloud.com/cdn.ft.lk/assets/uploads/image_afc3909dff.jpg"
        },]
    },
    {
      row: 4,
      posts: [
        {
          title: "Bangladesh passes proposal to import 40MW electricity from Nepal",
          content: "A meeting of the ‘Cabinet Committee on Government Purchase’ in Bangladesh on Tuesday approved a proposal to import 40 megawatts of electricity from Nepal.",
          link: "https://kathmandupost.com/money/2024/06/12/bangladesh-s-cabinet-committee-approves-proposal-to-import-40mw-electricity-from-nepal",
          image: "https://assets-api.kathmandupost.com/thumb.php?src=https://assets-cdn.kathmandupost.com/uploads/source/news/2024/third-party/thumb-1718186168.jpg&w=900&height=601"
        },
        {
          title: "First cherry shipment from Pakistan sent to China",
          content: 'Pakistan exported its first batch of fresh cherries to China using a reefer container and projected a total quantity of 260 tonnes by the end of this month.',
          link: "https://www.dawn.com/news/1838279/first-cherry-shipment-sent-to-china",
          image: "https://i.dawn.com/large/2024/06/070809253e8097f.png?r=080945"
        }]
    },
  ],
  events: null,
  publications: null,
  opinion: {
    title: "Unveiling opportunities and addressing challenges of tourism in Nepal",
    paragraphOne: 'Tourism has remained a vital part of the global economy. While tourism can generate enormous benefits to least developed countries like Nepal, setting up a thriving tourism industry is a challenging task. In 2023, Nepal’s <a href="https://kathmandupost.com/money/2024/06/10/nepal-s-tourism-paid-for-1-19-million-jobs-in-2023#:~:text=The%20report%20forecasts%20that%20Nepal,at%206.6%20percent%20to%20Rs358." target="_blank">sector generated</a> US$2.5 billion in revenue and supported 1.19 million jobs directly and indirectly, and the forecast for 2024 is 1.22 million jobs (15.2 percent of total employment).',
    paragraphTwo: "Nepal holds tremendous potential to reap rich dividends from the worldwide flourishing of tourism. Nepal’s geography allows tourists access to the Himalayas and the presence of significant religious and cultural heritage adds to Nepal’s allure. Similarly, Nepal could reap spillover benefits from more famous neighbours such as China and India. China and India are ranked 8th and 39th, respectively, in terms of popular tourist destinations in the Travel and Tourism Development Index 2024 by the World Economic Forum. In contrast, Nepal holds a much lower rank of 105, highlighting the enormous potential of increased connectivity to these countries.",
    link: "https://sawtee.org/opinion-in-lead/unveiling-opportunities-and-addressing-challenges-of-tourism-in-nepal.html"
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
      <Heading as='h2' style={section_heading}>Events</Heading>
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
                  Read More
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


