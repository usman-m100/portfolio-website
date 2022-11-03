
import NextLink from 'next/link'
import {
  Link,
  Container,
  Heading,
  Box,
  SimpleGrid,
  Button,
  List,
  ListItem,
  useColorModeValue,
  chakra,
  Icon
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Paragraph from '../components/paragraph'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { GridItem } from '../components/grid-item'
import { IoLogoGithub, IoLogoBehance } from 'react-icons/io5'

const Page = () => {
    return (
        <Layout>
            <Container>
                <Box borderRadius="lg" bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')} p={3} mb={6} align="center">
                    Hello, I&apos;m a software developer based in the UK!
                </Box>

                <Box display={{ md: 'flex' }}>
                    <Box flexGrow={1}>
                        <Heading as="h2" variant={"page-title"}>
                            Usman Jamshaid
                        </Heading>
                        <p>Developer / Designer</p>
                    </Box>
                </Box>

                <Section delay={0.1}>
                    <Heading as="h3" variant="section-title">
                        About Me
                    </Heading>
                    <Paragraph>
                        Hi, I&apos;m a software developer with a strong will to
                        learn, research new technologies, and design software architecture.
                        I like creating practical business solutions and making development
                        processes as efficient as possible.All coding projects are built from 
                        the ground up, from planning and designing all the way to solving real-life 
                        problems with code. When I&apos;m not on my computer I like to go swimming,
                        play chess and football.
                        <Box align="center" my={4}>
                            <NextLink href="/projects">
                                <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">My Projects</Button>
                            </NextLink>
                        </Box>
                    </Paragraph>
                </Section>

                <Section delay={0.3}>
                    <Heading as="h3" variant="section-title">
                        On the web
                    </Heading>
                    <List>
                        <ListItem>
                            <Link href="https://github.com/usman-m100" target="_blank">
                                <Button variant="ghost" colorScheme="teal" leftIcon={<Icon as={IoLogoGithub} />}>
                                    @usman-m100
                                </Button>
                            </Link>
                        </ListItem>
                        <ListItem>
                            <Link href="https://www.behance.net/mobdzn" target="_blank">
                                <Button variant="ghost" colorScheme="teal" leftIcon={<Icon as={IoLogoBehance} />}>
                                    @mobdzn
                                </Button>
                            </Link>
                        </ListItem>
                    </List>
                </Section>
            </Container>
        </Layout>
    )
}

export default Page