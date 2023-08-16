import * as React from 'react';
import { Button, Container, Head, Hr, Html, Img, Link, Preview, Section, Column, Heading, Text, Font, Body } from '@react-email/components';

const textAlign = "center" as const;

const Data = {
  title: 'TRADE, CLIMATE CHANGE AND DEVELOPMENT MONITOR',
  subtitle: 'Monthly E-Newsletter of South Asia Watch on Trade, Economics and Environment',
  issue: 'Volume 20, Issue 07, July 2023',
  news: [
    {
      row: 1,
      posts: [{
        title: "India, US mutually resolve all six trade disputes at WTO",
        content: "India and the US have mutually resolved all six trade disputes pending at the World Trade Organisation (WTO), in line with the commitment made by the two countries during the US visit of Prime Minister Narendra Modi last month.",
        link: "https://economictimes.indiatimes.com/news/economy/foreign-trade/india-us-mutually-resolve-all-six-trade-disputes-at-wto-official/articleshow/101835832.cms?utm_source=contentofinterest&utm_medium=text&utm_campaign=cppst",
        image: "https://img.etimg.com/thumb/msid-101835921,width-300,height-225,imgsize-46466,,resizemode-75/india-us-flag.jpg"
      },
      {
        title: "India puts up new hurdle to importing electricity from Nepal",
        content: "India is subjecting the approval process for importing Nepali electricity to more bureaucratic hurdles despite its earlier announcement to buy 10,000MW from Nepal over the next 10 years.",
        link: "https://kathmandupost.com/national/2023/07/17/india-puts-up-new-hurdle-to-importing-electricity-from-nepal",
        image: "https://assets-api.kathmandupost.com/thumb.php?src=https://assets-cdn.kathmandupost.com/uploads/source/news/2023/third-party/thumb-1689557365.png&w=900&height=601"
      },]
    },
    {
      row: 2,
      posts: [{
        title: "IMF board green-lights long-awaited $3bn loan",
        content: "The International Monetary Fund (IMF) said that its executive board had approved a US$3bn loan agreement for Pakistan, unlocking crucial funding for the troubled economy.",
        link: "https://www.dawn.com/news/1764390/imf-board-green-lights-long-awaited-3bn-loan",
        image: "https://estateland.com.pk/wp-content/uploads/2023/07/IMF-board-green-lights-long-awaited-3bn-loan-1030x451.jpg"
      },
      {
        title: "Sri Lanka attempts to join the world largest trade bloc to heal economy",
        content: "Sri Lanka has initiated steps to join the world's largest free trade zone called 'Regional Comprehensive Economic Partnership (RCEP) ', a trade grouping of countries including key world economies such as China, Australia and Japan.",
        link: "https://www.dailymirror.lk/top_story/Sri-Lanka-attempts-to-join-the-world-largest-trade-bloc-to-heal-economy/155-263344 ",
        image: "https://bmkltsly13vb.compat.objectstorage.ap-singapore-1.oraclecloud.com/cdn.sg.dailymirror.lk/assets/uploads/image_caf156763f.jpg"
      },]
    },
    {
      row: 3,
      posts: [
        {
          title: "Nepali exports to US falling despite preferential treatment",
          content: "The United States has granted trade preferential treatment to Nepal, but traders have not been able to benefit from it because they don't know how.",
          link: "https://kathmandupost.com/money/2023/07/20/nepali-exports-to-us-falling-despite-preferential-treatment",
          image: "https://assets-api.kathmandupost.com/thumb.php?src=https://assets-cdn.kathmandupost.com/uploads/source/news/2023/money/test-1689863870.jpg&w=900&height=601"
        },
        {
          title: "El Niño weighs on Bangladesh’s agriculture",
          content: "Extreme weather events, such as heatwaves and a drought-like situation, are already affecting the agriculture sector of Bangladesh.",
          link: "https://www.thedailystar.net/business/economy/news/el-nino-weighs-bangladeshs-agriculture-3374666",
          image: "https://tds-images.thedailystar.net/sites/default/files/styles/big_202/public/images/2023/07/21/aush.jpg?itok=cP9PJJkw&timestamp=1689887471"
        },]
    },
    {
      row: 4,
      posts: [
        {
          title: "Sri Lanka relaxes capital controls for first time in over 3 years",
          content: "The Sri Lankan government announced easing of certain restrictions hitherto slapped on outward remittances since April 2020, amid improving domestic foreign exchange position.",
          link: "https://www.dailymirror.lk/print/top_story/Sri-Lanka-relaxes-capital-controls-for-first-time-in-over-3-years/155-263900",
          image: "https://www.bnnbloomberg.ca/polopoly_fs/1.1950087.1690256482!/fileimage/httpImage/image.png_gen/derivatives/landscape_620/image.png"
        },
        {
          title: "Silicon Power to invest $121.7 mn in semiconductor plant in Odisha",
          content: "U.S.-based Silicon Power Group will invest US$121.73 million) to set up a facility in India's Odisha state to make 150 millimetre silicon carbide, a semiconductor component.",
          link: "https://www.business-standard.com/companies/news/silicon-power-to-invest-121-7-mn-in-semiconductor-plant-in-odisha-123072800091_1.html",
          image: "https://bsmedia.business-standard.com/_media/bs/img/article/2021-12/16/full/1639599306-9897.jpg?im=FeatureCrop,size=(826,465)"
        }]
    },

  ],
  events: [{
    title: "Economic Journalism Workshop in Madhesh Province",
    content: "South Asia Watch on Trade, Economics and Environment (SAWTEE) in collaboration with the Society of Economic Journalists (SEJON) organized a workshop for economic journalists to build their capacity in covering issues related to balance of payments, Nepal-India trade and transit treaty, examining trade through gender lens, Nepal-Bangladesh trade, and LDC graduation. The workshop was held in Janakpur on 1-2 August 2023.",
    link: "https://sawtee.org/featured-events/workshop-for-economic-journalists-in-madhesh-province.html"
  }],
  publications: [],
  opinion: {
    title: "Digital payment integration to facilitate cross border payment in South Asia",
    paraone: "Despite a large volume of movement of payments between Nepal and India, a lack of digital payments integration between the two countries has been creating issues for tourists. The MoU signed by the two countries’ national payment system providers in June this year has paved the way for cross-border digital payment integration.",
    paratwo: "Globally and in Nepal, the COVID-19 pandemic accelerated the use of digital and contactless payments as the fear of direct contact through transfers has accelerated the use of cashless transactions. New payment instruments have evolved in the payment system: Quick Response (QR) codes, Instant payment systems (IPS), cardless withdrawal, Smart Point-of-Sale (POS), NFC technologies and virtual cards. Digital payment is transparent compared to cash transactions and can reduce the circulation of cash, whose printing costs are quite expensive to the national coffer. Nepal Rastra Bank (NRB), the central bank, has been encouraging the use of digital payment systems.",
    link: "https://sawtee.org/opinion-in-lead/digital-payment-integration-to-facilitate-cross-border-payment-in-south-asia.html"
  },
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
      </Head>
      <Preview>{Data.subtitle + " | " + Data.issue}</Preview>
      <Body style={main}>
        {/* Header section Start */}
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
        {/* Header section End */}

        <Container style={container}>

          {/* Logo and social nav section Start */}
          <Section style={{ padding: '20px 30px 0' }} >
            <Column>
              <Img
                src="https://sawtee.org/images/logo_sawtee.jpg"
                width="120"
                height="auto"
                alt="SAWTEE"
              />
            </Column>
            <Column style={{ display: 'inline-flex', float: 'right' }}>
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
          </Section>
          {/* Logo and social nav section Start */}

          <Hr style={hr} />

          {/* Opinion in Lead Start */}
          {Data.opinion.title && <Section style={section} >
            <Heading as="h2" style={section_heading}>Opinion in Lead</Heading>
            <Heading as='h3' style={section_title}>{Data.opinion.title}</Heading>
            <Text style={paragraph}>
              {Data.opinion.paraone}
            </Text>
            <Text style={paragraph}>
              {Data.opinion.paratwo}
            </Text>
            <Section style={{ textAlign: 'center' as const, marginTop: '20px' }}>
              <Button
                pX={10}
                pY={10}
                style={ButtonStyle}
                href={Data.opinion.link}
              >
                Read More
              </Button>
            </Section>

          </Section>}
          {/* Opinion in Lead End*/}

          {/* Report Start */}
          {/* {Data.report !== undefined &&
            (
              <Section style={publication_events_section}>
                <Heading as='h2' style={section_heading}>Report</Heading>
                {Data.report.title && <Heading as='h3' style={section_title}>{Data.report.title}</Heading>}

                {Data.report.image && <Img src={Data.report.image} width="300px" height="auto" alt={Data.report.title} style={{ margin: "20px auto" }} />}
                {Data.report.content && <Text style={paragraph}>{Data.report.content}</Text>}
                {Data.report.link && <Button
                  pX={10}
                  pY={10}
                  style={ButtonStyle}
                  href={Data.report.link}
                >
                  Read More
                </Button>}
              </Section>
            )
          } */}
          {/* Report End */}

          {/* News Start */}
          <Section style={section}>
            <Heading as='h2' style={section_heading}>News</Heading>
            {
              Data.news ? Data.news.map((item) => {
                return (
                  <Section key={item.row} style={{ paddingBottom: '50px', minHeight: "280px" }} >
                    {item.posts ? item.posts.map(({ title, link, content, image }) => {
                      return (
                        <Column key={title} style={{ float: 'left', padding: ' 0 2%', width: '46%', }}>
                          <Link href={link}><Img width='100%' height='180' alt={title} title={title} src={image ? image : `https://placehold.co/280x180/e4e4e4/006181?text=${title}`} /></Link>
                          < Heading style={news_title} as='h3'>{title}</Heading>
                          <Text style={paragraph}>{content}</Text>
                          <Link style={news_link} href={link}>Read More</Link>
                        </Column>
                      )
                    }) : null}
                  </Section>
                )
              }) : null
            }

          </Section>
          {/* News End */}

          {/* Events Start */}
          {Data.events.length > 0 ?
            (<>
              <Section style={{ backgroundColor: '#E8F5F2', padding: '20px 30px', }}>
                <Heading as='h2' style={section_heading}>Events</Heading>
                {Data.events.map((event) => {
                  return (
                    <Section key={event.title}>
                      <Heading as='h3' style={section_title}>{event.title}</Heading>
                      <Text style={paragraph}>{event.content}</Text>
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

            </>) : null
          }

          {/* Publication Start */}
          {Data.publications && Data.publications.length > 0 ?
            (
              <>
                <Section style={publication_events_section}>
                  <Heading as='h2' style={section_heading}>Publications</Heading>
                  {Data.publications.map(({ title, content, link, image }) => {
                    return (
                      <Section key={title} style={{ paddingBottom: "50px" }}>
                        {image &&
                          <Container style={{ margin: "20px 0 40px 0" }} >
                            <Link href={link}> <Img src={image} width="250px" height="auto" alt={title} style={{ margin: "0 auto" }} title={title} /></Link>
                          </Container>
                        }
                        {/* <Heading as='h3' style={section_title}>{title}</Heading> */}
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
                <Section style={publication_events_section}>
                  <Hr style={{ margin: "30px 0", borderTop: "1px solid #00618173" }} />
                </Section>
              </>
            ) : null
          }
          {/* Publication End */}

          {/* Footer Start */}
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
                color: '#8898aa',
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
          {/* Footer End */}

        </Container>
      </Body>
    </Html >
  );
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
  color: '#525f7f',
  fontSize: '13px',
  fontFamily: '"Verdana", serif',
  lineHeight: '1.5',
  textAlign: 'left',
  wordBreak: 'break-word',
};

const anchor = {
  color: '#556cd6',
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

const news_link = {
  color: '#006181',
  textDecoration: 'underline',
  fontWeight: 'bold',
  fontFamily: 'monospace',

}

const footer = {
  color: '#222',
  fontSize: '12px',
  lineHeight: '16px',
  padding: '0', margin: '0',
};

const footer_section = {
  padding: '0 48px 20px ',
  textAlign: textAlign,
}

const footer_headings = {
  fontSize: '18px',
  fontFamily: 'monospace',
  padding: '0', paddingBottom: '5px', margin: '0',
}

const ButtonStyle = {
  backgroundColor: '#006181',
  fontFamily: 'monospace',
  color: '#fff',
  fontSize: '16px',
  textDecoration: 'none',
  textTransform: 'uppercase',
  textAlign: textAlign,
  display: 'block',
  width: '95%',
}