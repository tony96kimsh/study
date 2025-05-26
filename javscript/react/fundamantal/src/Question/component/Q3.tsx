// Q3.tsx
interface GreetingProps {
    name: string;
}

const Greeting:React.FC<GreetingProps> = ({name}) => {

    return (
        <>
            안녕하세요 {name} 님
        </>
    )
}

export default Greeting;