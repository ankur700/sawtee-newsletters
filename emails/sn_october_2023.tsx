import * as React from 'react';
import { Button, Container, Head, Hr, Html, Img, Link, Preview, Section, Column, Heading, Text, Font, Body, Row } from '@react-email/components';

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
  issue: 'Volume 20, Issue 10, October 2023',
  news: [
    {
      row: 1,
      posts: [{
        title: "Pakistan inks deal with China for port development",
        content: "Pakistan and China have signed a new advisory deal for faster development of Gwadar Port aimed at giving a push to the strategically important pillar of the China-Pakistan Economic Corridor (CPEC).",
        link: "https://tribune.com.pk/story/2441809/deal-inked-for-port-development",
        image: "https://i.tribune.com.pk/media/images/66919-gwadarafppicturejpg-1526714138/66919-gwadarafppicturejpg-1526714138.jpg"
      },
      {
        title: "India extends curbs on sugar exports",
        content: "The government has extended restrictions on export of all varieties of sugar - raw, white, refined and organic - beyond October 31 owing to domestic production concerns on weak-monsoon worries.",
        link: "https://economictimes.indiatimes.com/news/economy/agriculture/curbs-extended-on-exports-of-sugar-eased-for-rice/articleshow/104535832.cms?utm_source=contentofinterest&utm_medium=text&utm_campaign=cppst",
        image: "https://img.etimg.com/thumb/msid-104535861,width-300,height-225,imgsize-130352,,resizemode-75/malaysia-to-discuss-rice-export-curbs-with-india.jpg"
      },]
    },
    {
      row: 2,
      posts: [{
        title: "India allows export of 95,000 tonnes of non-basmati rice to Nepal",
        content: "The Indian government has permitted the export of 95,000 tonnes of non-basmati white rice to Nepal, partially relaxing the export curbs imposed in July.",
        link: "https://kathmandupost.com/money/2023/10/18/india-allows-export-of-95-000-tonnes-of-non-basmati-rice-to-nepal",
        image: "https://assets-api.kathmandupost.com/thumb.php?src=https://assets-cdn.kathmandupost.com/uploads/source/news/2023/money/paddyweb-1697637497.jpg&w=900&height=601"
      },
      {
        title: "Bangladesh’s  hard loans double in three years",
        content: "Foreign loans are rapidly becoming costlier for Bangladesh with an increasing reliance on higher-cost borrowing, also known as hard loans, tied to market-based or floating interest rates.",
        link: "https://www.tbsnews.net/economy/debt-burden-climbs-hard-loans-double-three-years-721866",
        image: "https://www.tbsnews.net/sites/default/files/styles/infograph/public/images/2023/10/18/p1_market-based-foreign.jpg"
      },]
    },
    {
      row: 3,
      posts: [
        {
          title: "China opens doors to 15 types of medicinal herbs from Nepal",
          content: "China has opened the door for the import of over a dozen medicinal herbs from Nepal for producing medicine by signing the Protocol of Phytosanitary Requirements for the export.",
          link: "https://kathmandupost.com/national/2023/10/04/china-opens-doors-to-15-types-of-medicinal-herbs-from-nepa",
          image: "https://assets-api.kathmandupost.com/thumb.php?src=https://assets-cdn.kathmandupost.com/uploads/source/news/2023/third-party/thumb2-1696385371.jpg&w=900&height=601"
        },
        {
          title: "Pakistan tightens transit trade import regime",
          content: "Pakistan banned the import of goods, prone to smuggling to Afghanistan through its territory, as it made the import regime stringent because of the misuse of the Afghan Transit Trade Agreement (ATTA).",
          link: "https://tribune.com.pk/story/2439142/govt-tightens-transit-trade-import-regime",
          image: "https://i.tribune.com.pk/media/images/trade1685734170-0/trade1685734170-0.jpg"
        },]
    },
    {
      row: 4,
      posts: [
        {
          title: "GSP+ status extended for four years",
          content: "The European Parliament on unani­mously voted to extend the current generalised system of preferences (GSP) for another four years until 2027 for developing countries, including Pakistan.",
          link: "https://www.dawn.com/news/1779621/gsp-status-extended-for-four-years",
          image: "https://arynews.tv/wp-content/uploads/2023/10/GSP-696x342.jpg"
        },
        {
          title: "India, Bangladesh discuss preparations to start talks for free trade agreement",
          content: "India and Bangladesh have discussed preparations to start talks for a free trade agreement between the two countries to promote economic ties.",
          link: "https://economictimes.indiatimes.com/news/economy/foreign-trade/india-bangladesh-discuss-preparations-to-start-talks-for-free-trade-agreement/articleshow/104086106.cms?utm_source=contentofinterest&utm_medium=text&utm_campaign=cppst",
          image: "https://img.etimg.com/thumb/msid-104086123,width-300,height-225,imgsize-14322,,resizemode-75/india-bangladesh-trade.jpg"
        }]
    },

  ],
  events: [{
    title: "SAWTEE's fellowship for economic journalists",
    content: "As a part of its capacity-building programmes, SAWTEE launched “Media Fellowship for Economic Journalists”, offering reporting fellowships to Nepali journalists covering trade and economic matters. Five media professionals were chosen to delve into topics including Nepal’s international trade issues, balance of payments, Nepal’s graduation from the least developed country (LDC) category, and trade through a gender lens.",
    link: "https://sawtee.org/media-fellows.php "
  },
  ],
  publications: null,
  opinion: {
    title: "Nepal’s public debt: concerns and drivers",
    paragraphOne: "Soaring public debt, especially after the COVID-19 crisis, has been in the crosshairs of the public debate once again. While Nepal’s public debt has been benign for much of its recent history, its swift rise is generating some concern. Nepal’s public debt accumulation stood at NPR 2013.3 billion, or 41.5 percent of GDP, at the end of the fiscal year 2021/22—external debt represented 21.1 percent of GDP and internal debt represented 20.4 percent of GDP. The public debt accumulation over the last few years has, however, increased at an alarming rate—the public debt stock increased from 25.7 percent of GDP in FY 2014/15 to 41.5 percent of GDP in 2021/22.",
    paragraphTwo: "",
    link: "https://sawtee.org/opinion-in-lead/nepal’s-public-debt-concerns-and-drivers.html"
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

        <Container style={container}>
          <TopSection />
          <Hr style={{ margin: '0' }} />
          {Data.opinion !== null ? (<OpinionSection opinion={Data.opinion} />) : null}
          {Data.report !== null ? <ReportSection report={Data.report} /> : null}
          {Data.news !== null ? <NewsSection news={Data.news} /> : null}
          <Hr style={{ margin: "30px 0 0", borderTop: "1px solid #00618173" }} />
          {Data.events !== null ? <EventSection events={Data.events} /> : null}
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
      <Section style={header_bottom}>
        <Row>
          <Column >
            <Text style={{ margin: '0' }} >
              {Data.subtitle}
            </Text>
          </Column>
          <Column style={{ display: 'flex', justifyContent: 'end' }}>
            <Text style={{ float: 'right', margin: '0' }}>{Data.issue}</Text>
          </Column>
        </Row>
      </Section>
    </Section>
  )
}

