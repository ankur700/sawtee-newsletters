import { Button } from '@react-email/button';
import { Container } from '@react-email/container';
import { Head } from '@react-email/head';
import { Hr } from '@react-email/hr';
import { Html } from '@react-email/html';
import { Img } from '@react-email/img';
import { Link } from '@react-email/link';
import { Preview } from '@react-email/preview';
import { Section } from '@react-email/section';
import { Column } from '@react-email/column';
import { Heading } from '@react-email/heading';
import { Text } from '@react-email/text';
import * as React from 'react';

const Data = {
  title: 'TRADE, CLIMATE CHANGE AND DEVELOPMENT MONITOR',
  subtitle: 'Monthly E-Newsletter of South Asia Watch on Trade, Economics and Environment',
  issue: 'Volume 20, Issue 04, April 2023',
  news: [
    {
      row: 1,
      posts: [{
        title: "Nepali traders laud reopening of Rasuwagadhi-Kerung border point",
        content: "Nepali traders are delighted by China’s decision to reopen the northern border that has remained closed for three years, but insiders say it may be too soon to celebrate as Beijing's policy has been inconsistent.",
        link: "https://kathmandupost.com/money/2023/04/02/nepali-traders-laud-reopening-of-rasuwagadhi-kerung-border-point",
        image: "https://assets-api.kathmandupost.com/thumb.php?src=https://assets-cdn.kathmandupost.com/uploads/source/news/2023/third-party/chinaweb-1680447739.jpg&w=900&height=601"
      },
      {
        title: "Nepal seeks 25-year bilateral deal with India to sell power",
        content: "Nepal wants to sign a long-term intergovernmental agreement with India on selling Nepal’s excess power to the southern neighbour during the upcoming India visit of Prime Minister Pushpa Kamal Dahal.",
        link: "https://kathmandupost.com/money/2023/04/02/nepal-seeks-25-year-bilateral-deal-with-india-to-sell-power",
        image: "https://assets-api.kathmandupost.com/thumb.php?src=https://assets-cdn.kathmandupost.com/uploads/source/news/2023/third-party/thumb3-1680398525.jpg&w=900&height=601"
      },]
    },
    {
      row: 2,
      posts: [{
        title: "World economy faces weakest growth since 1990",
        content: "The global economy is set to grow at roughly 3 percent over the next five years - the slowest pace since 1990, the head of the International Monetary Fund has said.",
        link: "https://www.bbc.com/news/business-65206409",
        image: "https://ichef.bbci.co.uk/news/976/cpsprodpb/1280D/production/_129298757_whatsubject.jpg.webp"
      },
      {
        title: "Bangladesh govt forms RMG wage board",
        content: "The Bangladesh government formed minimum wage board to review the wages of the readymade garment workers through appointment of owners’ and workers’ representatives of the RMG sector to the board.",
        link: "https://www.newagebd.net/article/199058/govt-forms-rmg-wage-board",
        image: "https://www.newagebd.com/files/records/news/202304/199058_120.jpg"
      },]
    },
    {
      row: 3,
      posts: [
        {
          title: "Pakistan set to push shift from gas to electricity",
          content: "The Pakistan government plans to embark on a 10-year transition strategy to shift from gas to electricity in commercial, industrial and residential sectors, and push energy-efficient buildings.",
          link: "https://www.dawn.com/news/1746875/govt-set-to-push-shift-from-gas-to-electricity-energy-efficient-buildings",
          image: "https://i.dawn.com/thumbnail/2023/03/060840097990535.jpg?r=084222"
        },
        {
          title: "India loses ICT levy dispute at WTO ",
          content: "A World Trade Organisation dispute panel has ruled against India's import duty on mobile phones and other electronics products. The panel agreed with a complaint lodged by the European Union, Japan and Taiwan that India had breached global trade rules with the tariff.",
          link: "https://economictimes.indiatimes.com/news/economy/foreign-trade/india-loses-ict-levy-dispute-at-wto/articleshow/99570345.cms?utm_source=contentofinterest&utm_medium=text&utm_campaign=cppst",
          image: "https://img.etimg.com/thumb/msid-99570963,width-300,height-225,imgsize-67628,,resizemode-75/file-photo-a-logo-is-seen-at-the-wto-in-geneva.jpg"
        },]
    },
    {
      row: 4,
      posts: [
        {
          title: "SL’s rice output projected to recover",
          content: "Sri Lanka’s rice output is on track to fully recover to the pre-fertiliser import ban levels next year, as the farmers regain access to imported chemical fertilisers with the approval IMF loan.",
          link: "https://www.dailymirror.lk/breaking_news/SLs-rice-output-projected-to-recover-to-pre-fertiliser-ban-levels-next-year/108-257984#:~:text=The%20USDA%20predicted%20Sri%20Lanka's,the%202022%2F2023%20market%20year",
          image: "https://bmkltsly13vb.compat.objectstorage.ap-singapore-1.oraclecloud.com/cdn.sg.dailymirror.lk/assets/uploads/image_7a3d847504.jpg"
        },
        {
          title: "EU’s carbon border tax will render ongoing FTA negotiations ineffective",
          content: "The EU's proposed carbon border tax, set to be implemented from 2026, would cause significant trade disruption, weaken obligations under the World Trade Organisation (WTO) and render existing free trade agreements (FTA) ineffective.",
          link: "https://economictimes.indiatimes.com/news/economy/foreign-trade/eus-carbon-border-tax-will-render-ongoing-fta-negotiations-ineffective-says-grtis-ajay-srivastava/articleshow/99703802.cms?utm_source=contentofinterest&utm_medium=text&utm_campaign=cppst",
          image: "https://cdn.vox-cdn.com/thumbor/PVfCb8j7fUFKbRpj8SoSWwYDoRk=/0x0:3000x2400/920x613/filters:focal(1724x853:2204x1333):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/60431081/shutterstock_586114652.0.jpg"
        }]
    },

  ],
  events: [
    {
      title: "Roundtable discussion on Nepal-India treaty of trade",
      content: "SAWTEE organized a roundtable discussion on 6 April 2023 to seek inputs from relevant stakeholders regarding the required amendments and revisions to the Nepal-India Trade treaty to enhance trade between Nepal and India for mutual benefit.",
      link: "https://sawtee.org/featured-events/roundtable-discussion-on-nepal-india-treaty-of-trade.html"
    }
  ],
  publications: [
    {
      title: "Trade Policy Mainstreaming in Federal Nepal",
      content: "This Policy Brief investigates the roles that the federal trade policies provide or envision for subnational governments, the current level of mainstreaming of trade in subnational governments’ plans, policies, and strategies, and coherence and complementarity in the trade- related policies and strategies of federal and subnational governments.",
      link: "https://sawtee.org/publications/Policy_Brief_44.pdf"
    },
    {
      title: "BIMSTEC Master Plan on Connectivity: An Undertaking in Enhancing Regional Integration",
      content: "This issue paper discusses the details of the master plan, its importance for connectivity in the region, and gaps and challenges that characterize the Master Plan and highlights potential challenges in implementing the plan & identifies gaps that need to be addressed.",
      link: "https://sawtee.org/publications/Issue_Paper_10.pdf"
    },
    {
      title: "Enhancing intraregional investment in South Asia",
      content: "This issue brief highlights the low level of intraregional investment in South Asia and identifies it as a significant contributor to the region's poor economic integration. The paper suggests that addressing barriers to regional investment can unlock the potential for increased economic cooperation and resilience in the face of emerging trends.",
      link: "https://sawtee.org/publications/Issue_Paper_11.pdf"
    },
    {
      title: "Economic diplomacy for better export performance of Nepal",
      content: "This Policy Brief explores how economic diplomacy can be a tool to diversify products and better grasp the opportunities available in destination countries for better export performance of Nepal.",
      link: "https://sawtee.org/publications/Policy_Brief_45.pdf"
    }
  ]
}

