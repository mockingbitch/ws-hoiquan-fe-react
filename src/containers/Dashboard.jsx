import {useEffect} from 'react';
import {useHistory} from 'react-router';

const Dashboard = () => {
    let history = useHistory();
    useEffect(() => {
        const user = localStorage.getItem('user');
        console.log(user.firstName);
        if(!user) {
            history.push('/login');
        }
    }, [])

    return (
        <>
            <h1>This is Dashboard</h1>
        </>
    )
}

export default Dashboard;