const TopSection = () => {
  return (


    <Link href="https://sawtee.org/" style={Header_Logo}>
          <Img
            src="https://sawtee.org/images/logo_sawtee.jpg"
        width="180px"
        height="100%"
        alt="SAWTEE LOGO"
        style={{ padding: '10px 20px', objectFit: 'cover' }}
      />
    </Link>

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
      <Row>
        <Heading as='h2' style={section_heading}>News</Heading>
      </Row>
      {
        news ? news.map((item: News) => {
          return (
            <Section key={item.row} style={{ display: 'flex', justifyContent: 'space-between', gap: '20px', paddingBottom: '50px', minHeight: "280px", height: 'auto' }} >
              <Row>
                {item.posts && item.posts.map(({ title, link, content, image }: Post) => {
                  return (
                    <Column key={title} style={{ float: 'left', padding: ' 0 2%', width: '46%', }}>
                      <Link href={link}><Img style={Image_Style} width='265' height='180' alt={title} title={title} src={image ? image : `https://placehold.co/280x180/e4e4e4/006181?text=${title}`} /></Link>
                      < Heading style={news_title} as='h3'>{title}</Heading>
                      <Text style={paragraph}>{content}</Text>
                      <Link style={anchor} href={link}>Read More</Link>
                    </Column>
                  )
                })}
              </Row>
            </Section>
          )
        }) : null
      }
    </Section>
  )
}

