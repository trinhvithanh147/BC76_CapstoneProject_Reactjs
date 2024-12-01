
import ItemMadeFiverr from './ItemMadeFiverr'

const MadeFiverr = () => {
    return (
      <section className="container">
        <div className="py-10 flex flex-col gap-10">
          <h2 className="text-[48px] leading-[105%] tracking-[-1,44px] max-w-[720px]">
            Made on Fiverr
          </h2>
          <div>
            <div>
              <div className="flex h-[1240px] w-full items-start  content-start flex-col  flex-wrap overflow-hidden">
              <ItemMadeFiverr image={"/LIVING_3.jpg"} order={1} content={"Architecture & Interior Design"} actor={"pintalsari"}/>
              <ItemMadeFiverr image={"/1.jpg"} order={2} content={"Architecture & Interior Design"} actor={"madushan1011"}/>
              <ItemMadeFiverr image={"/01.jpg"} order={3} content={"Architecture & Interior Design"} actor={"hoangkhanhha"}/>
              <ItemMadeFiverr image={"/Chateau_du_Nuage_Logo.jpg"} order={4} content={"Architecture & Interior Design"} actor={"vy_design"}/>
              <ItemMadeFiverr image={"/Mockup_Daughters caffee and books_logo_1.jpg"} order={1} content={"Architecture & Interior Design"} actor={"leraynne"}/>  
              <ItemMadeFiverr image={"/Mockup.jpg"} order={2} content={"Architecture & Interior Design"} actor={"quynhnguyen639"}/>
              <ItemMadeFiverr image={"/Couple hugging.jpg"} order={3} content={"Architecture & Interior Design"} actor={"marcel_dezinero"}/>
              <ItemMadeFiverr image={"/pool house - 3 rev 03.webp"} order={4} content={"Architecture & Interior Design"} actor={"shariqattique49"}/>
              <ItemMadeFiverr image={"/Great room 1.jpg"} order={1} content={"Architecture & Interior Design"} actor={"bapzozo"}/>
              <ItemMadeFiverr image={"/550 LIVINGROOM V2 (1).jpg"} order={2} content={"Architecture & Interior Design"} actor={"ninojed"}/>
              <ItemMadeFiverr image={"/1 (1).jpg"} order={3} content={"Architecture & Interior Design"} actor={"trinh_thanh"}/>
              <ItemMadeFiverr image={"/Scene 3.jpg"} order={4} content={"Architecture & Interior Design"} actor={"tanloc04"}/>
              <ItemMadeFiverr image={"/RLD_5528.jpg"} order={1} content={"Architecture & Interior Design"} actor={"danhngoc52"}/>
              <ItemMadeFiverr image={"/Render-01.jpg"} order={2} content={"Architecture & Interior Design"} actor={"hoangsang12"}/>
              <ItemMadeFiverr image={"/The Eagle Nest-Unit A view 1 (3).jpg"} order={3} content={"Architecture & Interior Design"} actor={"duynguyen"}/>
              <ItemMadeFiverr image={"/HCM12218_TR.webp"} order={4} content={"Architecture & Interior Design"} actor={"tonymidi"}/>
              <ItemMadeFiverr image={"/IMG_4849.webp"} order={1} content={"Architecture & Interior Design"} actor={"midsummermad"}/>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
}

export default MadeFiverr
