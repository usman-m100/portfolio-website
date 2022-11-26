import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Section from '../components/section'
import { ProjectGridItem } from '../components/grid-item'
import thumbGameEngine from '../public/images/game-engine.png'
import thumbtodo from '../public/images/todo1.png'
import thumbmain from '../public/images/main.png'
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
                        <ProjectGridItem id="todo" title="Todo App" thumbnail={thumbtodo}>
                            Todo Application - Made with React
                        </ProjectGridItem>
                    </Section>
                    <Section>
                        <ProjectGridItem id="facebook" title="Facebook Clone" thumbnail={thumbmain}>
                            Facebook Clone - Made with Next & Firebase
                        </ProjectGridItem>
                    </Section>
                </SimpleGrid>
            </Container>
        </Layout>
    )
}

export default Projects
