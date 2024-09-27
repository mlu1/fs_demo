function CommonInput({label,onChange,type,name,id,value,placeholder}){
    return(
        <div>
            <label htmlFor={name}>{label}</label>
            <input  name= {name}
                    id ={id}
                    placeholder={placeholder || 'Enter value here'}
                    value ={value}
                    type={type || 'text'}
                    onChange={onChange}/>
        </div>
    )
}

export default CommonInput