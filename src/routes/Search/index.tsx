import Button from "../../components/Button";
import Header from "../../components/Header";
import "./styles.css";

export default function Search() {
  return (
    <>
      <Header />
      <main>
        <section className="user-card-container">
          <h1>Encontre um perfil Github</h1>
          <form name="user">
            <div className="user-form-control">
              <label htmlFor="userName">Usuário</label>
              <input
                name="userName"
                id="usesrName"
                type="text"
                placeholder="Usuário Github"
              />
            </div>
          </form>
          <div>
            <Button text="Encontrar" />
          </div>
        </section>
      </main>
    </>
  );
}
