function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div>
          <h3>Justice Access America</h3>
          <p>Justice. Resources. Access.</p>
        </div>

        <div className="footer-links">
          <a href="#home">Home</a>
          <a href="#resources">Resources</a>
          <a href="#know-your-rights">Know Your Rights</a>
          <a href="#about">About</a>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {year} Justice Access America. All rights reserved.</p>

        <p>
          Educational information only. This website does not provide legal
          advice.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
