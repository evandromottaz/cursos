type Person = {
    name:string;
    time:string;
}

export function Card({name, time}:Person) {
    return (
        <div className="h-[100px] w-2/4 bg-[#735bf2] text-white rounded-[10px] mb-5 flex items-center justify-between p-6">
            <strong className="text-lg">{name}</strong>
            <small>{time}</small>
        </div>
    )
}