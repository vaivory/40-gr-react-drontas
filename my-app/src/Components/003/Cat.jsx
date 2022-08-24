import randColor from "../../Functions/randColor"

function Cat() {


    return randColor(0, 1) ? <h1>Pilkis</h1> : <h2>Meskutis</h2>

}

export default Cat;