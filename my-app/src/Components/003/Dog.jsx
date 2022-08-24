import rand from "../../Functions/rand.js";
import randColor from "../../Functions/randColor.js";

function Dog() {

    if (rand(0, 1)) {
        return null; // jei gaunam 0 tuomet gaunam pirma komponenta , jei vieneta ,tuomet nieko negaunam. Tokie komponentai vadinasi conditional rendering
    }

    return (
        <>
            <h2 className="h2" style={{
                color: ['red', 'blue', 'orange'][randColor(0, 2)],
                fontSize: rand(0, 1) ? '40px' : null
                // null reiskia nieko, t.y. arba dedam 40px arba nieko. Tai gali buti ir komponentas, kuris tiesiog grazina Null.

            }}>Dog {true ? 'Jo' : 'Ne jo'}</h2>
            <h3 className={randColor(0, 1) ? 'dog' : 'cat'}>Big {rand(100, 999)}</h3>
        </>
    )
}

export default Dog;