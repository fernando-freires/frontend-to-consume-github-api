import { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { client } from "../../services/user";
import { Container, User } from "./styles";

export function UsersList() {
  const navigate = useNavigate();
  const [usersList, setUsersList] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const fetchUsers = useCallback(async () => {
    try {
      const response = await client.get(
        `/users?since=${(currentPage - 1) * itemsPerPage}`
      );
      setUsersList(response.data);
    } catch (error) {
      console.error("Error fetching GitHub profiles:", error.message);
    }
  }, [currentPage, itemsPerPage]);

  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  return (
    <Container>
      <h1>Users profiles list:</h1>
      {usersList.map((user) => (
        <User
          key={user.id}
          onClick={() => navigate(`user/${user.login}/details`)}
        >
          <p>ID: {user.id}</p>
          <p>Login: {user.login}</p>
        </User>
      ))}
      {usersList.length === 0 && <p>Profiles not found =/</p>}
      <div>
        <button
          disabled={currentPage === 1}
          onClick={() => handlePageChange(currentPage - 1)}
        >
          Back
        </button>
        <span>Page {currentPage}</span>
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={usersList.length === 0}
        >
          Next
        </button>
      </div>
    </Container>
  );
}
