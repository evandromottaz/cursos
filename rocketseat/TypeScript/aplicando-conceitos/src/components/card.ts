type CardProps = {
    name: string;
    age?:number;
}

export function Card(props: CardProps) {
    return (
        props.name
    )
    
}