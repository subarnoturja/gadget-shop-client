import useAuth from "../../hooks/useAuth";

const Overview = () => {

    const { user } = useAuth();

    return (
        <div className="flex items-center justify-center w-full h-full">
            <h1 className="text-xl font-bold text-center">{user.email}</h1>
            <img className="w-auto rounded-3xl" src={user.photoURL} />
        </div>
    );
};

export default Overview;