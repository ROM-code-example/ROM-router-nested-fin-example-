import { useOutletContext,useParams } from "react-router-dom"

import "./User.css"
const User = () => {
const [currentUser]=useOutletContext();
let { userId }=useParams();
// const rr = currentUser.find(p =>  userId == p.id  );
// console.log(rr);

    return (
        <div>
            <h2>This is User page </h2>
            {currentUser.filter(person => person.id == userId).map(filteredPerson => (
        <li key={userId}>
          {filteredPerson.name}
        </li>
      ))}
        </div>
    )

}

export default User