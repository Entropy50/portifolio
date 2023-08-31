import { SectionTitle } from "../sectionTitle/section-title"
import "./information.scss"

export function Info(){
    return(
        <div className="infos">
        <SectionTitle text="Linguagem"/>
        <div className="languages-info">
          <span>PT-BR - Nativo</span>
        </div>
        <SectionTitle text="Graduação"/>
        <div className="educational-info">
          <span>🎓</span>
          <span> Centro Universitário Fundação Assis Gurgacz - Engenharia de Software.</span>
        </div>
      </div>
    )
}