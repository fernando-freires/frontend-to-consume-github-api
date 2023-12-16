import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { client } from "../../services/user";
import {
  Column,
  Container,
  Item,
  TableContainer,
  TableHeader,
  TableItem,
  TableItems,
  User,
} from "./styles";

export function UserDetails() {
  const [user, setUser] = useState({});
  const [repos, setRepos] = useState([]);

  const { username } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (username) {
          const responseUserData = await client.get(
            `/users/${username}/details`
          );
          const responserepos = await client.get(`/users/${username}/repos`);
          setUser(responseUserData.data);
          setRepos(responserepos.data);
        }
      } catch (error) {
        console.error("Error fetching user details:", error.message);
      }
    };

    fetchData();
  }, [username]);

  return (
    <>
      <Container>
        <h1>User details</h1>
        <User>
          <Item>Id: {user.id}</Item>
          <Item>Login: {user.login}</Item>
          <Item>Profile URL: {user.url}</Item>
          <Item>Date of login creation: {user.created_at}</Item>
        </User>
      </Container>
      <TableContainer>
        <h1>Repositories table</h1>
        <TableHeader>
          <Column>ID:</Column>
          <Column>Name:</Column>
          <Column>URL repository:</Column>
        </TableHeader>
        {repos.map((repo) => (
          <TableItems key={repo.id}>
            <TableItem>{repo.id}</TableItem>
            <TableItem>{repo.name}</TableItem>
            <TableItem>{repo.html_url}</TableItem>
          </TableItems>
        ))}
      </TableContainer>
    </>
  );
}
