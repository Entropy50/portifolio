import Image from 'next/image';

import"./header.scss"



export function Header() {
    return (
        <div className="header">            
            <div>
                <h1>Oi, eu sou o Wellington 👋</h1>
                <h2>Estudante de Engenharia de Software</h2>
            </div>
            <Image
                src="/me.jpg"
                alt="Logo"
                width={325}
                height={310}
                priority 
            />
        </div>
        )
}
 

