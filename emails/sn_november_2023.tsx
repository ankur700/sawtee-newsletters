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
  issue: 'Volume 20, Issue 11, November 2023',
  news: [
    {
      row: 1,
      posts: [{
        title: "Axiata announces exit from Nepal",
        content: "Malaysia’s Axiata Group, the parent company of Ncell, has decided to exit Nepal in a blow to the government which is preparing to hold an investment summit in April 2024.",
        link: "https://kathmandupost.com/money/2023/11/29/axiata-group-to-exit-nepal",
        image: "https://assets-api.kathmandupost.com/thumb.php?src=https://assets-cdn.kathmandupost.com/uploads/source/news/2023/third-party/Untitled1copy-1701253450.jpg&w=900&height=601"
      },
      {
        title: "Bangladesh wants trilateral mechanism on energy",
        content: "Bangladesh has proposed a mechanism between Nepal, India and Bangladesh at the highest bureaucratic level to enhance trilateral cooperation in the energy sector.",
        link: "https://kathmandupost.com/national/2023/11/28/bangladesh-wants-trilateral-mechanism-on-energy",
        image: "https://assets-api.kathmandupost.com/thumb.php?src=https://assets-cdn.kathmandupost.com/uploads/source/news/2023/news/thumb1-1701135552.jpg&w=900&height=601"
      },]
    },
    {
      row: 2,
      posts: [{
        title: "India won't discuss other agri issues at WTO",
        content: "India has told a WTO grouping that it will not discuss any new issue in the agriculture segment like imposition of export restrictions before a permanent solution is found with regard to public stockholding of food grains.",
        link: "https://economictimes.indiatimes.com/news/economy/foreign-trade/no-new-issue-in-agri-till-permanent-solution-on-public-stockholding-india-at-a-wto-meet/articleshow/105600058.cms",
        image: "https://img.etimg.com/thumb/msid-105600147,width-300,height-225,imgsize-40896,,resizemode-75/piyush-goyal-bccl.jpg"
      },
      {
        title: "India rubbishes China factories' quality certification applications",
        content: "Indian government is going slow in giving quality certification to factories in China for products coming under quality control orders (QCOs), increasing pressure on companies to curb imports from China and opt for domestic production.",
        link: "https://economictimes.indiatimes.com/news/economy/foreign-trade/india-rubbishes-china-factories-quality-certification-applications/articleshow/105428102.cms?utm_source=contentofinterest&utm_medium=text&utm_campaign=cppst",
        image: "https://img.etimg.com/thumb/msid-105434393,width-300,height-225,imgsize-50988,,resizemode-75/anti-china-anti-dumping-agencies.jpg"
      },]
    },
    {
      row: 3,
      posts: [
        {
          title: "US extends exemption to Pakistan on fish exports",
          content: "Pakistan has successfully secured a two-year extension until 31 Dec 2025 to continue the commercial export of fish and fish products to the United States.",
          link: "https://www.dawn.com/news/1791348/us-extends-exemption-related-to-fish-exports",
          image: "https://i.dawn.com/primary/2023/11/220240532b12c8a.jpg"
        },
        {
          title: "Richest 1% account for more carbon emissions than poorest 66%",
          content: "The richest 1% of humanity is responsible for more carbon emissions than the poorest 66%, with dire consequences for vulnerable communities.",
          link: "https://www.theguardian.com/environment/2023/nov/20/richest-1-account-for-more-carbon-emissions-than-poorest-66-report-says",
          image: "https://i.guim.co.uk/img/media/8787f713fb41bc37aacb040b788ec4d309abca7e/0_0_6458_3874/master/6458.jpg?width=620&dpr=1&s=none"
        },]
    },
    {
      row: 4,
      posts: [
        {
          title: "India, 13 others ink pact to reduce dependence on China",
          content: "India, the US and 12 other members of the Indo-Pacific Economic Framework (IPEF) have signed a supply chain resilience agreement that is aimed at helping reduce dependence on China.",
          link: "https://economictimes.indiatimes.com/news/economy/foreign-trade/india-13-others-of-ipef-ink-supply-chain-resilience-pact-to-reduce-dependence-on-china/articleshow/105246703.cms?utm_source=contentofinterest&utm_medium=text&utm_campaign=cppst",
          image: "https://img.etimg.com/thumb/msid-105246744,width-300,height-225,imgsize-35206,,resizemode-75/ipef.jpg"
        },
        {
          title: "US to fund US$553m deep-sea terminal in Sri Lanka",
          content: "The United States will lend more than US$550m for a deep-sea container terminal in Sri Lanka, officials say, with the project seen as countering China’s rising influence in the Indian Ocean.",
          link: "https://www.aljazeera.com/news/2023/11/8/us-to-fund-553m-deep-sea-terminal-in-sri-lanka",
          image: "https://www.aljazeera.com/wp-content/uploads/2023/11/AP23312191446646-1699442317.jpg?resize=770%2C513&quality=80"
        }]
    },

  ],
  events: [{
    title: "Roundtable Discussion on Nepal-China Trade: Prospects and Challenges",
    content: "South Asia Watch on Trade, Economics, and Environment (SAWTEE) organized a discussion programme on Nepal-China Trade: Prospects and Challenges on 9 November 2023 in Kathmandu. The objective of the programme was to share the preliminary findings of the research done by SAWTEE and gather insights from stakeholders into the prospects and challenges in Nepal-China trade. The focus was particularly in navigating the impacts of COVID-19 pandemic that has led to significant disruptions to cross-border trade between the two nations. The programme was supported by The Asia Foundation.",
    link: "https://sawtee.org/featured-events/roundtable-discussion-on-nepal-china-trade-prospects-and-challenges.html"
  },
  ],
  publications: [{
    title: 'Nepal national single window: towards a paperless trade regime',
    content: "The Framework Agreement on Facilitation of Cross-border Paperless Trade in Asia and the Pacific (CPTA), which entered into force on 20 February 2021, is a UN treaty deposited with the Secretary General of the United Nations. Nepal is not yet a party to the treaty, but it has been making efforts, mostly unilaterally, to digitalize trade processes and create a paperless trade regime. The most important of these has been the progress made in the establishment and operationalization of the Nepal National Single Window (NNSW). However, advancement in the implementation of paperless trade in Nepal has generally been within the border, mostly excluding the cross-border exchange of data and documents. In this paper, SAWTEE's senior researcher Mr. Kshitiz Dahal, along with his co-author, argues that making the current administration of paperless trade seamless and expanding it to cover paperless trade will require legislative reforms, institutional strengthening, harmonization and standardization of data and documents, and proactive engagement in bilateral and regional forums to develop cross-border paperless trade systems.",
    link: "https://repository.unescap.org/handle/20.500.12870/6435"
  }],
  opinion: {
    title: "Building resilience to the impacts of climate change",
    paragraphOne: "Climate change is once again at the epicentre of public debate globally, as is the case around the Conference of the Parties (COP) meetings. The science of climate change has been clear about the anthropogenic warming of the Earth’s climate and the adverse impacts it causes. However, until recently, the climate change impacts were something that would occur in the distant future. But, now, not only is the science of climate change clear, but we are also directly witnessing the impacts. Moreover, many individuals and communities around the world, including South Asia, have suffered tremendous losses as a result of extreme weather events, which are made more frequent, more severe, and more unpredictable as a result of anthropogenic climate change.",
    paragraphTwo: "",
    link: "https://sawtee.org/opinion-in-lead/building-resilience-to-the-impacts-of-climate-change.html"
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
      <Text style={paragraph}>
        {paragraphTwo}
      </Text>
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


