import Experimage from "./Experimage"
import Button from "./button"

export default function Work(){
    return(
        <div className="work">
            <div className="work-container">
                <div className="row">
                    <button>Work</button>
                    <h3>Some of the noteworthy projects I have built:</h3>
                </div>
                <div className="work-1">
                    <div className="work-1-1">
                        <Experimage/>
                    </div>
                    <div className="work-1-2">
                        <h3>Fiskill</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore aliquid soluta repellendus doloribus repellat porro consequatur error sapiente nesciunt neque!</p>
                        <div className="buttt">
                            <Button/>
                        </div>
                    </div>
                </div>
                <div className="work-1">
                    <div className="work-1-2">
                        <h3>Fiskill</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore aliquid soluta repellendus doloribus repellat porro consequatur error sapiente nesciunt neque!</p>
                        <div className="buttt"> <Button/></div>
                   </div>
                    <div className="work-1-1">
                        <Experimage/>
                    </div>
                </div>
            </div>
        </div>
    )
}