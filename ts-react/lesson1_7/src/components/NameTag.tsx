export type NameTagProps = {
      name:string
};

const NameTag = (props:NameTagProps)=>{
    return (
        <main>
            <header>
                    <h1>Hello</h1>
                    <p>Name Is</p>
            </header>
            <section className="display-name">
                    <p>{props.name}</p>
            </section>
            <footer/>
        </main>
    )
}

export default NameTag