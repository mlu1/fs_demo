import MenuItem from "./menu-item";

MenuList.propTypes = {
    list: PropTypes.array.isRequired,
  };

export default function MenuList({list = []}){
    return (
        <ul className="menu-list-container">
            {
                list && list.length ?
                list.map((listItem) => <MenuItem item = {listItem}/>)
                :null
            }
        </ul>
    )
}