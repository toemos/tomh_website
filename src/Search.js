import './Search.css';

function Search(props) {
    return (
        <>
        <h1>{props.name}</h1>
        <form>
            <input type='search' placeholder={props.default}/>
        </form>
        </>
    )
}

export default Search