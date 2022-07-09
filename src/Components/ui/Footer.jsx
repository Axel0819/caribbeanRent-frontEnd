import { Container } from "@mui/material";

export const Footer = () => {
  return (
    <footer className="footer-border-top py-3" >
      <Container>
        <div className="flex justify-content-between flex-wrap">
          <p>
            © <span style={{color: "#4EC3BD"}}>Caribbean Rent</span>. Aviso legal. Todos los derechos reservados.
          </p>

          <div className="flex gap-20 align-items-center">
            <i className="fa-brands fa-facebook color-face icon-size"></i>
            <i className="fa-brands fa-instagram color-instagram icon-size"></i>
            <i className="fa-brands fa-twitter color-twitter icon-size"></i>
          </div>
        </div>
      </Container>
    </footer>
  );
}
