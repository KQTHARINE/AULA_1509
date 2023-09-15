function SayMyNome(props){
    return(
        <div classname="SayMyNome">
            <p> Qual o nome do palhaço: {props.nome} </p>
            <p> Qual a idade do palhaço: {props.idade} </p>
            <p> Qual a profissão do palhaço: {props.prof} </p>
        </div>
    )
}

export default SayMyNome