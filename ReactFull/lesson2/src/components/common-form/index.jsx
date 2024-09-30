import CommonInput from "../common-input"
function CommonForm({formControls = []}){
    
    const formTypes = {
        INPUT :'input',
        SELECT :'select',
        TEXTAREA:'textarea'
    }


    /* render the components */
    function renderFormElement(getCurrentElement){
        let content =null;  
        switch (getCurrentElement?.componentType) {
            case formTypes.INPUT:
                content = <CommonInput
                        label={getCurrentElement.label} 
                        name = {getCurrentElement.name} 
                        id = {getCurrentElement.id}
                        placeholder={getCurrentElement.placeholder}
                        value={formData[getCurrentElement.name]}/>
                break;
            default:
                break;
        }
    }

    return (
        <form>
            {
                formControls?.length ? formControls.map(singleFormElement =>
                    renderFormElement(singleFormElement)):null
            }
        </form>
    )
}

export default CommonForm