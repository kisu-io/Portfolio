import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'

import thumbDisney from '../public/images/works/disney.png'
import thumbGoogle from '../public/images/works/google.png'
import thumbRobovDino from '../public/images/works/robotvdino.png'
import thumbSpotify from '../public/images/works/spotify.png'

const Works = () => (
  <Layout title="Works">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Works
      </Heading>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
          <WorkGridItem id="disney" title="Disney+" thumbnail={thumbDisney}>
            A Disney+ Clone with full-feature and backend created with FireBase
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem
            id="google"
            title="Google Clone"
            thumbnail={thumbGoogle}
          >
            Google Landing Page with link to real Google
          </WorkGridItem>
        </Section>

        <Section delay={0.1}>
          <WorkGridItem
            id="Robot vs Dino"
            title="Robot vs Dino"
            thumbnail={thumbRobovDino}
          >
            A canvas "Plant vs Zombie" style game
          </WorkGridItem>
        </Section>
        <Section delay={0.1}>
          <WorkGridItem
            id="spotify"
            thumbnail={thumbSpotify}
            title="Spotify Clone"
          >
            A Spotify React-Clone
          </WorkGridItem>
        </Section>
      </SimpleGrid>
    </Container>
  </Layout>
)

export default Works
