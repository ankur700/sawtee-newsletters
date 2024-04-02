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
  issue: 'Volume 21, Issue 02, February 2024',
  news: [
    {
      row: 1,
      posts: [{
        title: "Climate-induced disruptions could cost Bangladesh $700bn in apparel exports by 2050",
        content: "Bangladesh could lose a staggering US$711 billion in annual apparel exports by 2050 if it does not adopt a climate-adaptive approach due to high heat and floods, according to a new study.",
        link: "https://www.thedailystar.net/business/economy/news/climate-induced-disruptions-could-cost-bangladesh-700b-apparel-exports-2050-3554856",
        image: "https://tds-images.thedailystar.net/sites/default/files/styles/big_202/public/images/2024/02/28/untitled-1_7.jpg"
      },
      {
        title: "India slowly taking export market share from China, study shows",
        content: "India is chipping away at China’s dominance in electronics exports in some key markets as manufacturers diversify supply chains away from the world’s factory to other parts of Asia.",
        link: "https://economictimes.indiatimes.com/news/economy/foreign-trade/india-slowly-taking-export-market-share-from-china-study-shows/articleshow/108071104.cms?utm_source=contentofinterest&utm_medium=text&utm_campaign=cppst",
        image: "https://img.etimg.com/thumb/msid-108071439,width-300,height-225,imgsize-449400,resizemode-75/cms-2.jpg"
      },]
    },
    {
      row: 2,
      posts: [{
        title: "Pakistan eases rules for exporters",
        content: "Pakistan’s central bank has softened rules for exporters by allowing them to “freely” utilise the proceeds kept abroad in their Special Foreign Currency Accounts (ESFCAs) without prior approval, a move aimed at boosting export of goods and services.",
        link: "https://tribune.com.pk/story/2457508/sbp-eases-rules-for-exporters",
        image: "https://i.tribune.com.pk/media/images/21708806295-0/21708806295-0.jpg"
      },
      {
        title: "India allows export of onions",
        content: "India has allowed exports of onions on government-to-government basis to some countries, on recommendation of the Ministry of External Affairs. India had banned shipments of the kitchen staple in December 2023 till March 2024 due to rising prices and potential shortages.",
        link: "https://economictimes.indiatimes.com/news/economy/foreign-trade/india-allows-export-of-onions-to-select-nations/articleshow/107802129.cms?utm_source=contentofinterest&utm_medium=text&utm_campaign=cppst",
        image: "https://img.etimg.com/thumb/msid-107802139,width-300,height-225,imgsize-225486,resizemode-75/onion-export-ban-may-be-lifted-as-prices-drop-supplies-rise.jpg"
      },]
    },
    {
      row: 3,
      posts: [
        {
          title: "Chinese lighter smuggling from Nepal thrives after Indian ban",
          content: "Smuggling of cigarette lighters to India has thrived after the southern neighbour moved to ban single-use plastic products costing below IRs20. Nepali traders would import these lighters mainly from China and re-export to India.",
          link: "https://kathmandupost.com/money/2024/02/21/chinese-lighter-smuggling-thrives-after-indian-ban",
          image: "https://assets-api.kathmandupost.com/thumb.php?src=https://assets-cdn.kathmandupost.com/uploads/source/news/2024/third-party/Screenshot20240221071708-1708479420.jpg&w=900&height=601"
        },
        {
          title: "India working to develop HSN codes for certain varieties of rice",
          content: "India is working to develop new tariff codes, called Harmonised System of Nomenclature or HSN codes in trade parlance, for certain rice varieties to enable exports of those which are traditionally not consumed in India.",
          link: "https://economictimes.indiatimes.com/news/economy/foreign-trade/india-working-to-develop-hsn-codes-for-certain-varieties-of-rice/articleshow/107665311.cms?utm_source=contentofinterest&utm_medium=text&utm_campaign=cppst",
          image: "https://img.etimg.com/thumb/msid-107665353,width-300,height-225,imgsize-130352,resizemode-75/india-rice-exports.jpg"
        },]
    },
    {
      row: 4,
      posts: [
        {
          title: "India launches UPI, Rupay Card services in Sri Lanka and Mauritius",
          content: "India has successfully launched its Unified Payment Interface (UPI) services in Sri Lanka and Mauritius, benefiting travelers and enhancing financial integration.",
          link: "https://economictimes.indiatimes.com/nri/invest/india-launches-upi-rupay-card-services-in-sri-lanka-and-mauritius/articleshow/107621729.cms?utm_source=contentofinterest&utm_medium=text&utm_campaign=cppst",
          image: "https://img.etimg.com/thumb/msid-107621793,width-300,height-225,imgsize-1499150,resizemode-75/digital-payment-upi.jpg"
        },
        {
          title: "Nepal earns Rs 12.40 billion from electricity exports",
          content: "Nepal sold electricity worth Rs 12.40 billion to India during mid-July 2023 and mid-January 2024, which was 47.97 percent more than the figure in the same period last year.",
          link: "https://myrepublica.nagariknetwork.com/news/nepal-earns-rs-12-40-billion-from-electricity-exports-in-peak-production-season-this-fy/",
          image: "https://myrepublica.nagariknetwork.com/uploads/media/electricity_20230922181029.jpg"
        }]
    },
  ],
  events: null,
  publications: [{
    title: "Nepal’s public debt: concerns and drivers",
    content: "Soaring public debt, especially in the wake of the COVID-19 crisis, has been in the center of public debate once again. Historical evidence suggests that unsustainable levels of public debt could lead to a severe economic crisis and if left to fester, long-term economic ruin. The size of Nepal’s public debt has been benign for much of its recent history. However, in the last few years, Nepal’s public debt has risen so rapidly that it has started to generate some concern. Against this background, South Asia Watch on Trade, Economics and Environment (SAWTEE) undertook a study to assess the public debt situation of Nepal, and in particular, to identify the major drivers of the rapidly increasing public debt levels. This issue brief by Mr. Kshitiz Dahal, Senior Research Officer of SAWTEE presents the major findings of the study.",
    link: "https://sawtee.org/publications/Issue_Paper_12.pdf",
    image: "https://www.sawtee.org/images/Issue_brief_12_cover_image_small.jpg"
  }],
  opinion: {
    title: "Central banks and financial regulators in mitigating climate-related risks to financial institutions and systems",
    paragraphOne: 'Climate change is no longer a distant threat but a reality. The United Nations’ declaration that we have transitioned from the era of global warming to that of global boiling underscores the urgency of the situation. As the devastating effects of climate change become more evident, <a href="https://www.climate-transparency.org/wp-content/uploads/2021/08/ODI_role-of-central-banks-in-tackling-climate-change.pdf." target="_blank">the financial sector is vulnerable to major risks to the financial system.</a>',
    paragraphTwo: 'For instance, extreme weather events such as hurricanes, floods, wildfires, and storms can lead to damage to properties and infrastructure. Financial institutions may face losses due to the decreased value of collateral assets and defaults on mortgages and loans for properties in affected areas. Additionally, insurers may have to grapple with higher insurance claims and rising payouts due to more frequent and severe climate-related events.',
    link: "https://sawtee.org/opinion-in-lead/central-banks-and-financial-regulators-in-mitigating-climate-related-risks-to-financial-institutions-and-systems.html"
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
        <Column style={{ float: 'left', padding: ' 0 2%', width: '46%' }}>
          {publications.map(({ content }) => { return <Text style={paragraph}>{content}</Text> }
          )}
        </Column>
        <Column style={{ float: 'right', padding: ' 0 2%', width: '46%', paddingTop: '20px' }}>
          {image &&
            <Img src={image} width="250px" height="auto" alt={title} style={{ margin: "40px auto" }} title={title} />
          }
        </Column>
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


