interface AcordeonProps {
    title: string;
    description: string;
    className?: string;
    id: number;
}

const Acordeon = ({ title, description, className, id }: AcordeonProps) => {
  return (
    <div className={`row-span-3 grid grid-cols-12 border-4 ${className}`

    
    }>
        {id % 2 !== 0 ? (<>
        <h2 className="text-4xl flex col-span-6 w-full h-full items-center text-center justify-center">{title}</h2>
        <p className="col-span-6 p-20 text-lg">{description}</p></>
        ) : (<>
        <p className="col-span-6 p-6">{description}</p>
        <h2 className="text-4xl flex col-span-6 w-full h-full items-center text-center justify-center">{title}</h2></>
        ) }
        
      </div>
  )
}

export default Acordeon