export default function Email() {

  return (
    <Html>
      <Head />
      <Preview>{Data.subtitle + " | " + Data.issue}</Preview>
      <Section style={main}>
        <Section style={header}>
          <Heading as='h1' style={header_top}>
            {Data.title}
          </Heading>
          <Section style={header_bottom}>
            <Column>
              <span style={{ float: 'left' }}>
                {Data.subtitle}
              </span>
            </Column>
            <Column>
              <span style={{ float: 'right' }}>{Data.issue}</span>
            </Column>
          </Section>
        </Section>
        <Container style={container}>
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
          <Hr style={hr} />

          {/* Opinion in Lead Start */}

          <Section style={section} >
            <Heading as='h2' style={section_heading}>Opinion in Lead</Heading>
            <Heading as='h3' style={section_title}>Revisions to Nepal-India trade treaty overdue</Heading>
            <Text style={paragraph}>
              With the Nepal-India Treaty of Trade up for renewal this year, the Nepal government should seek revisions to the treaty with a view to enhancing mutual benefits from the same.
            </Text>
            <Text style={paragraph}>
              Influential voices have been suggesting that the treaty be revised to protect Nepali farmers from unfettered agricultural imports. Under the current treaty, Nepal and India provide one another duty-free access for agriculture products. Nepal levies an agriculture reform fee of 5 percent or 9 percent on certain agricultural products from India. Nepal has the latitude to impose much higher tariffs than the current rate but that option has been hamstrung by the Nepal-India trade treaty. The question is whether Nepal can continue to afford providing tariff-free access to heavily subsidized agricultural products from India. One option is to remove select primary agricultural products, including cereals, from the list of primary products on which both countries are currently providing reciprocal tariff-free access.
            </Text>
            <Section style={{ textAlign: 'center' as const, marginTop: '20px' }}>
              <Button
                pX={10}
                pY={10}
                style={ButtonStyle}
                href="https://sawtee.org/opinion-in-lead/revisions-to-nepal-india-trade-treaty-overdue.html"
              >
                Read More
              </Button>
            </Section>

          </Section>

          {/* Opinion in Lead End*/}

          {/* News Start */}

          <Section style={section}>
            <Heading as='h2' style={section_heading}>News</Heading>
            {
              Data.news && Data.news.map((item) => {
                return (
                  <Section key={item.row} style={{ paddingBottom: '50px', minHeight: "280px" }} >
                    {item.posts && item.posts.map((post, idx) => {
                      return (
                        <Column key={'0' + idx} style={{ float: 'left', padding: ' 0 2%', width: '46%', }}>
                          <Link href={post.link}><Img width='100%' height='180' alt={post.title} title={post.title} src={post.image ? post.image : "/static/placeholer-image.svg"} /></Link>
                          <Heading style={news_title} as='h3'>{post.title}</Heading>
                          <Text style={paragraph}>{post.content}</Text>
                          <Link style={news_link} href={post.link}>Read More</Link>
                        </Column>
                      )
                    })}
                  </Section>
                )
              })
            }

          </Section>

          {/* News End */}

          {/* Events Start */}

          <Section style={{ backgroundColor: '#E8F5F2', padding: '20px 30px', }}>
            <Heading as='h2' style={section_heading}>Events</Heading>
            {Data.events && Data.events.map((event) => {
              return (
                <Section>
                  <Heading as='h3' style={section_title}>{event.title}</Heading>
                  <Text style={paragraph}>{event.content}</Text>
                  <Button
                    pX={10}
                    pY={10}
                    style={ButtonStyle}
                    href={event.link}
                  >
                    Read More
                  </Button>
                </Section>
              )
            })}

          </Section>
          {/* Events End */}
          <Section style={publication_events_section}>
            <Hr style={{ margin: "30px 0", borderTop: "1px solid #00618173" }} />
          </Section>

          {/* Publication Start */}

          <Section style={publication_events_section}>
            <Heading as='h2' style={section_heading}>Publications</Heading>

            {/* <Img src="https://sawtee.org/Web_images/SN_April_2023_Publication_section_cover.jpg" width="100%" height="auto" style={{ margin: "10px 0 30px 0", objectFit: "cover" }} /> */}

            {Data.publications && Data.publications.map((publication) => {
              return (
                <Section style={{ paddingBottom: "50px" }}>
                  <Heading as='h3' style={section_title}>{publication.title}</Heading>
                  <Text style={paragraph}>{publication.content}</Text>
                  <Button
                    pX={10}
                    pY={10}
                    style={ButtonStyle}
                    href={publication.link}
                  >
                    Read More
                  </Button>
                </Section>
              )
            })}
          </Section>

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
              <Img src="https://sawtee.org/images/logo_sawtee.jpg" width="150" height="auto" style={{ margin: '0 auto', marginBottom: '10px' }} />
              <Button style={{
                backgroundColor: '#006181',
                borderRadius: '30px',
                color: '#fff',
                fontFamily:
                  '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Ubuntu,sans-serif',
                fontSize: '18px',
                fontWeight: 'bold',
                textDecoration: 'none',
                textTransform: 'uppercase',
                display: 'block',
                textAlign: 'center' as const,
              }} pX={20}
                pY={10} href="https://www.sawtee.org/">Visit Website</Button>
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
            </Section>

          </Section>

          {/* Footer End */}

        </Container>
      </Section>
    </Html>
  );
}

