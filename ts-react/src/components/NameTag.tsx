type NameTagProps = {
    name:string
}
const NameTag = ({name}:NameTagProps)=>{
    return (
        <main>
            <header>
                    <h1>Hello</h1>
                    <p>Name Is</p>
            </header>
            <section className="display-name">
                    <p>{name}</p>
            </section>
            <footer/>
        </main>
    )
}

export default NameTag