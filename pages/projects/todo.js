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
    <Layout title="ToDo Application">
      <Container>
        <Title>
          ReactJS Todo App <Badge>2022-</Badge>
        </Title>
        <P>
          A To Do application made with React JS.
          <Link href="https://github.com/usman-m100/todo-application" target="_blank">
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
            <span>ReactJS, JavaScript, CSS</span>
          </ListItem>
        </List>
  
        <WorkImage src="/images/todo2.png" alt="notepad" />
      </Container>
    </Layout>
  )
  
  export default Project
  export { getServerSideProps } from '../../components/chakra'