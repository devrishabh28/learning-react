import { people } from "../../../data";
import Person from "./Person";

const List = () => {
    return (
        <article>
            {people.map(person => <Person {...person} key={person.id}/>)}
        </article>
    );
}

export default List;