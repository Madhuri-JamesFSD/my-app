import * as operations from "../../Math";

function Body() {
    return (
        <ul>
            <li>Value of pi :{operations.default}</li>
            <li>Add of 1,2,3,4,5 : {operations.add(1, 2, 3, 4, 5)}</li>
            <li>Mul of 1,2,3,4,5 : {operations.mul(1, 2, 3, 4, 5)}</li>
            <li>Sub of 1,2,3,4,5 : {operations.sub(1, 2, 3, 4, 5)}</li>
        </ul>
    );
}

export default Body;