export default function UserProfile({params}:any): JSX.Element{
    return( 
    <div className="flex flex-col items-center
    justify-center min-h-screen py-2">
        <h1 className="text-5xl mr-6 p-2 rounded bg-red">Profile</h1>
        <hr />
        <p className="text-4xl">profile page
        <span className="p-2 rounded ml-3 bg-orange-500 text-black">{params.id}</span>
        </p>
        
    </div>
    
    
    )
}