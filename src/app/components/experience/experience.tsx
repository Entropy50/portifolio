import Image from "next/image"
import { SectionTitle } from "../sectionTitle/section-title"

import "./experience.scss"
import { Skill } from "../skill/skill"

export function Experience(){
    return(
        <div className="experience">
          <SectionTitle text="Experiência"/>
          <p>2º Ano do curso Engenharia de Software e atualmente estou procurando meu lugar no mercado.</p>
          <div className="experience-time">
            <Skill image="/react.png" measure={1} years="1 ano"/>
            <Skill image="/js1.png" measure={2} years="2 anos"/>
            <Skill image="/ts.png" measure={1} years="1 ano"/>
            <Skill image="/java.png" measure={1} years="1 ano"/>
          
          </div>
        </div>
    )
}