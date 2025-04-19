export default async function About() {
  return (
    <div className="min-h-screen flex flex-col  items-center justify-center bg-gray-100 text-gray-800  px-10 md:-pt-20  ">
      <div className="container">
        <h2 className="text-4xl font-bold mb-8 text-center sm:text-left">
          About Me
        </h2>
        <p className="text-lg leading-relaxed text-muted-foreground">
          Hi, I’m <strong className="text-primary">Wansing Bunkiatsakul</strong>{" "}
          — a passionate programmer on a journey of constant growth. I believe
          in learning by doing, and every line of code I write is a step toward
          mastering my craft. From practicing fundamentals to exploring new
          technologies, I strive to improve every day and push beyond
          boundaries.
          <br />
          <br />
          Feel free to reach out at{" "}
          <a
            href="mailto:wansing05@gmail.com"
            className="text-primary hover:underline font-medium"
          >
            wansing05@gmail.com
          </a>
          — I’m always open to connect, collaborate, or just chat tech.
        </p>
      </div>
    </div>
  );
}
