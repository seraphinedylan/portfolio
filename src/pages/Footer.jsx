function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <div className="flex w-full flex-col items-center gap-12 bg-background px-8 py-12 text-sm md:flex-row md:justify-between md:px-20 md:py-10">
      <div className="flex flex-col gap-2 text-center md:flex-row md:gap-4">
        <p>Developed by</p>
        <p>&copy; {currentYear} Dylan Séraphine</p>
      </div>
      <p className="flex justify-center gap-4 md:justify-end">
        <a href="https://github.com/me"> GitHub</a>
        <a href="https://codepen.io/me"> Linkedin</a>
      </p>
    </div>
  );
}

export default Footer;
