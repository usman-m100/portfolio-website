import {
  Container,
  Badge,
  Link,
  List,
  Icon,
  Button,
  ListItem,
  AspectRatio
} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/project'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'
import { IoLogoGithub } from 'react-icons/io5'

const Project = () => (
  <Layout title="Wave Engine">
    <Container>
      <Title>
        Wave Game Engine <Badge>2022-</Badge>
      </Title>
      <P>
        A powerful game engine made from scratch which includes a built-in level editor
        (Work in progress).
        <Link href="https://github.com/usman-m100/wave-game-engine" target="_blank">
          <Button variant="ghost" colorScheme="teal" leftIcon={<Icon as={IoLogoGithub} />}>
            Link to Project
          </Button>
        </Link>
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Windows/macOS</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>C++, C#, XML, WPF</span>
        </ListItem>
      </List>

      <WorkImage src="/images/game-engine-2.png" alt="notepad" />
    </Container>
  </Layout>
)

export default Project
export { getServerSideProps } from '../../components/chakra'