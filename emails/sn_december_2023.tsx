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
  issue: 'Volume 20, Issue 12, December 2023',
  news: [
    {
      row: 1,
      posts: [{
        title: "B’desh Bay Terminal eyes $11.5b foreign investment in 2024",
        content: "Chattogram Port expects a substantial US$11.5 billion in foreign investment in 2024 for the construction of the Bay Terminal, which will have a capacity six times the existing capacity.",
        link: "https://www.tbsnews.net/economy/bay-terminal-eyes-115b-foreign-investment-2024-765418",
        image: "https://www.tbsnews.net/sites/default/files/styles/infograph/public/images/2023/12/27/p3_ctg-port.jpg"
      },
      {
        title: "Economic crisis hits hard Sri Lankan households",
        content: "The economic crisis is bearing on people with as many as 60.5 percent of households finding their monthly average incomes reduced, according to a survey by the Department of Census and Statistics.",
        link: "https://www.dailymirror.lk/top-story/Economic-crisis-hits-hard-60-5-households-struggle/155-273973%203",
        image: "https://bmkltsly13vb.compat.objectstorage.ap-singapore-1.oraclecloud.com/cdn.sg.dailymirror.lk/assets/uploads/image_ad75b0cf47.jpg"
      },]
    },
    {
      row: 2,
      posts: [{
        title: "Global 2024 staple food supplies to be strained",
        content: "High food prices in recent years have prompted farmers worldwide to plant more cereals and oilseeds, but consumers are set to face tighter supplies well into 2024, amid adverse El Nino weather, export restrictions and higher biofuel mandates.",
        link: "https://www.thedailystar.net/business/news/global-2024-staple-food-supplies-be-strained-dry-weather-export-curbs-3503486",
        image: "https://tds-images.thedailystar.net/sites/default/files/styles/big_202/public/images/2023/12/26/indian_wheat.jpg"
      },
      {
        title: "2023’s costliest climate disasters",
        content: "A list of the 20 costliest climate disasters of 2023 has revealed a “global postcode lottery stacked against the poor”, according to an analysis.",
        link: "https://www.theguardian.com/environment/2023/dec/27/2023-costliest-climate-disasters-poor-lose-out-global-postcode-lottery",
        image: "https://i.guim.co.uk/img/media/40b140e20d63acd0ee21a05ee8f3aa09984b03ff/0_119_3600_2160/master/3600.jpg?width=620&dpr=1&s=none"
      },]
    },
    {
      row: 3,
      posts: [
        {
          title: "Red Sea impasse to push up cost of importers-exporters",
          content: "Importers and exporters in Bangladesh started to feel the pinch of the transit disruption through the Red Sea route as major shipping lines announced additional surcharges to cover costs for re-routing their vessels.",
          link: "https://www.thedailystar.net/business/news/red-sea-impasse-push-cost-importers-exporters-3502996",
          image: "https://tds-images.thedailystar.net/sites/default/files/styles/big_202/public/images/2023/12/25/red_sea_impasse.jpg"
        },
        {
          title: "Bangladesh frames sustainable procurement policy",
          content: "The government recently drew up its Sustainable Public Procurement (SPP) Policy 2023, facilitating the participation of small-and-medium enterprises (SMEs) and women-owned business enterprises (WBEs) in public tenders.",
          link: "https://www.thedailystar.net/business/economy/industries/ict/news/govt-frames-sustainable-procurement-policy-3500211",
          image: "https://tds-images.thedailystar.net/sites/default/files/styles/big_202/public/images/2023/12/21/e-gp_1.jpg"
        },]
    },
    {
      row: 4,
      posts: [
        {
          title: "Indian trade curbs to cut exports by US$4bn",
          content: "India might face a US$4 to US$5 billion drop in exports due to restrictions on wheat, rice, and sugar trade, aiming to control local prices. Attacks in the Red Sea might affect basmati rice shipments.",
          link: "https://economictimes.indiatimes.com/news/economy/foreign-trade/indian-trade-curbs-to-cut-exports-by-4-bln-red-sea-attacks-a-risk-source/articleshow/106182820.cms?utm_source=contentofinterest&utm_medium=text&utm_campaign=cppst",
          image: "https://img.etimg.com/thumb/msid-106182972,width-300,height-225,imgsize-27542,resizemode-75/indias-2022-global-commercial-services-exports-share-doubled-to-4-4-wto-world-bank.jpg"
        },
        {
          title: "Pakistan to phase out export financing",
          content: "After giving it for 50 years, the government on Wednesday pulled the plug on a hidden export subsidy scheme and approved its transfer to the federal budget.",
          link: "https://tribune.com.pk/story/2450667/govt-to-phase-out-export-financing",
          image: "https://i.tribune.com.pk/media/images/21703102407-1/21703102407-1.jpg"
        }]
    },
    {
      row: 5,
      posts: [
        {
          title: "Bangladesh secures priority access to Argentinian wheat, soybeans",
          content: "Argentina has agreed to prioritise Bangladesh's imports of soybeans and wheat from that country. The two countries signed a Memorandum of Understanding (MoU) in this regard, marking a significant step towards strengthening agricultural ties.",
          link: "https://www.tbsnews.net/economy/bangladesh-secures-priority-access-argentinian-wheat-soybeans-753586",
          image: "https://www.tbsnews.net/sites/default/files/styles/big_3/public/images/2022/07/25/wheat.jpg"
        },
        {
          title: "Poor countries win fight for climate cash at COP28",
          content: "In a surprise that has lit up COP28, delegates have agreed to launch a long-awaited fund to pay for damage from climate-driven storms and drought. Three decades after the idea was first mooted, the 'loss and damage' cash agreement was greeted with sustained applause on the conference floor.",
          link: "https://www.bbc.com/news/science-environment-67581277",
          image: "https://ichef.bbci.co.uk/news/976/cpsprodpb/1294D/production/_131890167_gettyimages-1245767684-1.jpg.webp"
        }]
    },
  ],
  events: null,
  publications: null,
  opinion: {
    title: "COP28: Achievement in Loss and Damage Fund",
    paragraphOne: "The poor countries that have been bearing the brunt of the adverse impact of climate change now may find reprieve as the developed world has finally pledged to provide financial support to compensate for the destruction they are experiencing.",
    paragraphTwo: "The <a href='https://unfccc.int/process-and-meetings/conferences/un-climate-change-conference-united-arab-emirates-nov/dec-2023/about-cop-28?gclid=Cj0KCQiAv8SsBhC7ARIsALIkVT2Sw9ALKI_Bfu4Y9n287ZDf1wufCwtipT4LaYBdSfFmDFPvsGt6QCoaAtMGEALw_wcB'>28th Conference of Parties</a> (COP28), which took place in the United Arab Emirates from 30 November 30 to 13 December 2023, reached a historic agreement on the very first day of the conference. For almost three decades, the United Nations has convened an annual Conference of the Parties (COP), uniting states to collectively combat climate change and address the challenges of global warming. The last few years have seen the least developed and developing countries wrangling with developed countries to make the largest polluters obligated to help the poorer nations cope with the adverse impacts of climate change. On the first day of the UN COP28 conference, the nations agreed to operationalize the Loss and Damage Fund to assist the world's poorest and most vulnerable nations in bearing the irreversible costs of the climate catastrophe.",
    link: "https://www.sawtee.org/Opinion-in-lead/COP28-achievement-in-loss-and-damage-fund.html"
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
      <Hr style={{ margin: "30px 0" }} />
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


