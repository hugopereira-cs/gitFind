import { useState } from "react";
import { Header } from "../../components/Header/Header.jsx";
import background from "../../assets/background.png";
import { Input } from "../../components/Input/Input.jsx";
import { Button } from "../../components/Button/Button.jsx";
import { ItemList } from "../../components/ItemList/ItemList.jsx";

import "./index.css";

function App() {
	const [user, setUser] = useState("");
	const [currentUser, setCurrentUser] = useState("");
	const [repos, setRepos] = useState(null);

	const handleGetData = async () => {
		const reposData = await fetch(`https://api.github.com/users/${user}`);
		const newUser = await reposData.json();
		
    if (newUser.name) {
      const { avatar_url, name, bio, login } = newUser;
      setCurrentUser({ avatar_url, name, bio, login });

      const reposData = await fetch(`https://api.github.com/users/${user}/repos`);
		  const newRepos = await reposData.json();

      if (newRepos.length) {
        setRepos(newRepos);
      }
    }
		

	};

	return (
		<div className="App">
			<Header />

			<div className="content">
				<img src={background} className="background" alt="Imagem de fundo" />
				<div className="searchInfo">
					<div className="searchBar">
						<Input value={user} onChange={(e) => setUser(e.target.value)} />
						<Button onClick={handleGetData} />
					</div>
          {currentUser?.name ? (
            <>
            <div className="profile">
              <img
                src={currentUser.avatar_url}
                className="profilePhoto"
                alt="Imagem de perfil"
              />
              <div className="profileInfo">
                <div className="profileName">
                  <h3>{currentUser.name}</h3>
                  <span>@{currentUser.login}</span>
                </div>
                <p>{currentUser.bio}</p>
              </div>
            </div>
            <hr />
            </>
          ) : ''}
          {repos?.length ? (
            <div className="repos">
              <h2>Repositórios</h2>
              {repos.map(repo => (
                <ItemList key={repo.id} title={repo.name} description={repo.description} />
              ))}
          </div>
          ) : ''}
				</div>
			</div>
		</div>
	);
}

export default App;
