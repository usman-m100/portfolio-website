import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Section from '../components/section'
import { ProjectGridItem } from '../components/grid-item'
import thumbNotes from '../public/images/notepad-app-eyecatch.png'
import Layout from '../components/layouts/article'

const Projects = () => {
    return (
        <Layout>
            <Container>
                <Heading as="h3" fontSize={20} mb={4}>
                    Projects
                </Heading>

                <SimpleGrid columns={[1, 1, 2]} gap={6}>
                    <Section>
                        <ProjectGridItem id="notepad" title="Notebook" thumbnail={thumbNotes}>
                            A note-taking desktop application - using Tauri and ReactJS
                        </ProjectGridItem>
                    </Section>
                    <Section>
                    </Section>
                </SimpleGrid>
            </Container>
        </Layout>
    )
}

export default Projects