const main = {
  backgroundColor: 'hsl(45, 38%, 94%)',
};

const publications_link = {
  color: '#fff',
  fontSize: '12px',
  fontWeight: 'normal',
  fontFamily: '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Ubuntu,sans-serif',
}

const container = {
  backgroundColor: '#ffffff',
  margin: '0 auto',
  marginBottom: '64px',
  maxWidth: '40em'
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
  textAlign: 'center' as const,
  color: '#7fc4fd',
  fontSize: '24px',
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Ubuntu,sans-serif',
  padding: '20px 0 10px'
}

const header_bottom = {
  padding: '20px',
  color: '#efefef',
  fontSize: '12px',
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Ubuntu,sans-serif',
  fontWeight: 500,
}

const social_links = {
  paddingRight: '5px'
}

const hr = {
  borderColor: '#e6ebf1',
  // borderColor: '#efefef',
  margin: '20px 0',
};

const section_heading = {
  fontSize: '20px',
  fontWeight: 'bold',
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Ubuntu,sans-serif',
  paddingBottom: '10px',
  margin: '0'
}

const section_title = {
  fontSize: '16px',
  color: '#006181',
  fontWeight: 'bold',
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Ubuntu,sans-serif',
  paddingBottom: '10px',
  margin: '0'
}

const paragraph = {
  color: '#525f7f',
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Ubuntu,sans-serif',
  fontSize: '16px',
  lineHeight: '24px',
  textAlign: 'left' as const,
  wordBreak: 'break-word'
};

