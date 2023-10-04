import * as React from 'react';
import { Button, Container, Head, Hr, Html, Img, Link, Preview, Section, Column, Heading, Text, Font, Body } from '@react-email/components';

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
  issue: 'Volume 20, Issue 09, September 2023',
  news: [
    {
      row: 1,
      posts: [{
        title: "Nepal and China agree to revisit bilateral Trade and Payments Agreement",
        content: "Nepal and China have consented to revisit the Nepal-China Trade and Payments Agreement ollowing a bilateral talk held between Prime Minister Pushpa Kamal Dahal and Chinese Prime Minister Li Chang.",
        link: "https://myrepublica.nagariknetwork.com/news/nepal-and-china-agree-to-revisit-bilateral-trade-and-payments-agreement/",
        image: "https://myrepublica.nagariknetwork.com/uploads/media/1695616333_383982369_6639151209487546_3136420072624540287_n_20230925111902.jpg"
      },
      {
        title: "Bangladesh lowers exporters’ dollar retention limit again",
        content: "The Bangladesh Bank has once again lowered the US dollar retention limit that exporters have to maintain in their foreign currency accounts from the shipment proceeds as Bangladesh continues to face the shortage of the American greenback.",
        link: "https://www.thedailystar.net/business/economy/news/exporters-dollar-retention-limit-lowered-again-3427251",
        image: "https://tds-images.thedailystar.net/sites/default/files/styles/big_202/public/feature/images/bangladesh-bank-logo.jpg?itok=VPa5vbhs&timestamp=1691984771"
      },]
    },
    {
      row: 2,
      posts: [{
        title: "Rice export ban is regulation rather than restriction for food security: India",
        content: "India has defended its export ban on rice, stating that it is a regulation rather than a restriction and is necessary for the food security of its 1.4 billion people. India reiterated its commitment to ensuring food security in importing countries through exemptions granted upon request.",
        link: "https://www.thehindu.com/business/Industry/export-ban-on-rice-is-regulation-rather-than-restriction-for-food-security-india-to-wtos-agriculture-committee-meet/article67356967.ece",
        image: "https://th-i.thgim.com/public/business/Industry/uiegg6/article67356988.ece/alternates/LANDSCAPE_1200/FSI%20B.jpg"
      },
      {
        title: "India agrees to cut import duty to 5-10% on some processed food items",
        content: "India has agreed to bring down the import duty to 5-10 percent on some fresh and processed food items as part of a larger dispute settlement between New Delhi and Washington at the World Trade Organization (WTO).",
        link: "https://www.business-standard.com/economy/news/india-agrees-to-bring-down-import-duty-on-some-fresh-processed-food-items-123091000533_1.html",
        image: "https://bsmedia.business-standard.com/_media/bs/img/article/2022-04/14/full/1649882549-0461.jpg?im=FeatureCrop,size=(826,465)"
      },]
    },
    {
      row: 3,
      posts: [
        {
          title: "Cotton waste the new cash cow for Bangladesh",
          content: "Cotton waste is turning into a new cash cow for Bangladesh as it is increasingly being sold abroad although local garment exporters are in favour of retaining and recycling it.",
          link: "https://www.thedailystar.net/business/economy/news/cotton-waste-the-new-cash-cow-3415906",
          image: "https://tds-images.thedailystar.net/sites/default/files/styles/big_202/public/images/2023/09/11/cotton-waste.jpg?itok=fjjosaRq&timestamp=1694405483"
        },
        {
          title: "WTO flags trade concerns over proposed EU carbon border tax",
          content: "The WTO flagged the European Union's Carbon Border Adjustment Mechanism (CBAM) and the US' Inflation Reduction Act as potential trade concerns. This comes before the implementation of the European Union's Carbon Border Adjustment Mechanism (CBAM) rules for transition from October 1.",
          link: "https://economictimes.indiatimes.com/news/economy/foreign-trade/wto-flags-trade-concerns-over-proposed-eu-carbon-border-tax/articleshow/103616093.cms?utm_source=contentofinterest&utm_medium=text&utm_campaign=cppst",
          image: "https://img.etimg.com/thumb/msid-103616227,width-300,height-225,imgsize-119608,,resizemode-75/file-photo-european-flags-fly-outside-the-european-commission-headquarters-in-brussels.jpg"
        },]
    },
    {
      row: 4,
      posts: [
        {
          title: "Bangladesh’s average import tariffs higher than in most countries",
          content: "Bangladesh's average nominal tariffs are higher than in low-income, middle-income and high-income countries, as well as most of its comparators.",
          link: "https://www.thedailystar.net/business/economy/news/bangladeshs-average-import-tariffs-higher-most-countries-3418386",
          image: "https://tds-images.thedailystar.net/sites/default/files/styles/big_202/public/images/2023/09/14/bd-average-imort.jpg?itok=xbkjpzoR&timestamp=1694669196"
        },
        {
          title: "Maersk gets initial nod to install container terminal in Chittagong",
          content: "The Chittagong Port Authority (CPA) has said they gave their initial approval to Copenhagen-based port and cargo operator Maersk Group to set up a new container terminal near the country's main seaport, officials said.",
          link: "https://www.tbsnews.net/economy/maersk-gets-initial-nod-install-container-terminal-ctg-port-692330",
          image: "https://www.tbsnews.net/sites/default/files/styles/big_2/public/images/2023/08/31/maersk.jpg"
        }]
    },
    {
      row: 5,
      posts: [
        {
          title: "India steps up coal use to stop outages",
          content: "India has stepped up the use of coal to generate electricity in a bid to stop outages caused by lower hydroelectricity output, and as an increase in renewables is struggling to keep pace with record power demand.",
          link: "https://www.moneycontrol.com/news/business/economy/india-steps-up-coal-use-to-stop-outages-triggered-by-unusually-dry-weather-11303421.html",
          image: "https://images.moneycontrol.com/static-mcnews/2023/08/indonesia-coal-bbo-770x433.jpg?impolicy=website&width=770&height=431"
        },
        {
          title: "India Cabinet okays plan to buy Nepal’s 10,000 MW power",
          content: "India has formalised its announcement that it would buy 10,000 megawatts of electricity from Nepal over 10 years with the endorsement of a long-term inter-government power trade agreement.",
          link: "https://kathmandupost.com/national/2023/09/06/india-cabinet-okays-plan-to-buy-nepal-s-10-000-mw-power",
          image: "https://assets-api.kathmandupost.com/thumb.php?src=https://assets-cdn.kathmandupost.com/uploads/source/news/2023/third-party/F5PCz6HWkAAcVwe-1693964218.jpg&w=900&height=601"
        }]
    },

  ],
  events: [{
    title: "Workshop for economic journalists in Koshi Province",
    content: "SAWTEE in collaboration with the Federation of Nepali Journalists (FNJ) organized a workshop for economic journalists of Koshi Province in Ilam on 7-8 September 2023. The objective of the workshop was to build the capacity of economic journalists in covering issues related to international trade and external sector. Twenty-five journalists from different media participated in the workshop.",
    link: "https://sawtee.org/featured-events/workshop-for-economic-journalists-in-koshi-province.html"
  },
  {
    title: "Discussion programmes on Nepal’s regional trade and public debt",
    content: 'SAWTEE organized two discussion programmes on 1 September 2023 as part of a seminar on "Small State Capabilities: Navigating Competition and Foreign Policy Priorities in Nepal", led by The Asia Foundation. The first discussion titled <a href="https://sawtee.org/featured-events/discussion-programme-on-regional-trade.html" target="_blank">“Nepal’s regional trade: Prospects and challenges”</a> dissected the prospects and challenges in Nepal’s regional trade, covering both merchandise and electricity. The other one titled “Assessment of Nepal’s public debt, and experiences of Pakistan and Sri Lanka” focused on Nepal’s public debt and assessed whether Nepal is veering towards an unsustainable path of debt accumulation compared to its peers in South Asia.',
    link: "https://sawtee.org/in-focus/discussion-programme-on-public-debt.html"
  }],
  publications: null,
  opinion: {
    title: "South Asia’s challenges towards SDGs",
    paragraphOne: "Halfway through the deadline to meet the 17 Sustainable Development Goals, countries in South Asia are way off the mark. The latest figures raise concern that South Asia will be left behind.",
    paragraphTwo: "The region accounts for nearly two-fifths of the world’s income poor, hosts nearly half of the world’s malnourished children, has the largest number of stunted children in the world and suffers from a number of infrastructure gaps. The countries are haunted by numerous social issues that manifest themselves in strained and unequal economic opportunities.",
    link: "https://sawtee.org/opinion-in-lead/south-Asia%E2%80%99s-challenges-towards-SDGs.html"
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
      <Section style={header_bottom}>
        <Column style={{ width: '65%' }}>
          <span style={{ float: 'left' }}>
            {Data.subtitle}
          </span>
        </Column>
        <Column style={{ display: 'flex', justifyContent: 'end' }}>
          <span style={{ float: 'right' }}>{Data.issue}</span>
        </Column>
      </Section>
    </Section>
  )
}

