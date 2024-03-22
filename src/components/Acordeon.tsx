interface AcordeonProps {
    title: string;
    description: string;
}

const Acordeon = ({ title, description }: AcordeonProps) => {
  return (
    <div className="row-span-3 grid grid-cols-12 border-4">
        <h2 className="text-4xl flex col-span-6 w-full h-full items-center text-center justify-center">{title}</h2>
        <p className="col-span-6 p-6">{description}</p>
      </div>
  )
}

export default Acordeon