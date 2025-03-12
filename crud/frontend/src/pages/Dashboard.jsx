import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Dashboard = () => {
    const navigate = useNavigate();
    const [user, setUser] = useState(null);
    const [studentData, setStudentData] = useState([
        {
            name: 'Yash',
            age: '22',
            grade: 'A'
        }
    ])

    useEffect(() => {
        const fetchDashboard = async () => {
            try {
                const response = await axios.get("http://localhost:8000/api/dashboard", {
                    headers: { Authorization: `Bearer ${localStorage.getItem("token")}` }
                });

                if (response.data.success) {
                    setUser(response.data.user);
                } else {
                    navigate("/login"); // Redirect if unauthorized
                }
            } catch (error) {
                console.error("Dashboard fetch error:", error);
                navigate("/login"); // Redirect on error
            }
        };

        fetchDashboard();
    }, [navigate]);

    return (
        <div>
            {user ? (
                <h1>Welcome, {user.name}!</h1>
            ) : (
                <h1>Loading...</h1>
            )}



            <div>
                <div>
                    <button>Add Student</button>
                </div>
                <div>
                    <table>
                        <thead>
                            <th>Student Name</th>
                            <th>Age</th>
                            <th>Grade</th>
                        </thead>
                        <tbody>
                            {studentData.map((item, idx) => (
                                <tr key={idx}> {/* Always provide a unique key */}
                                    <td>{item.name}</td>
                                    <td>{item.age}</td>
                                    <td>{item.grade}</td>
                                    <td>
                                        <button>Edit</button>
                                        <button>Delete</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
