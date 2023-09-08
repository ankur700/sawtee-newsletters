import * as React from 'react';
import { Button, Container, Head, Hr, Html, Img, Link, Preview, Section, Column, Heading, Text, Font, Body } from '@react-email/components';

const textAlign = "center" as const;

const Data = {
  title: 'TRADE, CLIMATE CHANGE AND DEVELOPMENT MONITOR',
  subtitle: 'Monthly E-Newsletter of South Asia Watch on Trade, Economics and Environment',
  issue: 'Volume 20, Issue 08, August 2023',
  news: [
    {
      row: 1,
      posts: [{
        title: "India permits white rice exports to Singapore, Bhutan, Mauritius",
        content: "India has allowed the export of non-basmati white rice to Bhutan, Mauritius, and Singapore, allocating export quotas for these countries, with 79,000 metric tons to Bhutan, 50,000 tons to Singapore, and 14,000 tons to Mauritius.",
        link: "https://economictimes.indiatimes.com/news/economy/foreign-trade/india-permits-white-rice-exports-to-singapore-bhutan-mauritius/articleshow/103220204.cms?utm_source=contentofinterest&utm_medium=text&utm_campaign=cppst",
        image: "https://img.etimg.com/thumb/msid-103220188,width-300,height-225,imgsize-43334,,resizemode-75/rice-export.jpg"
      },
      {
        title: "India imposes 40% duty on onion exports",
        content: "India imposed an export duty of 40 percent on onions with immediate effect to check price rise and improve supplies in the domestic market.",
        link: "https://economictimes.indiatimes.com/news/economy/foreign-trade/govt-imposes-40-pc-export-duty-on-onion-exports-till-december-31/articleshow/102860369.cms?utm_source=contentofinterest&utm_medium=text&utm_campaign=cppst",
        image: "https://economictimes.indiatimes.com/thumb/msid-102860382,width-1200,height-900,resizemode-4,imgsize-92104/2.jpg?from=mdr"
      },]
    },
    {
      row: 2,
      posts: [{
        title: "Contraband trade causing milk glut in local markets",
        content: "Indian milk is being smuggled into Nepal in large quantities because of the higher prices here, traders said. As a result, there is a milk glut in the local market despite a drop in domestic production.",
        link: "https://kathmandupost.com/money/2023/08/14/contraband-trade-causing-milk-glut-in-local-markets",
        image: "https://assets-api.kathmandupost.com/thumb.php?src=https://assets-cdn.kathmandupost.com/uploads/source/news/2023/money/0moneyleadmilk-1692022157.jpg&w=900&height=601"
      },
      {
        title: "Nepal exports 670 tonnes of tomatoes in 2 weeks to India",
        content: "After India opened import of Nepali tomatoes, the country has exported 670 tonnes of tomatoes in the last two weeks.",
        link: "https://english.onlinekhabar.com/nepal-tomatoes-export-india.html",
        image: "https://english.onlinekhabar.com/wp-content/uploads/2023/08/Tomato.jpg"
      },]
    },
    {
      row: 3,
      posts: [
        {
          title: "India halts export of basmati rice priced below $1,200/tonne",
          content: "India has decided to halt exports of basmati rice priced below $1,200 a tonne to restrict possible 'illegal' shipment of white non-basmati rice in the garb of the premium basmati rice.",
          link: "https://economictimes.indiatimes.com/news/economy/foreign-trade/export-of-basmati-rice-priced-below-1200/tonne-halted/articleshow/103110700.cms?utm_source=contentofinterest&utm_medium=text&utm_campaign=cppst",
          image: "https://img.etimg.com/thumb/msid-103110705,width-300,height-225,imgsize-2392841,,resizemode-75/basmati-rice.jpg"
        },
        {
          title: "China exports see biggest drop for three years",
          content: "China's imports and exports fell more sharply than expected last month as weaker global demand threatened the recovery prospects of the world's second-largest economy.",
          link: "https://www.bbc.com/news/business-66436582",
          image: "https://ichef.bbci.co.uk/news/976/cpsprodpb/11D3B/production/_130691037_whatsubject.jpg.webp"
        },]
    },
    {
      row: 4,
      posts: [
        {
          title: "Cargo movement on Indo-Bangla water routes falls",
          content: "Local vessels transported a lower number of cargoes between India and Bangladesh in the fiscal year 2022-23 than the previous year because of a decline in imports.",
          link: "https://www.thedailystar.net/business/economy/news/cargo-movement-indo-bangla-water-routes-falls-3388111",
          image: "https://tds-images.thedailystar.net/sites/default/files/styles/big_202/public/images/2023/08/06/cargo-movement.gif?itok=2NTop7SX&timestamp=1691342051"
        },
        {
          title: "Ocean heat record broken, with grim implications for the planet",
          content: "The oceans have hit their hottest ever recorded temperature as they soak up warmth from climate change, with dire implications for our planet's health.",
          link: "https://www.bbc.com/news/science-environment-66387537",
          image: "https://ichef.bbci.co.uk/news/976/cpsprodpb/3434/production/_130646331_coral-gettyimages-1148857258.jpg.webp"
        }]
    },

  ],
  events: [{
    title: "Workshop for economic journalists in Madhesh Province",
    content: "South Asia Watch on Trade, Economics and Environment (SAWTEE) in collaboration with the Society of Economic Journalists (SEJON) organized a workshop for economic journalists to build their capacity in covering issues related to balance of payments, Nepal-India trade and transit treaty, examining trade through gender lens, Nepal-Bangladesh trade, and LDC graduation. The workshop was held in Janakpur on 1-2 August 2023.",
    link: "https://sawtee.org/featured-events/workshop-for-economic-journalists-in-madhesh-province.html"
  }],
  publications: [
    {
      title: 'Trade Insight (Vol 19, No 1-2, 2023): Financing climate action',
      content: 'This issue of Trade Insight features several articles on climate change. The cover article discusses the state of play in climate finance and argues that even as climate aid falls short of pledges, blended finance could emerge as a crucial financing mechanism for sustainable development. Another article points out that while the action plans on climate finance set in motion by the United Nations are in the right direction, efforts in climate finance are dwarfed by continued investments in business as usual. Unpacking recent measures in green protectionism, an article argues that as global superpowers race to become clean energy leaders, initiatives that support developing countries to join should be developed in line with the principle of common but differentiated responsibilities and respective capabilities.',
      link: 'https://sawtee.org/publications/Trade_Insight_Vol_19_No_1-2_2023.pdf',
      image: 'https://sawtee.org/Web_images/Trade_Insight_Vol_19_No_1-2_2023_cover_image.jpg'
    }
  ],
  opinion: {
    title: "Nepal’s agricultural trade within BIMSTEC",
    paragraphOne: "Different trade agreements offer hope of diversifying the export basket and destinations, especially to a net importing country like Nepal, which is desperately trying to expand markets for its agrarian produce. Diversification of markets has become an imperative for Nepal considering the impending graduation from the least developed country (LDC) status and resulting loss of trade preferences. Regional trade arrangements such as the Agreement on South Asian Free Trade Area (SAFTA) and the trade agreement being negotiated under the Bay of Bengal Initiative for Multi-Sectorial Technical and Economic Cooperation (BIMSTEC) could in principle offer a respite in terms of market access. However, as SAFTA has generated very little intra-regional trade, BIMSTEC is often touted as a better alternative given the lower amount of inter-state tensions within it. For Nepal, the question is if BIMSTEC could effectively offer improved trading arrangements with regard to agricultural and food products.",
    paragraphTwo: "",
    link: "https://sawtee.org/opinion-in-lead/nepal%E2%80%99s-agricultural-trade-within-bimstec.html"
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
              {Data.opinion.paragraphOne}
            </Text>
            <Text style={paragraph}>
              {Data.opinion.paragraphTwo}
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
                          <Link href={link}><Img style={Image_Style} width='265' height='180' alt={title} title={title} src={image ? image : `https://placehold.co/280x180/e4e4e4/006181?text=${title}`} /></Link>
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

const Image_Style = {
  display: "block",
  width: "100%",
  objectFit: "cover",
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