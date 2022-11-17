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
  import { IoLogoFacebook } from 'react-icons/io5'
  
  const Project = () => (
    <Layout title="Facebook Clone">
      <Container>
        <Title>
          Facebook Clone <Badge>2022-</Badge>
        </Title>
        <P>
          An identical clone of Facebook which includes google authenticaion and firebase.
          <Link href="https://facebook-clone-snowy-three.vercel.app/" target="_blank">
            <Button variant="ghost" colorScheme="teal" leftIcon={<Icon as={IoLogoFacebook} />}>
              View Demo
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
            <span>Next, React, JavaScript, Tailwind CSS</span>
          </ListItem>
        </List>
  
        <WorkImage src="/images/main.png" alt="notepad" />
      </Container>
    </Layout>
  )
  
  export default Project
  export { getServerSideProps } from '../../components/chakra'