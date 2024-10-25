import About from "@/components/about"
import Intro from "@/components/into"
import Projects from "@/components/projects"
import SectionDivider from "@/components/section-divider"
import Skills from "@/components/skills"

export default function Home() {
  return (
    <main className="flex flex-col items-center px-4">
      <Intro/>
      <SectionDivider/>
      <About/>
      <Projects/>
      <Skills/>
    </main>
  )
}
