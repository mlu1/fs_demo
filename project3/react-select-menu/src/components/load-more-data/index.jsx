import { useEffect,useState} from "react"
import './more-data-styles.css'

export default function LoadMoreData(){

    const [loading,setLoading] = useState(false)
    const [products,setproducts] = useState([])
    const [count,setCount] = useState(0)
    const [disableButton,setDisableButton] = useState(false)

    async function fetchProducts(){
        try{
            setLoading(true)
            const response = await fetch(`https://dummyjson.com/products?limit=20&skip=${
                count===0?0:count*20
                }
            `);
            const result   = await response.json();

            if(result){
                setproducts((prevData)=>[...prevData,...result.products])
                setLoading(false)
            }
            console.log(result)
        }catch(e){
            console.log(e)
            setLoading(false)
        }
    }

    useEffect(()=>{
        fetchProducts();
    },[count]);

    useEffect(() =>{
        if(products && products.length === 100)setDisableButton(true)
    },[products])

    if(loading){
        return(
            <div>Loading data ! Please wait</div>
        )
    }

    return (
        <div className="load-more-container">    
                <div className="product-container">
                    {products?
                        products.map(item =>(
                        <div className="product" key = {item.id}>
                            <img src = {item.thumbnail} alt = {item.title}/>
                            <p>{item.title}</p>
                        </div>))
                        :null}
                </div>
                <div className="button-container">
                    <button id='button1' disabled ={disableButton} onClick ={() => setCount(count+1)}>Load More</button>
                    { disableButton ?  <p>You have reached the maximum producs</p> :null}
                </div>            
        </div>
    )
}