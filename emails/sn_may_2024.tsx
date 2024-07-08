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
  issue: 'Volume 21, Issue 05, May 2024',
  news: [
    {
      row: 1,
      posts: [{
        title: "India's Reliance signs deal with Rosneft purchasing oil in roubles",
        content: "Reliance Industries has signed a one-year deal with Russia's Rosneft to purchase at least 3 million barrels of oil monthly in roubles. This agreement, following Russia's push for alternative financial systems amid Western sanctions, underscores India's role as a major buyer of Russian crude.",
        link: "https://economictimes.indiatimes.com/industry/energy/oil-gas/reliance-signs-deal-with-russias-rosneft-purchasing-oil-in-roubles/articleshow/110499412.cms?utm_source=contentofinterest&utm_medium=text&utm_campaign=cppst",
        image: "https://img.etimg.com/thumb/msid-110499403,width-300,height-225,imgsize-100876,resizemode-75/reliance-industries.jpg"
      },
      {
        title: "WIPO treaty on intellectual property and genetic resources adopted",
        content: "In a landmark achievement for international intellectual property law, the WIPO treaty on intellectual property, genetic resources, and associated traditional knowledge was adopted by consensus. This milestone underscores the vitality of multilateralism in the field of IP.",
        link: "https://single-market-economy.ec.europa.eu/news/historic-wipo-treaty-adopted-intellectual-property-and-genetic-resources-2024-05-27_en",
        image: ""
      },]
    },
    {
      row: 2,
      posts: [{
        title: "‘Bangladesh hardly utilising regional trade potential’",
        content: "Bangladesh is hardly utilising its regional trade potential as less than 5 percent of the country's total exports go to India and China -- two major economies of Asia -- and countries that are members of the Association of Southeast Asian Nations (ASEAN).",
        link: "https://www.thedailystar.net/business/economy/news/bangladesh-hardly-utilising-regional-trade-potential-3619946",
        image: "https://tds-images.thedailystar.net/sites/default/files/styles/big_202/public/images/2024/05/27/b1b1.jpg"
      },
      {
        title: "BIMSTEC Charter enters into force nearly after three decades",
        content: "The Charter of the Bay of Bengal Initiative for Multi-Sectoral Technical and Economic Cooperation (BIMSTEC) has come into force. Nepal, one of the seven member states, has implemented the BIMSTEC Charter after three decades of the establishment of this sub-regional body.",
        link: "https://myrepublica.nagariknetwork.com/news/bimstec-charter-enters-into-force-nearly-three-decades-after-its-establishment/",
        image: "https://myrepublica.nagariknetwork.com/uploads/media/BIMSTEC-senoir-officials-meeting-04.jpg"
      },]
    },
    {
      row: 3,
      posts: [
        {
          title: "Pakistan trade with India suspended due to heavy duties",
          content: "Trade ties between Pakistan and India have remained suspended since 2019 due to imposition of heavy duties by New Delhi on imports from Pakis­tan after the Pulwama attack, Pakistan's Foreign Minister Ishaq Dar told the National Assembly in written reply.",
          link: "https://www.dawn.com/news/1834342/trade-with-india-suspended-due-to-heavy-duties-says-dar",
          image: ""
        },
        {
          title: "China hits back at US and EU as trade rows deepen",
          content: "China has launched an anti-dumping probe into imports of a widely used plastic from the US, EU, Taiwan and Japan. The announcement from the Ministry of Commerce is a signal that China will hit back in its trade disputes with the US and Europe.",
          link: "https://www.bbc.com/news/articles/cw004vvkj1xo",
          image: "https://ichef.bbci.co.uk/news/800/cpsprodpb/2941/live/50e1f420-1643-11ef-a3ef-692f04b9dd50.jpg.webp"
        },]
    },
    {
      row: 4,
      posts: [
        {
          title: "Biden quadruples tariffs on Chinese EVs",
          content: "In a bid to revive domestic manufacturing, President Joe Biden announced that he is imposing a drastic tariff increase on Chinese electric vehicles and new levies on computer chips, solar cells and lithium-ion batteries.",
          link: "https://www.voanews.com/a/biden-sharply-hikes-us-tariffs-on-billions-in-chinese-chips-cars/7610326.html",
          image: "https://gdb.voanews.com/01000000-0aff-0242-66de-08dc744420ec_cx0_cy10_cw0_w1023_r1_s.jpg"
        },
        {
          title: "India faces US sanctions threat after India-Iran pact",
          content: 'Just hours after India signed a 10-year agreement to manage the Chabahar Port in Iran, the United States issued a warning, underscoring the "potential risk of sanctions" for "anyone" engaging in business dealings with Tehran.',
          link: "https://economictimes.indiatimes.com/news/india/india-risks-sanctions-over-iran-chabahar-port-project-us-state-department-warns/articleshow/110101287.cms?utm_source=contentofinterest&utm_medium=text&utm_campaign=cppst",
          image: "https://img.etimg.com/thumb/msid-110100680,width-300,height-225,imgsize-112388,resizemode-75/us-president-joe-biden-speaks-about-his-investing-in-america-agenda-at-gateway-technical-college-in-sturtevant-wisconsin-on-may-8-2024-.jpg"
        }]
    },
    {
      row: 5,
      posts: [
        {
          title: "US cancels export licenses of suppliers to China’s Huawei",
          content: "The United States has revoked some licenses that allow companies to ship goods, such as chips, to sanctioned Chinese telecommunications equipment maker Huawei Technologies.",
          link: "https://www.aljazeera.com/economy/2024/5/8/us-cancels-export-licenses-of-suppliers-to-chinas-huawei",
          image: "https://www.aljazeera.com/wp-content/uploads/2024/03/2021-06-23T213734Z_2018083332_RC2J6O9U7F43_RTRMADP_3_HUAWEI-5G-1-1709274412.jpg?resize=770%2C513&quality=80"
        },
        {
          title: "Nepal’s Siddha Devi Tea Estate wins ‘World’s Best Tea’ title",
          content: "Tea produced in Nepal has won the title of the ‘World’s Best Tea’ in the World Tea Expo 2024 organized in Las Vegas, USA. Siddha Devi Tea Estate bagged the honor for its product showcased in the trade expo.",
          link: "https://myrepublica.nagariknetwork.com/news/nepal-s-siddha-devi-tea-estate-wins-world-s-best-tea-title/ ",
          image: "https://myrepublica.nagariknetwork.com/uploads/media/greentea_20220525171024.jpg"
        }]
    },
  ],
  events: [{
    title: "Insights into Informal Cross-Border Trade in Agri-Food Commodities in South Asia",
    content: "South Asia Watch on Trade, Economics and Environment (SAWTEE) in partnership with the International Food Policy Research Institute (IFPRI) organized a workshop titled “Insights into Informal Cross-Border Trade in Agri-Food Commodities in South Asia” on 16 May 2024 in Kathmandu. The objective of the workshop was to disseminate the findings of the study done by SAWTEE and IFPRI that examined the dynamics of informal trade in agri-food commodities. The workshop centered on the dynamics of informal trade in agri-food commodities between Nepal and India and India and Bangladesh, shedding light on the nuances of trade patterns, modes, and underlying drivers.",
    link: "https://sawtee.org/featured-events/insights-into-informal-cross-border-trade-in-agri-food-commodities-in-south-asia.html",
    image: "https://sawtee.org/page_gallery/big/92osyv5450.jpg",
  }],
  publications: [{
    title: "जानकारी पत्र:नेपालको सार्वजनिक ऋणको अवस्था",
    content: 'छोटो अवधिमा तीव्र गतिमा बढेको नेपालको सार्वजनिक ऋण अहिले चर्चाको विषय बनेको छ र यसले नेपालको वित्तिय दिगोपनबारे पनि प्रस्न उठाएको छ। यहि सम्बन्धि सावतीले गरेको अध्ययनलाई "नेपालको सार्वजनिक ऋणको अवस्था" शिर्षकको जानकारी पत्रमा संक्षिप्त रूपमा तयार पारिएको छ।',
    link: "https://sawtee.org/publications/Jankari-Patra-19.pdf",
    image: null,
  }],
  opinion: {
    title: "Nepal’s financing needs to fight climate change",
    paragraphOne: 'Climate change has become a clear and present danger to Nepal’s development journey. As one of the most vulnerable nations to the impact of climate change due to its geographical location, Nepal is estimated to incur average annual economic loss worth 0.08 percent of its Gross domestic Product (GDP) due to climate-induced disaster. The losses during extreme years could be as high as 2.08 percent of GDP. These numbers do not account for the impacts on agriculture and livelihood caused by the losses in agriculture outputs due to extreme weather events and the resulting likelihood of the rise of conflicts. At the same time, Nepal, still a least developed country (LDC), aspiring to achieve structural transformation for a prosperous future will require expanding its energy-intensive industrial footprint. Building resilience of the communities and livelihoods to withstand the effects of the extreme events caused by climate change and moderate the harm caused by such disasters would require devising and implementing adaptation measures. At the same time, supporting the country’s energy mix to generate and consume clean energy to fuel the much-needed structural transformation also requires a large investment. Hence, external financing is a lifeline for countries like Nepal with limited financial prowess to protect their communities from climate-induced disasters and invest in climate-smart infrastructure.',
    paragraphTwo: null,
    link: "https://sawtee.org/opinion-in-lead/nepal%E2%80%99s-financing-needs-to-fight-climate-change.html"
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


