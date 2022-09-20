import {
    Container,
    Badge,
    Link,
    List,
    ListItem,
    AspectRatio
  } from '@chakra-ui/react'
  import { ExternalLinkIcon } from '@chakra-ui/icons'
  import { Title, WorkImage, Meta } from '../../components/project'
  import P from '../../components/paragraph'
  import Layout from '../../components/layouts/article'
  
  const Project = () => (
    <Layout title="Notepad">
      <Container>
        <Title>
          Notepad Application <Badge>2021-</Badge>
        </Title>
        <P>
          A note-taking desktop application which supports features such as: Bold,
          Italics, Headings, List, Code, Blockquotes and Dash.
        </P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Platform</Meta>
            <span>Windows/macOS</span>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>Tauri, React JS</span>
          </ListItem>
        </List>
  
        <WorkImage src="/images/notepad-app-eyecatch.png" alt="notepad" />
      </Container>
    </Layout>
  )
  
  export default Project
  export { getServerSideProps } from '../../components/chakra'