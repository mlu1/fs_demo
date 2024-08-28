import styles from './product-item.module.css'

function ButtonField (){
    return (
        <button className={styles.buttonStyle}>Click Me</button>
    )
}
function ProductItem({singleProductItem,key}){
    return (
        <div 
            style = {{padding:"20px",border:"2px solid red" ,marginBottom:"10px"}}
            key ={key}>
            <p className={styles.productTitle}> {singleProductItem}</p>
            <ButtonField/>
        </div>
    );
}

export default ProductItem;