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
  issue: 'Volume 21, Issue 04, April 2024',
  news: [
    {
      row: 1,
      posts: [{
        title: "Increasing global uncertainties may impact demand, India's exports",
        content: "The escalating geopolitical tension may have implications for the country's exports in the first quarter of 2024-25 as it is likely to impact global demand.",
        link: "https://economictimes.indiatimes.com/news/economy/foreign-trade/increasing-global-uncertainties-may-impact-demand-indias-exports-fieo/articleshow/109690172.cms?utm_source=contentofinterest&utm_medium=text&utm_campaign=cppst",
        image: "https://img.etimg.com/thumb/msid-109690338,width-300,height-225,imgsize-2513431,resizemode-75/trade-export.jpg"
      },
      {
        title: "USTR identifies Bangladesh among top-five counterfeit suppliers",
        content: "The United States Trade Representative (USTR) said Bangladesh is one of the top five sources for counterfeit clothing globally.",
        link: "https://www.thedailystar.net/business/economy/news/ustr-identifies-bangladesh-among-top-five-counterfeit-product-suppliers-3595451 ",
        image: "https://tds-images.thedailystar.net/sites/default/files/styles/big_202/public/feature/images/counterfeited_products.jpg"
      },]
    },
    {
      row: 2,
      posts: [{
        title: "Indian Customs Releases 22 Trucks Carrying Tea from Nepal after Six Days",
        content: "Twenty two trucks carrying tea from Nepal were allowed to enter West Bengal by the Indian Customs Office on night after holding them at the Indian checkpoint across Mechi for six days.",
        link: "https://www.newbusinessage.com/Articles/view/20805",
        image: "https://www.newbusinessage.com/img/news/20240424021223_Tea.jpg"
      },
      {
        title: "EU's new supply chain law to improve labour conditions in Bangladesh",
        content: "The new supply chain law approved by the European Parliament is expected to improve labour and environmental standards at the garment factories in Bangladesh.",
        link: "https://www.thedailystar.net/business/economy/news/eus-new-supply-chain-law-improve-labour-conditions-bangladesh-3594636",
        image: "https://tds-images.thedailystar.net/sites/default/files/styles/big_202/public/images/2024/04/24/b1_lead_9.jpg"
      },]
    },
    {
      row: 3,
      posts: [
        {
          title: "Dairy exports to China from Pakistan approved",
          content: "Pakistan is going to start exporting dairy products to China through a state-of-the-art farm developed in Sheikhupura to meet the export requirements of China.",
          link: "https://tribune.com.pk/story/2463869/dairy-exports-to-china-approved",
          image: "https://i.tribune.com.pk/media/images/2162506-dairyfarmers-1582432655/2162506-dairyfarmers-1582432655.png"
        },
        {
          title: "Rice prices in Nepal hit record high amid Indian ban",
          content: "Rice prices surged to their highest by Rs800 per kg per 25 kg of bag over a year in the Nepali market, according to the National Consumer Forum.",
          link: "https://kathmandupost.com/money/2024/04/23/rice-prices-hit-record-high-amid-indian-ban",
          image: "https://assets-api.kathmandupost.com/thumb.php?src=https://assets-cdn.kathmandupost.com/uploads/source/news/2024/third-party/shutterstock2067354884min-1713852993.jpg&w=900&height=601"
        },]
    },
    {
      row: 4,
      posts: [
        {
          title: "Nepal amends nine laws through ordinance to attract investors",
          content: "To attract domestic and foreign investors, the Nepal government has amended nine laws through an ordinance on the eve of the Nepal Investment Summit-2024 and address long-standing complaints from the private sector.",
          link: "https://myrepublica.nagariknetwork.com/news/govt-amends-nine-laws-to-attract-investors-through-ordinance/",
          image: "https://myrepublica.nagariknetwork.com/uploads/media/economy_20240423124420.jpeg"
        },
        {
          title: "India, 7 other WTO members slam EU & UK over steel duty",
          content: "India, China and Russia, along with five other World Trade Organization (WTO) members, criticised the European Union's decision to extend its existing safeguard measure on certain steel products beyond June 30.",
          link: "https://economictimes.indiatimes.com/news/economy/foreign-trade/india-7-other-wto-members-slam-eu-uk-over-steel-duty/articleshow/109510984.cms?utm_source=contentofinterest&utm_medium=text&utm_campaign=cppst",
          image: "https://img.etimg.com/thumb/msid-109511003,width-300,height-225,imgsize-409490,resizemode-75/india-7-other-wto-members-slam-eu-uk-over-steel-duty.jpg"
        }]
    },
    {
      row: 5,
      posts: [
        {
          title: "US trade bodies oppose tariff hike idea for garments from Bangladesh",
          content: "Four major American trade bodies have strongly opposed the suggestion aimed at imposing higher tariffs on apparel items imported from Bangladesh and four other countries.",
          link: "https://www.thedailystar.net/business/economy/news/us-trade-bodies-oppose-tariff-hike-idea-garments-bangladesh-3589536",
          image: "https://tds-images.thedailystar.net/sites/default/files/styles/big_202/public/feature/images/gsp_2_0_0.jpg"
        },
        {
          title: "Sri Lankan pharma industry to reduce 30% imports by 2030",
          content: "The Sri Lankan pharmaceutical industry will be able to reduce around 30% of total pharma imports by 2030 opined senior members of the Sri Lanka Chamber of the Pharmaceutical Industry.",
          link: "https://www.dailynews.lk/2024/04/22/business/504197/sri-lankan-pharmaceutical-industry-to-reduce-30-pharma-imports-by-2030/",
          image: "https://www.dailynews.lk/wp-content/uploads/2024/04/11-Sri.jpg"
        }]
    },
  ],
  events: [{
    title: "Roundtable discussion on tapping Nepal’s export potential",
    content: "On 16 April 2024, SAWTEE organized a roundtable discussion on 'Tapping Nepal’s export potential: Firm - level perspectives' in Kathmandu. Considering the urgency to examine ways to create an enabling environment to propel exports, SAWTEE is undertaking a study of the export sector, which also entails a survey of firms to understand the constraints to exporting and the factors that enable exporting.",
    link: "https://sawtee.org/featured-events/roundtable-discussion-on-tapping-nepal%E2%80%99s-export-potential.html",
    image: "https://sawtee.org/page_gallery/big/70img_2216.jpeg",
  }],
  publications: null,
  opinion: {
    title: "Unlocking Nepal’s IT services export",
    paragraphOne: 'As Nepal aspires to develop its promising information technology (IT) industry into a thriving export sector, a series of support measures is required to overcome the impediments to attracting investment (including foreign investment) and human resources. ',
    paragraphTwo: 'In the recently concluded Third Nepal Investment Summit, held in April 2024, information and communication technology(ICT) was one of the sectors that was promoted for foreign direct investment(FDI). Among the projects signed up by foreign investors in the Summit is an agreement to construct Nepal’s first- ever super cloud data centre in Ramkot, Kathmandu at an estimated cost of NPR 3 billion.',
    link: "https://sawtee.org/opinion-in-lead/unlocking-nepal%E2%80%99s-it-services-export.html"
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


