import NextLink from 'next/link'
import {
  Link,
  Container,
  Heading,
  Box,
  Image,
  SimpleGrid,
  Button,
  List,
  ListItem,
  Icon,
  useColorModeValue
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Section from '../components/section'
import Layout from '../components/layouts/article'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'
import { GridItem } from '../components/grid-item'
import {
  IoLogoTwitter,
  IoLogoInstagram,
  IoLogoGithub,
  IoLogoDiscord
} from 'react-icons/io5'
import thumbEzCoin from '../public/images/links/ezcoin.jpeg'

const Page = () => {
  return (
    <Layout>
      <Container>
        <Box
          borderRadius="lg"
          bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
          p={3}
          mb={6}
          align="center"
        >
          Hello, I&apos;m a full-stack developer based in Vietnam!
        </Box>
        <Box display={{ md: 'flex' }}>
          <Box flexGrow={1}>
            <Heading as="h2" variant="page-title">
              Vu Pham Khoi Nguyen
            </Heading>
            <p>Next-gen Maker (Full-Stack Developer / Sound Engineer )</p>
          </Box>
          <Box
            flexShrink={0}
            mt={{ base: 4, md: 0 }}
            ml={{ md: 6 }}
            align="center"
          >
            <Image
              borderColor="whiteAlpha.800"
              borderWidth={2}
              borderStyle="solid"
              maxWidth="100px"
              display="inline-block"
              borderRadius="full"
              src="/images/khoi.jpeg"
              alt="Profile image"
            />
          </Box>
        </Box>
        <Section delay={0.1}>
          <Heading as="h3" variant="section-title">
            Work
          </Heading>
          <Paragraph>
            Vu Pham Khoi Nguyen is a full-stack developer based in Ho Chi Minh
            City with a passion for building digital websites and softwares. He
            has a fond of all things related to launching products, from
            planning and designing all the way to solving real-life problems
            with coding.
          </Paragraph>
          <Box align="center" my={4}>
            <NextLink href="/works">
              <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
                My portfolio
              </Button>
            </NextLink>
          </Box>
        </Section>
        <Section delay={0.2}>
          <Heading as="h3" variant="section-title">
            Bio
          </Heading>
          <BioSection>
            <BioYear>1996</BioYear>
            Born in Hanoi, Vietnam.
          </BioSection>
          <BioSection>
            <BioYear>2017</BioYear>
            Bachelor&apos;s Program in the Tourism Management at Sunderland
            University
          </BioSection>
          <BioSection>
            <BioYear>2018</BioYear>
            Worked at Muse Inc
          </BioSection>
          <BioSection>
            <BioYear>2021</BioYear>
            Worked at Nomu Restaurant & Bar
          </BioSection>
        </Section>

        <Section delay={0.3}>
          <Heading as="h3" variant="section-title">
            I ♥
          </Heading>
          <Paragraph>
            Art, Futuristic Design,{' '}
            <Link href="https://soundcloud.com/kisuvn" target="_blank">
              Music Production
            </Link>
            , Blockchain.
          </Paragraph>
        </Section>

        <Section delay={0.3}>
          <Heading as="h3" variant="section-title">
            On the web
          </Heading>
          <List>
            <ListItem>
              <Link href="https://github.com/kisu-io" target="_blank">
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<Icon as={IoLogoGithub} />}
                >
                  @kisu-io
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link href="https://twitter.com/kisuvn" target="_blank">
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<Icon as={IoLogoTwitter} />}
                >
                  @kisuvn
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link href="https://instagram.com/khoixnguyen" target="_blank">
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<Icon as={IoLogoInstagram} />}
                >
                  @khoixnguyen
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link href="https://discord.gg/" target="_blank">
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<Icon as={IoLogoDiscord} />}
                >
                  Discord - @kisuvn
                </Button>
              </Link>
            </ListItem>
          </List>

          <SimpleGrid columns={[1, 2, 2]} gap={6}>
            <GridItem
              href="https://www.youtube.com/ezcoin"
              title="EZ Coin"
              thumbnail={thumbEzCoin}
            >
              My YouTube channel
            </GridItem>
          </SimpleGrid>

          <Box align="center" my={4}>
            <NextLink href="/posts">
              <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
                Popular posts
              </Button>
            </NextLink>
          </Box>
        </Section>
      </Container>
    </Layout>
  )
}
export default Page
