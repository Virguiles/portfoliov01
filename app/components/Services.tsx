"use client";

import { TextRevealByWord } from "./ui/text-reveal";
import { cn } from "@/lib/utils";

interface CardBackgroundProps {
  title: string;
  description: string;
  backgroundImage: string;
  hoverImage: string;
}


export function TextRevealServices() {
  return (
    <div className="relative flex items-center justify-center">
      <div className="absolute inset-0 flex items-center justify-center opacity-20 font-mono text-xs whitespace-pre overflow-hidden">
        <pre className="transform scale-[0.4] md:scale-[0.6] lg:scale-[0.8]">
          {  `                                                                                                          
                   00000                                                  
                                      000110000001001000101                                          
                                      10000010100010001000001                                        
                                  10100010100000100010001010011 1                                    
                                0010001000000100100000100000000011                                   
                             10010001000001000000101000000101010000                                  
                             000010000100001010100000100100000001001                                 
                            010100101001010100110111001001010110001000                               
                           110000100010110111     111      111011000100                              
                         101001000111111                       10101001                              
                    10 11010000010101111                        11000001                             
                       0010010100101 1                         1 1101010                             
                   1  1 1000000010111 1                          1100001                             
                       10010101001111                           1 110101                             
                     100010000010101111                          11110001                            
                     0100010010011111                            1111011                             
                     10100000011011111                     1101110011100                             
                   0000000101001110100000101011         1100010001101101                             
                 1010001000000010111111110011011       111111    11111011                            
                11000100010010011110111   11010111    1101 000110101  101                            
                 010000100011001101110101000  1111      1   1  111   1111                            
                   11100100111001   111111 111         1    11       11 1                            
                  00000000010101111                                  11 1                            
                 010110101011 11111             1 1   1              11 1                            
                    001 0000111101  1            1                   11                              
                    011010100111111            1 1                  11 1                             
                     0000000001 11111         111         1        1110                              
                     01  0101001 11111         11011111011        1111                               
                     01000001000011111     1 1 11  101   11         11                               
                      11 11000010010111    111         1111011   1  11                               
                      0       10001111 1    10110101101111 1       11                                
                       0   1   10001111 1     111 1 1            111                                 
                                10010111111 1     1111        1 111                                  
                               0001111011111                  1111                                   
                                01 111110111111            1111111                                   
                                   111  11011111111      1111011 1                                   
                                    111 11110101011111111010111 11                                   
                                     11      11111010101111111  111                                  
                             1        1    1111111 11   1111111110                                   
                             1             1111111  1    11111 111   11                              
                                       1 11    111 111 1111111111    111                             
                              1             1     1111  1 111110  1   11                             
                               1       1 1      1        11  10    1 11                              
                                1      1           11    1 110   11  1         1      1              
                                  1       1          11111101  11  1          1                      
                                   11              1    101 01111    1   1          1                
            1                         1       1   11    11 110  1       1                  1  1 111  
                                        1     1  11 1  1  1110                                11     
                                          1     1      1    10  11                                111
                                            1  1      10  1   1 1                                 1  
1                                                       11                                      11 11
                                       1          1  1                                  1          11
                                      1             1                                      11     1 1
1      1                         1          1                                               1     111
     1   1                 1                     1                                                111
    1     11           1           1                       1                  1              1     11
    1      1                                                  1                                    11
           11                                         1             1                              11
1           11                                        1        1                                  111                                                                                                                                         
                                                                       
`}
        </pre>
      </div>
      <div className="w-full max-w-4xl mx-auto p-2 relative z-10">
        <TextRevealByWord text="Vous avez besoin d'un développeur pour créer ou mettre à jour votre site ?" />
      </div>
    </div>
  );
}


const servicesData = [
  {
    title: "Sites internet",
    description: "Je conçois et crée des sites web adaptés à vos besoins. De l'idée initiale à la réalisation finale je vous accompagne à chaque étape de votre projet pour développer un univers graphique unique et entièrement personnalisé, qui reflète votre vision",
    backgroundImage: "https://images.pexels.com/photos/2004161/pexels-photo-2004161.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    hoverImage: "https://i.gifer.com/uXC.gif"
  },
  {
    title: "Développement web sur mesure",
    description: "Que ce soit pour une mise à jour ou une création complète, je vous accompagne dans votre projet avec expertise et engagement. Grâce à mes compétences, je propose des solutions simples, efficaces et adaptées pour vous aider à vous démarquer dans votre domaine.",
    backgroundImage: "https://images.unsplash.com/photo-1561070791-2526d30994b5",
    hoverImage: "https://i.gifer.com/5toD.gif"
  },
  {
    title: "Référencement naturel (SEO)",
    description: "Votre site internet manque de visibilité ? J'optimise votre référencement naturel pour améliorer votre position sur Google et attirer plus de visiteurs. Grâce à une prestation SEO sur mesure, votre site se démarquera efficacement.",
    backgroundImage: "https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=1200",
    hoverImage: "https://i.giphy.com/media/l3vRfNA1p0rvhMSvS/giphy.gif"
  }
]

export default function ServiceCard({ 
  title, 
  description, 
  backgroundImage, 
  hoverImage 
}: CardBackgroundProps) {
  return (
    <div className="max-w-xs w-full m-3">
      <div
        style={{
          backgroundImage: `url("${backgroundImage}")`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
        className={cn(
          "group w-full cursor-pointer overflow-hidden relative card h-96 rounded-md shadow-xl mx-auto flex flex-col justify-end p-4",
          "hover:scale-105 transition-transform duration-300",
          "border-4 border-white",
        )}
        onMouseEnter={(e) => {
          e.currentTarget.style.backgroundImage = `url("${hoverImage}")`;
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.backgroundImage = `url("${backgroundImage}")`;
        }}
      >
        <div className="text relative z-50">
          <div className="absolute inset-0 bg-black/50 -z-10" />
          <h1 className="font-bold text-xl md:text-3xl text-gray-50 relative">
            {title}
          </h1>
          <p className="font-normal text-base text-gray-50 relative my-4">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}

export function ServicesSection() {
  return (
    <div className="flex flex-wrap justify-center gap-4 p-8">
      {servicesData.map((service, index) => (
        <ServiceCard
          key={index}
          {...service}
        />
      ))}
    </div>
  );
}