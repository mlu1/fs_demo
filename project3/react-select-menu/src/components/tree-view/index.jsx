import MenuList from "./menu-list";
import './styles.css'
import PropTypes from prop-PropTypes;

TreeView.propTypes = {
    menus: PropTypes.array.isRequired,
  };
export default function  TreeView({menus=[]}){

    /* Render the label and check if there children or not*/

    return (
        <div className = "tree-view-container">
                {
                    <MenuList list = {menus}/>
                }
        </div>
    )
}