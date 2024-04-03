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
  issue: 'Volume 21, Issue 03, March 2024',
  news: [
    {
      row: 1,
      posts: [{
        title: "Pakistan's EU exports fall despite GSP+ status",
        content: "Pakistan’s exports to European countries have begun to dip in the current fiscal year despite a GSP+ status that allows duty-free entrance into European markets for the majority of its products.",
        link: "https://www.dawn.com/news/1823401/exports-to-eu-states-fall-despite-gsp-status",
        image: "https://i.dawn.com/large/2023/10/06073846854d01c.jpg?r=073858"
      },
      {
        title: "Bangladeshi farmers face food insecurity",
        content: "Households in Bangladesh that depend on agriculture as their main source of income face moderate to severe risk of food insecurity despite being directly involved in food production.",
        link: "https://www.thedailystar.net/business/news/farmers-face-moderate-severe-food-insecurity-bbs-3570051",
        image: "https://tds-images.thedailystar.net/sites/default/files/styles/big_202/public/images/2024/03/19/farmers_food_insecurity.jpg"
      },]
    },
    {
      row: 2,
      posts: [{
        title: "IMF, Pakistan reach staff-level agreement on final bailout review",
        content: "The International Monetary Fund (IMF) has reached a Staff-Level Agreement (SLA) with Pakistan on the final review of a US$3 billion bailout, where the country will receive $1.1 billion after approval from the Fund.",
        link: "https://www.dawn.com/news/1822306/imf-pakistan-reach-staff-level-agreement-on-final-bailout-review",
        image: "https://i.dawn.com/large/2024/03/18134002710596e.jpg?r=134034"
      },
      {
        title: "EU backs law against forced labour in supply chains",
        content: "European Union countries have agreed to a law requiring companies to ensure their supply chains do not cause environmental damage or use forced labour. Critics argue that the law has now been diluted to be effective.",
        link: "https://www.bbc.com/news/world-europe-68583189",
        image: "https://ichef.bbci.co.uk/news/800/cpsprodpb/12933/production/_132938067_gettyimages-1219308248.jpg.webp"
      },]
    },
    {
      row: 3,
      posts: [
        {
          title: "India to train MSMEs on e-commerce exports",
          content: "To promote e-commerce exports, the commerce ministry's arm DGFT in partnership with logistics services provider DHL will conduct training sessions and workshops for MSMEs in 76 districts of the country.",
          link: "https://economictimes.indiatimes.com/news/economy/foreign-trade/dgft-inks-pact-with-dhl-to-train-msmes-on-e-commerce-exports/articleshow/108500302.cms?utm_source=contentofinterest&utm_medium=text&utm_campaign=cppst",
          image: "https://img.etimg.com/thumb/msid-108500348,width-300,height-225,imgsize-2513431,resizemode-75/trade-export.jpg"
        },
        {
          title: "Malaysian to ban migrant workers from July",
          content: "The Malaysian government has banned the entry of migrant workers starting from July while instructing companies to recruit necessary workers before the end of May, as migrant worker entry will cease thereafter.",
          link: "https://myrepublica.nagariknetwork.com/news/malaysian-govt-decides-to-impose-ban-on-migrant-workers-from-july/",
          image: "https://myrepublica.nagariknetwork.com/uploads/media/malaysia-nepali-migrant-workers_20230204104309.jpg"
        },]
    },
    {
      row: 4,
      posts: [
        {
          title: "SLSI to sign MoU with China’s Standardisation Administration to boost trade",
          content: "The Sri Lanka Standards Institute (SLSI) is set to collaborate with the Standardisation Administration of China to alleviate technical barriers hindering non-tariff trade between Sri Lanka and China.",
          link: "https://www.ft.lk/business/SLSI-to-sign-MoU-with-China-s-Standardisation-Administration-to-boost-trade/34-759408",
          image: "https://opportunitysrilanka.com/wp-content/uploads/2024/03/SLSI-to-sign-MoU-with-Chinas-Standardisation-Administration-to-boost-trade.jpg"
        },
        {
          title: "India inks pact with EFTA, gets $100 billion commitment",
          content: "India signed a trade and economic partnership agreement with the European Free Trade Association (EFTA), a grouping of Switzerland, Norway, Liechtenstein and Iceland, that includes a binding $100-billion investment commitment.",
          link: "https://economictimes.indiatimes.com/news/economy/foreign-trade/india-inks-pact-with-efta-gets-100-billion-commitment/articleshow/108373376.cms?utm_source=contentofinterest&utm_medium=text&utm_campaign=cppst",
          image: "https://img.etimg.com/thumb/msid-108373418,width-300,height-225,imgsize-34284,resizemode-75/never-been-closer-to-reaching-pact-on-free-trade-with-india-efta.jpg"
        }]
    },
  ],
  events: null,
  publications: [{
    title: "The 66/77 products inside out: The long and short of the United States’ Nepal Trade Preference Programme",
    content: "This working paper presents evidence on the effects of unilateral trade preferences on exports by assessing the effect of a unilateral duty-free market access scheme under the Nepal Trade Preference Programme (NTPP), which provides duty-free access to 66 products (later converted into 77 products after a change in the tariff classification system) offered by the United States to Nepal. The paper is authored by Dr. Paras Kharel, Executive Director of SAWTEE. The Opinion in Lead section of this newsletter discusses the findings in detail.",
    link: "https://www.sawtee.org/publications/WP23_Nepal-US_trade_PKharel_WP.pdf",
    image: "https://www.sawtee.org/images/Issue_brief_12_cover_image_small.jpg"
  }],
  opinion: {
    title: "Duty-free access alone not sufficient to boost export",
    paragraphOne: 'Nepal’s merchandise exports to the US in 2021, at US$108.3 million, were lower than what they were at their peak in the late 1990s. This is not a result of Covid-19 shocks but driven by a plunge in exports of clothing since the early 2000s in the wake of the phase-out of global quotas in the textiles and clothing sector. Imports, on the other hand, have risen steadily, and the trade balance, consistently positive during the export boom phase, has worsened over the past two decades to turn negative in the four of the five years during 2015-2019.',
    paragraphTwo: 'The United States’ Nepal Trade Preference Programme (NTPP) entered into force on 30 December 2016, providing duty-free market access to a set of 66 products (at the HS 8-digit level, or tariff line level) exported from Nepal until 31 December 2025. This preferential market access was aimed at promoting Nepal’s trade and economic development in the wake of the devastating earthquake of April 2015 and its aftershocks. Due to changes in the tariff classification system beginning in 2017, the number of products increased to 77. While the Trade Facilitation and Trade Enforcement Act of 2015 (Sec. 915) that was the legal basis for the scheme included products that were otherwise ineligible for duty-free access under the Generalized System of Preferences (GSP) programme, duty-free treatment for 31 of the 77 products was extended to other developing countries under the GSP programme before the NTPP came into force at the end of 2016.',
    link: "https://sawtee.org/opinion-in-lead/duty-free-access-alone-not-sufficient-to-boost-export.html"
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


