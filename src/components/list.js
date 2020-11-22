import React from 'react';
import ls from 'local-storage'



//Locla Sotrage Land
const listArray = []
{/* <ListGroup.Item variant="success">Never gonna give you up</ListGroup.Item>
<ListGroup.Item variant="success">Never gonna let you down</ListGroup.Item>
<ListGroup.Item variant="success">Never gonna run around</ListGroup.Item>
<ListGroup.Item variant="danger">And</ListGroup.Item>
<ListGroup.Item variant="success">Desert you</ListGroup.Item> */}

function List(){
    
    const [newRepo, setNewRepo] = useState('');
    const [repos, setRepos] = useState([]);
    const [loading, setLoading] = useState(false);


    useEffect( () => {
        const localRepoItems = localStorage.getItem('repos')

        if(localRepoItems) {
            return(
                <>

                </>
            )
        }
        if(item state is 'secondary') {
            setCount
        }
        else()
    })

}

export default List;