const OpinionSection = ({ opinion }) => {
  const { title, paragraphOne, paragraphTwo, link } = opinion;
  return (
    <Section style={{ display: 'block', padding: '20px 30px' }} >
      <Row>
        <Column>
          <Heading as="h2" style={section_heading}>Opinion in Lead</Heading>
          <Heading as='h3' style={section_title}>{title}</Heading>
          {paragraphOne && <Text style={paragraph}>
            {paragraphOne}
          </Text>}
          {paragraphTwo && <Text style={paragraph}>
            {paragraphTwo}
          </Text>}
        </Column>
      </Row>
      <Row>
        <Column>
          <Button
            pX={10}
            pY={10}
            style={ButtonStyle}
            href={link}
          >
            Read More
          </Button>
        </Column>
      </Row>
    </Section>
  );
}

const EventSection = ({ events }) => (

  events.map((event, i) => {
    return (
      <Section style={{ display: 'block', backgroundColor: '#E8F5F2', padding: '20px 30px', }}>
        <Row key={event.title} >
          <Column style={{ paddingTop: i !== 0 ? "50px" : "0px" }}>
            <Heading as='h3' style={section_title}>{event.title}</Heading>
            <Text style={paragraph} dangerouslySetInnerHTML={{ __html: event.content }} />
          </Column>
        </Row>
        <Row>
          <Column>
            <Button
              pX={10}
              pY={10}
              style={ButtonStyle}
              href={event.link}
            >
              Read More
            </Button>
          </Column>
        </Row>
      </Section>
    )
  })

)

const PublicationSection = ({ publications }) => {
  return (
    <Section style={publication_events_section}>
      <Heading as='h2' style={section_heading}>Publications</Heading>
      {publications.map(({ title, content, link, image }) => {
        return (
          <Section key={title} style={{ paddingBottom: "50px" }}>
            <Heading as='h3' style={section_title}>{title}</Heading>
            {image &&
              <Container style={{ margin: "20px 0 40px 0" }} >
                <Link href={link}> <Img src={image} width="250px" height="auto" alt={title} style={{ margin: "0 auto" }} title={title} /></Link>
              </Container>
            }

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
  )
}

const FooterSection = () => {
  return (
    <Section style={{ padding: '10px 30px' }}>
      <Section style={{ padding: '10px 0px', textAlign: 'center' }}>
        <Row>
          <Column>
            <Heading as='h3' style={footer_headings}>Editor</Heading>
            <Text style={footer}>Dikshya Singh</Text>
          </Column>
        </Row>

      </Section>
      <Section style={{ padding: '10px 0px', textAlign: 'center' }}>
        <Row >
          <Column style={{ marginBottom: '10px' }}>
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
      </Section>

      <Section style={{ padding: '10px 0px', textAlign: 'center' }}>
        <Row>
          <Column style={{ marginBottom: '10px' }}>
            <Text style={{
              color: 'grey',
              fontFamily:
                '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Ubuntu,sans-serif',
              fontSize: '12px',
              lineHeight: 'normal',
              padding: '0 0 20px', margin: '0'
            }}>
              <em>You are receiving this email because you have visited our site or asked us about regular newsletter. To unsubscribe send email with subject "Unsubscribe" to <Link href="mailto:sawtee@sawtee.org" style={anchor}>SAWTEE</Link>.
                Check our other publications below</em>
            </Text>
          </Column>
        </Row>
      </Section>

      <Section style={{ backgroundColor: '#006181', padding: '10px', marginBottom: '10px', textAlign: 'center' }}>
        <Row>
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
      </Section>
      <Section>
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
          </Column>
        </Row>
      </Section>
    </Section>
  )
}

const Header_Logo = {
  display: 'flex', justifyContent: 'start',
}

const Image_Style = {
  display: "block",
  width: "100%",
  objectFit: "cover",
  border: "1px solid grey",
}

const section = {
  padding: '20px 30px',
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

const container = {
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
