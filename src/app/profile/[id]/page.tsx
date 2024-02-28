export default function UserProfile({params}:any): JSX.Element{
    return( 
    <div className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
        <h1>Profile</h1>
        <hr />
        <p className="text-4xl text-white">profile page
        <span className="text-orange ml-4 bg-black">{params.id}</span>
        </p>
        
    </div>
    
    
    )
}