import React from "react";

const AllClients = () => {
  const [clients, setClients] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
};

const getAllClients = async () => {
    try{
let result = await fetch("localhost:8080/user/api/users", {
headers: {
    Authorization: "Bearer" + localStorage.getItem("token"),
})

let json = await result.json();

setResults(json.Results); 
console.log(json);
} catch (err) {
console.log(err);
}

useEffect(() => {
  getAllClients();
}, []);




};


export default AllClients;
