"use client"

import React, { useEffect } from 'react'
import SectionHeading from './section-heading'
import { motion } from 'framer-motion'
import { useSectionInView } from '@/lib/hooks'

export default function About() {

 const { ref } = useSectionInView("About", 0.2);
  
  return (
    <motion.section ref={ref} className='mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28'
     initial = {{ opacity: 0, y: 100}}
     animate = {{ opacity: 1, y: 0}}
     transition = {{delay: 0.175}}
     id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p>
        After graduating with a degree in{" "}
        <span className="font-medium">Mechanical Engineering</span>, I decided
        to pursue my passion for programming. I taught myself how to code and
        learned <span className="font-medium">front-end web development</span>.{" "}
        <span className="italic">My favorite part of programming</span> is the
        problem-solving aspect. I <span className="underline">love</span> the
        feeling of finally figuring out a solution to a problem. My core stack
        is{" "}
        <span className="font-medium">
          React, TypeScript, Javascript, HTML, CSS and Tailwind.{" "}
        </span>
        I am also familiar with Next.js, Node.js, Express and MongoDB. I am always looking to learn new technologies. I am currently looking for a{" "}
        <span className="font-medium">full-time position</span> as a software
        developer.
      </p>
      <br/>
      <p>
        <span className="italic">When I'm not coding</span>, I enjoy reading,
        watching movies, and riding my motorcycle. I also enjoy{" "}
        <span className="font-medium">learning new things</span>. I am currently
        learning about{" "}
        <span className="font-medium">philosophy and astronomy</span>. I'm also
        learning how to play the piano.
      </p>
    </motion.section>
  );
}
