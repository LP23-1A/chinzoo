export default function Step (){
    return(
        <div className="w-[100%] h-[100vh] bg-white flex justify-center items-center">
            <ul className="steps steps-vertical lg:steps-horizontal">
                <li className="step step-primary">Register</li>
                <li className="step step-primary">Choose plan</li>
                <li className="step">Purchase</li>
                <li className="step">Receive Product</li>
            </ul>
        </div>
    )
}