const report_para = {
  color: '#525f7f',
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Ubuntu,sans-serif',
  fontSize: '16px',
  lineHeight: '24px',
  textAlign: 'justify' as const,
  wordBreak: 'break-all'
}

const anchor = {
  color: '#556cd6',
  textDecoration: 'underline',
  textUnderlineOffset: '3px'
};

const publication_events_section = {
  backgroundColor: '#E8F5F2', padding: '0px 30px',
}


const news_title = {
  fontSize: '16px',
  color: '#006181',
  fontWeight: 'bold',
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Ubuntu,sans-serif',
  paddingTop: '10px',
  lineHeight: '1.5',
  margin: '0'
}

const news_link = {
  color: '#006181',
  textDecoration: 'underline',
  fontWeight: 'bold',
  fontFamily: 'monospace'

}

const footer = {
  color: '#222',
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Ubuntu,sans-serif',
  fontSize: '12px',
  lineHeight: '16px',
  padding: '0', margin: '0'
};

const footer_section = {
  padding: '0 48px 20px ',
  textAlign: 'center' as const,
  // backgroundColor: '#ECE8F5'
}
const footer_headings = {
  fontSize: '18px', fontFamily:
    '-apple-system,BlinkMacSystemFont,monospace,"Segoe UI",Roboto,"Helvetica Neue",Ubuntu,sans-serif',
  padding: '0', paddingBottom: '5px', margin: '0'
}

const ButtonStyle = {
  backgroundColor: '#006181',
  borderRadius: '5px',
  color: '#fff',
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Ubuntu,sans-serif',
  fontSize: '16px',
  fontWeight: 'bold',
  textDecoration: 'none',
  textTransform: 'uppercase',
  textAlign: 'center' as const,
  display: 'block',
  width: '95%',
}