const TopSection = () => {
  return (
    <Section style={{ padding: '20px 30px 0' }} >
      <Column style={{ width: '50%' }}>
        <Link href="https://sawtee.org/">
          <Img
            src="https://sawtee.org/images/logo_sawtee.jpg"
            width="120"
            height="auto"
            alt="SAWTEE"
          />
        </Link>
      </Column>
      <Column style={{ width: '100%' }}>
        <Column style={{ display: "inline-flex" }}>
          <Link href='https://twitter.com/sawteenp' style={social_links}>
            <Img
              src="https://sawtee.org/images/twitter-logo.png"
              width="24"
              height="24"
              alt="Twitter"
            />
          </Link>
          <Link href="https://www.facebook.com/SAWTEENP/" style={social_links}>
            <Img
              src="https://sawtee.org/images/facebook-logo.png"
              width="24"
              height="24"
              alt="Facebook"
            />
          </Link>
          <Link href="https://www.linkedin.com/company/sawtee" style={social_links}>
            <Img
              src="https://sawtee.org/images/linkedin-logo.png"
              width="24"
              height="24"
              alt="LinkedIn"
            />
          </Link>
          <Link href="https://www.youtube.com/channel/UCP--4sJx0HJONM-UP_53vjg" style={social_links}>
            <Img
              src="https://sawtee.org/images/youtube-logo.png"
              width="24"
              height="24"
              alt="Youtube"
            />
          </Link>
        </Column>

      </Column>
    </Section>
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
        news ? news.map((item: News) => {
          return (
            <Section key={item.row} style={{ paddingBottom: '50px', minHeight: "280px" }} >
              {item.posts ? item.posts.map(({ title, link, content, image }: Post) => {
                return (
                  <Column key={title} style={{ float: 'left', padding: ' 0 2%', width: '46%', }}>
                    <Link href={link}><Img style={Image_Style} width='265' height='180' alt={title} title={title} src={image ? image : `https://placehold.co/280x180/e4e4e4/006181?text=${title}`} /></Link>
                    < Heading style={news_title} as='h3'>{title}</Heading>
                    <Text style={paragraph}>{content}</Text>
                    <Link style={anchor} href={link}>Read More</Link>
                  </Column>
                )
              }) : null}
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
    <Section style={section} >
      <Heading as="h2" style={section_heading}>Opinion in Lead</Heading>
      <Heading as='h3' style={section_title}>{title}</Heading>
      <Text style={paragraph}>
        {paragraphOne}
      </Text>
      <Text style={paragraph}>
        {paragraphTwo}
      </Text>
      <Section style={{ textAlign: 'center' as const, marginTop: '20px' }}>
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
    <Section style={{ backgroundColor: '#E8F5F2', padding: '20px 30px', }}>
      <Heading as='h2' style={section_heading}>Events</Heading>
      {events.map((event: Event, i: number) => {
        return (
          <Section key={event.title} style={{ marginTop: i !== 0 ? "60px" : "0px" }}>
            <Heading as='h3' style={section_title}>{event.title}</Heading>
            <Text style={paragraph} dangerouslySetInnerHTML={{ __html: event.content }} />
            {event.link !== null && <Button
              pX={10}
              pY={10}
              style={ButtonStyle}
              href={event.link}
            >
              Read More
            </Button>}
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
    <Section style={footer_section}>
      <Section style={{ margin: '30px auto' }}>
        <Heading as='h3' style={footer_headings}>Editor</Heading>
        <Text style={footer}>Dikshya Singh</Text>
      </Section>

      <Section>
        <Heading as='h3' style={footer_headings}>Contact</Heading>
        <Text style={footer}>
          South Asia Watch on Trade, Economics and Environment (SAWTEE)<br />
          P.O. Box: 19366, Tukucha Marg, Kathmandu, Nepal<br />
          Tel: 977-1-4544438, 4524360 Fax: 977-1-4544570<br />
          Email: <Link href="mailto:enewsletter@sawtee.org" style={anchor}>enewsletter@sawtee.org</Link><br />
          Web: <Link href="https://www.sawtee.org" style={anchor}>www.sawtee.org</Link>
        </Text>
      </Section>

      <Section style={{ paddingTop: '60px', paddingBottom: '20px' }}>
        <Text style={{
          color: 'grey',
          fontFamily:
            '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Ubuntu,sans-serif',
          fontSize: '12px',
          lineHeight: 'normal',
          padding: '0', margin: '0'
        }}>
          <em>You are receiving this email because you have visited our site or asked us about regular newsletter. To unsubscribe send email with subject "Unsubscribe" to <Link href="mailto:sawtee@sawtee.org" style={anchor}>SAWTEE</Link>.
            Check our other publications below</em>
        </Text>
      </Section>

      <Section style={{ backgroundColor: '#006181', padding: '10px', marginBottom: '20px' }}>
        <Column><Link style={publications_link} href="https://www.sawtee.org/publications/trade-insight">Trade Insight </Link></Column>
        <Column style={{ color: '#fff' }}>|</Column>
        <Column><Link style={publications_link} href="https://www.sawtee.org/publications/books">Books</Link>
        </Column>
        <Column style={{ color: '#fff' }}>|</Column>
        <Column><Link style={publications_link} href="https://www.sawtee.org/publications/working-paper">Working Paper</Link>
        </Column>
        <Column style={{ color: '#fff' }}>|</Column>

        <Column><Link style={publications_link} href="https://www.sawtee.org/newsletters">Newsletter</Link></Column>
      </Section>
      <Hr style={hr} />

      <Section>
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
          <Section style={{ marginTop: '10px', textAlign: 'center' as const, width: 'max-content' }}>
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
      </Section>

    </Section>
  )
}

const main = {
  backgroundColor: 'hsl(45, 38%, 94%)',
  fontFamily: '"Roboto", serif',
};

const Image_Style = {
  display: "block",
  width: "100%",
  objectFit: "cover",
  border: "1px solid grey",
}

const publications_link = {
  color: '#fff',
  fontSize: '12px',
  fontWeight: 'normal',
}

const container = {
  backgroundColor: '#ffffff',
  margin: '0 auto',
  marginBottom: '64px',
  maxWidth: '40em',
};

const section = {
  padding: '20px 30px',
}

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
  margin: '20px 0',
};

const section_heading = {
  color: "#262626",
  fontSize: '24px',
  fontWeight: '600',
  paddingBottom: '10px',
  margin: '0',
}

const section_title = {
  fontSize: '15px',
  color: '#006181',
  fontWeight: 'bold',
  paddingBottom: '10px',
  margin: '0',
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
};

const publication_events_section = {
  backgroundColor: '#E8F5F2',
  padding: '20px 30px',
}

const news_title = {
  fontSize: '14px',
  color: '#006181',
  fontWeight: 'bold',
  paddingTop: '10px',
  lineHeight: '1.5',
  margin: '0',
}

const footer = {
  color: '#262626',
  fontSize: '12px',
  lineHeight: '16px',
  padding: '0', margin: '0',
};

const footer_section = {
  padding: '0 48px 20px ',
  textAlign: textAlign,
}

const footer_headings = {
  color: '#262626',
  fontSize: '18px',
  fontFamily: 'monospace',
  padding: '0', paddingBottom: '5px', margin: '0',
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
  display: 'block',
  width: '95%',
}


