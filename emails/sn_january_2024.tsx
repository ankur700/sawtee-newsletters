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
  issue: 'Volume 21, Issue 01, January 2024',
  news: [
    {
      row: 1,
      posts: [{
        title: "Bangladesh lowers cash incentive for exporters to prepare for post-LDC era",
        content: "Bangladesh has cut the export subsidy for almost all sectors to reduce the pressures on Bangladesh's coffers and bring down the rates gradually since the country can't provide such subsidies after LDC graduation.",
        link: "https://www.thedailystar.net/business/news/bangladesh-lowers-cash-incentive-exporters-prepare-post-ldc-era-3532381",
        image: "https://tds-images.thedailystar.net/sites/default/files/styles/big_202/public/images/2024/01/30/bangladesh_lowers_.jpeg"
      },
      {
        title: "India rice rates spring to record highs on dwindling supplies, firm demand",
        content: "Rates of parboiled rice exported from top hub India advanced to record highs this week on limited supplies and steady demand from Asian and African buyers, while prices eased in Vietnam and Thailand.",
        link: "https://economictimes.indiatimes.com/news/economy/foreign-trade/india-rice-rates-spring-to-record-highs-on-dwindling-supplies-firm-demand/articleshow/107158390.cms?utm_source=contentofinterest&utm_medium=text&utm_campaign=cppst",
        image: "https://img.etimg.com/thumb/msid-107158416,width-300,height-225,imgsize-1829176,resizemode-75/parboiled-rice.jpg"
      },]
    },
    {
      row: 2,
      posts: [{
        title: "China says rivals trying to sabotage its ties with Nepal",
        content: "Visiting Chinese leaders have publicly claimed that certain countries are trying to destabilise the good relations between Nepal and China, while some elements are also defaming the Belt and Road Initiative by calling it a ‘debt trap’.",
        link: "https://kathmandupost.com/national/2024/01/29/china-says-rivals-trying-to-sabotage-its-ties-with-nepal",
        image: "https://assets-api.kathmandupost.com/thumb.php?src=https://assets-cdn.kathmandupost.com/uploads/source/news/2024/news/Screenshot20240129065022-1706490365.jpg&w=900&height=601"
      },
      {
        title: "Ready to upgrade CPEC, says Beijing",
        content: "China has said it is ready to work with Pakistan to upgrade the China-Pakistan Economic Corridor (CPEC) and accelerate the building of an even closer China-Pakistan community with a shared future in the new era.",
        link: "https://www.dawn.com/news/1808408/ready-to-upgrade-cpec-says-beijing",
        image: ""
      },]
    },
    {
      row: 3,
      posts: [
        {
          title: "Nepal ships first batch of exports under transit deals with China",
          content: "Nepal started the first batch of exports under transit deals with China, five months after the South Asian country shipped its first batch of imported goods via the northern neighbor.",
          link: "https://english.news.cn/20240125/c85262674bcf4fbc8051b2d5d9a0c074/c.html",
          image: "https://english.news.cn/20240125/c85262674bcf4fbc8051b2d5d9a0c074/yEKEgn6SgsOI3QFj.jpg"
        },
        {
          title: "India to become main driver of incremental oil use by 2030",
          content: "India's petroleum consumption climbed to a new record last year and the country is on course to overtake China as the primary driver of incremental oil consumption before 2030.",
          link: "https://www.moneycontrol.com/news/business/economy/india-to-become-main-driver-of-incremental-oil-use-by-2030-12113251.html",
          image: "https://images.moneycontrol.com/static-mcnews/2023/09/image-2-770x433.jpg?impolicy=website&width=770&height=431"
        },]
    },
    {
      row: 4,
      posts: [
        {
          title: "Nepal looks to Pakistani, Russian, Chinese markets to diversify its tea trade",
          content: "Nepal has resumed the export of crush, tear, and curl (CTC) tea to Pakistan after years, according to Nepali traders, who are now eying former Asian buyers to diversify the market currently limited to India.",
          link: "https://kathmandupost.com/money/2024/01/17/nepal-looks-to-pakistani-russian-and-chinese-markets-to-diversify-its-tea-trade",
          image: "https://assets-api.kathmandupost.com/thumb.php?src=https://assets-cdn.kathmandupost.com/uploads/source/news/2024/third-party/thumb231704245902-1705454950.jpg&w=900&height=601"
        },
        {
          title: "India to relax commodity export restrictions for Bangladesh, Modi assures Hasina",
          content: "New Delhi will relax export restrictions for Dhaka to stabilise the market for key staples such as sugar, onions, rice, and wheat, Indian Prime Minister Narendra Modi has assured his Bangladesh counterpart Sheikh Hasina.",
          link: "https://www.tbsnews.net/economy/india-relax-commodity-export-restrictions-bangladesh-modi-assures-hasina-775006",
          image: "https://www.tbsnews.net/sites/default/files/styles/big_3/public/images/2021/09/21/benapole_port_traffic.jpg"
        }]
    },
    {
      row: 5,
      posts: [
        {
          title: "India will impose non-tariff barriers on reciprocal basis",
          content: "India will impose non-tariff barriers on a reciprocal basis, commerce and industry minister Piyush Goyal and asked industry to get out of the subsidy mindset.",
          link: "https://economictimes.indiatimes.com/news/economy/foreign-trade/india-to-impose-non-tariff-barriers-on-reciprocal-basis-piyush-goyal/articleshow/106903870.cms?utm_source=contentofinterest&utm_medium=text&utm_campaign=cppst",
          image: "https://img.etimg.com/thumb/msid-106903964,width-300,height-225,imgsize-47952,resizemode-75/piyush-goyal.jpg"
        },
        {
          title: "Nepal-India ink long-term power trade agreement",
          content: "Nepal and India have signed a long-term Power Trade Agreement to ensure a market for the electricity produced in the hydropower-rich Himalayan nation.",
          link: "https://myrepublica.nagariknetwork.com/news/nepal-india-ink-long-term-power-trade-agreement-facilitating-export-of-10-000-mw-of-nepal-s-electricity-to-india/",
          image: "https://myrepublica.nagariknetwork.com/uploads/media/1704356954_nepalbharatmeeting-1200x560_20240104143005.jpg"
        },
      ]
    },

  ],
  events: [{
    title: "Workshop for journalists in Karnali Province",
    content: "SAWTEE, in collaboration with the Federation of Nepali Journalists (FNJ-Surkhet), conducted a media workshop for journalists in Surkhet, Karnali Province. The main objective of the programme was to enhance the capacity of media professionals in reporting on topics such as balance of payments, Nepal-India trade, and Nepal-Bangladesh trade.",
    link: "https://sawtee.org/featured-events/workshop-for-journalists-in-karnali-province.html"
  },
  {
    title: "Dialogue between information technology stakeholders and the High-Level Committee for Tax System Reform",
    content: "South Asia Watch on Trade Economics and Environment (SAWTEE) organized a discussion between the High-Level Committee for Tax System Reform and businesses and experts from Nepal’s information technology (IT) industry on 3 January 2024 at SAWTEE office. The committee, chaired by former minister and finance secretary Vidyadhar Mallik, received inputs on opportunities, problems, and changes essential for accelerating the growth of Nepal’s IT sector.",
    link: "https://sawtee.org/in-focus/dialogue-between-information-technology-stakeholders-and-the-high-level-committee-for-tax-system-reform.html"
  }],
  publications: null,
  opinion: {
    title: "Tariff burdens Nepal’s merchandise exports to Bangladesh",
    paragraphOne: "Despite enormous prospects owing to proximity and close bilateral ties, including a shared free trade agreement, the available evidence shows that Nepal’s export potential to Bangladesh remains severely underutilized.",
    paragraphTwo: "Economic relations between the two nations have remained under par over the years—for instance, the volume of bilateral trade is relatively low considering the Kakarvitta (Nepal)-Panitanki (India)-Fulbari (India)-Banglabandha (Bangladesh) road corridor that hosts almost all of Nepal-Bangladesh trade is a mere 54 km stretch. Especially, the exports of Nepal to Bangladesh have been consistently decreasing, which is largely dominated by a single product (red lentils), and consists of very few commodities. ",
    link: "https://sawtee.org/opinion-in-lead/tariff-burdens-nepal%e2%80%99s-merchandise-exports-to-bangladesh.html"
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

      <Text style={paragraph}>
        {paragraphOne}
      </Text>
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


